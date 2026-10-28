import { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmAlert from '@/components/shared/ConfirmAlert';

const ModerationQueue = () => {
  const [removeTarget, setRemoveTarget] = useState(null);
  const [items, setItems] = useState([
    {
      id: 'mod1',
      content: 'Flagged memory pending review',
      memorial: 'Buddy',
      reportedAt: '2025-02-26',
      reporter: 'Guest user',
    },
    {
      id: 'mod2',
      content: 'Image requires manual review',
      memorial: 'Luna',
      reportedAt: '2025-02-27',
      reporter: 'Automated filter',
    },
  ]);

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Moderation</h1>
        <p className="text-sm text-muted-foreground mt-1">Review and resolve reported community content.</p>
      </div>

      <div className="pro-card divide-y divide-border">
        {items.map((item) => (
          <div key={item.id} className="px-6 py-5 flex items-start gap-4">
            <div className="icon-box-warm w-10 h-10 rounded-xl shrink-0">
              <i className="fa-solid fa-flag text-accent text-xs" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-foreground">{item.content}</h3>
              <p className="text-[11px] text-muted-foreground mt-1">{item.memorial} · Reported {item.reportedAt} · {item.reporter}</p>
            </div>
            <button
              onClick={() => setRemoveTarget(item)}
              className="pro-btn-ghost text-xs text-destructive hover:text-destructive"
            >
              <i className="fa-solid fa-trash text-[10px]" /> Remove
            </button>
          </div>
        ))}
      </div>

      <ConfirmAlert
        open={!!removeTarget}
        onOpenChange={(open) => !open && setRemoveTarget(null)}
        title="Remove Content"
        description={`Remove "${removeTarget?.content}" from ${removeTarget?.memorial}'s memorial? This action cannot be undone.`}
        confirmLabel="Remove"
        cancelLabel="Cancel"
        onConfirm={() => {
          if (removeTarget) {
            setItems((prev) => prev.filter((i) => i.id !== removeTarget.id));
            toast.success('Content removed');
          }
        }}
        variant="destructive"
      />
    </div>
  );
};

export default ModerationQueue;
