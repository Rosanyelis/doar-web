import { FileText, LineChart, Search, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RECONCILIATION_FEATURE_CARDS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof RECONCILIATION_FEATURE_CARDS)[number]['id'], LucideIcon> = {
    consistencia: Shield,
    trazabilidad: FileText,
    integridad: Search,
    visibilidad: LineChart,
};

export default function ReconciliationCapabilityGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {RECONCILIATION_FEATURE_CARDS.map(({ id, title, description }) => {
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
                            <div
                                className={cn(
                                    'flex h-10 w-10 shrink-0 items-center justify-center',
                                    'rounded-full border border-doar-gold/50'
                                )}
                            >
                                <Icon
                                    className="h-5 w-5 text-doar-gold"
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="text-sm font-semibold leading-tight text-text-primary">
                                    {title}
                                </h3>
                            </div>
                        </div>

                        <p className="text-xs font-light leading-relaxed text-soft-gray sm:text-sm">
                            {description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
