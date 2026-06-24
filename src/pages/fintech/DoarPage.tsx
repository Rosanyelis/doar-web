import { Helmet } from 'react-helmet-async';
import InstitutionalHero from '../../components/institutional/hero/InstitutionalHero';
import InstitutionalNavbar from '../../components/institutional/navigation/InstitutionalNavbar';
import IntegratedInfrastructureSection from '../../components/institutional/sections/IntegratedInfrastructureSection';
import LedgerFirstArchitectureSection from '../../components/institutional/sections/LedgerFirstArchitectureSection';
import OperationalReconciliationSection from '../../components/institutional/sections/OperationalReconciliationSection';
import PartnerStrip from '../../components/institutional/sections/PartnerStrip';
import SegregatedOperationalInfrastructureSection from '../../components/institutional/sections/SegregatedOperationalInfrastructureSection';
import TreasuryLiquiditySection from '../../components/institutional/sections/TreasuryLiquiditySection';
import UnifiedFinancialOperationsSection from '../../components/institutional/sections/UnifiedFinancialOperationsSection';
import WhatIsDoarSection from '../../components/institutional/sections/WhatIsDoarSection';
import AuditTrailSection from '../../components/institutional/sections/AuditTrailSection';
import ComplianceFrameworkSection from '../../components/institutional/sections/ComplianceFrameworkSection';
import ContinuousMonitoringSection from '../../components/institutional/sections/ContinuousMonitoringSection';
import RiskManagementSection from '../../components/institutional/sections/RiskManagementSection';
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
                <LedgerFirstArchitectureSection />
                <IntegratedInfrastructureSection />
                <UnifiedFinancialOperationsSection />
                <SegregatedOperationalInfrastructureSection />
                <TreasuryLiquiditySection />
                <OperationalReconciliationSection />
                <ComplianceFrameworkSection />
                <RiskManagementSection />
                <ContinuousMonitoringSection />
                <AuditTrailSection />
            </main>
        </div>
    );
}
