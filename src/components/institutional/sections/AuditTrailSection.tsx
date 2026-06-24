import SectionWrapper from '../shared/SectionWrapper';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import AuditTimelineDiagram from './audit-trail/AuditTimelineDiagram';
import AuditTrailCards from './audit-trail/AuditTrailCards';
import AuditTrailNarrative from './audit-trail/AuditTrailNarrative';

export default function AuditTrailSection() {
    return (
        <SectionWrapper className="border-t border-white/6">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <AuditTrailNarrative />
            </div>

            <AuditTimelineDiagram />
            <AuditTrailCards />

            <ComplianceSummaryBanner
                title="Evidencia verificable en cada operación"
                description="La trazabilidad end-to-end de DOAR garantiza que cada acción, evento y decisión quede registrada de forma inmutable — proporcionando evidencia verificable para cumplimiento, auditoría y control interno."
            />
        </SectionWrapper>
    );
}
