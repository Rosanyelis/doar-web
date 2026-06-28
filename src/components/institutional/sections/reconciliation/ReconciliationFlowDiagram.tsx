import type { ReactNode } from 'react';
import { ArrowDown, Layers, Network, RefreshCw, ShieldCheck } from 'lucide-react';
import {
    RECONCILIATION_ENGINE,
    RECONCILIATION_INFRA_ITEMS,
    RECONCILIATION_LEDGER_ITEMS,
    RECONCILIATION_SOURCES,
    RECONCILIATION_VALIDATED,
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
                'rounded-xl border bg-deep-space/80 px-5 py-5 backdrop-blur-sm sm:px-6 sm:py-6',
                isGold ? 'border-doar-gold/50' : 'border-doar-blue/30'
            )}
        >
            <div className="flex items-center gap-4">
                {icon}
                <h3
                    className={cn(
                        'text-xs font-semibold uppercase tracking-[0.12em] sm:text-sm',
                        isGold ? 'text-doar-gold' : 'text-text-primary'
                    )}
                >
                    {title}
                </h3>
            </div>

            <ul className="mt-4 space-y-2">
                {items.map((item) => (
                    <li
                        key={item}
                        className="flex items-center gap-2.5 text-[11px] font-medium text-soft-gray sm:text-xs"
                    >
                        <span
                            className={cn(
                                'h-1.5 w-1.5 shrink-0 rounded-full',
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
                'rounded-xl border border-doar-gold/50 bg-deep-space/80 px-6 py-5 sm:px-7 sm:py-6',
                'shadow-[0_0_20px_rgba(245,196,0,0.25)] ledger-glow-pulse backdrop-blur-sm'
            )}
        >
            <div className="flex items-center gap-4">
                <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center sm:h-14 sm:w-14">
                    <RefreshCw
                        className="h-12 w-12 text-doar-gold sm:h-14 sm:w-14"
                        strokeWidth={1.75}
                        aria-hidden="true"
                    />
                    <ShieldCheck
                        className="absolute h-5 w-5 text-doar-gold sm:h-6 sm:w-6"
                        strokeWidth={2.5}
                        aria-hidden="true"
                    />
                </span>
                <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-doar-gold sm:text-base">
                        {RECONCILIATION_ENGINE.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium leading-snug text-soft-gray sm:text-sm">
                        {RECONCILIATION_ENGINE.description}
                    </p>
                </div>
            </div>
        </article>
    );
}

function ValidatedStateNode() {
    return (
        <article className="rounded-xl border border-doar-green/40 bg-deep-space/80 px-6 py-5 backdrop-blur-sm sm:px-7 sm:py-6">
            <div className="flex items-center gap-4">
                <ShieldCheck
                    className="h-12 w-12 shrink-0 text-doar-green sm:h-14 sm:w-14"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
                <div className="min-w-0">
                    <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-doar-green sm:text-base">
                        {RECONCILIATION_VALIDATED.title}
                    </h3>
                    <p className="mt-1.5 text-xs font-medium leading-snug text-soft-gray sm:text-sm">
                        {RECONCILIATION_VALIDATED.description}
                    </p>
                </div>
            </div>
        </article>
    );
}

function ConvergenceArrows() {
    return (
        <svg
            className="mx-auto h-12 w-full max-w-md sm:h-14"
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
        <div className="flex justify-center py-2" aria-hidden="true">
            <ArrowDown className="h-6 w-6 text-doar-green" strokeWidth={2} />
        </div>
    );
}

export default function ReconciliationFlowDiagram() {
    return (
        <div
            className={cn(
                'w-full rounded-xl border border-white/10',
                'bg-deep-space/40 p-6 sm:p-8'
            )}
            role="img"
            aria-label="Diagrama de liquidación y conciliación operacional DOAR"
        >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">
                <SourceBox
                    title={RECONCILIATION_SOURCES.ledger}
                    items={RECONCILIATION_LEDGER_ITEMS}
                    variant="gold"
                    icon={
                        <Layers
                            className="h-10 w-10 shrink-0 text-doar-gold sm:h-12 sm:w-12"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                    }
                />
                <SourceBox
                    title={RECONCILIATION_SOURCES.infra}
                    items={RECONCILIATION_INFRA_ITEMS}
                    variant="blue"
                    icon={
                        <Network
                            className="h-10 w-10 shrink-0 text-doar-blue sm:h-12 sm:w-12"
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
