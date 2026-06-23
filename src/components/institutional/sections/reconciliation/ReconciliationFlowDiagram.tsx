import type { ReactNode } from 'react';
import { ArrowDown, Layers, Network, RefreshCw, ShieldCheck } from 'lucide-react';
import {
    RECONCILIATION_INFRA_ITEMS,
    RECONCILIATION_LEDGER_ITEMS,
} from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

function SourceBox({
    title,
    items,
    variant,
    icon,
}: {
    title: string;
    items: readonly string[];
    variant: 'gold' | 'blue';
    icon: ReactNode;
}) {
    const isGold = variant === 'gold';

    return (
        <article
            className={cn(
                'rounded-xl border bg-deep-space/80 px-4 py-4 backdrop-blur-sm',
                isGold ? 'border-doar-gold/50' : 'border-doar-blue/30'
            )}
        >
            <div className="flex items-center gap-3">
                {icon}
                <h3
                    className={cn(
                        'text-[10px] font-semibold uppercase tracking-[0.12em]',
                        isGold ? 'text-doar-gold' : 'text-text-primary'
                    )}
                >
                    {title}
                </h3>
            </div>

            <ul className="mt-3 space-y-1">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-2 text-[9px] font-medium text-soft-gray"
                    >
                        <span
                            className={cn(
                                'h-1 w-1 shrink-0 rounded-full',
                                isGold ? 'bg-doar-gold' : 'bg-doar-blue'
                            )}
                            aria-hidden="true"
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
}

function ReconciliationEngineNode() {
    return (
        <article
            className={cn(
                'rounded-xl border border-doar-gold/50 bg-deep-space/80 px-5 py-4',
                'shadow-[0_0_15px_rgba(245,196,0,0.3)] ledger-glow-pulse backdrop-blur-sm'
            )}
        >
            <div className="flex items-center gap-3">
                <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
                    <RefreshCw
                        className="h-10 w-10 text-doar-gold"
                        strokeWidth={1.75}
                        aria-hidden="true"
                    />
                    <ShieldCheck
                        className="absolute h-4 w-4 text-doar-gold"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    />
                </span>
                <div className="min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-doar-gold">
                        Reconciliation Engine
                    </h3>
                    <p className="mt-1 text-[10px] font-medium leading-snug text-soft-gray">
                        Matches, validates and reconciles records across systems
                    </p>
                </div>
            </div>
        </article>
    );
}

function ValidatedStateNode() {
    return (
        <article className="rounded-xl border border-doar-green/40 bg-deep-space/80 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-3">
                <ShieldCheck
                    className="h-10 w-10 shrink-0 text-doar-green"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
                <div className="min-w-0">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-doar-green">
                        Validated Operational State
                    </h3>
                    <p className="mt-1 text-[10px] font-medium leading-snug text-soft-gray">
                        Consistent, accurate and trusted operational view across all systems
                    </p>
                </div>
            </div>
        </article>
    );
}

function ConvergenceArrows() {
    return (
        <svg
            className="mx-auto h-10 w-full max-w-xs"
            viewBox="0 0 320 40"
            fill="none"
            aria-hidden="true"
        >
            <line
                x1="80"
                y1="4"
                x2="160"
                y2="36"
                stroke="#f5c400"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                className="institutional-dash"
            />
            <line
                x1="240"
                y1="4"
                x2="160"
                y2="36"
                stroke="#2f6bff"
                strokeWidth="1.5"
                strokeDasharray="5 4"
                className="institutional-dash"
            />
        </svg>
    );
}

function GreenFlowArrow() {
    return (
        <div className="flex justify-center py-1" aria-hidden="true">
            <ArrowDown className="h-5 w-5 text-doar-green" strokeWidth={2} />
        </div>
    );
}

export default function ReconciliationFlowDiagram() {
    return (
        <div
            className={cn(
                'mx-auto w-full max-w-lg rounded-xl border border-white/10',
                'bg-deep-space/40 p-5'
            )}
            role="img"
            aria-label="Diagrama de liquidación y conciliación operacional DOAR"
        >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <SourceBox
                    title="DOAR Ledger"
                    items={RECONCILIATION_LEDGER_ITEMS}
                    variant="gold"
                    icon={
                        <Layers
                            className="h-8 w-8 shrink-0 text-doar-gold"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    }
                />
                <SourceBox
                    title="Infrastructure Events"
                    items={RECONCILIATION_INFRA_ITEMS}
                    variant="blue"
                    icon={
                        <Network
                            className="h-8 w-8 shrink-0 text-doar-blue"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    }
                />
            </div>

            <ConvergenceArrows />

            <ReconciliationEngineNode />

            <GreenFlowArrow />

            <ValidatedStateNode />
        </div>
    );
}
