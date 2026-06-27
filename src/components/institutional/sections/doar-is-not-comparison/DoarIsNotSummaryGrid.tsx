import { Network, ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { DOAR_IS_NOT_SUMMARY_PILLARS } from '../../../../constants/institutional';

const ACCENT_STYLES = {
    blue: {
        icon: 'text-doar-blue',
        border: 'border-doar-blue/30',
        bg: 'bg-doar-blue/5',
        Icon: Network,
    },
    gold: {
        icon: 'text-doar-gold',
        border: 'border-doar-gold/30',
        bg: 'bg-doar-gold/5',
        Icon: ShieldCheck,
    },
    green: {
        icon: 'text-doar-green',
        border: 'border-doar-green/30',
        bg: 'bg-doar-green/5',
        Icon: ShieldCheck,
    },
} as const;

export default function DoarIsNotSummaryGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOAR_IS_NOT_SUMMARY_PILLARS.map(({ id, title, description, accent }) => {
                const { icon: iconClass, border, bg, Icon } =
                    ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-2xl border border-white/8 bg-deep-space/80 p-6 md:p-8',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className={cn(
                                    'flex h-15 w-15 shrink-0 items-center justify-center rounded-full border',
                                    border,
                                    bg
                                )}
                                aria-hidden="true"
                            >
                                <Icon className={cn('h-10 w-10', iconClass)} strokeWidth={2} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="text-base font-semibold text-white">{title}</h3>
                                <p className="mt-2 text-sm font-light leading-relaxed text-white">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </article>
                );
            })}
        </div>
    );
}
