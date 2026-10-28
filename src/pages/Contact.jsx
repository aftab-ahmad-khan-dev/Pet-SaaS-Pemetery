import { useState } from "react";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";
import PageSocialProof from "@/components/shared/PageSocialProof";
import PageConvincing from "@/components/shared/PageConvincing";
import PageCTA from "@/components/shared/PageCTA";

const contactInfo = [
  {
    icon: "fa-solid fa-envelope",
    label: "Email",
    value: "support@pemetery.com",
    href: "mailto:support@pemetery.com",
  },
  { icon: "fa-solid fa-clock", label: "Response Time", value: "Within 24 hours" },
  {
    icon: "fa-solid fa-shield-halved",
    label: "Privacy",
    value: "All communications are encrypted",
  },
  {
    icon: "fa-solid fa-map-marker-alt",
    label: "Office",
    value: "Portland, ORRemote team",
  },
];

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [msg, setMsg] = useState("");

  const send = (e) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setName("");
    setEmail("");
    setSubject("");
    setMsg("");
  };

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
                <i className='fa-solid fa-envelope text-[10px]' /> Contact
              </motion.span>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className='font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight'
              >
                Get in Touch
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed'
              >
                Whether you&apos;re a clinic (B2B) looking to automate aftercare, a
                pet owner (B2C) with questions about memorials, or interested in a
                personalized demowe&apos;re here to help. Response within 24 hours.
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
                <a
                  href='#contact-form'
                  className='inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-[15px] border-2 border-white/40 text-white hover:bg-white/10 transition-all'
                >
                  <i className='fa-solid fa-paper-plane text-xs' /> Send Message
                </a>
              </motion.div>
            </div>
          </div>
        </section>
        <section className='calm-container py-24 relative -mt-6 z-10'>
          <div className='w-full content-wide mx-auto' id='contact-form'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-12'>
              {/* Contact info cards */}
              <div className='lg:col-span-1 space-y-6'>
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className='pro-card p-5 dark:bg-card dark:border-border flex items-start gap-4'
                  >
                    <div
                      className='w-12 h-12 rounded-xl flex items-center justify-center shrink-0'
                      style={{ background: "var(--gradient-cta)" }}
                    >
                      <i className={`${item.icon} text-white text-sm`} />
                    </div>
                    <div>
                      <div className='text-[11px] text-muted-foreground font-semibold uppercase tracking-wider mb-1'>
                        {item.label}
                      </div>
                      {item.href ? (
                        <a
                          href={item.href}
                          className='text-sm font-semibold text-foreground hover:text-accent transition-colors'
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className='text-sm font-semibold text-foreground'>
                          {item.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className='pro-card p-5 dark:bg-card dark:border-border'
                >
                  <div className='flex items-center gap-3 mb-3'>
                    <i className='fa-solid fa-calendar-check text-accent' />
                    <span className='text-sm font-semibold text-foreground'>
                      Office Hours
                    </span>
                  </div>
                  <p className='text-sm text-muted-foreground'>
                    Mon – Fri: 9:00 AM – 6:00 PM PT
                    <br />
                    Support: 24/7 via email
                  </p>
                </motion.div>
              </div>

              {/* Form */}
              <motion.form
                onSubmit={send}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className='lg:col-span-2 pro-card p-8 sm:p-10 dark:bg-card dark:border-border space-y-6'
              >
                <h2 className='font-display text-xl font-bold text-foreground mb-6'>
                  Send a message
                </h2>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div>
                    <label className='pro-label'>Name</label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder='Your name'
                      className='pro-input dark:bg-background dark:border-input'
                      required
                    />
                  </div>
                  <div>
                    <label className='pro-label'>Email</label>
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='you@example.com'
                      className='pro-input dark:bg-background dark:border-input'
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className='pro-label'>Subject</label>
                  <select
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    className='pro-input dark:bg-background dark:border-input'
                    required
                  >
                    <option value=''>Select a topic</option>
                    <option value='demo'>Request a demo</option>
                    <option value='clinic'>Clinic onboarding</option>
                    <option value='support'>Technical support</option>
                    <option value='partnership'>Partnership</option>
                    <option value='other'>Other</option>
                  </select>
                </div>
                <div>
                  <label className='pro-label'>Message</label>
                  <textarea
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)}
                    placeholder='How can we help?'
                    className='pro-input dark:bg-background dark:border-input resize-none h-36'
                    required
                  />
                </div>
                <button
                  type='submit'
                  className='pro-btn-primary w-full py-3.5 rounded-full flex items-center justify-center gap-2'
                >
                  <i className='fa-solid fa-paper-plane text-xs' /> Send Message
                </button>
              </motion.form>
            </div>
          </div>
        </section>

        <PageSocialProof />
        <PageConvincing />
        <PageCTA
          title='Ready to transform your aftercare?'
          subtitle='Start free. No credit card required. Set up in under 5 minutes.'
        />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
