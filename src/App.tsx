import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import DownloadModal from './components/web/DownloadModal';
import { WebSvgDefs } from './components/web/Icons';

const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const AffiliatePage = lazy(() => import('./pages/AffiliatePage'));
const SupportPage = lazy(() => import('./pages/SupportPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const DoarPage = lazy(() => import('./pages/fintech/DoarPage'));
const ModeloOperativoPage = lazy(() => import('./pages/fintech/ModeloOperativoPage'));
const CumplimientoPage = lazy(() => import('./pages/fintech/CumplimientoPage'));

function App() {
  return (
    <HelmetProvider>
      <Router>
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
            <Route path="/doar" element={<DoarPage />} />
            <Route path="/doar/modelo-operativo" element={<ModeloOperativoPage />} />
            <Route path="/doar/cumplimiento" element={<CumplimientoPage />} />
          </Routes>
        </Suspense>
      </Router>
    </HelmetProvider>
  );
}

export default App;
