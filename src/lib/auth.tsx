import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { collection, query, where, getDocs, setDoc, doc, updateDoc } from "firebase/firestore";
import { db } from "./firebase";

export type User = {
  id: string;
  restaurantName: string;
  ownerName: string;
  email: string;
  password: string;
  createdAt: string;
};

const SESSION_KEY = "akc_session";

type AuthState = {
  user: User | null;
  ready: boolean;
  register: (data: Omit<User, "id" | "createdAt">) => Promise<{ ok: boolean; error?: string }>;
  login: (email: string, password: string) => Promise<{ ok: boolean; error?: string }>;
  logout: () => void;
  updatePassword: (newPassword: string) => Promise<void>;
  updateProfile: (data: { restaurantName: string; ownerName: string; email: string }) => Promise<{ ok: boolean; error?: string }>;
};

const AuthContext = createContext<AuthState | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw) setUser(JSON.parse(raw));
    } catch {}
    setReady(true);
  }, []);

  const register: AuthState["register"] = async (data) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", data.email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        return { ok: false, error: "An account with that email already exists." };
      }

      const id = crypto.randomUUID();
      const newUser: User = {
        ...data,
        id,
        createdAt: new Date().toISOString(),
      };

      await setDoc(doc(usersRef, id), newUser);
      localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
      setUser(newUser);
      return { ok: true };
    } catch (error: any) {
      return { ok: false, error: error.message || "Failed to register" };
    }
  };

  const login: AuthState["login"] = async (email, password) => {
    try {
      const usersRef = collection(db, "users");
      const q = query(usersRef, where("email", "==", email.toLowerCase()));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        return { ok: false, error: "Invalid email or password." };
      }

      let match: User | null = null;
      querySnapshot.forEach((docSnap) => {
        const u = docSnap.data() as User;
        if (u.password === password) {
          match = u;
        }
      });

      if (!match) return { ok: false, error: "Invalid email or password." };

      localStorage.setItem(SESSION_KEY, JSON.stringify(match));
      setUser(match);
      return { ok: true };
    } catch (error: any) {
      return { ok: false, error: error.message || "Failed to login" };
    }
  };

  const logout = () => {
    localStorage.removeItem(SESSION_KEY);
    setUser(null);
  };

  const updatePassword = async (newPassword: string) => {
    if (!user) return;
    try {
      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, { password: newPassword });
      
      const updated = { ...user, password: newPassword };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      setUser(updated);
    } catch (e) {
      console.error("Failed to update password", e);
    }
  };

  const updateProfile: AuthState["updateProfile"] = async (data) => {
    if (!user) return { ok: false, error: "Not signed in" };
    try {
      if (data.email.toLowerCase() !== user.email.toLowerCase()) {
        const usersRef = collection(db, "users");
        const q = query(usersRef, where("email", "==", data.email.toLowerCase()));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          return { ok: false, error: "Email already in use." };
        }
      }

      const userRef = doc(db, "users", user.id);
      await updateDoc(userRef, data);
      
      const updated = { ...user, ...data };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      setUser(updated);
      return { ok: true };
    } catch (error: any) {
       return { ok: false, error: error.message || "Failed to update profile" };
    }
  };

  return (
    <AuthContext.Provider value={{ user, ready, register, login, logout, updatePassword, updateProfile }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
  return ctx;
}
