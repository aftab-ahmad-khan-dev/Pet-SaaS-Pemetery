import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const differentiators = [
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "Built for grief, not just forms",
    desc: "Unlike generic CRM or email tools, Pemetery is purpose-built for pet loss. Every template, prompt, and feature was designed with grief counselors and veterinary professionals.",
  },
  {
    icon: "fa-solid fa-bridge-water",
    title: "Bridges clinic and owner",
    desc: "The only platform that seamlessly connects B2B (clinics) and B2C (pet owners). Clinics send; owners receive. One unified experience, zero friction.",
  },
  {
    icon: "fa-solid fa-bolt",
    title: "60 seconds to activate",
    desc: "No lengthy onboarding. No integrations to configure. Enter an email, choose a template, send. Your team stays focused on care, not admin.",
  },
  {
    icon: "fa-solid fa-lock",
    title: "Privacy-first, GDPR-ready",
    desc: "Encrypted storage, full data portability, granular controls. Memorials can be public, private, or invite-only. Your clients own their data.",
  },
];

export default function PageDifferentiation() {
  return (
    <section className='bg-card dark:bg-card/50 border-y border-border'>
      <div className='calm-container py-20 sm:py-28'>
        <div className='text-center mb-16'>
          <span className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4'>
            What makes Pemetery different
          </span>
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground mb-4'>
            The only SaaS built for pet loss aftercare
          </h2>
          <p className='text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed'>
            Generic tools fall short. Pemetery combines clinic automation with owner
            grief support in one purpose-built platformso you deliver meaningful
            aftercare without the admin burden.
          </p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 content-wide mx-auto'>
          {differentiators.map((d, i) => (
            <motion.div
              key={d.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className='pro-card p-8 dark:bg-card dark:border-border flex gap-6 text-left hover:shadow-lg transition-shadow'
            >
              <div
                className='w-14 h-14 rounded-2xl flex items-center justify-center shrink-0'
                style={{ background: "var(--gradient-cta)" }}
              >
                <i className={`${d.icon} text-white text-lg`} />
              </div>
              <div>
                <h3 className='font-display text-xl font-semibold text-foreground mb-2'>
                  {d.title}
                </h3>
                <p className='text-muted-foreground text-[15px] leading-relaxed'>
                  {d.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className='mt-14 text-center'>
          <Link
            to='/for-clinics'
            className='pro-btn-primary px-8 py-3.5 text-[15px]'
          >
            See how it works for clinics{" "}
            <i className='fa-solid fa-arrow-right text-xs' />
          </Link>
        </div>
      </div>
    </section>
  );
}
