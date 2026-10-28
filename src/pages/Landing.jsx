import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";
import PageSocialProof from "@/components/shared/PageSocialProof";
import PageConvincing from "@/components/shared/PageConvincing";
import PageDifferentiation from "@/components/shared/PageDifferentiation";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
});

const features = [
  {
    icon: "fa-solid fa-heart-pulse",
    title: "Aftercare Automation",
    desc: "Automated, compassionate follow-ups with editable templates. Clinics activate in under 60 seconds.",
    color: "primary",
  },
  {
    icon: "fa-solid fa-paw",
    title: "Digital Memorials",
    desc: "Beautiful, lasting tribute pages with photos, timeline memories, ritualspublic or private.",
    color: "accent",
  },
  {
    icon: "fa-solid fa-book-open",
    title: "Grief Journal",
    desc: "Private journaling with guided prompts, mood check-ins, and letter-to-pet features.",
    color: "primary",
  },
  {
    icon: "fa-solid fa-users",
    title: "Family Contributions",
    desc: "Invite relatives and friends to share memories, light candles, and leave heartfelt tributes.",
    color: "accent",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Clinic Analytics",
    desc: "Track engagement, activations, and aftercare ROI with detailed, exportable reports.",
    color: "primary",
  },
  {
    icon: "fa-solid fa-shield-halved",
    title: "Privacy & GDPR",
    desc: "GDPR-compliant with encrypted storage, full data export, and granular privacy controls.",
    color: "accent",
  },
];

const stats = [
  { value: "500+", label: "Clinics Onboarded", icon: "fa-solid fa-hospital" },
  { value: "12K+", label: "Memorials Created", icon: "fa-solid fa-paw" },
  { value: "98%", label: "Client Satisfaction", icon: "fa-solid fa-star" },
  { value: "24/7", label: "Backup & Recovery", icon: "fa-solid fa-database" },
];

