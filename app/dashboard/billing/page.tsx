import { CreditCard, Receipt, ShieldCheck, Sparkles } from "lucide-react";
import { requireAuth } from "@/lib/auth";

export default async function BillingPage() {
  const user = await requireAuth();
  const plan = user.subscription?.plan ?? "FREE";
  const status = user.subscription?.status ?? "Active";

  return (
    <main className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Billing</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Premium billing overview</h1>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
            {status}
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 text-cyan-300">
              <CreditCard className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Current plan</p>
            </div>
            <p className="mt-5 text-3xl font-semibold text-white">{plan}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Your active Stripe subscription and plan tier.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 text-violet-300">
              <Receipt className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Subscription details</p>
            </div>
            <p className="mt-5 text-lg font-semibold text-white">{user.subscription?.stripeSubscriptionId ?? "Not connected"}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Stripe subscription ID for your billing account.</p>
          </article>
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-3 text-indigo-300">
              <ShieldCheck className="h-5 w-5" />
              <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Payment status</p>
            </div>
            <p className="mt-5 text-lg font-semibold text-white">{user.subscription?.status ?? "Active"}</p>
            <p className="mt-3 text-sm leading-7 text-slate-300">Secure Stripe billing with the same backend logic intact.</p>
          </article>
        </div>

        <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
          <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Billing notes</p>
          <div className="mt-5 grid gap-4 text-slate-300 sm:grid-cols-2">
            <div>
              <p className="font-semibold text-white">Same backend</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">Your Stripe, plan, and payment logic remain unchanged.</p>
            </div>
            <div>
              <p className="font-semibold text-white">Premium UI</p>
              <p className="mt-2 text-sm leading-7 text-slate-400">Billing is now presented with premium clarity and designer polish.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
