import { useEffect, useState } from "react";
import Crewmate from "./Crewmate";
import { CREWMATE_COLORS } from "../constants";

function ConfettiPiece({ color, x, delay, size, duration }) {
  return (
    <div style={{ position:"fixed", left:`${x}%`, top:"-20px", width:size, height:size*0.6, background:color, borderRadius:2, animation:`confetti ${duration}s ease-in ${delay}s forwards`, zIndex:10, pointerEvents:"none" }}/>
  );
}

const CONFETTI_COLORS = ["#e8334a","#4488ff","#00cc77","#ffcc00","#b044ff","#38fedc","#ff63d4","#f5f557"];

export default function EjectionScreen({ kickedPlayer, players, isImpostor, onDone }) {
  const [phase, setPhase] = useState("falling");
  const kicked = players.find(p => p.name === kickedPlayer);

  const confetti = Array.from({length:60}, (_, i) => ({
    color: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
    x: Math.random()*100, delay: Math.random()*1.5,
    size: 8+Math.random()*10, duration: 2+Math.random()*2,
  }));

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("reveal"), 1800);
    const t2 = setTimeout(() => { setPhase("done"); onDone?.(); }, 7000);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, []);

  return (
    <div style={{ position:"fixed", inset:0, zIndex:999, background: isImpostor?"#020a04":"#0a0202", display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", overflow:"hidden" }}>
      <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", pointerEvents:"none" }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
        {Array.from({length:40},(_,i)=>(
          <circle key={i} cx={`${((Math.sin(i*137.5)*0.5+0.5)*100).toFixed(1)}%`} cy={`${((Math.cos(i*97.3)*0.5+0.5)*100).toFixed(1)}%`} r={i%3===0?1.2:0.6} fill="white" opacity={0.08+(i%5)*0.05}/>
        ))}
      </svg>

      {isImpostor && confetti.map((c,i) => <ConfettiPiece key={i} {...c}/>)}

      {/* Falling crewmate */}
      {kicked && phase === "falling" && (
        <div style={{ animation:"fall 1.6s cubic-bezier(0.25,0.46,0.45,0.94) forwards", position:"absolute", top:"20%" }}>
          <Crewmate color={kicked.color} size={100} dead/>
        </div>
      )}

      {/* Reveal */}
      {phase === "reveal" && (
        <div style={{ textAlign:"center", padding:"0 24px", animation:"celebrate 0.6s cubic-bezier(0.34,1.56,0.64,1) forwards", zIndex:20 }}>
          {kicked && (
            <div style={{ display:"flex", justifyContent:"center", marginBottom:16 }}>
              <Crewmate color={kicked.color} size={80} dead/>
            </div>
          )}
          <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.1rem", letterSpacing:"3px", color:"#888", marginBottom:8 }}>
            {kickedPlayer}
          </div>
          {isImpostor ? (
            <>
              <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"2.2rem", letterSpacing:"4px", color:"#00cc77", lineHeight:1.1, marginBottom:12, textShadow:"0 0 30px #00cc77aa" }}>
                WAS THE<br/>IMPOSTOR! ✅
              </div>
              <div style={{ fontSize:"0.8rem", color:"#4a6a4a", letterSpacing:"2px", marginBottom:20 }}>CREWMATES WIN 🎉</div>
              <div style={{ fontSize:"3rem", animation:"float 1.5s ease-in-out infinite" }}>🎉🚀🎉</div>
            </>
          ) : (
            <>
              <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"2.2rem", letterSpacing:"4px", color:"#e8334a", lineHeight:1.1, marginBottom:12, textShadow:"0 0 30px #e8334aaa", animation:"shake 0.4s ease 0.2s" }}>
                WAS NOT<br/>THE IMPOSTOR. ❌
              </div>
              <div style={{ fontSize:"0.8rem", color:"#6a3a3a", letterSpacing:"2px", marginBottom:20 }}>IMPOSTORS STILL LURK 😱</div>
              <div style={{ fontSize:"3rem", animation:"float 1.5s ease-in-out infinite" }}>😱👻😱</div>
            </>
          )}

          {/* Reveal real impostors */}
          

          <button onClick={onDone} style={{ marginTop:28, background:"transparent", border:"1px solid #2a3a60", color:"#3a4a6a", borderRadius:8, padding:"8px 20px", fontSize:"0.7rem", letterSpacing:"2px", cursor:"pointer" }}>
            CONTINUE →
          </button>
        </div>
      )}
    </div>
  );
}
