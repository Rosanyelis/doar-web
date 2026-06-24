import SectionWrapper from '../shared/SectionWrapper';
import LedgerCapabilityGrid from './ledger-first/LedgerCapabilityGrid';
import LedgerFlowDiagram from './ledger-first/LedgerFlowDiagram';
import LedgerFirstNarrative from './ledger-first/LedgerFirstNarrative';

export default function LedgerFirstArchitectureSection() {
    return (
        <SectionWrapper id="ledger">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <LedgerFirstNarrative />
                </div>

                <div className="flex items-center justify-center lg:col-span-7 lg:justify-center">
                    <LedgerFlowDiagram />
                </div>
            </div>
            <LedgerCapabilityGrid />
        </SectionWrapper>
    );
}
