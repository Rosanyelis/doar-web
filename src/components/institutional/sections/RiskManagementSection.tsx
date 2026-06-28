import SectionWrapper from '../shared/SectionWrapper';
import ComplianceSummaryBanner from '../compliance/ComplianceSummaryBanner';
import RiskControlCards from './risk-management/RiskControlCards';
import RiskManagementNarrative from './risk-management/RiskManagementNarrative';
import { cn } from '../../../lib/utils';

export default function RiskManagementSection() {
    return (
        <SectionWrapper id="gestion-riesgo" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <RiskManagementNarrative />
                </div>

                <div className="flex items-center justify-center lg:col-span-7 lg:justify-center">
                    <img
                        src="/assets/institucional/diagram_05.png"
                        alt="Diagrama del motor de gestión de riesgos DOAR"
                        className={cn('h-auto w-full max-w-2xl object-contain')}
                    />
                </div>
            </div>

            <RiskControlCards />

            <ComplianceSummaryBanner
                title="Operación resiliente ante riesgos emergentes"
                description="El Risk Engine coordina evaluación, alertas y mitigación en tiempo real — garantizando que cada operación sea evaluada antes, durante y después de su ejecución dentro del ecosistema DOAR."
            />
        </SectionWrapper>
    );
}
