import { requireAuth } from "@/lib/auth";
import DashboardSidebar from "@/components/dashboard-sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAuth();

  return (
    <section className="dashboard-bg min-h-screen overflow-hidden">
      <div className="absolute inset-0 opacity-70">
        <div className="blur-bg" />
      </div>
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-10 sm:px-8 lg:grid-cols-[300px_1fr] lg:py-16">
        <DashboardSidebar name={user.name} email={user.email} />
        <div className="space-y-8">{children}</div>
      </div>
    </section>
  );
}
