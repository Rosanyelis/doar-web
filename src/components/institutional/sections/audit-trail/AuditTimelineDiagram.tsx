import { FileText, Package, Settings, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { AUDIT_TIMELINE_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const STEP_ICONS: Record<(typeof AUDIT_TIMELINE_STEPS)[number]['id'], LucideIcon> = {
    user: User,
    system: Settings,
    provider: Package,
    compliance: ShieldCheck,
    audit: FileText,
};

export default function AuditTimelineDiagram() {
    return (
        <div
            className="relative mt-12 w-full overflow-x-auto pb-4"
            role="img"
            aria-label="Línea de tiempo de trazabilidad y auditoría DOAR"
        >
            <div className="relative mx-auto flex min-w-[640px] items-start justify-between px-4">
                <div
                    className="absolute left-8 right-8 top-6 h-px bg-doar-blue/30"
                    aria-hidden="true"
                />

                {AUDIT_TIMELINE_STEPS.map((step) => {
                    const Icon = STEP_ICONS[step.id];
                    const isHighlight = 'highlight' in step && step.highlight;

                    return (
                        <div
                            key={step.id}
                            className="relative z-10 flex w-[110px] flex-col items-center"
                        >
                            <div
                                className={cn(
                                    'mb-3 flex h-12 w-12 items-center justify-center rounded-full border-2',
                                    'bg-deep-space/90 text-xs font-bold',
                                    isHighlight
                                        ? 'border-doar-gold text-doar-gold shadow-[0_0_20px_rgba(245,196,0,0.2)]'
                                        : 'border-doar-blue/40 text-doar-blue'
                                )}
                            >
                                {step.step}
                            </div>

                            <Icon
                                className={cn(
                                    'mb-2 h-6 w-6',
                                    isHighlight ? 'text-doar-gold' : 'text-doar-blue'
                                )}
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />

                            <p
                                className={cn(
                                    'text-center text-[9px] font-semibold uppercase tracking-wider',
                                    isHighlight ? 'text-doar-gold' : 'text-text-primary'
                                )}
                            >
                                {step.title}
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
