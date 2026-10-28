import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const STORAGE_KEY = "pemetery_cookie_consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const location = useLocation();

  const isDashboard = /^\/dashboard\/(owner|clinic|admin)(\/|$)/.test(location.pathname);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "accepted" || isDashboard) return;

    const timer = setTimeout(() => setVisible(true), 30000);
    return () => clearTimeout(timer);
  }, [isDashboard]);

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  const close = () => {
    setVisible(false);
  };

  const show = !isDashboard && visible;

  return (
    <AnimatePresence>
      {show && (
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.96 }}
        transition={{ type: "spring", damping: 20, stiffness: 300 }}
        className="fixed bottom-6 right-6 z-[9999] w-[340px] sm:w-[380px] rounded-2xl shadow-xl border border-border bg-card dark:bg-card p-5"
      >
        <div className="flex items-start gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
            <i className="fa-solid fa-cookie-bite text-accent text-sm" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between gap-2 mb-1">
              <h3 className="font-display text-sm font-semibold text-foreground">
                We use cookies
              </h3>
              <button
                onClick={close}
                className="w-7 h-7 rounded-lg flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors shrink-0"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark text-xs" />
              </button>
            </div>
            <p className="text-xs text-muted-foreground leading-relaxed mb-4">
              We use cookies to improve your experience and analyze site traffic. By clicking
              Accept, you agree to our{" "}
              <Link to="/privacy-policy" className="text-accent hover:underline">
                Privacy Policy
              </Link>{" "}
              and{" "}
              <Link to="/terms-of-service" className="text-accent hover:underline">
                Terms
              </Link>
              .
            </p>
            <button
              onClick={accept}
              className="pro-btn-primary text-xs px-4 py-2 rounded-full font-semibold"
            >
              Accept cookies
            </button>
          </div>
        </div>
      </motion.div>
      )}
    </AnimatePresence>
  );
}
