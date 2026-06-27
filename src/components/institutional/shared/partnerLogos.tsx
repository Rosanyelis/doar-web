import type { ReactNode } from 'react';
import { cn } from '../../../lib/utils';

type PartnerLogoAsset = {
    src: string;
    alt: string;
    className?: string;
};

const PARTNER_LOGO_ASSETS: Record<string, PartnerLogoAsset> = {
    circle: { src: '/assets/institucional/bussines/circle.svg', alt: 'Circle', className: 'w-30 h-auto' },
    fireblocks: { src: '/assets/institucional/bussines/fireblocks.webp', alt: 'Fireblocks', className: 'w-30 h-auto' },
    mercury: { src: '/assets/institucional/bussines/mercury.svg', alt: 'Mercury', className: 'w-30 h-auto' },
    stripe: { src: '/assets/institucional/bussines/stripe.png', alt: 'Stripe', className: 'w-20 h-auto' },
    dlocal: { src: '/assets/institucional/bussines/dlocal.svg', alt: 'dLocal', className: 'w-30 h-auto' },
    sumsub: { src: '/assets/institucional/bussines/sumsub.svg', alt: 'Sumsub', className: 'w-30 h-auto' },
};

export type PartnerLogoId = keyof typeof PARTNER_LOGO_ASSETS;

function PartnerLogoImage({
    src,
    alt,
    className,
}: {
    src: string;
    alt: string;
    className?: string;
}) {
    return (
        <img
            src={src}
            alt={alt}
            className={cn('h-6 w-auto max-w-[120px] object-contain object-left', className)}
            loading="lazy"
            decoding="async"
        />
    );
}

export function PartnerLogo({
    id,
    className,
}: {
    id: PartnerLogoId;
    className?: string;
}) {
    const { src, alt, className: assetClassName } = PARTNER_LOGO_ASSETS[id];

    return (
        <PartnerLogoImage
            src={src}
            alt={alt}
            className={cn(assetClassName, className)}
        />
    );
}

export const PARTNER_LOGOS: Record<string, ReactNode> = Object.fromEntries(
    Object.entries(PARTNER_LOGO_ASSETS).map(([key, { src, alt, className }]) => [
        key,
        <PartnerLogoImage key={key} src={src} alt={alt} className={className} />,
    ])
);
