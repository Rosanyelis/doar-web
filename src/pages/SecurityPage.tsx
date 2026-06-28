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
                <title>Seguridad | DOAR - Protección de activos digitales</title>
                <meta name="description" content="Conozca las medidas de seguridad de DOAR: cifrado, tokenización, controles antifraude, monitoreo continuo y gestión de vulnerabilidades para proteger sus activos digitales." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/seguridad" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Seguridad | DOAR" />
                <meta property="og:description" content="Medidas de seguridad avanzadas: cifrado, tokenización, controles antifraude y monitoreo continuo." />
                <meta property="og:url" content="https://doar.tech/seguridad" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Seguridad | DOAR" />
                <meta name="twitter:description" content="Medidas de seguridad avanzadas para proteger sus activos digitales." />
                <meta name="twitter:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
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
