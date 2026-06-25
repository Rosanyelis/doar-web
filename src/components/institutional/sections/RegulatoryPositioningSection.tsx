import SectionWrapper from '../shared/SectionWrapper';
import RegulatoryNarrative from './regulatory-positioning/RegulatoryNarrative';
import RegulatoryDiagram from './regulatory-positioning/RegulatoryDiagram';
import RegulatoryPrincipleCards from './regulatory-positioning/RegulatoryPrincipleCards';
import RegulatoryBanner from './regulatory-positioning/RegulatoryBanner';

export default function RegulatoryPositioningSection() {
    return (
        <SectionWrapper id="posicion" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <RegulatoryNarrative />
                </div>

                <div className="flex items-start justify-center lg:col-span-7">
                    <RegulatoryDiagram />
                </div>
            </div>

            <RegulatoryPrincipleCards />
            <RegulatoryBanner />
        </SectionWrapper>
    );
}
