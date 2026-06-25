import { cn } from '../../../../lib/utils';

export default function EcosystemDiagram() {
    return (
        <div className="flex w-full flex-col items-center gap-6">
            <div
                className={cn(
                    'w-full max-w-[400px] rounded-xl border border-white/10 bg-deep-space/60 p-6',
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
                    'w-full max-w-[400px] rounded-xl border border-doar-gold/30',
                    'bg-doar-gold/5 p-8',
                    'shadow-[0_0_40px_rgba(245,196,0,0.08)]',
                    'text-center'
                )}
            >
                <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-gold">
                    DOAR
                </span>
                <div className="mt-2 h-px w-12 mx-auto bg-doar-gold/40" />
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
                    'w-full max-w-[400px] rounded-xl border border-white/10 bg-deep-space/60 p-6',
                    'text-center'
                )}
            >
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-soft-gray/70">
                    Specialized Partners
                </span>
            </div>
        </div>
    );
}
