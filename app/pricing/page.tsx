import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    name: "FREE",
    price: "$0",
    label: "Starter plan for creators getting started",
    features: ["100 credits per month", "Basic AI models", "Standard support", "All content types"],
    button: "Start free",
    highlight: false,
  },
  {
    name: "STARTER",
    price: "$19.99",
    label: "Perfect for creators who publish regularly",
    features: ["500 credits per month", "Premium templates", "Priority support", "Advanced analytics"],
    button: "Choose Starter",
    highlight: true,
  },
  {
    name: "EMPIRE",
    price: "$69.99",
    label: "Designed for teams and high-volume creators",
    features: ["2,500 credits per month", "Unlimited campaigns", "Dedicated onboarding", "Custom workflows"],
    button: "Choose Empire",
    highlight: false,
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-[#070B16] px-6 py-16 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="space-y-6 text-center">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">CreatorFuel pricing</p>
          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">Premium creator plans with transparent pricing.</h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">
            Keep your current workflows and backend billing logic intact while upgrading to a premium plan experience.
          </p>
        </div>

        <div className="mt-16 grid gap-6 xl:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`glass-card p-8 ${plan.highlight ? "border-violet-500/30 bg-[#12182F] shadow-[0_40px_120px_-80px_rgba(139,92,246,0.45)]" : "bg-white/5"}`}
            >
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{plan.name}</p>
                  <p className="mt-4 text-5xl font-semibold text-white">{plan.price}</p>
                </div>
                {plan.highlight ? (
                  <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-violet-300">
                    Popular
                  </span>
                ) : null}
              </div>
              <p className="mt-6 text-sm leading-6 text-slate-300">{plan.label}</p>
              <ul className="mt-8 space-y-3 text-sm text-slate-200">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-violet-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/register"
                className={`mt-10 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${
                  plan.highlight
                    ? "bg-gradient-to-r from-violet-500 to-cyan-500 text-white hover:brightness-110"
                    : "border border-white/10 bg-white/5 text-white hover:bg-white/10"
                }`}
              >
                {plan.button}
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
