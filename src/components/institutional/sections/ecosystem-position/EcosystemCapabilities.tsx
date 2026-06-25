import {
    GitBranch,
    Layers,
    ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { ECOSYSTEM_CAPABILITIES } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CAPABILITY_ICONS: Record<(typeof ECOSYSTEM_CAPABILITIES)[number]['id'], LucideIcon> = {
    orquestacion: Layers,
    infraestructura: GitBranch,
    separacion: ShieldCheck,
};

export default function EcosystemCapabilities() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {ECOSYSTEM_CAPABILITIES.map(({ id, title, description }) => {
                const Icon = CAPABILITY_ICONS[id];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-xl border border-white/8 bg-deep-space/80 p-6',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <div className="mb-4 flex items-start gap-3">
                            <Icon
                                className="h-8 w-8 shrink-0 text-doar-gold"
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary">
                                {title}
                            </h3>
                        </div>

                        <p className="text-[12px] font-light leading-relaxed text-soft-gray">
                            {description}
                        </p>
                    </article>
                );
            })}
        </div>
    );
}
