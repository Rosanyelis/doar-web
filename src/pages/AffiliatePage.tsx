import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import AffiliatesHero from '../components/web/AffiliatesHero';
import AffiliatesIntro from '../components/web/AffiliatesIntro';
import AffiliatesLogic from '../components/web/AffiliatesLogic';
import AffiliatesSteps from '../components/web/AffiliatesSteps';
import AffiliatesIdeal from '../components/web/AffiliatesIdeal';
import AffiliatesCTA from '../components/web/AffiliatesCTA';

export default function AffiliatePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Afiliados | DOAR - Programa de partners especializados</title>
                <meta name="description" content="Únase al programa de afiliados DOAR. Conecte su negocio con infraestructura financiera especializada y genere ingresos con cada operación procesada." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/afiliados" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Afiliados | DOAR" />
                <meta property="og:description" content="Programa de afiliados DOAR: conecte su negocio con infraestructura financiera especializada." />
                <meta property="og:url" content="https://doar.tech/afiliados" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Afiliados | DOAR" />
                <meta name="twitter:description" content="Programa de afiliados: genere ingresos con infraestructura financiera especializada." />
                <meta name="twitter:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
            </Helmet>

            <Navbar />
            
            <main>
                <AffiliatesHero />
                <AffiliatesIntro />
                <AffiliatesLogic />
                <AffiliatesSteps />
                <AffiliatesIdeal />
                <AffiliatesCTA />
            </main>

            <Footer />
        </div>
    );
}
