import SectionWrapper from '../shared/SectionWrapper';
import ExecutiveInfrastructureBanner from './operational-liquidity/ExecutiveInfrastructureBanner';
import OperationalLiquidityCapabilities from './operational-liquidity/OperationalLiquidityCapabilities';
import OperationalLiquidityNarrative from './operational-liquidity/OperationalLiquidityNarrative';
import OperationalSubsections from './operational-liquidity/OperationalSubsections';

export default function OperationalLiquiditySection() {
    return (
        <SectionWrapper id="tesoreria" className="border-t border-white/6">
            <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
                <div className="min-w-0 lg:col-span-5">
                    <OperationalLiquidityNarrative />
                </div>
                <div className="min-w-0 lg:col-span-7">
                    <OperationalLiquidityCapabilities />
                </div>
            </div>

            <OperationalSubsections />
            <ExecutiveInfrastructureBanner />
        </SectionWrapper>
    );
}
