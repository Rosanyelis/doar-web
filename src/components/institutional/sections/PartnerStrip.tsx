import { Fragment } from 'react';
import { cn } from '../../../lib/utils';

const partners = [
    {
        name: 'Circle',
        logo: (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="h-5 w-5" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.6" />
                    <circle cx="11" cy="11" r="5.5" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2.5 2" />
                </svg>
                <span className="text-sm font-semibold tracking-widest">CIRCLE</span>
            </div>
        ),
    },
    {
        name: 'Fireblocks',
        logo: (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                    <polygon points="10,1 19,6 19,14 10,19 1,14 1,6" />
                    <polygon points="10,4 16,7.5 16,12.5 10,16 4,12.5 4,7.5" fill="#081120" />
                    <polygon points="10,7 13,9 13,12 10,14 7,12 7,9" fill="currentColor" />
                </svg>
                <span className="text-sm font-semibold">Fireblocks</span>
            </div>
        ),
    },
    {
        name: 'Stripe',
        logo: <span className="text-base font-bold tracking-tight">stripe</span>,
    },
    {
        name: 'd.local',
        logo: (
            <span className="text-sm font-medium tracking-wide">
                d<span className="font-black">·</span>local
            </span>
        ),
    },
    {
        name: 'Sumsub',
        logo: (
            <div className="flex items-center gap-1.5">
                <svg viewBox="0 0 22 22" className="h-4 w-4" fill="none" aria-hidden="true">
                    <path d="M11 2L2 20h18L11 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                    <path d="M11 8v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    <circle cx="11" cy="16" r="0.8" fill="currentColor" />
                </svg>
                <span className="text-xs font-light tracking-widest">sumsub</span>
            </div>
        ),
    },
    {
        name: 'Mercury',
        logo: (
            <div className="flex items-center gap-2">
                <svg viewBox="0 0 22 22" className="h-4 w-4" fill="none" aria-hidden="true">
                    <circle cx="11" cy="11" r="9.5" stroke="currentColor" strokeWidth="1.4" />
                    <path d="M11 2v18M2 11h18" stroke="currentColor" strokeWidth="1" strokeDasharray="2.5 2" />
                </svg>
                <span className="text-[11px] font-bold tracking-[0.18em]">MERCURY</span>
            </div>
        ),
    },
];

export default function PartnerStrip() {
    return (
        <section
            className={cn(
                'border-t border-b border-white/6 bg-midnight-navy py-6',
                'font-institutional'
            )}
        >
            <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12 xl:px-20">
                <p className="max-w-[200px] shrink-0 text-sm text-soft-gray/80">
                    Infraestructura operada con partners líderes
                </p>

                <div className="flex items-center overflow-x-auto text-soft-gray scrollbar-none">
                    {partners.map((partner, index) => (
                        <Fragment key={partner.name}>
                            <div className="shrink-0 px-5 text-text-primary/75">{partner.logo}</div>
                            {index < partners.length - 1 && (
                                <div className="h-5 w-px shrink-0 bg-white/10" aria-hidden="true" />
                            )}
                        </Fragment>
                    ))}
                </div>
            </div>
        </section>
    );
}
