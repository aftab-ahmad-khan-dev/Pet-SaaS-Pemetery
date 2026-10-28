import { useState, useEffect, useRef } from "react";
import { getCurrentUser } from "@/utils/auth";
import { useNavigate } from "react-router-dom";
import { logout } from "@/utils/auth";
import { mockNotifications } from "@/utils/mockData";

export default function DashboardHeader() {
  const user = getCurrentUser();
  const navigate = useNavigate();
  const [showProfile, setShowProfile] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [notifications, setNotifications] = useState(mockNotifications);

  const unreadCount = notifications.filter((n) => !n.read).length;

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((n) => (n.id === id ? { ...n, read: true } : n)),
    );
  };

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, read: true })));
  };

  const notifRef = useRef(null);
  const profileRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        notifRef.current &&
        !notifRef.current.contains(e.target) &&
        profileRef.current &&
        !profileRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
        setShowProfile(false);
      }
    };
    if (showNotifications || showProfile) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showNotifications, showProfile]);

  const roleLabel =
    user?.role === "clinic_admin" || user?.role === "vet_staff"
      ? "Clinic"
      : user?.role === "platform_admin"
        ? "Admin"
        : "Pet Owner";
  const displayName = user?.name || roleLabel;
  const today = new Date();
  const dayName = today.toLocaleDateString("en-US", { weekday: "long" });
  const dateStr = today.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="hidden lg:flex items-center justify-between gap-4 px-4 py-3 border-b border-sidebar-border bg-card/50 backdrop-blur-sm sticky top-0 z-20">
      <div className="min-w-0">
        <h2 className="text-sm font-semibold text-foreground truncate">
          Hello, {displayName}
        </h2>
        <p className="text-[11px] text-muted-foreground">
          {dayName}, {dateStr}
        </p>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        {/* Notification dropdown */}
        <div className="relative" ref={notifRef}>
          <button
            onClick={() => setShowNotifications((v) => !v)}
            className="relative w-10 h-10 rounded-xl flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-label="Notifications"
          >
            <i className="fa-regular fa-bell text-sm" />
            {unreadCount > 0 && (
              <span className="absolute top-2 right-2 min-w-[18px] h-[18px] px-1 rounded-full bg-accent text-accent-foreground text-[10px] font-bold flex items-center justify-center">
                {unreadCount > 9 ? "9+" : unreadCount}
              </span>
            )}
          </button>

          {showNotifications && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowNotifications(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-full mt-2 w-80 max-h-[400px] flex flex-col rounded-xl bg-card border border-border shadow-lg z-50 overflow-hidden">
                <div className="px-4 py-3 border-b border-border flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-foreground">
                    Notifications
                  </h3>
                  {unreadCount > 0 && (
                    <button
                      onClick={markAllAsRead}
                      className="text-xs font-medium text-accent hover:text-accent/80 transition-colors"
                    >
                      Mark all as read
                    </button>
                  )}
                </div>
                <div className="overflow-y-auto max-h-[320px]">
                  {notifications.length === 0 ? (
                    <div className="px-4 py-8 text-center text-sm text-muted-foreground">
                      No notifications
                    </div>
                  ) : (
                    notifications.map((n) => (
                      <div
                        key={n.id}
                        className={`px-4 py-3 flex items-start gap-3 hover:bg-muted/50 transition-colors border-b border-border last:border-b-0 ${
                          !n.read ? "bg-accent/5" : ""
                        }`}
                      >
                        <div className="icon-box w-8 h-8 rounded-lg shrink-0 mt-0.5">
                          <i
                            className={`${n.icon} text-accent text-[10px]`}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-[13px] text-foreground leading-snug">
                            {n.text}
                          </p>
                          <p className="text-[11px] text-muted-foreground mt-0.5">
                            {n.time}
                          </p>
                        </div>
                        {!n.read && (
                          <button
                            onClick={() => markAsRead(n.id)}
                            className="text-[10px] font-medium text-accent hover:underline shrink-0"
                          >
                            Mark read
                          </button>
                        )}
                      </div>
                    ))
                  )}
                </div>
              </div>
            </>
          )}
        </div>

        {/* Profile */}
        <div className="relative" ref={profileRef}>
          <button
            onClick={() => setShowProfile((v) => !v)}
            className="flex items-center gap-2 px-2 py-1.5 rounded-xl hover:bg-muted transition-colors"
            aria-label="Profile"
          >
            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center text-xs font-bold text-white shrink-0"
              style={{ background: "var(--gradient-cta)" }}
            >
              {user?.name?.charAt(0) || "?"}
            </div>
            <span className="text-sm font-medium text-foreground hidden xl:block truncate max-w-[120px]">
              {user?.name}
            </span>
            <i className="fa-solid fa-chevron-down text-[10px] text-muted-foreground hidden xl:block" />
          </button>

          {showProfile && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setShowProfile(false)}
                aria-hidden="true"
              />
              <div className="absolute right-0 top-full mt-2 w-48 py-2 rounded-xl bg-card border border-border shadow-lg z-50">
                <div className="px-4 py-2 border-b border-border">
                  <p className="text-sm font-semibold text-foreground truncate">{user?.name}</p>
                  <p className="text-[11px] text-muted-foreground truncate">{user?.email}</p>
                </div>
                <button
                  onClick={handleLogout}
                  className="w-full px-4 py-2.5 text-left text-sm text-muted-foreground hover:text-foreground hover:bg-muted flex items-center gap-2 transition-colors"
                >
                  <i className="fa-solid fa-right-from-bracket text-[10px]" />
                  Sign out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
