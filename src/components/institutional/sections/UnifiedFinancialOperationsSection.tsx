import HeroBackground from '../hero/HeroBackground';
import ExecutiveOperationalBanner from './unified-operations/ExecutiveOperationalBanner';
import OperationsDiagramContainer from './unified-operations/OperationsDiagramContainer';
import UnifiedOperationsNarrative from './unified-operations/UnifiedOperationsNarrative';
import { cn } from '../../../lib/utils';

export default function UnifiedFinancialOperationsSection() {
    return (
        <section
            id="modelo-operativo"
            className={cn(
                'relative overflow-hidden bg-midnight-navy font-institutional',
                'py-15 md:py-25'
            )}
        >
            <HeroBackground />

            <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 xl:px-10">
                <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-12">
                    <div className="lg:col-span-4">
                        <UnifiedOperationsNarrative />
                    </div>

                    <div className="flex items-center justify-center lg:col-span-8">
                        <OperationsDiagramContainer />
                    </div>
                </div>

                <ExecutiveOperationalBanner />
            </div>
        </section>
    );
}
