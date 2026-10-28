import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";

const sections = [
  {
    title: "1. Acceptance of terms",
    content:
      "By accessing or using Pemetery, you agree to these Terms of Service. If you do not agree, do not use the service. We may update these terms from time to time; continued use after changes constitutes acceptance.",
  },
  {
    title: "2. Description of service",
    content:
      "Pemetery provides a platform for pet memorials, grief support tools, and aftercare coordination for veterinary clinics. We reserve the right to modify, suspend, or discontinue features at any time.",
  },
  {
    title: "3. Account and eligibility",
    content:
      "You must be at least 13 years old to use Pemetery. You are responsible for maintaining the confidentiality of your account and for all activity under your account. Notify us immediately of unauthorized use.",
  },
  {
    title: "4. User conduct",
    content:
      "You agree not to post offensive, defamatory, or illegal content. You will not harass other users, impersonate others, or use the service for spam or malware. We may remove content and suspend accounts that violate these terms.",
  },
  {
    title: "5. Intellectual property",
    content:
      "You retain ownership of your content. By posting content, you grant Pemetery a limited license to host, display, and transmit it as necessary to provide the service. Pemetery branding, software, and design remain our property.",
  },
  {
    title: "6. Limitation of liability",
    content:
      "Pemetery is provided as is. We are not liable for indirect, incidental, or consequential damages. Our total liability is limited to the amount you paid us in the 12 months preceding the claim.",
  },
  {
    title: "7. Indemnification",
    content:
      "You agree to indemnify Pemetery and its affiliates from claims arising from your use of the service, your content, or your violation of these terms.",
  },
  {
    title: "8. Termination",
    content:
      "You may close your account at any time. We may suspend or terminate your account for violations of these terms. Upon termination, you may request export of your data.",
  },
  {
    title: "9. Governing law",
    content:
      "These terms are governed by the laws of the State of Oregon, USA. Disputes shall be resolved in the courts of Multnomah County, Oregon.",
  },
  {
    title: "10. Contact",
    content:
      "For questions about these terms, contact us at legal@pemetery.com or via our Contact page.",
  },
];

const TermsOfService = () => (
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
                to="/privacy-policy"
                className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold uppercase tracking-wider transition-colors w-fit"
              >
                <i className="fa-solid fa-shield-halved text-[11px]" />
                <span>Privacy</span>
              </Link>
            </div>
          </div>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <i className="fa-solid fa-file-contract text-[10px]" /> Terms
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Terms of Service
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
        <div className="max-w-3xl mx-auto">
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

export default TermsOfService;
