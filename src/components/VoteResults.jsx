import Crewmate from "./Crewmate";
import { Card, Pill } from "./ui";
import { T } from "../constants";

export default function VoteResults({ votes, kickedPlayer, players, myName }) {
  const tally = {};
  Object.values(votes).forEach(v => { tally[v]=(tally[v]||0)+1; });
  const sorted = Object.entries(tally).sort((a,b)=>b[1]-a[1]);
  const amKicked = kickedPlayer && kickedPlayer===myName;
  return (
    <div style={{ animation:"fadeUp 0.5s ease" }}>
      <div style={{ textAlign:"center", marginBottom:20 }}>
        <div style={{ fontFamily:"'Russo One',sans-serif", color:T.blue, fontSize:"1.7rem", letterSpacing:"4px" }}>VOTES REVEALED</div>
      </div>
      <div style={{ display:"flex", flexDirection:"column", gap:9, marginBottom:18 }}>
        {sorted.map(([name,count],i)=>{
          const p=players.find(x=>x.name===name);
          const isKicked=name===kickedPlayer;
          return (
            <div key={name} style={{ display:"flex", alignItems:"center", gap:12, background:isKicked?`${T.red}10`:T.card, border:`1.5px solid ${isKicked?T.red:`${T.blue}22`}`, borderRadius:12, padding:"10px 14px", animation:`fadeUp 0.4s ease ${i*0.08}s both` }}>
              {p?<Crewmate color={p.color} size={36} dead={isKicked}/>:<span style={{ fontSize:"1.5rem", width:36, textAlign:"center" }}>⏭</span>}
              <div style={{ flex:1 }}>
                <div style={{ fontWeight:700, fontSize:"0.88rem" }}>{name==="skip"?"Skip Vote":name}</div>
                {isKicked&&<Pill color={T.red} style={{ marginTop:3 }}>ejected</Pill>}
              </div>
              <div style={{ fontWeight:700, fontSize:"1.25rem", color:isKicked?T.red:T.muted }}>{count} 🗳</div>
            </div>
          );
        })}
      </div>
      {kickedPlayer&&kickedPlayer!=="skip"?(
        <Card style={{ border:`1.5px solid ${T.red}55`, textAlign:"center", background:amKicked?`${T.red}10`:T.card }}>
          {amKicked?(<>
            <div style={{ fontSize:"2.8rem", marginBottom:8 }}>💀</div>
            <div style={{ fontFamily:"'Russo One',sans-serif", color:T.red, fontSize:"1.5rem", letterSpacing:"3px" }}>YOU WERE EJECTED</div>
          </>):(<>
            {(()=>{const p=players.find(x=>x.name===kickedPlayer);return p?<div style={{display:"flex",justifyContent:"center",marginBottom:8}}><Crewmate color={p.color} size={62} dead/></div>:null;})()}
            <div style={{ fontFamily:"'Russo One',sans-serif", color:T.red, fontSize:"1.4rem", letterSpacing:"3px" }}>EJECTED</div>
            <div style={{ color:T.muted, fontWeight:700, marginTop:4 }}>{kickedPlayer}</div>
          </>)}
        </Card>
      ):(
        <Card style={{ border:`1.5px solid ${T.yellow}33`, textAlign:"center" }}>
          <div style={{ fontSize:"2rem", marginBottom:8 }}>🤷</div>
          <div style={{ color:T.yellow, fontWeight:700 }}>No ejection — tied or skipped</div>
        </Card>
      )}
    </div>
  );
}
