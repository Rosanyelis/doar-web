import { BadgeCheck, Target } from 'lucide-react';
import { cn } from '../../../../lib/utils';

function ReconciliationBannerIcon() {
    return (
        <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center">
            <Target className="h-12 w-12 text-doar-gold/30" strokeWidth={1.5} aria-hidden="true" />
            <BadgeCheck
                className="absolute h-6 w-6 text-doar-gold"
                strokeWidth={1.75}
                aria-hidden="true"
            />
        </span>
    );
}

export default function ExecutiveReconciliationBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-6 rounded-xl border border-doar-gold/25',
                'bg-deep-space/80 p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.08)]',
                'md:flex-row md:items-center md:gap-10',
                'transition-all duration-200'
            )}
        >
            <ReconciliationBannerIcon />

            <div className="min-w-0 flex-1">
                <h3 className="mb-3 text-lg font-semibold text-doar-gold">
                    Una única fuente de verdad operacional
                </h3>
                <p className="text-base font-light leading-relaxed text-text-primary">
                    La conciliación mantiene el ledger alineado con los eventos de infraestructura,
                    transformando datos distribuidos en un estado operacional consistente y
                    confiable para toda la plataforma.
                </p>
            </div>
        </article>
    );
}
