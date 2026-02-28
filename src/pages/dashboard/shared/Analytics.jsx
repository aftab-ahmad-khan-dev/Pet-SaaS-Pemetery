import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
} from "recharts";
import toast from "react-hot-toast";

const pageViews = [
  { date: "Mon", views: 320 },
  { date: "Tue", views: 450 },
  { date: "Wed", views: 380 },
  { date: "Thu", views: 510 },
  { date: "Fri", views: 420 },
  { date: "Sat", views: 280 },
  { date: "Sun", views: 350 },
];

const featureUsage = [
  { feature: "Memorials", count: 156 },
  { feature: "Candles", count: 340 },
  { feature: "Tears", count: 210 },
  { feature: "Journal", count: 89 },
  { feature: "Mood", count: 67 },
  { feature: "Invites", count: 45 },
];

const Analytics = () => {
  const topFeature = featureUsage[0];
  const totalViews = pageViews.reduce((s, d) => s + d.views, 0);
  const avgViews = Math.round(totalViews / pageViews.length);

  return (
  <div>
    <div className='flex items-center justify-between mb-8'>
      <div>
        <h1 className='font-display text-2xl font-bold text-foreground'>
          Analytics
        </h1>
        <p className='text-sm text-muted-foreground mt-1'>
          Usage metrics and engagement data.
        </p>
      </div>
      <button
        onClick={() => {
          toast.success("CSV export started");
          console.log("Exporting CSV...");
        }}
        className='pro-btn-secondary text-xs'
      >
        <i className='fa-solid fa-download text-[10px]' /> Export CSV
      </button>
    </div>

    {/* Action Insights */}
    <div className='pro-card p-5 mb-6 border-l-4 border-l-accent'>
      <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-3'>
        <i className='fa-solid fa-lightbulb text-accent text-xs' /> Action Insights
      </h3>
      <div className='flex flex-wrap gap-3'>
        <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium'>
          <i className='fa-solid fa-chart-line' /> Page views up 12% vs last week
        </span>
        <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
          <i className='fa-solid fa-star' /> {topFeature?.feature} is top feature ({topFeature?.count} uses)
        </span>
        <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
          <i className='fa-solid fa-eye' /> Avg {avgViews} views/day
        </span>
        <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
          <i className='fa-solid fa-arrow-trend-up' /> 72% retention rate
        </span>
      </div>
    </div>

    {/* Summary */}
    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8'>
      {[
        { label: "Page Views", value: "2,710", icon: "fa-solid fa-eye" },
        { label: "Avg. Session", value: "4m 32s", icon: "fa-solid fa-clock" },
        { label: "Active Users", value: "128", icon: "fa-solid fa-users" },
        { label: "Retention", value: "72%", icon: "fa-solid fa-arrow-trend-up" },
      ].map((s) => (
        <div key={s.label} className='stat-card'>
          <div className='w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center mb-3'>
            <i className={`${s.icon} text-accent text-xs`} />
          </div>
          <div className='text-xl font-bold text-foreground'>{s.value}</div>
          <div className='text-xs text-muted-foreground mt-0.5'>{s.label}</div>
        </div>
      ))}
    </div>

    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
      <div className='pro-card p-5'>
        <h3 className='text-sm font-semibold text-foreground mb-4'>
          <i className='fa-solid fa-chart-line text-accent text-xs mr-1.5' /> Page
          Views (7 days)
        </h3>
        <ResponsiveContainer width='100%' height={220}>
          <LineChart data={pageViews}>
            <CartesianGrid strokeDasharray='3 3' stroke='hsl(220, 13%, 90%)' />
            <XAxis
              dataKey='date'
              tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }}
            />
            <YAxis tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }} />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid hsl(220, 13%, 90%)",
                fontSize: "12px",
              }}
            />
            <Line
              type='monotone'
              dataKey='views'
              stroke='hsl(175, 50%, 32%)'
              strokeWidth={2}
              dot={{ r: 3 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className='pro-card p-5'>
        <h3 className='text-sm font-semibold text-foreground mb-4'>
          <i className='fa-solid fa-chart-bar text-accent text-xs mr-1.5' /> Feature
          Usage
        </h3>
        <ResponsiveContainer width='100%' height={220}>
          <BarChart data={featureUsage} layout='vertical'>
            <CartesianGrid strokeDasharray='3 3' stroke='hsl(220, 13%, 90%)' />
            <XAxis
              type='number'
              tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }}
            />
            <YAxis
              dataKey='feature'
              type='category'
              tick={{ fontSize: 11, fill: "hsl(220, 10%, 46%)" }}
              width={70}
            />
            <Tooltip
              contentStyle={{
                borderRadius: "8px",
                border: "1px solid hsl(220, 13%, 90%)",
                fontSize: "12px",
              }}
            />
            <Bar dataKey='count' fill='hsl(38, 70%, 52%)' radius={[0, 4, 4, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  );
};

export default Analytics;
