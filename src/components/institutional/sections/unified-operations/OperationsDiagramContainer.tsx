import UnifiedOperationsDiagram from './UnifiedOperationsDiagram';
import { cn } from '../../../../lib/utils';

export default function OperationsDiagramContainer() {
    return (
        <div className="flex w-full items-center justify-center">
            <div
                className={cn(
                    'relative w-full',
                    'before:pointer-events-none before:absolute before:inset-0',
                    'before:bg-[radial-gradient(ellipse_60%_50%_at_50%_45%,rgba(245,196,0,0.06),transparent_70%)]',
                    'shadow-[0_0_60px_rgba(245,196,0,0.08)]',
                    'transition-opacity duration-200'
                )}
            >
                <UnifiedOperationsDiagram />
            </div>
        </div>
    );
}
