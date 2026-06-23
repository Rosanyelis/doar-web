import { Shield } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface ComplianceSummaryBannerProps {
    title: string;
    description: string;
    titleClassName?: string;
}

export default function ComplianceSummaryBanner({
    title,
    description,
    titleClassName,
}: ComplianceSummaryBannerProps) {
    return (
        <article
            className={cn(
                'relative mt-10 overflow-hidden rounded-xl border border-doar-gold/25',
                'bg-deep-space/80 p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.08)]',
                'md:flex md:items-center md:gap-10'
            )}
        >
            <div
                className={cn(
                    'pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-40',
                    'bg-[radial-gradient(ellipse_80%_80%_at_100%_50%,rgba(47,107,255,0.12),transparent_70%)]'
                )}
                aria-hidden="true"
            />
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-30"
                aria-hidden="true"
            >
                <svg className="h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                    <path
                        d="M0 40 Q50 20 100 40 T200 40"
                        fill="none"
                        stroke="rgba(245,196,0,0.15)"
                        strokeWidth="1"
                    />
                    <path
                        d="M0 55 Q50 35 100 55 T200 55"
                        fill="none"
                        stroke="rgba(47,107,255,0.12)"
                        strokeWidth="0.8"
                    />
                </svg>
            </div>

            <Shield
                className="relative z-10 mb-4 h-10 w-10 shrink-0 text-doar-gold md:mb-0"
                strokeWidth={1.75}
                aria-hidden="true"
            />

            <div className="relative z-10 min-w-0 flex-1">
                <h3
                    className={cn(
                        'mb-3 text-lg font-semibold',
                        titleClassName ?? 'text-doar-gold'
                    )}
                >
                    {title}
                </h3>
                <p className="text-base font-light leading-relaxed text-soft-gray">{description}</p>
            </div>
        </article>
    );
}
