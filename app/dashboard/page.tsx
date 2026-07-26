import Link from "next/link";
import { requireAuth } from "@/lib/auth";
import { LogoutButton } from "@/components/logout-button";

export default async function DashboardPage() {
  const user = await requireAuth();

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 sm:px-8 lg:py-20">
      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6 rounded-[2rem] border border-slate-800 bg-[#111827]/95 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Dashboard</p>
              <h1 className="mt-4 text-4xl font-semibold text-white">Hello, {user.name}</h1>
              <p className="mt-2 text-sm leading-6 text-slate-400">Your creator workspace is up to date and ready to scale.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link href="/pricing" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 to-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:from-sky-400 hover:to-cyan-300">
                Upgrade
              </Link>
              <LogoutButton />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-[1.75rem] border border-slate-800 bg-[#0F172A] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Plan</p>
              <p className="mt-4 text-3xl font-semibold text-white">{user.subscription?.plan ?? "FREE"}</p>
              <p className="mt-2 text-sm text-slate-400">{user.subscription?.status ?? "ACTIVE"}</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-[#0F172A] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Credits remaining</p>
              <p className="mt-4 text-3xl font-semibold text-white">{user.credits?.remaining ?? 0}</p>
              <p className="mt-2 text-sm text-slate-400">Total credits: {user.credits?.total ?? 0}</p>
            </div>
            <div className="rounded-[1.75rem] border border-slate-800 bg-[#0F172A] p-6">
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Credits used</p>
              <p className="mt-4 text-3xl font-semibold text-white">{user.credits?.used ?? 0}</p>
              <p className="mt-2 text-sm text-slate-400">Updated {new Date(user.updatedAt).toLocaleDateString()}</p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-slate-800 bg-[#0F172A] p-8">
            <h2 className="text-xl font-semibold text-white">Creator activity</h2>
            <p className="mt-3 text-sm leading-6 text-slate-400">
              Your latest subscription and credit usage updates will appear here once your Stripe checkout completes.
            </p>
          </div>
        </div>
        <aside className="rounded-[2rem] border border-slate-800 bg-[#111827]/95 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Account</p>
          <div className="mt-6 space-y-4 text-slate-300">
            <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Owner</p>
              <p className="mt-3 text-lg font-semibold text-white">{user.name}</p>
              <p className="mt-2 text-sm text-slate-400">{user.email}</p>
            </div>
            <div className="rounded-3xl border border-slate-800 bg-[#0F172A] p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-slate-500">Settings</p>
              <p className="mt-3 text-sm leading-6 text-slate-400">Manage your account preferences in the settings section.</p>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
