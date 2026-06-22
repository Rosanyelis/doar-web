import HeroBackground from '../hero/HeroBackground';
import WhatIsDoarCapabilityGrid from './what-is-doar/WhatIsDoarCapabilityGrid';
import WhatIsDoarNarrative from './what-is-doar/WhatIsDoarNarrative';
import { cn } from '../../../lib/utils';

export default function WhatIsDoarSection() {
    return (
        <section
            id="que-es"
            className={cn(
                'relative overflow-hidden bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <WhatIsDoarNarrative />
                    </div>

                    <div className="flex w-full items-center justify-center lg:col-span-7 lg:w-[100%] lg:justify-end xl:w-[100%]">
                        <img
                            src="/assets/institucional/diagram_02.svg"
                            alt="Diagrama de arquitectura de orquestación financiera DOAR"
                            className={cn(
                                'h-auto w-full ',
                                'transition-opacity duration-200'
                            )}
                        />
                    </div>
                </div>

                <WhatIsDoarCapabilityGrid />
            </div>
        </section>
    );
}
