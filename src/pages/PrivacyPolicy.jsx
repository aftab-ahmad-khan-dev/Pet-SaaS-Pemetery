import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";

const sections = [
  {
    title: "1. Information we collect",
    content: "We collect information you provide when creating memorials, journal entries, or contacting support. This includes name, email address, pet information, photos, and written tributes. We also collect usage data such as pages visited and actions taken to improve our service.",
  },
  {
    title: "2. How we use your information",
    content: "We use your information to provide, maintain, and improve Pemetery; to send you service-related communications; to comply with legal obligations; and to protect the rights and safety of our users. We do not sell your personal data.",
  },
  {
    title: "3. Data retention and deletion",
    content: "Memorial content is retained until you request deletion. You may export or delete your data at any time from your account settings. Deleted data is removed from our systems within 30 days.",
  },
  {
    title: "4. Security",
    content: "We use industry-standard encryption (TLS, AES) to protect data in transit and at rest. Access to personal data is restricted to authorized personnel only. We perform regular security audits.",
  },
  {
    title: "5. Third parties",
    content: "We may use trusted third-party services for hosting, analytics, and support. These providers are bound by data processing agreements and do not use your data for their own purposes.",
  },
  {
    title: "6. Your rights",
    content: "You have the right to access, correct, export, or delete your personal data. EU residents have additional rights under GDPR (see GDPR Compliance). Contact us at privacy@pemetery.com for requests.",
  },
  {
    title: "7. Updates",
    content: "We may update this policy from time to time. We will notify you of material changes via email or a prominent notice in the app. Continued use after changes constitutes acceptance.",
  },
];

const PrivacyPolicy = () => (
  <div className="min-h-screen flex flex-col bg-background dark:bg-background">
    <PublicHeader />
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="calm-container py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6 mb-8 sm:mb-10">
              <Link
                to="/legal"
                className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors w-fit"
              >
                <i className="fa-solid fa-arrow-left text-xs" />
                <span>Legal</span>
              </Link>
              <Link
                to="/terms-of-service"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors w-fit"
              >
                <i className="fa-solid fa-file-contract text-[11px]" />
                <span>Terms</span>
              </Link>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <i className="fa-solid fa-shield-halved text-[10px]" /> Privacy
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-white/80 max-w-2xl mx-auto"
            >
              Last updated: February 2026
            </motion.p>
          </div>
        </div>
      </section>
      <div className="calm-container py-16 sm:py-24">
        <div className="max-w-3xl mx-auto prose prose-neutral dark:prose-invert">
          {sections.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 * i }}
              className="mb-10"
            >
              <h2 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h2>
              <p className="text-muted-foreground text-[15px] leading-relaxed">{s.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default PrivacyPolicy;
