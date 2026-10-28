import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";

const sections = [
  {
    title: "1. Our commitment",
    content: "Pemetery is committed to compliance with the EU General Data Protection Regulation (GDPR). We process personal data lawfully, fairly, and transparently. This page outlines how we meet GDPR requirements for EU residents and others whose data falls under GDPR.",
  },
  {
    title: "2. Legal basis",
    content: "We process data based on: (a) your consent for marketing and optional features; (b) contract performance for core memorial and support services; (c) legitimate interests for security, analytics, and service improvement; (d) legal obligations when required by law.",
  },
  {
    title: "3. Your rights under GDPR",
    content: "You have the right to access, rectify, erase, restrict processing, data portability, object to processing, and withdraw consent. You also have the right to lodge a complaint with a supervisory authority. Contact privacy@pemetery.com for requests; we respond within 30 days.",
  },
  {
    title: "4. Data transfers",
    content: "Data may be transferred to and processed in countries outside the EEA. We use appropriate safeguards such as Standard Contractual Clauses (SCCs) approved by the European Commission to ensure an adequate level of protection.",
  },
  {
    title: "5. Data protection officer",
    content: "For GDPR-related inquiries, contact our Data Protection Officer at dpo@pemetery.com. We will assist with access requests, complaints, or questions about our data practices.",
  },
  {
    title: "6. Records and audits",
    content: "We maintain records of processing activities and conduct regular audits to ensure compliance. Our systems are designed with privacy by design and by default.",
  },
];

const GDPRCompliance = () => (
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
              <i className="fa-solid fa-scale-balanced text-[10px]" /> GDPR
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              GDPR Compliance
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-white/80 max-w-2xl mx-auto"
            >
              Our commitment to EU data protection standards
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

export default GDPRCompliance;
