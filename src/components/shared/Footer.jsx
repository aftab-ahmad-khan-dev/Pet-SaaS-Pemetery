import { Link } from "react-router-dom";
import Logo from "@/components/shared/Logo";

const footerLinks = {
  Platform: [
    { to: "/for-clinics", label: "For Clinics" },
    { to: "/for-owners", label: "For Pet Owners" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ],
  Legal: [
    { to: "/legal", label: "Legal" },
    { to: "/privacy-policy", label: "Privacy Policy" },
    { to: "/terms-of-service", label: "Terms of Service" },
    { to: "/gdpr-compliance", label: "GDPR Compliance" },
  ],
};

const Footer = () => (
  <footer className='bg-card border-t border-border relative overflow-hidden'>
    <div className='absolute inset-0 mesh-bg opacity-30 pointer-events-none' />
    <div className='calm-container py-20 relative'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10'>
        {/* Brand */}
        <div className='lg:col-span-1'>
          <div className='flex items-center gap-3 mb-5'>
            <div
              className='w-10 h-10 rounded-2xl flex items-center justify-center'
              style={{ background: "var(--gradient-cta)" }}
            >
              <Logo className='w-7 h-7' fill='white' />
            </div>
            <div>
              <span className='font-display text-lg font-bold text-foreground block leading-none'>
                Pemetery
              </span>
              <span className='text-[10px] text-muted-foreground tracking-widest uppercase'>
                Digital Aftercare
              </span>
            </div>
          </div>
          <p className='text-sm text-muted-foreground leading-relaxed max-w-xs'>
            A compassionate digital platform for aftercare, memorials, and emotional
            support after pet loss.
          </p>
          <div className='flex items-center gap-3 mt-5'>
            <div className='w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors cursor-pointer'>
              <i className='fa-brands fa-twitter text-xs text-muted-foreground' />
            </div>
            <div className='w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors cursor-pointer'>
              <i className='fa-brands fa-instagram text-xs text-muted-foreground' />
            </div>
            <div className='w-8 h-8 rounded-lg bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors cursor-pointer'>
              <i className='fa-brands fa-linkedin-in text-xs text-muted-foreground' />
            </div>
          </div>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className='text-xs font-bold uppercase tracking-widest text-foreground mb-5'>
              {title}
            </h4>
            <div className='flex flex-col gap-3'>
              {links.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className='text-sm text-muted-foreground hover:text-accent transition-colors'
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        ))}

        {/* Contact */}
        <div>
          <h4 className='text-xs font-bold uppercase tracking-widest text-foreground mb-5'>
            Support
          </h4>
          <div className='flex flex-col gap-3'>
            <a
              href='mailto:support@pemetery.com'
              className='text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2'
            >
              <i className='fa-solid fa-envelope text-[10px]' /> support@pemetery.com
            </a>
            <Link
              to='/contact'
              className='text-sm text-muted-foreground hover:text-accent transition-colors flex items-center gap-2'
            >
              <i className='fa-solid fa-message text-[10px]' /> Contact Form
            </Link>
          </div>
          <div className='mt-5 flex flex-col gap-2'>
            <span className='text-[11px] text-muted-foreground flex items-center gap-2'>
              <i className='fa-solid fa-shield-halved text-accent text-[10px]' />{" "}
              Encrypted & GDPR Compliant
            </span>
            <span className='text-[11px] text-muted-foreground flex items-center gap-2'>
              <i className='fa-solid fa-database text-accent text-[10px]' /> Daily
              Backups · 24h Restore
            </span>
          </div>
        </div>
      </div>

      <div className='border-t border-border mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4'>
        <p className='text-xs text-muted-foreground'>
          © 2026 Pemetery. All rights reserved.
        </p>
        <div className='flex items-center gap-2'>
          <span className='pro-badge-neutral text-[10px]'>
            <i className='fa-solid fa-lock text-[8px] mr-1' /> SSL Secured
          </span>
          <span className='pro-badge-neutral text-[10px]'>
            <i className='fa-solid fa-check text-[8px] mr-1' /> SOC 2 Ready
          </span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
