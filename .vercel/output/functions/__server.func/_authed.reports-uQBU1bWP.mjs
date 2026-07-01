import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { c as Share2, d as Printer, v as FileText, x as Download, y as Eye } from "./_libs/lucide-react.mjs";
import { c as usePageLoading, i as Panel, n as PageHeader, r as PageSkeleton } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { l as reports } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-3HhpKDcy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.reports-uQBU1bWP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DETAILS = {
	kitchen: {
		metrics: [
			{
				label: "Orders Completed",
				value: "128"
			},
			{
				label: "Kitchen Efficiency",
				value: "89%"
			},
			{
				label: "Food Waste",
				value: "12%"
			},
			{
				label: "Top Selling Dish",
				value: "Pizza"
			},
			{
				label: "Average Prep Time",
				value: "8m 24s"
			}
		],
		observation: "Stations operate above 85% efficiency; fryer queue is the bottleneck during 7–8 PM peak.",
		recommendation: "Add a second fryer rotation between 6:30–8:30 PM to cut average ticket time by ~12%."
	},
	waste: {
		metrics: [
			{
				label: "Total Weekly Waste",
				value: "28.6 kg"
			},
			{
				label: "Top Driver",
				value: "Lettuce over-prep"
			},
			{
				label: "Recovered Margin",
				value: "£74 / week"
			},
			{
				label: "Trend",
				value: "▼ 15% WoW"
			}
		],
		observation: "Lettuce waste correlates with low weekday-lunch traffic.",
		recommendation: "Reduce salad prep by 20% Mon–Wed and re-evaluate after one week."
	},
	inventory: {
		metrics: [
			{
				label: "Items Below Reorder",
				value: "4"
			},
			{
				label: "Expiring in 48h",
				value: "Chicken, Lettuce"
			},
			{
				label: "Recommended PO Total",
				value: "£312"
			}
		],
		observation: "Two perishable lines will expire before weekend service.",
		recommendation: "Run a same-day promotion on chicken-based dishes; raise lettuce reorder threshold."
	},
	ops: {
		metrics: [
			{
				label: "Orders",
				value: "128"
			},
			{
				label: "Revenue",
				value: "£2,480"
			},
			{
				label: "Waste",
				value: "12%"
			},
			{
				label: "Efficiency",
				value: "89%"
			}
		],
		observation: "Shifts ran on schedule; one prep delay logged at 14:20.",
		recommendation: "Push the dough proof start time forward by 30 minutes on Fridays."
	},
	compliance: {
		metrics: [
			{
				label: "Temperature Logs",
				value: "24 / 24"
			},
			{
				label: "Hygiene Checklist",
				value: "100%"
			},
			{
				label: "Last Audit",
				value: "Passed"
			}
		],
		observation: "All compliance checks are passing with zero critical issues.",
		recommendation: "Maintain current cadence; schedule next internal audit in 30 days."
	}
};
function ReportsPage() {
	const loading = usePageLoading();
	const [open, setOpen] = (0, import_react.useState)(null);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	const active = reports.find((r) => r.id === open);
	const detail = open ? DETAILS[open] : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Reports",
				subtitle: "One-tap operational reports for owners and managers."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-4 md:grid-cols-2 xl:grid-cols-3",
				children: reports.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Panel, {
					className: "flex flex-col",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FileText, { className: "h-5 w-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mt-4 text-lg font-semibold",
							children: r.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 flex-1 text-sm text-muted-foreground",
							children: r.summary
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "secondary",
							className: "mt-4 transition-transform hover:scale-105",
							onClick: () => setOpen(r.id),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "mr-2 h-4 w-4" }), " View report"]
						})
					]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!open,
				onOpenChange: (o) => !o && setOpen(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, {
					className: "max-w-2xl",
					children: active && detail && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription, { children: active.summary })] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid gap-3 sm:grid-cols-2",
							children: detail.metrics.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-border bg-muted/30 p-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs uppercase tracking-wide text-muted-foreground",
									children: m.label
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "mt-1 font-display text-lg font-semibold",
									children: m.value
								})]
							}, m.label))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-muted/30 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: "AI Observation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm",
								children: detail.observation
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-primary/30 bg-primary/10 p-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs uppercase tracking-wide text-primary",
								children: "Recommendation"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 text-sm font-medium",
								children: detail.recommendation
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex justify-end gap-2 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "gap-2 transition-transform hover:scale-105",
									onClick: () => toast.success("Report sharing link copied."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Share2, { className: "h-4 w-4" }), " Share Report"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									variant: "outline",
									size: "sm",
									className: "gap-2 transition-transform hover:scale-105",
									onClick: () => toast.success("Report printed successfully."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "h-4 w-4" }), " Print"]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
									size: "sm",
									className: "gap-2 transition-transform hover:scale-105",
									onClick: () => toast.success("Report downloaded successfully."),
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download"]
								})
							]
						})
					] })
				})
			})
		]
	});
}
//#endregion
export { ReportsPage as component };
