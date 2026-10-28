import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative">
      <div className="absolute inset-0 mesh-bg pointer-events-none" />
      <div className="text-center calm-container relative z-10">
        <div className="icon-box w-20 h-20 rounded-3xl mx-auto mb-6">
          <i className="fa-solid fa-compass text-accent text-3xl" />
        </div>
        <h1 className="font-display text-6xl font-bold text-foreground mb-3">404</h1>
        <p className="text-muted-foreground mb-8 text-[15px]">This page doesn't exist or has been moved.</p>
        <Link to="/" className="pro-btn-primary px-8 py-3.5">
          <i className="fa-solid fa-arrow-left text-xs" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
