import { initializeApp }                          from "firebase/app";
import { getDatabase, ref, set, update, onValue, off, push } from "firebase/database";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { FIREBASE_CONFIG } from "./config";

const app  = initializeApp(FIREBASE_CONFIG);
const db   = getDatabase(app);
export const auth = getAuth(app);

// ── Auth helpers ──────────────────────────────────────────────────────────────

export const loginAdmin  = (email, password) => signInWithEmailAndPassword(auth, email, password);
export const logoutAdmin = ()                 => signOut(auth);

/** Call this once to register the first admin account */
export const registerAdmin = (email, password) => createUserWithEmailAndPassword(auth, email, password);

export const onAuthChange = (cb) => onAuthStateChanged(auth, cb);

// ── Database helpers ──────────────────────────────────────────────────────────

export const dbSet    = (path, val) => set(ref(db, path), val);
export const dbUpdate = (path, val) => update(ref(db, path), val);
export const dbPush   = (path, val) => push(ref(db, path), val);

export function dbListen(path, cb) {
  const r = ref(db, path);
  onValue(r, snap => cb(snap.val()));
  return () => off(r);
}

// ── Room data shape ───────────────────────────────────────────────────────────

export const DEFAULT_ROOM = {
  phase:        "lobby",   // lobby | voting | results
  players:      {},        // { [id]: { id, name, color, alive, isImpostor } }
  votes:        {},        // { [voterName]: targetName | "skip" }
  kickedPlayer: "",
  votingOpen:   false,
  impostorCount: 1,
  createdAt:    0,
};
