import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { n as useAuth } from "./_ssr/auth-BQIqXjTF.mjs";
import { P as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { b as EyeOff, h as LogOut, p as Pencil, y as Eye } from "./_libs/lucide-react.mjs";
import { c as usePageLoading, i as Panel, n as PageHeader, r as PageSkeleton, t as ConfirmDialog } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-3HhpKDcy.mjs";
import { t as Label } from "./_ssr/label-DBD1bRRP.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.profile-BC38DENw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ProfilePage() {
	const loading = usePageLoading();
	const { user, logout, updatePassword, updateProfile } = useAuth();
	const navigate = useNavigate();
	const [pwd, setPwd] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [showPwd, setShowPwd] = (0, import_react.useState)(false);
	const [showConfirm, setShowConfirm] = (0, import_react.useState)(false);
	const [editOpen, setEditOpen] = (0, import_react.useState)(false);
	const [confirmLogout, setConfirmLogout] = (0, import_react.useState)(false);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	if (!user) return null;
	const onUpdate = async (e) => {
		e.preventDefault();
		if (pwd.length < 6) return toast.error("Password must be at least 6 characters.");
		if (pwd !== confirm) return toast.error("Passwords do not match.");
		await updatePassword(pwd);
		setPwd("");
		setConfirm("");
		toast.success("Password updated successfully.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Profile",
				subtitle: "Manage your account and credentials."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					className: "lg:col-span-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-20 w-20 place-items-center rounded-full bg-primary/15 text-2xl font-bold text-primary ring-1 ring-primary/30",
								children: user.ownerName.charAt(0).toUpperCase()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-4 text-lg font-semibold",
								children: user.ownerName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm text-muted-foreground",
								children: user.email
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary ring-1 ring-primary/30",
								children: user.restaurantName
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
								variant: "destructive",
								className: "mt-6 w-full transition-transform hover:scale-105",
								onClick: () => setConfirmLogout(true),
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "mr-2 h-4 w-4" }), " Logout"]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-2 space-y-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Account Details",
						action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2",
							onClick: () => setEditOpen(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "h-3.5 w-3.5" }), " Edit Profile"]
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-4 sm:grid-cols-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Restaurant Name",
									value: user.restaurantName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Owner Name",
									value: user.ownerName
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Email",
									value: user.email
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
									label: "Member Since",
									value: new Date(user.createdAt).toLocaleDateString()
								})
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Change Password",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "grid gap-4 sm:grid-cols-2",
							onSubmit: onUpdate,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
									id: "pwd",
									label: "New Password",
									value: pwd,
									onChange: setPwd,
									show: showPwd,
									setShow: setShowPwd
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PasswordField, {
									id: "confirm",
									label: "Confirm",
									value: confirm,
									onChange: setConfirm,
									show: showConfirm,
									setShow: setShowConfirm
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "sm:col-span-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										type: "submit",
										className: "transition-transform hover:scale-105",
										children: "Update Password"
									})
								})
							]
						})
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditProfileDialog, {
				open: editOpen,
				onOpenChange: setEditOpen,
				initial: {
					restaurantName: user.restaurantName,
					ownerName: user.ownerName,
					email: user.email
				},
				onSave: async (d) => {
					const res = await updateProfile(d);
					if (!res.ok) return toast.error(res.error ?? "Could not save profile.");
					toast.success("Profile updated successfully.");
					setEditOpen(false);
				}
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmDialog, {
				open: confirmLogout,
				onOpenChange: setConfirmLogout,
				title: "Logout?",
				description: "You'll need to sign in again to access your kitchen dashboard.",
				confirmLabel: "Logout",
				destructive: true,
				onConfirm: () => {
					logout();
					toast.success("Logged out successfully.");
					navigate({ to: "/" });
				}
			})
		]
	});
}
function Field({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "text-xs uppercase tracking-wide text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-1 text-sm font-medium",
		children: value
	})] });
}
function PasswordField({ id, label, value, onChange, show, setShow }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
		htmlFor: id,
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
			id,
			type: show ? "text" : "password",
			value,
			onChange: (e) => onChange(e.target.value),
			className: "pr-10"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			onClick: () => setShow(!show),
			className: "absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground",
			"aria-label": show ? "Hide password" : "Show password",
			children: show ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" })
		})]
	})] });
}
function EditProfileDialog({ open, onOpenChange, initial, onSave }) {
	const [form, setForm] = (0, import_react.useState)(initial);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
		open,
		onOpenChange: (o) => {
			onOpenChange(o);
			if (o) setForm(initial);
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: "Edit Profile" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Update your account information." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
			onSubmit: (e) => {
				e.preventDefault();
				onSave(form);
			},
			className: "grid gap-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "r",
					children: "Restaurant Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "r",
					value: form.restaurantName,
					onChange: (e) => setForm({
						...form,
						restaurantName: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "o",
					children: "Owner Name"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "o",
					value: form.ownerName,
					onChange: (e) => setForm({
						...form,
						ownerName: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Label, {
					htmlFor: "e",
					children: "Email"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
					id: "e",
					type: "email",
					value: form.email,
					onChange: (e) => setForm({
						...form,
						email: e.target.value
					})
				})] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex justify-end gap-2 pt-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "button",
						variant: "outline",
						onClick: () => onOpenChange(false),
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
						type: "submit",
						children: "Save Changes"
					})]
				})
			]
		})] })
	});
}
//#endregion
export { ProfilePage as component };
