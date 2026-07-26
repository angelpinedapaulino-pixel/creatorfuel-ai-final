import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "50 credits, creator funnel basics and Stripe billing.",
    features: ["50 monthly credits", "Essential creator analytics", "Email support"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "150 credits, automation templates and priority growth insights.",
    features: ["150 monthly credits", "Priority support", "Advanced reporting"],
  },
  {
    name: "Empire",
    price: "$99",
    description: "500 credits, premium workflows and team-ready tools.",
    features: ["500 monthly credits", "Custom billing options", "Dedicated onboarding"],
  },
];

export default function PricingPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
      <div className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-400">
          Pricing for creator growth
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Plans built for creators, not complexity.
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400">
          Choose the right plan for your creator business and scale with AI-driven workflows, Stripe payments, and real-time credit tracking.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {plans.map((plan, index) => (
          <article
            key={plan.name}
            className={`rounded-[2rem] border p-8 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.75)] ${
              index === 1 ? "border-blue-500/30 bg-slate-950" : "border-slate-800 bg-[#111827]"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{plan.name}</p>
                <p className="mt-4 text-4xl font-semibold text-white">{plan.price}</p>
              </div>
              <span className="rounded-full bg-blue-600/10 px-3 py-1 text-sm text-blue-300">Best value</span>
            </div>
            <p className="mt-6 text-sm leading-6 text-slate-400">{plan.description}</p>
            <ul className="mt-8 space-y-3 text-sm text-slate-300">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-blue-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              Get {plan.name}
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
