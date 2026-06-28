import UnifiedOperationsDiagram from './UnifiedOperationsDiagram';
import { cn } from '../../../../lib/utils';

export default function OperationsDiagramContainer() {
    return (
        <div className="flex w-full items-center justify-center">
            <div
                className={cn(
                    'relative w-full',
                    'before:pointer-events-none before:absolute before:inset-0',
                )}
            >
                <UnifiedOperationsDiagram />
            </div>
        </div>
    );
}
