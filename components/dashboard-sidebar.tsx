import Link from "next/link";
import {
  Activity,
  Calendar,
  CreditCard,
  Crown,
  Feather,
  Folder,
  HelpCircle,
  Home,
  Image,
  LayoutGrid,
  MessageCircle,
  Mic2,
  Settings,
  Sparkles,
} from "lucide-react";

interface SidebarProps {
  name: string;
  email: string;
}

const navItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "AI Generator", href: "/dashboard", icon: Sparkles },
  { label: "Templates", href: "/dashboard", icon: LayoutGrid },
  { label: "AI Writer", href: "/dashboard", icon: Feather },
  { label: "AI Image", href: "/dashboard", icon: Image },
  { label: "AI Chat", href: "/dashboard", icon: MessageCircle },
  { label: "Projects", href: "/dashboard", icon: Folder },
  { label: "History", href: "/dashboard/history", icon: Activity },
  { label: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { label: "Brand Voice", href: "/dashboard", icon: Mic2 },
  { label: "Billing & Plans", href: "/dashboard/billing", icon: CreditCard },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
  { label: "Help Center", href: "/dashboard/support", icon: HelpCircle },
  { label: "Invite & Earn", href: "/dashboard/invite", icon: Crown },
];

export default function DashboardSidebar({ name, email }: SidebarProps) {
  return (
    <aside className="flex w-full flex-col gap-8 rounded-[2rem] border border-white/10 bg-[#0A1120]/95 p-6 text-slate-200 shadow-[0_35px_80px_-50px_rgba(0,0,0,0.55)] lg:w-80">
      <div className="space-y-4 rounded-[1.75rem] border border-white/10 bg-white/5 p-5 shadow-[0_30px_80px_-55px_rgba(139,92,246,0.25)]">
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">CreatorFuel AI</p>
        <p className="mt-3 text-base font-semibold text-white">{name}</p>
        <p className="mt-2 text-sm text-slate-400">{email}</p>
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#0A1120] px-4 py-3 text-sm text-slate-200 transition hover:border-violet-400/30 hover:bg-white/5 hover:text-white"
            >
              <Icon className="h-4 w-4 text-slate-400" />
              {item.label}
            </Link>
          );
        })}
      </nav>
      <div className="rounded-[1.75rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-400 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.06)]">
        <p className="font-semibold text-white">Creator experience</p>
        <p className="mt-2 text-slate-400">Manage billing, credits and creator workflows from one premium hub.</p>
      </div>
    </aside>
  );
}