const Landing = () => {
  return (
    <div className='min-h-screen flex flex-col bg-background'>
      <PublicHeader />

      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className='calm-container py-24 sm:py-32 lg:py-40 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-6'
            >
              <i className='fa-solid fa-circle text-[5px] animate-pulse-gentle' />{" "}
              Trusted by 500+ veterinary clinics
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
            >
              Compassionate aftercare,{" "}
              <span className='text-white/90'>beautifully automated</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'
            >
              The only SaaS built for pet loss. Pemetery empowers veterinary clinics
              (B2B) to automate compassionate aftercare in 60 secondswhile giving pet
              owners (B2C) a gentle space to remember, heal, and honor their
              companions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className='mt-10 flex flex-col sm:flex-row gap-4 justify-center'
            >
              <Link
                to='/login'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] bg-white text-accent shadow-lg hover:bg-white/90 transition-all'
              >
                Start Free Trial <i className='fa-solid fa-arrow-right text-xs' />
              </Link>
              <Link
                to='/for-clinics'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border-2 border-white/40 text-white hover:bg-white/10 transition-all'
              >
                <i className='fa-solid fa-play text-xs' /> See How It Works
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='relative -mt-6 z-20'>
        <div className='calm-container'>
          <div className='glass-card p-2'>
            <div className='grid grid-cols-2 lg:grid-cols-4'>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center py-6 px-4 ${i > 0 ? "border-l border-border/50" : ""}`}
                >
                  <div className='icon-box w-10 h-10 rounded-xl mx-auto mb-3 flex items-center justify-center'>
                    <i className={`${s.icon} text-accent text-base`} />
                  </div>
                  <div className='text-2xl sm:text-3xl font-bold text-foreground'>
                    {s.value}
                  </div>
                  <div className='text-[11px] text-muted-foreground mt-1 font-medium uppercase tracking-wider'>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className='calm-container py-24 sm:py-32'>
        <div className='text-center mb-16'>
          <motion.div {...fadeUp()} className='inline-block'>
            <div className='section-divider mb-6' />
          </motion.div>
          <motion.h2
            {...fadeUp(0.1)}
            className='font-display text-3xl sm:text-4xl font-bold text-foreground'
          >
            Everything clinics and families need
          </motion.h2>
          <motion.p
            {...fadeUp(0.15)}
            className='mt-4 text-muted-foreground max-w-2xl mx-auto text-[15px] leading-relaxed'
          >
            From aftercare automation (B2B) to grief support (B2C)one platform.
            Automated condolence emails, digital memorials, grief journals, family
            contributions, and clinic analytics. Purpose-built for emotional safety
            and zero admin burden.
          </motion.p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className='stat-card group'
            >
              <div
                className={`icon-box${f.color === "accent" ? "-warm" : ""} mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <i
                  className={`${f.icon} text-${f.color === "accent" ? "accent" : "primary"}`}
                />
              </div>
              <h3 className='font-display text-lg font-semibold text-foreground mb-2'>
                {f.title}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* See it in action */}
      <section className='calm-container py-24 sm:py-32'>
        <div className='w-full content-wide mx-auto'>
          <div className='text-center mb-14'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              See what families create
            </h2>
            <p className='mt-3 text-muted-foreground text-[15px] max-w-xl mx-auto leading-relaxed'>
              Beautiful memorial pages with photos, stories, and tributesprivate or
              shared. One link, one lasting tribute.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='rounded-2xl overflow-hidden shadow-2xl ring-1 ring-border/50'
          >
            <img
              src='https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=1200&q=85'
              alt='Pet memorial tribute space'
              className='w-full h-[360px] sm:h-[420px] object-cover'
            />
            <div className='bg-card dark:bg-card/90 px-6 py-5 sm:px-8 sm:py-6 border-t border-border'>
              <p className='text-sm text-muted-foreground italic'>
                Create a lasting tributephotos, candles, and loving memories in one
                gentle space.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How it works */}
      <section className='bg-card border-y border-border relative overflow-hidden'>
        <div className='absolute inset-0 mesh-bg opacity-50 pointer-events-none' />
        <div className='calm-container py-24 relative'>
          <div className='text-center mb-16'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              How Pemetery Works
            </h2>
            <p className='mt-4 text-muted-foreground text-[15px] max-w-xl mx-auto'>
              Three simple steps for clinics. One gentle experience for owners. No
              integrations, no trainingjust compassion, automated.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full content-wide mx-auto'>
            {[
              {
                step: "01",
                icon: "fa-solid fa-hospital",
                title: "Clinic Activates",
                desc: "Staff enters owner email and selects a compassionate template. Takes under 60 seconds.",
              },
              {
                step: "02",
                icon: "fa-solid fa-envelope-open-text",
                title: "Owner Receives Link",
                desc: "A personalized, branded email with memorial link and QR code is sent automatically.",
              },
              {
                step: "03",
                icon: "fa-solid fa-heart",
                title: "Remember & Heal",
                desc: "Owner creates a memorial, journals, receives grief support, and invites family.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className='text-center relative'
              >
                <div className='text-[11px] font-bold text-accent mb-4 tracking-[0.2em] uppercase'>
                  Step {item.step}
                </div>
                <div
                  className='w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 relative'
                  style={{ background: "var(--gradient-cta)" }}
                >
                  <i className={`${item.icon} text-xl text-white`} />
                </div>
                <h3 className='font-display text-xl font-semibold text-foreground mb-3'>
                  {item.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {item.desc}
                </p>
                {i < 2 && (
                  <div className='hidden md:block absolute top-[4.5rem] -right-8 text-border'>
                    <i className='fa-solid fa-chevron-right text-lg' />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Security */}
      <section className='calm-container py-20 sm:py-24'>
        <div className='w-full content-wide mx-auto'>
          <div className='text-center mb-14'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
              Trusted & Secure
            </h2>
            <p className='mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed'>
              GDPR-compliant, encrypted storage, and full data ownership. Your
              clients&apos; memories stay private and protectedforever.
            </p>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
            {[
              {
                icon: "fa-solid fa-shield-halved",
                label: "End-to-end encrypted",
                desc: "All data encrypted at rest and in transit",
              },
              {
                icon: "fa-solid fa-database",
                label: "Daily backups",
                desc: "Automated backups with 24h restore SLA",
              },
              {
                icon: "fa-solid fa-file-export",
                label: "Data portability",
                desc: "Full export and deletion on request",
              },
              {
                icon: "fa-solid fa-certificate",
                label: "SOC 2 ready",
                desc: "Enterprise-grade security practices",
              },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className='pro-card p-5 text-center'
              >
                <div className='icon-box w-12 h-12 rounded-xl mx-auto mb-4'>
                  <i className={`${item.icon} text-accent text-sm`} />
                </div>
                <h3 className='font-display text-sm font-semibold text-foreground mb-1'>
                  {item.label}
                </h3>
                <p className='text-[11px] text-muted-foreground leading-relaxed'>
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-20 sm:py-24'>
          <div className='w-full content-wide mx-auto'>
            <div className='text-center mb-14'>
              <div className='section-divider mb-6' />
              <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
                Built for every step of the journey
              </h2>
              <p className='mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed'>
                From the first condolence to lasting remembrancePemetery supports
                clinics and families at every stage.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  icon: "fa-solid fa-envelope",
                  title: "Immediate aftercare",
                  desc: "Send compassionate condolence and memorial invites within 60 seconds of a pet passing.",
                },
                {
                  icon: "fa-solid fa-calendar-days",
                  title: "Follow-up & anniversaries",
                  desc: "Automated check-ins at 1 week, 1 month, and yearly remembrance dates.",
                },
                {
                  icon: "fa-solid fa-heart",
                  title: "Long-term healing",
                  desc: "Grief journals, mood tracking, and resources that families can return to anytime.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className='pro-card p-6 dark:bg-card dark:border-border'
                >
                  <div className='icon-box w-11 h-11 rounded-xl mb-4'>
                    <i className={`${item.icon} text-accent text-sm`} />
                  </div>
                  <h3 className='font-display text-base font-semibold text-foreground mb-2'>
                    {item.title}
                  </h3>
                  <p className='text-sm text-muted-foreground leading-relaxed'>
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className='calm-container py-24'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='w-full content-wide mx-auto text-center'
        >
          <div className='glass-card p-10 sm:p-14 relative'>
            <i className='fa-solid fa-quote-left text-4xl text-accent/10 absolute top-8 left-8' />
            <p className='font-display text-xl sm:text-2xl text-foreground leading-relaxed relative z-10'>
              "Pemetery transformed how we support grieving clients. The aftercare
              process is now seamless, compassionate, and truly meaningful for every
              family we serve."
            </p>
            <div className='mt-8 flex items-center justify-center gap-4'>
              <div
                className='w-12 h-12 rounded-full flex items-center justify-center'
                style={{ background: "var(--gradient-cta)" }}
              >
                <i className='fa-solid fa-user-doctor text-white text-sm' />
              </div>
              <div className='text-left'>
                <div className='text-sm font-semibold text-foreground'>
                  Dr. Sarah Mitchell
                </div>
                <div className='text-xs text-muted-foreground'>
                  Paws & Hearts Veterinary, Portland
                </div>
                <div className='flex items-center gap-0.5 mt-1 text-accent'>
                  {[1, 2, 3, 4, 5].map((i) => (
                    <i key={i} className='fa-solid fa-star text-[9px]' />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      <PageDifferentiation />
      <PageSocialProof />
      <PageConvincing />

      {/* CTA */}
      <section className='relative overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className='calm-container py-20 sm:py-24 text-center relative z-10'>
          <div className='max-w-lg mx-auto'>
            <h2 className='font-display text-3xl sm:text-4xl font-bold text-white mb-4'>
              Ready to transform your aftercare?
            </h2>
            <p className='text-white/70 mb-10 text-[15px]'>
              Start free. No credit card required. Set up in under 5 minutes.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 justify-center'>
              <Link
                to='/login'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm bg-white text-accent hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5'
              >
                <i className='fa-solid fa-rocket text-sm text-accent' /> Start Free
                Trial
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-sm border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-300'
              >
                <i className='fa-solid fa-calendar text-sm' /> Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Landing;
