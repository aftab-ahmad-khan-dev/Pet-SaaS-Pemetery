import { useDashboardLayout } from "@/contexts/DashboardLayoutContext";

export default function DashboardLayoutMain({ children }) {
  const { sidebarCollapsed } = useDashboardLayout();

  return (
    <main
      className={`pt-16 lg:pt-0 min-h-screen overflow-x-hidden transition-all duration-300 ${
        sidebarCollapsed ? "lg:ml-[4.5rem]" : "lg:ml-64"
      }`}
    >
      {children}
    </main>
  );
}
