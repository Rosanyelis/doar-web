import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SecurityHero from '../components/web/SecurityHero';
import SecurityCards from '../components/web/SecurityCards';
import SecurityControl from '../components/web/SecurityControl';
import SecurityWithdraw from '../components/web/SecurityWithdraw';
import SecurityFAQ from '../components/web/SecurityFAQ';
import SecurityCTA from '../components/web/SecurityCTA';

export default function SecurityPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Seguridad - DOAR</title>
            </Helmet>

            <Navbar />
            
            <main>
                <SecurityHero />
                <SecurityCards />
                <SecurityControl />
                <SecurityWithdraw />
                <SecurityFAQ />
                <SecurityCTA />
            </main>

            <Footer />
        </div>
    );
}
