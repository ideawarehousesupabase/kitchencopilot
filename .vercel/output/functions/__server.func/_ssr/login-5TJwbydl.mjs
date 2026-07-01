import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link, m as createFileRoute, p as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
import { D as ChefHat } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-5TJwbydl.js
var import_jsx_runtime = require_jsx_runtime();
var $$splitComponentImporter = () => import("./login-UCE5P4gF.mjs");
var Route = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function AuthShell({ title, subtitle, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cream-theme grid min-h-screen bg-background text-foreground lg:grid-cols-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "auth-left-panel relative hidden flex-col justify-between p-12 lg:flex",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-8 w-8 place-items-center rounded-md bg-foreground text-background",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-4 w-4" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-sm font-semibold tracking-widest",
						children: ["KITCHEN", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("sup", {
							className: "text-[10px]",
							children: "©"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs font-bold tracking-widest",
						children: "01. \xA0 OPERATIONAL AI"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "mt-6 font-display text-5xl font-bold leading-[1.05]",
						children: [
							"Kitchen",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Copilot",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Collection"
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-6 max-w-sm text-sm text-muted-foreground",
						children: "An operational intelligence layer for modern kitchens — built to cut waste, plan prep and turn every shift into measurable margin."
					})
				] }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-4 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2026" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-24 bg-foreground/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "by AI Kitchen Copilot" })
					]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center bg-background p-8",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "text-xs tracking-widest text-muted-foreground hover:text-foreground",
						children: "← BACK"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "mt-6 text-3xl font-bold",
						children: title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-muted-foreground",
						children: subtitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8",
						children
					})
				]
			})
		})]
	});
}
//#endregion
export { Route as n, AuthShell as t };
