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
        <svg width="261" height="125" viewBox="0 0 261 125" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M250.182 27.1242C235.695 5.68819 212.191 0.948 206.881 0H0C0.972769 3.50242 2.70793 8.05826 6.02055 12.6404C14.5913 24.5699 27.3947 27.9669 31.575 28.9149H175.621C174.728 29.6525 172.598 31.601 171.572 34.8927C170.337 38.7639 171.362 42.0294 171.73 43.0827H43.0116C45.6931 47.7969 50.0573 54.1696 56.8405 60.2529C66.9361 69.2855 77.4521 73.2357 83.6043 75.0001H117.887V86.4552H91.4125C98.3005 96.4096 111.367 111.525 132.478 119.294C169.943 133.067 215.609 117.345 236.037 85.5601C243.977 73.2091 246.527 60.8847 247.473 53.327C249.025 52.853 251.312 52.3261 254.099 52.379C256.596 52.4052 258.647 52.8792 260.119 53.327C259.225 47.033 256.912 37.1049 250.182 27.1242ZM232.199 42.9774C227.677 44.3206 224.574 46.6644 222.918 48.0864C222.971 50.9566 222.945 80.2932 198.468 98.2794C178.014 113.29 155.43 109.445 151.565 108.708C168.181 108.971 183.219 100.939 190.449 87.614C196.522 76.3959 195.024 65.2036 194.261 61.1217C192.658 58.1199 190.186 54.275 186.532 50.4301C182.01 45.6635 177.383 42.6616 174.018 40.8444C179.933 25.0437 195.523 15.2739 211.403 16.9593C225.205 18.4076 237.089 28.3092 241.585 42.056C239.481 41.8715 236.116 41.819 232.199 42.9774Z" fill="url(#paint0_linear_11_45)"/>
        <defs>
        <linearGradient id="paint0_linear_11_45" x1="0" y1="62.1451" x2="260.102" y2="62.1451" gradientUnits="userSpaceOnUse">
        <stop stop-color="#F29401"/>
        <stop offset="1" stop-color="#FCCC01"/>
        </linearGradient>
        </defs>
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
            <div
                className={cn(
                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border',
                    isExternal ? 'border-doar-blue/40 bg-doar-blue/5' : 'border-doar-gold/40 bg-doar-gold/5'
                )}
            >
                {icon}
            </div>

            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-white">
                    {title}
                </h3>
                {subtitle && (
                    <p className="mt-1 text-[12px] font-medium leading-snug text-white">
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
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-doar-blue/40 bg-doar-blue/5">
                    <Network
                        className="h-6 w-6 text-doar-blue"
                        strokeWidth={1.75}
                        aria-hidden="true"
                    />
                </div>
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
                                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-doar-blue/40 bg-doar-blue/5">
                                    <Icon
                                        className="h-5 w-5 text-doar-blue"
                                        strokeWidth={1.75}
                                        aria-hidden="true"
                                    />
                                </div>
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
            className="flex w-[400px] max-w-md flex-col lg:max-w-lg"
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
                                        'h-6 w-6',
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
