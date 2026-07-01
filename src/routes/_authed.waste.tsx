import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { PageHeader, Panel, ProgressBar, StatCard, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { topWasted, wasteByCategory, wasteReasons, wasteSummary, wasteTrend } from "@/lib/mock-data";
import { Download, PoundSterling, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";

export const Route = createFileRoute("/_authed/waste")({
  component: WastePage,
});

const COLORS = ["oklch(0.78 0.18 150)", "oklch(0.70 0.14 195)", "oklch(0.80 0.16 75)", "oklch(0.65 0.21 25)", "oklch(0.65 0.18 290)"];

function WastePage() {
  const loading = usePageLoading();
  const navigate = useNavigate();
  const [active, setActive] = useState<typeof topWasted[number] | null>(null);
  if (loading) return <PageSkeleton />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Waste Analytics"
        subtitle="Find lost margin and turn waste into recoverable revenue."
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Waste report downloaded.")}>
              <Download className="h-4 w-4" /> Download Waste Report
            </Button>
            <Button size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => navigate({ to: '/reports' })}>
              <Eye className="h-4 w-4" /> View Waste Report
            </Button>
          </div>
        }
      />

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="Today's Waste" value={`${wasteSummary.today} kg`} icon={Trash2} tone="warning" />
        <StatCard label="Weekly Waste" value={`${wasteSummary.weekly} kg`} icon={Trash2} tone="warning" />
        <StatCard label="Monthly Waste" value={`${wasteSummary.monthly} kg`} icon={Trash2} tone="destructive" />
        <StatCard label="Potential Monthly Savings" value={`£${wasteSummary.savings}`} icon={PoundSterling} />
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel title="Waste by Category" className="lg:col-span-1">
          <div className="flex items-center gap-4">
            <div className="h-48 w-48 shrink-0">
              <ResponsiveContainer>
                <PieChart>
                  <Pie data={wasteByCategory} dataKey="value" innerRadius={48} outerRadius={80} paddingAngle={3}>
                    {wasteByCategory.map((_, i) => (
                      <Cell key={i} fill={COLORS[i % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <ul className="flex-1 space-y-2 text-sm">
              {wasteByCategory.map((c, i) => (
                <li key={c.name} className="flex items-center justify-between">
                  <span className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: COLORS[i] }} />
                    {c.name}
                  </span>
                  <span className="text-muted-foreground">{c.value}%</span>
                </li>
              ))}
            </ul>
          </div>
        </Panel>

        <Panel title="6-Week Waste Trend" className="lg:col-span-2">
          <div className="h-56">
            <ResponsiveContainer>
              <LineChart data={wasteTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.30 0.02 170)" />
                <XAxis dataKey="week" stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <YAxis stroke="oklch(0.70 0.02 160)" fontSize={12} />
                <Tooltip contentStyle={{ background: "oklch(0.20 0.015 170)", border: "1px solid oklch(0.28 0.015 170)", borderRadius: 8 }} />
                <Line type="monotone" dataKey="waste" stroke="oklch(0.80 0.16 75)" strokeWidth={2.5} dot={{ r: 3 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <Panel title="Top Wasted Ingredients">
          <ul className="space-y-4">
            {topWasted.map((t) => (
              <li
                key={t.name}
                onClick={() => setActive(t)}
                className="cursor-pointer rounded-lg p-2 transition-all hover:-translate-y-0.5 hover:bg-muted/40"
              >
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span className="font-medium">{t.name}</span>
                  <span className="text-muted-foreground">{t.kg} kg</span>
                </div>
                <ProgressBar value={t.kg} max={10} tone="warning" />
              </li>
            ))}
          </ul>
        </Panel>

        <Panel title="Waste Reasons">
          <ul className="space-y-4">
            {wasteReasons.map((r) => (
              <li key={r.reason}>
                <div className="mb-1.5 flex items-center justify-between text-sm">
                  <span>{r.reason}</span>
                  <span className="text-muted-foreground">{r.percent}%</span>
                </div>
                <ProgressBar value={r.percent} max={100} tone="destructive" />
              </li>
            ))}
          </ul>
        </Panel>
      </div>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.name}</DialogTitle>
                <DialogDescription>{active.kg} kg wasted this week</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground">Reason</div>
                  <div className="mt-1 font-medium">{active.reason}</div>
                </div>
                <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                  <div className="text-xs uppercase tracking-wide text-primary">Recommendation</div>
                  <div className="mt-1 font-medium">{active.action}</div>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
