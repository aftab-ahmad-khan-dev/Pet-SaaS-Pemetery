import { createContext, useContext, useState } from "react";

const DashboardLayoutContext = createContext(null);

export function DashboardLayoutProvider({ children }) {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(
    () => JSON.parse(localStorage.getItem("cemetery_sidebar_collapsed") ?? "false"),
  );

  const toggleSidebar = () => {
    setSidebarCollapsed((v) => {
      const next = !v;
      localStorage.setItem("cemetery_sidebar_collapsed", JSON.stringify(next));
      return next;
    });
  };

  return (
    <DashboardLayoutContext.Provider
      value={{ sidebarCollapsed, setSidebarCollapsed, toggleSidebar }}
    >
      {children}
    </DashboardLayoutContext.Provider>
  );
}

export function useDashboardLayout() {
  const ctx = useContext(DashboardLayoutContext);
  if (!ctx) throw new Error("useDashboardLayout must be used within DashboardLayoutProvider");
  return ctx;
}

export default DashboardLayoutProvider;
