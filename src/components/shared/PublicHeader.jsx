import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { getCurrentUser, logout } from "@/utils/auth";
import { getDashboardPath } from "@/utils/roles";
import { useTheme } from "@/contexts/ThemeContext";
import Logo from "@/components/shared/Logo";

const PublicHeader = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const user = getCurrentUser();
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/for-clinics", label: "For Clinics" },
    { to: "/for-owners", label: "For Pet Owners" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  const isActive = (to) => {
    if (to === "/") return location.pathname === "/";
    return location.pathname.startsWith(to);
  };

  const isDark = theme === "dark";

  const textBase = isDark ? "text-white" : "text-neutral-900";
  const textMuted = isDark ? "text-white/90" : "text-neutral-900";
  const textMutedHover = isDark ? "hover:text-white" : "hover:text-neutral-900";

  const capsuleBase =
    "rounded-full px-4 py-2 text-[13px] font-medium transition-all duration-300";
  const capsuleActive = "bg-accent text-accent-foreground shadow-md";
  const ctaCapsule = "bg-accent text-accent-foreground hover:opacity-90 shadow-md";

  const navCapsuleBase =
    "rounded-full px-6 py-2.5 flex items-center justify-between w-full max-w-[90vw] mx-auto backdrop-blur-2xl backdrop-saturate-150 border transition-all duration-300";
  const navCapsuleTop =
    "bg-white/30 dark:bg-black/20 border-white/30 dark:border-white/5 shadow-[0_2px_15px_-4px_rgba(0,0,0,0.06)] dark:shadow-[0_2px_15px_-4px_rgba(0,0,0,0.3)]";
  const navCapsuleScrolled =
    "bg-white/50 dark:bg-black/40 border-white/50 dark:border-white/10 shadow-[0_4px_30px_-4px_rgba(0,0,0,0.1),0_0_0_1px_rgba(255,255,255,0.3)_inset] dark:shadow-[0_4px_30px_-4px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)_inset]";
  const navCapsuleGloss = `${navCapsuleBase} ${scrolled ? navCapsuleScrolled : navCapsuleTop}`;

  return (
    <header className='fixed top-0 left-0 right-0 z-50 transition-all duration-300'>
      <div className='calm-container flex items-center justify-center h-[80px] py-3'>
        <div
          className={`flex items-center justify-between w-full ${navCapsuleGloss}`}
        >
          <Link
            to='/'
            className={`flex items-center gap-3 group transition-colors duration-300 ${textBase}`}
          >
            <div
              className='w-10 h-10 rounded-2xl flex items-center justify-center relative overflow-hidden'
              style={{ background: "var(--gradient-cta)" }}
            >
              <Logo className='w-7 h-7' fill='white' />
            </div>
            <div className='flex flex-col'>
              <span className='font-display text-xl font-bold tracking-tight leading-none'>
                Pemetery
              </span>
              <span
                className={`text-[10px] font-medium tracking-widest uppercase leading-none mt-0.5 ${isDark ? "text-white/75" : "text-neutral-700"}`}
              >
                Digital Aftercare
              </span>
            </div>
          </Link>

          <nav className='hidden md:flex items-center gap-1'>
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`${capsuleBase} ${isActive(link.to) ? capsuleActive : `${textMuted} ${textMutedHover} ${isDark ? "hover:bg-white/10" : "hover:bg-neutral-100"}`}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${isDark ? "text-white/90 hover:text-white hover:bg-white/10" : "text-neutral-900 hover:text-neutral-800 hover:bg-muted"}`}
              aria-label={
                theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              <i
                className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"} text-sm`}
              />
            </button>
            <div
              className={`w-px h-6 mx-3 transition-colors duration-300 ${isDark ? "bg-white/20" : "bg-border"}`}
            />
            {user ? (
              <Link
                to={getDashboardPath(user)}
                className={`${capsuleBase} inline-flex items-center gap-1.5 ${ctaCapsule}`}
              >
                <i className='fa-solid fa-grid-2 text-[10px]' /> Dashboard
              </Link>
            ) : (
              <Link
                to='/login'
                className={`${capsuleBase} inline-flex items-center gap-1.5 ${ctaCapsule}`}
              >
                Login <i className='fa-solid fa-chevron-right text-[10px]' />
              </Link>
            )}
          </nav>

          <button
            className={`md:hidden p-2.5 rounded-full transition-colors duration-300 ${isDark ? "text-white hover:bg-white/10" : "text-neutral-900 hover:bg-muted"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label='Menu'
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"} text-lg`} />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className='md:hidden bg-white/60 dark:bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border-t border-white/20 dark:border-white/5 overflow-hidden'
          >
            <div className='calm-container py-4 flex flex-col gap-1'>
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMenuOpen(false)}
                  className={`px-4 py-3 text-sm font-medium rounded-full transition-colors ${
                    isActive(link.to)
                      ? "bg-accent/10 text-accent"
                      : "text-foreground hover:bg-muted/60"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className='flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-foreground rounded-full'
              >
                <i
                  className={`fa-solid ${theme === "dark" ? "fa-sun" : "fa-moon"}`}
                />{" "}
                {theme === "dark" ? "Light mode" : "Dark mode"}
              </button>
              <div className='h-px bg-border my-2' />
              {user ? (
                <>
                  <Link
                    to={getDashboardPath(user)}
                    onClick={() => setMenuOpen(false)}
                    className='px-4 py-3 text-sm font-semibold text-accent rounded-full hover:bg-accent/10'
                  >
                    <i className='fa-solid fa-grid-2 mr-2 text-xs' /> Dashboard
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setMenuOpen(false);
                    }}
                    className='text-left px-4 py-3 text-sm text-muted-foreground rounded-full hover:bg-muted/60'
                  >
                    Sign Out
                  </button>
                </>
              ) : (
                <Link
                  to='/login'
                  onClick={() => setMenuOpen(false)}
                  className='pro-btn-primary mx-2 my-2 justify-center rounded-full'
                >
                  Login <i className='fa-solid fa-chevron-right text-xs' />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default PublicHeader;
