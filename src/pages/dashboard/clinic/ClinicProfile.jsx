import toast from 'react-hot-toast';
import { mockClinics } from '@/utils/mockData';

const ClinicProfile = () => {
  const clinic = mockClinics[0];

  return (
    <div className="w-full">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">Clinic Profile</h1>
      <p className="text-sm text-muted-foreground mb-8">Manage your clinic information and branding.</p>

      <div className="pro-card p-6 space-y-6">
        {/* Logo */}
        <div className="flex items-center gap-5">
          <div className="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center">
            <i className="fa-solid fa-hospital text-2xl text-accent" />
          </div>
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">{clinic.name}</h3>
            <span className="pro-badge-success text-[10px] mt-1 inline-flex capitalize">{clinic.plan} Plan</span>
          </div>
          <button className="ml-auto pro-btn-secondary text-xs py-2 px-3">
            <i className="fa-solid fa-upload text-[10px]" /> Upload Logo
          </button>
        </div>

        <div className="border-t border-border pt-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="pro-label">Email</label>
            <input defaultValue={clinic.email} className="pro-input" readOnly />
          </div>
          <div>
            <label className="pro-label">Phone</label>
            <input defaultValue={clinic.phone} className="pro-input" readOnly />
          </div>
          <div className="sm:col-span-2">
            <label className="pro-label">Address</label>
            <input defaultValue={clinic.address} className="pro-input" readOnly />
          </div>
          <div>
            <label className="pro-label">License Number</label>
            <input defaultValue={clinic.license} className="pro-input" readOnly />
          </div>
          <div>
            <label className="pro-label">Status</label>
            <div className="pro-input flex items-center">
              <span className="pro-badge-success capitalize">{clinic.status}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-5">
          <button onClick={() => toast.success('Profile updated')} className="pro-btn-primary">
            <i className="fa-solid fa-check text-xs" /> Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default ClinicProfile;
