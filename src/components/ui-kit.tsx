import { useEffect, useState, type ReactNode } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Skeleton } from "@/components/ui/skeleton";

const ROUTE_LABELS: Record<string, string> = {
  dashboard: "Dashboard",
  forecast: "Demand Forecast",
  prep: "Prep Planner",
  inventory: "Inventory",
  waste: "Waste Analytics",
  memory: "Kitchen Memory",
  promotions: "Promotion Insights",
  reports: "Reports",
  profile: "Profile",
};

export function Breadcrumb() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const segs = pathname.split("/").filter(Boolean);
  const last = segs[segs.length - 1];
  const label = (last && ROUTE_LABELS[last]) || "Dashboard";
  return (
    <nav className="mb-2 flex items-center gap-1.5 text-xs text-muted-foreground">
      <Link to="/dashboard" className="transition-colors hover:text-foreground">Home</Link>
      <ChevronRight className="h-3 w-3" />
      <span className="text-foreground">{label}</span>
    </nav>
  );
}

export function PageHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: ReactNode }) {
  return (
    <div className="mb-6">
      <Breadcrumb />
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div className="min-w-0">
          <h1 className="text-2xl font-bold sm:text-3xl">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>}
        </div>
        {action && <div className="shrink-0">{action}</div>}
      </div>
    </div>
  );
}

export function StatCard({
  label,
  value,
  delta,
  icon: Icon,
  tone = "primary",
  onClick,
}: {
  label: string;
  value: string | number;
  delta?: string;
  icon?: React.ComponentType<{ className?: string }>;
  tone?: "primary" | "warning" | "destructive" | "muted";
  onClick?: () => void;
}) {
  const toneClass = {
    primary: "text-primary bg-primary/10 ring-primary/20",
    warning: "text-warning bg-warning/10 ring-warning/20",
    destructive: "text-destructive bg-destructive/10 ring-destructive/20",
    muted: "text-muted-foreground bg-muted ring-border",
  }[tone];
  const interactive = onClick ? "cursor-pointer hover:-translate-y-0.5 hover:shadow-md hover:border-primary/40" : "";
  return (
    <div
      onClick={onClick}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={(e) => onClick && (e.key === "Enter" || e.key === " ") && onClick()}
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200",
        interactive,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{label}</span>
        {Icon && (
          <span className={cn("grid h-9 w-9 place-items-center rounded-lg ring-1", toneClass)}>
            <Icon className="h-4 w-4" />
          </span>
        )}
      </div>
      <div className="mt-3 font-display text-3xl font-bold">{value}</div>
      {delta && <div className="mt-1 text-xs text-muted-foreground">{delta}</div>}
    </div>
  );
}

export function Panel({ title, action, children, className, onClick }: { title?: string; action?: ReactNode; children: ReactNode; className?: string; onClick?: () => void }) {
  return (
    <div
      onClick={onClick}
      className={cn(
        "rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-200 hover:shadow-md",
        onClick && "cursor-pointer hover:-translate-y-0.5 hover:border-primary/40",
        className,
      )}
    >
      {(title || action) && (
        <div className="mb-4 flex items-center justify-between gap-2">
          {title && <h3 className="text-sm font-semibold">{title}</h3>}
          {action}
        </div>
      )}
      {children}
    </div>
  );
}

export function StatusBadge({ status, onClick }: { status: string; onClick?: () => void }) {
  const map: Record<string, string> = {
    High: "bg-destructive/15 text-destructive ring-destructive/30",
    Medium: "bg-warning/15 text-warning ring-warning/30",
    Low: "bg-primary/15 text-primary ring-primary/30",
    Pending: "bg-warning/15 text-warning ring-warning/30",
    "In Progress": "bg-chart-2/15 text-chart-2 ring-chart-2/30",
    Completed: "bg-primary/15 text-primary ring-primary/30",
    Done: "bg-primary/15 text-primary ring-primary/30",
    ok: "bg-primary/15 text-primary ring-primary/30",
    low: "bg-destructive/15 text-destructive ring-destructive/30",
    Good: "bg-primary/15 text-primary ring-primary/30",
    Moderate: "bg-warning/15 text-warning ring-warning/30",
    Avoid: "bg-destructive/15 text-destructive ring-destructive/30",
    Active: "bg-primary/15 text-primary ring-primary/30",
    Paused: "bg-muted text-muted-foreground ring-border",
  };
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={!onClick}
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ring-1 transition-all",
        map[status] ?? "bg-muted text-muted-foreground ring-border",
        onClick ? "cursor-pointer hover:scale-105" : "cursor-default",
      )}
    >
      {status === "ok" ? "In Stock" : status === "low" ? "Low Stock" : status}
    </button>
  );
}

export function ProgressBar({ value, max, tone = "primary" }: { value: number; max: number; tone?: "primary" | "warning" | "destructive" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const color = tone === "destructive" ? "bg-destructive" : tone === "warning" ? "bg-warning" : "bg-primary";
  return (
    <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
      <div className={cn("h-full rounded-full transition-all", color)} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function usePageLoading(ms = 900) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setLoading(false), ms);
    return () => clearTimeout(t);
  }, [ms]);
  return loading;
}

export function PageSkeleton() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-2">
        <Skeleton className="h-3 w-32" />
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-4 w-96 max-w-full" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-28 rounded-xl" />)}
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        <Skeleton className="h-72 rounded-xl lg:col-span-2" />
        <Skeleton className="h-72 rounded-xl" />
      </div>
      <Skeleton className="h-64 rounded-xl" />
    </div>
  );
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel = "Confirm",
  cancelLabel = "Cancel",
  onConfirm,
  destructive,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  title: string;
  description?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm: () => void;
  destructive?: boolean;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/60 p-4 animate-in fade-in" onClick={() => onOpenChange(false)}>
      <div onClick={(e) => e.stopPropagation()} className="w-full max-w-sm rounded-xl border border-border bg-card p-6 shadow-xl">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="mt-2 text-sm text-muted-foreground">{description}</p>}
        <div className="mt-6 flex justify-end gap-2">
          <button onClick={() => onOpenChange(false)} className="rounded-md border border-border px-4 py-2 text-sm transition-colors hover:bg-muted">
            {cancelLabel}
          </button>
          <button
            onClick={() => { onConfirm(); onOpenChange(false); }}
            className={cn(
              "rounded-md px-4 py-2 text-sm font-medium transition-all hover:scale-105",
              destructive ? "bg-destructive text-destructive-foreground" : "bg-primary text-primary-foreground",
            )}
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
