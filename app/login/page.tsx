export default function LoginPage() {
  return (
    <div className="mx-auto max-w-md px-6 py-16 sm:px-8 lg:py-20">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-3xl font-semibold text-slate-950">Log in</h1>
        <p className="mt-3 text-sm leading-6 text-slate-600">
          Access your CreatorFuel AI workspace and manage your creator workflows.
        </p>
        <form className="mt-8 space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-slate-900"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}
