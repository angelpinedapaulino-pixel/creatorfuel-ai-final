import { requireAuth } from "@/lib/auth";

export default async function BillingPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-[#111827]/90 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Billing</p>
        <h1 className="text-3xl font-semibold text-white">Billing overview</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Review your Stripe plan and billing status for CreatorFuel AI.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Current plan</p>
          <p className="mt-4 text-3xl font-semibold text-white">{user.subscription?.plan ?? "FREE"}</p>
          <p className="mt-2 text-sm text-slate-400">Status: {user.subscription?.status ?? "ACTIVE"}</p>
        </div>
        <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
          <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Stripe customer</p>
          <p className="mt-4 text-lg font-semibold text-white">{user.subscription?.stripeCustomerId ?? "Not connected"}</p>
          <p className="mt-2 text-sm text-slate-400">Subscription ID: {user.subscription?.stripeSubscriptionId ?? "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
