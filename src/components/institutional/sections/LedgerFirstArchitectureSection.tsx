import HeroBackground from '../hero/HeroBackground';
import LedgerCapabilityGrid from './ledger-first/LedgerCapabilityGrid';
import LedgerFlowDiagram from './ledger-first/LedgerFlowDiagram';
import LedgerFirstNarrative from './ledger-first/LedgerFirstNarrative';
import { cn } from '../../../lib/utils';

export default function LedgerFirstArchitectureSection() {
    return (
        <section
            id="ledger"
            className={cn(
                'relative overflow-hidden bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <LedgerFirstNarrative />
                    </div>

                    <div className="flex items-center justify-center lg:col-span-7 lg:justify-center">
                        <LedgerFlowDiagram />
                    </div>
                </div>
                <LedgerCapabilityGrid />
            </div>
        </section>
    );
}
