import Link from "next/link";
import {
  Activity,
  CheckCircle2,
  CloudLightning,
  FileVideo,
  Image,
  LayoutGrid,
  Mail,
  Mic2,
  Sparkles,
  Zap,
} from "lucide-react";
import { requireAuth } from "@/lib/auth";
import { LogoutButton } from "@/components/logout-button";

const toolList = [
  { label: "Instagram Post", icon: Image, description: "Create engaging posts that get more likes." },
  { label: "YouTube Script", icon: FileVideo, description: "Write viral scripts that keep viewers watching." },
  { label: "TikTok Script", icon: Sparkles, description: "Create short-form content that goes viral." },
  { label: "Blog Post", icon: LayoutGrid, description: "Write SEO-optimized blog posts in minutes." },
  { label: "Email Campaign", icon: Mail, description: "Create emails that convert and engage." },
];

const quickActions = [
  { label: "Upgrade Plan", icon: Zap, href: "/pricing" },
  { label: "View History", icon: Activity, href: "/dashboard/history" },
  { label: "Brand Voice", icon: Mic2, href: "/dashboard" },
];

export default async function DashboardPage() {
  const user = await requireAuth();

  const stats = [
    {
      label: "Total Credits",
      value: user.credits?.remaining ?? 0,
      accent: "from-violet-500 to-indigo-500",
      icon: CloudLightning,
      subtitle: "Available credits",
    },
    {
      label: "Plan",
      value: user.subscription?.plan ?? "FREE",
      accent: "from-sky-500 to-cyan-500",
      icon: CheckCircle2,
      subtitle: "Current plan",
    },
    {
      label: "Content Created",
      value: user.history?.length ?? 0,
      accent: "from-fuchsia-500 to-violet-500",
      icon: Sparkles,
      subtitle: "This month",
    },
    {
      label: "Words Generated",
      value: 0,
      accent: "from-cyan-500 to-sky-500",
      icon: LayoutGrid,
      subtitle: "This month",
    },
  ];

  const progress = Math.min(
    100,
    Math.round(((user.credits?.remaining ?? 0) / Math.max(1, user.credits?.total ?? 1)) * 100)
  );

  return (
    <section className="min-h-screen bg-[#070B16] px-6 py-8 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid gap-8 xl:grid-cols-[1.5fr_0.95fr]">
          <div className="space-y-8">
            <div className="glass-card border border-white/10 p-8 shadow-[0_40px_120px_-80px_rgba(139,92,246,0.35)]">
              <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
                <div className="max-w-2xl space-y-4">
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Welcome back</p>
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                      <Sparkles className="h-7 w-7" />
                    </div>
                    <div>
                      <h1 className="text-4xl font-semibold text-white sm:text-5xl">Welcome back, {user.name}</h1>
                      <p className="mt-2 max-w-xl text-base text-slate-400 sm:text-lg">
                        Your AI copiloto está listo para crear contenido increíble para tu audiencia.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/pricing"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:brightness-110"
                  >
                    <Zap className="h-4 w-4" />
                    Upgrade Plan
                  </Link>
                  <LogoutButton />
                </div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {stats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article
                      key={item.label}
                      className="group rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_-48px_rgba(139,92,246,0.2)] transition hover:-translate-y-1"
                    >
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br ${item.accent} text-white shadow-xl shadow-slate-900/20`}>
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                      <p className="mt-3 text-3xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm text-slate-400">{item.subtitle}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
              <section className="glass-card border border-white/10 p-8 shadow-[0_35px_90px_-50px_rgba(139,92,246,0.35)]">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">AI Content Generator</p>
                    <h2 className="mt-3 text-3xl font-semibold text-white">Create with AI</h2>
                  </div>
                  <div className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200">
                    How it works
                  </div>
                </div>

                <div className="mt-8 space-y-6">
                  <textarea
                    rows={6}
                    placeholder="What do you want to create today?"
                    className="w-full rounded-[1.75rem] border border-white/10 bg-[#0A1120] px-5 py-5 text-sm text-white outline-none ring-1 ring-transparent transition focus:border-violet-500 focus:ring-violet-500/25"
                  />

                  <div className="grid gap-4 lg:grid-cols-3">
                    {[
                      { label: "Platform", value: "Instagram Post" },
                      { label: "Tone", value: "Professional" },
                      { label: "Language", value: "English" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-4 text-slate-200">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                        <p className="mt-3 text-sm font-semibold text-white">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <button className="glass-button inline-flex w-full items-center justify-center gap-2 sm:w-auto">
                    <Zap className="h-4 w-4" />
                    Generate
                  </button>
                </div>
              </section>

              <section className="glass-card border border-white/10 p-8 shadow-[0_35px_90px_-50px_rgba(139,92,246,0.25)]">
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current Plan</p>
                <div className="mt-6 space-y-5">
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-6 text-slate-200">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Plan status</p>
                    <p className="mt-3 text-3xl font-semibold text-white">{user.subscription?.plan ?? "FREE"}</p>
                    <p className="mt-2 text-sm text-slate-400">{user.subscription?.status ?? "ACTIVE"}</p>
                  </div>
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-6 text-slate-200">
                    <p className="text-xs uppercase tracking-[0.28em] text-slate-400">Credits remaining</p>
                    <p className="mt-3 text-4xl font-semibold text-white">{user.credits?.remaining ?? 0}</p>
                    <p className="mt-2 text-sm text-slate-400">Total: {user.credits?.total ?? 0}</p>
                  </div>
                </div>
              </section>
            </div>

            <section className="glass-card border border-white/10 p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Popular Tools</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Everything you need to create amazing content</h2>
                </div>
                <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">5 tools</div>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
                {toolList.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <div
                      key={tool.label}
                      className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-5 transition hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/5"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <p className="mt-5 text-sm font-semibold text-white">{tool.label}</p>
                      <p className="mt-2 text-sm text-slate-400">{tool.description}</p>
                    </div>
                  );
                })}
              </div>
            </section>

            <section className="glass-card border border-white/10 p-8 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Recent Activity</p>
                  <h2 className="mt-3 text-3xl font-semibold text-white">Activity feed</h2>
                </div>
                <div className="rounded-full bg-white/5 px-4 py-2 text-sm text-slate-200">Latest</div>
              </div>
              <div className="mt-8 space-y-4">
                {user.history?.length ? (
                  user.history.map((item) => (
                    <div key={item.id} className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-5 text-slate-200">
                      <div className="flex items-center justify-between gap-3">
                        <div>
                          <p className="font-semibold text-white">{item.action}</p>
                          <p className="mt-1 text-sm text-slate-400">{item.details}</p>
                        </div>
                        <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.28em] text-slate-400">
                          {new Date(item.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-8 text-center text-slate-400">
                    No content created yet. Start generating amazing content with the AI tool above.
                  </div>
                )}
              </div>
            </section>
          </div>
          <aside className="space-y-6">
            <div className="glass-card border border-white/10 p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current Plan</p>
              <div className="mt-6 rounded-[1.75rem] border border-white/10 bg-[#0A1120] p-6 text-slate-200">
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Plan</p>
                <p className="mt-3 text-3xl font-semibold text-white">{user.subscription?.plan ?? "FREE"}</p>
                <p className="mt-2 text-sm text-slate-400">{user.subscription?.status ?? "ACTIVE"}</p>
              </div>
            </div>
            <div className="glass-card border border-white/10 p-6 shadow-[0_35px_90px_-50px_rgba(0,0,0,0.35)]">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Credits Remaining</p>
              <div className="mt-6 rounded-[1.75rem] bg-[#0A1120] p-6 text-white shadow-lg shadow-slate-950/20">
                <p className="text-3xl font-semibold">{user.credits?.remaining ?? 0}</p>
                <p className="mt-2 text-sm text-slate-400">Total credits: {user.credits?.total ?? 0}</p>
                <div className="mt-6 h-3 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${progress}%` }} />
                </div>
                <p className="mt-3 text-sm text-slate-400">Resets on August 26, 2026</p>
              </div>
            </div>
            <div className="glass-card border border-white/10 p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Quick Actions</p>
              <div className="mt-6 space-y-3">
                {quickActions.map((action) => (
                  <Link
                    key={action.label}
                    href={action.href}
                    className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#0A1120] px-4 py-3 text-sm text-slate-200 transition hover:border-violet-400/30 hover:bg-white/5"
                  >
                    <action.icon className="h-4 w-4 text-violet-300" />
                    {action.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="glass-card border border-white/10 bg-gradient-to-br from-violet-900 via-slate-950 to-sky-950 p-6 text-white shadow-[0_30px_90px_-45px_rgba(99,102,241,0.45)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-300">Upgrade to Pro</p>
                  <h3 className="mt-4 text-2xl font-semibold">Unlock unlimited content</h3>
                </div>
                <div className="rounded-3xl bg-white/10 p-3 text-slate-100">
                  <Sparkles className="h-5 w-5" />
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-300">Get more credits and premium AI features for faster creator growth.</p>
              <Link
                href="/pricing"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Upgrade Now
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
