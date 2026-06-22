import type { ReactNode } from 'react';
import { INFRASTRUCTURE_PROVIDERS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

function CircleLogo() {
    return (
        <div className="flex items-center gap-2 text-[#2775CA]">
            <svg viewBox="0 0 22 22" className="h-5 w-5" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2" />
            </svg>
            <span className="text-sm font-semibold tracking-widest text-text-primary">CIRCLE</span>
        </div>
    );
}

function FireblocksLogo() {
    return (
        <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 20 20" className="h-4 w-4 text-[#FF6B2C]" fill="currentColor" aria-hidden="true">
                <polygon points="10,1 19,6 19,14 10,19 1,14 1,6" />
                <polygon points="10,4 16,7.5 16,12.5 10,16 4,12.5 4,7.5" fill="#081120" />
                <polygon points="10,7 13,9 13,12 10,14 7,12 7,9" fill="currentColor" />
            </svg>
            <span className="text-sm font-semibold text-text-primary">Fireblocks</span>
        </div>
    );
}

function MercuryLogo() {
    return (
        <div className="flex items-center gap-2">
            <svg viewBox="0 0 22 22" className="h-4 w-4 text-[#7B8499]" fill="none" aria-hidden="true">
                <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.4" />
                <path d="M11 2v18M2 11h18" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2" />
            </svg>
            <span className="text-[11px] font-bold tracking-[0.18em] text-text-primary">MERCURY</span>
        </div>
    );
}

function StripeLogo() {
    return <span className="text-base font-bold tracking-tight text-[#635BFF]">stripe</span>;
}

function DLocalLogo() {
    return (
        <span className="text-sm font-medium tracking-wide text-text-primary">
            d<span className="font-black text-[#FF6B00]">·</span>local
        </span>
    );
}

function SumsubLogo() {
    return (
        <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 22 22" className="h-4 w-4 text-[#00C853]" fill="none" aria-hidden="true">
                <path d="M11 2L2 20h18L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                <path d="M11 8v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="11" cy="16" r="0.8" fill="currentColor" />
            </svg>
            <span className="text-xs font-light tracking-widest text-text-primary">sumsub</span>
        </div>
    );
}

const PROVIDER_LOGOS: Record<(typeof INFRASTRUCTURE_PROVIDERS)[number]['id'], ReactNode> = {
    circle: <CircleLogo />,
    fireblocks: <FireblocksLogo />,
    mercury: <MercuryLogo />,
    stripe: <StripeLogo />,
    dlocal: <DLocalLogo />,
    sumsub: <SumsubLogo />,
};

export default function ProviderCapabilityGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {INFRASTRUCTURE_PROVIDERS.map(({ id, category, description }) => (
                <article
                    key={id}
                    className={cn(
                        'flex h-full flex-col rounded-xl border border-white/8 bg-deep-space/80 p-6',
                        'transition-all duration-200',
                        'hover:-translate-y-1 hover:border-white/12'
                    )}
                >
                    <div className="mb-4">{PROVIDER_LOGOS[id]}</div>

                    <span className="mb-3 text-xs font-semibold text-doar-gold">{category}</span>

                    <p className="text-xs font-light leading-relaxed text-white sm:text-sm">
                        {description}
                    </p>
                </article>
            ))}
        </div>
    );
}
