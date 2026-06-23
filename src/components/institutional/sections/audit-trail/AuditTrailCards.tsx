import { FileText, Package, Settings, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AUDIT_TIMELINE_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof AUDIT_TIMELINE_STEPS)[number]['id'], LucideIcon> = {
    user: User,
    system: Settings,
    provider: Package,
    compliance: ShieldCheck,
    audit: FileText,
};

export default function AuditTrailCards() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
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
                        <Icon
                            className={cn(
                                'mb-3 h-6 w-6',
                                isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                            )}
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                        <h3
                            className={cn(
                                'mb-2 text-xs font-semibold leading-tight',
                                isHighlight ? 'text-doar-gold' : 'text-text-primary'
                            )}
                        >
                            {step.title}
                        </h3>
                        <p className="text-[11px] font-light leading-relaxed text-soft-gray">
                            {step.description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
