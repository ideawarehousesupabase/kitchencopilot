import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { s as initializeApp, t as getAnalytics } from "../_libs/@firebase/analytics+[...].mjs";
import { a as where, c as getFirestore, i as updateDoc, n as query, o as collection, r as setDoc, s as doc, t as getDocs } from "../_libs/@firebase/firestore+[...].mjs";
import "../_libs/firebase.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/auth-BQIqXjTF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var app = initializeApp({
	apiKey: "AIzaSyDTUOdrJ3ayRTbmedhrZvER9M1fpEhEF1k",
	authDomain: "kitchencopilot-3a694.firebaseapp.com",
	projectId: "kitchencopilot-3a694",
	storageBucket: "kitchencopilot-3a694.firebasestorage.app",
	messagingSenderId: "663840451059",
	appId: "1:663840451059:web:45a8a9c81bdab94ae30a86",
	measurementId: "G-7Y1P8X188G"
});
typeof window !== "undefined" && getAnalytics(app);
var db = getFirestore(app);
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
			const usersRef = collection(db, "users");
			if (!(await getDocs(query(usersRef, where("email", "==", data.email.toLowerCase())))).empty) return {
				ok: false,
				error: "An account with that email already exists."
			};
			const id = crypto.randomUUID();
			const newUser = {
				...data,
				id,
				createdAt: (/* @__PURE__ */ new Date()).toISOString()
			};
			await setDoc(doc(usersRef, id), newUser);
			return { ok: true };
		} catch (error) {
			return {
				ok: false,
				error: error.message || "Failed to register"
			};
		}
	};
	const login = async (email, password) => {
		try {
			const querySnapshot = await getDocs(query(collection(db, "users"), where("email", "==", email.toLowerCase())));
			if (querySnapshot.empty) return {
				ok: false,
				error: "Invalid email or password."
			};
			let match = null;
			querySnapshot.forEach((docSnap) => {
				const u = docSnap.data();
				if (u.password === password) match = u;
			});
			if (!match) return {
				ok: false,
				error: "Invalid email or password."
			};
			localStorage.setItem(SESSION_KEY, JSON.stringify(match));
			setUser(match);
			return { ok: true };
		} catch (error) {
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
			await updateDoc(doc(db, "users", user.id), { password: newPassword });
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
				if (!(await getDocs(query(collection(db, "users"), where("email", "==", data.email.toLowerCase())))).empty) return {
					ok: false,
					error: "Email already in use."
				};
			}
			await updateDoc(doc(db, "users", user.id), data);
			const updated = {
				...user,
				...data
			};
			localStorage.setItem(SESSION_KEY, JSON.stringify(updated));
			setUser(updated);
			return { ok: true };
		} catch (error) {
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
