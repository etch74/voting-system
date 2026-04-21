import { useState, useEffect } from "react";
import { dbListen } from "../firebase/db";
import { T } from "../constants";
import { Stars, Card, Btn, Input, SectionLabel, Spinner } from "../components/ui";
import Crewmate from "../components/Crewmate";

export default function PlayerJoinPage({ initialRoomCode, onJoin }) {
  const [step,      setStep]      = useState(initialRoomCode ? "name" : "code");
  const [roomCode,  setRoomCode]  = useState(initialRoomCode || "");
  const [nameInput, setNameInput] = useState("");
  const [room,      setRoom]      = useState(null);
  const [loading,   setLoading]   = useState(!!initialRoomCode);
  const [error,     setError]     = useState("");
  const [shaking,   setShaking]   = useState(false);

  const shake = () => { setShaking(true); setTimeout(()=>setShaking(false), 500); };

  // If we have a room code (from URL), load the room immediately
  useEffect(() => {
    if (!roomCode) return;
    setLoading(true);
    const unsub = dbListen(`rooms/${roomCode.toUpperCase()}`, val => {
      setRoom(val);
      setLoading(false);
      if (!val) setError("Room not found. Check the code.");
    });
    return unsub;
  }, [roomCode]);

  const submitCode = () => {
    const code = roomCode.trim().toUpperCase();
    if (!code || code.length < 4) { setError("Enter a valid room code"); shake(); return; }
    setRoomCode(code);
    setStep("name");
    setError("");
  };

  const submitName = () => {
    const name = nameInput.trim();
    if (!name) { setError("Enter your name"); shake(); return; }
    if (!room) { setError("Room not loaded yet"); return; }

    const players = Object.values(room.players||{});
    const found   = players.find(p => p.name.toLowerCase()===name.toLowerCase());
    if (!found) { setError("Name not in player list — ask admin to add you"); shake(); return; }

    onJoin({ room, roomCode: roomCode.toUpperCase(), player: found });
  };

  const choosePlayer = () => {
    const name = nameInput.trim();
    if (!name) { setError("Enter your name"); shake(); return; }
    if (!room) { setError("Room not loaded yet"); return; }

    const players = Object.values(room.players||{});
    const found   = players.find(p => p.name.toLowerCase()===name.toLowerCase());
    if (!found) { setError("Name not in player list — ask admin to add you"); shake(); return; }

    onJoin({ room, roomCode: roomCode.toUpperCase(), player: found });
  };

  const players = room ? Object.values(room.players||{}).filter(p=>p.alive) : [];

  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:20, position:"relative" }}>
      <Stars/>
      <div style={{ position:"relative", zIndex:1, width:"min(380px,100%)" }}>

        {/* Logo */}
        <div style={{ textAlign:"center", marginBottom:28 }}>
          <div style={{ display:"flex", justifyContent:"center", gap:4, marginBottom:14 }}>
            {["Red","Blue","Green","Pink","Orange"].map((c,i)=>(
              <div key={c} style={{ marginLeft:i?-10:0, zIndex:5-i, position:"relative", animation:`float ${2+i*0.3}s ease-in-out infinite`, animationDelay:`${i*0.2}s` }}>
                <Crewmate color={c} size={42}/>
              </div>
            ))}
          </div>
          <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"2.2rem", letterSpacing:"5px", color:T.accent, lineHeight:1 }}>AMONG US</div>
          <div style={{ color:"#2a3a60", fontSize:"0.65rem", letterSpacing:"4px", marginTop:4 }}>LIVE ACTION • VOTING SYSTEM</div>
        </div>

        <Card style={{ animation:shaking?"shake 0.4s ease":"none" }}>
          {/* STEP 1: Enter room code */}
          {step === "code" && (
            <>
              <SectionLabel>Enter Room Code</SectionLabel>
              {error && <div style={{ background:"#1a0505", border:"1px solid #c5111133", borderRadius:8, padding:"10px 12px", color:"#ff5555", fontSize:"0.73rem", marginBottom:12, lineHeight:1.6 }}>{error}</div>}
              <Input
                value={roomCode}
                onChange={e=>{setRoomCode(e.target.value.toUpperCase());setError("");}}
                onKeyDown={e=>e.key==="Enter"&&submitCode()}
                placeholder="e.g. XK92AF"
                style={{ textTransform:"uppercase", letterSpacing:"4px", textAlign:"center", fontSize:"1.2rem", marginBottom:12 }}
              />
              <Btn full onClick={submitCode} color="#4488ff">FIND ROOM →</Btn>
            </>
          )}

          {/* STEP 2: Enter name */}
          {step === "name" && (
            <>
              {loading && (
                <div style={{ textAlign:"center", padding:"12px 0" }}>
                  <Spinner/>
                  <div style={{ color:"#2a3a60", fontSize:"0.72rem", marginTop:10 }}>Loading room…</div>
                </div>
              )}
              {!loading && !room && (
                <>
                  <SectionLabel>Room Not Found</SectionLabel>
                  <div style={{ color:"#ff5555", fontSize:"0.78rem", marginBottom:12 }}>Room <strong>{roomCode}</strong> doesn't exist.</div>
                  <Btn full onClick={()=>{setStep("code");setRoomCode("");setError("");}} color="#4488ff">← Try Again</Btn>
                </>
              )}
              {!loading && room && (
                <>
                  <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:16, padding:"10px 12px", background:"#080d18", border:`1px solid ${T.border}`, borderRadius:10 }}>
                    <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.3rem", letterSpacing:"3px", color:"#4488ff" }}>{roomCode}</div>
                    <div style={{ fontSize:"0.62rem", color:"#2a3a60", flex:1 }}>Room found ✓</div>
                    <button onClick={()=>{setStep("code");setRoomCode("");setRoom(null);setError("");}} style={{ background:"none", border:"none", color:"#3a4a6a", cursor:"pointer", fontSize:"0.7rem" }}>change</button>
                  </div>
                  <SectionLabel>Who are you?</SectionLabel>
                  {error && <div style={{ background:"#1a0505", border:"1px solid #c5111133", borderRadius:8, padding:"10px 12px", color:"#ff5555", fontSize:"0.73rem", marginBottom:12, lineHeight:1.6 }}>{error}</div>}
                  <Input
                    value={nameInput}
                    onChange={e=>{setNameInput(e.target.value);setError("");}}
                    onKeyDown={e=>e.key==="Enter"&&submitName()}
                    placeholder="Your crewmate name…"
                    style={{ marginBottom:12 }}
                  />
                  <Btn full onClick={submitName} color="#4488ff">🚀 Board the Ship</Btn>

                  {players.length>0 && (
                    <div style={{ marginTop:16 }}>
                      <SectionLabel>Crewmates online</SectionLabel>
                      <div style={{ display:"flex", flexWrap:"wrap", gap:6 }}>
                        {players.map(p=>(
                          <div key={p.id} style={{ display:"flex", alignItems:"center", gap:5, background:"#080d18", borderRadius:8, padding:"5px 9px", border:`1px solid ${T.border}` }} onClick={()=>nameInput===p.name ? submitName():setNameInput(p.name)}>
                            <Crewmate color={p.color} size={18}/>
                            <span style={{ fontSize:"0.73rem" }}>{p.name}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </Card>

        <div style={{ marginTop:20, textAlign:"center", color:"#1e2e50", fontSize:"0.65rem", letterSpacing:"2px" }}>
          HOST?{" "}
          <a href="/admin" style={{ color:T.accent, textDecoration:"none" }}>ADMIN PANEL →</a>
        </div>
      </div>
    </div>
  );
}
