import Link from "next/link";
import { CheckCircle2, Sparkles, TrendingUp } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    credits: "5 credits",
    details: ["Starter creator access", "Essential AI features", "Email support"],
    highlight: false,
    button: "Start Free",
  },
  {
    name: "VIRAL",
    price: "$19.99",
    credits: "50 credits",
    details: ["Faster AI generation", "Better model access", "Priority support"],
    highlight: true,
    button: "Choose Viral",
  },
  {
    name: "EMPIRE",
    price: "$69.99",
    credits: "200 credits",
    details: ["Full premium access", "Advanced feature set", "Future tools included"],
    highlight: false,
    button: "Choose Empire",
  },
];

const tableFeatures = [
  { feature: "Monthly credits", free: "5", viral: "50", empire: "200" },
  { feature: "IA model tier", free: "Standard", viral: "Advanced", empire: "Complete" },
  { feature: "Generation speed", free: "Normal", viral: "Priority", empire: "Highest" },
  { feature: "Future tools", free: "No", viral: "Soon", empire: "Included" },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen px-6 py-14 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-[2.5rem] border border-white/10 bg-slate-950/80 p-10 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.2)] backdrop-blur-xl">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.32em] text-slate-300">
                <Sparkles className="h-4 w-4 text-violet-300" />
                Pricing plans
              </span>
              <div>
                <h1 className="text-5xl font-semibold text-white sm:text-6xl">Plans that scale with your creator growth.</h1>
                <p className="mt-4 max-w-2xl text-base leading-8 text-slate-400">
                  Choose the perfect plan for your workflow. FREE includes 5 credits. VIRAL scales content creation. EMPIRE unlocks the full premium creator experience.
                </p>
              </div>
            </div>
            <div className="rounded-[2rem] bg-[#060912]/90 p-8 text-slate-300 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.55)]">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Quick decision</p>
              <p className="mt-4 text-2xl font-semibold text-white">VIRAL is built for creators who publish consistently.</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">Perfect balance between power and cost, with 50 monthly credits and superior generation priority.</p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article key={plan.name} className={`rounded-[2rem] border border-white/10 p-8 shadow-[0_35px_90px_-55px_rgba(0,0,0,0.55)] ${plan.highlight ? "bg-slate-900/95 shadow-[0_45px_120px_-70px_rgba(139,92,246,0.35)]" : "bg-slate-950/90"}`}>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{plan.name}</p>
                  <p className="mt-4 text-5xl font-semibold text-white">{plan.price}</p>
                </div>
                {plan.highlight ? (
                  <div className="rounded-full bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.28em] text-violet-300">Popular</div>
                ) : null}
              </div>
              <p className="mt-8 text-sm text-slate-300">{plan.credits}</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-300">
                {plan.details.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 text-cyan-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${plan.highlight ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:brightness-110" : "border border-white/10 bg-white/5 text-white hover:bg-white/10"}`}
              >
                {plan.button}
              </Link>
            </article>
          ))}
        </div>

        <section className="mt-16 rounded-[2rem] border border-white/10 bg-slate-950/80 p-8 shadow-[0_40px_120px_-80px_rgba(59,130,246,0.16)] backdrop-blur-xl">
          <div className="overflow-hidden rounded-[2rem] bg-[#020614]/80 p-8">
            <h2 className="text-3xl font-semibold text-white">Compare the creator plans</h2>
            <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-white/10 bg-slate-950/90">
              <div className="grid grid-cols-4 gap-0 border-b border-white/10 bg-slate-900/80 px-6 py-4 text-sm uppercase tracking-[0.28em] text-slate-400">
                <span>Feature</span>
                <span className="text-right">FREE</span>
                <span className="text-right">VIRAL</span>
                <span className="text-right">EMPIRE</span>
              </div>
              {tableFeatures.map((row) => (
                <div key={row.feature} className="grid grid-cols-4 gap-0 border-b border-white/10 px-6 py-5 text-sm text-slate-300 last:border-0">
                  <span className="text-slate-100">{row.feature}</span>
                  <span className="text-right text-slate-300">{row.free}</span>
                  <span className="text-right text-slate-300">{row.viral}</span>
                  <span className="text-right text-slate-300">{row.empire}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
