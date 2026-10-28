import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const CreateMemorial = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    petName: "",
    species: "",
    breed: "",
    birthDate: "",
    passingDate: "",
    privacy: "private",
  });
  const update = (f, v) => setForm((p) => ({ ...p, [f]: v }));

  const handleSubmit = () => {
    if (!form.petName || !form.species || !form.passingDate) {
      toast.error("Please fill required fields");
      return;
    }
    toast.success(`${form.petName}'s memorial has been created`, {
      icon: "🕊️",
      duration: 4000,
    });
    navigate("/dashboard/owner");
  };

  const tips = [
    { icon: "fa-solid fa-clock", text: "Take your time. There's no rush — you can save a draft anytime." },
    { icon: "fa-solid fa-shield-halved", text: "You can change privacy settings later from your memorial page." },
    { icon: "fa-solid fa-users", text: "Invite family and friends to contribute memories when you're ready." },
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
    <div className='w-full min-w-0'>
      <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground mb-1'>
          Create a Memorial
        </h1>
        <p className='text-sm text-muted-foreground mb-8'>
          Take your time. Auto-save is on — nothing will be lost.
        </p>

        {/* Progress */}
        <div className='flex items-center gap-3 mb-10'>
          {[
            { n: 1, l: "Details" },
            { n: 2, l: "Dates" },
            { n: 3, l: "Privacy" },
          ].map((s) => (
            <div key={s.n} className='flex items-center gap-2.5 flex-1'>
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  s.n <= step
                    ? "text-accent-foreground shadow-sm"
                    : "bg-muted text-muted-foreground"
                }`}
                style={
                  s.n <= step ? { background: "var(--gradient-cta)" } : undefined
                }
              >
                {s.n < step ? <i className='fa-solid fa-check text-[10px]' /> : s.n}
              </div>
              <span
                className={`text-[11px] hidden sm:inline font-medium ${s.n <= step ? "text-foreground" : "text-muted-foreground"}`}
              >
                {s.l}
              </span>
              {s.n < 3 && (
                <div
                  className={`flex-1 h-0.5 rounded-full transition-colors ${s.n < step ? "bg-accent" : "bg-border"}`}
                />
              )}
            </div>
          ))}
        </div>

        <div className='pro-card overflow-hidden'>
          <div className='p-7'>
            {step === 1 && (
              <div className='space-y-5'>
                <div className='flex items-center gap-2.5 mb-2'>
                  <div className='icon-box w-9 h-9 rounded-xl'>
                    <i className='fa-solid fa-paw text-accent text-xs' />
                  </div>
                  <h2 className='text-sm font-semibold text-foreground'>
                    About Your Companion
                  </h2>
                </div>
                <div>
                  <label className='pro-label'>Pet's name *</label>
                  <input
                    value={form.petName}
                    onChange={(e) => update("petName", e.target.value)}
                    placeholder='What was their name?'
                    className='pro-input'
                    autoFocus
                  />
                </div>
                <div>
                  <label className='pro-label'>Species *</label>
                  <select
                    value={form.species}
                    onChange={(e) => update("species", e.target.value)}
                    className='pro-input'
                  >
                    <option value=''>Select species</option>
                    <option>Dog</option>
                    <option>Cat</option>
                    <option>Bird</option>
                    <option>Rabbit</option>
                    <option>Fish</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className='pro-label'>
                    Breed{" "}
                    <span className='text-muted-foreground font-normal'>
                      (optional)
                    </span>
                  </label>
                  <input
                    value={form.breed}
                    onChange={(e) => update("breed", e.target.value)}
                    placeholder='e.g., Golden Retriever'
                    className='pro-input'
                  />
                </div>
              </div>
            )}

            {step === 2 && (
              <div className='space-y-5'>
                <div className='flex items-center gap-2.5 mb-2'>
                  <div className='icon-box w-9 h-9 rounded-xl'>
                    <i className='fa-regular fa-calendar text-accent text-xs' />
                  </div>
                  <h2 className='text-sm font-semibold text-foreground'>
                    Important Dates
                  </h2>
                </div>
                <div>
                  <label className='pro-label'>
                    Birth date{" "}
                    <span className='text-muted-foreground font-normal'>
                      (optional)
                    </span>
                  </label>
                  <input
                    type='date'
                    value={form.birthDate}
                    onChange={(e) => update("birthDate", e.target.value)}
                    className='pro-input'
                  />
                </div>
                <div>
                  <label className='pro-label'>Passing date *</label>
                  <input
                    type='date'
                    value={form.passingDate}
                    onChange={(e) => update("passingDate", e.target.value)}
                    className='pro-input'
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className='space-y-5'>
                <div className='flex items-center gap-2.5 mb-2'>
                  <div className='icon-box w-9 h-9 rounded-xl'>
                    <i className='fa-solid fa-shield-halved text-accent text-xs' />
                  </div>
                  <h2 className='text-sm font-semibold text-foreground'>
                    Privacy Settings
                  </h2>
                </div>
                <p className='text-[12px] text-muted-foreground'>
                  You can change this anytime from your memorial settings.
                </p>
                {[
                  {
                    v: "private",
                    icon: "fa-solid fa-lock",
                    label: "Private",
                    desc: "Only you and invited people can view",
                  },
                  {
                    v: "public",
                    icon: "fa-solid fa-globe",
                    label: "Public",
                    desc: "Anyone with the link can view and leave tributes",
                  },
                ].map((opt) => (
                  <label
                    key={opt.v}
                    className={`flex items-start gap-4 p-5 rounded-xl border-2 cursor-pointer transition-all ${
                      form.privacy === opt.v
                        ? "border-accent bg-accent/5"
                        : "border-border hover:border-accent/20"
                    }`}
                  >
                    <input
                      type='radio'
                      name='privacy'
                      value={opt.v}
                      checked={form.privacy === opt.v}
                      onChange={(e) => update("privacy", e.target.value)}
                      className='mt-0.5 accent-[hsl(174,42%,40%)]'
                    />
                    <div>
                      <span className='text-sm font-semibold text-foreground flex items-center gap-2'>
                        <i
                          className={`${opt.icon} text-[11px] text-muted-foreground`}
                        />
                        {opt.label}
                      </span>
                      <p className='text-[12px] text-muted-foreground mt-1'>
                        {opt.desc}
                      </p>
                    </div>
                  </label>
                ))}
              </div>
            )}
          </div>

          <div className='flex items-center justify-between px-7 py-5 border-t border-border bg-muted/20'>
            {step > 1 ? (
              <button
                onClick={() => setStep(step - 1)}
                className='pro-btn-ghost text-sm'
              >
                <i className='fa-solid fa-arrow-left text-xs' /> Back
              </button>
            ) : (
              <button
                onClick={() => toast.success("Draft saved", { icon: "💾" })}
                className='pro-btn-ghost text-sm'
              >
                <i className='fa-solid fa-floppy-disk text-xs' /> Save Draft
              </button>
            )}
            {step < 3 ? (
              <button
                onClick={() => setStep(step + 1)}
                className='pro-btn-primary text-sm'
              >
                Continue <i className='fa-solid fa-arrow-right text-xs' />
              </button>
            ) : (
              <button onClick={handleSubmit} className='pro-btn-primary text-sm'>
                Create Memorial <i className='fa-solid fa-check text-xs' />
              </button>
            )}
          </div>
        </div>
      </motion.div>
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
        <h3 className="text-sm font-semibold text-foreground mb-2">Auto-save enabled</h3>
        <p className="text-[12px] text-muted-foreground">
          Your progress is saved automatically. You can leave and come back anytime.
        </p>
      </div>
    </div>
    </div>
  );
};

export default CreateMemorial;
