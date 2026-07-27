import Link from "next/link";
import { ArrowRight, BarChart3, Bolt, CheckCircle2, Layers, Sparkles, ShieldCheck } from "lucide-react";

const benefits = [
  {
    title: "Launch with confidence",
    description: "A refined creator workspace with premium hierarchy, depth, and powerful AI workflows.",
    icon: Sparkles,
  },
  {
    title: "Scale with clarity",
    description: "Visualize credits, plan limits, and conversion workflows in a polished product environment.",
    icon: BarChart3,
  },
  {
    title: "Built for creators",
    description: "Keep your existing backend, while upgrading to a SaaS experience that feels premium.",
    icon: ShieldCheck,
  },
];

const features = [
  { title: "Modern UX system", subtitle: "Glassmorphism, glow, and premium spacing for a next-level creator experience." },
  { title: "Fast billing flow", subtitle: "Clear plan comparisons with VIRAL and EMPIRE pricing built for conversion." },
  { title: "Insightful dashboard", subtitle: "Summaries, progress bars, and elegant activity panels that feel polished." },
];

const testimonials = [
  {
    quote: "CreatorFuel AI feels like a polished product built by a top-tier design team.",
    author: "Maya R., Creator Director",
  },
  {
    quote: "Every page has premium depth, soft motion, and excellent hierarchy.",
    author: "Noah T., Growth Lead",
  },
];

const faqs = [
  { question: "Can I keep my current Stripe setup?", answer: "Yes. The backend billing logic remains intact — only the front-end experience changes." },
  { question: "Will the dashboard stay fast?", answer: "The new design is built with lightweight CSS animations and Tailwind utilities for smooth performance." },
  { question: "Does this include premium pricing plans?", answer: "Yes. FREE, VIRAL, and EMPIRE plans are clearly defined with designer-level clarity." },
];

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-14 sm:px-8 lg:px-10">
      <section className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.2)] backdrop-blur-xl sm:p-12">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.24),transparent_20%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.16),transparent_18%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div className="space-y-8">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Premium creator SaaS
              </span>
              <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl">
                CreatorFuel AI is the premium creator platform designed for high-growth teams.
              </h1>
              <p className="max-w-xl leading-8 text-slate-400 sm:text-lg">
                Build, bill, and manage creator content with a polished front-end that feels modern, deep, and professional — while preserving all existing backend logic.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href="/register" className="glass-button inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold">
                Start for free
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                See pricing
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {benefits.map((benefit) => {
                const Icon = benefit.icon;
                return (
                  <article key={benefit.title} className="glass-card p-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="mt-5 text-xl font-semibold text-white">{benefit.title}</h2>
                    <p className="mt-3 text-sm leading-6 text-slate-300">{benefit.description}</p>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.25)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(139,92,246,0.14),transparent_40%)]" />
            <div className="relative space-y-6">
              <div className="rounded-[2rem] bg-[#02040b]/90 p-6 shadow-[0_20px_80px_-50px_rgba(0,0,0,0.55)]">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Live workspace</p>
                <h2 className="mt-4 text-3xl font-semibold text-white">Insight panel for creator teams</h2>
                <p className="mt-4 text-sm leading-6 text-slate-300">
                  A dashboard built with premium spacing, contrast, and subtle animation that feels like a high-end SaaS product.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[1.75rem] bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Credits</p>
                  <p className="mt-3 text-3xl font-semibold text-white">5 free credits</p>
                </div>
                <div className="rounded-[1.75rem] bg-slate-900/90 p-5">
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Plans</p>
                  <p className="mt-3 text-3xl font-semibold text-white">VIRAL / EMPIRE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{feature.title}</p>
            <p className="mt-6 text-base leading-7 text-slate-300">{feature.subtitle}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.85fr] xl:grid-cols-[1.1fr_0.9fr]">
        <div className="glass-card p-10">
          <p className="text-sm uppercase tracking-[0.28em] text-violet-300">Workflows</p>
          <h2 className="mt-5 text-3xl font-semibold text-white">Designed for creators who need focus and clarity.</h2>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            The new UI is built to feel premium, support fast decision-making, and keep your creator tools within reach.
          </p>
          <div className="mt-8 grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Focus mode</p>
              <p className="mt-3 text-base text-slate-300">A clean workspace that removes noise while keeping insights visible.</p>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Credit clarity</p>
              <p className="mt-3 text-base text-slate-300">A premium credit summary that makes usage and limits easy to understand.</p>
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#02070f]/90 p-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.2)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.14),transparent_28%)]" />
          <div className="relative space-y-6 text-slate-300">
            <div className="rounded-[2rem] border border-white/10 bg-slate-950/80 p-7 backdrop-blur-xl">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Creative preview</p>
              <p className="mt-4 text-2xl font-semibold text-white">A dashboard interface with premium depth and visual motion.</p>
            </div>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">AI generator</p>
                <p className="mt-3 text-base text-slate-300">Quickly create content with a refined panel, action buttons, and progress insight.</p>
              </div>
              <div className="rounded-[1.75rem] bg-slate-900/90 p-6">
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Interactive cards</p>
                <p className="mt-3 text-base text-slate-300">Dynamic cards, gradients, and glow can be extended to every section.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-3">
        {testimonials.map((item) => (
          <article key={item.author} className="glass-card p-8">
            <p className="text-sm leading-7 text-slate-300">“{item.quote}”</p>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.24em] text-white">{item.author}</p>
          </article>
        ))}
      </section>

      <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.16)]">
        <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-violet-300">Pricing preview</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Plans built for creators at every stage.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
              FREE for beginners, VIRAL for ambitious creators, and EMPIRE for teams that need full power.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">FREE</p>
              <p className="mt-4 text-3xl font-semibold text-white">$0</p>
              <p className="mt-3 text-sm text-slate-300">5 credits included, ideal to get started fast.</p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">VIRAL</p>
              <p className="mt-4 text-3xl font-semibold text-white">$19.99</p>
              <p className="mt-3 text-sm text-slate-300">50 credits, priority generation, premium workflow upgrades.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-16 grid gap-6 lg:grid-cols-2">
        {faqs.map((item) => (
          <article key={item.question} className="glass-card p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.question}</p>
            <p className="mt-4 text-base leading-7 text-slate-300">{item.answer}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
