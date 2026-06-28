import { MONITORING_CENTER_NODES } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const NODE_POSITIONS: Record<
    (typeof MONITORING_CENTER_NODES)[number]['id'],
    { top: string; left: string }
> = {
    operations: { top: '12%', left: '15%' },
    compliance: { top: '12%', left: '50%' },
    risk: { top: '12%', left: '85%' },
    cases: { top: '88%', left: '15%' },
    provider: { top: '88%', left: '50%' },
    status: { top: '88%', left: '85%' },
};

function DoarLogoIcon() {
    return (
        <svg className="h-8 w-8 fill-doar-gold" viewBox="0 0 32 24" aria-hidden="true">
            <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
        </svg>
    );
}

export default function MonitoringCenterDiagram() {
    return (
        <div
            className="relative mx-auto h-80 w-full max-w-lg"
            role="img"
            aria-label="Diagrama del Centro de Monitoreo DOAR"
        >
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 320"
                fill="none"
                aria-hidden="true"
            >
                {MONITORING_CENTER_NODES.map(({ id }) => {
                    const pos = NODE_POSITIONS[id];
                    const x = (parseFloat(pos.left) / 100) * 400;
                    const y = (parseFloat(pos.top) / 100) * 320;

                    return (
                        <line
                            key={id}
                            x1="200"
                            y1="160"
                            x2={x}
                            y2={y}
                            stroke="#2f6bff"
                            strokeWidth="1"
                            opacity="0.4"
                        />
                    );
                })}
            </svg>

            <div
                className={cn(
                    'absolute left-1/2 top-1/2 z-10 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2',
                    'flex-col items-center justify-center rounded-full',
                    'border border-doar-gold/50 bg-deep-space/90',
                    'shadow-[0_0_40px_rgba(245,196,0,0.2)] ledger-glow-pulse backdrop-blur-sm'
                )}
            >
                <DoarLogoIcon />
                <p className="mt-1 text-[7px] font-semibold uppercase tracking-[0.12em] text-doar-gold">
                    Centro de
                </p>
                <p className="text-[7px] font-semibold uppercase tracking-[0.12em] text-doar-gold">
                    Monitoreo
                </p>
            </div>

            {MONITORING_CENTER_NODES.map(({ id, title }) => {
                const pos = NODE_POSITIONS[id];

                return (
                    <div
                        key={id}
                        className={cn(
                            'absolute z-10 max-w-[110px] -translate-x-1/2 -translate-y-1/2',
                            'rounded-lg border border-doar-blue/30 bg-deep-space/80 px-2 py-2',
                            'text-center backdrop-blur-sm'
                        )}
                        style={{ top: pos.top, left: pos.left }}
                    >
                        <p className="text-[7px] font-semibold uppercase tracking-wider text-text-primary">
                            {title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
