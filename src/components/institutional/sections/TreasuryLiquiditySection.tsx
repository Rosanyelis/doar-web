import HeroBackground from '../hero/HeroBackground';
import ExecutiveTreasuryBanner from './treasury-liquidity/ExecutiveTreasuryBanner';
import TreasuryCapabilityGrid from './treasury-liquidity/TreasuryCapabilityGrid';
import TreasuryFlowDiagram from './treasury-liquidity/TreasuryFlowDiagram';
import TreasuryLiquidityNarrative from './treasury-liquidity/TreasuryLiquidityNarrative';
import { cn } from '../../../lib/utils';

export default function TreasuryLiquiditySection() {
    return (
        <section
            id="tesoreria"
            className={cn(
                'relative overflow-hidden border-t border-white/6 bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-5">
                        <TreasuryLiquidityNarrative />
                    </div>

                    <div className="flex items-start justify-center lg:col-span-7">
                        <TreasuryFlowDiagram />
                    </div>
                </div>

                <TreasuryCapabilityGrid />
                <ExecutiveTreasuryBanner />
            </div>
        </section>
    );
}
