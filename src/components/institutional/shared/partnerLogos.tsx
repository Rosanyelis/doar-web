import type { ReactNode } from 'react';
import {
    CircleLogo,
    DLocalLogo,
    FireblocksLogo,
    MercuryLogo,
    StripeLogo,
    SumsubLogo,
} from './PartnerLogo';

export const PARTNER_LOGOS: Record<string, ReactNode> = {
    circle: <CircleLogo />,
    fireblocks: <FireblocksLogo />,
    mercury: <MercuryLogo />,
    stripe: <StripeLogo />,
    dlocal: <DLocalLogo />,
    sumsub: <SumsubLogo />,
};
