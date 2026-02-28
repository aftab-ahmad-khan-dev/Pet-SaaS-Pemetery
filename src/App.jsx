import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useTheme } from "./contexts/ThemeContext";
import ScrollToTop from "./components/shared/ScrollToTop";
import CookieConsent from "./components/shared/CookieConsent";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ForClinics from "./pages/ForClinics";
import ForOwners from "./pages/ForOwners";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Legal from "./pages/Legal";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import GDPRCompliance from "./pages/GDPRCompliance";
import PublicMemorial from "./pages/PublicMemorial";
import NotFound from "./pages/NotFound";
import DashboardRedirect from "./pages/DashboardRedirect";

import OwnerLayout from "./layouts/OwnerLayout";
import ClinicLayout from "./layouts/ClinicLayout";
import AdminLayout from "./layouts/AdminLayout";

import MemorialsList from "./pages/dashboard/owner/MemorialsList";
import OwnerMemorial from "./pages/dashboard/owner/OwnerMemorial";
import CreateMemorial from "./pages/dashboard/owner/CreateMemorial";
import Journal from "./pages/dashboard/owner/Journal";
import MoodCheckin from "./pages/dashboard/owner/MoodCheckin";
import Resources from "./pages/dashboard/owner/Resources";
import Support from "./pages/dashboard/owner/Support";
import PrivacyData from "./pages/dashboard/owner/PrivacyData";

import ClinicDashboard from "./pages/dashboard/clinic/ClinicDashboard";
import NewAftercare from "./pages/dashboard/clinic/NewAftercare";
import ClinicMemorials from "./pages/dashboard/clinic/ClinicMemorials";
import ClinicProfile from "./pages/dashboard/clinic/ClinicProfile";
import QRGenerator from "./pages/dashboard/clinic/QRGenerator";

import AdminDashboard from "./pages/dashboard/admin/AdminDashboard";
import ClinicsList from "./pages/dashboard/admin/ClinicsList";
import ModerationQueue from "./pages/dashboard/admin/ModerationQueue";
import AdminSettings from "./pages/dashboard/admin/AdminSettings";

import Analytics from "./pages/dashboard/shared/Analytics";

const toastStyle = (theme) => ({
  borderRadius: "10px",
  fontSize: "13px",
  ...(theme === "dark"
    ? {
        background: "hsl(210, 18%, 9%)",
        color: "hsl(210, 10%, 95%)",
        border: "1px solid hsl(210, 14%, 18%)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
      }
    : {
        background: "hsl(0, 0%, 100%)",
        color: "hsl(220, 20%, 14%)",
        border: "1px solid hsl(220, 13%, 90%)",
        boxShadow: "0 4px 12px hsl(220, 20%, 14%, 0.08)",
      }),
});

const App = () => {
  const { theme } = useTheme();
  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          style: toastStyle(theme),
        }}
      />
    <BrowserRouter>
      <ScrollToTop />
      <CookieConsent />
      <Routes>
        {/* Public (marketing) */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/for-clinics" element={<ForClinics />} />
        <Route path="/for-owners" element={<ForOwners />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
        <Route path="/memorial/:slug" element={<PublicMemorial />} />

        {/* Legacy paths → redirect to dashboard */}
        <Route path="/owner" element={<DashboardRedirect />} />
        <Route path="/owner/*" element={<DashboardRedirect />} />
        <Route path="/clinic" element={<DashboardRedirect />} />
        <Route path="/clinic/*" element={<DashboardRedirect />} />
        <Route path="/admin" element={<DashboardRedirect />} />
        <Route path="/admin/*" element={<DashboardRedirect />} />

        {/* Dashboard (role-based) */}
        <Route path="/dashboard" element={<DashboardRedirect />} />
        <Route path="/dashboard/owner" element={<OwnerLayout />}>
          <Route index element={<MemorialsList />} />
          <Route path="memorial/:slug" element={<OwnerMemorial />} />
          <Route path="create-memorial" element={<CreateMemorial />} />
          <Route path="journal" element={<Journal />} />
          <Route path="mood" element={<MoodCheckin />} />
          <Route path="resources" element={<Resources />} />
          <Route path="support" element={<Support />} />
          <Route path="settings" element={<PrivacyData />} />
        </Route>

        {/* B2B: Veterinary clinics */}
        <Route path="/dashboard/clinic" element={<ClinicLayout />}>
          <Route index element={<ClinicDashboard />} />
          <Route path="new-aftercare" element={<NewAftercare />} />
          <Route path="memorials" element={<ClinicMemorials />} />
          <Route path="qr-generator" element={<QRGenerator />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="profile" element={<ClinicProfile />} />
        </Route>

        {/* Platform admin */}
        <Route path="/dashboard/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="clinics" element={<ClinicsList />} />
          <Route path="moderation" element={<ModerationQueue />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </>
  );
};

export default App;
