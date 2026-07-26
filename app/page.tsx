import Link from "next/link";
import { ArrowRight, Layers, Sparkles, TrendingUp } from "lucide-react";

const stats = [
  {
    title: "Premium creator dashboard",
    description: "A polished UI built for creators who want a modern workflow.",
    icon: Sparkles,
  },
  {
    title: "Stripe-ready billing",
    description: "Keep backend billing logic intact while upgrading the presentation.",
    icon: Layers,
  },
  {
    title: "Credit-first experience",
    description: "Track credits, plans, and activity in a beautifully designed hub.",
    icon: TrendingUp,
  },
];

const features = [
  {
    title: "Create social content",
    body: "Generate posts, videos, emails and blog content in one dashboard.",
  },
  {
    title: "Monitor credits",
    body: "See remaining credits, plan details, and usage with premium visuals.",
  },
  {
    title: "Scale faster",
    body: "Move from idea to published creator content without friction.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden px-6 py-14 sm:px-8 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.24),transparent_36%),radial-gradient(circle_at_top_right,_rgba(59,130,246,0.16),transparent_30%)] pointer-events-none" />
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_20px_60px_-50px_rgba(139,92,246,0.35)]">
              <Sparkles className="h-4 w-4 text-violet-400" />
              CreatorFuel AI premium dashboard
            </div>
            <div className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                CreatorFuel AI for ambitious creators.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-400">
                Build a creator workspace with modern controls, Stripe billing, smart credit tracking, and an elegantly designed experience.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/register" className="glass-button">
                Start free
              </Link>
              <Link
                href="/pricing"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-white/10"
              >
                View pricing
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((item) => {
                const Icon = item.icon;
                return (
                  <article key={item.title} className="glass-card overflow-hidden p-6">
                    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 text-violet-300 shadow-[0_20px_60px_-50px_rgba(139,92,246,0.45)]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-6 text-xl font-semibold text-white">{item.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-400">{item.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-400">CreatorFuel AI</p>
                <h2 className="mt-3 text-3xl font-semibold text-white">Launch a premium creator workflow.</h2>
              </div>
              <div className="rounded-3xl bg-white/10 p-3 text-slate-100">
                <ArrowRight className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-8 grid gap-4 text-slate-300">
              <p>
                Move from content ideas to published assets with AI-powered templates, plans, and credit tracking in one space.
              </p>
              <p>
                Keep your login, pricing and backend logic exactly the same while refreshing your entire frontend design.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <article key={feature.title} className="glass-card p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Feature</p>
              <h3 className="mt-5 text-2xl font-semibold text-white">{feature.title}</h3>
              <p className="mt-4 text-sm leading-6 text-slate-300">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
