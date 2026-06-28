import {
    ArrowDownToLine,
    ArrowRight,
    ArrowUpFromLine,
    Landmark,
    RefreshCw,
    User,
    UserCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TRANSACTION_CYCLE_STEPS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

type Step = (typeof TRANSACTION_CYCLE_STEPS)[number];

const BOX_ICONS: Partial<Record<Step['id'], LucideIcon>> = {
    'pay-in': ArrowDownToLine,
    treasury: Landmark,
    settlement: RefreshCw,
    'pay-out': ArrowUpFromLine,
};

function FlowArrow() {
    return (
        <ArrowRight
            className="mx-1 mt-6 h-4 w-4 shrink-0 self-start text-doar-gold sm:mx-2"
            strokeWidth={2}
            aria-hidden="true"
        />
    );
}

function DottedSubtitle({ text, accent }: { text: string; accent: 'gold' | 'blue' }) {
    return (
        <div className="mt-2 flex flex-col items-center">
            <div
                className={cn(
                    'h-5 w-px border-l border-dashed',
                    accent === 'gold' ? 'border-doar-gold/60' : 'border-doar-blue/60'
                )}
                aria-hidden="true"
            />
            <span className="mt-1 max-w-[88px] text-center text-[9px] font-light leading-tight text-soft-gray">
                {text}
            </span>
        </div>
    );
}

function CircleNode({
    label,
    subtitle,
    variant,
}: {
    label: string;
    subtitle?: string | null;
    variant: 'user' | 'recipient';
}) {
    const Icon = variant === 'recipient' ? UserCheck : User;

    return (
        <div className="flex shrink-0 flex-col items-center">
            <div
                className={cn(
                    'flex h-14 w-14 items-center justify-center rounded-full',
                    'border border-doar-blue/40 bg-doar-blue/5'
                )}
            >
                <Icon className="h-6 w-6 text-doar-blue" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <span className="mt-2 text-[9px] font-semibold uppercase tracking-[0.12em] text-text-primary">
                {label}
            </span>
            {subtitle && <DottedSubtitle text={subtitle} accent="blue" />}
        </div>
    );
}

function ProcessBox({ step }: { step: Step }) {
    const isGold = step.accent === 'gold';
    const isLedger = step.type === 'ledger';
    const Icon = BOX_ICONS[step.id];

    return (
        <div className="flex shrink-0 flex-col items-center">
            <article
                className={cn(
                    'flex h-[88px] w-[88px] flex-col items-center justify-center gap-1.5 rounded-xl border px-1',
                    'bg-deep-space/90 sm:h-[96px] sm:w-[96px]',
                    isGold ? 'border-doar-gold/50' : 'border-doar-blue/40',
                    isLedger && 'shadow-[0_0_30px_rgba(245,196,0,0.18)]'
                )}
            >
                {isLedger ? (
                    <img
                        src="/assets/institucional/logo.svg"
                        alt=""
                        className="h-7 w-7 shrink-0"
                        aria-hidden="true"
                    />
                ) : (
                    Icon && (
                        <Icon
                            className={cn('h-6 w-6', isGold ? 'text-doar-gold' : 'text-doar-blue')}
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    )
                )}
                <span
                    className={cn(
                        'text-center text-[7px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-[8px]',
                        isGold ? 'text-doar-gold' : 'text-doar-blue'
                    )}
                >
                    {step.label}
                </span>
            </article>
            {step.subtitle && (
                <DottedSubtitle text={step.subtitle} accent={isGold ? 'gold' : 'blue'} />
            )}
        </div>
    );
}

function FlowNode({ step }: { step: Step }) {
    if (step.type === 'circle') {
        return <CircleNode label={step.label} variant="user" />;
    }

    if (step.type === 'recipient') {
        return <CircleNode label={step.label} subtitle={step.subtitle} variant="recipient" />;
    }

    return <ProcessBox step={step} />;
}

export default function TransactionCycleFlowDiagram() {
    return (
        <div
            className="w-full overflow-x-auto pb-4"
            role="img"
            aria-label="Diagrama del ciclo operativo de una transacción DOAR"
        >
            <div className="mx-auto flex min-w-[980px] items-start justify-center px-2">
                {TRANSACTION_CYCLE_STEPS.map((step, index) => (
                    <div key={step.id} className="flex items-start">
                        <FlowNode step={step} />
                        {index < TRANSACTION_CYCLE_STEPS.length - 1 && <FlowArrow />}
                    </div>
                ))}
            </div>
        </div>
    );
}
