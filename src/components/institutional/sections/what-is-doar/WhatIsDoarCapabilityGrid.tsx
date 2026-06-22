import {
    Building2,
    DollarSign,
    Layers,
    RefreshCw,
    Shield,
    ShieldCheck,
    Users,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { WHAT_IS_DOAR_CAPABILITIES } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CAPABILITY_ICONS: Record<(typeof WHAT_IS_DOAR_CAPABILITIES)[number]['id'], LucideIcon> = {
    usuarios: Users,
    empresas: Building2,
    ledger: Layers,
    tesoreria: Shield,
    cumplimiento: ShieldCheck,
    liquidacion: RefreshCw,
};

function TreasuryIcon() {
    return (
        <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
            <Shield className="h-10 w-10 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
            <DollarSign
                className="absolute h-5 w-5 text-doar-gold"
                strokeWidth={2.5}
                aria-hidden="true"
            />
        </span>
    );
}

function CapabilityIcon({ id }: { id: (typeof WHAT_IS_DOAR_CAPABILITIES)[number]['id'] }) {
    if (id === 'tesoreria') return <TreasuryIcon />;

    const Icon = CAPABILITY_ICONS[id];

    return <Icon className="h-10 w-10 shrink-0 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />;
}

export default function WhatIsDoarCapabilityGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {WHAT_IS_DOAR_CAPABILITIES.map(({ id, title, description }) => (
                <article
                    key={id}
                    className={cn(
                        'rounded-xl border border-white/8 bg-deep-space/80 p-6',
                        'transition-all duration-200',
                        'hover:-translate-y-1 hover:border-white/12'
                    )}
                >
                    <div className="mb-4 flex items-start gap-3">
                        <CapabilityIcon id={id} />

                        <div className="min-w-0 flex-1">
                            <h3 className="text-[14px] font-medium leading-tight text-white">
                                {title}
                            </h3>
                            <div className="mt-2 h-px w-10 bg-doar-gold" aria-hidden="true" />
                        </div>
                    </div>

                    <p className="text-[12px] font-light leading-relaxed text-white">{description}</p>
                </article>
            ))}
        </div>
    );
}
