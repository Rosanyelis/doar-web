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
                    'flex-col items-center gap-10 px-4 py-10',
                    'lg:flex-row lg:items-center lg:px-10 lg:py-0 xl:px-8'
                )}
            >
                <div className="w-full lg:w-[50%] ">
                    <HeroContent />
                    <HeroActions />
                </div>

                <div className="flex w-full items-center justify-center lg:w-[55%] ">
                    <img
                        src="/assets/institucional/diagram_01.png"
                        alt="Diagrama de orquestación financiera DOAR"
                        className="h-auto w-full max-w-2xl object-contain"
                    />
                </div>
            </div>
        </section>
    );
}
