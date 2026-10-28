import { motion } from "framer-motion";
import { mockClinics, mockMemorials, mockActivityClinic } from "@/utils/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { Link } from "react-router-dom";

const quickActions = [
  {
    to: "/dashboard/clinic/new-aftercare",
    label: "New Aftercare",
    icon: "fa-solid fa-paper-plane",
    primary: true,
  },
  { to: "/dashboard/clinic/memorials", label: "Memorials", icon: "fa-solid fa-paw" },
  { to: "/dashboard/clinic/qr-generator", label: "QR Generator", icon: "fa-solid fa-qrcode" },
  { to: "/dashboard/clinic/analytics", label: "Analytics", icon: "fa-solid fa-chart-line" },
];

const monthlyData = [
  { month: "Sep", activations: 12 },
  { month: "Oct", activations: 18 },
  { month: "Nov", activations: 15 },
  { month: "Dec", activations: 22 },
  { month: "Jan", activations: 19 },
  { month: "Feb", activations: 14 },
];

const engagementData = [
  { name: "Candles", value: 340 },
  { name: "Tears", value: 210 },
  { name: "Memories", value: 156 },
  { name: "Journal", value: 89 },
];

const COLORS = [
  "hsl(174, 42%, 40%)",
  "hsl(30, 55%, 52%)",
  "hsl(260, 30%, 65%)",
  "hsl(160, 30%, 50%)",
];

