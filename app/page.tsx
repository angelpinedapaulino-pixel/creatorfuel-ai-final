import Link from "next/link";

export default function Home() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-24">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center rounded-full bg-[#111827] px-4 py-2 text-sm font-semibold uppercase tracking-[0.26em] text-slate-300 ring-1 ring-slate-800/80">
            Creator-first AI platform
          </div>
          <div className="space-y-6">
            <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight text-white sm:text-6xl">
              CreatorFuel AI makes growth effortless for creators.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-400">
              Build, bill, and scale your creator business with AI-powered workflows, Stripe billing, and a polished creator dashboard.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link href="/register" className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Start free
            </Link>
            <Link href="/pricing" className="inline-flex items-center justify-center rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-blue-500 hover:text-blue-400">
              View pricing
            </Link>
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-800 bg-[#111827] p-10 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
            Drive creator revenue
          </p>
          <div className="mt-6 space-y-6 text-slate-300">
            <div>
              <h2 className="text-2xl font-semibold text-white">AI growth recommendations</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Turn content ideas into campaigns with AI prompts and conversion-focused workflows.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Stripe billing in one place</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Manage subscriptions, credits and customer status through your CreatorFuel account.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-white">Creator-friendly insights</h2>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Track credits, membership health, and campaign performance from a clean dashboard.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-3">
        {[
          {
            title: "Build smarter funnels",
            body: "Use AI to create landing page copy, pricing experiments and subscription offers.",
          },
          {
            title: "Monitor performance",
            body: "See active campaigns, revenue, and credit usage from a single dashboard.",
          },
          {
            title: "Scale with confidence",
            body: "Keep your creator business ready for growth with automation and billing controls.",
          },
        ].map((item) => (
          <article key={item.title} className="rounded-[2rem] border border-slate-800 bg-[#111827] p-8 shadow-lg shadow-black/30">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <p className="mt-4 text-sm leading-6 text-slate-400">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
