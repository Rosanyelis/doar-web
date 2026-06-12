import InfrastructureDiagram from '../diagrams/InfrastructureDiagram';
import HeroActions from './HeroActions';
import HeroBackground from './HeroBackground';
import HeroContent from './HeroContent';
import { cn } from '../../../lib/utils';

export default function InstitutionalHero() {
    return (
        <section
            className={cn(
                'relative min-h-screen w-full overflow-hidden bg-midnight-navy',
                'font-institutional'
            )}
        >
            <HeroBackground />

            <div
                className={cn(
                    'relative z-10 flex min-h-screen w-full',
                    'flex-col items-center gap-16 px-6 py-16',
                    'lg:flex-row lg:items-center lg:gap-12 lg:px-12 lg:py-0 xl:px-20'
                )}
            >
                <div className="w-full lg:w-[45%] border-b border-white">
                    <HeroContent />
                    <HeroActions />
                </div>

                <div className="flex w-full items-center justify-center lg:w-[55%] border-b border-white">
                    <InfrastructureDiagram />
                </div>
            </div>
        </section>
    );
}
