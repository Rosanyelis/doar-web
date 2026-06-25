import { Shield } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function DoarFoundationBanner() {
    return (
        <article
            className={cn(
                'relative overflow-hidden rounded-[24px] border border-doar-gold/25',
                'bg-white/[0.02] p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.06)]',
                'md:flex md:items-center md:justify-between md:gap-10',
                'transition-all duration-200'
            )}
        >
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                <div className="absolute right-0 top-1/2 -translate-y-1/2 h-[200px] w-[200px] rounded-full bg-doar-gold/5 blur-[80px]" />
            </div>

            <div className="relative flex flex-col items-start gap-4 md:w-1/2 md:items-center md:gap-0">
                <Shield className="h-8 w-8 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
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

            <p className="relative mt-4 max-w-[520px] text-base leading-relaxed text-soft-gray md:mt-0 md:w-1/2 md:text-right">
                DOAR conecta experiencia, operación e infraestructura mediante un modelo de coordinación claramente definido.
            </p>
        </article>
    );
}
