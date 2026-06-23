import HeroBackground from '../hero/HeroBackground';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import ContinuousMonitoringNarrative from './continuous-monitoring/ContinuousMonitoringNarrative';
import MonitoringCapabilityCards from './continuous-monitoring/MonitoringCapabilityCards';
import MonitoringCenterDiagram from './continuous-monitoring/MonitoringCenterDiagram';
import { cn } from '../../../lib/utils';

export default function ContinuousMonitoringSection() {
    return (
        <section
            className={cn(
                'relative overflow-hidden border-t border-white/6 bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <ContinuousMonitoringNarrative />
                    </div>

                    <div className="flex items-center justify-center lg:col-span-7">
                        <MonitoringCenterDiagram />
                    </div>
                </div>

                <MonitoringCapabilityCards />

                <ComplianceSummaryBanner
                    title="Visibilidad continua, control permanente"
                    description="El Monitoring Center proporciona supervisión unificada sobre operaciones, cumplimiento y riesgo — manteniendo visibilidad continua y control permanente sobre el ecosistema operacional de DOAR."
                />
            </div>
        </section>
    );
}
