import Link from "next/link";
import { Activity, CreditCard, History, LayoutDashboard, Sparkles, ShieldCheck, Settings, UserCircle, Zap } from "lucide-react";

interface SidebarProps {
  name: string;
  email: string;
}

const navItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "History", href: "/dashboard/history", icon: History },
  { label: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { label: "Credits", href: "/dashboard/credits", icon: Zap },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardSidebar({ name, email }: SidebarProps) {
  return (
    <aside className="flex min-h-[calc(100vh-3.5rem)] flex-col gap-8 rounded-[2.25rem] border border-white/10 bg-slate-950/95 p-6 shadow-[0_40px_120px_-68px_rgba(8,11,22,0.9)] backdrop-blur-xl">
      <div className="space-y-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_-50px_rgba(59,130,246,0.25)]">
        <p className="text-xs uppercase tracking-[0.32em] text-slate-400">CreatorFuel AI</p>
        <div className="flex items-center gap-3">
          <div className="grid h-14 w-14 place-items-center rounded-3xl bg-gradient-to-br from-violet-500 to-cyan-500 text-white shadow-lg shadow-violet-500/20">
            <UserCircle className="h-7 w-7" />
          </div>
          <div>
            <p className="text-base font-semibold text-white">{name}</p>
            <p className="text-sm text-slate-400">{email}</p>
          </div>
        </div>
      </div>

      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-3 text-sm text-slate-200 transition hover:border-cyan-400/40 hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-4 w-4 text-slate-400" />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-5 text-sm text-slate-300 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.05)]">
        <p className="font-semibold text-white">Workspace pulse</p>
        <p className="mt-3 text-slate-400">Manage credits, review activity, and access billing from one premium hub.</p>
      </div>
    </aside>
  );
}
