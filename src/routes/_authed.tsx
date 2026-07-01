import { Outlet, createFileRoute, Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  LayoutDashboard,
  TrendingUp,
  ChefHat,
  Boxes,
  Trash2,
  BookOpen,
  Tag,
  FileText,
  User as UserIcon,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ConfirmDialog } from "@/components/ui-kit";
import { toast } from "sonner";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Route = createFileRoute("/_authed")({
  component: AuthedLayout,
});


const nav = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/forecast", label: "Demand Forecast", icon: TrendingUp },
  { to: "/prep", label: "Prep Planner", icon: ChefHat },
  { to: "/inventory", label: "Inventory", icon: Boxes },
  { to: "/waste", label: "Waste Analytics", icon: Trash2 },
  { to: "/memory", label: "Kitchen Memory", icon: BookOpen },
  { to: "/promotions", label: "Promotion Insights", icon: Tag },
  { to: "/reports", label: "Reports", icon: FileText },
  { to: "/profile", label: "Profile", icon: UserIcon },
] as const;

function AuthedLayout() {
  const { user, ready, logout } = useAuth();
  const navigate = useNavigate();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const [confirmOpen, setConfirmOpen] = useState(false);

  useEffect(() => {
    if (ready && !user) navigate({ to: "/login" });
  }, [ready, user, navigate]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const handleLogout = () => {
    logout();
    toast.success("Logged out successfully.");
    navigate({ to: "/" });
  };

  if (!ready || !user) {
    return <div className="grid min-h-screen place-items-center bg-background text-muted-foreground">Loading…</div>;
  }


  return (
    <div className="cream-theme flex min-h-screen w-full bg-background text-foreground">
      {/* Sidebar (desktop) */}
      <aside className="hidden w-64 shrink-0 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground lg:flex">
        <SidebarContent pathname={pathname} onLogout={() => setConfirmOpen(true)} />
      </aside>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpen(false)} />
          <aside className="absolute left-0 top-0 flex h-full w-72 flex-col border-r border-sidebar-border bg-sidebar text-sidebar-foreground">
            <SidebarContent pathname={pathname} onLogout={() => setConfirmOpen(true)} />
          </aside>
        </div>
      )}


      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur lg:px-6">
          <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setOpen(true)}>
            <Menu className="h-5 w-5" />
          </Button>
          <div className="text-sm font-medium text-muted-foreground">
            {nav.find((n) => n.to === pathname)?.label ?? "Dashboard"}
          </div>
          <div className="ml-auto flex items-center gap-3 text-sm">
            <div className="hidden text-right sm:block">
              <div className="font-medium">{user.restaurantName}</div>
              <div className="text-xs text-muted-foreground">{user.ownerName}</div>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="grid h-9 w-9 place-items-center rounded-full bg-primary/20 text-primary font-semibold outline-none transition-transform hover:scale-105 focus:ring-2 focus:ring-primary focus:ring-offset-2">
                  {user.ownerName.charAt(0).toUpperCase()}
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-40">
                <DropdownMenuItem onClick={() => navigate({ to: "/profile" })} className="cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4" /> Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setConfirmOpen(true)} className="cursor-pointer text-destructive focus:bg-destructive/10 focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" /> Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="flex-1 p-4 lg:p-8">
          <Outlet />
        </main>
      </div>
      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Logout?"
        description="You'll need to sign in again to access your kitchen dashboard."
        confirmLabel="Logout"
        destructive
        onConfirm={handleLogout}
      />
    </div>
  );
}


function SidebarContent({ pathname, onLogout }: { pathname: string; onLogout: () => void }) {
  return (
    <>
      <div className="flex h-14 items-center gap-2 border-b border-sidebar-border px-5">
        <div className="grid h-8 w-8 place-items-center rounded-md bg-primary text-primary-foreground">
          <ChefHat className="h-4 w-4" />
        </div>
        <div className="text-sm font-semibold tracking-wide">Kitchen Copilot</div>
        <button className="ml-auto text-sidebar-foreground/60 lg:hidden" onClick={() => document.dispatchEvent(new Event("close-sidebar"))}>
          <X className="h-4 w-4" />
        </button>
      </div>
      <nav className="flex-1 overflow-y-auto px-3 py-4">
        <ul className="flex flex-col gap-1">
          {nav.map((n) => {
            const active = pathname === n.to;
            return (
              <li key={n.to}>
                <Link
                  to={n.to}
                  className={cn(
                    "flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors",
                    active
                      ? "bg-sidebar-primary/15 text-sidebar-primary-foreground ring-1 ring-sidebar-primary/30"
                      : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-foreground",
                  )}
                >
                  <n.icon className={cn("h-4 w-4", active && "text-primary")} />
                  {n.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="border-t border-sidebar-border p-3">
        <button
          onClick={onLogout}
          className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm text-sidebar-foreground/80 transition-colors hover:bg-sidebar-accent hover:text-destructive"
        >
          <LogOut className="h-4 w-4" /> Logout
        </button>
      </div>
    </>
  );
}
