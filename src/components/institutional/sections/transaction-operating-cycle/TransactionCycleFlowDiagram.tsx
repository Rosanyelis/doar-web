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
        <div className="flex shrink-0 items-start px-1 pt-10 sm:px-2 sm:pt-12" aria-hidden="true">
            <ArrowRight className="h-5 w-5 text-doar-gold sm:h-6 sm:w-6" strokeWidth={2} />
        </div>
    );
}

function DottedSubtitle({ text, accent }: { text: string; accent: 'gold' | 'blue' }) {
    return (
        <div className="mt-3 flex w-full flex-col items-center">
            <div
                className={cn(
                    'h-6 w-px border-l border-dashed sm:h-7',
                    accent === 'gold' ? 'border-doar-gold/60' : 'border-doar-blue/60'
                )}
                aria-hidden="true"
            />
            <span className="mt-1.5 max-w-[120px] px-1 text-center text-[11px] font-light leading-snug text-soft-gray sm:text-xs">
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
        <div className="flex w-full flex-col items-center">
            <div
                className={cn(
                    'flex h-16 w-16 items-center justify-center rounded-full sm:h-[72px] sm:w-[72px]',
                    'border border-doar-blue/40 bg-doar-blue/5'
                )}
            >
                <Icon className="h-8 w-8 text-doar-blue sm:h-9 sm:w-9" strokeWidth={1.75} aria-hidden="true" />
            </div>
            <span className="mt-3 text-xs font-semibold uppercase tracking-[0.12em] text-text-primary sm:text-sm">
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
        <div className="flex w-full flex-col items-center">
            <article
                className={cn(
                    'flex min-h-[112px] w-full max-w-[148px] flex-col items-center justify-center gap-2',
                    'rounded-xl border px-2 py-4 sm:min-h-[128px] sm:max-w-[168px] sm:px-3',
                    'bg-deep-space/90',
                    isGold ? 'border-doar-gold/50' : 'border-doar-blue/40',
                    isLedger && 'shadow-[0_0_30px_rgba(245,196,0,0.18)]'
                )}
            >
                {isLedger ? (
                    <img
                        src="/assets/institucional/logo.svg"
                        alt=""
                        className="h-9 w-9 shrink-0 sm:h-10 sm:w-10"
                        aria-hidden="true"
                    />
                ) : (
                    Icon && (
                        <Icon
                            className={cn(
                                'h-8 w-8 sm:h-9 sm:w-9',
                                isGold ? 'text-doar-gold' : 'text-doar-blue'
                            )}
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    )
                )}
                <span
                    className={cn(
                        'text-center text-[10px] font-bold uppercase leading-tight tracking-[0.08em] sm:text-xs',
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
            className="w-full"
            role="img"
            aria-label="Diagrama del ciclo operativo de una transacción DOAR"
        >
            <div className="flex w-full items-start">
                {TRANSACTION_CYCLE_STEPS.map((step, index) => (
                    <div key={step.id} className="contents">
                        <div className="flex min-w-0 flex-1 justify-center">
                            <FlowNode step={step} />
                        </div>
                        {index < TRANSACTION_CYCLE_STEPS.length - 1 && <FlowArrow />}
                    </div>
                ))}
            </div>
        </div>
    );
}
