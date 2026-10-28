import { mockClinics } from '@/utils/mockData';

const ClinicsList = () => {
  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Clinics</h1>
        <p className="text-sm text-muted-foreground mt-1">Manage registered clinics and license utilization.</p>
      </div>

      <div className="pro-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Clinic</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Plan</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell">Licenses</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {mockClinics.map((clinic) => (
                <tr key={clinic.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-foreground">{clinic.name}</div>
                    <div className="text-[11px] text-muted-foreground">{clinic.email}</div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell">
                    <span className="pro-badge-neutral text-[10px] capitalize">{clinic.plan}</span>
                  </td>
                  <td className="px-6 py-4 hidden md:table-cell text-[11px] text-muted-foreground">
                    {clinic.usedLicenses}/{clinic.activeLicenses}
                  </td>
                  <td className="px-6 py-4">
                    <span className={`pro-badge text-[10px] capitalize ${clinic.status === 'approved' ? 'pro-badge-success' : 'pro-badge-warning'}`}>
                      {clinic.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ClinicsList;
