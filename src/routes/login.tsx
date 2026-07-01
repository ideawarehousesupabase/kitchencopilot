import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ChefHat, Eye, EyeOff, Loader2 } from "lucide-react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  component: LoginPage,
});

function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    const res = await login(email, password);
    setLoading(false);
    if (!res.ok) {
      setError(res.error ?? "Invalid email or password.");
      toast.error(res.error ?? "Invalid email or password.");
      return;
    }
    toast.success("Welcome back");
    navigate({ to: "/dashboard" });
  };

  return (
    <AuthShell title="Welcome back" subtitle="Log in to your kitchen control room.">
      <form onSubmit={onSubmit} className="flex flex-col gap-4">
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="owner@restaurant.com" autoComplete="email" />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              type={show ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShow((s) => !s)}
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
              aria-label={show ? "Hide password" : "Show password"}
            >
              {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            </button>
          </div>
        </div>
        {error && <div className="rounded-md bg-destructive/15 px-3 py-2 text-sm text-destructive">{error}</div>}
        <Button type="submit" className="mt-2" disabled={loading}>
          {loading ? (<><Loader2 className="mr-2 h-4 w-4 animate-spin" /> Signing in…</>) : "Login"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          New here? <Link to="/register" className="text-primary hover:underline">Create an account</Link>
        </p>
      </form>
    </AuthShell>
  );
}

export function AuthShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="cream-theme grid min-h-screen bg-background text-foreground lg:grid-cols-2">
      <div className="auth-left-panel relative hidden flex-col justify-between p-12 lg:flex">
        <div className="flex items-center gap-2">
          <div className="grid h-8 w-8 place-items-center rounded-md bg-foreground text-background">
            <ChefHat className="h-4 w-4" />
          </div>
          <span className="text-sm font-semibold tracking-widest">KITCHEN<sup className="text-[10px]">©</sup></span>
        </div>
        <div>
          <div className="text-xs font-bold tracking-widest">01. &nbsp; OPERATIONAL AI</div>
          <h2 className="mt-6 font-display text-5xl font-bold leading-[1.05]">
            Kitchen<br />Copilot<br />Collection
          </h2>
          <p className="mt-6 max-w-sm text-sm text-muted-foreground">
            An operational intelligence layer for modern kitchens — built to cut waste,
            plan prep and turn every shift into measurable margin.
          </p>
        </div>
        <div className="flex items-center gap-4 text-xs">
          <span>2026</span>
          <span className="h-px w-24 bg-foreground/40" />
          <span>by AI Kitchen Copilot</span>
        </div>
      </div>
      <div className="flex items-center justify-center bg-background p-8">
        <div className="w-full max-w-sm">
          <Link to="/" className="text-xs tracking-widest text-muted-foreground hover:text-foreground">← BACK</Link>
          <h1 className="mt-6 text-3xl font-bold">{title}</h1>
          <p className="mt-2 text-sm text-muted-foreground">{subtitle}</p>
          <div className="mt-8">{children}</div>
        </div>
      </div>
    </div>
  );
}
