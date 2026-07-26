import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$19",
    description: "50 credits, basic creator funnel automation.",
    features: ["AI prompt builder", "Stripe checkout", "Email onboarding"],
  },
  {
    name: "Pro",
    price: "$49",
    description: "150 credits, priority support and creator insights.",
    features: ["Advanced analytics", "Custom offers", "Priority support"],
  },
  {
    name: "Empire",
    price: "$99",
    description: "500 credits, unlimited creator growth workflows.",
    features: ["Strategy coaching", "Automation templates", "Team seats"],
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
      <div className="space-y-6 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          Pricing built for creators
        </p>
        <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
          Simple creator plans for every stage.
        </h1>
        <p className="mx-auto max-w-2xl text-base leading-7 text-slate-600">
          Choose the plan that fits your growth stage and launch faster with AI-powered creator workflows.
        </p>
      </div>

      <div className="mt-16 grid gap-6 lg:grid-cols-3">
        {plans.map((plan) => (
          <section key={plan.name} className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="flex items-center justify-between gap-4">
              <h2 className="text-xl font-semibold text-slate-950">{plan.name}</h2>
              <span className="text-2xl font-bold text-slate-900">{plan.price}</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-600">{plan.description}</p>
            <ul className="mt-6 space-y-3 text-sm text-slate-700">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 h-2.5 w-2.5 rounded-full bg-slate-900" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              href="/register"
              className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Start {plan.name}
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
}
