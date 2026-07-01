import { Fragment } from 'react';
import { PARTNER_LOGOS } from '../shared/partnerLogos';
import type { PartnerLogoId } from '../shared/partnerLogos';
import PartnerStripCarousel from './PartnerStripCarousel';
import { cn } from '../../../lib/utils';

const partnerKeys = [
    'circle',
    'fireblocks',
    'stripe',
    'dlocal',
    'sumsub',
    'mercury',
] as const satisfies readonly PartnerLogoId[];

export default function PartnerStrip() {
    return (
        <section
            className={cn(
                'border-t border-b border-white/6 bg-midnight-navy py-6',
                'font-institutional'
            )}
        >
            <div className="mx-auto flex min-w-0 max-w-[1440px] flex-col gap-6 px-6 md:flex-row md:items-center md:justify-between md:px-12 xl:px-20">
                <p className="max-w-[200px] shrink-0 text-md text-white">
                    Infraestructura operada con partners líderes
                </p>

                <div
                    role="region"
                    aria-label="Partners de infraestructura"
                    className="hidden min-w-0 max-w-full items-center text-soft-gray md:flex"
                >
                    {partnerKeys.map((key, index) => (
                        <Fragment key={key}>
                            <div className="shrink-0 px-5 text-text-primary/75">
                                {PARTNER_LOGOS[key]}
                            </div>
                            {index < partnerKeys.length - 1 && (
                                <div className="h-5 w-px shrink-0 bg-white/10" aria-hidden="true" />
                            )}
                        </Fragment>
                    ))}
                </div>

                <PartnerStripCarousel partnerKeys={partnerKeys} />
            </div>
        </section>
    );
}
