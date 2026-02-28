import { useState } from "react";
import toast from "react-hot-toast";
import { mockSupportRequests } from "@/utils/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

const statusConfig = {
  open: { label: "Open", class: "pro-badge-warning", icon: "fa-solid fa-circle-dot" },
  in_progress: { label: "In Progress", class: "pro-badge-neutral", icon: "fa-solid fa-spinner" },
  resolved: { label: "Resolved", class: "pro-badge-success", icon: "fa-solid fa-check-circle" },
};

const Support = () => {
  const [message, setMessage] = useState("");
  const [requests, setRequests] = useState(
    () => JSON.parse(JSON.stringify(mockSupportRequests))
  );
  const [viewRequest, setViewRequest] = useState(null);
  const [replyRequest, setReplyRequest] = useState(null);
  const [replyText, setReplyText] = useState("");

  const send = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    toast.success("Message sent. We'll respond within 24 hours.");
    setMessage("");
  };

  const handleView = (req) => setViewRequest(req);
  const handleReply = (req) => {
    setReplyRequest(req);
    setReplyText("");
  };

  const submitReply = () => {
    if (!replyText.trim()) return;
    toast.success(`Reply sent for: ${replyRequest.subject}`);
    setReplyRequest(null);
    setReplyText("");
  };

  const handleMarkResolved = (req) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === req.id ? { ...r, status: "resolved" } : r))
    );
    toast.success(`${req.subject} marked as resolved`);
  };

  return (
    <div className="w-full">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">Support</h1>
      <p className="text-sm text-muted-foreground mb-8">We&apos;re here to help. Reach out anytime.</p>

      <div className="pro-card p-6 mb-8">
        <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
          <i className="fa-solid fa-message text-accent text-xs" /> Send us a message
        </h2>
        <form onSubmit={send} className="space-y-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="How can we help?"
            className="pro-input resize-none h-28"
            required
          />
          <div className="flex items-center justify-between">
            <p className="text-xs text-muted-foreground">
              Or email{" "}
              <a href="mailto:support@pemetery.com" className="text-accent hover:underline">
                support@pemetery.com
              </a>
            </p>
            <button type="submit" className="pro-btn-primary py-2">
              <i className="fa-solid fa-paper-plane text-xs" /> Send
            </button>
          </div>
        </form>
      </div>

      <h2 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
        <i className="fa-solid fa-ticket text-accent text-xs" /> Recent Support Requests
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {requests.map((req) => {
          const cfg = statusConfig[req.status] || statusConfig.open;
          return (
            <div key={req.id} className="pro-card p-5 hover:shadow-md transition-all">
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-sm font-semibold text-foreground flex-1 min-w-0">{req.subject}</h3>
                <span className={`${cfg.class} text-[10px] shrink-0 flex items-center gap-1`}>
                  <i className={`${cfg.icon} text-[8px]`} /> {cfg.label}
                </span>
              </div>
              <p className="text-[12px] text-muted-foreground mb-4 line-clamp-2">{req.preview}</p>
              <div className="flex items-center justify-between">
                <span className="text-[10px] text-muted-foreground">
                  <i className="fa-regular fa-calendar text-[9px] mr-1" /> {req.updatedAt}
                </span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => handleView(req)}
                    className="pro-btn-ghost text-xs py-1.5 px-2.5"
                  >
                    <i className="fa-solid fa-eye text-[9px] mr-1" /> View
                  </button>
                  {req.status !== "resolved" && (
                    <>
                      <button
                        onClick={() => handleReply(req)}
                        className="pro-btn-ghost text-xs py-1.5 px-2.5"
                      >
                        <i className="fa-solid fa-reply text-[9px] mr-1" /> Reply
                      </button>
                      <button
                        onClick={() => handleMarkResolved(req)}
                        className="pro-btn-ghost text-xs py-1.5 px-2.5"
                      >
                        <i className="fa-solid fa-check-circle text-[9px] mr-1" /> Mark resolved
                      </button>
                    </>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* View request dialog */}
      <Dialog open={!!viewRequest} onOpenChange={(open) => !open && setViewRequest(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              {viewRequest && (
                <span className={statusConfig[viewRequest.status]?.class || statusConfig.open.class}>
                  <i className={`${statusConfig[viewRequest.status]?.icon || statusConfig.open.icon} text-[10px] mr-1`} />
                  {statusConfig[viewRequest.status]?.label || "Open"}
                </span>
              )}
              {viewRequest?.subject}
            </DialogTitle>
            <DialogDescription>
              <span className="text-[11px] text-muted-foreground">
                Created {viewRequest?.createdAt} · Updated {viewRequest?.updatedAt}
              </span>
            </DialogDescription>
          </DialogHeader>
          <p className="text-sm text-foreground whitespace-pre-wrap">{viewRequest?.preview}</p>
          <DialogFooter>
            {viewRequest?.status !== "resolved" && (
              <>
                <button
                  onClick={() => {
                    setViewRequest(null);
                    handleReply(viewRequest);
                  }}
                  className="pro-btn-primary text-sm py-2 px-3"
                >
                  <i className="fa-solid fa-reply text-[10px] mr-1" /> Reply
                </button>
                <button
                  onClick={() => {
                    handleMarkResolved(viewRequest);
                    setViewRequest(null);
                  }}
                  className="pro-btn-ghost text-sm py-2 px-3"
                >
                  Mark resolved
                </button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Reply dialog */}
      <Dialog open={!!replyRequest} onOpenChange={(open) => !open && setReplyRequest(null)}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Reply to: {replyRequest?.subject}</DialogTitle>
            <DialogDescription>Add your reply below. We&apos;ll respond within 24 hours.</DialogDescription>
          </DialogHeader>
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply..."
            className="pro-input resize-none h-32 w-full"
            autoFocus
          />
          <DialogFooter>
            <button
              onClick={() => setReplyRequest(null)}
              className="pro-btn-ghost"
            >
              Cancel
            </button>
            <button
              onClick={submitReply}
              disabled={!replyText.trim()}
              className="pro-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <i className="fa-solid fa-paper-plane text-xs mr-1" /> Send reply
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Support;
