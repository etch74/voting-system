import { useState, useEffect } from "react";
import { FIREBASE_CONFIG } from "./firebase/config";
import { onAuthChange } from "./firebase/db";
import SetupPage       from "./pages/SetupPage";
import AdminAuthPage   from "./pages/AdminAuthPage";
import AdminRoomPage   from "./pages/AdminRoomPage";
import PlayerJoinPage  from "./pages/PlayerJoinPage";
import PlayerPage      from "./pages/PlayerPage";
import { Spinner, Stars } from "./components/ui";
import { T } from "./constants";

const isConfigured = !Object.values(FIREBASE_CONFIG).some(
  v => typeof v === "string" && v.startsWith("PASTE_")
);

// Read ?room=XXXXXX from URL
function getRoomFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("room") || null;
}

// Determine if we're on the admin path
function isAdminPath() {
  return window.location.pathname.startsWith("/admin");
}

export default function App() {
  // Auth state
  const [authLoading, setAuthLoading] = useState(true);
  const [adminUser,   setAdminUser]   = useState(null);

  // Player session (persisted in sessionStorage so refresh keeps you in)
  const [playerSession, setPlayerSession] = useState(() => {
    try {
      const s = sessionStorage.getItem("amogus_player");
      return s ? JSON.parse(s) : null;
    } catch { return null; }
  });

  // URL room code (from QR scan or shared link)
  const urlRoomCode = getRoomFromUrl();

  // Listen to Firebase auth state
  useEffect(() => {
    if (!isConfigured) return;
    const unsub = onAuthChange(user => {
      setAdminUser(user);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  const handlePlayerJoin = ({ room, roomCode, player }) => {
    const session = { roomCode, playerId: player.id, player };
    setPlayerSession(session);
    try { sessionStorage.setItem("amogus_player", JSON.stringify(session)); } catch {}
  };

  const handlePlayerLeave = () => {
    setPlayerSession(null);
    try { sessionStorage.removeItem("amogus_player"); } catch {}
    // Remove room param from URL cleanly
    window.history.replaceState({}, "", window.location.pathname);
  };

  // ── Not configured ──────────────────────────────────────────────────────────
  if (!isConfigured) return <SetupPage />;

  // ── Auth loading ────────────────────────────────────────────────────────────
  if (authLoading) {
    return (
      <div style={{ minHeight:"100vh", background:T.bg, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:16, position:"relative" }}>
        <Stars />
        <div style={{ position:"relative", zIndex:1, textAlign:"center" }}>
          <Spinner />
          <div style={{ color:"#2a3a60", fontSize:"0.78rem", letterSpacing:"2px", marginTop:16 }}>
            INITIALISING…
          </div>
        </div>
      </div>
    );
  }

  // ── ADMIN PATH ──────────────────────────────────────────────────────────────
  if (isAdminPath()) {
    if (!adminUser) return <AdminAuthPage />;
    return <AdminRoomPage adminUser={adminUser} />;
  }

  // ── PLAYER PATH ─────────────────────────────────────────────────────────────

  // Already in a session → go straight to game
  if (playerSession) {
    return (
      <PlayerPage
        roomCode={playerSession.roomCode}
        initialPlayer={playerSession.player}
        onLeave={handlePlayerLeave}
      />
    );
  }

  // Join page — pre-fill room code if coming from QR / shared link
  return (
    <PlayerJoinPage
      initialRoomCode={urlRoomCode}
      onJoin={handlePlayerJoin}
    />
  );
}
