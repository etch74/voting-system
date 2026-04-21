# 🔴 Among Us — Live Action Voting System v3

Real-time multi-device voting with Firebase Auth, auto-generated room codes, QR codes, impostor assignment, and ejection animations.

---

## Project Structure

```
src/
├── firebase/
│   ├── config.js                ← 🔥 paste your Firebase config here
│   └── db.js                    ← auth + database helpers
├── pages/
│   ├── AdminAuthPage.jsx        ← Firebase email/password login & register
│   ├── AdminRoomPage.jsx        ← room management, QR code, player control
│   ├── PlayerJoinPage.jsx       ← join via QR scan, URL, or manual code
│   ├── PlayerPage.jsx           ← live game view
│   └── SetupPage.jsx            ← shown before Firebase is configured
├── components/
│   ├── Crewmate.jsx             ← SVG crewmate
│   ├── EjectionScreen.jsx       ← 🎉 celebration / 😱 failure animation
│   ├── QRCode.jsx               ← QR code canvas renderer
│   ├── VoteTally.jsx            ← live vote bars (admin)
│   ├── VoteResults.jsx          ← sorted results + ejection card
│   └── ui.jsx                   ← Btn, Card, Pill, Stars, Spinner, Input
├── constants.js                 ← colors, design tokens, generateRoomCode()
├── App.jsx                      ← root: auth listener + path routing
├── main.jsx
└── index.css
```

---

## Step 1 — Firebase Setup (~5 min, free)

### 1. Create a project
- Go to **firebase.google.com** → sign in → **Add project**

### 2. Enable Realtime Database
- Sidebar → **Realtime Database** → **Create database**
- Choose region → **Start in test mode** → Enable

### 3. Enable Authentication
- Sidebar → **Authentication** → **Get started**
- **Sign-in method** tab → **Email/Password** → Enable → Save

### 4. Get your config
- **⚙ gear** → **Project Settings** → scroll to **Your apps** → click **</>**
- Register a web app → copy the `firebaseConfig`

### 5. Paste config
Open **`src/firebase/config.js`** and replace each placeholder:
```js
export const FIREBASE_CONFIG = {
  apiKey:            "YOUR_KEY",
  authDomain:        "YOUR_DOMAIN",
  databaseURL:       "YOUR_DB_URL",
  projectId:         "YOUR_PROJECT",
  storageBucket:     "YOUR_BUCKET",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID",
};
```

---

## Step 2 — Install & run

```bash
npm install
npm run dev
```

---

## Step 3 — Create your admin account

1. Open **`http://localhost:5173/admin`**
2. Click "No account? Register here"
3. Enter your email + password → Create Account
4. You're now logged into the admin panel

> You only need to register once. Next time just log in.

---

## Step 4 — Deploy to Vercel

Players need a real URL to access from their phones.

```bash
npm run build
npx vercel deploy dist
```

Or drag `dist/` to **vercel.com** → Deploy.  
You get a URL like `https://your-project.vercel.app`.

---

## How it works

### URLs
| URL | Who |
|-----|-----|
| `https://your-app.vercel.app/` | Players |
| `https://your-app.vercel.app/admin` | Host / Admin |
| `https://your-app.vercel.app/?room=XK92AF` | Direct room link (from QR) |

### Running an event

**Before the game:**
1. Admin opens `/admin` → logs in → **Create New Room**
2. A 6-character room code is generated (e.g. `XK92AF`)
3. Admin sees the join URL + **QR Code** button
4. Show the QR code on a screen — players scan it and land directly in the room
5. Or share the URL / code manually
6. Admin adds players (name + color), sets impostor count, clicks **ASSIGN**

**Each player on their phone:**
1. Scans QR or opens the URL
2. Enters their name (must match what admin added)
3. Sees their role: **✅ CREWMATE** or **🔪 IMPOSTOR**

**Each voting round:**
1. Admin → 🚨 **Start Emergency Meeting**
2. Players vote on their phones
3. Admin → 📊 **Reveal Votes**
4. **Ejection animation plays on every device:**
   - Crewmate falls and spins off screen
   - **Impostor caught** → green screen + confetti + CREWMATES WIN
   - **Wrong person** → red screen + shake + IMPOSTORS STILL LURK
   - Real impostors are revealed
5. Admin → 🔄 **Back to Lobby** for next round

### Sessions
- Admin stays logged in via Firebase Auth (survives refresh)
- Players stay in the room via sessionStorage (survives refresh, cleared on leave)
- Multiple rooms can exist simultaneously — useful for running parallel games

---

## Firebase Database Rules

Test mode rules expire after 30 days. Set permanent rules:

```json
{
  "rules": {
    "rooms": {
      "$roomCode": {
        ".read": true,
        ".write": true
      }
    },
    "admins": {
      "$uid": {
        ".read": "auth != null && auth.uid === $uid",
        ".write": "auth != null && auth.uid === $uid"
      }
    }
  }
}
```
