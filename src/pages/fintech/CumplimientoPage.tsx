import { Helmet } from 'react-helmet-async';
import InstitutionalNavbar from '../../components/institutional/navigation/InstitutionalNavbar';
import AuditTrailSection from '../../components/institutional/sections/AuditTrailSection';
import ComplianceFrameworkSection from '../../components/institutional/sections/ComplianceFrameworkSection';
import ContinuousMonitoringSection from '../../components/institutional/sections/ContinuousMonitoringSection';
import RiskManagementSection from '../../components/institutional/sections/RiskManagementSection';
import { cn } from '../../lib/utils';

export default function CumplimientoPage() {
    return (
        <div
            className={cn(
                'min-h-screen bg-midnight-navy text-text-primary',
                'font-institutional',
                'selection:bg-doar-gold selection:text-deep-space'
            )}
        >
            <Helmet>
                <title>DOAR | Cumplimiento</title>
            </Helmet>

            <InstitutionalNavbar />

            <main>
                <ComplianceFrameworkSection />
                <RiskManagementSection />
                <ContinuousMonitoringSection />
                <AuditTrailSection />
            </main>
        </div>
    );
}
