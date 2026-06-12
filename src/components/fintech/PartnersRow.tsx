import React from 'react';

const partners = [
    {
        name: 'CIRCLE',
        logo: (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="h-5 w-5" fill="none">
                    <circle cx="11" cy="11" r="9.5" stroke="white" strokeWidth="1.6"/>
                    <circle cx="11" cy="11" r="5.5" stroke="white" strokeWidth="1.2" strokeDasharray="2.5 2"/>
                </svg>
                <span className="text-[14px] font-semibold tracking-widest text-white">CIRCLE</span>
            </div>
        ),
    },
    {
        name: 'Fireblocks',
        logo: (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4.5 w-4.5" fill="white">
                    <polygon points="10,1 19,6 19,14 10,19 1,14 1,6"/>
                    <polygon points="10,4 16,7.5 16,12.5 10,16 4,12.5 4,7.5" fill="#0a0a0a"/>
                    <polygon points="10,7 13,9 13,12 10,14 7,12 7,9" fill="white"/>
                </svg>
                <span className="text-[14px] font-semibold text-white">Fireblocks</span>
            </div>
        ),
    },
    {
        name: 'stripe',
        logo: (
            <span className="text-[18px] font-extrabold tracking-tight text-white" style={{ fontFamily: 'Georgia, serif', letterSpacing: '-0.02em' }}>
                stripe
            </span>
        ),
    },
    {
        name: 'd.local',
        logo: (
            <span className="text-[15px] font-medium text-white tracking-wide">
                d<span style={{ color: '#F29501', fontWeight: 900 }}>·</span>local
            </span>
        ),
    },
    {
        name: 'sumsub',
        logo: (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 22 22" className="h-4.5 w-4.5" fill="none">
                    <path d="M11 2L2 20h18L11 2z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M11 8v5" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                    <circle cx="11" cy="16" r="0.8" fill="white"/>
                </svg>
                <span className="text-[13px] font-light tracking-widest text-white">sumsub</span>
            </div>
        ),
    },
    {
        name: 'MERCURY',
        logo: (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="h-4.5 w-4.5" fill="none">
                    <circle cx="11" cy="11" r="9.5" stroke="white" strokeWidth="1.4"/>
                    <path d="M11 2v18M2 11h18" stroke="white" strokeWidth="1" strokeDasharray="2.5 2"/>
                </svg>
                <span className="text-[12px] font-bold tracking-[0.18em] text-white">MERCURY</span>
            </div>
        ),
    },
];

export default function PartnersRow() {
    return (
        <div
            className="w-full"
            style={{
                borderTop: '1px solid rgba(255,255,255,0.07)',
                backgroundColor: '#0a0a0a',
                paddingTop: '28px',
                paddingBottom: '28px',
            }}
        >
            <div className="max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-14">
                {/* Label */}
                <p
                    className="text-[12px] font-normal leading-snug shrink-0"
                    style={{ color: '#666', maxWidth: 160 }}
                >
                    Infraestructura operada con partners líderes
                </p>

                {/* Logos */}
                <div className="flex flex-wrap items-center gap-x-7 gap-y-4">
                    {partners.map((p, i) => (
                        <React.Fragment key={p.name}>
                            {p.logo}
                            {i < partners.length - 1 && (
                                <div
                                    className="hidden sm:block self-stretch"
                                    style={{
                                        width: 1,
                                        background: 'rgba(255,255,255,0.1)',
                                        minHeight: 22,
                                    }}
                                />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
}
