import { Activity, ArrowRight, CheckCircle2, CreditCard, LayoutGrid, Sparkles } from "lucide-react";
import { requireAuth } from "@/lib/auth";
import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const user = await requireAuth();
  const totalCredits = user.credits?.total ?? 5;
  const remaining = user.credits?.remaining ?? 0;
  const used = user.credits?.used ?? Math.max(0, totalCredits - remaining);
  const plan = user.subscription?.plan ?? "FREE";
  const progress = Math.min(100, Math.round(((totalCredits - remaining) / Math.max(1, totalCredits)) * 100));

  const quickActions = [
    { label: "Upgrade plan", icon: ArrowRight, href: "/pricing" },
    { label: "View history", icon: Activity, href: "/dashboard/history" },
    { label: "Manage billing", icon: CreditCard, href: "/dashboard/billing" },
  ];

  const stats = [
    { label: "Plan", value: plan, accent: "from-violet-500 to-cyan-500", icon: Sparkles },
    { label: "Remaining credits", value: `${remaining}`, accent: "from-sky-500 to-cyan-500", icon: LayoutGrid },
    { label: "Used credits", value: `${used}`, accent: "from-fuchsia-500 to-violet-500", icon: CheckCircle2 },
    { label: "Activity", value: `${user.history?.length ?? 0}`, accent: "from-cyan-500 to-sky-500", icon: Activity },
  ];

  return (
    <main className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex flex-col gap-8 xl:flex-row xl:items-end xl:justify-between">
          <div className="max-w-3xl space-y-4">
            <p className="uppercase tracking-[0.35em] text-sm text-cyan-300">Dashboard overview</p>
            <h1 className="text-4xl font-semibold text-white sm:text-5xl">Your premium creator hub</h1>
            <p className="max-w-2xl text-base leading-7 text-slate-300">
              Manage your plan, credits, AI workflows and history with a high-end SaaS experience designed for creators.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-300">
              Plan: <span className="font-semibold text-white">{plan}</span>
            </div>
            <LogoutButton />
          </div>
        </div>

        <div className="mt-10 grid gap-6 xl:grid-cols-2">
          <div className="grid gap-6 sm:grid-cols-2">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <article key={item.label} className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
                      <p className="mt-4 text-3xl font-semibold text-white">{item.value}</p>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-lg shadow-violet-500/20`}>
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Credit usage</p>
                <p className="mt-4 text-3xl font-semibold text-white">{remaining} remaining</p>
              </div>
              <div className="rounded-3xl bg-white/5 px-4 py-3 text-sm uppercase tracking-[0.25em] text-slate-200">
                {progress}% used
              </div>
            </div>
            <div className="mt-8 h-4 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${progress}%` }} />
            </div>
            <div className="mt-6 grid gap-4 text-sm text-slate-300">
              <p>{totalCredits} total credits this period.</p>
              <p>Keep the momentum with a premium plan and faster generation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.35fr_0.65fr]">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI workspace</p>
              <h2 className="mt-3 text-3xl font-semibold text-white">Creator tools in one premium view</h2>
            </div>
            <span className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Live</span>
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Generate content</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">Launch idea-to-post workflows with a cleaner creative canvas and direct access to AI output history.</p>
            </div>
            <div className="rounded-[1.75rem] border border-white/10 bg-slate-900/90 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Workflow cards</p>
              <p className="mt-4 text-sm leading-7 text-slate-300">Use premium cards for quick actions, status updates, and creator notes.</p>
            </div>
          </div>
          <div className="mt-8 grid gap-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Quick actions</p>
              <span className="rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.3em] text-slate-300">Fast</span>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <a
                    key={action.label}
                    href={action.href}
                    className="rounded-3xl border border-white/10 bg-slate-950/90 px-5 py-4 text-sm text-slate-200 transition hover:border-cyan-400/30 hover:bg-white/5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-10 w-10 place-items-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>{action.label}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <aside className="space-y-6">
          <div className="rounded-[2rem] border border-white/10 bg-slate-900/90 p-6 shadow-[0_30px_90px_-40px_rgba(0,0,0,0.5)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Plan insights</p>
            <div className="mt-5 space-y-4 text-sm text-slate-300">
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Current plan</p>
                <p className="mt-3 text-lg font-semibold text-white">{plan}</p>
              </div>
              <div className="rounded-3xl bg-white/5 p-4">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Credit pace</p>
                <p className="mt-3 text-lg font-semibold text-white">{remaining}/{totalCredits} left</p>
              </div>
            </div>
          </div>
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 text-slate-300">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Activity preview</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">Recent creator sessions and usage insights land here first, helping you stay ahead of your workflow.</p>
          </div>
        </aside>
      </section>
    </main>
  );
}
