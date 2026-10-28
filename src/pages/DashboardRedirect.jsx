import { Navigate, useLocation } from "react-router-dom";
import { getCurrentUser } from "@/utils/auth";
import { getDashboardPath } from "@/utils/roles";

export default function DashboardRedirect() {
  const user = getCurrentUser();
  const location = useLocation();
  const { pathname } = location;

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  const basePath = getDashboardPath(user);

  // Preserve subpath when redirecting from legacy /owner, /clinic, /admin
  const legacyMatch = pathname.match(/^\/(owner|clinic|admin)(\/.*)?$/);
  const targetPath = legacyMatch
    ? `/dashboard/${legacyMatch[1]}${legacyMatch[2] || ""}`
    : basePath;

  return <Navigate to={targetPath} replace />;
}
