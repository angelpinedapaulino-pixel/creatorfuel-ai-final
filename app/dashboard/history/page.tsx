import { requireAuth } from "@/lib/auth";

export default async function HistoryPage() {
  const user = await requireAuth();

  return (
    <div className="space-y-8 rounded-[2rem] border border-slate-800 bg-[#111827]/90 p-8 shadow-[0_25px_80px_-35px_rgba(0,0,0,0.75)]">
      <div className="space-y-3">
        <p className="text-sm uppercase tracking-[0.24em] text-slate-500">History</p>
        <h1 className="text-3xl font-semibold text-white">Account activity</h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400">
          Review your recent creator actions and history across the workspace.
        </p>
      </div>
      <div className="grid gap-4">
        {user.history?.length ? (
          user.history.map((item) => (
            <article key={item.id} className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-300">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-white">{item.action}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.details}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{new Date(item.createdAt).toLocaleDateString()}</p>
              </div>
            </article>
          ))
        ) : (
          <div className="rounded-3xl border border-slate-800 bg-slate-950 p-6 text-slate-400">
            No history has been recorded yet.
          </div>
        )}
      </div>
      </div>
    );
  }
