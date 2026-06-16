
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBzV9o5D7pfKmpTFiyGiF52waHT3JZTUXs",
  authDomain: "among-us-event.firebaseapp.com",
  projectId: "among-us-event",
  databaseURL: " https://among-us-event-default-rtdb.firebaseio.com",
  storageBucket: "among-us-event.firebasestorage.app",
  messagingSenderId: "345348274817",
  appId: "1:345348274817:web:7089f775af93f417aa6b80",
  measurementId: "G-T6Y4MELJ9C"
};

// Initialize Firebase
const app = initializeApp(FIREBASE_CONFIG);
const analytics = getAnalytics(app);
