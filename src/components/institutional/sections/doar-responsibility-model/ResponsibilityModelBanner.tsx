import { cn } from '../../../../lib/utils';

export default function ResponsibilityModelBanner() {
    return (
        <div
            className={cn(
                'mt-10 rounded-2xl border border-white/8 bg-deep-space/80 p-6 md:p-8',
                'flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between'
            )}
        >
            <div className="flex flex-wrap items-center gap-4 md:gap-6" role="list" aria-label="Palabras clave del modelo de responsabilidades">
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-gold">
                    COORDINADO.
                </span>
                <div className="hidden md:block h-4 w-px bg-white/20" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-gold">
                    SEGREGADO.
                </span>
                <div className="hidden md:block h-4 w-px bg-white/20" aria-hidden="true" />
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-green">
                    TRANSPARENTE.
                </span>
            </div>
            <p className="text-base font-light leading-relaxed text-soft-gray lg:max-w-xl lg:text-right">
                DOAR conecta experiencia, operación e infraestructura manteniendo una separación clara de
                responsabilidades entre todos los participantes del ecosistema.
            </p>
        </div>
    );
}
