import { T } from "../constants";

export function Pill({ color = T.accent, children, style }) {
  return <span style={{ background:`${color}22`, border:`1px solid ${color}55`, color, borderRadius:999, padding:"3px 11px", fontSize:"0.62rem", letterSpacing:"2px", fontWeight:700, textTransform:"uppercase", ...style }}>{children}</span>;
}

export function Btn({ children, onClick, disabled, color = T.accent, full, danger, style }) {
  return (
    <button onClick={onClick} disabled={disabled} style={{
      background: disabled ? T.card : danger ? `${T.red}22` : `${color}18`,
      border: `1.5px solid ${disabled ? "rgba(255,255,255,0.12)" : color}`,
      color: disabled ? T.muted : color,
      borderRadius: 11, padding: full ? "13px 18px" : "9px 18px",
      fontSize:"0.8rem", letterSpacing:"1.5px", fontWeight:700,
      cursor: disabled ? "not-allowed" : "pointer",
      textTransform:"uppercase", width: full ? "100%" : undefined,
      transition:"all 0.15s", opacity: disabled ? 0.65 : 1, ...style,
    }}>{children}</button>
  );
}

export function Card({ children, style }) {
  return <div style={{ background:T.card, border:`1px solid ${T.border}`, borderRadius:18, padding:22, boxShadow:"0 18px 50px rgba(0,0,0,0.16)", ...style }}>{children}</div>;
}

export function SectionLabel({ children }) {
  return <div style={{ fontSize:"0.65rem", letterSpacing:"3px", color:T.muted, textTransform:"uppercase", marginBottom:12, paddingBottom:8, borderBottom:`1px solid ${T.border}` }}>{children}</div>;
}

export function PhasePill({ phase }) {
  const map = { lobby:[T.yellow,"Lobby"], voting:[T.red,"Voting"], results:[T.blue,"Results"] };
  const [color, label] = map[phase] || [T.muted, phase];
  return <Pill color={color}>{label}</Pill>;
}


export function Stars() {
  const colors = ["white", T.red, T.yellow];
  const pts = Array.from({length:65}, (_, i) => ({
    x: ((Math.sin(i*137.508)*0.5+0.5)*100).toFixed(2),
    y: ((Math.cos(i*97.31)*0.5+0.5)*100).toFixed(2),
    r: i % 5 === 0 ? 2.4 : i % 3 === 0 ? 1.8 : 1.1,
    o: (0.1 + (i % 6) * 0.07).toFixed(2),
    color: colors[i % colors.length],
  }));
  return (
    <svg style={{ position:"fixed", inset:0, width:"100%", height:"100%", pointerEvents:"none", zIndex:0 }} preserveAspectRatio="xMidYMid slice" viewBox="0 0 100 100">
      {pts.map((p,i) => <circle key={i} cx={`${p.x}%`} cy={`${p.y}%`} r={p.r} fill={p.color} opacity={p.o}/>)}
    </svg>
  );
}

export function Spinner({ color = T.accent }) {
  return <div style={{ width:36, height:36, border:`3px solid ${color}`, borderTopColor:"transparent", borderRadius:"50%", animation:"spin 0.8s linear infinite", margin:"0 auto" }}/>;
}

export function Input({ value, onChange, onKeyDown, placeholder, type="text", style }) {
  return (
    <input type={type} value={value} onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder}
      style={{ width:"100%", background:T.card, border:`2px solid ${T.border}`, color:T.muted, borderRadius:10, padding:"12px 14px", fontSize:"0.9rem", outline:"none", ...style }}
    />
  );
}
