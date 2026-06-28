import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/web/Hero';
import ValueProposition from '../components/web/ValueProposition';
import Benefits from '../components/web/Benefits';
import Partners from '../components/web/Partners';
import Testimonials from '../components/web/Testimonials';
import Onboarding from '../components/web/Onboarding';
import BottomCTA from '../components/web/BottomCTA';

export default function HomePage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>DOAR | Tu dinero, sin fronteras</title>
                <meta name="description" content="DOAR es una plataforma de orquestación financiera que conecta pagos, cumplimiento, tesorería y liquidación bajo una arquitectura ledger-first interoperable." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="DOAR | Tu dinero, sin fronteras" />
                <meta property="og:description" content="Plataforma de orquestación financiera que conecta pagos, cumplimiento, tesorería y liquidación." />
                <meta property="og:url" content="https://doar.tech/" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="DOAR | Tu dinero, sin fronteras" />
                <meta name="twitter:description" content="Plataforma de orquestación financiera que conecta pagos, cumplimiento, tesorería y liquidación." />
                <meta name="twitter:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
            </Helmet>

            <Navbar />

            <main>
                <Hero />
                <ValueProposition />
                <Benefits />
                <Partners />
                <Testimonials />
                <Onboarding />
                <BottomCTA />
            </main>

            <Footer />
        </div>
    );
}
