import SectionWrapper from '../shared/SectionWrapper';
import ComplianceFrameworkGrid from './compliance-framework/ComplianceFrameworkGrid';
import ComplianceMethodologyBanner from './compliance-framework/ComplianceMethodologyBanner';
import ComplianceShieldGraphic from './compliance-framework/ComplianceShieldGraphic';

export default function ComplianceFrameworkSection() {
    return (
        <SectionWrapper className="min-h-screen">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className="lg:col-span-6">
                    <h1 className="mb-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-6xl">
                        Compliance Framework
                    </h1>
                    <p className="max-w-lg text-lg font-light leading-relaxed text-soft-gray">
                        Un marco integral de cumplimiento diseñado para verificación de
                        identidad, monitoreo de transacciones y gestión continua de riesgo
                        operacional.
                    </p>
                </div>

                <div className="flex justify-center lg:col-span-6">
                    <ComplianceShieldGraphic />
                </div>
            </div>

            <ComplianceFrameworkGrid />
            <ComplianceMethodologyBanner />
        </SectionWrapper>
    );
}
