import SectionWrapper from '../shared/SectionWrapper';
import RegulatoryNarrative from './regulatory-positioning/RegulatoryNarrative';
import RegulatoryDiagram from './regulatory-positioning/RegulatoryDiagram';
import RegulatoryPrincipleCards from './regulatory-positioning/RegulatoryPrincipleCards';

export default function RegulatoryPositioningSection() {
    return (
        <SectionWrapper id="posicion" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:items-end lg:gap-16">
                <RegulatoryNarrative />
                <div className="flex justify-center lg:justify-center">
                    <RegulatoryDiagram />
                </div>
            </div>

            <RegulatoryPrincipleCards />
        </SectionWrapper>
    );
}
