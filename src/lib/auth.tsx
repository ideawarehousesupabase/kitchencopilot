import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { supabase } from "./supabase";

export type User = {
  id: string;
  restaurantName: string;
  ownerName: string;
  email: string;
  password: string; // Storing password in plain text as requested by the original implementation (no external auth provider)
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
      // Check if email already exists
      const { data: existingUsers, error: checkError } = await supabase
        .from("users")
        .select("id")
        .eq("email", data.email.toLowerCase());

      if (checkError) throw checkError;

      if (existingUsers && existingUsers.length > 0) {
        return { ok: false, error: "An account with that email already exists." };
      }

      const id = crypto.randomUUID();
      const newUser: User = {
        ...data,
        id,
        createdAt: new Date().toISOString(),
      };

      // Insert new user
      const { error: insertError } = await supabase
        .from("users")
        .insert(newUser);

      if (insertError) throw insertError;

      localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
      setUser(newUser);
      return { ok: true };
    } catch (error: any) {
      console.error(error);
      return { ok: false, error: error.message || "Failed to register" };
    }
  };

  const login: AuthState["login"] = async (email, password) => {
    try {
      const { data: users, error } = await supabase
        .from("users")
        .select("*")
        .eq("email", email.toLowerCase());

      if (error) throw error;

      if (!users || users.length === 0) {
        return { ok: false, error: "Invalid email or password." };
      }

      const match = users.find((u) => u.password === password);

      if (!match) {
        return { ok: false, error: "Invalid email or password." };
      }

      const loggedInUser = match as User;
      localStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser));
      setUser(loggedInUser);
      return { ok: true };
    } catch (error: any) {
      console.error(error);
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
      const { error } = await supabase
        .from("users")
        .update({ password: newPassword })
        .eq("id", user.id);

      if (error) throw error;
      
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
        const { data: existingUsers, error: checkError } = await supabase
          .from("users")
          .select("id")
          .eq("email", data.email.toLowerCase());

        if (checkError) throw checkError;

        if (existingUsers && existingUsers.length > 0) {
          return { ok: false, error: "Email already in use." };
        }
      }

      const { error } = await supabase
        .from("users")
        .update(data)
        .eq("id", user.id);

      if (error) throw error;
      
      const updated = { ...user, ...data };
      localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
      setUser(updated);
      return { ok: true };
    } catch (error: any) {
       console.error(error);
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
