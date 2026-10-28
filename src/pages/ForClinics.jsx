import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";
import PageSocialProof from "@/components/shared/PageSocialProof";
import PageConvincing from "@/components/shared/PageConvincing";
import PageDifferentiation from "@/components/shared/PageDifferentiation";
import { mockLicensePlans } from "@/utils/mockData";

const stats = [
  { value: "60s", label: "Average activation time", icon: "fa-solid fa-bolt" },
  { value: "500+", label: "Clinics onboarded", icon: "fa-solid fa-hospital" },
  { value: "98%", label: "Client satisfaction", icon: "fa-solid fa-heart-pulse" },
  { value: "24/7", label: "Support & backup", icon: "fa-solid fa-database" },
];

const benefits = [
  {
    icon: "fa-solid fa-bolt",
    title: "Under 60 seconds",
    desc: "Activate aftercare from your dashboardno training required.",
    color: "primary",
  },
  {
    icon: "fa-solid fa-envelope-open-text",
    title: "5+ Templates",
    desc: "Compassionate, editable email templates for every stage of grief.",
    color: "primary",
  },
  {
    icon: "fa-solid fa-qrcode",
    title: "QR & Links",
    desc: "Generate branded memorial access codes for physical cards and emails.",
    color: "accent",
  },
  {
    icon: "fa-solid fa-chart-pie",
    title: "Analytics",
    desc: "Track engagement, activations, and aftercare ROI in one dashboard.",
    color: "accent",
  },
];

const workflow = [
  {
    step: "01",
    title: "Enter owner email",
    desc: "Quick lookup or manual entrytakes seconds.",
    icon: "fa-solid fa-at",
  },
  {
    step: "02",
    title: "Select template",
    desc: "Choose from gentle condolence, memorial invite, or follow-up.",
    icon: "fa-solid fa-file-lines",
  },
  {
    step: "03",
    title: "Send & done",
    desc: "Owner receives a personalized link. You focus on care.",
    icon: "fa-solid fa-paper-plane",
  },
];

const testimonial = {
  quote:
    "Pemetery transformed how we support grieving clients. Setup took 10 minutes. Our families love the memorials.",
  name: "Dr. Sarah Mitchell",
  role: "Paws & Hearts Veterinary, Portland",
};

