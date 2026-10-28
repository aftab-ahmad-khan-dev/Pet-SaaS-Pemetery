import { Outlet } from "react-router-dom";
import ProtectedOutlet from "@/routes/ProtectedOutlet";
import DashboardLayoutProvider from "@/contexts/DashboardLayoutContext";
import DashboardSidebar from "@/components/shared/DashboardSidebar";
import DashboardHeader from "@/components/shared/DashboardHeader";
import DashboardLayoutMain from "@/components/shared/DashboardLayoutMain";
import { getCurrentUser } from "@/utils/auth";
import { ADMIN_ROLES } from "@/utils/roles";

export default function AdminLayout() {
  const user = getCurrentUser();

  return (
    <ProtectedOutlet allowedRoles={ADMIN_ROLES}>
      <DashboardLayoutProvider>
          <div className="min-h-screen bg-background">
            <DashboardSidebar user={user} basePath="/dashboard/admin" />
            <DashboardLayoutMain>
              <DashboardHeader />
              <div className="dashboard-container">
              <Outlet />
            </div>
            </DashboardLayoutMain>
          </div>
        </DashboardLayoutProvider>
    </ProtectedOutlet>
  );
}
