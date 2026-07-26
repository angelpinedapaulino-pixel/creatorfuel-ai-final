import { requireAuth } from "@/lib/auth";

export default async function CreditsPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-[#111827]/90 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">Credits</p>
        <h1 className="text-3xl font-semibold text-white">Creator credits</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Track available credits and usage for AI features across your creator workflow.
        </p>
      </div>
      <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Remaining</p>
            <p className="mt-3 text-5xl font-semibold text-white">{user.credits?.remaining ?? 0}</p>
          </div>
          <div className="rounded-3xl bg-slate-900 px-4 py-3 text-sm text-slate-200">
            <p>Total</p>
            <p className="mt-2 text-2xl font-semibold text-white">{user.credits?.total ?? 0}</p>
          </div>
        </div>
        <p className="mt-6 text-sm text-slate-400">Used: {user.credits?.used ?? 0} credits</p>
      </div>
    </div>
  );
}
