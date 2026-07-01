import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Boxes, D as ChefHat, I as ChartLine, M as ArrowRight, O as Check, i as Trash2, j as BookOpen, k as Brain } from "../_libs/lucide-react.mjs";
import { t as Button } from "./button-Bq5vK6RO.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CrxZEErA.js
var import_jsx_runtime = require_jsx_runtime();
var features = [
	{
		icon: Brain,
		title: "AI Demand Forecasting",
		desc: "Predict tomorrow's orders by dish, hour and channel."
	},
	{
		icon: ChefHat,
		title: "Smart Prep Planning",
		desc: "Auto-generate batch quantities for every station."
	},
	{
		icon: Boxes,
		title: "Inventory Intelligence",
		desc: "Live stock signals with reorder and expiry alerts."
	},
	{
		icon: Trash2,
		title: "Waste Analytics",
		desc: "Pinpoint root causes and recover lost margin."
	},
	{
		icon: BookOpen,
		title: "Kitchen Memory",
		desc: "Capture SOPs and tribal knowledge in one place."
	},
	{
		icon: ChartLine,
		title: "Operational Reports",
		desc: "One-tap reports for owners and managers."
	}
];
var benefits = [
	"Reduce food waste by up to 30%",
	"Improve kitchen efficiency and ticket times",
	"Better inventory visibility across stations",
	"Faster, data-backed operational decisions",
	"Preserve kitchen knowledge as your team changes"
];
var plans = [
	{
		name: "Starter",
		price: 50,
		blurb: "For single-location takeaways finding their feet.",
		features: [
			"Demand forecast",
			"Inventory tracker",
			"Email reports"
		]
	},
	{
		name: "Professional",
		price: 150,
		blurb: "For growing kitchens that need full visibility.",
		features: [
			"Everything in Starter",
			"Prep planner",
			"Waste analytics",
			"Kitchen Memory"
		],
		featured: true
	},
	{
		name: "Enterprise",
		price: 300,
		blurb: "Multi-station chains with custom workflows.",
		features: [
			"Everything in Pro",
			"Promotion insights",
			"Compliance reports",
			"Priority support"
		]
	}
];
function Landing() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "cream-theme min-h-screen bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl items-center justify-between px-6 py-5",
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
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
							className: "hidden items-center gap-8 text-sm md:flex",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#features",
									className: "hover:opacity-70",
									children: "Features"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#benefits",
									className: "hover:opacity-70",
									children: "Benefits"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "#pricing",
									className: "hover:opacity-70",
									children: "Pricing"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								variant: "ghost",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Login"
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/register",
									children: "Get Started"
								})
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col justify-between",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-xs font-bold tracking-widest",
								children: "01. \xA0 OPERATIONAL AI"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl",
								children: [
									"AI-Powered",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Operational",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Intelligence"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-md text-sm leading-relaxed text-muted-foreground",
								children: "AI Kitchen Copilot is an operational intelligence layer for independent takeaways, dessert chains and QSRs — built to cut waste, plan prep, and turn every shift into measurable margin."
							})
						] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-10 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								className: "rounded-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/register",
									children: ["Get Started ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "ml-2 h-4 w-4" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
								asChild: true,
								size: "lg",
								variant: "outline",
								className: "rounded-none",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/login",
									children: "Login"
								})
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-12 flex items-center gap-6 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2025" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-px w-24 bg-foreground/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "by AI Kitchen Copilot" })
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] w-full overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-foreground/10 shadow-2xl",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/dashboard-preview.png",
							alt: "AI Kitchen Copilot Dashboard Interface",
							className: "h-full w-full object-cover object-left-top transition-transform duration-1000 hover:scale-105"
						})
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "features",
				className: "border-t border-foreground/10 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold tracking-widest",
							children: "02. \xA0 CAPABILITIES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 max-w-2xl text-4xl font-bold md:text-5xl",
							children: "Everything a modern kitchen needs, in one operating layer."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-px overflow-hidden rounded-lg bg-foreground/10 md:grid-cols-3",
							children: features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "group bg-background p-8 transition-colors hover:bg-secondary",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(f.icon, {
										className: "h-7 w-7",
										strokeWidth: 1.5
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "mt-6 text-xl font-semibold",
										children: f.title
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "mt-2 text-sm text-muted-foreground",
										children: f.desc
									})
								]
							}, f.title))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "benefits",
				className: "border-t border-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold tracking-widest",
							children: "03. \xA0 OUTCOMES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-bold md:text-5xl",
							children: "Built for the realities of a kitchen shift."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-md text-sm text-muted-foreground",
							children: "Less guesswork. Less waste. More margin on every ticket. Designed alongside independent operators who needed signal — not another dashboard."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "flex flex-col gap-4",
						children: benefits.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex items-start gap-3 border-b border-foreground/10 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-foreground text-background",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-3 w-3" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-base",
								children: b
							})]
						}, b))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "pricing",
				className: "border-t border-foreground/10 bg-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-6 py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-xs font-bold tracking-widest",
							children: "04. \xA0 PRICING"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-4 text-4xl font-bold md:text-5xl",
							children: "Simple, transparent pricing."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-12 grid gap-6 md:grid-cols-3",
							children: plans.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: `flex flex-col rounded-lg border p-8 ${p.featured ? "border-foreground bg-foreground text-background" : "border-foreground/15"}`,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-bold tracking-widest opacity-80",
										children: p.name.toUpperCase()
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "mt-4 flex items-baseline gap-1",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "font-display text-5xl font-bold",
											children: ["£", p.price]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm opacity-70",
											children: "/month"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: `mt-3 text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`,
										children: p.blurb
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
										className: "mt-6 flex flex-col gap-3 text-sm",
										children: p.features.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
											className: "flex items-center gap-2",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }),
												" ",
												f
											]
										}, f))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
										asChild: true,
										className: `mt-8 rounded-none ${p.featured ? "bg-background text-foreground hover:bg-background/90" : ""}`,
										variant: p.featured ? "secondary" : "default",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/register",
											children: ["Start with ", p.name]
										})
									})
								]
							}, p.name))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-foreground/10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-xs tracking-widest",
						children: "© 2026 AI KITCHEN COPILOT"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-6 text-sm",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:opacity-70",
								children: "Privacy"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:opacity-70",
								children: "Terms"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href: "#",
								className: "hover:opacity-70",
								children: "Contact"
							})
						]
					})]
				})
			})
		]
	});
}
//#endregion
export { Landing as component };
