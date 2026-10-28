import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { mockGuidedPrompts } from '@/utils/mockData';

const Journal = () => {
  const [entries, setEntries] = useState([
    { id: '1', title: 'Missing you today', content: 'The house is so quiet without you...', createdAt: '2025-02-15' },
    { id: '2', title: 'A letter to Buddy', content: 'Dear Buddy, I wanted to tell you about the walk I took today at our favorite park...', createdAt: '2025-02-10' },
  ]);
  const [writing, setWriting] = useState(false);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [mode, setMode] = useState('journal');

  const save = () => {
    if (!content.trim()) return;
    setEntries(prev => [{ id: Date.now().toString(), title: title || (mode === 'letter' ? 'Letter to Pet' : 'Untitled'), content, createdAt: new Date().toISOString().slice(0, 10) }, ...prev]);
    setTitle(''); setContent(''); setWriting(false);
    toast.success('Entry saved to your private journal');
  };

  const tips = [
    { icon: "fa-solid fa-pen", text: "Write when you feel moved — there's no schedule to follow." },
    { icon: "fa-solid fa-envelope", text: "Letters to your pet can be especially healing during anniversaries." },
    { icon: "fa-solid fa-lightbulb", text: "Try a guided prompt if you're not sure where to start." },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="w-full min-w-0">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">Private Journal</h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center gap-2">
            <i className="fa-solid fa-lock text-[10px] text-accent" /> Only you can see this
          </p>
        </div>
      </div>

      {!writing ? (
        <div className="flex flex-wrap gap-3 mb-10">
          <button onClick={() => { setMode('journal'); setWriting(true); }} className="pro-btn-primary text-sm">
            <i className="fa-solid fa-pen text-xs" /> Write Entry
          </button>
          <button onClick={() => { setMode('letter'); setTitle("Dear friend, I miss you..."); setWriting(true); }} className="pro-btn-secondary text-sm">
            <i className="fa-solid fa-envelope text-xs" /> Letter to Pet
          </button>
          <button onClick={() => { setTitle(mockGuidedPrompts[Math.floor(Math.random() * mockGuidedPrompts.length)]); setWriting(true); }} className="pro-btn-secondary text-sm">
            <i className="fa-solid fa-lightbulb text-xs" /> Guided Prompt
          </button>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pro-card mb-10 overflow-hidden">
          {mode === 'letter' && (
            <div className="px-6 py-3 border-b border-border" style={{ background: 'hsl(var(--brand-warm-light))' }}>
              <p className="text-[11px] text-muted-foreground flex items-center gap-2">
                <i className="fa-solid fa-heart text-accent text-[9px]" /> You're writing a letter. Take all the time you need.
              </p>
            </div>
          )}
          <div className="p-6">
            <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Title (optional)"
              className="w-full text-lg font-display font-semibold text-foreground bg-transparent border-none outline-none mb-4 placeholder:text-muted-foreground/40" autoFocus />
            <textarea value={content} onChange={e => setContent(e.target.value)}
              placeholder={mode === 'letter' ? "Write your letter here..." : "Write freely... there's no wrong way to feel."}
              className="w-full h-52 bg-transparent border-none outline-none text-sm text-foreground leading-relaxed resize-none placeholder:text-muted-foreground/40" />
          </div>
          <div className="flex items-center justify-between px-6 py-4 border-t border-border bg-muted/30">
            <div className="flex items-center gap-4">
              <button onClick={() => { setWriting(false); setTitle(''); setContent(''); }} className="text-sm text-muted-foreground hover:text-foreground font-medium">Cancel</button>
              <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                <i className="fa-solid fa-cloud-arrow-up text-[9px] text-accent" /> Auto-saving
              </span>
            </div>
            <button onClick={save} className="pro-btn-primary py-2.5 text-sm">
              <i className="fa-solid fa-check text-xs" /> Save
            </button>
          </div>
        </motion.div>
      )}

      <div className="space-y-3">
        {entries.map((entry, i) => (
          <motion.div key={entry.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
            className="pro-card p-6 hover:shadow-md transition-all duration-200 group cursor-pointer">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground text-[15px] group-hover:text-accent transition-colors">{entry.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-2 leading-relaxed">{entry.content}</p>
              </div>
              <span className="text-[11px] text-muted-foreground shrink-0 flex items-center gap-1.5">
                <i className="fa-regular fa-calendar text-[9px]" /> {entry.createdAt}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="lg:sticky lg:top-24 space-y-6">
      <div className="pro-card p-6">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
          <i className="fa-solid fa-lightbulb text-accent text-xs" /> Tips & Suggestions
        </h3>
        <div className="space-y-4">
          {tips.map((tip, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="icon-box w-9 h-9 rounded-xl shrink-0">
                <i className={`${tip.icon} text-accent text-xs`} />
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{tip.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="pro-card p-6 border-l-4 border-l-accent">
        <h3 className="text-sm font-semibold text-foreground mb-2">Private & Safe</h3>
        <p className="text-[12px] text-muted-foreground">
          Your journal is for your eyes only. Write freely — nothing is judged or shared.
        </p>
      </div>
    </div>
    </div>
  );
};

export default Journal;
