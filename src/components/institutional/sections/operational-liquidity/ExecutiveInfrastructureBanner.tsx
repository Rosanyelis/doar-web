import { PARTNER_LOGOS } from '../../shared/partnerLogos';
import { cn } from '../../../../lib/utils';

export default function ExecutiveInfrastructureBanner() {
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
            <div className="flex items-start gap-4 md:max-w-md">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-doar-gold/30 bg-doar-gold/5">
                    <svg
                        className="h-6 w-6 text-doar-gold"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.75}
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                        />
                    </svg>
                </div>
                <p className="text-sm font-light leading-relaxed text-soft-gray">
                    La capacidad operativa de DOAR se apoya en proveedores especializados para custodia, pagos, infraestructura blockchain y servicios financieros.
                </p>
            </div>

            <div className="flex items-center gap-8 overflow-x-auto scrollbar-none">
                {(['stripe', 'dlocal', 'circle', 'fireblocks'] as const).map((key) => (
                    <span key={key} className="shrink-0 text-text-primary/60">
                        {PARTNER_LOGOS[key]}
                    </span>
                ))}
            </div>
        </article>
    );
}
