import { requireAuth } from "@/lib/auth";

export default async function SettingsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-[#111827]/90 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Settings</p>
        <h1 className="text-3xl font-semibold text-white">Account settings</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Manage your creator account, preferences, and notification settings.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Name</p>
            <p className="mt-2 text-lg text-white">{user.name}</p>
          </div>
          <div>
            <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Email</p>
            <p className="mt-2 text-lg text-white">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
