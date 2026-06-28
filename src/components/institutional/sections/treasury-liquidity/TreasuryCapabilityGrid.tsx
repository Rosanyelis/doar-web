import { Database, RefreshCw, Search, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { TREASURY_FEATURE_CARDS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof TREASURY_FEATURE_CARDS)[number]['id'], LucideIcon> = {
    cobertura: Shield,
    continuidad: Database,
    optimizacion: RefreshCw,
    monitoreo: Search,
};

export default function TreasuryCapabilityGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {TREASURY_FEATURE_CARDS.map(({ id, title, description }) => {
                const Icon = CARD_ICONS[id];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-xl border border-white/8 bg-deep-space/80 p-6',
                            'transition-all duration-200',
                            'hover:-translate-y-1 hover:border-white/12'
                        )}
                    >
                        <div className="mb-4 flex items-start gap-3">
                            <Icon
                                className="h-10 w-10 shrink-0 text-doar-gold"
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />

                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-semibold leading-tight text-white">
                                    {title}
                                </h3>
                                <div className="mt-2 h-px w-10 bg-doar-gold" aria-hidden="true" />
                            </div>
                        </div>

                        <p className="text-xs font-light leading-relaxed text-white sm:text-sm">
                            {description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
