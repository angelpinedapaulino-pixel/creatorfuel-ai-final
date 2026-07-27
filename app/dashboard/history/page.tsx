import { requireAuth } from "@/lib/auth";

export default async function HistoryPage() {
  const user = await requireAuth();

  return (
    <main className="space-y-10">
      <section className="rounded-[2.5rem] border border-white/10 bg-slate-950/90 p-8 shadow-[0_40px_120px_-80px_rgba(0,0,0,0.55)] backdrop-blur-xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-300">History</p>
            <h1 className="mt-3 text-4xl font-semibold text-white">Creator activity timeline</h1>
          </div>
          <p className="max-w-xl text-sm leading-7 text-slate-400">
            Explore your recent creator actions, content history, and credit events in a polished timeline view.
          </p>
        </div>

        {user.history?.length ? (
          <div className="mt-10 space-y-4">
            {user.history.map((item) => (
              <article key={item.id} className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.45)]">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.28em] text-slate-400">{item.action}</p>
                    <p className="mt-3 text-lg font-semibold text-white">{item.details}</p>
                  </div>
                  <p className="text-sm text-slate-400">{new Date(item.createdAt).toLocaleString()}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-white/10 bg-slate-900/90 p-10 text-center text-slate-300 shadow-[0_20px_80px_-40px_rgba(0,0,0,0.45)]">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-400">No activity yet</p>
            <p className="mt-4 text-lg font-semibold text-white">Your creator history will appear here once you start generating content.</p>
          </div>
        )}
      </section>
    </main>
  );
}
