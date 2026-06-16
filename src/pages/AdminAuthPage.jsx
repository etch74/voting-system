import { useState } from "react";
import { loginAdmin, registerAdmin } from "../firebase/db";
import { T } from "../constants";
import { Stars, Card, Btn, Input, SectionLabel } from "../components/ui";
import Crewmate from "../components/Crewmate";
import logo from "../images/logo.png";

export default function AdminAuthPage() {
  const [mode,     setMode]     = useState("login"); // login | register
  const [email,    setEmail]    = useState("");
  const [password, setPassword] = useState("");
  const [confirm,  setConfirm]  = useState("");
  const [error,    setError]    = useState("");
  const [loading,  setLoading]  = useState(false);
  const [shaking,  setShaking]  = useState(false);

  const shake = () => { setShaking(true); setTimeout(()=>setShaking(false), 500); };

  const submit = async () => {
    setError("");
    if (!email.trim() || !password) { setError("Fill in all fields"); shake(); return; }
    if (mode === "register" && password !== confirm) { setError("Passwords don't match"); shake(); return; }
    if (password.length < 6) { setError("Password must be at least 6 characters"); shake(); return; }

    setLoading(true);
    try {
      if (mode === "login") {
        await loginAdmin(email.trim(), password);
      } else {
        await registerAdmin(email.trim(), password);
      }
      // onAuthStateChanged in App.jsx will handle the rest
    } catch (err) {
      const map = {
        "auth/user-not-found":    "No admin account found. Register first.",
        "auth/wrong-password":    "Wrong password.",
        "auth/invalid-email":     "Invalid email address.",
        "auth/email-already-in-use": "Email already registered. Login instead.",
        "auth/invalid-credential": "Wrong email or password.",
      };
      setError(map[err.code] || err.message);
      shake();
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight:"100vh", background:T.pageBg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:20, position:"relative" }}>
      <Stars/>
      <div style={{ position:"relative", zIndex:1, width:"min(380px,100%)", textAlign:"center" }}>

        {/* Logo */}
        <div style={{ marginBottom:28, textAlign:"center" }}>
          <img src={logo} alt="Among Us IRL" style={{ width:"90%", height:"auto", marginBottom:14 }} />
        </div>

        <Card style={{ animation: shaking ? "shake 0.4s ease" : "none", textAlign:"left" }}>
          <SectionLabel>{mode === "login" ? "Sign In" : "Create Admin Account"}</SectionLabel>

          {error && (
            <div style={{ background:`${T.red}14`, border:`1px solid ${T.red}33`, borderRadius:8, padding:"10px 12px", color:T.red, fontSize:"0.73rem", marginBottom:14, lineHeight:1.6 }}>
              {error}
            </div>
          )}

          <div style={{ display:"flex", flexDirection:"column", gap:10, marginBottom:14 }}>
            <Input
              type="email"
              value={email}
              onChange={e => { setEmail(e.target.value); setError(""); }}
              onKeyDown={e => e.key==="Enter" && submit()}
              placeholder="Admin email…"
            />
            <Input
              type="password"
              value={password}
              onChange={e => { setPassword(e.target.value); setError(""); }}
              onKeyDown={e => e.key==="Enter" && submit()}
              placeholder="Password…"
            />
            {mode === "register" && (
              <Input
                type="password"
                value={confirm}
                onChange={e => { setConfirm(e.target.value); setError(""); }}
                onKeyDown={e => e.key==="Enter" && submit()}
                placeholder="Confirm password…"
              />
            )}
          </div>

          <Btn full onClick={submit} disabled={loading} color={T.blue}>
            {loading ? "Please wait…" : mode === "login" ? "🔐 Sign In" : "✅ Create Account"}
          </Btn>

          <div style={{ marginTop:16, textAlign:"center" }}>
            <button
              onClick={() => { setMode(mode==="login"?"register":"login"); setError(""); }}
              style={{ background:T.card, border:`1px solid ${T.border}`, color:T.muted, fontSize:"0.7rem", cursor:"pointer", letterSpacing:"1px", textDecoration:"underline", borderRadius:8, padding:"6px 10px" }}
            >
              {mode === "login" ? "No account? Register here" : "Already have an account? Sign in"}
            </button>
          </div>
        </Card>

        <div style={{ marginTop:20, color:T.muted, fontSize:"0.75rem", letterSpacing:"1.8px", textAlign:"center" }}>
          ARE YOU A PLAYER?{" "}
          <a href="/" style={{ color:T.muted, textDecoration:"underline", cursor:"pointer",  }}>JOIN AS CREWMATE →</a>
        </div>
      </div>
    </div>
  );
}
