import type { ReactNode } from 'react';
import {
    ArrowDown,
    CreditCard,
    Database,
    Landmark,
    Lock,
    Network,
    RefreshCw,
    Shield,
    ShieldCheck,
    Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import {
    INFRASTRUCTURE_PARTNER_CAPABILITIES,
    SEGREGATED_ARCHITECTURE_LAYERS,
} from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const LAYER_ICONS: Record<
    Exclude<(typeof SEGREGATED_ARCHITECTURE_LAYERS)[number]['id'], 'platform' | 'partners'>,
    LucideIcon
> = {
    users: Users,
    ledger: Database,
    compliance: ShieldCheck,
    treasury: Landmark,
    settlement: RefreshCw,
};

const PARTNER_CAPABILITY_ICONS: Record<
    (typeof INFRASTRUCTURE_PARTNER_CAPABILITIES)[number]['id'],
    LucideIcon
> = {
    payments: CreditCard,
    compliance: Shield,
    treasury: Landmark,
    custody: Lock,
};

function DoarLogoIcon() {
    return (
        <svg className="h-10 w-10 shrink-0 fill-doar-gold" viewBox="0 0 32 24" aria-hidden="true">
            <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
        </svg>
    );
}

function FlowArrow({ color }: { color: 'gold' | 'blue' }) {
    return (
        <div className="flex justify-center py-1" aria-hidden="true">
            <ArrowDown
                className={cn('h-5 w-5', color === 'gold' ? 'text-doar-gold' : 'text-doar-blue')}
                strokeWidth={2}
            />
        </div>
    );
}

function getArrowColor(
    currentId: (typeof SEGREGATED_ARCHITECTURE_LAYERS)[number]['id']
): 'gold' | 'blue' {
    if (currentId === 'users' || currentId === 'settlement') return 'blue';
    return 'gold';
}

interface StandardLayerNodeProps {
    title: string;
    subtitle: string | null;
    variant: 'external' | 'gold';
    highlight?: boolean;
    icon: ReactNode;
}

function StandardLayerNode({ title, subtitle, variant, highlight, icon }: StandardLayerNodeProps) {
    const isExternal = variant === 'external';

    return (
        <article
            className={cn(
                'flex w-full items-center gap-4 rounded-xl border bg-deep-space/80 px-5 py-4',
                'backdrop-blur-sm',
                isExternal ? 'border-doar-blue/30' : 'border-doar-gold/50',
                highlight && 'shadow-[0_0_40px_rgba(245,196,0,0.15)] ledger-glow-pulse'
            )}
        >
            {icon}

            <div className="min-w-0 flex-1">
                <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-1 text-[10px] font-medium leading-snug text-soft-gray">
                        {subtitle}
                    </p>
                )}
            </div>
        </article>
    );
}

function PartnerLayerNode({
    title,
    subtitle,
}: {
    title: string;
    subtitle: string;
}) {
    return (
        <article className="w-full rounded-xl border border-doar-blue/30 bg-deep-space/80 px-5 py-4 backdrop-blur-sm">
            <div className="flex items-center gap-4">
                <Network
                    className="h-10 w-10 shrink-0 text-doar-blue"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-semibold uppercase tracking-[0.12em] text-text-primary">
                        {title}
                    </h3>
                    <p className="mt-1 text-[10px] font-medium leading-snug text-soft-gray">
                        {subtitle}
                    </p>
                </div>
            </div>

            <div className="mt-4 flex border-t border-doar-blue/20 pt-4">
                {INFRASTRUCTURE_PARTNER_CAPABILITIES.map(({ id, label }, index) => {
                    const Icon = PARTNER_CAPABILITY_ICONS[id];
                    const isLast = index === INFRASTRUCTURE_PARTNER_CAPABILITIES.length - 1;

                    return (
                        <div key={id} className="flex flex-1 items-stretch">
                            <div className="flex flex-1 flex-col items-center justify-center gap-1.5 px-1">
                                <Icon
                                    className="h-5 w-5 text-doar-blue"
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                                <span className="text-center text-[8px] font-semibold uppercase tracking-wider text-text-primary">
                                    {label}
                                </span>
                            </div>
                            {!isLast && (
                                <div className="w-px shrink-0 bg-doar-blue/20" aria-hidden="true" />
                            )}
                        </div>
                    );
                })}
            </div>
        </article>
    );
}

export default function SegregatedArchitectureDiagram() {
    return (
        <div
            className="mx-auto flex w-full max-w-lg flex-col"
            role="img"
            aria-label="Diagrama de infraestructura operacional segregada DOAR"
        >
            {SEGREGATED_ARCHITECTURE_LAYERS.map((layer, index) => {
                const isLast = index === SEGREGATED_ARCHITECTURE_LAYERS.length - 1;

                let node: ReactNode;

                if (layer.id === 'platform') {
                    node = (
                        <StandardLayerNode
                            title={layer.title}
                            subtitle={layer.subtitle}
                            variant="gold"
                            highlight={'highlight' in layer && layer.highlight}
                            icon={<DoarLogoIcon />}
                        />
                    );
                } else if (layer.id === 'partners') {
                    node = (
                        <PartnerLayerNode title={layer.title} subtitle={layer.subtitle ?? ''} />
                    );
                } else {
                    const Icon = LAYER_ICONS[layer.id];
                    node = (
                        <StandardLayerNode
                            title={layer.title}
                            subtitle={layer.subtitle}
                            variant={layer.variant}
                            icon={
                                <Icon
                                    className={cn(
                                        'h-10 w-10 shrink-0',
                                        layer.variant === 'external'
                                            ? 'text-doar-blue'
                                            : 'text-doar-gold'
                                    )}
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                            }
                        />
                    );
                }

                return (
                    <div key={layer.id}>
                        {node}
                        {!isLast && <FlowArrow color={getArrowColor(layer.id)} />}
                    </div>
                );
            })}
        </div>
    );
}
