import SectionWrapper from '../shared/SectionWrapper';
import EcosystemCapabilities from './ecosystem-position/EcosystemCapabilities';
import EcosystemDiagram from './ecosystem-position/EcosystemDiagram';
import EcosystemNarrative from './ecosystem-position/EcosystemNarrative';
import ExecutiveBanner from './ecosystem-position/ExecutiveBanner';

export default function EcosystemPositionSection() {
    return (
        <SectionWrapper id="ecosistema" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <EcosystemNarrative />
                </div>

                <div className="flex items-start justify-center lg:col-span-7">
                    <EcosystemDiagram />
                </div>
            </div>

            <EcosystemCapabilities />
            <ExecutiveBanner />
        </SectionWrapper>
    );
}