const ForClinics = () => (
  <div className='min-h-screen flex flex-col bg-background dark:bg-background'>
    <PublicHeader />
    <main className='flex-1'>
      {/* Hero */}
      <section className='relative overflow-hidden'>
        <div
          className='absolute inset-0'
          style={{ background: "var(--gradient-hero)" }}
        />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className='calm-container py-24 sm:py-32 relative z-10'>
          <div className='max-w-3xl mx-auto text-center'>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-6'
            >
              <i className='fa-solid fa-hospital text-[10px]' /> B2B Platform for
              Veterinary Clinics
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
            >
              Automate aftercare.{" "}
              <span className='text-white/90'>Strengthen bonds.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'
            >
              Your team is stretched thin. Manual condolence emails and follow-ups
              add admin burden. Pemetery automates compassionate aftercare in under
              60 secondsQR codes, branded emails, grief supportso you focus on care,
              not paperwork.
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
                to='/contact'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border-2 border-white/40 text-white hover:bg-white/10 transition-all'
              >
                <i className='fa-solid fa-calendar text-xs' /> Request Demo
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className='relative -mt-12 z-20'>
        <div className='calm-container'>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className='glass-card dark:bg-card/90 dark:border-border p-2'
          >
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4'>
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`text-center py-6 px-4 ${i > 0 ? "border-l border-border/50 dark:border-border" : ""}`}
                >
                  <div
                    className='w-12 h-12 rounded-xl mx-auto mb-3 flex items-center justify-center'
                    style={{ background: "var(--gradient-cta)" }}
                  >
                    <i className={`${s.icon} text-white text-base`} />
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
          </motion.div>
        </div>
      </section>

      {/* Problem / Solution */}
      <section className='calm-container py-20 sm:py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full content-wide mx-auto items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='pro-card p-8 dark:bg-card dark:border-border border-l-4 border-l-destructive/50'
          >
            <h3 className='font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2'>
              <i className='fa-solid fa-triangle-exclamation text-destructive/80 text-lg' />{" "}
              The Problem
            </h3>
            <p className='text-muted-foreground text-[15px] leading-relaxed mb-4'>
              Manual condolence emails get lost in the shuffle. Generic templates
              feel impersonal. Staff spend hours on follow-ups. Pet owners receive
              inconsistent supportand your clinic misses a chance to strengthen
              lasting client relationships.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='pro-card p-8 dark:bg-card dark:border-border border-l-4 border-l-primary'
          >
            <h3 className='font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2'>
              <i className='fa-solid fa-lightbulb text-accent text-lg' /> The
              Pemetery Difference
            </h3>
            <p className='text-muted-foreground text-[15px] leading-relaxed'>
              Automate compassionate aftercare in 60 seconds. Personalize templates,
              send branded memorial links, track engagementand give every grieving
              family a lasting tribute. Less admin, more impact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-24'>
          <div className='text-center mb-16'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              Built for veterinary professionals
            </h2>
            <p className='mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed'>
              Everything you need to deliver compassionate aftercarewithout adding
              admin burden. No lengthy onboarding, no integrations, no training.
              Activate in 60 seconds and send your first memorial link today.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
            {benefits.map((b, i) => (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='stat-card group'
              >
                <div
                  className={`icon-box${b.color === "accent" ? "-warm" : ""} w-14 h-14 rounded-2xl shrink-0 mb-5 group-hover:scale-110 transition-transform`}
                >
                  <i className={`${b.icon} text-lg text-accent`} />
                </div>
                <h3 className='font-display text-lg font-semibold text-foreground mb-2'>
                  {b.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview with Image */}
      <section className='calm-container py-24'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full content-wide mx-auto items-center'>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='order-2 lg:order-1'
          >
            <div className='section-divider mb-6' />
            <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
              Your dashboard, simplified
            </h2>
            <p className='mt-4 text-muted-foreground text-[15px] leading-relaxed'>
              Activate aftercare in seconds. See engagement, manage memorial links,
              and track client satisfactionall in one place. No complex setup, no
              integrations.
            </p>
            <ul className='mt-6 space-y-3'>
              {[
                "One-click memorial activation",
                "Engagement & analytics",
                "Branded emails & QR codes",
                "Export reports anytime",
              ].map((f, i) => (
                <li
                  key={i}
                  className='flex items-center gap-3 text-sm text-foreground'
                >
                  <div className='w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center shrink-0'>
                    <i className='fa-solid fa-check text-accent text-[9px]' />
                  </div>
                  {f}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/50'
          >
            <img
              src='https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&q=80'
              alt='Veterinarian with pet'
              className='w-full h-[320px] object-cover'
            />
          </motion.div>
        </div>
      </section>

      {/* Workflow */}
      <section className='calm-container py-24'>
        <div className='text-center mb-16'>
          <div className='section-divider mb-6' />
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
            Three steps. Done.
          </h2>
          <p className='mt-3 text-muted-foreground text-[15px]'>
            Activate aftercare in under a minuteevery time.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-10 w-full content-wide mx-auto'>
          {workflow.map((w, i) => (
            <motion.div
              key={w.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className='text-center relative'
            >
              <div className='text-[11px] font-bold text-accent/50 mb-4 tracking-[0.2em] uppercase'>
                Step {w.step}
              </div>
              <div
                className='w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5'
                style={{ background: "var(--gradient-cta)" }}
              >
                <i className={`${w.icon} text-xl text-white`} />
              </div>
              <h3 className='font-display text-xl font-semibold text-foreground mb-3'>
                {w.title}
              </h3>
              <p className='text-sm text-muted-foreground leading-relaxed'>
                {w.desc}
              </p>
              {i < 2 && (
                <div className='hidden md:block absolute top-[4.5rem] -right-8 text-border'>
                  <i className='fa-solid fa-chevron-right text-lg' />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Support & Resources */}
      <section className='calm-container py-20 sm:py-24'>
        <div className='w-full content-wide mx-auto'>
          <div className='text-center mb-14'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
              Support when you need it
            </h2>
            <p className='mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed'>
              Dedicated onboarding, help docs, and priority support. Your team gets
              up and running in minuteswith backup whenever you need it.
            </p>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {[
              {
                icon: "fa-solid fa-book",
                title: "Help docs & templates",
                desc: "Step-by-step guides, video walkthroughs, and editable condolence templates.",
              },
              {
                icon: "fa-solid fa-headset",
                title: "Priority support",
                desc: "Email and chat support for Professional and Enterprise plans.",
              },
              {
                icon: "fa-solid fa-rocket",
                title: "Fast onboarding",
                desc: "No lengthy setup. Activate your first memorial in under 5 minutes.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='pro-card p-6 dark:bg-card dark:border-border text-center'
              >
                <div className='icon-box w-12 h-12 rounded-xl mx-auto mb-4'>
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
      </section>

      {/* Testimonial */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-24'>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className='max-w-3xl mx-auto text-center'
          >
            <div className='glass-card p-10 sm:p-14 relative dark:bg-card/80'>
              <i className='fa-solid fa-quote-left text-4xl text-accent/20 absolute top-8 left-8' />
              <p className='font-display text-xl sm:text-2xl text-foreground leading-relaxed relative z-10'>
                "{testimonial.quote}"
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
                    {testimonial.name}
                  </div>
                  <div className='text-xs text-muted-foreground'>
                    {testimonial.role}
                  </div>
                  <div className='flex items-center gap-0.5 mt-1 text-accent'>
                    {[1, 2, 3, 4, 5].map((j) => (
                      <i key={j} className='fa-solid fa-star text-[9px]' />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className='calm-container py-24'>
        <div className='text-center mb-14'>
          <div className='section-divider mb-6' />
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
            License Packs
          </h2>
          <p className='mt-3 text-muted-foreground text-[15px]'>
            1 License = 1 Active Memorial Slot. Scale as you grow.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 w-full content-wide mx-auto'>
          {mockLicensePlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`pro-card p-7 relative dark:bg-card dark:border-border ${plan.id === "professional" ? "ring-2 ring-primary shadow-xl scale-[1.02] dark:shadow-primary/10" : ""}`}
            >
              {plan.id === "professional" && (
                <div className='absolute -top-3 left-1/2 -translate-x-1/2 mt-5'>
                  <span className='pro-badge-success text-[10px] px-4 py-1.5'>
                    <i className='fa-solid fa-star text-[7px] mr-1' /> Most Popular
                  </span>
                </div>
              )}
              <h3 className='font-display text-xl font-semibold text-foreground'>
                {plan.name}
              </h3>
              <div className='mt-5 mb-2'>
                <span className='text-4xl font-bold text-foreground tracking-tight'>
                  ${plan.price}
                </span>
                <span className='text-sm text-muted-foreground'>/month</span>
              </div>
              <p className='text-[12px] text-muted-foreground mb-7'>
                {typeof plan.memorials === "number"
                  ? `Up to ${plan.memorials} memorial slots`
                  : "Unlimited memorial slots"}
              </p>
              <ul className='space-y-3 mb-7'>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className='text-sm text-muted-foreground flex items-start gap-2.5'
                  >
                    <i className='fa-solid fa-check text-accent text-[10px] mt-1' />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to='/login'
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                  plan.id === "professional"
                    ? "pro-btn-primary w-full"
                    : "pro-btn-secondary w-full"
                }`}
              >
                Get Started
              </Link>
            </motion.div>
          ))}
        </div>
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
        <div className='calm-container py-20 sm:py-24 text-center relative z-10'>
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-white mb-4'>
            Ready to transform your aftercare?
          </h2>
          <p className='text-white/80 mb-10 text-[15px] max-w-lg mx-auto'>
            Start free. No credit card. Set up in under 5 minutes.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Link
              to='/login'
              className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-white text-accent hover:bg-white/90 transition-all shadow-lg'
            >
              <i className='fa-solid fa-rocket text-sm' /> Start Free Trial
            </Link>
            <Link
              to='/contact'
              className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all'
            >
              <i className='fa-solid fa-calendar text-sm' /> Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ForClinics;
