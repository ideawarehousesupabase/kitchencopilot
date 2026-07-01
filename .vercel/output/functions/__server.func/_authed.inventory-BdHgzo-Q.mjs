import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { l as Search, x as Download } from "./_libs/lucide-react.mjs";
import { a as ProgressBar, c as usePageLoading, i as Panel, n as PageHeader, r as PageSkeleton, s as StatusBadge } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { r as inventory } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as TableHeader, i as TableHead, n as TableBody, o as TableRow, r as TableCell, t as Table } from "./_ssr/table-C0WYWEQX.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-3HhpKDcy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.inventory-BdHgzo-Q.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var FILTERS = [
	{
		id: "all",
		label: "All"
	},
	{
		id: "ok",
		label: "In Stock"
	},
	{
		id: "low",
		label: "Low Stock"
	},
	{
		id: "expiring",
		label: "Expiring Soon"
	}
];
function InventoryPage() {
	const loading = usePageLoading();
	const [q, setQ] = (0, import_react.useState)("");
	const [filter, setFilter] = (0, import_react.useState)("all");
	const [active, setActive] = (0, import_react.useState)(null);
	const rows = (0, import_react.useMemo)(() => {
		return inventory.filter((i) => {
			if (q && !i.name.toLowerCase().includes(q.toLowerCase())) return false;
			if (filter === "ok" && i.status !== "ok") return false;
			if (filter === "low" && i.status !== "low") return false;
			if (filter === "expiring") {
				const days = parseInt(i.expiry);
				if (Number.isNaN(days) || days > 3) return false;
			}
			return true;
		});
	}, [q, filter]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Inventory",
				subtitle: "Live stock levels with reorder and expiry signals.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							className: "pl-9 w-64",
							placeholder: "Search ingredient",
							value: q,
							onChange: (e) => setQ(e.target.value)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-2 transition-transform hover:scale-105",
						onClick: () => toast.success("Inventory exported successfully."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Inventory"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: FILTERS.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setFilter(f.id),
					className: cn("rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all hover:scale-105", filter === f.id ? "bg-primary text-primary-foreground ring-primary" : "bg-muted text-muted-foreground ring-border hover:text-foreground"),
					children: f.label
				}, f.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "overflow-x-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Table, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHeader, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Ingredient" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Current Stock" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Unit" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Status" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, { children: "Expiry" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableHead, {
						className: "text-right",
						children: "Reorder Level"
					})
				] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableBody, { children: [rows.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableRow, {
					onClick: () => setActive(i),
					className: "cursor-pointer transition-colors hover:bg-muted/40",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "font-medium",
							children: i.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "min-w-[180px]",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-10 text-sm text-muted-foreground",
									children: i.stock
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
									value: i.stock,
									max: i.max,
									tone: i.status === "low" ? "destructive" : "primary"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: i.unit }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatusBadge, { status: i.status }) }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
							className: "text-muted-foreground",
							children: i.expiry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(TableCell, {
							className: "text-right",
							children: [
								i.reorder,
								" ",
								i.unit
							]
						})
					]
				}, i.name)), rows.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableRow, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TableCell, {
					colSpan: 6,
					className: "py-8 text-center text-sm text-muted-foreground",
					children: "No ingredients match."
				}) })] })] })
			}) }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (o) => !o && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: "Ingredient detail and recent usage." })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "grid grid-cols-2 gap-4 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Current Stock",
							value: `${active.stock} ${active.unit}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Reorder Level",
							value: `${active.reorder} ${active.unit}`
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Expiry",
							value: active.expiry
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Status",
							value: active.status === "low" ? "Low Stock" : "In Stock"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Supplier",
							value: active.supplier
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Detail, {
							label: "Recent Usage",
							value: active.usage
						})
					]
				})] }) })
			})
		]
	});
}
function Detail({ label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
		className: "text-xs uppercase tracking-wide text-muted-foreground",
		children: label
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
		className: "mt-1 text-sm font-medium",
		children: value
	})] });
}
//#endregion
export { InventoryPage as component };
