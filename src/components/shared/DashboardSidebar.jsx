import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { logout } from "@/utils/auth.js";
import Logo from "@/components/shared/Logo";
import { useDashboardLayout } from "@/contexts/DashboardLayoutContext";

const ownerNav = [
  { to: "", label: "My Memorials", icon: "fa-solid fa-paw" },
  { to: "create-memorial", label: "New Memorial", icon: "fa-solid fa-plus-circle" },
  { to: "journal", label: "Journal", icon: "fa-solid fa-book" },
  { to: "mood", label: "Mood Check-in", icon: "fa-solid fa-heart-pulse" },
  { to: "resources", label: "Resources", icon: "fa-solid fa-leaf" },
  { to: "settings", label: "Privacy & Data", icon: "fa-solid fa-shield-halved" },
  { to: "support", label: "Support", icon: "fa-solid fa-life-ring" },
];

const clinicNav = [
  { to: "", label: "Dashboard", icon: "fa-solid fa-grid-2" },
  { to: "new-aftercare", label: "New Aftercare", icon: "fa-solid fa-paper-plane" },
  { to: "memorials", label: "Memorials", icon: "fa-solid fa-paw" },
  { to: "qr-generator", label: "QR Generator", icon: "fa-solid fa-qrcode" },
  { to: "analytics", label: "Analytics", icon: "fa-solid fa-chart-line" },
  { to: "profile", label: "Clinic Profile", icon: "fa-solid fa-hospital" },
];

const adminNav = [
  { to: "", label: "Overview", icon: "fa-solid fa-chart-pie" },
  { to: "clinics", label: "Clinics", icon: "fa-solid fa-hospital" },
  { to: "moderation", label: "Moderation", icon: "fa-solid fa-shield" },
  { to: "analytics", label: "Analytics", icon: "fa-solid fa-chart-bar" },
  { to: "settings", label: "Settings", icon: "fa-solid fa-gear" },
];

