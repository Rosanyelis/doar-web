import HeroBackground from '../hero/HeroBackground';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import AuditTimelineDiagram from './audit-trail/AuditTimelineDiagram';
import AuditTrailCards from './audit-trail/AuditTrailCards';
import AuditTrailNarrative from './audit-trail/AuditTrailNarrative';
import { cn } from '../../../lib/utils';

export default function AuditTrailSection() {
    return (
        <section
            className={cn(
                'relative overflow-hidden border-t border-white/6 bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <AuditTrailNarrative />
                </div>

                <AuditTimelineDiagram />
                <AuditTrailCards />

                <ComplianceSummaryBanner
                    title="Evidencia verificable en cada operación"
                    description="La trazabilidad end-to-end de DOAR garantiza que cada acción, evento y decisión quede registrada de forma inmutable — proporcionando evidencia verificable para cumplimiento, auditoría y control interno."
                />
            </div>
        </section>
    );
}
