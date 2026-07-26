import Link from "next/link";

interface SidebarProps {
  name: string;
  email: string;
}

const nav = [
  { label: "Overview", href: "/dashboard" },
  { label: "Settings", href: "/settings" },
  { label: "Pricing", href: "/pricing" },
];

export default function DashboardSidebar({ name, email }: SidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-8 rounded-3xl border border-slate-800 bg-slate-950/90 p-6 text-slate-200 shadow-xl shadow-black/25 lg:w-80">
      <div className="space-y-3">
        <div className="rounded-3xl bg-slate-900/80 p-4">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">CreatorFuel</p>
          <p className="mt-3 text-base font-semibold text-white">{name}</p>
          <p className="mt-2 text-sm text-slate-400">{email}</p>
        </div>
      </div>
      <nav className="space-y-2">
        {nav.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-2xl px-4 py-3 text-sm text-slate-200 transition hover:bg-slate-800"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="rounded-3xl bg-slate-900/80 p-4 text-sm text-slate-400">
        <p className="font-semibold text-slate-100">Product</p>
        <p className="mt-2 text-slate-400">Your creator workspace stores billing, credits and campaign history in one place.</p>
      </div>
    </aside>
  );
}
