import { BarChart3, Lock, Shield, ShieldCheck, Zap } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TRANSACTION_CYCLE_SUMMARY } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const SUMMARY_ICONS: Record<(typeof TRANSACTION_CYCLE_SUMMARY)[number]['icon'], LucideIcon> = {
    Shield,
    BarChart3,
    Lock,
    Zap,
};

export default function TransactionCycleSummaryBar() {
    return (
        <article
            className={cn(
                'mt-12 overflow-hidden rounded-2xl border border-doar-gold/30 md:mt-16',
                'bg-deep-space/80 p-6 md:p-8',
                'grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:items-center lg:gap-0'
            )}
        >
            <div className="flex items-center gap-4 lg:pr-8">
                <div
                    className={cn(
                        'flex h-20 w-20 shrink-0 items-center justify-center rounded-full',
                        'border border-doar-gold/40 bg-doar-gold/5'
                    )}
                >
                    <ShieldCheck className="h-10 w-10 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <p className="text-sm font-bold uppercase leading-snug tracking-[0.1em] text-doar-gold">
                    Unificado. Transparente. Resiliente.
                </p>
            </div>

            {TRANSACTION_CYCLE_SUMMARY.map(({ id, label, icon }, index) => {
                const Icon = SUMMARY_ICONS[icon];

                return (
                    <div
                        key={id}
                        className={cn(
                            'flex flex-col items-center gap-3 text-center',
                            index > 0 && 'lg:border-l lg:border-white/10 lg:pl-6'
                        )}
                    >
                        <Icon className="h-10 w-10 text-doar-blue" strokeWidth={1.75} aria-hidden="true" />
                        <span className="max-w-[160px] text-sm font-light leading-relaxed text-soft-gray">
                            {label}
                        </span>
                    </div>
                );
            })}
        </article>
    );
}
