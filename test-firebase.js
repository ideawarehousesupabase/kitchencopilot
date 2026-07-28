import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "\"AIzaSyCG4UijPi9jFObhGRUyDZrXeSoPgK52AoQ\"", // With quotes
  authDomain: "kitchencopilot-f2f5d.firebaseapp.com",
  projectId: "kitchencopilot-f2f5d",
  storageBucket: "kitchencopilot-f2f5d.firebasestorage.app",
  messagingSenderId: "650368019347",
  appId: "1:650368019347:web:c0ba383297d35da0eb9666",
  measurementId: "G-3SGLZLSG8K"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function test() {
  console.log("Starting test with quotes...");
  try {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("email", "==", "test@example.com"));
    console.log("Fetching docs...");
    const snapshot = await getDocs(q);
    console.log("Success! Docs found:", snapshot.size);
    process.exit(0);
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

test();
