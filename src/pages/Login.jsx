import { useState, useEffect, useRef } from "react";

const DASHBOARD_PATHS = ["/dashboard/owner", "/dashboard/clinic", "/dashboard/admin"];
const isDashboardPath = (path) => path && DASHBOARD_PATHS.some((p) => path.startsWith(p));
import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { login, getCurrentUser } from "@/utils/auth";
import { getDashboardPath } from "@/utils/roles";

// ─── Floating Particles ────────────────────────────────────────────────────────
const Particle = ({ style }) => (
  <div
    className='absolute rounded-full pointer-events-none'
    style={{
      width: style.size,
      height: style.size,
      left: style.x,
      top: style.y,
      background: style.color,
      filter: `blur(${style.blur}px)`,
      opacity: style.opacity,
      animation: `float ${style.duration}s ease-in-out infinite`,
      animationDelay: `${style.delay}s`,
    }}
  />
);

const particles = Array.from({ length: 18 }, (_, i) => ({
  size: `${Math.random() * 6 + 2}px`,
  x: `${Math.random() * 100}%`,
  y: `${Math.random() * 100}%`,
  color: i % 3 === 0 ? "#c9a96e" : i % 3 === 1 ? "#4a7c59" : "#8fbc8f",
  blur: Math.random() * 2 + 1,
  opacity: Math.random() * 0.5 + 0.15,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 5,
}));

// ─── Paw SVG ──────────────────────────────────────────────────────────────────
const PawIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <ellipse cx='6' cy='6' rx='2' ry='2.8' />
    <ellipse cx='11' cy='4.5' rx='2' ry='2.8' />
    <ellipse cx='16.5' cy='5.5' rx='1.8' ry='2.5' />
    <ellipse cx='20' cy='9.5' rx='1.8' ry='2.5' />
    <path d='M12 9.5c-4.5 0-8 2.5-7.5 6.5.3 2.5 2.5 4 5 3.5 1-.2 2-.5 2.5-.5s1.5.3 2.5.5c2.5.5 4.7-1 5-3.5C19.9 12 16.5 9.5 12 9.5z' />
  </svg>
);

// ─── Leaf SVG ─────────────────────────────────────────────────────────────────
const LeafIcon = ({ className = "" }) => (
  <svg
    width='16'
    height='16'
    viewBox='0 0 24 24'
    fill='currentColor'
    className={className}
  >
    <path d='M17 8C8 10 5.9 16.2 3.6 22H5c.5-1.3 1.1-2.7 2-4h1c0 2 .5 3.5 1.5 4h1c-.5-1.5-.5-3 0-4.5C13.8 14.5 20 12 20 4c0 0-3 2-3 4z' />
  </svg>
);

// ─── OTP Input ────────────────────────────────────────────────────────────────
const OtpInput = ({ value, onChange }) => {
  const inputs = useRef([]);
  const digits = value.split("").concat(Array(6).fill("")).slice(0, 6);

  const handleKey = (i, e) => {
    if (e.key === "Backspace") {
      const next = value.slice(0, i) + value.slice(i + 1);
      onChange(next);
      if (i > 0) inputs.current[i - 1]?.focus();
    } else if (/^\d$/.test(e.key)) {
      const next = (value.slice(0, i) + e.key + value.slice(i + 1)).slice(0, 6);
      onChange(next);
      if (i < 5) inputs.current[i + 1]?.focus();
    }
  };

  return (
    <div className='flex gap-3 justify-center'>
      {digits.map((d, i) => (
        <input
          key={i}
          ref={(el) => (inputs.current[i] = el)}
          type='text'
          inputMode='numeric'
          maxLength={1}
          value={d}
          onChange={() => {}}
          onKeyDown={(e) => handleKey(i, e)}
          onFocus={(e) => e.target.select()}
          style={{
            width: "48px",
            height: "58px",
            textAlign: "center",
            fontSize: "22px",
            fontWeight: "600",
            fontFamily: "'Playfair Display', serif",
            background: d ? "rgba(201,169,110,0.12)" : "rgba(255,255,255,0.04)",
            border: d
              ? "1.5px solid rgba(201,169,110,0.6)"
              : "1.5px solid rgba(255,255,255,0.1)",
            borderRadius: "12px",
            color: "#e8d5b0",
            outline: "none",
            transition: "all 0.2s ease",
            caretColor: "#c9a96e",
            boxShadow: d ? "0 0 16px rgba(201,169,110,0.15)" : "none",
          }}
        />
      ))}
    </div>
  );
};

