import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./utils-C_uf36nf.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { T as ChevronRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ui-kit-DRIPXloY.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Skeleton({ className, ...props }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("animate-pulse rounded-md bg-primary/10", className),
		...props
	});
}
var ROUTE_LABELS = {
	dashboard: "Dashboard",
	forecast: "Demand Forecast",
	prep: "Prep Planner",
	inventory: "Inventory",
	waste: "Waste Analytics",
	memory: "Kitchen Memory",
	promotions: "Promotion Insights",
	reports: "Reports",
	profile: "Profile"
};
function Breadcrumb() {
	const segs = useRouterState({ select: (s) => s.location.pathname }).split("/").filter(Boolean);
	const last = segs[segs.length - 1];
	const label = last && ROUTE_LABELS[last] || "Dashboard";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "mb-2 flex items-center gap-1.5 text-xs text-muted-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/dashboard",
				className: "transition-colors hover:text-foreground",
				children: "Home"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3 w-3" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-foreground",
				children: label
			})
		]
	});
}
function PageHeader({ title, subtitle, action }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Breadcrumb, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-wrap items-end justify-between gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-2xl font-bold sm:text-3xl",
					children: title
				}), subtitle && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: subtitle
				})]
			}), action && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "shrink-0",
				children: action
			})]
		})]
	});
}
function StatCard({ label, value, delta, icon: Icon, tone = "primary", onClick }) {
	const toneClass = {
		primary: "text-primary bg-primary/10 ring-primary/20",
		warning: "text-warning bg-warning/10 ring-warning/20",
		destructive: "text-destructive bg-destructive/10 ring-destructive/20",
		muted: "text-muted-foreground bg-muted ring-border"
	}[tone];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		role: onClick ? "button" : void 0,
		tabIndex: onClick ? 0 : void 0,
		onKeyDown: (e) => onClick && (e.key === "Enter" || e.key === " ") && onClick(),
		className: cn("rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200", onClick ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40" : ""),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-medium uppercase tracking-wide text-muted-foreground",
					children: label
				}), Icon && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: cn("grid h-9 w-9 place-items-center rounded-lg ring-1", toneClass),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-4 w-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-3 font-display text-3xl font-bold",
				children: value
			}),
			delta && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-xs text-muted-foreground",
				children: delta
			})
		]
	});
}
function Panel({ title, action, children, className, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		onClick,
		className: cn("rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md", onClick && "cursor-pointer hover:-translate-y-0.5 hover:border-primary/40", className),
		children: [(title || action) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center justify-between gap-2",
			children: [title && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold",
				children: title
			}), action]
		}), children]
	});
}
function StatusBadge({ status, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		onClick,
		disabled: !onClick,
		className: cn("inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 transition-all", {
			High: "bg-destructive/15 text-destructive ring-destructive/30",
			Medium: "bg-warning/15 text-warning ring-warning/30",
			Low: "bg-primary/15 text-primary ring-primary/30",
			Pending: "bg-warning/15 text-warning ring-warning/30",
			"In Progress": "bg-chart-2/15 text-chart-2 ring-chart-2/30",
			Completed: "bg-primary/15 text-primary ring-primary/30",
			Done: "bg-primary/15 text-primary ring-primary/30",
			ok: "bg-primary/15 text-primary ring-primary/30",
			low: "bg-destructive/15 text-destructive ring-destructive/30",
			Good: "bg-primary/15 text-primary ring-primary/30",
			Moderate: "bg-warning/15 text-warning ring-warning/30",
			Avoid: "bg-destructive/15 text-destructive ring-destructive/30",
			Active: "bg-primary/15 text-primary ring-primary/30",
			Paused: "bg-muted text-muted-foreground ring-border"
		}[status] ?? "bg-muted text-muted-foreground ring-border", onClick ? "cursor-pointer hover:scale-105" : "cursor-default"),
		children: status === "ok" ? "In Stock" : status === "low" ? "Low Stock" : status
	});
}
function ProgressBar({ value, max, tone = "primary" }) {
	const pct = Math.min(100, Math.round(value / max * 100));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-2 w-full overflow-hidden rounded-full bg-muted",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("h-full rounded-full transition-all", tone === "destructive" ? "bg-destructive" : tone === "warning" ? "bg-warning" : "bg-primary"),
			style: { width: `${pct}%` }
		})
	});
}
function usePageLoading(ms = 900) {
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		const t = setTimeout(() => setLoading(false), ms);
		return () => clearTimeout(t);
	}, [ms]);
	return loading;
}
function PageSkeleton() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6 animate-pulse",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-3 w-32" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-8 w-64" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-4 w-96 max-w-full" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: Array.from({ length: 4 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-28 rounded-xl" }, i))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-72 rounded-xl lg:col-span-2" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-72 rounded-xl" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Skeleton, { className: "h-64 rounded-xl" })
		]
	});
}
function ConfirmDialog({ open, onOpenChange, title, description, confirmLabel = "Confirm", cancelLabel = "Cancel", onConfirm, destructive }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 animate-in fade-in",
		onClick: () => onOpenChange(false),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			onClick: (e) => e.stopPropagation(),
			className: "w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-lg font-semibold",
					children: title
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: description
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => onOpenChange(false),
						className: "rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-muted",
						children: cancelLabel
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							onConfirm();
							onOpenChange(false);
						},
						className: cn("rounded-md px-4 py-2 text-sm font-medium transition-all hover:scale-105", destructive ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground"),
						children: confirmLabel
					})]
				})
			]
		})
	});
}
//#endregion
export { ProgressBar as a, usePageLoading as c, Panel as i, PageHeader as n, StatCard as o, PageSkeleton as r, StatusBadge as s, ConfirmDialog as t };
