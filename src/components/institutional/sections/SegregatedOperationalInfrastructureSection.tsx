import SectionWrapper from '../shared/SectionWrapper';
import SegregatedArchitectureDiagram from './segregated-infrastructure/SegregatedArchitectureDiagram';
import SegregatedInfraNarrative from './segregated-infrastructure/SegregatedInfraNarrative';
import SegregatedLayerGrid from './segregated-infrastructure/SegregatedLayerGrid';

export default function SegregatedOperationalInfrastructureSection() {
    return (
        <SectionWrapper className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <SegregatedInfraNarrative />
                </div>

                <div className="flex items-start justify-center lg:col-span-7">
                    <SegregatedArchitectureDiagram />
                </div>
            </div>

            <SegregatedLayerGrid />
        </SectionWrapper>
    );
}
