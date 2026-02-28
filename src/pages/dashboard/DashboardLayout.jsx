import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { getCurrentUser } from '@/utils/auth';
import DashboardSidebar from '@/components/shared/DashboardSidebar';

const DashboardLayout = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate('/login');
  }, [user, navigate]);

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <DashboardSidebar user={user} />
      <main className="lg:ml-64 pt-16 lg:pt-0 min-h-screen">
        <div className="calm-container py-8 sm:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
