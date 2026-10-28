import { Navigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/auth";
import { getDashboardPath } from "@/utils/roles";

export default function RoleRoute({ children, allowedRoles }) {
  const user = getCurrentUser();
  if (!user) return null;

  const hasAccess = allowedRoles.includes(user.role);
  if (!hasAccess) {
    const redirectPath = getDashboardPath(user);
    return <Navigate to={redirectPath} replace />;
  }

  return children;
}
