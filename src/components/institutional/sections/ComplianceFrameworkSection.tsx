import SectionWrapper from '../shared/SectionWrapper';
import ComplianceFrameworkGrid from './compliance-framework/ComplianceFrameworkGrid';
import ComplianceMethodologyBanner from './compliance-framework/ComplianceMethodologyBanner';
import ComplianceShieldGraphic from './compliance-framework/ComplianceShieldGraphic';

export default function ComplianceFrameworkSection() {
    return (
        <SectionWrapper id="cumplimiento" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-8">
                    <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[42px]">
                        Marco de Cumplimiento
                    </h2>

                    <div className="mt-6 h-0.5 w-12 bg-doar-gold" aria-hidden="true" />

                    <p className="mt-8 max-w-2xl text-base font-light leading-relaxed text-soft-gray">
                        Verificación, monitoreo y controles diseñados para respaldar una operación segura y
                        conforme durante todo el ciclo de vida del usuario y de las transacciones procesadas
                        en la plataforma.
                    </p>
                </div>

                <div className="flex justify-center lg:col-span-4 lg:justify-end">
                    <ComplianceShieldGraphic />
                </div>
            </div>

            <ComplianceFrameworkGrid />
            <ComplianceMethodologyBanner />
        </SectionWrapper>
    );
}
