import {
    CheckCircle2,
    FileText,
    Landmark,
    Layers,
    User,
    ArrowDown,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { LEDGER_FLOW_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const STEP_ICONS: Record<(typeof LEDGER_FLOW_STEPS)[number]['id'], LucideIcon> = {
    usuario: User,
    operacion: FileText,
    ledger: Layers,
    conciliacion: CheckCircle2,
    liquidacion: Landmark,
};

function FlowArrow() {
    return (
        <div className="flex justify-center py-1" aria-hidden="true">
            <ArrowDown className="h-5 w-5 text-doar-blue" strokeWidth={2} />
        </div>
    );
}

interface FlowStepProps {
    id: (typeof LEDGER_FLOW_STEPS)[number]['id'];
    title: string;
    description: string;
    highlighted: boolean;
}

function FlowStep({ id, title, description, highlighted }: FlowStepProps) {
    const Icon = STEP_ICONS[id];

    return (
        <article
            className={cn(
                'flex items-start gap-4 rounded-xl border px-5 py-4',
                'bg-deep-space/60 backdrop-blur-sm',
                highlighted
                    ? cn(
                          'border-doar-gold/50 shadow-[0_0_40px_rgba(245,196,0,0.15)]',
                          'ledger-glow-pulse'
                      )
                    : 'border-doar-blue/25'
            )}
        >
            <Icon
                className={cn(
                    'mt-0.5 h-12 w-12 shrink-0',
                    highlighted ? 'text-doar-gold' : 'text-doar-blue/80'
                )}
                strokeWidth={1.75}
                aria-hidden="true"
            />

            <div className="min-w-0">
                <h3
                    className={cn(
                        'mb-1 text-xs font-semibold uppercase tracking-[0.12em]',
                        highlighted ? 'text-doar-gold' : 'text-text-primary'
                    )}
                >
                    {title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-soft-gray">{description}</p>
            </div>
        </article>
    );
}

export default function LedgerFlowDiagram() {
    return (
        <div className="flex w-full max-w-[400px] flex-col lg:max-w-lg">
            {LEDGER_FLOW_STEPS.map((step, index) => (
                <div key={step.id}>
                    <FlowStep {...step} />
                    {index < LEDGER_FLOW_STEPS.length - 1 && <FlowArrow />}
                </div>
            ))}
        </div>
    );
}
