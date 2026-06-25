import {
    ArrowLeftRight,
    CircleDollarSign,
    FileCheck,
    GitBranch,
    Landmark,
    Layers,
    Network,
    ShieldCheck,
    User,
    Users,
    Vault,
    Wallet,
} from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { DOAR_IS_DEFINITION_ITEMS, DOAR_IS_NOT_DEFINITION_ITEMS } from '../../../../constants/institutional';

const IS_ICONS = {
    Network,
    Layers,
    GitBranch,
    User,
    FileCheck,
    ShieldCheck,
} as const;

const IS_NOT_ICONS = {
    Landmark,
    Vault,
    CircleDollarSign,
    ArrowLeftRight,
    Wallet,
    Users,
} as const;

export default function DoarIsNotComparisonCards() {
    return (
        <div
            className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-6"
            role="region"
            aria-label="Comparación DOAR IS vs DOAR IS NOT"
        >
            <article
                className={cn(
                    'rounded-2xl border border-doar-blue/30 bg-deep-space/80 p-6 md:p-8',
                    'flex flex-col'
                )}
            >
                <header className="mb-8 text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-blue">
                        DOAR IS
                    </span>
                </header>
                <ul className="space-y-6 flex-1" role="list">
                    {DOAR_IS_DEFINITION_ITEMS.map(({ id, title, description, icon }) => {
                        const Icon = IS_ICONS[icon as keyof typeof IS_ICONS];
                        return (
                            <li key={id} className="flex items-start gap-4 min-w-0">
                                <div
                                    className={cn(
                                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                                        'border-doar-blue/30 bg-doar-blue/5'
                                    )}
                                    aria-hidden="true"
                                >
                                    <Icon
                                        className="h-5 w-5 text-doar-blue"
                                        strokeWidth={1.75}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm font-semibold text-text-primary truncate">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs font-light leading-relaxed text-soft-gray">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </article>

            <div className="hidden lg:flex lg:items-center lg:justify-center">
                <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-deep-space/90"
                    aria-hidden="true"
                >
                    <span className="text-xl font-bold text-text-primary">≠</span>
                </div>
            </div>
            <div className="flex justify-center py-2 lg:hidden" aria-hidden="true">
                <span className="text-xl font-bold text-text-primary">≠</span>
            </div>

            <article
                className={cn(
                    'rounded-2xl border border-doar-gold/30 bg-deep-space/80 p-6 md:p-8',
                    'flex flex-col'
                )}
            >
                <header className="mb-8 text-center">
                    <span className="text-sm font-bold uppercase tracking-[0.14em] text-doar-gold">
                        DOAR IS NOT
                    </span>
                </header>
                <ul className="space-y-6 flex-1" role="list">
                    {DOAR_IS_NOT_DEFINITION_ITEMS.map(({ id, title, description, icon }) => {
                        const Icon = IS_NOT_ICONS[icon as keyof typeof IS_NOT_ICONS];
                        return (
                            <li key={id} className="flex items-start gap-4 min-w-0">
                                <div
                                    className={cn(
                                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                                        'border-doar-gold/30 bg-doar-gold/5'
                                    )}
                                    aria-hidden="true"
                                >
                                    <Icon
                                        className="h-5 w-5 text-doar-gold"
                                        strokeWidth={1.75}
                                    />
                                </div>
                                <div className="min-w-0">
                                    <h3 className="text-sm font-semibold text-text-primary truncate">
                                        {title}
                                    </h3>
                                    <p className="mt-1 text-xs font-light leading-relaxed text-soft-gray">
                                        {description}
                                    </p>
                                </div>
                            </li>
                        );
                    })}
                </ul>
            </article>
        </div>
    );
}
