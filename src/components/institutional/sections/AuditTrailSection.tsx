import SectionWrapper from '../shared/SectionWrapper';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import AuditTimelineDiagram from './audit-trail/AuditTimelineDiagram';
import AuditTrailCards from './audit-trail/AuditTrailCards';
import AuditTrailNarrative from './audit-trail/AuditTrailNarrative';

export default function AuditTrailSection() {
    return (
        <SectionWrapper id="auditoria" className="border-t border-white/6">
            <AuditTrailNarrative />

            <AuditTimelineDiagram />
            <AuditTrailCards />

            <ComplianceSummaryBanner
                title="Evidencia verificable en cada operación"
                description="La trazabilidad end-to-end de DOAR garantiza que cada acción, evento y decisión quede registrada de forma inmutable — proporcionando evidencia verificable para cumplimiento, auditoría y control interno."
            />
        </SectionWrapper>
    );
}
