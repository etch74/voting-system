import Crewmate from "./Crewmate";
import { T } from "../constants";

export default function VoteTally({ alivePlayers, votes, votingOpen }) {
  const tally = {};
  Object.values(votes).forEach(v => { tally[v] = (tally[v]||0)+1; });
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:9 }}>
      <div style={{ fontSize:"0.6rem", letterSpacing:"2px", color:T.muted, marginBottom:4, display:"flex", alignItems:"center", gap:8 }}>
        LIVE TALLY {votingOpen && <span style={{ color:T.yellow, animation:"blink 1s infinite" }}>● syncing</span>}
      </div>
      {alivePlayers.map(p => {
        const count = tally[p.name]||0;
        const pct   = alivePlayers.length ? count/alivePlayers.length : 0;
        return (
          <div key={p.id} style={{ display:"flex", alignItems:"center", gap:8 }}>
            <Crewmate color={p.color} size={20}/>
            <div style={{ flex:1, minWidth:0 }}>
              <div style={{ display:"flex", justifyContent:"space-between", marginBottom:3 }}>
                <span style={{ fontSize:"0.75rem", overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</span>
                {count>0 && <span style={{ fontSize:"0.7rem", color:T.red, fontWeight:700, flexShrink:0, marginLeft:4 }}>{count} 🗳</span>}
              </div>
              <div style={{ height:3, background:T.card, borderRadius:999 }}>
                <div style={{ height:"100%", width:`${pct*100}%`, background:T.accent, borderRadius:999, transition:"width 0.5s ease" }}/>
              </div>
            </div>
          </div>
        );
      })}
      {(tally.skip||0)>0 && (
        <div style={{ display:"flex", alignItems:"center", gap:8, paddingTop:8, borderTop:`1px solid ${T.border}` }}>
          <span style={{ width:20, textAlign:"center", fontSize:"0.9rem" }}>⏭</span>
          <span style={{ fontSize:"0.75rem", flex:1 }}>Skip</span>
          <span style={{ fontSize:"0.7rem", color:T.yellow, fontWeight:700 }}>{tally.skip} 🗳</span>
        </div>
      )}
    </div>
  );
}
