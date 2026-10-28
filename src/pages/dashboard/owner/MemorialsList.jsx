import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { mockMemorials, mockActivityOwner } from "@/utils/mockData";
import MemorialCard from "@/components/memorial/MemorialCard";

const quickActions = [
  {
    to: "create-memorial",
    label: "New Memorial",
    icon: "fa-solid fa-plus-circle",
    primary: true,
  },
  { to: "journal", label: "Journal", icon: "fa-solid fa-book" },
  { to: "mood", label: "Mood Check-in", icon: "fa-solid fa-heart-pulse" },
  { to: "resources", label: "Resources", icon: "fa-solid fa-leaf" },
];

const MemorialsList = () => {
  const memorials = mockMemorials.filter((m) => m.ownerId === "u1");
  const [favourites, setFavourites] = useState({});
  const totalCandles = memorials.reduce((s, m) => s + (m.candleCount || 0), 0);
  const totalMemories = memorials.reduce((s, m) => s + (m.memoriesCount || 0), 0);

  return (
    <div>
      <div className='flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6'>
        <div>
          <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
            My Memorials
          </h1>
          <p className='text-sm text-muted-foreground mt-1'>
            Tribute pages for your beloved companions.
          </p>
        </div>
        <Link
          to='create-memorial'
          className='pro-btn-primary hidden sm:inline-flex text-sm'
        >
          <i className='fa-solid fa-plus text-xs' /> New Memorial
        </Link>
      </div>

      {/* Action Insights */}
      <div className='pro-card p-5 mb-6 border-l-4 border-l-accent'>
        <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-3'>
          <i className='fa-solid fa-lightbulb text-accent text-xs' /> Action Insights
        </h3>
        <div className='flex flex-wrap gap-3'>
          {memorials.length > 0 && (
            <Link
              to={`/dashboard/owner/memorial/${memorials[0]?.slug || memorials[0]?.id}?add=true`}
              className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
            >
              <i className='fa-solid fa-pen' /> Add a memory to {memorials[0]?.petName}&apos;s memorial
            </Link>
          )}
          <Link
            to='mood'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-heart-pulse' /> Complete your mood check-in
          </Link>
          <Link
            to='journal'
            className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-accent/10 text-accent text-xs font-medium hover:bg-accent/20 transition-colors'
          >
            <i className='fa-solid fa-book' /> Write a journal entry
          </Link>
          <span className='inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-muted text-muted-foreground text-xs'>
            <i className='fa-solid fa-fire' /> {totalCandles} candles lit across your memorials
          </span>
        </div>
      </div>

      {/* Quick Actions */}
      <div className='flex flex-wrap gap-2 mb-8'>
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
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8'>
        {[
          {
            label: "Memorials",
            value: memorials.length,
            icon: "fa-solid fa-paw",
            color: "primary",
          },
          {
            label: "Candles Lit",
            value: totalCandles,
            icon: "fa-solid fa-fire",
            color: "accent",
          },
          {
            label: "Memories",
            value: totalMemories,
            icon: "fa-regular fa-comment",
            color: "primary",
          },
          {
            label: "Invites Pending",
            value: 0,
            icon: "fa-solid fa-user-plus",
            color: "accent",
          },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06 }}
            className='stat-card'
          >
            <div
              className={`icon-box${s.color === "accent" ? "-warm" : ""} w-10 h-10 rounded-xl mb-3`}
            >
              <i className={`${s.icon} text-accent text-xs`} />
            </div>
            <div className='text-xl font-bold text-foreground tracking-tight'>
              {s.value}
            </div>
            <div className='text-[11px] text-muted-foreground font-medium'>
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start'>
        <div className='min-w-0'>
          {memorials.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='pro-card p-12 text-center'
            >
              <div className='icon-box w-16 h-16 rounded-2xl mx-auto mb-5'>
                <i className='fa-solid fa-paw text-2xl text-accent' />
              </div>
              <h2 className='font-display text-xl font-semibold text-foreground mb-2'>
                No memorials yet
              </h2>
              <p className='text-sm text-muted-foreground mb-8 max-w-sm mx-auto'>
                When you're ready, create a beautiful tribute for your companion.
              </p>
              <Link to='create-memorial' className='pro-btn-primary'>
                Create Your First Memorial{" "}
                <i className='fa-solid fa-arrow-right text-xs' />
              </Link>
            </motion.div>
          ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5 items-start content-start'>
              {memorials.map((m, i) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                  className='relative'
                >
                  <MemorialCard
                    memorial={m}
                    linkTo={`/dashboard/owner/memorial/${m.slug || m.id}`}
                    showActions
                    isFavourite={favourites[m.id]}
                    onFavourite={() =>
                      setFavourites((prev) => ({ ...prev, [m.id]: !prev[m.id] }))
                    }
                    onContact={() => {
                      const email = m.ownerEmail || 'support@pemetery.com';
                      window.location.href = `mailto:${email}?subject=Regarding ${m.petName}'s memorial`;
                    }}
                  />
                </motion.div>
              ))}
            </div>
          )}
        </div>

        {/* Right: Activity + Tips */}
        <div className='lg:sticky lg:top-24 space-y-6 min-w-0'>
          <div className='pro-card'>
            <div className='px-5 py-4 border-b border-border'>
              <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
                <i className='fa-solid fa-clock-rotate-left text-accent text-xs' /> Activity
              </h3>
            </div>
            <div className='divide-y divide-border max-h-[280px] overflow-y-auto'>
              {mockActivityOwner.map((a) => (
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
                    <p className='text-[13px] text-foreground font-medium leading-snug'>{a.text}</p>
                    <p className='text-[11px] text-muted-foreground mt-0.5'>{a.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className='pro-card p-6'>
            <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-4'>
              <i className='fa-solid fa-lightbulb text-accent text-xs' /> Tips & Suggestions
            </h3>
            <div className='space-y-4'>
              <Link to={memorials[0] ? `/dashboard/owner/memorial/${memorials[0].slug || memorials[0].id}` : '/dashboard/owner/create-memorial'} className='flex items-center gap-3 hover:opacity-90 transition-opacity group'>
                <div className='icon-box w-9 h-9 rounded-xl shrink-0 group-hover:scale-105 transition-transform'>
                  <i className='fa-solid fa-pen text-accent text-xs' />
                </div>
                <p className='text-[13px] text-muted-foreground leading-relaxed'>
                  Add memories and photos to keep your companion&apos;s story alive.
                </p>
              </Link>
              <Link to={memorials[0] ? `/dashboard/owner/memorial/${memorials[0].slug || memorials[0].id}` : '/dashboard/owner/support'} className='flex items-center gap-3 hover:opacity-90 transition-opacity group'>
                <div className='icon-box w-9 h-9 rounded-xl shrink-0 group-hover:scale-105 transition-transform'>
                  <i className='fa-solid fa-user-plus text-accent text-xs' />
                </div>
                <p className='text-[13px] text-muted-foreground leading-relaxed'>
                  Invite family and friends to contribute their own tributes.
                </p>
              </Link>
              <div className='flex items-center gap-3'>
                <div className='icon-box w-9 h-9 rounded-xl shrink-0'>
                  <i className='fa-solid fa-heart text-accent text-xs' />
                </div>
                <p className='text-[13px] text-muted-foreground leading-relaxed'>
                  Visit your <Link to='/dashboard/owner/journal' className='text-accent hover:underline font-medium'>journal</Link> or <Link to='/dashboard/owner/mood' className='text-accent hover:underline font-medium'>mood check-in</Link> when grief feels heavy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Link
        to='create-memorial'
        className='sm:hidden fixed bottom-6 right-6 w-14 h-14 rounded-2xl flex items-center justify-center text-lg z-30 shadow-lg'
        style={{
          background: "var(--gradient-cta)",
          color: "white",
          boxShadow: "0 6px 20px hsl(174 42% 40% / 0.35)",
        }}
        aria-label='Create memorial'
      >
        <i className='fa-solid fa-plus' />
      </Link>
    </div>
  );
};

export default MemorialsList;
