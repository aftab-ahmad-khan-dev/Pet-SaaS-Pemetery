import { useState } from "react";
import toast from "react-hot-toast";
import { Switch } from "@/components/ui/switch";

const AdminSettings = () => {
  const [siteName, setSiteName] = useState("Pemetery");
  const [maintenanceMode, setMaintenanceMode] = useState(false);
  const [newRegistrations, setNewRegistrations] = useState(true);
  const [memorialApprovalRequired, setMemorialApprovalRequired] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState(true);
  const [apiBaseUrl, setApiBaseUrl] = useState("https://api.pemetery.com");

  const handleSave = () => {
    toast.success("Settings saved.");
  };

  return (
    <div className="w-full">
      <h1 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-1">
        Platform Settings
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Global configuration, feature flags, and deployment parameters.
      </p>

      <div className="space-y-6">
        {/* Global configuration */}
        <div className="pro-card p-6">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <i className="fa-solid fa-sliders text-accent text-xs" /> Global Configuration
          </h3>
          <div className="space-y-4">
            <div>
              <label className="pro-label">Site name</label>
              <input
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="pro-input mt-1"
                placeholder="Pemetery"
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-foreground">Maintenance mode</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Temporarily disable public access
                </p>
              </div>
              <Switch
                checked={maintenanceMode}
                onCheckedChange={setMaintenanceMode}
              />
            </div>
          </div>
        </div>

        {/* Feature flags */}
        <div className="pro-card p-6">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <i className="fa-solid fa-flag text-accent text-xs" /> Feature Flags
          </h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">New registrations</p>
                <p className="text-xs text-muted-foreground mt-0.5">Allow new clinic and owner sign-ups</p>
              </div>
              <Switch
                checked={newRegistrations}
                onCheckedChange={setNewRegistrations}
              />
            </div>
            <div className="flex items-center justify-between py-2 border-b border-border last:border-0">
              <div>
                <p className="text-sm font-medium text-foreground">Memorial approval required</p>
                <p className="text-xs text-muted-foreground mt-0.5">New memorials need admin approval</p>
              </div>
              <Switch
                checked={memorialApprovalRequired}
                onCheckedChange={setMemorialApprovalRequired}
              />
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="text-sm font-medium text-foreground">Analytics</p>
                <p className="text-xs text-muted-foreground mt-0.5">Enable usage analytics</p>
              </div>
              <Switch
                checked={analyticsEnabled}
                onCheckedChange={setAnalyticsEnabled}
              />
            </div>
          </div>
        </div>

        {/* Deployment parameters */}
        <div className="pro-card p-6">
          <h3 className="text-sm font-semibold text-foreground flex items-center gap-2 mb-4">
            <i className="fa-solid fa-server text-accent text-xs" /> Deployment Parameters
          </h3>
          <div className="space-y-4">
            <div>
              <label className="pro-label">API base URL</label>
              <input
                value={apiBaseUrl}
                onChange={(e) => setApiBaseUrl(e.target.value)}
                className="pro-input mt-1"
                placeholder="https://api.pemetery.com"
              />
              <p className="text-xs text-muted-foreground mt-1.5">
                Backend API endpoint for the platform
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button onClick={handleSave} className="pro-btn-primary">
            <i className="fa-solid fa-check text-xs mr-1" /> Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminSettings;
