import { motion } from 'framer-motion';

const socialProof = {
  stats: [
    { value: '500+', label: 'Clinics', icon: 'fa-solid fa-hospital' },
    { value: '12K+', label: 'Memorials', icon: 'fa-solid fa-paw' },
    { value: '98%', label: 'Satisfaction', icon: 'fa-solid fa-heart' },
    { value: '4.9/5', label: 'Reviews', icon: 'fa-solid fa-star' },
  ],
  trustedBy: ['Paws & Hearts', 'Gentle Farewell', 'Sunrise Animal Hospital', 'Care Veterinary'],
  testimonials: [
    { quote: 'Setup took 10 minutes. Our grieving families now get a beautiful memorial within hours of losing their pet. It has changed how we support clients.', name: 'Dr. Sarah Mitchell', role: 'Paws & Hearts Veterinary', type: 'B2B' },
    { quote: 'When we lost Luna, this space helped our whole family heal. We shared photos, wrote stories, and felt connected even when apart.', name: 'Sarah M.', role: 'Pet Owner', type: 'B2C' },
    { quote: 'We switched from generic emails to Pemetery. Client feedback has never been better. 60 seconds to send, zero training needed.', name: 'Dr. James Chen', role: 'Gentle Farewell Vets', type: 'B2B' },
  ],
};

export default function PageSocialProof() {
  return (
    <section className="bg-card dark:bg-card/50 border-y border-border">
      <div className="calm-container py-20 sm:py-24">
        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-semibold uppercase tracking-wider mb-4">
            Trusted by the industry
          </span>
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">Loved by clinics and pet owners</h2>
          <p className="text-muted-foreground text-sm max-w-xl mx-auto">Join hundreds of veterinary clinics and thousands of families who trust Pemetery for compassionate aftercare.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {socialProof.testimonials.map((t, i) => (
            <motion.div key={t.name} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="pro-card p-6 dark:bg-card dark:border-border">
              <span className="pro-badge-neutral text-[10px] mb-3 inline-block">{t.type}</span>
              <p className="text-sm text-foreground leading-relaxed mb-4">&ldquo;{t.quote}&rdquo;</p>
              <div className="text-[11px] font-semibold text-foreground">{t.name}</div>
              <div className="text-[10px] text-muted-foreground">{t.role}</div>
              <div className="flex gap-0.5 mt-2 text-accent">
                {[1,2,3,4,5].map(j => <i key={j} className="fa-solid fa-star text-[8px]" />)}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {socialProof.stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="text-center py-6 px-4 rounded-2xl bg-muted/30 dark:bg-muted/20 border border-border/50">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 bg-accent/20">
                <i className={`${s.icon} text-accent text-sm`} />
              </div>
              <div className="text-2xl font-bold text-foreground">{s.value}</div>
              <div className="text-[11px] text-muted-foreground font-medium uppercase tracking-wider mt-1">{s.label}</div>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-wrap justify-center gap-6 sm:gap-10 items-center opacity-70">
          {socialProof.trustedBy.map((name) => (
            <span key={name} className="text-sm font-semibold text-muted-foreground">{name}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
