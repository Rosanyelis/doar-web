import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SupportHero from '../components/web/SupportHero';
import SupportChannels from '../components/web/SupportChannels';
import SupportFAQs from '../components/web/SupportFAQs';
import SupportForm from '../components/web/SupportForm';

export default function SupportPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Soporte | DOAR - Estamos para apoyarte</title>
                <meta name="description" content="Contacte al equipo de soporte DOAR. Canales de ayuda disponibles para consultas técnicas, operativas y de cuenta las 24 horas del día." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/soporte" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Soporte | DOAR" />
                <meta property="og:description" content="Canal de soporte DOAR: ayuda técnica y operativa disponible 24/7." />
                <meta property="og:url" content="https://doar.tech/soporte" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Soporte | DOAR" />
                <meta name="twitter:description" content="Canal de soporte: ayuda técnica y operativa disponible 24/7." />
                <meta name="twitter:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
            </Helmet>

            <Navbar />

            <main>
                <SupportHero />
                <SupportChannels />
                <SupportFAQs />
                <SupportForm />
            </main>

            <Footer />
        </div>
    );
}
