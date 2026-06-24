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
