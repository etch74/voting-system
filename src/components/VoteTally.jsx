import { PLAYER_ICONS } from "../playerData";
import { T } from "../constants";

export default function VoteTally({ alivePlayers, votes, votingOpen }) {
  const tally = {};
  Object.values(votes).forEach(v => { tally[v] = (tally[v]||0)+1; });
  return (
    <div style={{ display:"flex", flexDirection:"column", gap:18, alignItems:"center" }}>
      <div style={{ fontSize:"0.7rem", letterSpacing:"2px", color:T.muted, marginBottom:4, display:"flex", alignItems:"center", gap:8 }}>
        LIVE TALLY {votingOpen && <span style={{ color:T.yellow, animation:"blink 1s infinite" }}>● syncing</span>}
      </div>
      <div style={{ display:"grid", width:"100%", gridTemplateColumns:"repeat(auto-fit, minmax(240px, 1fr))", gap:16, justifyItems:"center" }}>
        {alivePlayers.map(p => {
          const count = tally[p.name]||0;
          const pct   = alivePlayers.length ? count/alivePlayers.length : 0;
          return (
            <div key={p.id} style={{ width:"100%", maxWidth:320, background:T.card, border:`1px solid ${T.border}`, borderRadius:18, padding:18, textAlign:"center", boxShadow:"0 18px 40px rgba(0,0,0,0.16)", display:"flex", flexDirection:"column", gap:12 }}>
              <div style={{ display:"flex", justifyContent:"center" }}>
                {PLAYER_ICONS[p.name] ? (
                  <img src={PLAYER_ICONS[p.name]} alt={p.name} style={{ width:64, height:64, borderRadius:"50%", objectFit:"cover", border:`2px solid ${T.border}` }} />
                ) : (
                  <div style={{ width:64, height:64, borderRadius:"50%", background:T.border, display:"flex", alignItems:"center", justifyContent:"center", color:T.muted, fontSize:"0.8rem" }}>?
                  </div>
                )}
              </div>
              <div style={{ fontSize:"1.1rem", fontWeight:700, letterSpacing:"1px", color:T.white, overflow:"hidden", textOverflow:"ellipsis", whiteSpace:"nowrap" }}>{p.name}</div>
              <div style={{ fontSize:"0.85rem", color:T.muted, textTransform:"uppercase", letterSpacing:"1.5px" }}>Votes</div>
              <div style={{ fontSize:"1.5rem", fontWeight:800, color: count > 0 ? T.red : T.muted }}>{count}</div>
              <div style={{ height:8, width:"100%", background:"rgba(255,255,255,0.08)", borderRadius:999, overflow:"hidden" }}>
                <div style={{ height:"100%", width:`${pct*100}%`, background:T.accent, transition:"width 0.5s ease" }}/>
              </div>
            </div>
          );
        })}
      </div>
      {(tally.skip||0)>0 && (
        <div style={{ display:"flex", alignItems:"center", gap:8, paddingTop:8, borderTop:`1px solid ${T.border}`, width:"100%", maxWidth:960, justifyContent:"center" }}>
          <span style={{ width:20, textAlign:"center", fontSize:"1rem" }}>⏭</span>
          <span style={{ fontSize:"0.9rem", flex:1, textAlign:"center" }}>Skip</span>
          <span style={{ fontSize:"0.9rem", color:T.yellow, fontWeight:700 }}>{tally.skip} 🗳</span>
        </div>
      )}
    </div>
  );
}
