import { Award, Sparkles } from "lucide-react";
import { requireAuth } from "@/lib/auth";

export default async function CreditsPage() {
  const user = await requireAuth();
  const remaining = user.credits?.remaining ?? 0;
  const total = user.credits?.total ?? 5;
  const used = user.credits?.used ?? Math.max(0, total - remaining);
  const percent = Math.min(100, Math.round((used / Math.max(1, total)) * 100));

  return (
    <main className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">Credits</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Your creator credit status</h1>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 px-5 py-3 text-sm text-slate-200">
            {total} total credits
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <div className="flex items-center gap-4">
              <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Remaining credits</p>
                <p className="mt-3 text-4xl font-semibold text-white">{remaining}</p>
              </div>
            </div>
            <div className="mt-8 rounded-full bg-slate-900/90 p-1">
              <div className="h-3 rounded-full bg-gradient-to-r from-violet-500 to-cyan-500" style={{ width: `${percent}%` }} />
            </div>
            <p className="mt-4 text-sm text-slate-300">{percent}% used • {used} of {total} credits consumed</p>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-slate-900/95 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">Upgrade recommendation</p>
            <h2 className="mt-4 text-3xl font-semibold text-white">Need more monthly credits?</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              VIRAL and EMPIRE plans give you extra credits, faster AI generation, and access to future premium tools.
            </p>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-white/5 px-5 py-3 text-sm text-slate-200">
              <Sparkles className="h-4 w-4 text-violet-300" />
              Premium creator growth
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