const ClinicDashboard = () => {
  const clinic = mockClinics[0];
  const recentMemorials = mockMemorials
    .filter((m) => m.clinicId === "c1")
    .slice(0, 5);

  const stats = [
    {
      label: "Active Memorials",
      value: clinic.totalMemorials,
      icon: "fa-solid fa-paw",
      trend: "+12%",
      trendUp: true,
    },
    {
      label: "Licenses Used",
      value: `${clinic.usedLicenses}/${clinic.activeLicenses}`,
      icon: "fa-solid fa-id-card",
      trend: "46%",
      trendUp: true,
    },
    {
      label: "This Month",
      value: "14",
      icon: "fa-solid fa-calendar-check",
      trend: "+3",
      trendUp: true,
    },
    {
      label: "Engagement Rate",
      value: "78%",
      icon: "fa-solid fa-chart-line",
      trend: "+5%",
      trendUp: true,
    },
  ];

  return (
    <div>
      {/* Header */}
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8'>
        <div>
          <div className='flex items-center gap-3 mb-1'>
            <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
              Dashboard
            </h1>
            <span className='pro-badge-success text-[10px]'>{clinic.plan}</span>
          </div>
          <p className='text-sm text-muted-foreground'>
            {clinic.name} · Performance overview
          </p>
        </div>
        <Link to='/dashboard/clinic/new-aftercare' className='pro-btn-primary text-sm'>
          <i className='fa-solid fa-plus text-xs' /> New Aftercare
        </Link>
      </div>

      {/* Action Insights */}
      <div className='pro-card p-5 mb-6 border-l-4 border-l-accent'>
        <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-3'>
          <i className='fa-solid fa-lightbulb text-accent text-xs' /> Action Insights
        </h3>
        <div className='flex flex-wrap gap-3'>
          <Link
            to='/dashboard/clinic/new-aftercare'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-paper-plane' /> Send 3+ aftercare invites this week
          </Link>
          <Link
            to='/dashboard/clinic/memorials'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-fire' /> {recentMemorials.length} memorials created recently
          </Link>
          <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
            <i className='fa-solid fa-id-card' /> Licenses {Math.round((clinic.usedLicenses / clinic.activeLicenses) * 100)}% used
          </span>
          <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
            <i className='fa-solid fa-chart-line' /> Engagement rate 78%
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='flex flex-wrap gap-2 mb-6'>
        {quickActions.map((a, i) => (
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
            <div className='flex items-center justify-between mb-4'>
              <div className='icon-box w-11 h-11 rounded-xl'>
                <i className={`${s.icon} text-accent text-sm`} />
              </div>
              <span className='text-[11px] font-semibold text-accent flex items-center gap-1'>
                <i className='fa-solid fa-arrow-up text-[8px]' /> {s.trend}
              </span>
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

      {/* Charts */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8'>
        <div className='pro-card'>
          <div className='px-6 py-4 border-b border-border'>
            <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
              <i className='fa-solid fa-chart-bar text-accent text-xs' /> Monthly
              Activations
            </h3>
          </div>
          <div className='p-6'>
            <ResponsiveContainer width='100%' height={220}>
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray='3 3' stroke='hsl(40, 10%, 90%)' />
                <XAxis
                  dataKey='month'
                  tick={{ fontSize: 11, fill: "hsl(210, 8%, 50%)" }}
                />
                <YAxis tick={{ fontSize: 11, fill: "hsl(210, 8%, 50%)" }} />
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(40, 10%, 90%)",
                    fontSize: "12px",
                    boxShadow: "0 4px 16px hsl(210, 18%, 15%, 0.06)",
                  }}
                />
                <Bar
                  dataKey='activations'
                  fill='hsl(174, 42%, 40%)'
                  radius={[6, 6, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className='pro-card'>
          <div className='px-6 py-4 border-b border-border'>
            <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
              <i className='fa-solid fa-chart-pie text-accent text-xs' /> Engagement
              Breakdown
            </h3>
          </div>
          <div className='p-6'>
            <ResponsiveContainer width='100%' height={220}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx='50%'
                  cy='50%'
                  innerRadius={55}
                  outerRadius={85}
                  paddingAngle={4}
                  dataKey='value'
                  strokeWidth={0}
                >
                  {engagementData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    borderRadius: "12px",
                    border: "1px solid hsl(40, 10%, 90%)",
                    fontSize: "12px",
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className='flex flex-wrap gap-4 justify-center mt-3'>
              {engagementData.map((d, i) => (
                <span
                  key={d.name}
                  className='flex items-center gap-2 text-[11px] text-muted-foreground font-medium'
                >
                  <span
                    className='w-2.5 h-2.5 rounded-full'
                    style={{ background: COLORS[i] }}
                  />{" "}
                  {d.name} ({d.value})
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Recent + Activity */}
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6'>
        <div className='lg:col-span-2'>
          <div className='pro-card'>
            <div className='px-6 py-4 border-b border-border flex items-center justify-between'>
              <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
                <i className='fa-solid fa-clock-rotate-left text-accent text-xs' />{" "}
                Recent Memorials
              </h3>
              <Link
                to='/dashboard/clinic/memorials'
                className='text-[11px] font-medium text-accent hover:text-accent/80 transition-colors'
              >
                View all <i className='fa-solid fa-arrow-right text-[9px] ml-0.5' />
              </Link>
            </div>
            <div className='divide-y divide-border'>
              {recentMemorials.map((m) => (
                <div
                  key={m.id}
                  className='flex items-center gap-4 px-6 py-4 hover:bg-muted/30 transition-colors'
                >
                  <div className='icon-box w-10 h-10 rounded-xl'>
                    <i
                      className={`fa-solid ${m.species === "Dog" ? "fa-dog" : "fa-cat"} text-accent text-xs`}
                    />
                  </div>
                  <div className='flex-1 min-w-0'>
                    <div className='text-sm font-semibold text-foreground'>
                      {m.petName}
                    </div>
                    <div className='text-[11px] text-muted-foreground'>
                      {m.ownerName}
                    </div>
                  </div>
                  <div className='text-[11px] text-muted-foreground hidden sm:flex items-center gap-1.5'>
                    <i className='fa-regular fa-calendar text-[9px]' /> {m.createdAt}
                  </div>
                  <span className='pro-badge-success text-[10px]'>{m.privacy}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Activity Feed */}
        <div className='lg:col-span-1'>
          <div className='pro-card h-full'>
            <div className='px-5 py-4 border-b border-border'>
              <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
                <i className='fa-solid fa-bolt text-accent text-xs' /> Activity
              </h3>
            </div>
            <div className='divide-y divide-border max-h-[340px] overflow-y-auto'>
              {mockActivityClinic.map((a, i) => (
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
      </div>
    </div>
  );
};

export default ClinicDashboard;
