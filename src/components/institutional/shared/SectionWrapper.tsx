import type { ReactNode } from 'react';
import HeroBackground from '../hero/HeroBackground';
import { cn } from '../../../lib/utils';

interface SectionWrapperProps {
    id?: string;
    children: ReactNode;
    className?: string;
}

export default function SectionWrapper({ id, children, className }: SectionWrapperProps) {
    return (
        <section
            id={id}
            className={cn(
                'relative overflow-hidden bg-midnight-navy font-institutional',
                'py-15 md:py-25',
                id && 'scroll-mt-[88px]',
                className
            )}
        >
            <HeroBackground />
            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                {children}
            </div>
        </section>
    );
}
