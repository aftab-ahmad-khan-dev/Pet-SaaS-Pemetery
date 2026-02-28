import { useState } from "react";
import { useParams, Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { mockMemorials, mockMemories } from "@/utils/mockData";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";

const OwnerMemorial = () => {
  const { slug } = useParams();
  const [searchParams] = useSearchParams();
  const memorial = mockMemorials.find(
    (m) => m.slug === slug || m.id === slug
  );
  const memories = mockMemories.filter((m) => m.memorialId === memorial?.id);
  const [candles, setCandles] = useState(memorial?.candleCount || 0);
  const [tears, setTears] = useState(memorial?.tearCount || 0);
  const [tab, setTab] = useState("timeline");
  const [addMemoryOpen, setAddMemoryOpen] = useState(searchParams.get("add") === "true");
  const [memoryContent, setMemoryContent] = useState("");
  const [localMemories, setLocalMemories] = useState(memories);
  const [localFavourite, setLocalFavourite] = useState(false);

  if (!memorial) {
    return (
      <div className="text-center py-20">
        <div className="icon-box w-16 h-16 rounded-2xl mx-auto mb-5">
          <i className="fa-solid fa-paw text-accent text-2xl" />
        </div>
        <h1 className="font-display text-2xl font-bold text-foreground">
          Memorial Not Found
        </h1>
        <p className="text-muted-foreground mt-2 text-sm mb-6">
          This memorial may be private or no longer available.
        </p>
        <Link to="/dashboard/owner" className="pro-btn-primary">
          Back to My Memorials
        </Link>
      </div>
    );
  }

  const speciesIcon = {
    Dog: "fa-solid fa-dog",
    Cat: "fa-solid fa-cat",
  };
  const icon = speciesIcon[memorial.species] || "fa-solid fa-paw";
  const birthYear = memorial.birthDate
    ? new Date(memorial.birthDate).getFullYear()
    : null;
  const passYear = new Date(memorial.passingDate).getFullYear();

  const handleAddMemory = () => {
    if (!memoryContent.trim()) return;
    const newMem = {
      id: `mem${Date.now()}`,
      memorialId: memorial.id,
      authorName: "Sarah Mitchell",
      content: memoryContent.trim(),
      createdAt: new Date().toLocaleDateString("en-US"),
      images: [],
    };
    setLocalMemories((prev) => [newMem, ...prev]);
    setMemoryContent("");
    setAddMemoryOpen(false);
    toast.success("Memory added.");
  };

  const handleContactOwner = () => {
    const email = memorial.ownerEmail || "support@pemetery.com";
    window.location.href = `mailto:${email}?subject=Regarding ${memorial.petName}'s memorial`;
    toast.success("Opening email...");
  };

  const allGalleryImages = localMemories
    .filter((m) => m.images?.length > 0)
    .flatMap((m) =>
      m.images.map((img, i) => ({ url: img, memoryId: m.id, index: i }))
    );

  return (
    <div className="w-full">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <Link
          to="/dashboard/owner"
          className="text-sm text-muted-foreground hover:text-accent inline-flex items-center gap-1"
        >
          <i className="fa-solid fa-arrow-left text-[10px]" /> My Memorials
        </Link>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLocalFavourite(!localFavourite)}
            className={`pro-btn-ghost text-sm py-2 px-3 ${localFavourite ? "text-accent" : ""}`}
          >
            <i
              className={`fa-${localFavourite ? "solid" : "regular"} fa-heart text-xs mr-1`}
            />
            {localFavourite ? "Favourited" : "Favourite"}
          </button>
          <button
            onClick={handleContactOwner}
            className="pro-btn-secondary text-sm py-2 px-3"
          >
            <i className="fa-solid fa-envelope text-[10px] mr-1" /> Contact owner
          </button>
        </div>
      </div>

      {/* Hero card */}
      <div className="pro-card p-6 mb-8">
        <div className="flex items-start gap-5">
          <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
            <i className={`${icon} text-2xl text-accent`} />
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
              {memorial.petName}
            </h1>
            <p className="text-sm text-muted-foreground mt-1">
              {memorial.species}
              {memorial.breed ? ` · ${memorial.breed}` : ""} ·{" "}
              {birthYear ? `${birthYear} – ${passYear}` : passYear}
            </p>
            <p className="text-xs text-muted-foreground mt-0.5 flex items-center gap-1.5">
              <i className="fa-solid fa-heart text-[9px]" /> Remembered by{" "}
              {memorial.ownerName}
            </p>
          </div>
        </div>
        <div className="flex gap-4 mt-6 pt-5 border-t border-border">
          <button
            onClick={() => {
              setCandles((c) => c + 1);
              toast.success("A candle has been lit 🕯️");
            }}
            className="stat-card flex items-center gap-3 px-5 py-3 cursor-pointer"
          >
            <i className="fa-solid fa-fire text-accent text-sm" />
            <span className="font-bold text-foreground">{candles}</span>
            <span className="text-[11px] text-muted-foreground">Candles</span>
          </button>
          <button
            onClick={() => {
              setTears((t) => t + 1);
              toast.success("A tear has been shared 💧");
            }}
            className="stat-card flex items-center gap-3 px-5 py-3 cursor-pointer"
          >
            <i className="fa-solid fa-droplet text-accent text-sm" />
            <span className="font-bold text-foreground">{tears}</span>
            <span className="text-[11px] text-muted-foreground">Tears</span>
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 bg-muted rounded-xl p-1.5 mb-6">
        {["timeline", "gallery"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2.5 text-sm rounded-lg font-semibold transition-all ${
              tab === t ? "bg-card text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            <i
              className={`fa-solid ${t === "timeline" ? "fa-clock-rotate-left" : "fa-images"} mr-2 text-xs`}
            />
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* Timeline */}
      {tab === "timeline" && (
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-sm font-semibold text-foreground">Memories</h2>
            <button
              onClick={() => setAddMemoryOpen(true)}
              className="pro-btn-primary text-sm py-2 px-4"
            >
              <i className="fa-solid fa-plus text-xs mr-1" /> Add a memory
            </button>
          </div>
          {localMemories.length > 0 ? (
            localMemories.map((mem) => (
              <motion.div
                key={mem.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                className="pro-card p-6"
              >
                <p className="text-sm text-foreground leading-relaxed">
                  {mem.content}
                </p>
                {mem.images?.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-4">
                    {mem.images.map((img, i) => (
                      <a
                        key={i}
                        href={img}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="aspect-square rounded-xl overflow-hidden bg-muted"
                      >
                        <img
                          src={img}
                          alt={`Memory ${i + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </a>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-border">
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <i className="fa-solid fa-user text-[9px]" /> {mem.authorName}
                  </span>
                  <span className="text-[11px] text-muted-foreground flex items-center gap-1.5">
                    <i className="fa-regular fa-calendar text-[9px]" />{" "}
                    {mem.createdAt}
                  </span>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="pro-card p-12 text-center">
              <i className="fa-regular fa-message text-3xl text-muted-foreground/30 mb-3 block" />
              <p className="text-sm text-muted-foreground mb-4">
                No memories shared yet.
              </p>
              <button
                onClick={() => setAddMemoryOpen(true)}
                className="pro-btn-primary"
              >
                <i className="fa-solid fa-plus text-xs mr-1" /> Add a memory
              </button>
            </div>
          )}
        </div>
      )}

      {/* Gallery */}
      {tab === "gallery" && (
        <div className="pro-card p-6">
          {allGalleryImages.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {allGalleryImages.map(({ url }, i) => (
                <a
                  key={i}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="aspect-square rounded-xl overflow-hidden bg-muted group"
                >
                  <img
                    src={url}
                    alt={`Gallery ${i + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                  />
                </a>
              ))}
            </div>
          ) : (
            <div className="text-center py-14">
              <i className="fa-regular fa-images text-3xl text-muted-foreground/30 mb-3 block" />
              <p className="text-sm text-muted-foreground">
                No photos uploaded yet. Add memories with photos in the Timeline
                tab.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Add memory modal */}
      <Dialog open={addMemoryOpen} onOpenChange={setAddMemoryOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Add a memory</DialogTitle>
            <DialogDescription>
              Share a story or moment about {memorial.petName}. Others who visit
              this memorial can see it.
            </DialogDescription>
          </DialogHeader>
          <textarea
            value={memoryContent}
            onChange={(e) => setMemoryContent(e.target.value)}
            placeholder="What would you like to share?"
            className="pro-input resize-none h-32 w-full"
            autoFocus
          />
          <DialogFooter>
            <button
              onClick={() => setAddMemoryOpen(false)}
              className="pro-btn-ghost"
            >
              Cancel
            </button>
            <button
              onClick={handleAddMemory}
              disabled={!memoryContent.trim()}
              className="pro-btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Add memory
            </button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default OwnerMemorial;
