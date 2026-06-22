import { Shield } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function ExecutiveOperationalBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-6 rounded-3xl border border-doar-gold/25',
                'bg-white/2 p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.08)]',
                'md:flex-row md:items-center md:gap-10',
                'transition-all duration-200'
            )}
        >
            <div className="flex shrink-0 items-start gap-4 md:w-64">
                <Shield className="mt-0.5 h-8 w-8 shrink-0 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                <div className="flex flex-col gap-1">
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                        Unificado.
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                        Interoperable.
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                        Escalable.
                    </span>
                </div>
            </div>

            <p className="text-base leading-relaxed text-soft-gray">
                Todos los componentes operan bajo un modelo unificado que garantiza trazabilidad,
                cumplimiento, seguridad y eficiencia operacional a lo largo de todo el ciclo de vida
                financiero. Una plataforma, un flujo operativo, múltiples funciones especializadas
                coordinadas centralmente.
            </p>
        </article>
    );
}
