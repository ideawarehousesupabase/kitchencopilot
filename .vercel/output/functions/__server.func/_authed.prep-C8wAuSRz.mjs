import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { P as Sparkles, x as Download } from "./_libs/lucide-react.mjs";
import { c as usePageLoading, i as Panel, n as PageHeader, r as PageSkeleton, s as StatusBadge } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { o as prepPlan } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.prep-C8wAuSRz.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var STATUS_CYCLE = [
	"Pending",
	"In Progress",
	"Completed"
];
function PrepPage() {
	const loading = usePageLoading();
	const [rows, setRows] = (0, import_react.useState)(() => prepPlan.map((p) => ({
		...p,
		status: p.status === "Done" ? "Completed" : p.status
	})));
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	const cycle = (dish) => {
		setRows((rs) => rs.map((r) => {
			if (r.dish !== dish) return r;
			const next = STATUS_CYCLE[(STATUS_CYCLE.indexOf(r.status) + 1) % STATUS_CYCLE.length];
			return {
				...r,
				status: next
			};
		}));
	};
	const generate = () => {
		setRows(prepPlan.map((p) => ({
			...p,
			status: "Pending"
		})));
		toast.success("New preparation plan generated.");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
			title: "Prep Planner",
			subtitle: "AI-recommended preparation quantities for each station. Click a status to advance it.",
			action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					variant: "outline",
					size: "sm",
					className: "gap-2 transition-transform hover:scale-105",
					onClick: () => toast.success("Prep plan exported successfully."),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Prep Plan"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
					size: "sm",
					className: "gap-2 transition-transform hover:scale-105",
					onClick: generate,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }), " Generate Prep Plan"]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Dish" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Current Stock"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Recommended Prep"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Priority" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
					className: "text-right",
					children: "Estimated Time"
				})
			] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableBody, { children: rows.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
				className: "transition-colors hover:bg-muted/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "font-medium",
						children: p.dish
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right",
						children: p.current
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right font-semibold text-primary",
						children: p.recommended
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: p.priority }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, {
						status: p.status,
						onClick: () => cycle(p.dish)
					}) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
						className: "text-right text-muted-foreground",
						children: p.time
					})
				]
			}, p.dish)) })] })
		}) })]
	});
}
//#endregion
export { PrepPage as component };