const DashboardSidebar = ({ user, basePath = "/dashboard/owner" }) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { sidebarCollapsed, toggleSidebar } = useDashboardLayout();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems =
    user.role === "clinic_admin" || user.role === "vet_staff"
      ? clinicNav
      : user.role === "platform_admin"
        ? adminNav
        : ownerNav;

  const toPath = (to) =>
    (basePath + (to ? `/${to}` : "")).replace(/\/$/, "") || basePath;
  const isActive = (to) => {
    const path = toPath(to);
    return (
      location.pathname === path || (to && location.pathname.startsWith(path + "/"))
    );
  };
  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const roleLabel =
    user.role === "clinic_admin"
      ? "Clinic Admin"
      : user.role === "vet_staff"
        ? "Vet Staff"
        : user.role === "platform_admin"
          ? "Platform Admin"
          : "Pet Owner";

  const renderSidebarContent = (expanded) => (
    <div
      className='flex flex-col h-full transition-all duration-300'
      style={{ background: "var(--gradient-sidebar)" }}
    >
      {/* Logo */}
      <div
        className={`border-b border-sidebar-border transition-all duration-300 ${
          !expanded ? "px-3 py-5 flex justify-center" : "px-5 py-6"
        }`}
      >
        <Link to='/' className={`flex items-center ${!expanded ? "justify-center" : "gap-3"}`}>
          <div className='w-9 h-9 rounded-xl bg-sidebar-primary/20 flex items-center justify-center shrink-0'>
            <Logo className='w-5 h-5' fill='hsl(var(--sidebar-primary))' />
          </div>
          {expanded && (
            <div>
              <span className='font-display text-base font-bold text-sidebar-accent-foreground block leading-none'>
                Pemetery
              </span>
              <span className='text-[9px] text-sidebar-foreground tracking-widest uppercase mt-0.5 block'>
                Dashboard
              </span>
            </div>
          )}
        </Link>
      </div>

      {/* Nav */}
      <nav
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          !expanded ? "px-2 py-4 space-y-1" : "px-3 py-5 space-y-1"
        }`}
      >
        {expanded && (
          <div className='px-3 mb-3'>
            <span className='text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/50'>
              Navigation
            </span>
          </div>
        )}
        {navItems.map((item) => (
          <Link
            key={item.to || "index"}
            to={toPath(item.to)}
            onClick={() => setMobileOpen(false)}
            title={sidebarCollapsed ? item.label : undefined}
            className={`flex items-center rounded-xl text-[13px] transition-all duration-200 ${
              !expanded ? "justify-center px-0 py-2.5" : "gap-3 px-3.5 py-2.5"
            } ${
              isActive(item.to || "")
                ? "bg-sidebar-accent text-sidebar-accent-foreground font-semibold shadow-sm"
                : "text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground"
            }`}
          >
            <div
            className={`rounded-lg flex items-center justify-center transition-colors shrink-0 ${
              !expanded ? "w-9 h-9" : "w-7 h-7"
            } ${isActive(item.to || "") ? "bg-sidebar-primary/20" : "bg-transparent"}`}
            >
              <i
                className={`${item.icon} ${sidebarCollapsed ? "text-xs" : "text-[11px]"} ${
                  isActive(item.to) ? "text-sidebar-primary" : ""
                }`}
              />
            </div>
            {expanded && item.label}
          </Link>
        ))}
      </nav>

      {/* Collapse toggle (above) + User */}
      <div
        className={`border-t border-sidebar-border transition-all duration-300 ${
          !expanded ? "px-2 py-4 space-y-2" : "px-4 py-4 space-y-3"
        }`}
      >
        <div className='flex justify-end'>
          <button
            onClick={toggleSidebar}
            className={`flex items-center rounded-xl text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground transition-all shrink-0 ${
              !expanded ? "justify-center p-2" : "gap-2 px-3 py-2"
            }`}
            title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <i
              className={`fa-solid fa-angles-left text-[11px] transition-transform ${
                !expanded ? "rotate-180" : ""
              }`}
            />
            {expanded && (
              <span className='text-[11px] font-medium'>Collapse</span>
            )}
          </button>
        </div>
        <div
          className={`flex items-center transition-all ${
            !expanded ? "flex-col gap-2 justify-center" : "gap-3"
          }`}
        >
          <div
            className='w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold shrink-0'
            style={{ background: "var(--gradient-cta)" }}
          >
            <span className='text-white'>{user.name.charAt(0)}</span>
          </div>
          {expanded ? (
            <>
              <div className='flex-1 min-w-0'>
                <div className='text-[13px] text-sidebar-accent-foreground font-semibold truncate'>
                  {user.name}
                </div>
                <div className='text-[10px] text-sidebar-foreground/70'>{roleLabel}</div>
              </div>
              <button
                onClick={handleLogout}
                className='w-8 h-8 rounded-lg bg-sidebar-accent/50 flex items-center justify-center text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-all shrink-0'
                title='Sign out'
              >
                <i className='fa-solid fa-right-from-bracket text-[10px]' />
              </button>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className='w-8 h-8 rounded-lg bg-sidebar-accent/50 flex items-center justify-center text-sidebar-foreground hover:text-sidebar-accent-foreground hover:bg-sidebar-accent transition-all'
              title='Sign out'
            >
              <i className='fa-solid fa-right-from-bracket text-[10px]' />
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const sidebarContent = renderSidebarContent(!sidebarCollapsed);
  const sidebarContentMobile = renderSidebarContent(true);

  return (
    <>
      {/* Mobile header */}
      <div className='lg:hidden fixed top-0 left-0 right-0 z-40 bg-card/90 backdrop-blur-2xl border-b border-border/50 h-16 flex items-center px-4 gap-3'>
        <button
          onClick={() => setMobileOpen(true)}
          className='w-10 h-10 rounded-xl bg-muted flex items-center justify-center text-foreground'
          aria-label='Menu'
        >
          <i className='fa-solid fa-bars text-sm' />
        </button>
        <Link to='/' className='flex items-center gap-2.5'>
          <div
            className='w-8 h-8 rounded-xl flex items-center justify-center'
            style={{ background: "var(--gradient-cta)" }}
          >
            <Logo className='w-5 h-5' fill='white' />
          </div>
          <span className='font-display text-base font-bold text-foreground'>
            Pemetery
          </span>
        </Link>
      </div>

      {/* Desktop */}
      <aside
        className={`hidden lg:block h-screen fixed left-0 top-0 z-30 transition-all duration-300 ${
          sidebarCollapsed ? "w-[4.5rem]" : "w-64"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className='fixed inset-0 bg-foreground/40 backdrop-blur-sm z-40 lg:hidden'
              onClick={() => setMobileOpen(false)}
            />
            <motion.aside
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: "spring", damping: 30, stiffness: 350 }}
              className='fixed left-0 top-0 bottom-0 w-[300px] z-50 lg:hidden shadow-2xl overflow-hidden'
            >
              <button
                onClick={() => setMobileOpen(false)}
                className='absolute top-5 right-4 w-8 h-8 rounded-lg bg-sidebar-accent flex items-center justify-center text-sidebar-foreground hover:text-sidebar-accent-foreground z-10'
              >
                <i className='fa-solid fa-xmark text-sm' />
              </button>
              {sidebarContentMobile}
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardSidebar;