// ─── Main Login ───────────────────────────────────────────────────────────────
const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState("");
  const [step, setStep] = useState("email"); // email | otp | consent

  useEffect(() => {
    const user = getCurrentUser();
    if (user) {
      const from = location.state?.from?.pathname;
      navigate(isDashboardPath(from) ? from : getDashboardPath(user), { replace: true });
    }
  }, [navigate, location.state?.from?.pathname]);
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [consented, setConsented] = useState(false);
  const [activeDemo, setActiveDemo] = useState(null);

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep("otp");
    }, 900);
  };

  const handleOtpSubmit = () => {
    if (otp.length < 4) return;
    setStep("consent");
  };

  const stepLabels = {
    email: { title: "Welcome home.", sub: "Sign in to your memorial garden." },
    otp: {
      title: "Check your inbox.",
      sub: `A 6-digit code was sent to ${email || "you"}.`,
    },
    consent: {
      title: "Almost there.",
      sub: "Review and accept our gentle promise to you.",
    },
  };

  const demoAccounts = [
    {
      label: "Pet Owner",
      email: "sarah@example.com",
      role: "memorial_owner",
      icon: "fa-solid fa-paw",
    },
    {
      label: "Clinic Admin",
      email: "james@pawsclinic.com",
      role: "clinic_admin",
      icon: "fa-solid fa-hospital",
    },
    {
      label: "Platform Admin",
      email: "admin@pemetery.com",
      role: "platform_admin",
      icon: "fa-solid fa-gear",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:wght@300;400;500&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        :root {
          --ink: #233927;
          --ink-2: #1a2d1f;
          --ink-3: #2a4530;
          --forest: #2d5a3d;
          --forest-2: #3a7050;
          --moss: #4a7c59;
          --sage: #8fbc8f;
          --gold: #c9a96e;
          --gold-2: #dfc18a;
          --gold-glow: rgba(201,169,110,0.25);
          --cream: #e8d5b0;
          --cream-2: #f0e6cc;
          --white-10: rgba(255,255,255,0.07);
          --white-20: rgba(255,255,255,0.12);
          --white-40: rgba(255,255,255,0.4);
          --white-60: rgba(255,255,255,0.6);
        }

        body { margin: 0; font-family: 'DM Sans', sans-serif; background: var(--ink); }

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-18px) rotate(3deg); }
          66% { transform: translateY(-8px) rotate(-2deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes candleFlicker {
          0%, 100% { opacity: 1; transform: scaleY(1) scaleX(1); }
          25% { opacity: 0.9; transform: scaleY(1.04) scaleX(0.97); }
          50% { opacity: 0.95; transform: scaleY(0.98) scaleX(1.02); }
          75% { opacity: 1; transform: scaleY(1.02) scaleX(0.99); }
        }

        @keyframes revealUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(201,169,110,0.4); }
          70% { transform: scale(1); box-shadow: 0 0 0 10px rgba(201,169,110,0); }
          100% { transform: scale(0.95); box-shadow: 0 0 0 0 rgba(201,169,110,0); }
        }

        .login-root {
          min-height: 100vh;
          display: flex;
          background: var(--ink);
          position: relative;
          overflow: hidden;
        }

        /* ── Left Panel ── */
        .panel-left {
          width: 52%;
          position: relative;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 52px 56px;
          overflow: hidden;
          background: linear-gradient(145deg, #1a2d1f 0%, #233927 40%, #2a4530 100%);
        }

        .panel-left::before {
          content: '';
          position: absolute;
          inset: 0;
          background: 
            radial-gradient(ellipse 80% 60% at 20% 80%, rgba(74,124,89,0.22) 0%, transparent 60%),
            radial-gradient(ellipse 60% 40% at 80% 20%, rgba(201,169,110,0.12) 0%, transparent 50%),
            radial-gradient(ellipse 40% 50% at 50% 50%, rgba(45,90,61,0.1) 0%, transparent 70%);
          pointer-events: none;
        }

        .panel-left::after {
          content: '';
          position: absolute;
          right: 0; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(180deg, transparent, rgba(201,169,110,0.3) 30%, rgba(201,169,110,0.5) 50%, rgba(201,169,110,0.3) 70%, transparent);
        }

        /* Decorative garden circle */
        .garden-orb {
          position: absolute;
          bottom: -120px; right: -120px;
          width: 480px; height: 480px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(45,90,61,0.25) 0%, rgba(74,124,89,0.1) 40%, transparent 70%);
          border: 1px solid rgba(74,124,89,0.15);
        }
        .garden-orb-2 {
          position: absolute;
          top: -60px; left: -60px;
          width: 300px; height: 300px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(201,169,110,0.08) 0%, transparent 70%);
          border: 1px solid rgba(201,169,110,0.08);
        }

        /* Logo */
        .logo-mark {
          display: flex; align-items: center; gap: 14px;
          position: relative; z-index: 2;
        }
        .logo-icon {
          width: 48px; height: 48px;
          border-radius: 14px;
          background: linear-gradient(135deg, rgba(201,169,110,0.2), rgba(74,124,89,0.3));
          border: 1px solid rgba(201,169,110,0.35);
          display: flex; align-items: center; justify-content: center;
          color: var(--gold);
          animation: pulse-ring 3s ease-in-out infinite;
        }
        .logo-text-main {
          font-family: 'Playfair Display', serif;
          font-size: 22px; font-weight: 600;
          color: var(--cream);
          letter-spacing: -0.3px;
        }
        .logo-text-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 400;
          color: rgba(201,169,110,0.6);
          letter-spacing: 0.25em;
          text-transform: uppercase;
          margin-top: 1px;
        }

        /* Headline */
        .panel-headline {
          position: relative; z-index: 2;
        }
        .panel-headline h2 {
          font-family: 'Playfair Display', serif;
          font-size: 46px;
          font-weight: 500;
          line-height: 1.15;
          color: var(--cream-2);
          letter-spacing: -0.5px;
        }
        .panel-headline h2 em {
          font-style: italic;
          color: var(--gold-2);
          display: block;
        }
        .panel-headline p {
          font-family: 'Cormorant Garamond', serif;
          font-size: 18px;
          font-weight: 300;
          font-style: italic;
          color: rgba(232,213,176,0.55);
          margin-top: 16px;
          line-height: 1.7;
          max-width: 380px;
        }

        /* Divider */
        .panel-divider {
          display: flex; align-items: center; gap: 12px;
          margin: 32px 0 28px;
          position: relative; z-index: 2;
        }
        .panel-divider-line {
          flex: 1; height: 1px;
          background: linear-gradient(90deg, transparent, rgba(201,169,110,0.3), transparent);
        }
        .panel-divider-dot {
          width: 4px; height: 4px;
          border-radius: 50%;
          background: rgba(201,169,110,0.5);
        }

        /* Testimonial */
        .testimonial {
          position: relative; z-index: 2;
          padding: 22px 24px;
          border-radius: 16px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(201,169,110,0.12);
          backdrop-filter: blur(8px);
        }
        .testimonial-quote {
          font-family: 'Cormorant Garamond', serif;
          font-size: 17px;
          font-style: italic;
          color: rgba(232,213,176,0.75);
          line-height: 1.65;
        }
        .testimonial-author {
          margin-top: 14px;
          display: flex; align-items: center; gap: 10px;
        }
        .testimonial-avatar {
          width: 34px; height: 34px; border-radius: 50%;
          background: linear-gradient(135deg, var(--forest), var(--moss));
          border: 1.5px solid rgba(201,169,110,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
        }
        .testimonial-name {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: rgba(201,169,110,0.8);
        }
        .testimonial-role {
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          margin-top: 1px;
        }

        /* Trust badges */
        .trust-strip {
          display: flex; gap: 20px;
          position: relative; z-index: 2;
        }
        .trust-item {
          display: flex; align-items: center; gap: 7px;
        }
        .trust-icon {
          width: 28px; height: 28px;
          border-radius: 8px;
          background: rgba(74,124,89,0.2);
          border: 1px solid rgba(74,124,89,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          color: var(--sage);
        }
        .trust-label {
          font-size: 11px;
          color: rgba(255,255,255,0.4);
          font-weight: 400;
        }

        /* ── Right Panel ── */
        .panel-right {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 40px;
          position: relative;
          background: linear-gradient(160deg, #1e3424 0%, #233927 100%);
        }

        .panel-right::before {
          content: '';
          position: absolute; inset: 0;
          background:
            radial-gradient(ellipse 50% 50% at 80% 20%, rgba(201,169,110,0.06) 0%, transparent 60%),
            radial-gradient(ellipse 40% 40% at 20% 80%, rgba(74,124,89,0.08) 0%, transparent 60%);
          pointer-events: none;
        }

        /* Form card */
        .form-card {
          width: 100%;
          max-width: 400px;
          position: relative; z-index: 2;
        }

        .step-eyebrow {
          display: flex; align-items: center; gap: 8px;
          margin-bottom: 24px;
        }
        .step-pill {
          display: flex; gap: 6px;
        }
        .step-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          transition: all 0.35s ease;
        }
        .step-dot.active {
          width: 20px; border-radius: 3px;
          background: var(--gold);
        }
        .step-dot.done {
          background: var(--moss);
        }
        .step-dot.upcoming {
          background: rgba(255,255,255,0.15);
        }

        .form-title {
          font-family: 'Playfair Display', serif;
          font-size: 34px;
          font-weight: 500;
          color: var(--cream-2);
          letter-spacing: -0.5px;
          line-height: 1.15;
          margin-bottom: 6px;
        }
        .form-sub {
          font-size: 13px;
          color: rgba(255,255,255,0.38);
          margin-bottom: 32px;
          line-height: 1.6;
        }
        .form-sub span {
          color: rgba(232,213,176,0.65);
          font-weight: 500;
        }

        /* Input group */
        .field-wrap {
          margin-bottom: 18px;
        }
        .field-label {
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          margin-bottom: 8px;
          display: block;
        }
        .field-inner {
          position: relative;
        }
        .field-icon {
          position: absolute; left: 16px; top: 50%; transform: translateY(-50%);
          color: rgba(201,169,110,0.9);
          font-size: 15px;
          pointer-events: none;
        }
        .field-input {
          width: 100%;
          padding: 14px 16px 14px 44px;
          background: rgba(255,255,255,0.04);
          border: 1.5px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          color: var(--cream);
          outline: none;
          transition: all 0.25s ease;
          -webkit-autofill: unset;
        }
        .field-input::placeholder { color: rgba(255,255,255,0.2); }
        .field-input:focus {
          border-color: rgba(201,169,110,0.5);
          background: rgba(201,169,110,0.05);
          box-shadow: 0 0 0 4px rgba(201,169,110,0.08), inset 0 1px 0 rgba(255,255,255,0.04);
        }

        /* CTA Button */
        .btn-primary {
          width: 100%;
          padding: 15px 24px;
          border-radius: 12px;
          border: none;
          cursor: pointer;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          letter-spacing: 0.02em;
          position: relative;
          overflow: hidden;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          background: linear-gradient(135deg, #b8924f 0%, #c9a96e 40%, #d4b87a 100%);
          color: var(--ink);
          box-shadow: 0 4px 24px rgba(201,169,110,0.25), 0 1px 0 rgba(255,255,255,0.15) inset;
          margin-top: 8px;
        }
        .btn-primary::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.12) 100%);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .btn-primary:hover:not(:disabled) {
          transform: translateY(-1px);
          box-shadow: 0 8px 32px rgba(201,169,110,0.35);
        }
        .btn-primary:hover::before { opacity: 1; }
        .btn-primary:active:not(:disabled) { transform: translateY(0); }
        .btn-primary:disabled { opacity: 0.5; cursor: not-allowed; }

        .btn-ghost {
          width: 100%;
          padding: 12px;
          background: none;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: rgba(255,255,255,0.3);
          cursor: pointer;
          transition: color 0.2s;
          margin-top: 4px;
        }
        .btn-ghost:hover { color: rgba(255,255,255,0.6); }

        /* Remember row */
        .row-flex {
          display: flex; align-items: center; justify-content: space-between;
          margin-bottom: 18px;
        }
        .check-label {
          display: flex; align-items: center; gap: 8px;
          cursor: pointer;
        }
        .check-box {
          width: 16px; height: 16px;
          border-radius: 5px;
          border: 1.5px solid rgba(255,255,255,0.15);
          background: rgba(255,255,255,0.04);
          appearance: none;
          cursor: pointer;
          position: relative;
          accent-color: var(--gold);
          transition: all 0.2s;
        }
        .check-box:checked {
          background: var(--gold);
          border-color: var(--gold);
        }
        .check-text {
          font-size: 13px;
          color: rgba(255,255,255,0.4);
        }
        .link-gold {
          font-size: 13px;
          color: rgba(201,169,110,0.7);
          text-decoration: none;
          transition: color 0.2s;
        }
        .link-gold:hover { color: var(--gold-2); }

        /* Consent box */
        .consent-box {
          padding: 18px;
          border-radius: 12px;
          background: rgba(74,124,89,0.07);
          border: 1px solid rgba(74,124,89,0.2);
          margin-bottom: 16px;
        }
        .consent-inner {
          display: flex; align-items: flex-start; gap: 12px;
        }
        .consent-text {
          font-size: 13px;
          color: rgba(232,213,176,0.65);
          line-height: 1.65;
        }
        .consent-text a { color: var(--gold); text-decoration: none; }
        .consent-text a:hover { text-decoration: underline; }
        .consent-footnote {
          display: flex; align-items: center; gap: 6px;
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          margin-bottom: 20px;
        }

        /* Divider */
        .divider-row {
          display: flex; align-items: center; gap: 12px;
          margin: 28px 0 18px;
        }
        .divider-line {
          flex: 1; height: 1px;
          background: rgba(255,255,255,0.06);
        }
        .divider-text {
          font-size: 10px;
          letter-spacing: 0.15em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.2);
          white-space: nowrap;
        }

        /* Demo buttons */
        .demo-btn {
          width: 100%;
          display: flex; align-items: center; gap: 12px;
          padding: 12px 14px;
          border-radius: 10px;
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.06);
          cursor: pointer;
          transition: all 0.22s ease;
          margin-bottom: 8px;
          text-align: left;
        }
        .demo-btn:hover {
          background: rgba(201,169,110,0.07);
          border-color: rgba(201,169,110,0.2);
          transform: translateX(2px);
        }
        .demo-btn.active-demo {
          background: rgba(201,169,110,0.1);
          border-color: rgba(201,169,110,0.35);
        }
        .demo-icon {
          width: 36px; height: 36px;
          border-radius: 9px;
          background: rgba(201,169,110,0.15);
          border: 1px solid rgba(201,169,110,0.3);
          display: flex; align-items: center; justify-content: center;
          font-size: 14px;
          color: rgba(201,169,110,0.95);
          flex-shrink: 0;
        }
        .demo-info { flex: 1; }
        .demo-role {
          font-size: 13px;
          font-weight: 500;
          color: rgba(232,213,176,0.8);
          display: block;
        }
        .demo-email {
          font-size: 11px;
          color: rgba(255,255,255,0.28);
          margin-top: 1px;
        }
        .demo-arrow {
          font-size: 10px;
          color: rgba(201,169,110,0.4);
        }

        /* Candle ornament */
        .candle-wrap {
          position: absolute;
          top: 36px; right: 36px;
          display: flex; flex-direction: column; align-items: center;
          gap: 0;
          opacity: 0.55;
        }
        .candle-flame {
          width: 8px; height: 14px;
          border-radius: 50% 50% 40% 40%;
          background: linear-gradient(180deg, #ffe082, #ffb300);
          animation: candleFlicker 2s ease-in-out infinite;
          box-shadow: 0 0 10px 4px rgba(255,180,0,0.3);
        }
        .candle-body {
          width: 10px; height: 30px;
          background: linear-gradient(180deg, var(--cream-2), #d4b87a);
          border-radius: 2px;
        }
        .candle-base {
          width: 16px; height: 3px;
          background: rgba(201,169,110,0.4);
          border-radius: 2px;
        }

        /* Mobile nav */
        .mobile-logo {
          display: none;
          margin-bottom: 32px;
        }

        @media (max-width: 900px) {
          .panel-left { display: none; }
          .panel-right { padding: 40px 24px; }
          .mobile-logo { display: flex; align-items: center; gap: 12px; }
          .form-title { font-size: 28px; }
        }

        @keyframes blink {
          0%, 100% { opacity: 1; } 50% { opacity: 0; }
        }

        .spinning { animation: spin 1s linear infinite; }
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* step animations */
        .step-enter { animation: revealUp 0.35s ease forwards; }
      `}</style>

      <div className='login-root'>
        {/* Ambient particles */}
        {particles.map((p, i) => (
          <Particle key={i} style={p} />
        ))}

        {/* ── LEFT PANEL ────────────────────────────────────── */}
        <div className='panel-left'>
          <div className='garden-orb' />
          <div className='garden-orb-2' />

          {/* Logo */}
          <div className='logo-mark'>
            <div className='logo-icon'>
              <PawIcon size={22} />
            </div>
            <div>
              <div className='logo-text-main'>Pemetery</div>
              <div className='logo-text-sub'>Digital Aftercare</div>
            </div>
          </div>

          {/* Headline */}
          <div className='panel-headline'>
            <h2>
              Every life
              <em>deserves to be</em>
              remembered.
            </h2>
            <p>
              A sanctuary for grief, remembrance, and the quiet rituals of goodbye —
              crafted for those who care deeply.
            </p>

            <div className='panel-divider'>
              <div className='panel-divider-line' />
              <div className='panel-divider-dot' />
              <div className='panel-divider-line' />
            </div>

            {/* Testimonial */}
            <div className='testimonial'>
              <div className='testimonial-quote'>
                "Pemetery gave our clinic a way to honour every patient we lose. The
                families feel itand so do we."
              </div>
              <div className='testimonial-author'>
                <div className='testimonial-avatar'>🌿</div>
                <div>
                  <div className='testimonial-name'>Dr. Amara Wells</div>
                  <div className='testimonial-role'>
                    Veterinarian · Oakfield Animal Hospital
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Trust strip */}
          <div className='trust-strip'>
            {[
              { icon: "🔒", label: "GDPR Encrypted" },
              { icon: "⏱", label: "60s Setup" },
              { icon: "🌿", label: "Ethically Designed" },
            ].map((t) => (
              <div className='trust-item' key={t.label}>
                <div className='trust-icon'>{t.icon}</div>
                <span className='trust-label'>{t.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT PANEL ───────────────────────────────────── */}
        <div className='panel-right'>
          {/* Candle ornament */}
          <div className='candle-wrap'>
            <div className='candle-flame' />
            <div className='candle-body' />
            <div className='candle-base' />
          </div>

          <div className='form-card'>
            {/* Mobile logo */}
            <div className='mobile-logo'>
              <div className='logo-icon' style={{ width: 40, height: 40 }}>
                <PawIcon size={20} />
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: 20,
                  color: "var(--cream)",
                  fontWeight: 600,
                }}
              >
                Pemetery
              </span>
            </div>

            {/* Step indicator */}
            <div className='step-eyebrow'>
              <div className='step-pill'>
                {["email", "otp", "consent"].map((s, i) => {
                  const steps = ["email", "otp", "consent"];
                  const currentIdx = steps.indexOf(step);
                  const thisIdx = i;
                  return (
                    <div
                      key={s}
                      className={`step-dot ${thisIdx === currentIdx ? "active" : thisIdx < currentIdx ? "done" : "upcoming"}`}
                    />
                  );
                })}
              </div>
              <span
                style={{
                  fontSize: 11,
                  color: "rgba(255,255,255,0.2)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                Step {["email", "otp", "consent"].indexOf(step) + 1} of 3
              </span>
            </div>

            {/* Title */}
            <AnimatePresence mode='wait'>
              <motion.div
                key={step + "-title"}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.25 }}
              >
                <h1 className='form-title'>{stepLabels[step].title}</h1>
                <p
                  className='form-sub'
                  dangerouslySetInnerHTML={{
                    __html: stepLabels[step].sub.replace(
                      email,
                      `<span>${email}</span>`,
                    ),
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* ── STEP: EMAIL ── */}
            <AnimatePresence mode='wait'>
              {step === "email" && (
                <motion.form
                  key='email-step'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28 }}
                  onSubmit={handleEmailSubmit}
                >
                  <div className='field-wrap'>
                    <label className='field-label'>Email address</label>
                    <div className='field-inner'>
                      <span className='field-icon'><i className='fa-solid fa-envelope' /></span>
                      <input
                        className='field-input'
                        type='email'
                        placeholder='you@example.com'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoFocus
                      />
                    </div>
                  </div>

                  <div className='row-flex'>
                    <label className='check-label'>
                      <input type='checkbox' className='check-box' />
                      <span className='check-text'>Keep me signed in</span>
                    </label>
                    <a href='#' className='link-gold'>
                      Forgot password?
                    </a>
                  </div>

                  <button type='submit' className='btn-primary' disabled={loading}>
                    {loading ? (
                      <span>
                        Sending code{" "}
                        <span
                          className='spinning'
                          style={{ display: "inline-block" }}
                        >
                          ◌
                        </span>
                      </span>
                    ) : (
                      "Continue with Email →"
                    )}
                  </button>
                </motion.form>
              )}

              {/* ── STEP: OTP ── */}
              {step === "otp" && (
                <motion.div
                  key='otp-step'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28 }}
                >
                  <OtpInput value={otp} onChange={setOtp} />

                  <p
                    style={{
                      textAlign: "center",
                      fontSize: 11,
                      color: "rgba(255,255,255,0.22)",
                      marginTop: 12,
                      marginBottom: 20,
                      display: "flex",
                      justifyContent: "center",
                      gap: 6,
                    }}
                  >
                    <span>Expires in 10 min</span>
                    <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
                    <span>Max 5 attempts</span>
                  </p>

                  <button
                    className='btn-primary'
                    onClick={handleOtpSubmit}
                    disabled={otp.length < 4}
                  >
                    Verify Code ✓
                  </button>
                  <button className='btn-ghost' onClick={() => setStep("email")}>
                    ← Use a different email
                  </button>
                </motion.div>
              )}

              {/* ── STEP: CONSENT ── */}
              {step === "consent" && (
                <motion.div
                  key='consent-step'
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.28 }}
                >
                  <div className='consent-box'>
                    <label className='consent-inner' style={{ cursor: "pointer" }}>
                      <input
                        type='checkbox'
                        className='check-box'
                        style={{ marginTop: 2, flexShrink: 0 }}
                        checked={consented}
                        onChange={(e) => setConsented(e.target.checked)}
                      />
                      <span className='consent-text'>
                        I have read and agree to the{" "}
                        <Link to='/privacy-policy'>Privacy Policy</Link> and{" "}
                        <Link to='/terms-of-service'>Terms of Service</Link>. I
                        understand how my data will be processed with care and
                        transparency.
                      </span>
                    </label>
                  </div>

                  <div className='consent-footnote'>
                    <LeafIcon className='consent-leaf' />
                    Your consent is timestamped and stored securely in our encrypted
                    vault.
                  </div>

                  <button
                    className='btn-primary'
                    onClick={() => {
                      if (!consented) return;
                      setLoading(true);
                      const user = login(email, "memorial_owner");
                      const from = location.state?.from?.pathname;
                      setTimeout(() => {
                        setLoading(false);
                        navigate(isDashboardPath(from) ? from : getDashboardPath(user), { replace: true });
                      }, 600);
                    }}
                    disabled={!consented || loading}
                  >
                    {loading ? (
                      <span>
                        Entering garden{" "}
                        <span
                          className='spinning'
                          style={{ display: "inline-block" }}
                        >
                          ◌
                        </span>
                      </span>
                    ) : (
                      "Accept & Enter →"
                    )}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* ── HOME BUTTON (when not logged in) ── */}
            <Link
              to='/'
              className='demo-btn mt-3'
              style={{ textDecoration: "none", marginBottom: 12 }}
            >
              <div className='demo-icon'>
                <i className='fa-solid fa-house' style={{ color: "var(--gold)" }} />
              </div>
              <div className='demo-info'>
                <span className='demo-role'>Back to Home</span>
                <div className='demo-email'>Return to Pemetery homepage</div>
              </div>
              <span className='demo-arrow'>→</span>
            </Link>

            {/* ── DEMO ACCESS ── */}
            <div className='divider-row'>
              <div className='divider-line' />
              <span className='divider-text'>Quick demo access</span>
              <div className='divider-line' />
            </div>

            {demoAccounts.map((d) => (
              <button
                key={d.email}
                type='button'
                className={`demo-btn ${activeDemo === d.email ? "active-demo" : ""}`}
                onClick={() => {
                  setActiveDemo(d.email);
                  const user = login(d.email, d.role);
                  const from = location.state?.from?.pathname;
                  navigate(isDashboardPath(from) ? from : getDashboardPath(user), { replace: true });
                }}
              >
                <div className='demo-icon'><i className={d.icon} /></div>
                <div className='demo-info'>
                  <span className='demo-role'>{d.label}</span>
                  <div className='demo-email'>{d.email}</div>
                </div>
                <span className='demo-arrow'>→</span>
              </button>
            ))}

            {/* Footer */}
            <div
              style={{
                marginTop: 28,
                textAlign: "center",
                fontSize: 11,
                color: "rgba(255,255,255,0.18)",
                lineHeight: 1.7,
              }}
            >
              New to Pemetery?{" "}
              <a
                href='#'
                style={{ color: "rgba(201,169,110,0.6)", textDecoration: "none" }}
              >
                Request clinic access
              </a>
              <br />
              <span>© 2025 Pemetery · A peaceful place for every companion.</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
