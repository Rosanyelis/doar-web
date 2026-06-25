import { cn } from '../../../../lib/utils';

export default function RegulatoryDiagram() {
    return (
        <div className="relative flex w-full flex-col items-center gap-6">
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
                <div className="h-[300px] w-[300px] rounded-full bg-doar-gold/[0.03] blur-[80px]" />
            </div>

            <div className="relative z-10 flex w-full max-w-[420px] flex-col items-center gap-6">
                <div
                    className={cn(
                        'w-full rounded-[24px] border border-white/10 bg-white/[0.02] p-6',
                        'text-center'
                    )}
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-soft-gray/70">
                        Users &amp; Businesses
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="h-8 w-px bg-doar-gold/40" />
                    <div className="h-2 w-2 rounded-full bg-doar-gold" />
                    <div className="h-8 w-px bg-doar-gold/40" />
                </div>

                <div
                    className={cn(
                        'w-full rounded-[24px] border border-doar-gold/30',
                        'bg-doar-gold/5 p-8',
                        'shadow-[0_0_40px_rgba(245,196,0,0.06)]',
                        'text-center'
                    )}
                >
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-gold">
                        DOAR
                    </span>
                    <div className="mx-auto mt-2 h-px w-12 bg-doar-gold/40" />
                    <span className="mt-2 block text-xs font-medium text-soft-gray/80">
                        Financial Orchestration Layer
                    </span>
                </div>

                <div className="flex flex-col items-center gap-1">
                    <div className="h-8 w-px bg-doar-gold/40" />
                    <div className="h-2 w-2 rounded-full bg-doar-gold" />
                    <div className="h-8 w-px bg-doar-gold/40" />
                </div>

                <div
                    className={cn(
                        'w-full rounded-[24px] border border-white/10 bg-white/[0.02] p-6',
                        'text-center'
                    )}
                >
                    <span className="text-xs font-semibold uppercase tracking-[0.14em] text-soft-gray/70">
                        Specialized Partners
                    </span>
                </div>
            </div>
        </div>
    );
}
