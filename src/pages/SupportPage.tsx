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
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
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
