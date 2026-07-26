import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 sm:px-8 lg:py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Creator dashboard
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
              Your CreatorFuel workspace
            </h1>
          </div>
          <Link
            href="/pricing"
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-slate-50 px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Upgrade plan
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Campaign performance</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              Monitor your latest creator campaigns, revenue, and subscriber growth in one place.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <p>Active campaigns: 5</p>
              <p>Monthly recurring revenue: $4,200</p>
              <p>AI recommendations: 8 ready</p>
            </div>
          </section>
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
            <h2 className="text-xl font-semibold text-slate-950">Subscription status</h2>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              View billing, credits, and access to premium creator features.
            </p>
            <div className="mt-6 space-y-4 text-sm text-slate-700">
              <p>Plan: Starter</p>
              <p>Credits remaining: 50</p>
              <p>Next billing: June 30</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
