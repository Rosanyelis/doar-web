import SectionWrapper from '../shared/SectionWrapper';
import ExecutiveOperationalBanner from './unified-operations/ExecutiveOperationalBanner';
import OperationsDiagramContainer from './unified-operations/OperationsDiagramContainer';
import UnifiedOperationsNarrative from './unified-operations/UnifiedOperationsNarrative';

export default function UnifiedFinancialOperationsSection() {
    return (
        <SectionWrapper className="min-h-screen">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-4">
                    <UnifiedOperationsNarrative />
                </div>

                <div className="flex items-center justify-center lg:col-span-8">
                    <OperationsDiagramContainer />
                </div>
            </div>

            <ExecutiveOperationalBanner />
        </SectionWrapper>
    );
}
