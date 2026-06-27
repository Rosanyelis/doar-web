import { Boxes, FileSearch, Settings, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AUDIT_TIMELINE_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof AUDIT_TIMELINE_STEPS)[number]['id'], LucideIcon> = {
    user: User,
    system: Settings,
    provider: Boxes,
    compliance: ShieldCheck,
    audit: FileSearch,
};

const CARD_TITLES: Record<(typeof AUDIT_TIMELINE_STEPS)[number]['id'], string> = {
    user: 'User Events',
    system: 'System Events',
    provider: 'Provider Events',
    compliance: 'Compliance Events',
    audit: 'Audit Records',
};

export default function AuditTrailCards() {
    return (
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {AUDIT_TIMELINE_STEPS.map((step) => {
                const Icon = CARD_ICONS[step.id];
                const isHighlight = 'highlight' in step && step.highlight;

                return (
                    <article
                        key={step.id}
                        className={cn(
                            'rounded-xl border bg-deep-space/80 p-5',
                            'transition-all duration-200',
                            isHighlight
                                ? 'border-doar-gold/50 shadow-[0_0_20px_rgba(245,196,0,0.1)]'
                                : 'border-white/8 hover:border-white/12'
                        )}
                    >
                        <div className="flex items-start gap-3">
                            <Icon
                                className={cn(
                                    'h-10 w-10 shrink-0',
                                    isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                                )}
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <div className="min-w-0 flex-1">
                                <h3
                                    className={cn(
                                        'text-md font-semibold leading-tight',
                                        isHighlight ? 'text-doar-gold' : 'text-text-primary'
                                    )}
                                >
                                    {CARD_TITLES[step.id]}
                                </h3>
                                <div
                                    className={cn(
                                        'mt-2 h-px w-12',
                                        isHighlight ? 'bg-doar-gold/60' : 'bg-doar-blue/40'
                                    )}
                                    aria-hidden="true"
                                />
                            </div>
                        </div>

                        <p className="mt-3 text-[14px] font-light leading-relaxed text-white">
                            {step.description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
