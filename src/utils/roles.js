export const OWNER_ROLES = ["memorial_owner", "contributor"];
export const CLINIC_ROLES = ["clinic_admin", "vet_staff"];
export const ADMIN_ROLES = ["platform_admin"];

export function getDashboardPath(user) {
  if (!user) return "/login";
  if (CLINIC_ROLES.includes(user.role)) return "/dashboard/clinic";
  if (ADMIN_ROLES.includes(user.role)) return "/dashboard/admin";
  return "/dashboard/owner";
}
