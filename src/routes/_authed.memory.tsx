import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader, Panel, PageSkeleton, usePageLoading } from "@/components/ui-kit";
import { kitchenMemory } from "@/lib/mock-data";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BookOpen, ArrowRight, Search, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/_authed/memory")({
  component: MemoryPage,
});

const CATEGORIES = ["All", "Preparation", "Cleaning", "Rush Hours", "Holiday"];

function MemoryPage() {
  const loading = usePageLoading();
  const [open, setOpen] = useState<string | null>(null);
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("All");
  const [bookmarks, setBookmarks] = useState<Set<string>>(new Set());

  const list = useMemo(() => kitchenMemory.filter((m) => {
    if (cat !== "All" && m.category !== cat) return false;
    if (q && !(`${m.title} ${m.summary}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  }), [q, cat]);

  if (loading) return <PageSkeleton />;
  const active = kitchenMemory.find((m) => m.id === open);

  return (
    <div className="space-y-6">
      <PageHeader
        title="Kitchen Memory"
        subtitle="Your kitchen's playbook — SOPs and tribal knowledge in one place."
        action={
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input className="w-64 pl-9" placeholder="Search SOPs..." value={q} onChange={(e) => setQ(e.target.value)} />
          </div>
        }
      />

      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((c) => (
          <button
            key={c}
            onClick={() => setCat(c)}
            className={cn(
              "rounded-full px-3 py-1.5 text-xs font-medium ring-1 transition-all hover:scale-105",
              cat === c
                ? "bg-primary text-primary-foreground ring-primary"
                : "bg-muted text-muted-foreground ring-border hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {list.map((m) => (
          <Panel key={m.id} className="flex flex-col" onClick={() => setOpen(m.id)}>
            <div className="flex items-center justify-between">
              <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary text-primary-foreground shadow-sm">
                <BookOpen className="h-5 w-5" />
              </div>
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-muted px-2.5 py-1 text-xs text-muted-foreground">{m.category}</span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const next = new Set(bookmarks);
                    if (next.has(m.id)) {
                      next.delete(m.id);
                      toast.success("Guide removed from Bookmarks.");
                    } else {
                      next.add(m.id);
                      toast.success("Guide added to Bookmarks.");
                    }
                    setBookmarks(next);
                  }}
                  className="rounded-full p-1.5 transition-colors hover:bg-muted"
                >
                  <Star className={cn("h-4 w-4 transition-colors", bookmarks.has(m.id) ? "fill-primary text-primary" : "text-muted-foreground")} />
                </button>
              </div>
            </div>
            <h3 className="mt-4 text-lg font-semibold">{m.title}</h3>
            <p className="mt-1 flex-1 text-sm text-muted-foreground">{m.summary}</p>
            <Button variant="ghost" className="mt-4 justify-start px-0 text-primary hover:text-primary">
              Open guide <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </Panel>
        ))}
        {list.length === 0 && (
          <div className="col-span-full rounded-lg border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
            No SOPs match your search.
          </div>
        )}
      </div>

      <Dialog open={!!open} onOpenChange={(o) => !o && setOpen(null)}>
        <DialogContent>
          {active && (
            <>
              <DialogHeader>
                <DialogTitle>{active.title}</DialogTitle>
                <DialogDescription>{active.summary}</DialogDescription>
              </DialogHeader>
              <div className="space-y-3 text-sm leading-relaxed text-muted-foreground">
                <p>{active.body}</p>
                <div className="rounded-lg border border-border bg-muted/40 p-3 text-xs">
                  <span className="font-semibold uppercase tracking-wide text-foreground">Category: </span>
                  {active.category}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
