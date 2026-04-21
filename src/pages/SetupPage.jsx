import { Card, SectionLabel, Stars } from "../components/ui";
import { T } from "../constants";

const steps = [
  ["1","Go to firebase.google.com and sign in with Google"],
  ["2","Click Add project→ give it a name → Continue"],
  ["3","Sidebar → Realtime Database → Create database → Start in test mode"],
  ["4","Sidebar → Authentication → Get started → Enable Email/Password"],
  ["5","Click ⚙ gear → Project Settings → Your apps → </> → register web app"],
  ["6","Copy the firebaseConfig and paste into src/firebase/config.js"],
  ["7","Run npm install && npm run dev"],
  ["8","Go to /admin to create your admin account, then create a room 🚀"],
];

export default function SetupPage() {
  return (
    <div style={{ minHeight:"100vh", background:T.bg, display:"flex", alignItems:"center", justifyContent:"center", padding:20, position:"relative" }}>
      <Stars/>
      <div style={{ position:"relative", zIndex:1, width:"min(500px,100%)", textAlign:"center" }}>
        <div style={{ fontSize:"3rem", marginBottom:12 }}>🔥</div>
        <div style={{ fontFamily:"'Russo One',sans-serif", fontSize:"1.6rem", letterSpacing:"3px", color:T.accent, marginBottom:6 }}>FIREBASE SETUP</div>
        <div style={{ color:"#3a4a6a", fontSize:"0.78rem", lineHeight:1.9, marginBottom:24 }}>
          Paste your Firebase config to enable real-time sync across all devices.
        </div>
        <Card style={{ textAlign:"left" }}>
          <SectionLabel>Setup Guide</SectionLabel>
          <div style={{ display:"flex", flexDirection:"column", gap:14 }}>
            {steps.map(([n,text])=>(
              <div key={n} style={{ display:"flex", gap:12, alignItems:"flex-start" }}>
                <div style={{ width:24, height:24, borderRadius:"50%", background:`${T.accent}22`, border:`1px solid ${T.accent}55`, color:T.accent, fontSize:"0.7rem", display:"flex", alignItems:"center", justifyContent:"center", flexShrink:0, marginTop:1, fontWeight:700 }}>{n}</div>
                <div style={{ color:"#8a9ab8", fontSize:"0.78rem", lineHeight:1.7 }}>{text}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
