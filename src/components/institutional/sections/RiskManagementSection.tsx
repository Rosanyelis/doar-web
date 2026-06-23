import HeroBackground from '../hero/HeroBackground';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import RiskControlCards from './risk-management/RiskControlCards';
import RiskEngineDiagram from './risk-management/RiskEngineDiagram';
import RiskManagementNarrative from './risk-management/RiskManagementNarrative';
import { cn } from '../../../lib/utils';

export default function RiskManagementSection() {
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
                        <RiskManagementNarrative />
                    </div>

                    <div className="flex items-center justify-center lg:col-span-7">
                        <RiskEngineDiagram />
                    </div>
                </div>

                <RiskControlCards />

                <ComplianceSummaryBanner
                    title="Operación resiliente ante riesgos emergentes"
                    description="El Risk Engine coordina evaluación, alertas y mitigación en tiempo real — garantizando que cada operación sea evaluada antes, durante y después de su ejecución dentro del ecosistema DOAR."
                />
            </div>
        </section>
    );
}
