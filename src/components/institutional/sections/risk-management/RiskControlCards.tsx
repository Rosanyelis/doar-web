import { Activity, AlertTriangle, Brain, Gauge, Shield } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RISK_ENGINE_NODES } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof RISK_ENGINE_NODES)[number]['id'], LucideIcon> = {
    velocity: Gauge,
    exposure: Shield,
    scoring: Activity,
    alerts: AlertTriangle,
    behavioral: Brain,
};

export default function RiskControlCards() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {RISK_ENGINE_NODES.map(({ id, title, description }) => {
                const Icon = CARD_ICONS[id];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-xl border border-white/8 bg-deep-space/80 p-5',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <Icon
                            className="mb-3 h-10 w-10 text-doar-blue"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                        <h3 className="mb-2 text-md font-semibold leading-tight text-white">
                            {title}
                        </h3>
                        <p className="text-[14px] font-light leading-relaxed text-white">
                            {description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
