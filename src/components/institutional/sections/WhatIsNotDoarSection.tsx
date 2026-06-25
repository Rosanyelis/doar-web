import SectionWrapper from '../shared/SectionWrapper';
import ComparisonCapabilities from './what-is-not-doar/ComparisonCapabilities';
import ComparisonTable from './what-is-not-doar/ComparisonTable';
import ComparisonBanner from './what-is-not-doar/ComparisonBanner';

export default function WhatIsNotDoarSection() {
    return (
        <SectionWrapper id="que-no-es" className="border-t border-white/6">
            <div className="mb-12">
                <span className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-doar-gold">
                    Definición
                </span>
                <h2 className="mb-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl">
                    Qué <span className="text-doar-gold">NO</span> es DOAR
                </h2>
                <p className="max-w-2xl text-[16px] font-light leading-relaxed text-white">
                    La plataforma coordina infraestructura financiera especializada, pero no sustituye a las entidades responsables de funciones reguladas.
                </p>
            </div>

            <ComparisonTable />
            <ComparisonCapabilities />
            <ComparisonBanner />
        </SectionWrapper>
    );
}
