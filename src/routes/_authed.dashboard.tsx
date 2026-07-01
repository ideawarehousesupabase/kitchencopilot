import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  ShoppingBag,
  PoundSterling,
  Trash2,
  Activity,
  TrendingUp,
  Boxes,
  Sparkles,
  RefreshCw,
  FileText,
  ChefHat,
} from "lucide-react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Cell, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHeader, Panel, StatCard, usePageLoading, PageSkeleton } from "@/components/ui-kit";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";
import {
  activity,
  forecast,
  ordersTrend,
  recommendations,
  summary as baseSummary,
  topDishes,
  wasteTrend,
  inventory,
} from "@/lib/mock-data";

export const Route = createFileRoute("/_authed/dashboard")({
  component: DashboardPage,
});

const CHART_COLORS = ["oklch(0.78 0.18 150)", "oklch(0.70 0.14 195)", "oklch(0.80 0.16 75)", "oklch(0.65 0.21 25)"];

const FILTERS: Record<string, { ordersToday: number; revenue: number; waste: number; efficiency: number }> = {
  today: { ordersToday: 128, revenue: 2480, waste: 12, efficiency: 89 },
  yesterday: { ordersToday: 116, revenue: 2210, waste: 14, efficiency: 86 },
  "7days": { ordersToday: 860, revenue: 17_240, waste: 11, efficiency: 88 },
};

function DashboardPage() {
  const loading = usePageLoading();
  const navigate = useNavigate();
  const [filter, setFilter] = useState("today");
  const [tick, setTick] = useState(0);

  if (loading) return <PageSkeleton />;

  const summary = FILTERS[filter] ?? baseSummary;
  const lowStock = inventory.filter((i) => i.status === "low");

  const refresh = () => {
    setTick((t) => t + 1);
    toast.success("Dashboard refreshed successfully.");
  };

  return (
    <div className="space-y-6" key={tick}>
      <PageHeader
        title="Operational Overview"
        subtitle="Live signal from your kitchen — updated continuously."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <Select value={filter} onValueChange={setFilter}>
              <SelectTrigger className="w-36"><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="yesterday">Yesterday</SelectItem>
                <SelectItem value="7days">Last 7 Days</SelectItem>
              </SelectContent>
            </Select>

            <Button onClick={refresh} variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105">
              <RefreshCw className="h-4 w-4" /> Refresh
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Orders Today" value={summary.ordersToday} delta="+12% vs last week" icon={ShoppingBag} onClick={() => navigate({ to: "/reports" })} />
        <StatCard label="Revenue" value={`£${summary.revenue.toLocaleString()}`} delta="+8% vs last week" icon={PoundSterling} onClick={() => navigate({ to: "/reports" })} />
        <StatCard label="Food Waste" value={`${summary.waste}%`} delta="−3% vs last week" icon={Trash2} tone="warning" onClick={() => navigate({ to: "/waste" })} />
        <StatCard label="Kitchen Efficiency" value={`${summary.efficiency}%`} delta="+5% vs last week" icon={Activity} onClick={() => navigate({ to: "/reports" })} />
      </div>

      <div className="flex flex-wrap gap-2">
        <Button variant="secondary" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: "/inventory" })}>
          <Boxes className="h-4 w-4" /> View Inventory
        </Button>
        <Button variant="secondary" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: "/prep" })}>
          <ChefHat className="h-4 w-4" /> Generate Prep Plan
        </Button>
        <Button variant="secondary" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: "/reports" })}>
          <FileText className="h-4 w-4" /> View Reports
        </Button>
        <Button variant="secondary" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: "/forecast" })}>
          <Activity className="h-4 w-4" /> View Full Forecast
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Orders Trend (7 days)" className="lg:col-span-2">
          <div className="h-64">
            <ResponsiveContainer>
              <AreaChart data={ordersTrend}>
                <defs>
                  <linearGradient id="ord" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.78 0.18 150)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.78 0.18 150)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.30 0.02 170)" />
                <XAxis dataKey="day" stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <YAxis stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                <Area type="monotone" dataKey="orders" stroke="oklch(0.78 0.18 150)" fill="url(#ord)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Demand Forecast" onClick={() => navigate({ to: "/forecast" })}>
          <div className="space-y-4">
            <div className="flex items-baseline gap-2">
              <span className="font-display text-4xl font-bold">{forecast.tomorrowOrders}</span>
              <span className="text-sm text-muted-foreground">orders tomorrow</span>
            </div>
            <div className="rounded-lg bg-muted/40 p-3 text-sm">
              <div className="text-muted-foreground">Peak Hour</div>
              <div className="font-semibold">{forecast.peakHour}</div>
            </div>
            <div>
              <div className="mb-2 text-xs text-muted-foreground">High Demand Items</div>
              <div className="flex flex-wrap gap-2">
                {forecast.highDemand.map((d) => (
                  <span key={d} className="rounded-full bg-primary/15 px-3 py-1 text-xs font-medium text-primary ring-1 ring-primary/30">{d}</span>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Today's AI Recommendations" className="lg:col-span-2">
          <ul className="grid gap-3 sm:grid-cols-2">
            {recommendations.map((r) => (
              <li key={r.title} className="rounded-lg border border-border/70 bg-background/40 p-4 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md">
                <div className="flex items-center gap-2 text-xs text-primary">
                  <Sparkles className="h-3.5 w-3.5" /> {r.tag}
                </div>
                <div className="mt-2 text-sm font-semibold">{r.title}</div>
                <div className="mt-1 text-xs text-muted-foreground">{r.detail}</div>
              </li>
            ))}
          </ul>
        </Panel>

        <Panel
          title="Low Stock Alerts"
          action={<span className="text-xs text-muted-foreground">{lowStock.length} items</span>}
          onClick={() => navigate({ to: "/inventory" })}
        >
          <ul className="space-y-3">
            {lowStock.map((i) => (
              <li key={i.name} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <Boxes className="h-4 w-4 text-warning" />
                  <span>{i.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{i.stock} {i.unit}</span>
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Waste Trend (6 weeks)">
          <div className="h-48">
            <ResponsiveContainer>
              <BarChart data={wasteTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.30 0.02 170)" />
                <XAxis dataKey="week" stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <YAxis stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                <Bar dataKey="waste" fill="oklch(0.80 0.16 75)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Panel>

        <Panel title="Top Selling Dishes">
          <div className="flex items-center gap-4">
            <div className="h-40 w-40 shrink-0">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={topDishes} dataKey="value" innerRadius={40} outerRadius={70} paddingAngle={3}>
                    {topDishes.map((_, i) => (
                      <Cell key={i} fill={CHART_COLORS[i % CHART_COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              {topDishes.map((d, i) => (
                <li key={d.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: CHART_COLORS[i] }} />
                    {d.name}
                  </span>
                  <span className="text-muted-foreground">{d.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel title="Recent Activity">
          <ol className="relative ml-2 space-y-4 border-l border-border pl-4">
            {activity.map((a) => (
              <li key={a.title} className="relative">
                <span className="absolute -left-[21px] top-1.5 grid h-3 w-3 place-items-center rounded-full bg-primary ring-4 ring-background">
                  <TrendingUp className="hidden" />
                </span>
                <div className="text-xs text-muted-foreground">{a.time}</div>
                <div className="text-sm font-medium">{a.title}</div>
                <div className="text-xs text-muted-foreground">{a.detail}</div>
              </li>
            ))}
          </ol>
        </Panel>
      </div>
    </div>
  );
}
