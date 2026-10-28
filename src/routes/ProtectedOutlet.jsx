import ProtectedRoute from "./ProtectedRoute";
import RoleRoute from "./RoleRoute";

/**
 * Protects dashboard routes. Unauthorized users are redirected to /login.
 * Wrong-role users are redirected to their correct dashboard.
 * Use with React Router's Outlet for nested dashboard routes.
 */
export default function ProtectedOutlet({ children, allowedRoles }) {
  return (
    <ProtectedRoute>
      <RoleRoute allowedRoles={allowedRoles}>
        {children}
      </RoleRoute>
    </ProtectedRoute>
  );
}
