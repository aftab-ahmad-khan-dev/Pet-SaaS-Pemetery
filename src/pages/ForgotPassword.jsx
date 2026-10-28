import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import Logo from "@/components/shared/Logo";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      toast.error("Please enter a valid email");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
      toast.success("Reset link sent to your email");
    }, 1000);
  };

  return (
    <div className='min-h-screen bg-background flex'>
      <div
        className='hidden lg:flex lg:w-[48%] relative overflow-hidden'
        style={{ background: "var(--gradient-cta)" }}
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className='absolute inset-0 flex flex-col justify-center px-16 relative z-10'>
          <Link to='/' className='flex items-center gap-3 mb-14'>
            <div className='w-11 h-11 rounded-2xl bg-white/15 backdrop-blur-sm flex items-center justify-center border border-white/10'>
              <Logo className='w-7 h-7' fill='white' />
            </div>
            <div>
              <span className='font-display text-xl font-bold text-white block leading-none'>
                Pemetery
              </span>
              <span className='text-[10px] text-white/50 tracking-widest uppercase'>
                Digital Aftercare
              </span>
            </div>
          </Link>
          <h2 className='font-display text-4xl font-bold leading-tight text-white'>
            Reset your password
          </h2>
          <p className='mt-5 text-base leading-relaxed text-white/65 max-w-md'>
            We'll send you a secure link to reset your password. Check your inbox and
            spam folder.
          </p>
          <div className='mt-12 flex flex-col gap-5'>
            {[
              {
                icon: "fa-solid fa-envelope-circle-check",
                text: "Secure link sent to your email",
              },
              { icon: "fa-solid fa-shield-halved", text: "Link expires in 1 hour" },
            ].map((item) => (
              <div key={item.text} className='flex items-center gap-3'>
                <div className='w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center'>
                  <i className={`${item.icon} text-xs text-white/80`} />
                </div>
                <span className='text-sm text-white/75 font-medium'>
                  {item.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className='flex-1 flex items-center justify-center px-6 py-12 relative'>
        <div className='absolute inset-0 mesh-bg pointer-events-none' />
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className='w-full max-w-[420px] relative z-10'
        >
          <div className='lg:hidden flex items-center gap-3 mb-10'>
            <Link to='/' className='flex items-center gap-3'>
              <div
                className='w-10 h-10 rounded-2xl flex items-center justify-center'
                style={{ background: "var(--gradient-cta)" }}
              >
                <Logo className='w-6 h-6' fill='white' />
              </div>
              <span className='font-display text-xl font-bold text-foreground'>
                Pemetery
              </span>
            </Link>
          </div>

          <h1 className='font-display text-3xl font-bold text-foreground'>
            {sent ? "Check your email" : "Forgot password?"}
          </h1>
          <p className='text-sm text-muted-foreground mt-2 mb-8'>
            {sent
              ? `We've sent a reset link to ${email}. Click the link to set a new password.`
              : "Enter your email and we'll send you a link to reset your password."}
          </p>

          <div className='pro-card p-7'>
            {sent ? (
              <div className='space-y-5'>
                <div className='flex justify-center py-4'>
                  <div className='w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center'>
                    <i className='fa-solid fa-envelope-open-text text-2xl text-accent' />
                  </div>
                </div>
                <Link
                  to='/login'
                  className='pro-btn-primary w-full py-3.5 text-center block'
                >
                  Back to Login{" "}
                  <i className='fa-solid fa-arrow-right text-xs ml-1' />
                </Link>
                <button
                  type='button'
                  onClick={() => setSent(false)}
                  className='w-full text-sm text-muted-foreground hover:text-foreground text-center py-2 font-medium'
                >
                  Use a different email
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className='space-y-5'>
                <div>
                  <label className='pro-label'>Email address</label>
                  <div className='relative'>
                    <i className='fa-solid fa-envelope absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm' />
                    <input
                      type='email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder='you@example.com'
                      className='pro-input pl-11'
                      required
                      autoFocus
                    />
                  </div>
                </div>
                <button
                  type='submit'
                  disabled={loading}
                  className='pro-btn-primary w-full py-3.5 disabled:opacity-50'
                >
                  {loading ? (
                    <>
                      <i className='fa-solid fa-spinner fa-spin text-sm' />{" "}
                      Sending...
                    </>
                  ) : (
                    <>
                      Send reset link{" "}
                      <i className='fa-solid fa-arrow-right text-xs' />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          <Link
            to='/login'
            className='mt-6 flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors'
          >
            <i className='fa-solid fa-arrow-left text-[10px]' /> Back to login
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ForgotPassword;
