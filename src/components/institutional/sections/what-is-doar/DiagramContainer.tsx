import FinancialOrchestrationDiagram from './FinancialOrchestrationDiagram';
import { cn } from '../../../../lib/utils';

export default function DiagramContainer() {
    return (
        <div
            className={cn(
                'flex w-full items-center justify-center',
                'lg:w-[100%] lg:justify-end xl:w-[100%]'
            )}
        >
            
                <FinancialOrchestrationDiagram />
        </div>
    );
}
