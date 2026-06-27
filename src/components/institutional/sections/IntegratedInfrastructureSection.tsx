import SectionWrapper from '../shared/SectionWrapper';
import ExecutiveResponsibilityBanner from './integrated-infrastructure/ExecutiveResponsibilityBanner';
import IntegratedInfraNarrative from './integrated-infrastructure/IntegratedInfraNarrative';
import ProviderCapabilityGrid from './integrated-infrastructure/ProviderCapabilityGrid';
import { cn } from '../../../lib/utils';

export default function IntegratedInfrastructureSection() {
    return (
        <SectionWrapper id="infraestructura">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <IntegratedInfraNarrative />
                </div>

                <div className="flex items-center justify-center lg:col-span-7 lg:justify-center">
                    <img
                        src="/assets/institucional/diagram_03.png"
                        alt="Diagrama de infraestructura especializada integrada DOAR"
                        className={cn('h-auto w-full max-w-2xl object-contain')}
                    />
                </div>
            </div>

            <ProviderCapabilityGrid />
            <ExecutiveResponsibilityBanner />
        </SectionWrapper>
    );
}
