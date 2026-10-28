import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PublicHeader from "@/components/shared/PublicHeader";
import Footer from "@/components/shared/Footer";

const legalLinks = [
  {
    to: "/privacy-policy",
    icon: "fa-solid fa-shield-halved",
    label: "Privacy Policy",
    desc: "How we collect, use, and protect your data.",
  },
  {
    to: "/terms-of-service",
    icon: "fa-solid fa-file-contract",
    label: "Terms of Service",
    desc: "Terms and conditions for using Pemetery.",
  },
  {
    to: "/gdpr-compliance",
    icon: "fa-solid fa-scale-balanced",
    label: "GDPR Compliance",
    desc: "Our commitment to EU data protection standards.",
  },
];

const Legal = () => (
  <div className="min-h-screen flex flex-col bg-background dark:bg-background">
    <PublicHeader />
    <main className="flex-1">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
        <div className="calm-container py-24 sm:py-32 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-sm text-white/90 text-xs font-semibold uppercase tracking-wider mb-6"
            >
              <i className="fa-solid fa-gavel text-[10px]" /> Legal
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Legal & Privacy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="mt-6 text-lg text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              Transparent policies for data protection, terms of use, and regulatory compliance.
            </motion.p>
          </div>
        </div>
      </section>
      <div className="calm-container py-16 sm:py-24">
        <div className="max-w-3xl mx-auto grid gap-6">
          {legalLinks.map((item, i) => (
            <motion.div
              key={item.to}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i }}
            >
              <Link
                to={item.to}
                className="pro-card p-6 flex items-start gap-5 hover:border-accent/50 transition-colors group"
              >
                <div className="icon-box w-12 h-12 rounded-xl shrink-0">
                  <i className={`${item.icon} text-accent text-sm`} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                    {item.label}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
                </div>
                <i className="fa-solid fa-chevron-right text-muted-foreground text-xs group-hover:text-accent ml-auto transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default Legal;
