import SectionWrapper from '../shared/SectionWrapper';
import ExecutiveTreasuryBanner from './treasury-liquidity/ExecutiveTreasuryBanner';
import TreasuryCapabilityGrid from './treasury-liquidity/TreasuryCapabilityGrid';
import TreasuryFlowDiagram from './treasury-liquidity/TreasuryFlowDiagram';
import TreasuryLiquidityNarrative from './treasury-liquidity/TreasuryLiquidityNarrative';

export default function TreasuryLiquiditySection() {
    return (
        <SectionWrapper id="tesoreria-liquidez" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-16 lg:grid-cols-12 lg:gap-12">
                <div className="lg:col-span-5">
                    <TreasuryLiquidityNarrative />
                </div>

                <div className="flex items-start justify-center lg:col-span-7 ">
                    <TreasuryFlowDiagram />
                </div>
            </div>

            <TreasuryCapabilityGrid />
            <ExecutiveTreasuryBanner />
        </SectionWrapper>
    );
}
