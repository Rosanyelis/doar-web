import { Shield } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function RegulatoryBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-6 rounded-[24px] border border-doar-gold/25',
                'bg-white/[0.02] p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.06)]',
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
                        Transparente.
                    </span>
                    <span className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                        Resiliente.
                    </span>
                </div>
            </div>

            <p className="text-base leading-relaxed text-soft-gray">
                DOAR conecta experiencia, operación e infraestructura mediante un modelo de coordinación claramente definido.
            </p>
        </article>
    );
}
