import { CREWMATE_COLORS } from "../constants";
export default function Crewmate({ color = "Red", size = 48, dead = false, glow = false, style = {} }) {
  const c = CREWMATE_COLORS[color] || "#888";
  const filter = dead
    ? "grayscale(1) brightness(0.35)"
    : glow
      ? `drop-shadow(0 0 10px ${c}) drop-shadow(0 0 22px ${c}99)`
      : "drop-shadow(0 2px 8px #000a)";
  return (
    <svg width={size} height={size * 1.25} viewBox="0 0 80 100" style={{ filter, transition:"filter 0.3s", display:"block", ...style }}>
      <ellipse cx="40" cy="32" rx="28" ry="26" fill={c}/>
      <ellipse cx="40" cy="28" rx="18" ry="14" fill={dead?"#333":"#7dd8ff"} opacity="0.93"/>
      {!dead && <ellipse cx="34" cy="22" rx="6" ry="4" fill="white" opacity="0.45"/>}
      <ellipse cx="40" cy="68" rx="28" ry="26" fill={c}/>
      <rect x="62" y="50" width="13" height="22" rx="5" fill={c} opacity="0.8"/>
      <rect x="63" y="53" width="11" height="16" rx="3" fill="#00000033"/>
      <rect x="22" y="86" width="14" height="12" rx="5" fill={c}/>
      <rect x="44" y="86" width="14" height="12" rx="5" fill={c}/>
      {dead && <>
        <line x1="28" y1="22" x2="36" y2="30" stroke="#ff3a3a" strokeWidth="3" strokeLinecap="round"/>
        <line x1="36" y1="22" x2="28" y2="30" stroke="#ff3a3a" strokeWidth="3" strokeLinecap="round"/>
        <line x1="44" y1="22" x2="52" y2="30" stroke="#ff3a3a" strokeWidth="3" strokeLinecap="round"/>
        <line x1="52" y1="22" x2="44" y2="30" stroke="#ff3a3a" strokeWidth="3" strokeLinecap="round"/>
      </>}
    </svg>
  );
}
