import { useCallback, useEffect, useState } from 'react';
import { PartnerLogo, type PartnerLogoId } from '../shared/partnerLogos';
import { cn } from '../../../lib/utils';

const DEFAULT_INTERVAL = 3000;

interface PartnerStripCarouselProps {
    partnerKeys: readonly PartnerLogoId[];
    autoPlayInterval?: number;
}

export default function PartnerStripCarousel({
    partnerKeys,
    autoPlayInterval = DEFAULT_INTERVAL,
}: PartnerStripCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
    const itemsToShow = 1;

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setPrefersReducedMotion(mediaQuery.matches);

        const handleChange = (event: MediaQueryListEvent) => {
            setPrefersReducedMotion(event.matches);
        };

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prev) =>
            prev >= partnerKeys.length - itemsToShow ? 0 : prev + 1
        );
    }, [partnerKeys.length, itemsToShow]);

    useEffect(() => {
        if (prefersReducedMotion) return;

        const timer = window.setInterval(nextSlide, autoPlayInterval);
        return () => window.clearInterval(timer);
    }, [prefersReducedMotion, nextSlide, autoPlayInterval, currentIndex]);

    return (
        <div
            role="region"
            aria-label="Partners de infraestructura"
            aria-live="off"
            className={cn('min-w-0 max-w-full overflow-hidden md:hidden')}
        >
            <div
                className={cn(
                    'flex text-soft-gray',
                    prefersReducedMotion ? '' : 'transition-transform duration-500 ease-in-out'
                )}
                style={{
                    transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                }}
            >
                {partnerKeys.map((key) => (
                    <div
                        key={key}
                        className="flex shrink-0 items-center justify-center px-5 text-text-primary/75"
                        style={{ width: `${100 / itemsToShow}%` }}
                    >
                        <PartnerLogo id={key} />
                    </div>
                ))}
            </div>
        </div>
    );
}