import { Boxes, FileSearch, Settings, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AUDIT_TIMELINE_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const STEP_ICONS: Record<(typeof AUDIT_TIMELINE_STEPS)[number]['id'], LucideIcon> = {
    user: User,
    system: Settings,
    provider: Boxes,
    compliance: ShieldCheck,
    audit: FileSearch,
};

function TimelineNode({
    step,
    isLast,
    variant,
}: {
    step: (typeof AUDIT_TIMELINE_STEPS)[number];
    isLast: boolean;
    variant: 'vertical' | 'horizontal';
}) {
    const Icon = STEP_ICONS[step.id];
    const isHighlight = 'highlight' in step && step.highlight;

    if (variant === 'vertical') {
        return (
            <div className="flex gap-4">
                <div className="flex flex-col items-center">
                    <div
                        className={cn(
                            'relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2',
                            'bg-deep-space/90',
                            isHighlight
                                ? 'border-doar-gold shadow-[0_0_20px_rgba(245,196,0,0.2)]'
                                : 'border-doar-blue/40'
                        )}
                    >
                        <Icon
                            className={cn(
                                'h-7 w-7',
                                isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                            )}
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    </div>
                    {!isLast && (
                        <div className="h-full w-px bg-doar-blue/35" aria-hidden="true" />
                    )}
                </div>
                <div className="flex flex-col pb-8 pt-1">
                    <span
                        className={cn(
                            'text-sm font-bold tracking-wider',
                            isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                        )}
                    >
                        {step.step}
                    </span>
                    <p
                        className={cn(
                            'mt-1 max-w-[220px] text-left text-sm font-light uppercase leading-tight tracking-wider',
                            isHighlight ? 'text-doar-gold' : 'text-white'
                        )}
                    >
                        {step.title}
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="relative flex flex-1 flex-col items-center">
            {!isLast && (
                <div
                    className="absolute left-[calc(50%+28px)] top-10 z-0 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-doar-blue/50"
                    aria-hidden="true"
                />
            )}

            <div
                className={cn(
                    'relative z-10 mb-3 flex h-22 w-22 items-center justify-center rounded-full border-2',
                    'bg-deep-space/90',
                    isHighlight
                        ? 'border-doar-gold shadow-[0_0_20px_rgba(245,196,0,0.2)]'
                        : 'border-doar-blue/40'
                )}
            >
                <Icon
                    className={cn(
                        'h-16 w-16',
                        isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                    )}
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
            </div>

            <span
                className={cn(
                    'text-[16px] font-bold tracking-wider',
                    isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                )}
            >
                {step.step}
            </span>

            <p
                className={cn(
                    'mt-1 max-w-[140px] text-center text-[14px] font-light uppercase leading-tight tracking-wider',
                    isHighlight ? 'text-doar-gold' : 'text-white'
                )}
            >
                {step.title}
            </p>
        </div>
    );
}

export default function AuditTimelineDiagram() {
    return (
        <div
            className="relative mt-12 w-full pb-2 md:mt-16"
            role="img"
            aria-label="Línea de tiempo de trazabilidad y auditoría DOAR"
        >
            {/* Mobile: vertical timeline */}
            <div className="mx-auto max-w-md lg:hidden">
                {AUDIT_TIMELINE_STEPS.map((step, index) => (
                    <TimelineNode
                        key={step.id}
                        step={step}
                        isLast={index === AUDIT_TIMELINE_STEPS.length - 1}
                        variant="vertical"
                    />
                ))}
            </div>

            {/* Desktop: horizontal timeline */}
            <div className="relative mx-auto hidden min-w-[1200px] max-w-7xl items-start justify-between px-2 lg:flex">
                <div
                    className="absolute left-[10%] right-[10%] top-10 h-px bg-doar-blue/35"
                    aria-hidden="true"
                />
                {AUDIT_TIMELINE_STEPS.map((step, index) => (
                    <TimelineNode
                        key={step.id}
                        step={step}
                        isLast={index === AUDIT_TIMELINE_STEPS.length - 1}
                        variant="horizontal"
                    />
                ))}
            </div>
        </div>
    );
}
