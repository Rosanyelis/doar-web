import {
    ArrowDown,
    ArrowDownToLine,
    ArrowLeftRight,
    ArrowUpFromLine,
    Database,
    Handshake,
    RefreshCw,
    ScanSearch,
    ShieldCheck,
    Timer,
    TrendingUp,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    TREASURY_ENGINE_CAPABILITIES,
    TREASURY_FLOW_STEPS,
    TREASURY_OPERATION_TYPES,
} from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const STEP_ICONS: Record<(typeof TREASURY_FLOW_STEPS)[number]['id'], LucideIcon> = {
    demand: TrendingUp,
    engine: Database,
    liquidity: Timer,
    operations: Handshake,
};

const ENGINE_CAPABILITY_ICONS: Record<
    (typeof TREASURY_ENGINE_CAPABILITIES)[number]['id'],
    LucideIcon
> = {
    coverage: ShieldCheck,
    prefunding: Database,
    rebalancing: RefreshCw,
    monitoring: ScanSearch,
};

const OPERATION_TYPE_ICONS: Record<
    (typeof TREASURY_OPERATION_TYPES)[number]['id'],
    LucideIcon
> = {
    payins: ArrowDownToLine,
    payouts: ArrowUpFromLine,
    transfers: ArrowLeftRight,
};

function FlowArrow({ color }: { color: 'blue' | 'gold' }) {
    return (
        <div className="flex justify-center py-2" aria-hidden="true">
            <ArrowDown
                className={cn('h-5 w-5', color === 'gold' ? 'text-doar-gold' : 'text-doar-blue')}
                strokeWidth={2}
            />
        </div>
    );
}

function TreasuryEngineNode({ title }: { title: string }) {
    return (
        <article
            className={cn(
                ' rounded-xl border border-doar-gold/50 bg-deep-space/80 px-5 py-5 sm:px-6',
                'shadow-[0_0_40px_rgba(245,196,0,0.15)]'
            )}
        >
            <div className="flex items-center justify-center gap-3">
                <img
                    src="/assets/institucional/logo.svg"
                    alt=""
                    className="w-30 shrink-0"
                    aria-hidden="true"
                />
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-doar-gold sm:text-base">
                    {title}
                </h3>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-4 border-t border-doar-gold/20 pt-5 sm:grid-cols-4 sm:gap-0 sm:divide-x sm:divide-white/10">
                {TREASURY_ENGINE_CAPABILITIES.map(({ id, title: capTitle, description }) => {
                    const Icon = ENGINE_CAPABILITY_ICONS[id];

                    return (
                        <div
                            key={id}
                            className="flex flex-col items-center gap-2 px-2 text-center sm:px-4"
                        >
                            <Icon
                                className="h-7 w-7 text-doar-gold sm:h-8 sm:w-8"
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <span className="text-[11px] font-semibold leading-snug text-text-primary sm:text-xs">
                                {capTitle}
                            </span>
                            <p className="text-[10px] font-light leading-snug text-soft-gray sm:text-[11px]">
                                {description}
                            </p>
                        </div>
                    );
                })}
            </div>
        </article>
    );
}

function StandardFlowNode({
    id,
    title,
    description,
}: {
    id: (typeof TREASURY_FLOW_STEPS)[number]['id'];
    title: string;
    description?: string;
}) {
    const Icon = STEP_ICONS[id];
    const isOperations = id === 'operations';
    const isLiquidity = id === 'liquidity';

    return (
        <article className="flex w-full flex-col rounded-xl border border-doar-blue/35 bg-deep-space/80 px-5 py-5 sm:px-6 sm:py-6">
            <div className="flex items-center justify-center gap-4 sm:gap-5">
                <Icon
                    className="h-11 w-11 shrink-0 text-doar-blue sm:h-12 sm:w-12"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />

                <div className="min-w-0 text-left">
                    <h3 className="text-sm font-bold uppercase tracking-[0.1em] text-text-primary sm:text-base">
                        {title}
                    </h3>

                    {description && (
                        <p
                            className={cn(
                                'mt-1.5 text-[11px] font-medium uppercase leading-snug sm:text-xs',
                                isLiquidity || isOperations ? 'text-doar-blue' : 'text-soft-gray'
                            )}
                        >
                            {description}
                        </p>
                    )}
                </div>
            </div>

            {isOperations && (
                <div className="mt-4 flex items-stretch justify-center divide-x divide-white/15 border-t border-white/10 pt-4">
                    {TREASURY_OPERATION_TYPES.map(({ id: opId, label }) => {
                        const OpIcon = OPERATION_TYPE_ICONS[opId];

                        return (
                            <div
                                key={opId}
                                className="flex flex-1 items-center justify-center gap-2 px-3 sm:px-4"
                            >
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-doar-blue/40 bg-doar-blue/5">
                                    <OpIcon
                                        className="h-4 w-4 text-doar-blue sm:h-5 sm:w-5"
                                        strokeWidth={1.75}
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-doar-blue sm:text-xs">
                                    {label}
                                </span>
                            </div>
                        );
                    })}
                </div>
            )}
        </article>
    );
}

export default function TreasuryFlowDiagram() {
    return (
        <div
            className="flex w-full flex-col"
            role="img"
            aria-label="Diagrama de flujo de tesorería y gestión de liquidez DOAR"
        >
            {TREASURY_FLOW_STEPS.map((step, index) => {
                const isLast = index === TREASURY_FLOW_STEPS.length - 1;

                return (
                    <div key={step.id}>
                        {step.id === 'engine' ? (
                            <TreasuryEngineNode title={step.title} />
                        ) : (
                            <StandardFlowNode
                                id={step.id}
                                title={step.title}
                                description={'description' in step ? step.description : undefined}
                            />
                        )}
                        {!isLast && <FlowArrow color={step.id === 'engine' ? 'gold' : 'blue'} />}
                    </div>
                );
            })}
        </div>
    );
}
