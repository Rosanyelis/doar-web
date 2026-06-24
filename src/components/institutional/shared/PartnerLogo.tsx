export function CircleLogo() {
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

export function FireblocksLogo() {
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

export function MercuryLogo() {
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

export function StripeLogo() {
    return <span className="text-base font-bold tracking-tight text-[#635BFF]">stripe</span>;
}

export function DLocalLogo() {
    return (
        <span className="text-sm font-medium tracking-wide text-text-primary">
            d<span className="font-black text-[#FF6B00]">·</span>local
        </span>
    );
}

export function SumsubLogo() {
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
