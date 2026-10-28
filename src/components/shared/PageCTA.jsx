import { Link } from 'react-router-dom';

export default function PageCTA({ title = 'Ready to transform your aftercare?', subtitle = 'Start free. No credit card required. Set up in under 5 minutes.', primaryText = 'Start Free Trial', primaryTo = '/login', secondaryText = 'Book a Demo', secondaryTo = '/contact', icon = 'fa-solid fa-rocket' }) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
      <div className="calm-container py-20 sm:py-24 text-center relative z-10">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">{title}</h2>
        <p className="text-white/80 mb-10 text-[15px] max-w-lg mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={primaryTo} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm bg-white text-accent hover:bg-white/90 transition-all shadow-lg">
            <i className={`${icon} text-sm`} /> {primaryText}
          </Link>
          <Link to={secondaryTo} className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-semibold text-sm border-2 border-white/40 text-white hover:bg-white/10 transition-all">
            <i className="fa-solid fa-calendar text-sm" /> {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
