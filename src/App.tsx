import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './pages/HomePage';
import SecurityPage from './pages/SecurityPage';
import AffiliatePage from './pages/AffiliatePage';
import SupportPage from './pages/SupportPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import DoarPage from './pages/fintech/DoarPage';
import DownloadModal from './components/web/DownloadModal';
import { WebSvgDefs } from './components/web/Icons';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <WebSvgDefs />
        <DownloadModal />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/seguridad" element={<SecurityPage />} />
          <Route path="/afiliados" element={<AffiliatePage />} />
          <Route path="/soporte" element={<SupportPage />} />
          <Route path="/terminos" element={<TermsPage />} />
          <Route path="/privacidad" element={<PrivacyPage />} />
          <Route path="/doar" element={<DoarPage />} />
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
