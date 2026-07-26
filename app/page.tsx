import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1.5 text-sm font-semibold text-slate-700">
            Creator tools powered by AI
          </div>
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
              CreatorFuel AI helps creators grow faster with smarter funnels.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-slate-600">
              Launch campaigns, manage subscriptions, and get AI-powered growth recommendations from one creator-focused platform.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700">
              Get started
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
              View pricing
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white/95 p-10 shadow-lg shadow-slate-200/70">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
            Built for creators
          </p>
          <div className="mt-6 space-y-5 text-slate-700">
            <div>
              <h2 className="text-xl font-semibold">AI content growth</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Generate smarter campaign ideas and optimize your creator funnel with AI-driven insights.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Subscription management</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Connect Stripe, track memberships, and deliver paid experiences without losing time.
              </p>
            </div>
            <div>
              <h2 className="text-xl font-semibold">Creator-friendly workflows</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                One place to manage products, customers, metrics, and content workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Launch faster",
            body: "Create AI-assisted landing pages, offers, and subscription plans in minutes.",
          },
          {
            title: "Track conversions",
            body: "Monitor your creator funnel with simple dashboards and Stripe-powered payments.",
          },
          {
            title: "Scale sustainably",
            body: "Retain members, automate renewals, and grow revenue with repeatable systems.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-950">{item.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
