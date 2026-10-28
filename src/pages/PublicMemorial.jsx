import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { mockMemorials, mockMemories } from '@/utils/mockData';
import PublicHeader from '@/components/shared/PublicHeader';
import Footer from '@/components/shared/Footer';
import { useState } from 'react';
import toast from 'react-hot-toast';

const PublicMemorial = () => {
  const { slug } = useParams();
  const memorial = mockMemorials.find(m => m.slug === slug || m.id === slug);
  const memories = mockMemories.filter(m => m.memorialId === memorial?.id);
  const [candles, setCandles] = useState(memorial?.candleCount || 0);
  const [tears, setTears] = useState(memorial?.tearCount || 0);
  const [tab, setTab] = useState('timeline');

  if (!memorial) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <PublicHeader />
        <div className="flex-1 flex items-center justify-center pt-20">
          <div className="text-center">
            <div className="icon-box w-16 h-16 rounded-2xl mx-auto mb-5">
              <i className="fa-solid fa-paw text-accent text-2xl" />
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">Memorial Not Found</h1>
            <p className="text-muted-foreground mt-2 text-sm">This memorial may be private or no longer available.</p>
          </div>
        </div>
      </div>
    );
  }

  const speciesIcon = { Dog: 'fa-solid fa-dog', Cat: 'fa-solid fa-cat' };
  const icon = speciesIcon[memorial.species] || 'fa-solid fa-paw';
  const birthYear = memorial.birthDate ? new Date(memorial.birthDate).getFullYear() : null;
  const passYear = new Date(memorial.passingDate).getFullYear();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <PublicHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden border-b border-border">
          <div className="absolute inset-0" style={{ background: 'var(--gradient-hero)' }} />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-40" />
          <div className="calm-container py-16 sm:py-24 text-center relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <div className="w-20 h-20 rounded-3xl bg-white/15 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 border border-white/10">
                <i className={`${icon} text-3xl text-white`} />
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">{memorial.petName}</h1>
              <p className="text-white/65 mt-3 text-[15px]">
                {memorial.species}{memorial.breed ? ` · ${memorial.breed}` : ''} · {birthYear ? `${birthYear} – ${passYear}` : passYear}
              </p>
              <p className="text-sm text-white/50 mt-2 flex items-center justify-center gap-1.5">
                <i className="fa-solid fa-heart text-[9px]" /> Remembered by {memorial.ownerName}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Rituals */}
        <section id="rituals" className="calm-container py-8">
          <div className="flex items-center justify-center gap-4">
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => { setCandles(c => c + 1); toast.success('A candle has been lit 🕯️'); }}
              className="stat-card flex items-center gap-3 px-6 py-4 cursor-pointer">
              <div className="icon-box-warm w-10 h-10 rounded-xl">
                <i className="fa-solid fa-fire text-accent text-sm" />
              </div>
              <div className="text-left">
                <span className="text-lg font-bold text-foreground block leading-none">{candles}</span>
                <span className="text-[11px] text-muted-foreground">Candles</span>
              </div>
            </motion.button>
            <motion.button whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => { setTears(t => t + 1); toast.success('A tear has been shared 💧'); }}
              className="stat-card flex items-center gap-3 px-6 py-4 cursor-pointer">
              <div className="icon-box w-10 h-10 rounded-xl">
                <i className="fa-solid fa-droplet text-accent text-sm" />
              </div>
              <div className="text-left">
                <span className="text-lg font-bold text-foreground block leading-none">{tears}</span>
                <span className="text-[11px] text-muted-foreground">Tears</span>
              </div>
            </motion.button>
          </div>
        </section>

        {/* Tabs + Content */}
        <section className="calm-container pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
          <div className="flex gap-1 bg-muted rounded-xl p-1.5 mb-10">
            {['timeline', 'gallery'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`flex-1 py-2.5 text-sm rounded-lg font-semibold transition-all ${tab === t ? 'bg-card text-foreground shadow-sm' : 'text-muted-foreground hover:text-foreground'}`}>
                <i className={`fa-solid ${t === 'timeline' ? 'fa-clock-rotate-left' : 'fa-images'} mr-2 text-xs`} />
                {t.charAt(0).toUpperCase() + t.slice(1)}
              </button>
            ))}
          </div>

          {tab === 'timeline' && (
            <div className="space-y-4">
              {memories.length > 0 ? memories.map(mem => (
                <motion.div key={mem.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="pro-card p-6">
                  <p className="text-sm text-foreground leading-relaxed">{mem.content}</p>
                  {mem.images?.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                      {mem.images.map((img, i) => (
                        <a key={i} href={img} target="_blank" rel="noopener noreferrer" className="aspect-square rounded-xl overflow-hidden bg-muted">
                          <img src={img} alt={`Memory ${i + 1}`} className="w-full h-full object-cover" />
                        </a>
                      ))}
                    </div>
                  )}
                  <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <i className="fa-solid fa-user text-[9px]" /> {mem.authorName}
                    </span>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                      <i className="fa-regular fa-calendar text-[9px]" /> {mem.createdAt}
                    </span>
                  </div>
                </motion.div>
              )) : (
                <div className="text-center py-14">
                  <i className="fa-regular fa-message text-3xl text-muted-foreground/30 mb-3 block" />
                  <p className="text-sm text-muted-foreground">No memories shared yet.</p>
                </div>
              )}
            </div>
          )}

          {tab === 'gallery' && (
            <>
              {(() => {
                const galleryImages = memories.filter(m => m.images?.length > 0).flatMap(m => m.images);
                return galleryImages.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {galleryImages.map((url, i) => (
                      <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="aspect-square rounded-xl overflow-hidden bg-muted group">
                        <img src={url} alt={`Gallery ${i + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform" />
                      </a>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-14">
                    <i className="fa-regular fa-images text-3xl text-muted-foreground/30 mb-3 block" />
                    <p className="text-sm text-muted-foreground">No photos uploaded yet.</p>
                  </div>
                );
              })()}
            </>
          )}
          </div>

          {/* Right: Tips & Suggestions */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <div className="pro-card p-6">
              <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
                <i className="fa-solid fa-lightbulb text-accent text-xs" /> Honor {memorial.petName}
              </h3>
              <div className="space-y-4">
                <a href="#rituals" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
                  <div className="icon-box-warm w-10 h-10 rounded-xl shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-fire text-accent text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Light a candle</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">A gentle way to show you&apos;re thinking of them.</p>
                  </div>
                </a>
                <a href="#rituals" className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
                  <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-droplet text-accent text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Share a tear</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Express your sympathy with a virtual tear.</p>
                  </div>
                </a>
                <button type="button" onClick={() => setTab('timeline')} className="w-full flex items-center gap-3 hover:opacity-90 transition-opacity group text-left">
                  <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-pen text-accent text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Add a memory</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Share your favorite moment or story.</p>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => {
                    if (navigator.share) {
                      navigator.share({ title: memorial.petName, url: window.location.href, text: `Remembering ${memorial.petName}` });
                    } else {
                      navigator.clipboard?.writeText(window.location.href);
                      toast.success('Link copied to clipboard');
                    }
                  }}
                  className="w-full flex items-center gap-3 hover:opacity-90 transition-opacity group text-left"
                >
                  <div className="icon-box w-10 h-10 rounded-xl shrink-0 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <i className="fa-solid fa-share-nodes text-accent text-sm" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Share this memorial</p>
                    <p className="text-[12px] text-muted-foreground mt-0.5">Let others know about this tribute page.</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default PublicMemorial;
