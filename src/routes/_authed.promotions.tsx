import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel, StatusBadge, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { promotions } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/_authed/promotions")({
  component: PromoPage,
});

const REASONS: Record<string, string> = {
  Good: "High profitability with consistent sales.",
  Moderate: "Acceptable margin, monitor weekly performance.",
  Avoid: "Low or negative margin — consider pausing this promotion.",
};

const ACTIONS: Record<string, string> = {
  Good: "Continue Promotion",
  Moderate: "Continue & Monitor",
  Avoid: "Pause Promotion",
};

function PromoPage() {
  const loading = usePageLoading();
  const [active, setActive] = useState<typeof promotions[number] | null>(null);
  if (loading) return <PageSkeleton />;

  return (
    <div className="space-y-6">
      <PageHeader title="Promotion Insights" subtitle="Which offers are pulling weight — and which are bleeding margin." />
      <Panel>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Promotion</TableHead>
                <TableHead className="text-right">Revenue</TableHead>
                <TableHead className="text-right">Estimated Profit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Recommendation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {promotions.map((p) => (
                <TableRow key={p.name} className="transition-colors hover:bg-muted/40">
                  <TableCell 
                    className="font-medium cursor-pointer text-primary hover:underline"
                    onClick={() => setActive(p)}
                  >
                    {p.name}
                  </TableCell>
                  <TableCell className="text-right">£{p.revenue.toLocaleString()}</TableCell>
                  <TableCell className="text-right text-primary">£{p.profit.toLocaleString()}</TableCell>
                  <TableCell><StatusBadge status={p.status} /></TableCell>
                  <TableCell><StatusBadge status={p.recommendation} onClick={() => setActive(p)} /></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>

      <Dialog open={!!active} onOpenChange={(o) => !o && setActive(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.name}</DialogTitle>
                <DialogDescription>Promotion performance breakdown</DialogDescription>
              </DialogHeader>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <Stat label="Revenue" value={`£${active.revenue.toLocaleString()}`} />
                <Stat label="Estimated Profit" value={`£${active.profit.toLocaleString()}`} />
                <Stat label="Status" value={active.status} />
                <Stat label="Margin" value={`${Math.round((active.profit / active.revenue) * 100)}%`} />
              </div>
              <div className="mt-2 rounded-lg border border-primary/30 bg-primary/10 p-3 text-sm">
                <div className="text-xs uppercase tracking-wide text-primary">Recommendation</div>
                <div className="mt-1 font-semibold">{ACTIONS[active.recommendation] ?? active.recommendation}</div>
                <div className="mt-2 text-muted-foreground">{REASONS[active.recommendation]}</div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-muted/30 p-3">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 font-display text-lg font-semibold">{value}</div>
    </div>
  );
}
