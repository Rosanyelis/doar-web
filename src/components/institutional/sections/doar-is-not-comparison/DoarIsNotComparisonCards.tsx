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
import type { LucideIcon } from 'lucide-react';
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

const CARD_HEADER_TITLE = {
    blue: 'text-2xl font-bold uppercase tracking-[0.14em] leading-tight text-doar-blue',
    gold: 'text-2xl font-bold uppercase tracking-[0.14em] leading-tight text-doar-gold',
} as const;

function ComparisonListItem({
    title,
    description,
    icon: Icon,
    variant,
    isLast,
}: {
    title: string;
    description: string;
    icon: LucideIcon;
    variant: 'blue' | 'gold';
    isLast: boolean;
}) {
    const isBlue = variant === 'blue';

    return (
        <li
            className={cn(
                'flex items-start gap-4 py-5 first:pt-0 last:pb-0',
                !isLast && 'border-b border-white/8'
            )}
        >
            <div
                className={cn(
                    'flex h-15 w-15 shrink-0 items-center justify-center rounded-full border',
                    isBlue ? 'border-doar-blue/30 bg-doar-blue/5' : 'border-doar-gold/30 bg-doar-gold/5'
                )}
                aria-hidden="true"
            >
                <Icon
                    className={cn('h-10 w-10', isBlue ? 'text-doar-blue' : 'text-doar-gold')}
                    strokeWidth={2}
                />
            </div>
            <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-white">{title}</h3>
                <p className="mt-1.5 text-sm font-light leading-relaxed text-white">{description}</p>
            </div>
        </li>
    );
}

function NotEqualDivider({ className }: { className?: string }) {
    return (
        <div className={cn('flex items-center justify-center', className)}>
            <div
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-deep-space/90"
                aria-hidden="true"
            >
                <span className="text-[32px] font-bold text-white">≠</span>
            </div>
        </div>
    );
}

export default function DoarIsNotComparisonCards() {
    const isItems = DOAR_IS_DEFINITION_ITEMS;
    const isNotItems = DOAR_IS_NOT_DEFINITION_ITEMS;

    return (
        <div role="region" aria-label="Comparación DOAR IS vs DOAR IS NOT">
            <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-stretch lg:gap-8">
                <article
                    className={cn(
                        'flex flex-col rounded-2xl border border-doar-blue/30 bg-deep-space/80',
                        'p-6 md:p-8'
                    )}
                >
                    <header className="mb-6 border-b border-white/8 pb-6 text-center">
                        <span className={CARD_HEADER_TITLE.blue}>DOAR IS</span>
                    </header>
                    <ul className="flex-1" role="list">
                        {isItems.map(({ id, title, description, icon }, index) => {
                            const Icon = IS_ICONS[icon as keyof typeof IS_ICONS];
                            return (
                                <ComparisonListItem
                                    key={id}
                                    title={title}
                                    description={description}
                                    icon={Icon}
                                    variant="blue"
                                    isLast={index === isItems.length - 1}
                                />
                            );
                        })}
                    </ul>
                </article>

                <NotEqualDivider className="self-center" />

                <article
                    className={cn(
                        'flex flex-col rounded-2xl border border-doar-gold/30 bg-deep-space/80',
                        'p-6 md:p-8'
                    )}
                >
                    <header className="mb-6 border-b border-white/8 pb-6 text-center">
                        <span className={CARD_HEADER_TITLE.gold}>DOAR IS NOT</span>
                    </header>
                    <ul className="flex-1" role="list">
                        {isNotItems.map(({ id, title, description, icon }, index) => {
                            const Icon = IS_NOT_ICONS[icon as keyof typeof IS_NOT_ICONS];
                            return (
                                <ComparisonListItem
                                    key={id}
                                    title={title}
                                    description={description}
                                    icon={Icon}
                                    variant="gold"
                                    isLast={index === isNotItems.length - 1}
                                />
                            );
                        })}
                    </ul>
                </article>
            </div>

            <div className="flex flex-col gap-6 lg:hidden">
                <article
                    className={cn(
                        'flex flex-col rounded-2xl border border-doar-blue/30 bg-deep-space/80 p-6'
                    )}
                >
                    <header className="mb-6 border-b border-white/8 pb-6 text-center">
                        <span className={CARD_HEADER_TITLE.blue}>DOAR IS</span>
                    </header>
                    <ul role="list">
                        {isItems.map(({ id, title, description, icon }, index) => {
                            const Icon = IS_ICONS[icon as keyof typeof IS_ICONS];
                            return (
                                <ComparisonListItem
                                    key={id}
                                    title={title}
                                    description={description}
                                    icon={Icon}
                                    variant="blue"
                                    isLast={index === isItems.length - 1}
                                />
                            );
                        })}
                    </ul>
                </article>

                <NotEqualDivider />

                <article
                    className={cn(
                        'flex flex-col rounded-2xl border border-doar-gold/30 bg-deep-space/80 p-6'
                    )}
                >
                    <header className="mb-6 border-b border-white/8 pb-6 text-center">
                        <span className={CARD_HEADER_TITLE.gold}>DOAR IS NOT</span>
                    </header>
                    <ul role="list">
                        {isNotItems.map(({ id, title, description, icon }, index) => {
                            const Icon = IS_NOT_ICONS[icon as keyof typeof IS_NOT_ICONS];
                            return (
                                <ComparisonListItem
                                    key={id}
                                    title={title}
                                    description={description}
                                    icon={Icon}
                                    variant="gold"
                                    isLast={index === isNotItems.length - 1}
                                />
                            );
                        })}
                    </ul>
                </article>
            </div>
        </div>
    );
}
