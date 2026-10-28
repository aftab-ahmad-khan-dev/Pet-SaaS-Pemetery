import { mockResources } from "@/utils/mockData";
import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const Resources = () => {
  const categories = [...new Set(mockResources.map((r) => r.category))];
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState(0);
  const [selectedResource, setSelectedResource] = useState(null);

  useEffect(() => {
    if (categoryParam) {
      const idx = categories.indexOf(categoryParam);
      if (idx >= 0) setActiveTab(idx + 1);
    }
  }, [categoryParam]);

  const filtered = mockResources.filter(
    (r) =>
      (activeTab === 0 || r.category === categories[activeTab - 1]) &&
      (r.title.toLowerCase().includes(search.toLowerCase()) ||
        r.description.toLowerCase().includes(search.toLowerCase())),
  );

  const categoryIcons = {
    Articles: "fa-solid fa-newspaper",
    Hotlines: "fa-solid fa-phone",
    Family: "fa-solid fa-people-group",
    Comfort: "fa-solid fa-heart",
    Wellness: "fa-solid fa-spa",
    "Memorial Ideas": "fa-solid fa-lightbulb",
  };

  const tips = [
    { icon: "fa-solid fa-phone", text: "Pet loss hotlines offer free, confidential support 24/7.", to: "/dashboard/owner/resources?category=Hotlines" },
    { icon: "fa-solid fa-people-group", text: "If children are grieving, look for age-appropriate resources.", to: "/dashboard/owner/resources?category=Family" },
    { icon: "fa-solid fa-heart", text: "The Rainbow Bridge poem comforts many pet owners.", to: "/dashboard/owner/resources?category=Comfort" },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className='w-full min-w-0'>
      <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground mb-1'>
        Grief Support Resources
      </h1>
      <p className='text-sm text-muted-foreground mb-8'>
        Curated content and support — here whenever you need it.
      </p>

      <div className='relative mb-6'>
        <i className='fa-solid fa-search absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground text-sm' />
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='Search resources...'
          className='pro-input pl-11'
        />
      </div>

      <div className='flex gap-2 flex-wrap mb-8'>
        <button
          onClick={() => setActiveTab(0)}
          className={`px-4 py-2 rounded-xl text-[11px] font-semibold transition-all ${activeTab === 0 ? "bg-accent text-accent-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`}
        >
          All
        </button>
        {categories.map((cat, i) => (
          <button
            key={cat}
            onClick={() => setActiveTab(i + 1)}
            className={`px-4 py-2 rounded-xl text-[11px] font-semibold transition-all ${activeTab === i + 1 ? "bg-accent text-accent-foreground shadow-sm" : "bg-muted text-muted-foreground hover:text-foreground"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className='space-y-3'>
        {filtered.map((r, i) => (
          <motion.button
            key={r.id}
            type="button"
            onClick={() => setSelectedResource(r)}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.04 }}
            className='w-full text-left pro-card p-5 hover:shadow-md transition-all duration-200 group hover:-translate-y-0.5'
          >
            <div className='flex items-start gap-4'>
              <div className='icon-box w-11 h-11 rounded-xl shrink-0'>
                <i
                  className={`${categoryIcons[r.category] || "fa-solid fa-leaf"} text-accent text-sm`}
                />
              </div>
              <div className='flex-1'>
                <h3 className='text-sm font-semibold text-foreground group-hover:text-accent transition-colors'>
                  {r.title}
                </h3>
                <p className='text-[12px] text-muted-foreground mt-1.5 leading-relaxed'>
                  {r.description}
                </p>
                <span className='pro-badge-neutral text-[10px] mt-3 inline-flex'>
                  {r.category}
                </span>
              </div>
              <i className='fa-solid fa-arrow-up-right-from-square text-[10px] text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity mt-1' />
            </div>
          </motion.button>
        ))}
      </div>

      {/* Resource detail modal */}
      <Dialog open={!!selectedResource} onOpenChange={(open) => !open && setSelectedResource(null)}>
        <DialogContent className="sm:max-w-lg max-h-[85vh] overflow-hidden flex flex-col">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="icon-box w-9 h-9 rounded-lg shrink-0 flex items-center justify-center">
                <i className={`${selectedResource ? (categoryIcons[selectedResource.category] || "fa-solid fa-leaf") : "fa-solid fa-leaf"} text-accent text-xs`} />
              </div>
              {selectedResource?.title}
            </DialogTitle>
            <DialogDescription>
              <span className="pro-badge-neutral text-[10px]">{selectedResource?.category}</span>
            </DialogDescription>
          </DialogHeader>
          <div className="overflow-y-auto pr-2 -mr-2 flex-1 min-h-0">
            <p className="text-sm text-foreground whitespace-pre-wrap leading-relaxed">
              {selectedResource?.content || selectedResource?.description}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </div>

    <div className="lg:sticky lg:top-24 space-y-6">
      <div className="pro-card p-6">
        <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
          <i className="fa-solid fa-lightbulb text-accent text-xs" /> Tips & Suggestions
        </h3>
        <div className="space-y-4">
          {tips.map((tip, i) => (
            <Link key={i} to={tip.to} className="flex items-center gap-3 hover:opacity-90 transition-opacity group">
              <div className="icon-box w-9 h-9 rounded-xl shrink-0 group-hover:scale-105 transition-transform">
                <i className={`${tip.icon} text-accent text-xs`} />
              </div>
              <p className="text-[13px] text-muted-foreground leading-relaxed">{tip.text}</p>
            </Link>
          ))}
        </div>
      </div>
      <div className="pro-card p-6 border-l-4 border-l-accent">
        <h3 className="text-sm font-semibold text-foreground mb-2">Need immediate support?</h3>
        <p className="text-[12px] text-muted-foreground mb-3">
          Pet loss hotlines are available 24/7 for free, confidential support.
        </p>
        <Link to="/dashboard/owner/resources?category=Hotlines" className="text-accent text-xs font-medium hover:underline inline-flex items-center gap-1">
          Find a hotline <i className="fa-solid fa-arrow-right text-[9px]" />
        </Link>
      </div>
    </div>
    </div>
  );
};

export default Resources;
