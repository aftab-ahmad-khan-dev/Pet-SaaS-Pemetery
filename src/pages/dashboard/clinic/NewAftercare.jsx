import { useState } from "react";
import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { mockEmailTemplates, mockClinics } from "@/utils/mockData";

const NewAftercare = () => {
  const [ownerEmail, setOwnerEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [sent, setSent] = useState(false);
  const clinic = mockClinics[0];

  const selectedTemplate = mockEmailTemplates.find((t) => t.id === templateId);
  const preview = selectedTemplate
    ? selectedTemplate.body
        .replace(/{petName}/g, petName || "[Pet Name]")
        .replace(/{ownerName}/g, ownerName || "[Owner Name]")
        .replace(/{clinicName}/g, clinic.name)
    : "";

  const send = (e) => {
    e.preventDefault();
    if (!ownerEmail || !petName || !templateId) {
      toast.error("Please fill all required fields");
      return;
    }
    toast.success(`Aftercare package sent to ${ownerEmail}`);
    setSent(true);
  };

  if (sent) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className='max-w-lg mx-auto text-center py-20'
      >
        <div
          className='w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6'
          style={{ background: "var(--gradient-cta)" }}
        >
          <i className='fa-solid fa-paper-plane text-3xl text-white' />
        </div>
        <h1 className='font-display text-3xl font-bold text-foreground mb-3'>
          Aftercare Sent
        </h1>
        <p className='text-muted-foreground text-[15px] mb-8 max-w-sm mx-auto'>
          {ownerName || "The owner"} will receive an email with a memorial link and
          QR code.
        </p>
        <button
          onClick={() => {
            setSent(false);
            setOwnerEmail("");
            setPetName("");
            setOwnerName("");
            setTemplateId("");
          }}
          className='pro-btn-primary'
        >
          <i className='fa-solid fa-plus text-xs' /> Send Another
        </button>
      </motion.div>
    );
  }

  return (
    <div className='w-full'>
      <h1 className='font-display text-2xl sm:text-3xl font-bold text-foreground mb-1'>
        New Aftercare
      </h1>
      <p className='text-sm text-muted-foreground mb-8'>
        Send a compassionate memorial invitationunder 60 seconds.
      </p>

      <form onSubmit={send} className='space-y-6'>
        <div className='pro-card overflow-hidden'>
          <div className='px-6 py-4 border-b border-border bg-muted/20'>
            <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
              <i className='fa-solid fa-user text-accent text-xs' /> Owner Details
            </h3>
          </div>
          <div className='p-6 space-y-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-5'>
              <div>
                <label className='pro-label'>Owner's name</label>
                <input
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  placeholder='e.g., Sarah'
                  className='pro-input'
                />
              </div>
              <div>
                <label className='pro-label'>Owner's email *</label>
                <input
                  type='email'
                  value={ownerEmail}
                  onChange={(e) => setOwnerEmail(e.target.value)}
                  required
                  placeholder='owner@email.com'
                  className='pro-input'
                />
              </div>
            </div>
            <div>
              <label className='pro-label'>Pet's name *</label>
              <input
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
                required
                placeholder='What was their name?'
                className='pro-input'
              />
            </div>
          </div>
        </div>

        <div className='pro-card overflow-hidden'>
          <div className='px-6 py-4 border-b border-border bg-muted/20'>
            <h3 className='text-sm font-semibold text-foreground flex items-center gap-2'>
              <i className='fa-solid fa-envelope text-accent text-xs' />{" "}
              Communication Template
            </h3>
          </div>
          <div className='p-6 space-y-5'>
            <select
              value={templateId}
              onChange={(e) => setTemplateId(e.target.value)}
              required
              className='pro-input'
            >
              <option value=''>Select a template</option>
              {mockEmailTemplates.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>

            {preview && (
              <div
                className='rounded-xl p-5 border border-border'
                style={{ background: "hsl(var(--brand-warm-light))" }}
              >
                <div className='flex items-center gap-2 mb-3'>
                  <i className='fa-solid fa-eye text-[10px] text-muted-foreground' />
                  <span className='text-[11px] font-semibold text-muted-foreground uppercase tracking-wider'>
                    Preview
                  </span>
                </div>
                <p className='text-[12px] text-foreground whitespace-pre-line leading-relaxed'>
                  {preview}
                </p>
              </div>
            )}
          </div>
        </div>

        <button
          type='submit'
          className='pro-btn-primary w-full sm:w-auto py-3.5 px-8'
        >
          <i className='fa-solid fa-paper-plane text-xs' /> Send Aftercare Package
        </button>
      </form>
    </div>
  );
};

export default NewAftercare;
