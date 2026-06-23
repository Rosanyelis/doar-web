import { Helmet } from 'react-helmet-async';
import InstitutionalNavbar from '../../components/institutional/navigation/InstitutionalNavbar';
import OperationalReconciliationSection from '../../components/institutional/sections/OperationalReconciliationSection';
import SegregatedOperationalInfrastructureSection from '../../components/institutional/sections/SegregatedOperationalInfrastructureSection';
import TreasuryLiquiditySection from '../../components/institutional/sections/TreasuryLiquiditySection';
import UnifiedFinancialOperationsSection from '../../components/institutional/sections/UnifiedFinancialOperationsSection';
import { cn } from '../../lib/utils';

export default function ModeloOperativoPage() {
    return (
        <div
            className={cn(
                'min-h-screen bg-midnight-navy text-text-primary',
                'font-institutional',
                'selection:bg-doar-gold selection:text-deep-space'
            )}
        >
            <Helmet>
                <title>DOAR | Modelo Operativo</title>
            </Helmet>

            <InstitutionalNavbar />

            <main>
                <UnifiedFinancialOperationsSection />
                <SegregatedOperationalInfrastructureSection />
                <TreasuryLiquiditySection />
                <OperationalReconciliationSection />
            </main>
        </div>
    );
}
