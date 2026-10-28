import { useState } from 'react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';
import { mockMoodOptions } from '@/utils/mockData';

const MoodCheckin = () => {
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState('');
  const [history, setHistory] = useState([
    { mood: '😔', label: 'Missing them', note: 'Saw a golden retriever at the park', date: '2025-02-25' },
    { mood: '💛', label: 'Grateful', note: 'Looked through old photos', date: '2025-02-24' },
    { mood: '😢', label: 'Deeply sad', note: '', date: '2025-02-23' },
    { mood: '🌅', label: 'Hopeful', note: 'Had a peaceful morning', date: '2025-02-22' },
  ]);

  const submit = () => {
    if (!selected) return;
    const mood = mockMoodOptions.find(m => m.emoji === selected);
    setHistory(prev => [{ mood: selected, label: mood?.label || '', note, date: new Date().toISOString().slice(0, 10) }, ...prev]);
    toast.success('Check-in recorded. Thank you for sharing.');
    setSelected(null); setNote('');
  };

  const tips = [
    { icon: "fa-solid fa-heart", text: "Checking in regularly helps you notice patterns and progress over time." },
    { icon: "fa-solid fa-leaf", text: "There's no right or wrong way to feel. All emotions are valid." },
    { icon: "fa-solid fa-sun", text: "On difficult days, gentle self-care can make a difference." },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className="w-full min-w-0">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">How are you feeling?</h1>
      <p className="text-sm text-muted-foreground mb-8">There's no right or wrong answer. This is just for you.</p>

      <div className="pro-card overflow-hidden mb-10">
        <div className="p-6">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {mockMoodOptions.map(mood => (
              <button key={mood.emoji} onClick={() => setSelected(mood.emoji)}
                className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all text-center ${
                  selected === mood.emoji ? 'border-accent bg-accent/5 shadow-sm scale-105' : 'border-border hover:border-accent/20 hover:bg-muted/30'
                }`}>
                <span className="text-2xl mb-1.5">{mood.emoji}</span>
                <span className="text-[10px] text-muted-foreground leading-tight font-medium">{mood.label}</span>
              </button>
            ))}
          </div>
        </div>

        {selected && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }}
            className="px-6 pb-6 space-y-4">
            <textarea value={note} onChange={e => setNote(e.target.value)} placeholder="Add a note (optional)..."
              className="pro-input resize-none h-20" />
            <button onClick={submit} className="pro-btn-primary w-full py-3">
              <i className="fa-solid fa-check text-xs" /> Save Check-in
            </button>
          </motion.div>
        )}
      </div>

      <div className="flex items-center gap-3 mb-5">
        <div className="icon-box w-9 h-9 rounded-xl">
          <i className="fa-solid fa-chart-line text-accent text-xs" />
        </div>
        <h2 className="text-sm font-semibold text-foreground">Your Journey</h2>
      </div>
      <div className="space-y-2">
        {history.map((entry, i) => (
          <motion.div key={i} initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
            className="flex items-start gap-4 p-4 rounded-2xl bg-card border border-border hover:shadow-sm transition-all">
            <span className="text-xl mt-0.5">{entry.mood}</span>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-foreground">{entry.label}</span>
                <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                  <i className="fa-regular fa-calendar text-[9px]" /> {entry.date}
                </span>
              </div>
              {entry.note && <p className="text-[12px] text-muted-foreground mt-1 leading-relaxed">{entry.note}</p>}
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
        <h3 className="text-sm font-semibold text-foreground mb-2">Your Journey</h3>
        <p className="text-[12px] text-muted-foreground">
          You&apos;ve completed {history.length} check-ins. Keep taking care of yourself — grief ebbs and flows.
        </p>
      </div>
    </div>
    </div>
  );
};

export default MoodCheckin;
