import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";
import PageSocialProof from "@/components/shared/PageSocialProof";
import PageConvincing from "@/components/shared/PageConvincing";
import PageDifferentiation from "@/components/shared/PageDifferentiation";
import { mockPetOwnerPlans } from "@/utils/mockData";

const steps = [
  {
    icon: "fa-solid fa-envelope-open",
    title: "Receive an Invitation",
    desc: "Your veterinary clinic sends a gentle, personalized email with a secure memorial link.",
  },
  {
    icon: "fa-solid fa-paw",
    title: "Create a Memorial",
    desc: "Add your pet's name, photo, and dates. Autosave ensures nothing is lost.",
  },
  {
    icon: "fa-solid fa-images",
    title: "Share Memories",
    desc: "Write stories, upload photos, and invite family to contribute their tributes.",
  },
  {
    icon: "fa-solid fa-hand-holding-heart",
    title: "Find Comfort",
    desc: "Private journaling, mood check-ins, guided prompts, and curated grief resources.",
  },
];

const ForOwners = () => (
  <div className='min-h-screen flex flex-col bg-background dark:bg-background'>
    <PublicHeader />
    <main className='flex-1'>
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
              <i className='fa-solid fa-heart text-[10px]' /> For Pet Owners
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
            >
              A warm space to{" "}
              <span className='text-white/90'>remember and heal</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className='mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'
            >
              Losing a pet is devastating. Generic condolence cards and scattered
              photos don&apos;t do justice to the bond you shared. Pemetery gives you
              a private, lasting space to create a digital memorial, share memories
              with family, journal your grief, and find comfortat your own pace.
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
                <i className='fa-solid fa-paw text-sm' /> Get Started Free
              </Link>
              <Link
                to='/contact'
                className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border-2 border-white/40 text-white hover:bg-white/10 transition-all'
              >
                <i className='fa-solid fa-envelope text-xs' /> Contact Us
              </Link>
            </motion.div>
          </div>
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
              <i className='fa-solid fa-heart-crack text-destructive/80 text-lg' />{" "}
              Without Pemetery
            </h3>
            <p className='text-muted-foreground text-[15px] leading-relaxed mb-4'>
              Photos scattered on phones. Condolence cards get lost. No shared space
              for family to contribute. Grief feels isolatingand honoring your
              pet&apos;s memory becomes a challenge instead of a comfort.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className='pro-card p-8 dark:bg-card dark:border-border border-l-4 border-l-primary'
          >
            <h3 className='font-display text-xl font-semibold text-foreground mb-4 flex items-center gap-2'>
              <i className='fa-solid fa-heart text-accent text-lg' /> With Pemetery
            </h3>
            <p className='text-muted-foreground text-[15px] leading-relaxed'>
              One lasting memorial. Photos, stories, candles, and tributes in one
              place. Family invited to contribute. Private grief journal and guided
              prompts. Honor your companionand heal togetherat your own pace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-24'>
          <div className='text-center mb-14'>
            <div className='section-divider mb-6' />
            <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
              Your Journey
            </h2>
            <p className='mt-3 text-muted-foreground text-[15px] max-w-xl mx-auto leading-relaxed'>
              From your vet&apos;s invitation to lasting peacePemetery guides you
              through creating a memorial, sharing memories, and healing. Private,
              secure, and free.
            </p>
          </div>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 w-full content-wide mx-auto'>
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className='stat-card relative group'
              >
                <div className='icon-box w-14 h-14 rounded-2xl mb-5 group-hover:scale-110 transition-transform'>
                  <i className={`${s.icon} text-lg text-accent`} />
                </div>
                <span className='text-[11px] font-bold text-accent/30 absolute top-0 right-0 tracking-wider'>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className='font-display text-base font-semibold text-foreground mb-2'>
                  {s.title}
                </h3>
                <p className='text-sm text-muted-foreground leading-relaxed'>
                  {s.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Grief Journal Preview with Image */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full content-wide mx-auto items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='order-2 lg:order-1'
            >
              <div className='rounded-2xl overflow-hidden shadow-xl ring-1 ring-border/50'>
                <img
                  src='https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&q=80'
                  alt='Pet and grief journal reflection'
                  className='w-full h-[280px] object-cover'
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='order-1 lg:order-2'
            >
              <div className='section-divider mb-6' />
              <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
                Private grief journal
              </h2>
              <p className='mt-4 text-muted-foreground text-[15px] leading-relaxed'>
                Write letters to your pet, track your mood, and work through grief at
                your own pace. Guided prompts and resourcesall private, secure, and
                yours.
              </p>
              <ul className='mt-6 space-y-3'>
                {[
                  "Letter-to-pet writing",
                  "Mood check-ins & insights",
                  "Curated grief resources",
                  "End-to-end encrypted",
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
          </div>
        </div>
      </section>

      {/* Why families choose Pemetery */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-20 sm:py-24'>
          <div className='w-full content-wide mx-auto'>
            <div className='text-center mb-14'>
              <div className='section-divider mb-6' />
              <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
                Why families choose Pemetery
              </h2>
              <p className='mt-3 text-muted-foreground text-[15px] max-w-2xl mx-auto leading-relaxed'>
                A gentle, private space built for grieving familiesnot generic forms
                or impersonal tools.
              </p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {[
                {
                  icon: "fa-solid fa-heart",
                  title: "Compassionate design",
                  desc: "Every feature was designed with grief counselors and pet owners in mindgentle, respectful, and healing.",
                },
                {
                  icon: "fa-solid fa-users",
                  title: "Family-first",
                  desc: "Invite loved ones to contribute memories, light candles, and share tributestogether, even when apart.",
                },
                {
                  icon: "fa-solid fa-infinity",
                  title: "Forever memorials",
                  desc: "Your companion's page stays online as long as you need it. No expiration, no limits.",
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
        </div>
      </section>

      {/* Testimonial */}
      <section className='calm-container py-24'>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className='max-w-2xl mx-auto text-center'
        >
          <div className='pro-card p-10 dark:bg-card dark:border-border'>
            <i className='fa-solid fa-quote-left text-3xl text-accent/20 block mb-4' />
            <p className='font-display text-xl text-foreground leading-relaxed'>
              "When we lost Luna, the memorial space helped our whole family heal. We
              could share stories and feel connected even apart."
            </p>
            <div className='mt-6 text-sm font-medium text-muted-foreground'>
              — Sarah M.
            </div>
          </div>
        </motion.div>
      </section>

      {/* Memorial Preview with Image */}
      <section className='bg-card dark:bg-card/50 border-y border-border'>
        <div className='calm-container py-24'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 w-full content-wide mx-auto items-center'>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className='order-2 lg:order-1'
            >
              <div className='section-divider mb-6' />
              <h2 className='font-display text-2xl sm:text-3xl font-bold text-foreground'>
                See your memorial come to life
              </h2>
              <p className='mt-4 text-muted-foreground text-[15px] leading-relaxed'>
                Beautiful tribute pages with photos, stories, candles, and family
                tributes. Share a unique link, invite loved ones, and honor your
                companion in a private, lasting space.
              </p>
              <ul className='mt-6 space-y-3'>
                {[
                  "Photo albums & timeline memories",
                  "Light virtual candles & tributes",
                  "Invite family to contribute",
                  "Private or shareable link",
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
                src='https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&q=80'
                alt='Pet memorial tribute'
                className='w-full h-[320px] object-cover'
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pet Owner Plans */}
      <section className='calm-container py-24'>
        <div className='text-center mb-14'>
          <div className='section-divider mb-6' />
          <h2 className='font-display text-3xl sm:text-4xl font-bold text-foreground'>
            Choose Your Plan
          </h2>
          <p className='mt-3 text-muted-foreground text-[15px] max-w-xl mx-auto leading-relaxed'>
            Start free and upgrade anytime. Plans are managed by your clinic
            adminchoose what fits your family.
          </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full content-wide mx-auto'>
          {mockPetOwnerPlans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`pro-card p-7 relative dark:bg-card dark:border-border ${plan.popular ? "ring-2 ring-primary shadow-xl scale-[1.02] dark:shadow-primary/10" : ""}`}
            >
              {plan.popular && (
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
                <span className='text-sm text-muted-foreground'>/mo</span>
              </div>
              <p className='text-[12px] text-muted-foreground mb-7'>
                {typeof plan.memorials === "number"
                  ? `Up to ${plan.memorials} memorials · ${plan.memories} memories each`
                  : `${plan.memorials} memorials · ${plan.memories} memories`}
              </p>
              <ul className='space-y-2.5 mb-7'>
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className='text-sm text-muted-foreground flex items-start gap-2.5'
                  >
                    <i className='fa-solid fa-check text-accent text-[10px] mt-1 shrink-0' />{" "}
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to='/login'
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                  plan.popular
                    ? "pro-btn-primary w-full"
                    : "pro-btn-secondary w-full"
                }`}
              >
                {plan.price === 0 ? "Get Started Free" : "Choose Plan"}
              </Link>
            </motion.div>
          ))}
        </div>
        <p className='text-center text-xs text-muted-foreground mt-6'>
          Plans and pricing are managed by your clinic. Contact your clinic for
          details.
        </p>
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
            Ready to honor your companion?
          </h2>
          <p className='text-white/80 mb-10 text-[15px] max-w-md mx-auto'>
            Create a beautiful tributefree, private, and yours forever.
          </p>
          <Link
            to='/login'
            className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] bg-white text-accent shadow-lg hover:bg-white/90 transition-all'
          >
            <i className='fa-solid fa-paw text-sm' /> Get Started Free
          </Link>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default ForOwners;
