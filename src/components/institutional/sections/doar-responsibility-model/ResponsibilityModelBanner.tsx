import { cn } from '../../../../lib/utils';

export default function ResponsibilityModelBanner() {
    return (
        <div
            className={cn(
                'mt-10 rounded-2xl border border-white/8 bg-deep-space/80 p-6 md:p-8',
                'flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10'
            )}
        >
            <div
                className="flex flex-wrap items-center gap-4 md:gap-6 lg:shrink-0"
                role="list"
                aria-label="Palabras clave del modelo de responsabilidades"
            >
                <span className="text-md font-bold uppercase tracking-[0.14em] text-doar-blue">
                    Coordinado.
                </span>
                <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
                <span className="text-md font-bold uppercase tracking-[0.14em] text-doar-gold">
                    Segregado.
                </span>
                <div className="hidden h-4 w-px bg-white/20 md:block" aria-hidden="true" />
                <span className="text-md font-bold uppercase tracking-[0.14em] text-doar-green">
                    Transparente.
                </span>
            </div>

            <div className="hidden h-12 w-px shrink-0 bg-white/15 lg:block" aria-hidden="true" />

            <p className="text-base font-light leading-relaxed text-soft-gray lg:min-w-0 lg:flex-1">
                DOAR conecta experiencia, operación e infraestructura manteniendo una separación clara
                de responsabilidades entre todos los participantes del ecosistema.
            </p>
        </div>
    );
}
