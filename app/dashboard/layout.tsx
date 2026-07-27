import { requireAuth } from "@/lib/auth";
import DashboardSidebar from "@/components/dashboard-sidebar";

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
  const user = await requireAuth();

  return (
    <section className="dashboard-bg min-h-screen overflow-hidden px-4 py-10 sm:px-6 lg:px-8">
      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[320px_1fr]">
        <div className="relative z-10"> 
          <DashboardSidebar name={user.name} email={user.email} />
        </div>
        <div className="relative z-10 space-y-8">{children}</div>
      </div>
    </section>
  );
}
