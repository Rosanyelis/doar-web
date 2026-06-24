import SectionWrapper from '../shared/SectionWrapper';
import ExecutiveReconciliationBanner from './reconciliation/ExecutiveReconciliationBanner';
import ReconciliationCapabilityGrid from './reconciliation/ReconciliationCapabilityGrid';
import ReconciliationFlowDiagram from './reconciliation/ReconciliationFlowDiagram';
import ReconciliationNarrative from './reconciliation/ReconciliationNarrative';

export default function OperationalReconciliationSection() {
    return (
        <SectionWrapper className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <ReconciliationNarrative />
                </div>

                <div className="flex items-start justify-center lg:col-span-7">
                    <ReconciliationFlowDiagram />
                </div>
            </div>

            <ReconciliationCapabilityGrid />
            <ExecutiveReconciliationBanner />
        </SectionWrapper>
    );
}
