import { Helmet } from 'react-helmet-async';
import InstitutionalHero from '../../components/institutional/hero/InstitutionalHero';
import InstitutionalNavbar from '../../components/institutional/navigation/InstitutionalNavbar';
import PartnerStrip from '../../components/institutional/sections/PartnerStrip';
import WhatIsDoarSection from '../../components/institutional/sections/WhatIsDoarSection';
import { cn } from '../../lib/utils';

export default function DoarPage() {
    return (
        <div
            className={cn(
                'min-h-screen bg-midnight-navy text-text-primary',
                'font-institutional',
                'selection:bg-doar-gold selection:text-deep-space'
            )}
        >
            <Helmet>
                <title>DOAR | Infraestructura Financiera Moderna</title>
            </Helmet>

            <InstitutionalNavbar />

            <main>
                <InstitutionalHero />
                <PartnerStrip />
                <WhatIsDoarSection />
            </main>
        </div>
    );
}
