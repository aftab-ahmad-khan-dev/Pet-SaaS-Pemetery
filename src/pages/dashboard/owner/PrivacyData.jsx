import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmAlert from '@/components/shared/ConfirmAlert';

const PrivacyData = () => {
  const [deleteOpen, setDeleteOpen] = useState(false);

  const handleDeleteAccount = () => {
    toast.error('Account deletion requested (demo mode)');
    console.log('[GDPR] Account deletion requested at', new Date().toISOString());
  };

  return (
  <div className="w-full">
    <h1 className="font-display text-2xl font-bold text-foreground mb-1">Privacy & Data</h1>
    <p className="text-sm text-muted-foreground mb-8">Manage your data, privacy settings, and account.</p>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* GDPR Export */}
      <div className="pro-card p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-file-export text-accent" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">Export My Data</h3>
            <p className="text-xs text-muted-foreground mt-1">Download all your data in a portable format (GDPR Art. 20).</p>
          </div>
          <button onClick={() => { toast.success('Data export initiated'); console.log('[GDPR] Data export requested at', new Date().toISOString()); }}
            className="pro-btn-secondary text-xs py-2">
            <i className="fa-solid fa-download text-[10px]" /> Export
          </button>
        </div>
      </div>

      {/* Delete Account */}
      <div className="pro-card p-5">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-trash-can text-destructive" />
          </div>
          <div className="flex-1">
            <h3 className="text-sm font-semibold text-foreground">Delete My Account</h3>
            <p className="text-xs text-muted-foreground mt-1">Permanently remove all your data. This action cannot be undone (GDPR Art. 17).</p>
          </div>
          <button onClick={() => setDeleteOpen(true)}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-medium bg-destructive/10 text-destructive hover:bg-destructive/20 transition-colors">
            <i className="fa-solid fa-trash text-[10px]" /> Delete
          </button>
        </div>
      </div>

      {/* Privacy info */}
      <div className="pro-card p-5 lg:col-span-2">
        <h3 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
          <i className="fa-solid fa-shield-halved text-accent text-xs" /> Data Protection
        </h3>
        <ul className="space-y-2.5">
          {[
            'All data is encrypted at rest and in transit',
            'Daily automated backups with 24h restore target',
            'GDPR compliant data processing',
            'Your data is never sold or shared with third parties',
            'You can request full data export or deletion at any time',
          ].map(item => (
            <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <i className="fa-solid fa-check text-accent text-[10px] mt-0.5" /> {item}
            </li>
          ))}
        </ul>
      </div>
    </div>

    <ConfirmAlert
      open={deleteOpen}
      onOpenChange={setDeleteOpen}
      title="Delete My Account"
      description="Permanently remove all your data. This action cannot be undone (GDPR Art. 17). Are you sure you want to proceed?"
      confirmLabel="Delete account"
      cancelLabel="Cancel"
      onConfirm={handleDeleteAccount}
      variant="destructive"
    />
  </div>
  );
};

export default PrivacyData;
