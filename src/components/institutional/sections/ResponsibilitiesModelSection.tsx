import SectionWrapper from '../shared/SectionWrapper';
import ResponsibilitiesCapabilities from './responsibilities-model/ResponsibilitiesCapabilities';
import ResponsibilitiesTable from './responsibilities-model/ResponsibilitiesTable';
import ResponsibilitiesBanner from './responsibilities-model/ResponsibilitiesBanner';

export default function ResponsibilitiesModelSection() {
    return (
        <SectionWrapper id="responsabilidades" className="border-t border-white/6">
            <div className="mb-12">
                <span className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-doar-gold">
                    Modelo Operativo
                </span>
                <h2 className="mb-6 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl">
                    Modelo de
                    <br />
                    <span className="text-doar-gold">Responsabilidades</span>
                </h2>
                <p className="max-w-2xl text-[16px] font-light leading-relaxed text-white">
                    Cada participante conserva funciones claramente definidas dentro del modelo operativo de DOAR.
                </p>
            </div>

            <ResponsibilitiesTable />
            <ResponsibilitiesCapabilities />
            <ResponsibilitiesBanner />
        </SectionWrapper>
    );
}
