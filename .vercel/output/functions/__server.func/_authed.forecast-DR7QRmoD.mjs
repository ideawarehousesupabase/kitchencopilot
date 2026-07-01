import { o as __toESM } from "./_runtime.mjs";
import { u as require_react } from "./_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "./_libs/@radix-ui/react-arrow+[...].mjs";
import { P as useNavigate } from "./_libs/@tanstack/react-router+[...].mjs";
import { D as ChefHat, S as Clock, _ as Flame, r as TrendingUp, x as Download } from "./_libs/lucide-react.mjs";
import { c as usePageLoading, i as Panel, n as PageHeader, o as StatCard, r as PageSkeleton } from "./_ssr/ui-kit-DRIPXloY.mjs";
import { t as Button } from "./_ssr/button-Bq5vK6RO.mjs";
import { n as toast } from "./_libs/sonner.mjs";
import { a as ordersTrend, n as forecast } from "./_ssr/mock-data-BBRoYgEj.mjs";
import { a as YAxis, c as Area, i as LineChart, l as Line, m as ResponsiveContainer, o as XAxis, p as Tooltip, t as AreaChart, u as CartesianGrid } from "./_libs/recharts+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_authed.forecast-DR7QRmoD.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var recIngredients = [
	{
		name: "Pizza Dough",
		qty: "70 kg"
	},
	{
		name: "Burger Patties",
		qty: "80 pcs"
	},
	{
		name: "Wrap Bread",
		qty: "45 pcs"
	},
	{
		name: "Chicken",
		qty: "18 kg"
	},
	{
		name: "Cheese",
		qty: "12 kg"
	},
	{
		name: "Lettuce",
		qty: "8 kg"
	}
];
function ForecastPage() {
	const loading = usePageLoading();
	const navigate = useNavigate();
	const [showPlannerBtn, setShowPlannerBtn] = (0, import_react.useState)(false);
	if (loading) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageSkeleton, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "space-y-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHeader, {
				title: "Demand Forecast",
				subtitle: "AI-projected demand for tomorrow and the weekend.",
				action: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							variant: "outline",
							size: "sm",
							className: "gap-2 transition-transform hover:scale-105",
							onClick: () => toast.success("Forecast exported successfully."),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "h-4 w-4" }), " Export Forecast"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
							size: "sm",
							className: "gap-2 transition-transform hover:scale-105",
							onClick: () => {
								toast.success("Tomorrow's prep plan generated successfully.");
								setShowPlannerBtn(true);
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChefHat, { className: "h-4 w-4" }), " Generate Tomorrow's Prep Plan"]
						}),
						showPlannerBtn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							size: "sm",
							variant: "secondary",
							className: "gap-2 transition-transform hover:scale-105",
							onClick: () => navigate({ to: "/prep" }),
							children: "View Prep Planner"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Tomorrow's Orders",
						value: forecast.tomorrowOrders,
						delta: "+13% vs today",
						icon: TrendingUp
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Peak Hour",
						value: forecast.peakHour,
						delta: "34 expected orders",
						icon: Clock,
						tone: "warning"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Weekend Volume",
						value: "510",
						delta: "Sat + Sun combined",
						icon: Flame
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatCard, {
						label: "Confidence",
						value: "92%",
						delta: "based on 12 weeks",
						icon: TrendingUp,
						tone: "muted"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Hourly Demand — Tomorrow",
					className: "lg:col-span-2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-72",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AreaChart, {
							data: forecast.hourly,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("defs", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("linearGradient", {
									id: "hr",
									x1: "0",
									y1: "0",
									x2: "0",
									y2: "1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "0%",
										stopColor: "oklch(0.78 0.18 150)",
										stopOpacity: .6
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("stop", {
										offset: "100%",
										stopColor: "oklch(0.78 0.18 150)",
										stopOpacity: 0
									})]
								}) }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "oklch(0.30 0.02 170)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "hour",
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
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Area, {
									type: "monotone",
									dataKey: "orders",
									stroke: "oklch(0.78 0.18 150)",
									strokeWidth: 2,
									fill: "url(#hr)"
								})
							]
						}) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "High Demand Dishes",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "space-y-3",
						children: forecast.highDemand.map((d, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-center justify-between rounded-lg border border-border/60 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-medium",
								children: d
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-xs text-muted-foreground",
								children: [[
									42,
									28,
									18
								][i], " expected orders"]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary ring-1 ring-primary/30",
								children: [
									"+",
									[
										34,
										22,
										14
									][i],
									"%"
								]
							})]
						}, d))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-4 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "7-Day Demand Trend",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-56",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResponsiveContainer, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(LineChart, {
							data: ordersTrend,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CartesianGrid, {
									strokeDasharray: "3 3",
									stroke: "oklch(0.30 0.02 170)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(XAxis, {
									dataKey: "day",
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
									dataKey: "orders",
									stroke: "oklch(0.78 0.18 150)",
									strokeWidth: 2.5,
									dot: { r: 3 }
								})
							]
						}) })
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
					title: "Recommended Ingredient Quantities",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 gap-3",
						children: recIngredients.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border/60 bg-background/40 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs text-muted-foreground",
								children: i.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 font-display text-lg font-bold",
								children: i.qty
							})]
						}, i.name))
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
				title: "Preparation Suggestions",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "grid gap-3 md:grid-cols-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "rounded-lg border border-border/60 p-4 text-sm",
							children: [
								"Begin pizza dough proofing at ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("b", { children: "2:00 PM" }),
								" for the 7 PM peak."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-border/60 p-4 text-sm",
							children: "Pre-cook 60 burger patties before 5:30 PM service rush."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-border/60 p-4 text-sm",
							children: "Prepare wrap fillings in 3 batches of 15 between 5–8 PM."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "rounded-lg border border-border/60 p-4 text-sm",
							children: "Reduce salad prep by 15% — lunch traffic trending down."
						})
					]
				})
			})
		]
	});
}
//#endregion
export { ForecastPage as component };
