import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { reports } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Eye, Download, Printer, Share2 } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authed/reports")({
  component: ReportsPage,
});

type ReportDetail = {
  metrics: { label: string; value: string }[];
  observation: string;
  recommendation: string;
};

const DETAILS: Record<string, ReportDetail> = {
  kitchen: {
    metrics: [
      { label: "Orders Completed", value: "128" },
      { label: "Kitchen Efficiency", value: "89%" },
      { label: "Food Waste", value: "12%" },
      { label: "Top Selling Dish", value: "Pizza" },
      { label: "Average Prep Time", value: "8m 24s" },
    ],
    observation: "Stations operate above 85% efficiency; fryer queue is the bottleneck during 7–8 PM peak.",
    recommendation: "Add a second fryer rotation between 6:30–8:30 PM to cut average ticket time by ~12%.",
  },
  waste: {
    metrics: [
      { label: "Total Weekly Waste", value: "28.6 kg" },
      { label: "Top Driver", value: "Lettuce over-prep" },
      { label: "Recovered Margin", value: "£74 / week" },
      { label: "Trend", value: "▼ 15% WoW" },
    ],
    observation: "Lettuce waste correlates with low weekday-lunch traffic.",
    recommendation: "Reduce salad prep by 20% Mon–Wed and re-evaluate after one week.",
  },
  inventory: {
    metrics: [
      { label: "Items Below Reorder", value: "4" },
      { label: "Expiring in 48h", value: "Chicken, Lettuce" },
      { label: "Recommended PO Total", value: "£312" },
    ],
    observation: "Two perishable lines will expire before weekend service.",
    recommendation: "Run a same-day promotion on chicken-based dishes; raise lettuce reorder threshold.",
  },
  ops: {
    metrics: [
      { label: "Orders", value: "128" },
      { label: "Revenue", value: "£2,480" },
      { label: "Waste", value: "12%" },
      { label: "Efficiency", value: "89%" },
    ],
    observation: "Shifts ran on schedule; one prep delay logged at 14:20.",
    recommendation: "Push the dough proof start time forward by 30 minutes on Fridays.",
  },
  compliance: {
    metrics: [
      { label: "Temperature Logs", value: "24 / 24" },
      { label: "Hygiene Checklist", value: "100%" },
      { label: "Last Audit", value: "Passed" },
    ],
    observation: "All compliance checks are passing with zero critical issues.",
    recommendation: "Maintain current cadence; schedule next internal audit in 30 days.",
  },
};

function ReportsPage() {
  const loading = usePageLoading();
  const [open, setOpen] = useState<string | null>(null);
  if (loading) return <PageSkeleton />;

  const active = reports.find((r) => r.id === open);
  const detail = open ? DETAILS[open] : null;

  return (
    <div className="space-y-6">
      <PageHeader title="Reports" subtitle="One-tap operational reports for owners and managers." />
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {reports.map((r) => (
          <Panel key={r.id} className="flex flex-col">
            <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{r.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{r.summary}</p>
            <Button variant="secondary" className="mt-4 transition-transform hover:scale-105" onClick={() => setOpen(r.id)}>
              <Eye className="mr-2 h-4 w-4" /> View report
            </Button>
          </Panel>
        ))}
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent className="max-w-2xl">
          {active && detail && (
            <>
              <DialogHeader>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.summary}</DialogDescription>
              </DialogHeader>
              <div className="grid gap-3 sm:grid-cols-2">
                {detail.metrics.map((m) => (
                  <div key={m.label} className="rounded-lg border border-border bg-muted/30 p-3">
                    <div className="text-xs uppercase tracking-wide text-muted-foreground">{m.label}</div>
                    <div className="mt-1 font-display text-lg font-semibold">{m.value}</div>
                  </div>
                ))}
              </div>
              <div className="rounded-lg border border-border bg-muted/30 p-3">
                <div className="text-xs uppercase tracking-wide text-muted-foreground">AI Observation</div>
                <div className="mt-1 text-sm">{detail.observation}</div>
              </div>
              <div className="rounded-lg border border-primary/30 bg-primary/10 p-3">
                <div className="text-xs uppercase tracking-wide text-primary">Recommendation</div>
                <div className="mt-1 text-sm font-medium">{detail.recommendation}</div>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Report sharing link copied.")}>
                  <Share2 className="h-4 w-4" /> Share Report
                </Button>
                <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Report printed successfully.")}>
                  <Printer className="h-4 w-4" /> Print
                </Button>
                <Button size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Report downloaded successfully.")}>
                  <Download className="h-4 w-4" /> Download
                </Button>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
