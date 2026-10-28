import { useState } from 'react';
import toast from 'react-hot-toast';

const QRGenerator = () => {
  const [petName, setPetName] = useState('');
  const [link, setLink] = useState('');

  const generate = () => {
    if (!petName.trim()) { toast.error('Enter a pet name'); return; }
    const slug = petName.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
    setLink(`https://pemetery.com/memorial/${slug || `m-${Date.now()}`}`);
    toast.success('Memorial link generated');
  };

  return (
    <div className="w-full max-w-2xl">
      <h1 className="font-display text-2xl font-bold text-foreground mb-1">QR & Link Generator</h1>
      <p className="text-sm text-muted-foreground mb-8">Generate unique memorial access links with QR codes.</p>

      <div className="pro-card p-6 space-y-4">
        <div>
          <label className="pro-label">Pet Name</label>
          <input value={petName} onChange={e => setPetName(e.target.value)} placeholder="Enter pet name" className="pro-input" />
        </div>
        <button onClick={generate} className="pro-btn-primary w-full py-2.5">
          <i className="fa-solid fa-qrcode text-xs" /> Generate Link & QR
        </button>

        {link && (
          <div className="border-t border-border pt-5 space-y-4">
            <div>
              <label className="pro-label">Memorial Link</label>
              <div className="flex gap-2">
                <input value={link} readOnly className="pro-input flex-1 text-xs" />
                <button onClick={() => { navigator.clipboard.writeText(link); toast.success('Copied!'); }}
                  className="pro-btn-secondary py-2 px-3 text-xs">
                  <i className="fa-solid fa-copy" />
                </button>
              </div>
            </div>

            <div className="bg-muted rounded-lg p-6 text-center">
              <div className="w-32 h-32 bg-card border border-border rounded-xl flex items-center justify-center mx-auto mb-3">
                <i className="fa-solid fa-qrcode text-5xl text-foreground" />
              </div>
              <p className="text-xs text-muted-foreground">QR Code for {petName}</p>
              <button className="pro-btn-secondary text-xs mt-3 py-1.5 px-3">
                <i className="fa-solid fa-download text-[10px]" /> Download QR
              </button>
            </div>

            <p className="text-xs text-muted-foreground flex items-center gap-1.5">
              <i className="fa-solid fa-clock text-[10px]" /> Link expires in 30 days
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default QRGenerator;
