import { Link } from 'react-router-dom';
import { mockMemorials, mockClinics } from '@/utils/mockData';
import { getCurrentUser } from '@/utils/auth';

const ClinicMemorials = () => {
  const user = getCurrentUser();
  const clinicId = user?.clinicId;
  const memorials = clinicId ? mockMemorials.filter((m) => m.clinicId === clinicId) : [];
  const clinicName = mockClinics.find((c) => c.id === clinicId)?.name || 'Your Clinic';
  const totalCandles = memorials.reduce((s, m) => s + (m.candleCount || 0), 0);
  const totalMemories = memorials.reduce((s, m) => s + (m.memoriesCount || 0), 0);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Clinic Memorials</h1>
        <p className="text-sm text-muted-foreground mt-1">All memorials activated by {clinicName}.</p>
      </div>

      {/* Action Insights */}
      <div className="pro-card p-5 mb-6 border-l-4 border-l-accent">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-3">
          <i className="fa-solid fa-lightbulb text-accent text-xs" /> Action Insights
        </h3>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/dashboard/clinic/new-aftercare"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors"
          >
            <i className="fa-solid fa-paper-plane" /> Send new aftercare
          </Link>
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs">
            <i className="fa-solid fa-paw" /> {memorials.length} memorials
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs">
            <i className="fa-solid fa-fire" /> {totalCandles} candles lit
          </span>
          <span className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs">
            <i className="fa-regular fa-comment" /> {totalMemories} memories shared
          </span>
        </div>
      </div>

      <div className="pro-card overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border bg-muted/30">
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Pet</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell">Owner</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Privacy</th>
                <th className="text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider">Engagement</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {memorials.map((memorial) => (
                <tr key={memorial.id} className="hover:bg-muted/20 transition-colors">
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-foreground">{memorial.petName}</div>
                    <div className="text-[11px] text-muted-foreground">{memorial.species}{memorial.breed ? ` · ${memorial.breed}` : ''}</div>
                  </td>
                  <td className="px-6 py-4 hidden sm:table-cell text-sm text-muted-foreground">{memorial.ownerName}</td>
                  <td className="px-6 py-4">
                    <span className="pro-badge-neutral text-[10px] capitalize">{memorial.privacy}</span>
                  </td>
                  <td className="px-6 py-4 text-[11px] text-muted-foreground">
                    {memorial.memoriesCount} memories · {memorial.candleCount} candles
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {memorials.length === 0 && (
          <div className="px-6 py-12 text-center">
            <i className="fa-solid fa-paw text-accent text-lg mb-2 block" />
            <p className="text-sm text-muted-foreground">No memorials yet for this clinic.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ClinicMemorials;
