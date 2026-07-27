import { requireAuth } from "@/lib/auth";

export default async function SettingsPage() {
  const user = await requireAuth();
  const plan = user.subscription?.plan ?? "FREE";

  return (
    <main className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Settings</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Account preferences</h1>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
            {plan} plan
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Profile</p>
            <div className="mt-6 space-y-4 text-sm text-slate-300">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Name</p>
                <p className="mt-2 text-lg font-semibold text-white">{user.name}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Email</p>
                <p className="mt-2 text-lg font-semibold text-white">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Notifications</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">Notifications are managed by the current backend settings and can be customized in future iterations without disrupting auth or billing.</p>
            <div className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-300">
              <p className="font-semibold text-white">Account security</p>
              <p className="text-slate-400">JWT and session logic stay exactly as configured today.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
