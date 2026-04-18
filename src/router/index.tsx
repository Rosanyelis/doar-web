import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import SecurityPage from '../pages/SecurityPage';
import AffiliatePage from '../pages/AffiliatePage';
import SupportPage from '../pages/SupportPage';
import TermsPage from '../pages/TermsPage';
import PrivacyPolicyPage from '../pages/PrivacyPolicyPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/security',
    element: <SecurityPage />,
  },
  {
    path: '/affiliates',
    element: <AffiliatePage />,
  },
  {
    path: '/support',
    element: <SupportPage />,
  },
  {
    path: '/terms',
    element: <TermsPage />,
  },
  {
    path: '/privacy-policy',
    element: <PrivacyPolicyPage />,
  },
]);
