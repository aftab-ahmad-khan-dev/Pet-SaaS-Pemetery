import { motion } from 'framer-motion';

const reasons = [
  { icon: 'fa-solid fa-shield-halved', title: 'GDPR Compliant', desc: 'Encrypted storage, full data export, and granular privacy controls. Your clients own their data.' },
  { icon: 'fa-solid fa-bolt', title: 'Setup in Minutes', desc: 'No training required. Activate aftercare in under 60 seconds. Zero onboarding friction.' },
  { icon: 'fa-solid fa-heart', title: 'Grief-Informed Design', desc: 'Built with grief support experts. Every template, prompt, and flow is designed for emotional safety.' },
  { icon: 'fa-solid fa-headset', title: '24/7 Support', desc: 'Dedicated help when you need it. Response within 24 hours. Real humans, not bots.' },
];

export default function PageConvincing() {
  return (
    <section className="calm-container py-20 sm:py-24">
      <div className="text-center mb-14">
        <div className="section-divider mb-6" />
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Why choose Pemetery?</h2>
        <p className="text-muted-foreground text-sm max-w-xl mx-auto">Professional, secure, and designed with care for both clinics (B2B) and grieving families (B2C). One platform, two audiences, zero compromise.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div key={r.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
            className="pro-card p-6 dark:bg-card dark:border-border text-center hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 bg-accent/20">
              <i className={`${r.icon} text-accent text-sm`} />
            </div>
            <h3 className="font-display font-semibold text-foreground mb-2">{r.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
