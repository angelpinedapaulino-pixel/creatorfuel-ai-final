import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles, Zap } from "lucide-react";

const stats = [
  {
    title: "Premium workspace",
    description: "A refined dashboard built for creator productivity and clarity.",
    icon: Sparkles,
  },
  {
    title: "Credits made simple",
    description: "Track usage, plan limits, and remaining credit balance at a glance.",
    icon: ShieldCheck,
  },
  {
    title: "Stripe-ready billing",
    description: "Upgrade plans and manage subscriptions without changing backend logic.",
    icon: Zap,
  },
];

const features = [
  {
    title: "Launch faster",
    body: "From content idea to finished creator asset with powerful AI workflows.",
  },
  {
    title: "Scale smarter",
    body: "Built for creators who want a polished SaaS experience and fast results.",
  },
  {
    title: "Stay in control",
    body: "Monitor credits, plans, history, and team-ready tools in one space.",
  },
];

const highlights = [
  {
    label: "Creator hub",
    detail: "All your plans, credits, and AI tools in a premium interface.",
  },
  {
    label: "Modern UI",
    detail: "Glassmorphism, soft glow accents, and high-contrast readability.",
  },
  {
    label: "Same backend",
    detail: "Keep your database, auth, Stripe, and Gemini logic exactly as-is.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0A1120]/80 p-8 shadow-[0_40px_120px_-60px_rgba(59,130,246,0.18)]">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.16),transparent_22%),radial-gradient(circle_at_bottom_right,_rgba(139,92,246,0.12),transparent_18%)]" />
          <div className="relative grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
            <div className="space-y-8">
              <div className="max-w-xl space-y-4">
                <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-300 shadow-[0_20px_60px_-50px_rgba(139,92,246,0.35)]">
                  <Sparkles className="h-4 w-4 text-violet-300" />
                  Premium creator experience
                </p>
                <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                  CreatorFuel AI for ambitious creators who want a refined SaaS dashboard.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-400">
                  Transform your creator workflow with a polished front-end design while keeping Stripe, auth, and AI logic exactly where they are.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link href="/register" className="glass-button inline-flex items-center justify-center px-6 py-3">
                  Start for free
                </Link>
                <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                  View plans
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {stats.map((item) => {
                  const Icon = item.icon;
                  return (
                    <article key={item.title} className="glass-card overflow-hidden p-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h2 className="mt-6 text-xl font-semibold text-white">{item.title}</h2>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                    </article>
                  );
                })}
              </div>
            </div>

            <div className="glass-card border border-white/10 p-8 shadow-[0_40px_120px_-80px_rgba(139,92,246,0.35)]">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.32em] text-slate-400">CreatorFuel AI</p>
                  <h2 className="mt-4 text-3xl font-semibold text-white">Premium SaaS presentation, same backend power.</h2>
                </div>
                <div className="rounded-3xl bg-white/10 p-3 text-slate-100">
                  <ArrowRight className="h-5 w-5" />
                </div>
              </div>

              <div className="mt-8 space-y-4 text-sm leading-7 text-slate-300">
                <p>Enhance your product with a polished experience for creators while preserving your current Prisma, JWT, Stripe, and Gemini logic.</p>
                <p>CreatorFuel AI now looks premium, modern, and consistent across landing, auth, pricing, and dashboard sections.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="glass-card p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Feature</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{feature.body}</p>
            </article>
          ))}
        </section>

        <section className="mt-16 grid gap-6 lg:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.label} className="glass-card p-7">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.label}</p>
              <p className="mt-4 text-base leading-7 text-slate-300">{item.detail}</p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
