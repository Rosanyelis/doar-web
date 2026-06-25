import { Check, X } from 'lucide-react';
import { WHAT_IS_NOT_DOAR_TABLE } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

export default function ComparisonTable() {
    return (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
            <article
                className={cn(
                    'rounded-xl border border-white/8 bg-deep-space/80 p-6'
                )}
            >
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-doar-gold/10">
                        <span className="text-lg font-bold text-doar-gold">DOAR</span>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-text-primary">
                        DOAR IS
                    </h3>
                </div>
                <ul className="space-y-3">
                    {WHAT_IS_NOT_DOAR_TABLE.filter((row) => row.is).map((row) => (
                        <li
                            key={row.capability}
                            className="flex items-center gap-3 text-sm font-light text-soft-gray"
                        >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-doar-gold/15">
                                <Check className="h-3 w-3 text-doar-gold" />
                            </span>
                            {row.capability}
                        </li>
                    ))}
                </ul>
            </article>

            <article
                className={cn(
                    'rounded-xl border border-white/8 bg-deep-space/80 p-6'
                )}
            >
                <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10">
                        <span className="text-lg font-bold text-soft-gray/60">IS NOT</span>
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.1em] text-text-primary">
                        DOAR IS NOT
                    </h3>
                </div>
                <ul className="space-y-3">
                    {WHAT_IS_NOT_DOAR_TABLE.filter((row) => row.isNot).map((row) => (
                        <li
                            key={row.capability}
                            className="flex items-center gap-3 text-sm font-light text-soft-gray"
                        >
                            <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white/5">
                                <X className="h-3 w-3 text-soft-gray/60" />
                            </span>
                            {row.capability}
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    );
}
