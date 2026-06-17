import { useEffect, useMemo, useState } from "react";
import { dbListen } from "../firebase/db";
import { T } from "../constants";
import logo from "../images/logo.png";
import VoteTally from "../components/VoteTally";
import VoteResults from "../components/VoteResults";
import EjectionScreen from "../components/EjectionScreen";
import { Card, SectionLabel, Spinner, Stars } from "../components/ui";

function toClock(ms) {
  const safeMs = Math.max(0, ms);
  const totalSeconds = Math.ceil(safeMs / 1000);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

export default function DisplayPage({ initialRoomCode }) {
  const [roomCodeInput, setRoomCodeInput] = useState((initialRoomCode || "").toUpperCase());
  const [roomCode, setRoomCode] = useState((initialRoomCode || "").toUpperCase());
  const [room, setRoom] = useState(null);
  const [loading, setLoading] = useState(!!initialRoomCode);
  const [error, setError] = useState("");
  const [now, setNow] = useState(Date.now());
  const [showEjection, setShowEjection] = useState(false);
  const [lastEjectedPlayer, setLastEjectedPlayer] = useState("");

  useEffect(() => {
    if (!roomCode) return;
    setLoading(true);
    const unsub = dbListen(`rooms/${roomCode}`, val => {
      setRoom(val);
      setLoading(false);
      setError(val ? "" : "Room not found");
    });
    return unsub;
  }, [roomCode]);

  useEffect(() => {
    if (!room?.gameTimerRunning) return;
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, [room?.gameTimerRunning]);

  useEffect(() => {
    if (!room) return;

    const shouldShowEjection = room.phase === "results" && room.kickedPlayer && room.kickedPlayer !== "skip";
    if (shouldShowEjection && room.kickedPlayer !== lastEjectedPlayer) {
      setShowEjection(true);
      setLastEjectedPlayer(room.kickedPlayer);
    } else if (!shouldShowEjection) {
      setShowEjection(false);
      setLastEjectedPlayer("");
    }
  }, [room?.phase, room?.kickedPlayer, room, lastEjectedPlayer]);

  const submitCode = () => {
    const code = roomCodeInput.trim().toUpperCase();
    if (!code) {
      setError("Enter a room code");
      return;
    }
    setRoomCode(code);
    setError("");
  };

  const players = useMemo(() => Object.values(room?.players || {}), [room]);
  const alivePlayers = useMemo(() => players.filter(p => p.alive), [players]);
  const votes = room?.votes || {};

  const gameDurationMs = room?.gameDurationMs || 45 * 60 * 1000;
  const baseRemaining = room?.gameRemainingMs ?? gameDurationMs;
  const elapsedSinceResume = room?.gameTimerRunning && room?.gameTimerStartedAt
    ? now - room.gameTimerStartedAt
    : 0;
  const remainingMs = Math.max(0, baseRemaining - elapsedSinceResume);

  const hasEjectionResult = room?.phase === "results" && room?.kickedPlayer && room?.kickedPlayer !== "skip";
  const showMeetingScreen = room?.phase === "voting" || hasEjectionResult;
  let statusText = "";
  if (room?.phase === "results" && !hasEjectionResult) {
    statusText = "No ejection. Timer continues.";
  } else if (!room?.gameStarted) {
    statusText = "Waiting for admin to start the 45-minute game";
  } else if (room?.gameStarted && room?.gameTimerRunning) {
    statusText = "Game in progress";
  } else if (room?.gameStarted && !room?.gameTimerRunning && remainingMs > 0) {
    statusText = "Paused";
  } else if (room?.gameStarted && remainingMs <= 0) {
    statusText = "Time is up";
  }

  return (
    <div style={{ minHeight: "100vh", background: T.pageBg, color: T.muted, position: "relative", padding: "20px 14px" }}>
      <Stars />
      <div style={{ display:"flex", alignItems:"center", justifyContent:"center", gap:12, marginBottom:18 }}>
        <img src={logo} alt="Among Us IRL" style={{ width:"100px", height:"auto" }} />
        <div style={{ textAlign:"center" }}>
          <div style={{ color:T.muted, fontSize:"0.78rem", letterSpacing:"2px" }}>DISPLAY MODE</div>
        </div>
      </div>
      {showEjection && room?.kickedPlayer && room.kickedPlayer !== "skip" && (
        <EjectionScreen
          kickedPlayer={room.kickedPlayer}
          players={players}
          isImpostor={players.find(p => p.name === room.kickedPlayer)?.isImpostor || false}
          onDone={() => setShowEjection(false)}
        />
      )}
      <div style={{ maxWidth: 960, margin: "0 auto", position: "relative", zIndex: 1 }}>
      

        {loading && (
          <Card style={{ textAlign: "center", padding: "48px 16px" }}>
            <Spinner />
          </Card>
        )}

        {!loading && room && (
          <>
           

            {showMeetingScreen ? (
              <div style={{ display: "flex", justifyContent: "center" }}>
                <Card style={{ border: `1px solid ${room.phase === "voting" ? `${T.blue}55` : `${T.red}55`}`, width: "100%", maxWidth: 960 }}>
                  <SectionLabel>{room.phase === "voting" ? "Emergency Meeting" : "Meeting Results"}</SectionLabel>
                  {room.phase === "voting" ? (
                    <VoteTally alivePlayers={alivePlayers} votes={votes} votingOpen={room.votingOpen} />
                  ) : (
                    <VoteResults votes={votes} kickedPlayer={room.kickedPlayer} players={players} />
                  )}
                </Card>
              </div>
            ) : (
              <Card style={{ textAlign: "center", padding: "50px 20px", border: `1px solid ${T.yellow}33` }}>
                <div style={{ color: T.muted, letterSpacing: "2px", fontSize: "0.8rem", marginBottom: 8 }}>GAME TIMER</div>
                <div style={{ fontFamily: "'Russo One',sans-serif", color: remainingMs > 0 ? T.yellow : T.red, fontSize: "clamp(3rem, 14vw, 8rem)", letterSpacing: "4px", lineHeight: 1 }}>
                  {toClock(remainingMs)}
                </div>
                <div style={{ marginTop: 12, color: T.muted, fontSize: "0.9rem", letterSpacing: "1px" }}>
                  {statusText}
                </div>
              </Card>
            )}
          </>
        )}
      </div>
    </div>
  );
}
