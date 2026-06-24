import {
    Brain,
    Building2,
    Infinity as InfinityIcon,
    RefreshCw,
    Search,
    User,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COMPLIANCE_FRAMEWORK_CARDS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof COMPLIANCE_FRAMEWORK_CARDS)[number]['id'], LucideIcon> = {
    kyc: User,
    kyb: Building2,
    screening: Search,
    aml: RefreshCw,
    behavior: Brain,
    ongoing: InfinityIcon,
};

export default function ComplianceFrameworkGrid() {
    return (
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {COMPLIANCE_FRAMEWORK_CARDS.map(({ id, title, items }) => {
                const Icon = CARD_ICONS[id];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-xl border border-white/8 bg-deep-space/80 p-6',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <Icon
                                className="h-8 w-8 shrink-0 text-doar-blue"
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                            <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary">
                                {title}
                            </h3>
                        </div>

                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-xs font-light text-soft-gray"
                                >
                                    <span
                                        className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-doar-blue/15 text-[8px] text-doar-blue"
                                        aria-hidden="true"
                                    >
                                        ✓
                                    </span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </article>
                );
            })}
        </div>
    );
}
