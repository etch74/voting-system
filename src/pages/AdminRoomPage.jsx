import { useState, useEffect } from "react";
import { dbSet, dbUpdate, dbListen, logoutAdmin, DEFAULT_ROOM } from "../firebase/db";
import { generateRoomCode, CREWMATE_COLORS, COLOR_NAMES, T } from "../constants";
import Crewmate from "../components/Crewmate";
import QRCode from "../components/QRCode";
import VoteTally from "../components/VoteTally";
import VoteResults from "../components/VoteResults";
import EjectionScreen from "../components/EjectionScreen";
import { Btn, Card, SectionLabel, PhasePill, Stars, Pill, Spinner } from "../components/ui";

export default function AdminRoomPage({ adminUser }) {
  const [rooms,        setRooms]        = useState(null);   // all rooms for this admin
  const [activeCode,   setActiveCode]   = useState(null);   // currently managed room code
  const [room,         setRoom]         = useState(null);   // live room data
  const [nameInput,    setNameInput]    = useState("");
  const [colorPick,    setColorPick]    = useState("Red");
  const [impostorCount,setImpostorCount]= useState(1);
  const [busy,         setBusy]         = useState(false);
  const [err,          setErr]          = useState("");
  const [showEjection, setShowEjection] = useState(false);
  const [showQR,       setShowQR]       = useState(false);
  const [copied,       setCopied]       = useState(false);
  const [prevPhase,    setPrevPhase]    = useState(null);

  // Listen to admin's rooms index
  useEffect(() => {
    const unsub = dbListen(`admins/${adminUser.uid}/rooms`, val => {
      setRooms(val || {});
    });
    return unsub;
  }, [adminUser.uid]);

  // Listen to active room
  useEffect(() => {
    if (!activeCode) { setRoom(null); return; }
    const unsub = dbListen(`rooms/${activeCode}`, val => {
      setRoom(val);
    });
    return unsub;
  }, [activeCode]);

  // Ejection screen trigger
  useEffect(() => {
    if (!room) return;
    if (prevPhase !== "results" && room.phase === "results" && room.kickedPlayer && room.kickedPlayer !== "skip") {
      setShowEjection(true);
    }
    setPrevPhase(room.phase);
  }, [room?.phase]);

  // Auto-pick available color
  const players     = room ? Object.values(room.players||{}) : [];
  const usedColors  = players.map(p=>p.color);
  useEffect(() => {
    const avail = COLOR_NAMES.filter(c=>!usedColors.includes(c));
    if (!avail.includes(colorPick) && avail.length>0) setColorPick(avail[0]);
  }, [usedColors.join(",")]);

  const wrap = async fn => { setBusy(true); try { await fn(); } finally { setBusy(false); } };

  // ── Room management ───────────────────────────────────────────────────────
  const createRoom = () => wrap(async () => {
    const code = generateRoomCode();
    const newRoom = { ...DEFAULT_ROOM, code, createdAt: Date.now(), adminUid: adminUser.uid };
    await dbSet(`rooms/${code}`, newRoom);
    await dbUpdate(`admins/${adminUser.uid}/rooms`, { [code]: { code, createdAt: Date.now() } });
    setActiveCode(code);
  });

  const deleteRoom = code => wrap(async () => {
    await dbSet(`rooms/${code}`, null);
    await dbSet(`admins/${adminUser.uid}/rooms/${code}`, null);
    if (activeCode === code) setActiveCode(null);
  });

  // ── Player management ──────────────────────────────────────────────────────
  const addPlayer = () => wrap(async () => {
    const name = nameInput.trim();
    if (!name) { setErr("Enter a name"); return; }
    if (players.find(p=>p.name.toLowerCase()===name.toLowerCase())) { setErr("Name taken"); return; }
    const id = `p_${Date.now()}`;
    await dbUpdate(`rooms/${activeCode}/players/${id}`, { id, name, color:colorPick, alive:true, isImpostor:false });
    setNameInput(""); setErr("");
  });

  const removePlayer = id => wrap(() => dbSet(`rooms/${activeCode}/players/${id}`, null));

  const assignImpostors = () => wrap(async () => {
    if (players.length < 2) { setErr("Need at least 2 players"); return; }
    const count = Math.min(impostorCount, Math.floor(players.length/2));
    const shuffled = [...players].sort(()=>Math.random()-0.5);
    const impostorIds = new Set(shuffled.slice(0,count).map(p=>p.id));
    impostorIds.forEach(id => console.log("Impostor:", players.find(p=>p.id===id)?.name)); // DEBUG
    const updates = {};
    for (const p of players) {
      console.log(`Setting ${p.name} (${p.id}) isImpostor=${impostorIds.has(p.id)}`); // DEBUG
       await dbUpdate(`rooms/${activeCode}/players/${p.id}`,{ isImpostor:impostorIds.has(p.id) }); 
      }

    // players.forEach(p => { updates[`rooms/${activeCode}/players/${p.id}/isImpostor`] = impostorIds.has(p.id); });
    
  });

  // ── Meeting controls ───────────────────────────────────────────────────────
  const startVoting = () => wrap(() =>
    dbUpdate(`rooms/${activeCode}`, { phase:"voting", votes:{}, votingOpen:true, kickedPlayer:"" })
  );

  const revealVotes = () => wrap(async () => {
    const votes = room.votes||{};
    const tally = {};
    Object.values(votes).forEach(v=>{ tally[v]=(tally[v]||0)+1; });
    const sorted = Object.entries(tally).sort((a,b)=>b[1]-a[1]);
    let kicked = "";
    if (sorted.length>0 && (sorted.length===1||sorted[0][1]!==sorted[1][1])) {
      kicked = sorted[0][0];
      if (kicked!=="skip") {
        const p = players.find(x=>x.name===kicked);
        if (p) await dbUpdate(`rooms/${activeCode}/players/${p.id}`, { alive:false });
      }
    }
    await dbUpdate(`rooms/${activeCode}`, { phase:"results", votingOpen:false, kickedPlayer:kicked });
  });

  const backToLobby = () => wrap(() =>
    dbUpdate(`rooms/${activeCode}`, { phase:"lobby", votes:{}, votingOpen:false, kickedPlayer:"" })
  );

  const resetRoom = () => wrap(async () => {
    const reset = { ...DEFAULT_ROOM, code:activeCode, createdAt:room.createdAt, adminUid:adminUser.uid };
    await dbSet(`rooms/${activeCode}`, reset);
  });

  const joinUrl = activeCode
    ? `${window.location.origin}/?room=${activeCode}`
    : "";

  const copyUrl = () => {
    navigator.clipboard.writeText(joinUrl).then(()=>{ setCopied(true); setTimeout(()=>setCopied(false),2000); });
  };

  const votes        = room?.votes||{};
  const alivePlayers = players.filter(p=>p.alive);
  const votedCount   = Object.keys(votes).length;
  const kickedObj    = players.find(p=>p.name===room?.kickedPlayer);
  const isImpostor   = kickedObj?.isImpostor||false;

  // ── ROOM LIST (no room selected) ──────────────────────────────────────────
  if (!activeCode) {
    return (
      <div style={{ minHeight:"100vh", background:T.bg, color:"#d0daf0", paddingBottom:32, position:"relative" }}>
        <Stars/>
        <div style={{ position:"relative", zIndex:1 }}>
          <header style={{ background:"linear-gradient(135deg,#0c0416,#090f20)", borderBottom:`2px solid ${T.accent}33`, padding:"14px 20px", display:"flex", alignItems:"center", gap:12 }}>
            <span style={{ fontSize:"1.8rem" }}>🔴</span>
            <div>
              <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.25rem", letterSpacing:"4px", color:T.accent }}>AMONG US</div>
              <div style={{ fontSize:"0.58rem", color:"#2a3a60", letterSpacing:"3px" }}>ADMIN PANEL</div>
            </div>
            <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
              <span style={{ fontSize:"0.65rem", color:"#3a4a6a" }}>{adminUser.email}</span>
              <button onClick={logoutAdmin} style={{ background:"none", border:"1px solid #1e2d50", color:"#3a4a6a", borderRadius:8, padding:"5px 10px", fontSize:"0.65rem", cursor:"pointer" }}>LOGOUT</button>
            </div>
          </header>

          <main style={{ maxWidth:600, margin:"0 auto", padding:"24px 14px" }}>
            <Card style={{ marginBottom:16, textAlign:"center" }}>
              <SectionLabel>Rooms</SectionLabel>
              <Btn onClick={createRoom} disabled={busy} color="#00cc77" full>
                + Create New Room
              </Btn>
            </Card>

            {rooms === null && <div style={{ textAlign:"center", padding:24 }}><Spinner/></div>}

            {rooms !== null && Object.values(rooms).length === 0 && (
              <div style={{ textAlign:"center", color:"#2a3a60", fontSize:"0.8rem", padding:24 }}>
                No rooms yet. Create one to start!
              </div>
            )}

            <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
              {Object.values(rooms||{}).sort((a,b)=>b.createdAt-a.createdAt).map(r => (
                <Card key={r.code}>
                  <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                    <div style={{ flex:1 }}>
                      <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.5rem", letterSpacing:"4px", color:"#4488ff" }}>{r.code}</div>
                      <div style={{ fontSize:"0.62rem", color:"#2a3a60", marginTop:2 }}>
                        Created {new Date(r.createdAt).toLocaleDateString()}
                      </div>
                    </div>
                    <Btn onClick={()=>setActiveCode(r.code)} color="#4488ff">MANAGE</Btn>
                    <Btn onClick={()=>deleteRoom(r.code)} disabled={busy} color="#c51111" danger>DELETE</Btn>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    );
  }

  // ── ROOM MANAGEMENT ───────────────────────────────────────────────────────
  if (!room) return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center" }}>
      <Stars/><div style={{ position:"relative", zIndex:1 }}><Spinner/></div>
    </div>
  );

  return (
    <div style={{ minHeight:"100vh", background:T.bg, color:"#d0daf0", paddingBottom:24, position:"relative" }}>
      <Stars/>

      {showEjection && room.kickedPlayer && room.kickedPlayer!=="skip" && (
        <EjectionScreen kickedPlayer={room.kickedPlayer} players={players} isImpostor={isImpostor} onDone={()=>setShowEjection(false)}/>
      )}

      <div style={{ position:"relative", zIndex:1 }}>
        <header style={{ background:"linear-gradient(135deg,#0c0416,#090f20)", borderBottom:`2px solid ${T.accent}33`, padding:"12px 16px", display:"flex", alignItems:"center", gap:10, flexWrap:"wrap", rowGap:8 }}>
          <button onClick={()=>setActiveCode(null)} style={{ background:"none", border:"1px solid #1e2d50", color:"#3a4a6a", borderRadius:8, padding:"5px 10px", fontSize:"0.65rem", cursor:"pointer" }}>← ROOMS</button>
          <div>
            <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.1rem", letterSpacing:"3px", color:T.accent }}>ROOM</div>
            <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.6rem", letterSpacing:"5px", color:"#4488ff", lineHeight:1 }}>{activeCode}</div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
            <PhasePill phase={room.phase}/>
            <button onClick={logoutAdmin} style={{ background:"none", border:"1px solid #1e2d50", color:"#3a4a6a", borderRadius:8, padding:"5px 10px", fontSize:"0.65rem", cursor:"pointer" }}>LOGOUT</button>
          </div>
        </header>

        {/* Join URL bar */}
        <div style={{ background:"#080d18", borderBottom:`1px solid ${T.border}`, padding:"10px 16px", display:"flex", gap:8, alignItems:"center", flexWrap:"wrap" }}>
          <span style={{ fontSize:"0.62rem", color:"#2a3a60", letterSpacing:"1px", flexShrink:0 }}>JOIN URL</span>
          <div style={{ flex:1, minWidth:0, background:"#0a0f1c", border:`1px solid ${T.border}`, borderRadius:8, padding:"6px 10px", fontSize:"0.72rem", color:"#4488ff", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>
            {joinUrl}
          </div>
          <button onClick={copyUrl} style={{ background:`${copied?"#00cc77":"#4488ff"}14`, border:`1px solid ${copied?"#00cc77":"#4488ff"}`, color:copied?"#00cc77":"#4488ff", borderRadius:8, padding:"6px 12px", fontSize:"0.68rem", cursor:"pointer", flexShrink:0, letterSpacing:"1px", transition:"all 0.2s" }}>
            {copied ? "COPIED ✓" : "COPY"}
          </button>
          <button onClick={()=>setShowQR(!showQR)} style={{ background:showQR?`${T.accent}14`:"transparent", border:`1px solid ${showQR?T.accent:"#2a3a60"}`, color:showQR?T.accent:"#3a4a6a", borderRadius:8, padding:"6px 12px", fontSize:"0.68rem", cursor:"pointer", flexShrink:0, letterSpacing:"1px" }}>
            {showQR?"HIDE QR":"QR CODE"}
          </button>
        </div>

        {/* QR Code panel */}
        {showQR && (
          <div style={{ background:"#080d18", borderBottom:`1px solid ${T.border}`, padding:"20px", display:"flex", flexDirection:"column", alignItems:"center", gap:12 }}>
            <QRCode url={joinUrl} size={200}/>
            <div style={{ fontSize:"0.65rem", color:"#2a3a60", letterSpacing:"2px", textAlign:"center" }}>
              Scan to join room <strong style={{ color:"#4488ff" }}>{activeCode}</strong>
            </div>
          </div>
        )}

        <main style={{ maxWidth:920, margin:"0 auto", padding:"16px 14px", display:"grid", gridTemplateColumns:"repeat(auto-fit,minmax(300px,1fr))", gap:16 }}>

          {/* LEFT: Players */}
          <Card>
            <SectionLabel>Crewmates</SectionLabel>
            {err && <div style={{ color:"#ff5555", fontSize:"0.72rem", marginBottom:8 }}>{err}</div>}
            <div style={{ display:"flex", gap:8, marginBottom:12 }}>
              <input value={nameInput} onChange={e=>{setNameInput(e.target.value);setErr("");}} onKeyDown={e=>e.key==="Enter"&&addPlayer()}
                placeholder="Player name…"
                style={{ flex:1, background:"#080d18", border:`1px solid ${T.border}`, color:"#d0daf0", borderRadius:9, padding:"9px 12px", fontSize:"0.82rem", outline:"none" }}/>
              <Btn onClick={addPlayer} disabled={busy||!nameInput.trim()} color="#00cc77">+ ADD</Btn>
            </div>

            {/* Color swatches */}
            <div style={{ display:"flex", flexWrap:"wrap", gap:7, marginBottom:12, padding:10, background:"#080d18", borderRadius:10, border:`1px solid ${T.border}` }}>
              {COLOR_NAMES.map(c=>(
                <button key={c} title={usedColors.includes(c)?`${c} (taken)`:c} onClick={()=>!usedColors.includes(c)&&setColorPick(c)} disabled={usedColors.includes(c)}
                  style={{ width:26, height:26, borderRadius:"50%", background:CREWMATE_COLORS[c], border:colorPick===c?"3px solid #fff":"2px solid transparent", cursor:usedColors.includes(c)?"not-allowed":"pointer", opacity:usedColors.includes(c)?0.2:1, padding:0, flexShrink:0, transition:"all 0.15s", boxShadow:colorPick===c?`0 0 10px ${CREWMATE_COLORS[c]}`:"none" }}/>
              ))}
            </div>

            {/* Color preview */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, padding:"8px 12px", background:"#080d18", borderRadius:9, border:`1px solid ${T.border}` }}>
              <Crewmate color={colorPick} size={36}/>
              <span style={{ color:CREWMATE_COLORS[colorPick], fontWeight:700, fontSize:"0.85rem" }}>{colorPick}</span>
            </div>

            {/* Impostor picker */}
            <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, padding:"12px", background:"#0a0515", borderRadius:10, border:"1px solid #c5111122" }}>
              <span style={{ fontSize:"0.72rem", color:"#c51111", letterSpacing:"1px", flex:1 }}>🔪 IMPOSTORS</span>
              <button onClick={()=>setImpostorCount(Math.max(1,impostorCount-1))} style={{ background:"#1a0505", border:"1px solid #c5111133", color:"#c51111", borderRadius:6, width:28, height:28, cursor:"pointer", fontSize:"1rem" }}>−</button>
              <span style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.2rem", color:"#e8334a", minWidth:20, textAlign:"center" }}>{impostorCount}</span>
              <button onClick={()=>setImpostorCount(Math.min(3,impostorCount+1))} style={{ background:"#1a0505", border:"1px solid #c5111133", color:"#c51111", borderRadius:6, width:28, height:28, cursor:"pointer", fontSize:"1rem" }}>+</button>
              <Btn onClick={assignImpostors} disabled={busy||players.length<2} color="#c51111" style={{ padding:"6px 12px", fontSize:"0.7rem" }}>ASSIGN</Btn>
            </div>

            {/* Player list */}
            <div style={{ display:"flex", flexDirection:"column", gap:7, maxHeight:320, overflowY:"auto" }}>
              {players.length===0&&<div style={{ color:"#2a3a60", fontSize:"0.78rem", textAlign:"center", padding:"18px 0" }}>No crewmates yet</div>}
              {players.map(p=>(
                console.log("Rendering player:", p),
                console.log(`Player ${p.name} isImpostor=${p.isImpostor} alive=${p.alive}`),
                <div key={p.id} style={{ display:"flex", alignItems:"center", gap:10, background:p.isImpostor?"#0f0408":p.alive?"#080d18":"#0a0404", border:`1px solid ${p.isImpostor?"#c5111133":p.alive?T.border:"#c5111122"}`, borderRadius:10, padding:"8px 12px", opacity:p.alive?1:0.55 }}>
                  <Crewmate color={p.color} size={28} dead={!p.alive}/>
                  <div style={{ flex:1, minWidth:0 }}>
                    <div style={{ fontSize:"0.83rem", fontWeight:700, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</div>
                    <div style={{ fontSize:"0.6rem", color:CREWMATE_COLORS[p.color] }}>{p.color}</div>
                  </div>
                  {p.isImpostor&&<Pill color="#c51111">impostor</Pill>}
                  {!p.alive&&<Pill color="#555">dead</Pill>}
                  {votes[p.name]&&p.alive&&<Pill color="#4488ff">voted ✓</Pill>}
                  <button onClick={()=>removePlayer(p.id)} disabled={busy} style={{ background:"none", border:"none", color:"#c51111", cursor:"pointer", fontSize:"1.1rem", lineHeight:1, padding:"2px 4px" }}>✕</button>
                </div>
              ))}
            </div>
          </Card>

          {/* RIGHT: Controls */}
          <div style={{ display:"flex", flexDirection:"column", gap:16 }}>
            <Card>
              <SectionLabel>Meeting Controls</SectionLabel>
              <div style={{ display:"flex", flexDirection:"column", gap:10 }}>
                <Btn full onClick={startVoting} disabled={busy||alivePlayers.length<2||room.phase==="voting"} color="#4488ff">🚨 Start Emergency Meeting</Btn>
                <Btn full onClick={revealVotes} disabled={busy||room.phase!=="voting"||votedCount===0} color="#b044ff">📊 Reveal Votes ({votedCount}/{alivePlayers.length})</Btn>
                <Btn full onClick={backToLobby} disabled={busy||room.phase==="lobby"} color="#ffcc00">🔄 Back to Lobby</Btn>
                <Btn full onClick={resetRoom} disabled={busy} color="#c51111" danger>⚠ Reset Room</Btn>
              </div>
            </Card>

            {room.phase==="voting"&&(
              <Card><VoteTally alivePlayers={alivePlayers} votes={votes} votingOpen={room.votingOpen}/></Card>
            )}

            {room.phase==="results"&&(
              <Card style={{ border:`1px solid ${room.kickedPlayer&&room.kickedPlayer!=="skip"?"#c5111144":"#00cc7733"}` }}>
                <SectionLabel>Result</SectionLabel>
                <VoteResults votes={votes} kickedPlayer={room.kickedPlayer} players={players}/>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
