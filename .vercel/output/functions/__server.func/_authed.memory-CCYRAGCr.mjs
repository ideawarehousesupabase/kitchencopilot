import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { t as cn } from "./_ssr/utils-C_uf36nf.mjs";
import { M as ArrowRight, j as BookOpen, l as Search, o as Star } from "./_libs/lucide-react.mjs";
import { c as usePageLoading, i as Panel, n as PageHeader, r as PageSkeleton } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { i as kitchenMemory } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { t as Input } from "./_ssr/input-B8Q2ztVi.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-3HhpKDcy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.memory-CCYRAGCr.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CATEGORIES = [
	"All",
	"Preparation",
	"Cleaning",
	"Rush Hours",
	"Holiday"
];
function MemoryPage() {
	const loading = usePageLoading();
	const [open, setOpen] = (0, import_react.useState)(null);
	const [q, setQ] = (0, import_react.useState)("");
	const [cat, setCat] = (0, import_react.useState)("All");
	const [bookmarks, setBookmarks] = (0, import_react.useState)(/* @__PURE__ */ new Set());
	const list = (0, import_react.useMemo)(() => kitchenMemory.filter((m) => {
		if (cat !== "All" && m.category !== cat) return false;
		if (q && !`${m.title} ${m.summary}`.toLowerCase().includes(q.toLowerCase())) return false;
		return true;
	}), [q, cat]);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	const active = kitchenMemory.find((m) => m.id === open);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Kitchen Memory",
				subtitle: "Your kitchen's playbook — SOPs and tribal knowledge in one place.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
						className: "w-64 pl-9",
						placeholder: "Search SOPs...",
						value: q,
						onChange: (e) => setQ(e.target.value)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-wrap gap-2",
				children: CATEGORIES.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setCat(c),
					className: cn("rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all hover:scale-105", cat === c ? "bg-primary text-primary-foreground ring-primary" : "bg-muted text-muted-foreground ring-border hover:text-foreground"),
					children: c
				}, c))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: [list.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex flex-col",
					onClick: () => setOpen(m.id),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-5 w-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground",
									children: m.category
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									onClick: (e) => {
										e.stopPropagation();
										const next = new Set(bookmarks);
										if (next.has(m.id)) {
											next.delete(m.id);
											toast.success("Guide removed from Bookmarks.");
										} else {
											next.add(m.id);
											toast.success("Guide added to Bookmarks.");
										}
										setBookmarks(next);
									},
									className: "rounded-full p-1.5 transition-colors hover:bg-muted",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("h-4 w-4 transition-colors", bookmarks.has(m.id) ? "fill-primary text-primary" : "text-muted-foreground") })
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold",
							children: m.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 flex-1 text-sm text-muted-foreground",
							children: m.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "ghost",
							className: "mt-4 justify-start px-0 text-primary hover:text-primary",
							children: ["Open guide ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-1 h-4 w-4" })]
						})
					]
				}, m.id)), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "col-span-full rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground",
					children: "No SOPs match your search."
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!open,
				onOpenChange: (o) => !o && setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: active.summary })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm leading-relaxed text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: active.body }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-border bg-muted/40 p-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-semibold uppercase tracking-wide text-foreground",
							children: "Category: "
						}), active.category]
					})]
				})] }) })
			})
		]
	});
}
//#endregion
export { MemoryPage as component };
