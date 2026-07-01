import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { P as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { f as PoundSterling, i as Trash2, x as Download, y as Eye } from "./_libs/lucide-react.mjs";
import { a as ProgressBar, c as usePageLoading, i as Panel, n as PageHeader, o as StatCard, r as PageSkeleton } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { f as topWasted, g as wasteTrend, h as wasteSummary, m as wasteReasons, p as wasteByCategory } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { a as YAxis, d as Pie, f as Cell, i as LineChart, l as Line, m as ResponsiveContainer, n as PieChart, o as XAxis, p as Tooltip, u as CartesianGrid } from "./_libs/recharts+[...].mjs";
import { a as DialogTitle, i as DialogHeader, n as DialogContent, r as DialogDescription, t as Dialog } from "./_ssr/dialog-3HhpKDcy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.waste-CejBz4AS.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var COLORS = [
	"oklch(0.78 0.18 150)",
	"oklch(0.70 0.14 195)",
	"oklch(0.80 0.16 75)",
	"oklch(0.65 0.21 25)",
	"oklch(0.65 0.18 290)"
];
function WastePage() {
	const loading = usePageLoading();
	const navigate = useNavigate();
	const [active, setActive] = (0, import_react.useState)(null);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Waste Analytics",
				subtitle: "Find lost margin and turn waste into recoverable revenue.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						variant: "outline",
						size: "sm",
						className: "gap-2 transition-transform hover:scale-105",
						onClick: () => toast.success("Waste report downloaded."),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Download Waste Report"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
						size: "sm",
						className: "gap-2 transition-transform hover:scale-105",
						onClick: () => navigate({ to: "/reports" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Eye, { className: "h-4 w-4" }), " View Waste Report"]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Today's Waste",
						value: `${wasteSummary.today} kg`,
						icon: Trash2,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Weekly Waste",
						value: `${wasteSummary.weekly} kg`,
						icon: Trash2,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Monthly Waste",
						value: `${wasteSummary.monthly} kg`,
						icon: Trash2,
						tone: "destructive"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Potential Monthly Savings",
						value: `£${wasteSummary.savings}`,
						icon: PoundSterling
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Waste by Category",
					className: "lg:col-span-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-48 w-48 shrink-0",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(PieChart, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pie, {
								data: wasteByCategory,
								dataKey: "value",
								innerRadius: 48,
								outerRadius: 80,
								paddingAngle: 3,
								children: wasteByCategory.map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cell, { fill: COLORS[i % COLORS.length] }, i))
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
								background: "oklch(0.20 0.015 170)",
								border: "1px solid oklch(0.28 0.015 170)",
								borderRadius: 8
							} })] }) })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex-1 space-y-2 text-sm",
							children: wasteByCategory.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "h-2.5 w-2.5 rounded-full",
										style: { background: COLORS[i] }
									}), c.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [c.value, "%"]
								})]
							}, c.name))
						})]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "6-Week Waste Trend",
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: wasteTrend,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "oklch(0.30 0.02 170)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "week",
									stroke: "oklch(0.70 0.02 160)",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YAxis, {
									stroke: "oklch(0.70 0.02 160)",
									fontSize: 12
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, { contentStyle: {
									background: "oklch(0.20 0.015 170)",
									border: "1px solid oklch(0.28 0.015 170)",
									borderRadius: 8
								} }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Line, {
									type: "monotone",
									dataKey: "waste",
									stroke: "oklch(0.80 0.16 75)",
									strokeWidth: 2.5,
									dot: { r: 3 }
								})
							]
						}) })
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Top Wasted Ingredients",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: topWasted.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							onClick: () => setActive(t),
							className: "cursor-pointer rounded-lg p-2 transition-all hover:-translate-y-0.5 hover:bg-muted/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mb-1.5 flex items-center justify-between text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: t.name
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-muted-foreground",
									children: [t.kg, " kg"]
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
								value: t.kg,
								max: 10,
								tone: "warning"
							})]
						}, t.name))
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Waste Reasons",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-4",
						children: wasteReasons.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mb-1.5 flex items-center justify-between text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: r.reason }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "text-muted-foreground",
								children: [r.percent, "%"]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProgressBar, {
							value: r.percent,
							max: 100,
							tone: "destructive"
						})] }, r.reason))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Dialog, {
				open: !!active,
				onOpenChange: (o) => !o && setActive(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogContent, { children: active && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogHeader, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, { children: active.name }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogDescription, { children: [active.kg, " kg wasted this week"] })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-3 text-sm",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs uppercase tracking-wide text-muted-foreground",
						children: "Reason"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-1 font-medium",
						children: active.reason
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-lg border border-primary/30 bg-primary/10 p-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs uppercase tracking-wide text-primary",
							children: "Recommendation"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-1 font-medium",
							children: active.action
						})]
					})]
				})] }) })
			})
		]
	});
}
//#endregion
export { WastePage as component };
