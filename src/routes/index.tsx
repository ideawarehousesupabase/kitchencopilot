import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import {
  Brain,
  ChefHat,
  Boxes,
  Trash2,
  BookOpen,
  LineChart as LineChartIcon,
  ArrowRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  component: Landing,
});

const features = [
  { icon: Brain, title: "AI Demand Forecasting", desc: "Predict tomorrow's orders by dish, hour and channel." },
  { icon: ChefHat, title: "Smart Prep Planning", desc: "Auto-generate batch quantities for every station." },
  { icon: Boxes, title: "Inventory Intelligence", desc: "Live stock signals with reorder and expiry alerts." },
  { icon: Trash2, title: "Waste Analytics", desc: "Pinpoint root causes and recover lost margin." },
  { icon: BookOpen, title: "Kitchen Memory", desc: "Capture SOPs and tribal knowledge in one place." },
  { icon: LineChartIcon, title: "Operational Reports", desc: "One-tap reports for owners and managers." },
];

const benefits = [
  "Reduce food waste by up to 30%",
  "Improve kitchen efficiency and ticket times",
  "Better inventory visibility across stations",
  "Faster, data-backed operational decisions",
  "Preserve kitchen knowledge as your team changes",
];

const plans = [
  { name: "Starter", price: 50, blurb: "For single-location takeaways finding their feet.", features: ["Demand forecast", "Inventory tracker", "Email reports"] },
  { name: "Professional", price: 150, blurb: "For growing kitchens that need full visibility.", features: ["Everything in Starter", "Prep planner", "Waste analytics", "Kitchen Memory"], featured: true },
  { name: "Enterprise", price: 300, blurb: "Multi-station chains with custom workflows.", features: ["Everything in Pro", "Promotion insights", "Compliance reports", "Priority support"] },
];

function Landing() {
  return (
    <div className="cream-theme min-h-screen bg-background text-foreground">
      {/* Top nav */}
      <header className="border-b border-foreground/10">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="flex items-center gap-2">
            <div className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background">
              <ChefHat className="h-4 w-4" />
            </div>
            <span className="text-sm font-semibold tracking-widest">KITCHEN<sup className="text-[10px]">©</sup></span>
          </div>
          <nav className="hidden items-center gap-8 text-sm md:flex">
            <a href="#features" className="hover:opacity-70">Features</a>
            <a href="#benefits" className="hover:opacity-70">Benefits</a>
            <a href="#pricing" className="hover:opacity-70">Pricing</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="ghost"><Link to="/login">Login</Link></Button>
            <Button asChild><Link to="/register">Get Started</Link></Button>
          </div>
        </div>
      </header>

      {/* Hero — editorial split */}
      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 md:py-24">
        <div className="flex flex-col justify-between">
          <div>
            <div className="text-xs font-bold tracking-widest">01. &nbsp; OPERATIONAL AI</div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
              AI-Powered<br />Operational<br />Intelligence
            </h1>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              AI Kitchen Copilot is an operational intelligence layer for independent takeaways,
              dessert chains and QSRs — built to cut waste, plan prep, and turn every shift
              into measurable margin.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-none">
              <Link to="/register">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-none">
              <Link to="/login">Login</Link>
            </Button>
          </div>
          <div className="mt-12 flex items-center gap-6 text-xs text-muted-foreground">
            <span>2025</span>
            <span className="h-px w-24 bg-foreground/40" />
            <span>by AI Kitchen Copilot</span>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative">
          <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-foreground/5 ring-1 ring-foreground/10 shadow-2xl">
            <img 
              src="/dashboard-preview.png" 
              alt="AI Kitchen Copilot Dashboard Interface" 
              className="h-full w-full object-cover object-left-top transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-foreground/10 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-bold tracking-widest">02. &nbsp; CAPABILITIES</div>
          <h2 className="mt-4 max-w-2xl text-4xl font-bold md:text-5xl">Everything a modern kitchen needs, in one operating layer.</h2>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg bg-foreground/10 md:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="group bg-background p-8 transition-colors hover:bg-secondary">
                <f.icon className="h-7 w-7" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="border-t border-foreground/10">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-2">
          <div>
            <div className="text-xs font-bold tracking-widest">03. &nbsp; OUTCOMES</div>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">Built for the realities of a kitchen shift.</h2>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Less guesswork. Less waste. More margin on every ticket. Designed alongside
              independent operators who needed signal — not another dashboard.
            </p>
          </div>
          <ul className="flex flex-col gap-4">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 border-b border-foreground/10 pb-4">
                <div className="mt-1 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-foreground text-background">
                  <Check className="h-3 w-3" />
                </div>
                <span className="text-base">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-foreground/10 bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="text-xs font-bold tracking-widest">04. &nbsp; PRICING</div>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">Simple, transparent pricing.</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <div
                key={p.name}
                className={`flex flex-col rounded-lg border p-8 ${p.featured ? "border-foreground bg-foreground text-background" : "border-foreground/15"}`}
              >
                <div className="text-sm font-bold tracking-widest opacity-80">{p.name.toUpperCase()}</div>
                <div className="mt-4 flex items-baseline gap-1">
                  <span className="font-display text-5xl font-bold">£{p.price}</span>
                  <span className="text-sm opacity-70">/month</span>
                </div>
                <p className={`mt-3 text-sm ${p.featured ? "opacity-80" : "text-muted-foreground"}`}>{p.blurb}</p>
                <ul className="mt-6 flex flex-col gap-3 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <Check className="h-4 w-4" /> {f}
                    </li>
                  ))}
                </ul>
                <Button
                  asChild
                  className={`mt-8 rounded-none ${p.featured ? "bg-background text-foreground hover:bg-background/90" : ""}`}
                  variant={p.featured ? "secondary" : "default"}
                >
                  <Link to="/register">Start with {p.name}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div className="text-xs tracking-widest">© 2026 AI KITCHEN COPILOT</div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="hover:opacity-70">Privacy</a>
            <a href="#" className="hover:opacity-70">Terms</a>
            <a href="#" className="hover:opacity-70">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
