import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import DownloadModal from './components/web/DownloadModal';
import ScrollToTop from './components/layout/ScrollToTop';
import LegacyInstitutionalRedirect from './components/routing/LegacyInstitutionalRedirect';
import { WebSvgDefs } from './components/web/Icons';

const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const AffiliatePage = lazy(() => import('./pages/AffiliatePage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const RiskPage = lazy(() => import('./pages/RiskPage'));
const CompliancePolicyPage = lazy(() => import('./pages/CompliancePolicyPage'));
const BiometricConsentPage = lazy(() => import('./pages/BiometricConsentPage'));
const DoarPage = lazy(() => import('./pages/fintech/DoarPage'));

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <WebSvgDefs />
        <DownloadModal />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/seguridad" element={<SecurityPage />} />
            <Route path="/afiliados" element={<AffiliatePage />} />
            <Route path="/soporte" element={<SupportPage />} />
            <Route path="/terminos" element={<TermsPage />} />
            <Route path="/privacidad" element={<PrivacyPage />} />
            <Route path="/declaracion-riesgo" element={<RiskPage />} />
            <Route path="/politica-cumplimiento" element={<CompliancePolicyPage />} />
            <Route path="/consentimiento-biometrico" element={<BiometricConsentPage />} />
            <Route path="/institucional" element={<DoarPage />} />
            <Route path="/institucional/:sectionId" element={<DoarPage />} />
            <Route path="/sobre-nosotros" element={<Navigate to="/institucional" replace />} />
            <Route path="/sobre-nosotros/:sectionId" element={<LegacyInstitutionalRedirect />} />
            <Route path="/doar" element={<Navigate to="/institucional" replace />} />
            <Route path="/doar/:sectionId" element={<LegacyInstitutionalRedirect />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
