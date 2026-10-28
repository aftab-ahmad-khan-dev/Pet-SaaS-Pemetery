import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  mockClinics,
  mockMemorials,
  mockUsers,
  mockActivityAdmin,
} from "@/utils/mockData";
import { useState } from "react";
import toast from "react-hot-toast";
import ConfirmAlert from "@/components/shared/ConfirmAlert";

const quickActions = [
  {
    to: "/dashboard/admin/clinics",
    label: "Clinics",
    icon: "fa-solid fa-hospital",
    primary: true,
  },
  { to: "/dashboard/admin/moderation", label: "Moderation", icon: "fa-solid fa-shield" },
  { to: "/dashboard/admin/analytics", label: "Analytics", icon: "fa-solid fa-chart-bar" },
  { to: "/dashboard/admin/settings", label: "Settings", icon: "fa-solid fa-gear" },
];

const AdminDashboard = () => {
  const [removeTarget, setRemoveTarget] = useState(null);
  const [moderationList, setModerationList] = useState([
    {
      id: "mod1",
      type: "memory",
      content: "Flagged content under review...",
      memorial: "Buddy",
      user: "Anonymous",
      date: "2025-02-26",
    },
  ]);

  const stats = [
    {
      label: "Total Clinics",
      value: mockClinics.length,
      icon: "fa-solid fa-hospital",
      color: "primary",
    },
    {
      label: "Total Users",
      value: mockUsers.length,
      icon: "fa-solid fa-users",
      color: "accent",
    },
    {
      label: "Active Memorials",
      value: mockMemorials.length,
      icon: "fa-solid fa-paw",
      color: "primary",
    },
    {
      label: "Pending",
      value: mockClinics.filter((c) => c.status === "pending").length,
      icon: "fa-solid fa-hourglass-half",
      color: "accent",
    },
  ];

  return (
    <div>
      <div className='mb-6'>
        <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
          Platform Administration
        </h1>
        <p className='text-sm text-muted-foreground mt-1'>
          System overview and management
        </p>
      </div>

      {/* Action Insights */}
      <div className='pro-card p-5 mb-6 border-l-4 border-l-accent'>
        <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-3'>
          <i className='fa-solid fa-lightbulb text-accent text-xs' /> Action Insights
        </h3>
        <div className='flex flex-wrap gap-3'>
          {mockClinics.filter((c) => c.status === "pending").length > 0 && (
            <Link
              to='/dashboard/admin/clinics'
              className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
            >
              <i className='fa-solid fa-hospital' />{" "}
              {mockClinics.filter((c) => c.status === "pending").length} clinic(s) pending approval
            </Link>
          )}
          <Link
            to='/dashboard/admin/moderation'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-shield' /> Review moderation queue
          </Link>
          <Link
            to='/dashboard/admin/analytics'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-chart-bar' /> View platform analytics
          </Link>
          <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
            <i className='fa-solid fa-paw' /> {mockMemorials.length} active memorials
          </span>
          <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
            <i className='fa-solid fa-database' /> Last backup: 5h ago
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {quickActions.map((a) => (
          <Link
            key={a.to}
            to={a.to}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
              a.primary ? "pro-btn-primary" : "pro-btn-secondary"
            }`}
          >
            <i className={`${a.icon} text-xs`} />
            {a.label}
          </Link>
        ))}
      </div>

      {/* Stats */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8'>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className='stat-card'
          >
            <div
              className={`icon-box${s.color === "accent" ? "-warm" : ""} w-11 h-11 rounded-xl mb-4`}
            >
              <i className={`${s.icon} text-accent text-sm`} />
            </div>
            <div className='text-2xl sm:text-3xl font-bold text-foreground tracking-tight'>
              {s.value}
            </div>
            <div className='text-[11px] text-muted-foreground mt-1 font-medium'>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Clinics Table */}
      <div className='pro-card mb-6'>
        <div className='px-6 py-4 border-b border-border flex items-center justify-between'>
          <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
            <i className='fa-solid fa-hospital text-accent text-xs' /> Registered
            Clinics
          </h3>
          <span className='pro-badge-neutral text-[10px]'>
            {mockClinics.length} total
          </span>
        </div>
        <div className='overflow-x-auto'>
          <table className='w-full'>
            <thead>
              <tr className='border-b border-border bg-muted/30'>
                <th className='text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider'>
                  Clinic
                </th>
                <th className='text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden sm:table-cell'>
                  Plan
                </th>
                <th className='text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider hidden md:table-cell'>
                  Licenses
                </th>
                <th className='text-left px-6 py-3 text-[11px] font-semibold text-muted-foreground uppercase tracking-wider'>
                  Status
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-border'>
              {mockClinics.map((c) => (
                <tr key={c.id} className='hover:bg-muted/20 transition-colors'>
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='icon-box w-9 h-9 rounded-xl'>
                        <i className='fa-solid fa-hospital text-accent text-[10px]' />
                      </div>
                      <div>
                        <div className='text-sm font-semibold text-foreground'>
                          {c.name}
                        </div>
                        <div className='text-[11px] text-muted-foreground'>
                          {c.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4 hidden sm:table-cell'>
                    <span className='pro-badge-neutral capitalize text-[10px]'>
                      {c.plan}
                    </span>
                  </td>
                  <td className='px-6 py-4 hidden md:table-cell'>
                    <div className='flex items-center gap-2'>
                      <div className='flex-1 max-w-[80px] h-1.5 bg-muted rounded-full overflow-hidden'>
                        <div
                          className='h-full rounded-full'
                          style={{
                            width: `${(c.usedLicenses / c.activeLicenses) * 100}%`,
                            background: "var(--gradient-cta)",
                          }}
                        />
                      </div>
                      <span className='text-[11px] text-muted-foreground font-medium'>
                        {c.usedLicenses}/{c.activeLicenses}
                      </span>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <span
                      className={`pro-badge text-[10px] capitalize ${c.status === "approved" ? "pro-badge-success" : "pro-badge-warning"}`}
                    >
                      <i
                        className={`fa-solid ${c.status === "approved" ? "fa-check-circle" : "fa-clock"} text-[8px] mr-1`}
                      />
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Moderation */}
      <div className='pro-card mb-6'>
        <div className='px-6 py-4 border-b border-border'>
          <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
            <i className='fa-solid fa-shield text-accent text-xs' /> Content
            Moderation
          </h3>
        </div>
        {moderationList.length === 0 ? (
          <div className='px-6 py-10 text-center text-sm text-muted-foreground'>
            <i className='fa-solid fa-check-circle text-accent text-lg mb-2 block' />
            No flagged content
          </div>
        ) : (
          <div className='divide-y divide-border'>
            {moderationList.map((item) => (
              <div key={item.id} className='px-6 py-4 flex items-center gap-4'>
                <div className='icon-box-warm w-9 h-9 rounded-xl'>
                  <i className='fa-solid fa-flag text-accent text-[10px]' />
                </div>
                <div className='flex-1'>
                  <div className='text-sm text-foreground font-medium'>
                    {item.content}
                  </div>
                  <div className='text-[11px] text-muted-foreground mt-0.5'>
                    Memorial: {item.memorial} · {item.date}
                  </div>
                </div>
                <button
                  onClick={() => setRemoveTarget(item)}
                  className='pro-btn-ghost text-xs text-destructive hover:text-destructive'
                >
                  <i className='fa-solid fa-trash text-[10px]' /> Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <ConfirmAlert
        open={!!removeTarget}
        onOpenChange={(open) => !open && setRemoveTarget(null)}
        title="Remove Content"
        description={removeTarget ? `Remove "${removeTarget.content}" from ${removeTarget.memorial}'s memorial? This action cannot be undone.` : ""}
        confirmLabel="Remove"
        cancelLabel="Cancel"
        onConfirm={() => {
          if (removeTarget) {
            setModerationList((prev) => prev.filter((i) => i.id !== removeTarget.id));
            toast.success("Content removed");
          }
        }}
        variant="destructive"
      />

      {/* Activity + System cards */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <div className='lg:col-span-1'>
          <div className='pro-card h-full'>
            <div className='px-5 py-4 border-b border-border'>
              <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
                <i className='fa-solid fa-bolt text-accent text-xs' /> Activity
              </h3>
            </div>
            <div className='divide-y divide-border max-h-[320px] overflow-y-auto'>
              {mockActivityAdmin.map((a) => (
                <div
                  key={a.id}
                  className='px-5 py-3 flex items-start gap-3 hover:bg-muted/30 transition-colors'
                >
                  <div
                    className={`icon-box${a.color === "accent" ? "-warm" : ""} w-8 h-8 rounded-lg shrink-0 flex items-center justify-center`}
                  >
                    <i className={`${a.icon} text-accent text-[10px]`} />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <p className='text-[13px] text-foreground font-medium leading-snug'>
                      {a.text}
                    </p>
                    <p className='text-[11px] text-muted-foreground mt-0.5'>
                      {a.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className='lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-5'>
          <div className='pro-card p-6 hover:border-accent/30 transition-colors'>
            <div className='flex items-start gap-4'>
              <div className='icon-box w-11 h-11 rounded-xl'>
                <i className='fa-solid fa-database text-accent text-sm' />
              </div>
              <div>
                <h3 className='text-sm font-semibold text-foreground'>
                  Backup & Recovery
                </h3>
                <p className='text-[11px] text-muted-foreground mt-1 leading-relaxed'>
                  Daily automated backups. 24h restore target. All data encrypted at
                  rest.
                </p>
                <p className='text-[10px] text-accent font-medium mt-3'>
                  Last backup: 5h ago
                </p>
              </div>
            </div>
          </div>
          <Link
            to='/dashboard/admin/settings'
            className='pro-card p-6 hover:border-accent/30 transition-colors block group'
          >
            <div className='flex items-start gap-4'>
              <div className='icon-box-warm w-11 h-11 rounded-xl group-hover:scale-105 transition-transform'>
                <i className='fa-solid fa-gear text-accent text-sm' />
              </div>
              <div>
                <h3 className='text-sm font-semibold text-foreground'>
                  System Settings
                </h3>
                <p className='text-[11px] text-muted-foreground mt-1 leading-relaxed'>
                  Global configuration, feature flags, and deployment parameters.
                </p>
                <span className='text-[10px] text-accent font-medium mt-3 inline-flex items-center gap-1'>
                  Configure <i className='fa-solid fa-arrow-right text-[8px]' />
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
