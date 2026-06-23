import {
    ArrowDown,
    ArrowDownToLine,
    ArrowLeftRight,
    ArrowUpFromLine,
    BarChart3,
    Database,
    Gauge,
    Handshake,
    RefreshCw,
    Search,
    Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    TREASURY_ENGINE_CAPABILITIES,
    TREASURY_FLOW_STEPS,
    TREASURY_OPERATION_TYPES,
} from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const STEP_ICONS: Record<(typeof TREASURY_FLOW_STEPS)[number]['id'], LucideIcon> = {
    demand: BarChart3,
    engine: Database,
    liquidity: Gauge,
    operations: Handshake,
};

const ENGINE_CAPABILITY_ICONS: Record<
    (typeof TREASURY_ENGINE_CAPABILITIES)[number]['id'],
    LucideIcon
> = {
    coverage: Shield,
    prefunding: Database,
    rebalancing: RefreshCw,
    monitoring: Search,
};

const OPERATION_TYPE_ICONS: Record<
    (typeof TREASURY_OPERATION_TYPES)[number]['id'],
    LucideIcon
> = {
    payins: ArrowDownToLine,
    payouts: ArrowUpFromLine,
    transfers: ArrowLeftRight,
};

function DoarLogoIcon() {
    return (
        <svg className="h-8 w-8 shrink-0 fill-doar-gold" viewBox="0 0 32 24" aria-hidden="true">
            <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
        </svg>
    );
}

function FlowArrow() {
    return (
        <div className="flex justify-center py-1" aria-hidden="true">
            <ArrowDown className="h-5 w-5 text-doar-blue" strokeWidth={2} />
        </div>
    );
}

function TreasuryEngineNode({ title }: { title: string }) {
    return (
        <article
            className={cn(
                'rounded-xl border border-doar-gold/50 bg-deep-space/80 px-5 py-4',
                'shadow-[0_0_40px_rgba(245,196,0,0.15)] ledger-glow-pulse backdrop-blur-sm'
            )}
        >
            <div className="flex items-center gap-3">
                <DoarLogoIcon />
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-doar-gold">
                    {title}
                </h3>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3 border-t border-doar-gold/20 pt-4 sm:grid-cols-4">
                {TREASURY_ENGINE_CAPABILITIES.map(({ id, title: capTitle, description }) => {
                    const Icon = ENGINE_CAPABILITY_ICONS[id];

                    return (
                        <div key={id} className="flex flex-col items-center gap-1.5 text-center">
                            <Icon
                                className="h-5 w-5 text-doar-gold"
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <span className="text-[8px] font-semibold uppercase tracking-wider text-text-primary">
                                {capTitle}
                            </span>
                            <p className="text-[8px] font-medium leading-snug text-soft-gray">
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

    return (
        <article className="flex items-center gap-4 rounded-xl border border-doar-blue/30 bg-deep-space/80 px-5 py-4 backdrop-blur-sm">
            <Icon
                className="h-10 w-10 shrink-0 text-doar-blue"
                strokeWidth={1.75}
                aria-hidden="true"
            />

            <div className="min-w-0 flex-1">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
                    {title}
                </h3>

                {description && (
                    <p
                        className={cn(
                            'mt-1 text-[10px] font-medium uppercase leading-snug',
                            id === 'liquidity' ? 'text-doar-blue' : 'text-soft-gray'
                        )}
                    >
                        {description}
                    </p>
                )}

                {isOperations && (
                    <div className="mt-3 flex flex-wrap gap-4">
                        {TREASURY_OPERATION_TYPES.map(({ id: opId, label }) => {
                            const OpIcon = OPERATION_TYPE_ICONS[opId];

                            return (
                                <div key={opId} className="flex items-center gap-1.5">
                                    <OpIcon
                                        className="h-3.5 w-3.5 text-doar-blue"
                                        strokeWidth={1.75}
                                        aria-hidden="true"
                                    />
                                    <span className="text-[9px] font-semibold uppercase tracking-wider text-doar-blue">
                                        {label}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </article>
    );
}

export default function TreasuryFlowDiagram() {
    return (
        <div
            className="mx-auto flex w-full max-w-lg flex-col"
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
                        {!isLast && <FlowArrow />}
                    </div>
                );
            })}
        </div>
    );
}
