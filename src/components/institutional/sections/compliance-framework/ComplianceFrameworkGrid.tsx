import {
    Activity,
    Building2,
    Infinity as InfinityIcon,
    RefreshCw,
    Search,
    ShieldUser,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { COMPLIANCE_FRAMEWORK_CARDS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const CARD_ICONS: Record<(typeof COMPLIANCE_FRAMEWORK_CARDS)[number]['id'], LucideIcon> = {
    kyc: ShieldUser,
    kyb: Building2,
    screening: Search,
    aml: RefreshCw,
    behavior: Activity,
    ongoing: InfinityIcon,
};

const ACCENT_STYLES = {
    blue: {
        border: 'border-doar-blue/40',
        bg: 'bg-doar-blue/5',
        icon: 'text-doar-blue',
        glow: 'shadow-[0_0_20px_rgba(47,107,255,0.15)]',
        checkBg: 'bg-doar-blue/15',
        checkText: 'text-doar-blue',
    },
    purple: {
        border: 'border-[#a855f7]/40',
        bg: 'bg-[#a855f7]/5',
        icon: 'text-[#a855f7]',
        glow: 'shadow-[0_0_20px_rgba(168,85,247,0.15)]',
        checkBg: 'bg-[#a855f7]/15',
        checkText: 'text-[#a855f7]',
    },
    cyan: {
        border: 'border-[#06b6d4]/40',
        bg: 'bg-[#06b6d4]/5',
        icon: 'text-[#06b6d4]',
        glow: 'shadow-[0_0_20px_rgba(6,182,212,0.15)]',
        checkBg: 'bg-[#06b6d4]/15',
        checkText: 'text-[#06b6d4]',
    },
    orange: {
        border: 'border-[#f97316]/40',
        bg: 'bg-[#f97316]/5',
        icon: 'text-[#f97316]',
        glow: 'shadow-[0_0_20px_rgba(249,115,22,0.15)]',
        checkBg: 'bg-[#f97316]/15',
        checkText: 'text-[#f97316]',
    },
    sky: {
        border: 'border-[#38bdf8]/40',
        bg: 'bg-[#38bdf8]/5',
        icon: 'text-[#38bdf8]',
        glow: 'shadow-[0_0_20px_rgba(56,189,248,0.15)]',
        checkBg: 'bg-[#38bdf8]/15',
        checkText: 'text-[#38bdf8]',
    },
    green: {
        border: 'border-doar-green/40',
        bg: 'bg-doar-green/5',
        icon: 'text-doar-green',
        glow: 'shadow-[0_0_20px_rgba(34,197,94,0.15)]',
        checkBg: 'bg-doar-green/15',
        checkText: 'text-doar-green',
    },
} as const;

export default function ComplianceFrameworkGrid() {
    return (
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {COMPLIANCE_FRAMEWORK_CARDS.map(({ id, title, description, items, accent }) => {
                const Icon = CARD_ICONS[id];
                const styles = ACCENT_STYLES[accent as keyof typeof ACCENT_STYLES];

                return (
                    <article
                        key={id}
                        className={cn(
                            'rounded-xl border border-white/8 bg-deep-space/80 p-6',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <div className="mb-3 flex items-start gap-3">
                            <div
                                className={cn(
                                    'flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border',
                                    styles.border,
                                    styles.bg,
                                    styles.glow
                                )}
                                aria-hidden="true"
                            >
                                <Icon className={cn('h-5 w-5', styles.icon)} strokeWidth={1.75} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h3 className="text-xs font-bold uppercase tracking-[0.1em] text-text-primary">
                                    {title}
                                </h3>
                                <p className="mt-1.5 text-xs font-light leading-relaxed text-soft-gray">
                                    {description}
                                </p>
                            </div>
                        </div>

                        <div className="my-4 h-px w-full bg-white/8" aria-hidden="true" />

                        <ul className="space-y-2">
                            {items.map((item) => (
                                <li
                                    key={item}
                                    className="flex items-center gap-2 text-xs font-light text-soft-gray"
                                >
                                    <span
                                        className={cn(
                                            'flex h-4 w-4 shrink-0 items-center justify-center rounded-full',
                                            styles.checkBg
                                        )}
                                        aria-hidden="true"
                                    >
                                        <svg
                                            className={cn('h-3 w-3', styles.checkText)}
                                            strokeWidth={3}
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
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
