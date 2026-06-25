import { User, Users, ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { RESPONSIBILITY_MODEL_PILLARS } from '../../../../constants/institutional';

const ACCENT_STYLES = {
    blue: {
        icon: 'text-doar-blue',
        border: 'border-doar-blue/30',
        bg: 'bg-doar-blue/5',
        line: 'bg-doar-blue',
        Icon: User,
    },
    gold: {
        icon: 'text-doar-gold',
        border: 'border-doar-gold/30',
        bg: 'bg-doar-gold/5',
        line: 'bg-doar-gold',
        Icon: Users,
    },
    green: {
        icon: 'text-doar-green',
        border: 'border-doar-green/30',
        bg: 'bg-doar-green/5',
        line: 'bg-doar-green',
        Icon: ShieldCheck,
    },
} as const;

export default function ResponsibilityModelPillars() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {RESPONSIBILITY_MODEL_PILLARS.map(({ id, title, description, accent }) => {
                const { icon: iconClass, border, bg, line, Icon } = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];
                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-2xl border border-white/8 bg-deep-space/80 p-6 md:p-8',
                            'transition-all duration-200',
                            'hover:-translate-y-1 hover:border-white/12'
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div
                                className={cn(
                                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                                    border,
                                    bg
                                )}
                                aria-hidden="true"
                            >
                                <Icon
                                    className={cn('h-5 w-5', iconClass)}
                                    strokeWidth={1.75}
                                />
                            </div>
                            <div>
                                <h3 className="text-sm font-medium text-text-primary">{title}</h3>
                                <div className={cn('mt-2 h-px w-10', line)} aria-hidden="true" />
                                <p className="mt-3 text-xs font-light leading-relaxed text-soft-gray">
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
