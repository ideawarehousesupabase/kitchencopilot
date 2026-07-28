import { i as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as createClient } from "../_libs/supabase__supabase-js.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BBuG9jMo.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var supabase = createClient("https://uuvvsewciqienjjtqadk.supabase.co", "sb_publishable_lG2Vu1hsvman4Enm9YXieg_IaxTt8eC");
var SESSION_KEY = "akc_session";
var AuthContext = (0, import_react.createContext)(null);
function AuthProvider({ children }) {
	const [user, setUser] = (0, import_react.useState)(null);
	const [ready, setReady] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(SESSION_KEY);
			if (raw) setUser(JSON.parse(raw));
		} catch {}
		setReady(true);
	}, []);
	const register = async (data) => {
		try {
			const { data: existingUsers, error: checkError } = await supabase.from("users").select("id").eq("email", data.email.toLowerCase());
			if (checkError) throw checkError;
			if (existingUsers && existingUsers.length > 0) return {
				ok: false,
				error: "An account with that email already exists."
			};
			const id = crypto.randomUUID();
			const newUser = {
				...data,
				id,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			const { error: insertError } = await supabase.from("users").insert(newUser);
			if (insertError) throw insertError;
			localStorage.setItem(SESSION_KEY, JSON.stringify(newUser));
			setUser(newUser);
			return { ok: true };
		} catch (error) {
			console.error(error);
			return {
				ok: false,
				error: error.message || "Failed to register"
			};
		}
	};
	const login = async (email, password) => {
		try {
			const { data: users, error } = await supabase.from("users").select("*").eq("email", email.toLowerCase());
			if (error) throw error;
			if (!users || users.length === 0) return {
				ok: false,
				error: "Invalid email or password."
			};
			const match = users.find((u) => u.password === password);
			if (!match) return {
				ok: false,
				error: "Invalid email or password."
			};
			const loggedInUser = match;
			localStorage.setItem(SESSION_KEY, JSON.stringify(loggedInUser));
			setUser(loggedInUser);
			return { ok: true };
		} catch (error) {
			console.error(error);
			return {
				ok: false,
				error: error.message || "Failed to login"
			};
		}
	};
	const logout = () => {
		localStorage.removeItem(SESSION_KEY);
		setUser(null);
	};
	const updatePassword = async (newPassword) => {
		if (!user) return;
		try {
			const { error } = await supabase.from("users").update({ password: newPassword }).eq("id", user.id);
			if (error) throw error;
			const updated = {
				...user,
				password: newPassword
			};
			localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
			setUser(updated);
		} catch (e) {
			console.error("Failed to update password", e);
		}
	};
	const updateProfile = async (data) => {
		if (!user) return {
			ok: false,
			error: "Not signed in"
		};
		try {
			if (data.email.toLowerCase() !== user.email.toLowerCase()) {
				const { data: existingUsers, error: checkError } = await supabase.from("users").select("id").eq("email", data.email.toLowerCase());
				if (checkError) throw checkError;
				if (existingUsers && existingUsers.length > 0) return {
					ok: false,
					error: "Email already in use."
				};
			}
			const { error } = await supabase.from("users").update(data).eq("id", user.id);
			if (error) throw error;
			const updated = {
				...user,
				...data
			};
			localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
			setUser(updated);
			return { ok: true };
		} catch (error) {
			console.error(error);
			return {
				ok: false,
				error: error.message || "Failed to update profile"
			};
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthContext.Provider, {
		value: {
			user,
			ready,
			register,
			login,
			logout,
			updatePassword,
			updateProfile
		},
		children
	});
}
function useAuth() {
	const ctx = (0, import_react.useContext)(AuthContext);
	if (!ctx) throw new Error("useAuth must be used inside AuthProvider");
	return ctx;
}
//#endregion
export { useAuth as n, AuthProvider as t };
