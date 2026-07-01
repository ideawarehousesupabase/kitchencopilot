import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel, StatusBadge, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { prepPlan as basePlan } from "@/lib/mock-data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Sparkles, Download } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/_authed/prep")({
  component: PrepPage,
});

const STATUS_CYCLE = ["Pending", "In Progress", "Completed"] as const;

function PrepPage() {
  const loading = usePageLoading();
  const [rows, setRows] = useState(() =>
    basePlan.map((p) => ({ ...p, status: p.status === "Done" ? "Completed" : p.status })),
  );
  if (loading) return <PageSkeleton />;

  const cycle = (dish: string) => {
    setRows((rs) =>
      rs.map((r) => {
        if (r.dish !== dish) return r;
        const idx = STATUS_CYCLE.indexOf(r.status as (typeof STATUS_CYCLE)[number]);
        const next = STATUS_CYCLE[(idx + 1) % STATUS_CYCLE.length];
        return { ...r, status: next };
      }),
    );
  };

  const generate = () => {
    setRows(basePlan.map((p) => ({ ...p, status: "Pending" })));
    toast.success("New preparation plan generated.");
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Prep Planner"
        subtitle="AI-recommended preparation quantities for each station. Click a status to advance it."
        action={
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Prep plan exported successfully.")}>
              <Download className="h-4 w-4" /> Export Prep Plan
            </Button>
            <Button size="sm" className="gap-2 transition-transform hover:scale-105" onClick={generate}>
              <Sparkles className="h-4 w-4" /> Generate Prep Plan
            </Button>
          </div>
        }
      />
      <Panel>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Dish</TableHead>
                <TableHead className="text-right">Current Stock</TableHead>
                <TableHead className="text-right">Recommended Prep</TableHead>
                <TableHead>Priority</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Estimated Time</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((p) => (
                <TableRow key={p.dish} className="transition-colors hover:bg-muted/40">
                  <TableCell className="font-medium">{p.dish}</TableCell>
                  <TableCell className="text-right">{p.current}</TableCell>
                  <TableCell className="text-right font-semibold text-primary">{p.recommended}</TableCell>
                  <TableCell><StatusBadge status={p.priority} /></TableCell>
                  <TableCell><StatusBadge status={p.status} onClick={() => cycle(p.dish)} /></TableCell>
                  <TableCell className="text-right text-muted-foreground">{p.time}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Panel>
    </div>
  );
}
