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
                <title>Afiliados - DOAR</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
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
