import SectionWrapper from '../shared/SectionWrapper';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import ContinuousMonitoringNarrative from './continuous-monitoring/ContinuousMonitoringNarrative';
import MonitoringCapabilityCards from './continuous-monitoring/MonitoringCapabilityCards';
import { cn } from '../../../lib/utils';

export default function ContinuousMonitoringSection() {
    return (
        <SectionWrapper id="monitoreo-continuo" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <ContinuousMonitoringNarrative />
                </div>

                <div className="flex items-center justify-center lg:col-span-7 lg:justify-center">
                    <img
                        src="/assets/institucional/diagram_08.png"
                        alt="Diagrama del centro de monitoreo continuo DOAR"
                        className={cn('h-auto w-full max-w-2xl object-contain')}
                    />
                </div>
            </div>

            <MonitoringCapabilityCards />

            <ComplianceSummaryBanner
                title="Visibilidad continua, control permanente"
                description="El Monitoring Center proporciona supervisión unificada sobre operaciones, cumplimiento y riesgo — manteniendo visibilidad continua y control permanente sobre el ecosistema operacional de DOAR."
            />
        </SectionWrapper>
    );
}
