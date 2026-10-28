import { getCurrentUser } from '@/utils/auth';
import MemorialsList from './owner/MemorialsList';
import ClinicDashboard from './clinic/ClinicDashboard';
import AdminDashboard from './admin/AdminDashboard';

const DashboardIndex = () => {
  const user = getCurrentUser();
  if (!user) return null;

  if (user.role === 'clinic_admin' || user.role === 'vet_staff') return <ClinicDashboard />;
  if (user.role === 'platform_admin') return <AdminDashboard />;
  return <MemorialsList />;
};

export default DashboardIndex;
