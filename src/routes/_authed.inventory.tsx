import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Panel, ProgressBar, StatusBadge, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { inventory } from "@/lib/mock-data";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Download } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/_authed/inventory")({
  component: InventoryPage,
});

type Filter = "all" | "ok" | "low" | "expiring";
const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ok", label: "In Stock" },
  { id: "low", label: "Low Stock" },
  { id: "expiring", label: "Expiring Soon" },
];

function InventoryPage() {
  const loading = usePageLoading();
  const [q, setQ] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<typeof inventory[number] | null>(null);

  const rows = useMemo(() => {
    return inventory.filter((i) => {
      if (q && !i.name.toLowerCase().includes(q.toLowerCase())) return false;
      if (filter === "ok" && i.status !== "ok") return false;
      if (filter === "low" && i.status !== "low") return false;
      if (filter === "expiring") {
        const days = parseInt(i.expiry);
        if (Number.isNaN(days) || days > 3) return false;
      }
      return true;
    });
  }, [q, filter]);

  if (loading) return <PageSkeleton />;

  return (
    <div className="space-y-6">
      <PageHeader
        title="Inventory"
        subtitle="Live stock levels with reorder and expiry signals."
        action={
          <div className="flex flex-wrap items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input className="pl-9 w-64" placeholder="Search ingredient" value={q} onChange={(e) => setQ(e.target.value)} />
            </div>
            <Button variant="outline" size="sm" className="gap-2 transition-transform hover:scale-105" onClick={() => toast.success("Inventory exported successfully.")}>
              <Download className="h-4 w-4" /> Export Inventory
            </Button>
          </div>
        }
      />

      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all hover:scale-105",
              filter === f.id
                ? "bg-primary text-primary-foreground ring-primary"
                : "bg-muted text-muted-foreground ring-border hover:text-foreground",
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <Panel>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Ingredient</TableHead>
                <TableHead>Current Stock</TableHead>
                <TableHead>Unit</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Expiry</TableHead>
                <TableHead className="text-right">Reorder Level</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows.map((i) => (
                <TableRow
                  key={i.name}
                  onClick={() => setActive(i)}
                  className="cursor-pointer transition-colors hover:bg-muted/40"
                >
                  <TableCell className="font-medium">{i.name}</TableCell>
                  <TableCell className="min-w-[180px]">
                    <div className="flex items-center gap-3">
                      <span className="w-10 text-sm text-muted-foreground">{i.stock}</span>
                      <ProgressBar value={i.stock} max={i.max} tone={i.status === "low" ? "destructive" : "primary"} />
                    </div>
                  </TableCell>
                  <TableCell>{i.unit}</TableCell>
                  <TableCell><StatusBadge status={i.status} /></TableCell>
                  <TableCell className="text-muted-foreground">{i.expiry}</TableCell>
                  <TableCell className="text-right">{i.reorder} {i.unit}</TableCell>
                </TableRow>
              ))}
              {rows.length === 0 && (
                <TableRow><TableCell colSpan={6} className="py-8 text-center text-sm text-muted-foreground">No ingredients match.</TableCell></TableRow>
              )}
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
                <DialogDescription>Ingredient detail and recent usage.</DialogDescription>
              </DialogHeader>
              <dl className="grid grid-cols-2 gap-4 text-sm">
                <Detail label="Current Stock" value={`${active.stock} ${active.unit}`} />
                <Detail label="Reorder Level" value={`${active.reorder} ${active.unit}`} />
                <Detail label="Expiry" value={active.expiry} />
                <Detail label="Status" value={active.status === "low" ? "Low Stock" : "In Stock"} />
                <Detail label="Supplier" value={active.supplier} />
                <Detail label="Recent Usage" value={active.usage} />
              </dl>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-xs uppercase tracking-wide text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-sm font-medium">{value}</dd>
    </div>
  );
}
