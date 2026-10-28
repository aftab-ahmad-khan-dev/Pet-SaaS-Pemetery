import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";
import PageSocialProof from "@/components/shared/PageSocialProof";
import PageConvincing from "@/components/shared/PageConvincing";
import PageCTA from "@/components/shared/PageCTA";
import { mockFAQ } from "@/utils/mockData";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  { id: "all", label: "All", icon: "fa-solid fa-list" },
  { id: "pet-owners", label: "Pet Owners", icon: "fa-solid fa-paw" },
  { id: "clinics", label: "Clinics", icon: "fa-solid fa-hospital" },
  { id: "privacy", label: "Privacy", icon: "fa-solid fa-shield-halved" },
];

const FAQ = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);

  const filtered = useMemo(() => {
    let items = mockFAQ;
    if (activeCategory !== "all") {
      items = items.filter((f) => f.category === activeCategory);
    }
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (f) => f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q),
      );
    }
    return items;
  }, [search, activeCategory]);

  return (
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
                <i className='fa-solid fa-circle-question text-[10px]' /> Help Center
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
              >
                Frequently Asked Questions
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'
              >
                Everything you need to know about Pemeterythe SaaS platform for pet
                loss aftercare. Whether you&apos;re a clinic (B2B) or a pet owner
                (B2C), find answers here.
              </motion.p>
            </div>
          </div>
        </section>
        <div className='calm-container py-16 sm:py-24 relative -mt-6 z-10'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center'>
            {/* Left: FAQs */}
            <div>
              {/* Search */}
              <div className='relative mb-8'>
                <i className='fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm' />
                <input
                  type='text'
                  placeholder='Search questions...'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className='pro-input pl-11 pr-4 py-3.5 rounded-full dark:bg-card dark:border-border'
                />
              </div>

              {/* Category pills */}
              <div className='flex flex-wrap gap-2 mb-10'>
                {categories.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setActiveCategory(c.id)}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === c.id
                        ? "bg-accent text-accent-foreground shadow-md"
                        : "bg-muted/60 dark:bg-muted text-muted-foreground hover:text-foreground hover:bg-muted dark:hover:bg-muted/80"
                    }`}
                  >
                    <i className={`${c.icon} text-xs`} />
                    {c.label}
                  </button>
                ))}
              </div>

              {/* Accordion */}
              <div className='space-y-3'>
                <AnimatePresence mode='popLayout'>
                  {filtered.length ? (
                    filtered.map((item, i) => (
                      <motion.div
                        key={`${item.q}-${i}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.2 }}
                        className='pro-card overflow-hidden dark:bg-card dark:border-border group'
                      >
                        <button
                          onClick={() => setOpenIndex(openIndex === i ? null : i)}
                          className='w-full px-6 py-4 flex items-center justify-between text-left cursor-pointer hover:bg-muted/30 dark:hover:bg-muted/20 transition-colors'
                        >
                          <span className='text-sm font-semibold text-foreground pr-4'>
                            {item.q}
                          </span>
                          <i
                            className={`fa-solid fa-chevron-down text-[10px] text-muted-foreground shrink-0 transition-transform duration-200 ${
                              openIndex === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {openIndex === i && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className='overflow-hidden'
                            >
                              <div className='px-6 pb-5 pt-0'>
                                <p className='text-sm text-muted-foreground leading-relaxed'>
                                  {item.a}
                                </p>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </motion.div>
                    ))
                  ) : (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className='text-center py-12 text-muted-foreground'
                    >
                      <i className='fa-solid fa-search text-3xl mb-3 opacity-50' />
                      <p className='text-sm'>
                        No questions match your search. Try a different term or
                        category.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className='mt-12 lg:mt-8'>
                <p className='text-muted-foreground text-sm mb-4'>
                  Still have questions?
                </p>
                <Link
                  to='/contact'
                  className='inline-flex items-center gap-2 text-accent font-semibold text-sm hover:underline'
                >
                  <i className='fa-solid fa-envelope text-xs' /> Contact us
                </Link>
              </div>
            </div>

            {/* Right: Relevant stuff */}
            <div className='lg:sticky lg:top-24 space-y-6'>
              <div className='pro-card p-6 dark:bg-card dark:border-border'>
                <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-4'>
                  <i className='fa-solid fa-compass text-accent text-xs' /> Quick
                  Links
                </h3>
                <div className='space-y-2'>
                  <Link
                    to='/for-owners'
                    className='flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2'
                  >
                    <i className='fa-solid fa-paw text-[10px] w-4' /> For Pet Owners
                  </Link>
                  <Link
                    to='/for-clinics'
                    className='flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2'
                  >
                    <i className='fa-solid fa-hospital text-[10px] w-4' /> For
                    Clinics
                  </Link>
                  <Link
                    to='/legal'
                    className='flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2'
                  >
                    <i className='fa-solid fa-gavel text-[10px] w-4' /> Legal &
                    Privacy
                  </Link>
                  <Link
                    to='/contact'
                    className='flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors py-2'
                  >
                    <i className='fa-solid fa-envelope text-[10px] w-4' /> Contact Us
                  </Link>
                </div>
              </div>
              <div className='pro-card p-6 dark:bg-card dark:border-border'>
                <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-4'>
                  <i className='fa-solid fa-book-open text-accent text-xs' /> Popular
                  Topics
                </h3>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li><Link to='/faq' className='hover:text-accent transition-colors'>• Memorial privacy & sharing</Link></li>
                  <li><Link to='/faq' className='hover:text-accent transition-colors'>• Inviting family to contribute</Link></li>
                  <li><Link to='/faq' className='hover:text-accent transition-colors'>• Clinic onboarding</Link></li>
                  <li><Link to='/faq' className='hover:text-accent transition-colors'>• Data safety & export</Link></li>
                  <li><Link to='/faq' className='hover:text-accent transition-colors'>• Payment & plans</Link></li>
                </ul>
              </div>
              <div className='pro-card p-6 dark:bg-card dark:border-border border-l-4 border-l-accent'>
                <h3 className='text-sm font-semibold text-foreground flex items-center gap-2 mb-2'>
                  <i className='fa-solid fa-life-ring text-accent text-xs' /> Need
                  help?
                </h3>
                <p className='text-[13px] text-muted-foreground mb-4'>
                  Our team typically responds within 24 hours.
                </p>
                <Link
                  to='/contact'
                  className='inline-flex items-center gap-2 pro-btn-primary text-xs py-2.5'
                >
                  <i className='fa-solid fa-envelope' /> Get in touch
                </Link>
              </div>
            </div>
          </div>
        </div>

        <PageSocialProof />
        <PageConvincing />
        <PageCTA
          title='Ready to get started?'
          subtitle='Create memorials, automate aftercare, or explore our platformfree to try.'
        />
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
