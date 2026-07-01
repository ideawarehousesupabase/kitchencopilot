import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { PageHeader, Panel, PageSkeleton, usePageLoading, ConfirmDialog } from "@/components/ui-kit";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff, LogOut, Pencil } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export const Route = createFileRoute("/_authed/profile")({
  component: ProfilePage,
});

function ProfilePage() {
  const loading = usePageLoading();
  const { user, logout, updatePassword, updateProfile } = useAuth();
  const navigate = useNavigate();
  const [pwd, setPwd] = useState("");
  const [confirm, setConfirm] = useState("");
  const [showPwd, setShowPwd] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [editOpen, setEditOpen] = useState(false);
  const [confirmLogout, setConfirmLogout] = useState(false);

  if (loading) return <PageSkeleton />;
  if (!user) return null;

  const onUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (pwd.length < 6) return toast.error("Password must be at least 6 characters.");
    if (pwd !== confirm) return toast.error("Passwords do not match.");
    await updatePassword(pwd);
    setPwd("");
    setConfirm("");
    toast.success("Password updated successfully.");
  };

  return (
    <div className="space-y-6">
      <PageHeader title="Profile" subtitle="Manage your account and credentials." />

      <div className="grid gap-4 lg:grid-cols-3">
        <Panel className="lg:col-span-1">
          <div className="flex flex-col items-center text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-primary/15 text-2xl font-bold text-primary ring-1 ring-primary/30">
              {user.ownerName.charAt(0).toUpperCase()}
            </div>
            <div className="mt-4 text-lg font-semibold">{user.ownerName}</div>
            <div className="text-sm text-muted-foreground">{user.email}</div>
            <div className="mt-2 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary ring-1 ring-primary/30">
              {user.restaurantName}
            </div>
            <Button
              variant="destructive"
              className="mt-6 w-full transition-transform hover:scale-105"
              onClick={() => setConfirmLogout(true)}
            >
              <LogOut className="mr-2 h-4 w-4" /> Logout
            </Button>
          </div>
        </Panel>

        <div className="lg:col-span-2 space-y-4">
          <Panel
            title="Account Details"
            action={
              <Button variant="outline" size="sm" className="gap-2" onClick={() => setEditOpen(true)}>
                <Pencil className="h-3.5 w-3.5" /> Edit Profile
              </Button>
            }
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="Restaurant Name" value={user.restaurantName} />
              <Field label="Owner Name" value={user.ownerName} />
              <Field label="Email" value={user.email} />
              <Field label="Member Since" value={new Date(user.createdAt).toLocaleDateString()} />
            </div>
          </Panel>

          <Panel title="Change Password">
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={onUpdate}>
              <PasswordField id="pwd" label="New Password" value={pwd} onChange={setPwd} show={showPwd} setShow={setShowPwd} />
              <PasswordField id="confirm" label="Confirm" value={confirm} onChange={setConfirm} show={showConfirm} setShow={setShowConfirm} />
              <div className="sm:col-span-2">
                <Button type="submit" className="transition-transform hover:scale-105">Update Password</Button>
              </div>
            </form>
          </Panel>
        </div>
      </div>

      <EditProfileDialog
        open={editOpen}
        onOpenChange={setEditOpen}
        initial={{ restaurantName: user.restaurantName, ownerName: user.ownerName, email: user.email }}
        onSave={async (d) => {
          const res = await updateProfile(d);
          if (!res.ok) return toast.error(res.error ?? "Could not save profile.");
          toast.success("Profile updated successfully.");
          setEditOpen(false);
        }}
      />

      <ConfirmDialog
        open={confirmLogout}
        onOpenChange={setConfirmLogout}
        title="Logout?"
        description="You'll need to sign in again to access your kitchen dashboard."
        confirmLabel="Logout"
        destructive
        onConfirm={() => {
          logout();
          toast.success("Logged out successfully.");
          navigate({ to: "/" });
        }}
      />
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs uppercase tracking-wide text-muted-foreground">{label}</div>
      <div className="mt-1 text-sm font-medium">{value}</div>
    </div>
  );
}

function PasswordField({ id, label, value, onChange, show, setShow }: { id: string; label: string; value: string; onChange: (v: string) => void; show: boolean; setShow: (b: boolean) => void }) {
  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      <div className="relative">
        <Input id={id} type={show ? "text" : "password"} value={value} onChange={(e) => onChange(e.target.value)} className="pr-10" />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-muted-foreground hover:text-foreground"
          aria-label={show ? "Hide password" : "Show password"}
        >
          {show ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      </div>
    </div>
  );
}

function EditProfileDialog({
  open,
  onOpenChange,
  initial,
  onSave,
}: {
  open: boolean;
  onOpenChange: (o: boolean) => void;
  initial: { restaurantName: string; ownerName: string; email: string };
  onSave: (d: { restaurantName: string; ownerName: string; email: string }) => void;
}) {
  const [form, setForm] = useState(initial);
  return (
    <Dialog open={open} onOpenChange={(o) => { onOpenChange(o); if (o) setForm(initial); }}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
          <DialogDescription>Update your account information.</DialogDescription>
        </DialogHeader>
        <form
          onSubmit={(e) => { e.preventDefault(); onSave(form); }}
          className="grid gap-3"
        >
          <div>
            <Label htmlFor="r">Restaurant Name</Label>
            <Input id="r" value={form.restaurantName} onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="o">Owner Name</Label>
            <Input id="o" value={form.ownerName} onChange={(e) => setForm({ ...form, ownerName: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="e">Email</Label>
            <Input id="e" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
          </div>
          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
