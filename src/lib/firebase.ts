import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration using Vite environment variables
const firebaseConfig = {
  apiKey: "AIzaSyCG4UijPi9jFObhGRUyDZrXeSoPgK52AoQ",
  authDomain: "kitchencopilot-f2f5d.firebaseapp.com",
  projectId: "kitchencopilot-f2f5d",
  storageBucket: "kitchencopilot-f2f5d.firebasestorage.app",
  messagingSenderId: "650368019347",
  appId: "1:650368019347:web:2a86391880f11847eb9666",
  measurementId: "G-JZCRHMMBX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics safely (only runs in browser, not during SSR)
export const analytics = typeof window !== "undefined" ? getAnalytics(app) : null;

// Initialize Firestore for CRUD operations
export const db = getFirestore(app);

export default app;
