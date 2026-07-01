import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { Area, AreaChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHeader, Panel, StatCard, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { forecast, ordersTrend } from "@/lib/mock-data";
import { Clock, Download, Flame, TrendingUp, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useState } from "react";

export const Route = createFileRoute("/_authed/forecast")({
  component: ForecastPage,
});

const recIngredients = [
  { name: "Pizza Dough", qty: "70 kg" },
  { name: "Burger Patties", qty: "80 pcs" },
  { name: "Wrap Bread", qty: "45 pcs" },
  { name: "Chicken", qty: "18 kg" },
  { name: "Cheese", qty: "12 kg" },
  { name: "Lettuce", qty: "8 kg" },
];

function ForecastPage() {
  const loading = usePageLoading();
  const navigate = useNavigate();
  const [showPlannerBtn, setShowPlannerBtn] = useState(false);
  if (loading) return <PageSkeleton />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Demand Forecast"
        subtitle="AI-projected demand for tomorrow and the weekend."
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Forecast exported successfully.")}>
              <Download className="h-4 w-4" /> Export Forecast
            </Button>
            <Button size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => {
              toast.success("Tomorrow's prep plan generated successfully.");
              setShowPlannerBtn(true);
            }}>
              <ChefHat className="h-4 w-4" /> Generate Tomorrow's Prep Plan
            </Button>
            {showPlannerBtn && (
              <Button size="sm" variant="secondary" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: "/prep" })}>
                View Prep Planner
              </Button>
            )}
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Tomorrow's Orders" value={forecast.tomorrowOrders} delta="+13% vs today" icon={TrendingUp} />
        <StatCard label="Peak Hour" value={forecast.peakHour} delta="34 expected orders" icon={Clock} tone="warning" />
        <StatCard label="Weekend Volume" value="510" delta="Sat + Sun combined" icon={Flame} />
        <StatCard label="Confidence" value="92%" delta="based on 12 weeks" icon={TrendingUp} tone="muted" />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Hourly Demand — Tomorrow" className="lg:col-span-2">
          <div className="h-72">
            <ResponsiveContainer>
              <AreaChart data={forecast.hourly}>
                <defs>
                  <linearGradient id="hr" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 150)" stopOpacity={0.6} />
                    <stop offset="100%" stopColor="oklch(0.78 0.18 150)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.30 0.02 170)" />
                <XAxis dataKey="hour" stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <YAxis stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="orders" stroke="oklch(0.78 0.18 150)" strokeWidth={2} fill="url(#hr)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="High Demand Dishes">
          <ul className="space-y-3">
            {forecast.highDemand.map((d, i) => (
              <li key={d} className="flex items-center justify-between rounded-lg border border-border/60 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div>
                  <div className="text-sm font-medium">{d}</div>
                  <div className="text-xs text-muted-foreground">{[42, 28, 18][i]} expected orders</div>
                </div>
                <span className="rounded-full bg-primary/15 px-2.5 py-1 text-xs text-primary ring-1 ring-primary/30">+{[34, 22, 14][i]}%</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="7-Day Demand Trend">
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={ordersTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.30 0.02 170)" />
                <XAxis dataKey="day" stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <YAxis stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                <Line type="monotone" dataKey="orders" stroke="oklch(0.78 0.18 150)" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Recommended Ingredient Quantities">
          <div className="grid grid-cols-2 gap-3">
            {recIngredients.map((i) => (
              <div key={i.name} className="rounded-lg border border-border/60 bg-background/40 p-3 transition-all hover:-translate-y-0.5 hover:border-primary/40">
                <div className="text-xs text-muted-foreground">{i.name}</div>
                <div className="mt-1 font-display text-lg font-bold">{i.qty}</div>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <Panel title="Preparation Suggestions">
        <ul className="grid gap-3 md:grid-cols-2">
          <li className="rounded-lg border border-border/60 p-4 text-sm">Begin pizza dough proofing at <b>2:00 PM</b> for the 7 PM peak.</li>
          <li className="rounded-lg border border-border/60 p-4 text-sm">Pre-cook 60 burger patties before 5:30 PM service rush.</li>
          <li className="rounded-lg border border-border/60 p-4 text-sm">Prepare wrap fillings in 3 batches of 15 between 5–8 PM.</li>
          <li className="rounded-lg border border-border/60 p-4 text-sm">Reduce salad prep by 15% — lunch traffic trending down.</li>
        </ul>
      </Panel>
    </div>
  );
}
