import { cn } from '../../../../lib/utils';

export default function ResponsibilitiesBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-6 rounded-xl border border-white/8',
                'bg-deep-space/80 p-8 lg:flex-row lg:items-center lg:justify-between'
            )}
        >
            <p className="text-base leading-relaxed text-soft-gray lg:max-w-xl">
                DOAR conecta experiencia, operación e infraestructura manteniendo una separación clara de responsabilidades entre todos los participantes del ecosistema.
            </p>

            <div className="flex flex-wrap gap-6">
                {['Coordinado.', 'Segregado.', 'Transparente.'].map((tag) => (
                    <span
                        key={tag}
                        className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold"
                    >
                        {tag}
                    </span>
                ))}
            </div>
        </article>
    );
}
