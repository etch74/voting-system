import { useState, useEffect, useRef } from "react";
import { dbUpdate, dbListen } from "../firebase/db";
import { CREWMATE_COLORS, T } from "../constants";
import Crewmate from "../components/Crewmate";
import VoteResults from "../components/VoteResults";
import EjectionScreen from "../components/EjectionScreen";
import { Card, SectionLabel, PhasePill, Stars, Pill } from "../components/ui";

export default function PlayerPage({ roomCode, initialPlayer, onLeave }) {
  const [room,         setRoom]         = useState(null);
  const [busy,         setBusy]         = useState(false);
  const [flash,        setFlash]        = useState(false);
  const [showEjection, setShowEjection] = useState(false);
  const prevPhase = useRef(null);

  // Live room listener
  useEffect(() => {
    const unsub = dbListen(`rooms/${roomCode}`, val => setRoom(val));
    return unsub;
  }, [roomCode]);

  // Flash + ejection on phase change
  useEffect(() => {
    if (!room) return;
    if (room.phase !== prevPhase.current) {
      setFlash(true);
      setTimeout(()=>setFlash(false), 600);
      if (room.phase==="results" && room.kickedPlayer && room.kickedPlayer!=="skip") {
        setShowEjection(true);
      }
      prevPhase.current = room.phase;
    }
  }, [room?.phase]);

  if (!room) return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", color:"#2a3a60", fontSize:"0.78rem", letterSpacing:"2px", position:"relative" }}>
      <Stars/>
      <div style={{ position:"relative", zIndex:1 }}>CONNECTING…</div>
    </div>
  );

  const players      = Object.values(room.players||{});
  const votes        = room.votes||{};
  const me           = players.find(p=>p.id===initialPlayer.id) || initialPlayer;
  const myVote       = votes[me.name];
  const alivePlayers = players.filter(p=>p.alive && p.name!==me.name);
  const votedCount   = Object.keys(votes).length;
  const totalAlive   = players.filter(p=>p.alive).length;

  const kickedObj  = players.find(p=>p.name===room.kickedPlayer);
  const isImpostor = kickedObj?.isImpostor||false;

  const castVote = async target => {
    if (busy||!room.votingOpen||myVote) return;
    setBusy(true);
    try { await dbUpdate(`rooms/${roomCode}/votes`, { [me.name]: target }); }
    finally { setBusy(false); }
  };

  // ── EJECTED ──
  if (!me.alive) {
    return (
      <div style={{ minHeight:"100vh", background:"#080104", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", position:"relative" }}>
        <Stars/>
        <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
          <Crewmate color={me.color} size={100} dead/>
          <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"2.6rem", letterSpacing:"6px", color:"#c51111", marginTop:18 }}>EJECTED</div>
          <div style={{ color:"#2a3a60", fontSize:"0.73rem", letterSpacing:"2px", marginTop:8 }}>{me.name} • {me.color}</div>
          {me.isImpostor && <div style={{ marginTop:12 }}><Pill color="#c51111">You were the Impostor</Pill></div>}
          <button onClick={onLeave} style={{ marginTop:28, background:"none", border:"1px solid #1e2d50", color:"#3a4a6a", borderRadius:8, padding:"8px 20px", fontSize:"0.68rem", letterSpacing:"2px", cursor:"pointer" }}>
            LEAVE SHIP
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight:"100vh", background:flash?"#150a12":T.bg, color:"#d0daf0", paddingBottom:24, position:"relative", transition:"background 0.4s" }}>
      <Stars/>

      {showEjection && room.kickedPlayer && room.kickedPlayer!=="skip" && (
        <EjectionScreen kickedPlayer={room.kickedPlayer} players={players} isImpostor={isImpostor} onDone={()=>setShowEjection(false)}/>
      )}

      <div style={{ position:"relative", zIndex:1 }}>
        {/* Header */}
        <header style={{ background:"linear-gradient(135deg,#0c0416,#090f20)", borderBottom:`1px solid ${T.border}`, padding:"11px 16px", display:"flex", alignItems:"center", gap:10 }}>
          <Crewmate color={me.color} size={34}/>
          <div>
            <div style={{ fontWeight:700, fontSize:"0.9rem" }}>{me.name}</div>
            <div style={{ fontSize:"0.6rem", color:me.isImpostor?"#e8334a":CREWMATE_COLORS[me.color] }}>
              {me.isImpostor ? "⚠ IMPOSTOR" : `${me.color} crewmate`}
            </div>
          </div>
          <div style={{ marginLeft:"auto", display:"flex", gap:8, alignItems:"center" }}>
            <span style={{ fontFamily:"'Russo One',sans-serif", fontSize:"0.9rem", color:"#4488ff", letterSpacing:"2px" }}>{roomCode}</span>
            <PhasePill phase={room.phase}/>
            <button onClick={onLeave} style={{ background:"none", border:"1px solid #1e2d50", color:"#3a4a6a", borderRadius:8, padding:"5px 10px", fontSize:"0.65rem", cursor:"pointer" }}>LEAVE</button>
          </div>
        </header>

        {/* Role banner */}
        {room.phase==="lobby" && (
          <div style={{ padding:"10px 20px", background:me.isImpostor?"linear-gradient(135deg,#1a0505,#0d0012)":"linear-gradient(135deg,#050a1a,#030d14)", borderBottom:`1px solid ${me.isImpostor?"#c5111133":"#4488ff22"}`, textAlign:"center", animation:me.isImpostor?"glow 2s ease-in-out infinite":"none" }}>
            {me.isImpostor ? (
              <div>
                <div style={{ fontFamily:"'Russo One',sans-serif", color:"#e8334a", fontSize:"1.1rem", letterSpacing:"3px" }}>🔪 YOU ARE THE IMPOSTOR</div>
                <div style={{ color:"#6a2020", fontSize:"0.68rem", marginTop:2 }}>Blend in. Don't get caught.</div>
              </div>
            ) : (
              <div>
                <div style={{ fontFamily:"'Russo One',sans-serif", color:"#4488ff", fontSize:"1.1rem", letterSpacing:"3px" }}>✅ YOU ARE A CREWMATE</div>
                <div style={{ color:"#2a3a60", fontSize:"0.68rem", marginTop:2 }}>Find the impostors among you.</div>
              </div>
            )}
          </div>
        )}

        <div style={{ maxWidth:480, margin:"0 auto", padding:"20px 14px" }}>

          {/* LOBBY */}
          {room.phase==="lobby" && (
            <div style={{ textAlign:"center", paddingTop:28 }}>
              <div style={{ display:"inline-block", fontSize:"3.5rem", marginBottom:14, animation:"float 3s ease-in-out infinite" }}>🚀</div>
              <div style={{ color:"#1e2e50", fontSize:"0.8rem", letterSpacing:"3px", marginBottom:6 }}>WAITING FOR</div>
              <div style={{ fontFamily:"'Russo One',sans-serif", color:"#4488ff", fontSize:"1.5rem", letterSpacing:"3px" }}>EMERGENCY MEETING</div>
              <div style={{ color:"#1a2a40", fontSize:"0.68rem", marginTop:6, marginBottom:24 }}>The admin will start when ready</div>
              <div style={{ display:"flex", flexWrap:"wrap", gap:8, justifyContent:"center" }}>
                {players.filter(p=>p.alive).map(p=>(
                  <div key={p.id} style={{ display:"flex", alignItems:"center", gap:6, background:T.card, borderRadius:9, padding:"6px 10px", border:`1px solid ${T.border}` }}>
                    <Crewmate color={p.color} size={22}/>
                    <span style={{ fontSize:"0.75rem" }}>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* VOTING — hasn't voted */}
          {room.phase==="voting" && !myVote && (
            <div>
              <div style={{ textAlign:"center", marginBottom:22 }}>
                <div style={{ fontFamily:"'Russo One',sans-serif", color:T.accent, fontSize:"1.9rem", letterSpacing:"4px", animation:"blink 0.8s infinite", lineHeight:1 }}>🚨 VOTE NOW 🚨</div>
                <div style={{ color:"#4a5a7a", fontSize:"0.72rem", letterSpacing:"2px", marginTop:6 }}>
                  {me.isImpostor ? "Vote carefully… 😈" : "Who is the impostor?"}
                </div>
              </div>
              <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:11, marginBottom:11 }}>
                {alivePlayers.map(p=>(
                  <button key={p.id} onClick={()=>castVote(p.name)} disabled={busy}
                    style={{ background:T.card, border:`2px solid ${T.border}`, borderRadius:14, padding:"16px 10px", cursor:busy?"wait":"pointer", textAlign:"center", color:"#d0daf0", transition:"border 0.15s,background 0.15s" }}
                    onMouseEnter={e=>{e.currentTarget.style.border=`2px solid ${CREWMATE_COLORS[p.color]}77`;e.currentTarget.style.background=`${CREWMATE_COLORS[p.color]}0f`;}}
                    onMouseLeave={e=>{e.currentTarget.style.border=`2px solid ${T.border}`;e.currentTarget.style.background=T.card;}}
                  >
                    <div style={{ display:"flex", justifyContent:"center" }}><Crewmate color={p.color} size={52}/></div>
                    <div style={{ fontWeight:700, marginTop:8, fontSize:"0.86rem" }}>{p.name}</div>
                    <div style={{ fontSize:"0.6rem", color:CREWMATE_COLORS[p.color], marginTop:2 }}>{p.color}</div>
                  </button>
                ))}
              </div>
              <button onClick={()=>castVote("skip")} disabled={busy}
                style={{ width:"100%", background:T.card, border:`2px solid ${T.border}`, borderRadius:14, padding:"13px", cursor:busy?"wait":"pointer", color:"#ffcc00", fontSize:"0.8rem", letterSpacing:"2px", fontWeight:700, textTransform:"uppercase", transition:"border 0.15s,background 0.15s" }}
                onMouseEnter={e=>{e.currentTarget.style.border="2px solid #ffcc0055";e.currentTarget.style.background="#ffcc000e";}}
                onMouseLeave={e=>{e.currentTarget.style.border=`2px solid ${T.border}`;e.currentTarget.style.background=T.card;}}
              >⏭ Skip Vote</button>
            </div>
          )}

          {/* VOTING — voted */}
          {room.phase==="voting" && myVote && (
            <div style={{ textAlign:"center", paddingTop:36 }}>
              <div style={{ fontSize:"3.2rem", marginBottom:12 }}>✅</div>
              <div style={{ fontFamily:"'Russo One',sans-serif", color:"#00cc77", fontSize:"1.1rem", letterSpacing:"2px" }}>Vote Locked In</div>
              <div style={{ color:"#4a5a7a", fontSize:"0.8rem", marginTop:8 }}>
                You voted: <strong style={{ color:"#d0daf0" }}>{myVote==="skip"?"Skip":myVote}</strong>
              </div>
              <div style={{ marginTop:20, color:"#1e2e50", fontSize:"0.68rem", letterSpacing:"1.5px" }}>
                {votedCount} of {totalAlive} voted — waiting for admin to reveal
              </div>
              <div style={{ marginTop:20, display:"flex", justifyContent:"center", flexWrap:"wrap", gap:6 }}>
                {players.filter(p=>p.alive).map(p=>(
                  <div key={p.id} title={`${p.name}${votes[p.name]?" (voted)":""}`}>
                    <Crewmate color={p.color} size={32} glow={!!votes[p.name]}/>
                  </div>
                ))}
              </div>
              <div style={{ fontSize:"0.6rem", color:"#1a2a40", marginTop:8, letterSpacing:"1px" }}>glowing = voted</div>
            </div>
          )}

          {/* RESULTS */}
          {room.phase==="results" && !showEjection && (
            <VoteResults votes={votes} kickedPlayer={room.kickedPlayer} players={players} myName={me.name}/>
          )}
        </div>
      </div>
    </div>
  );
}
