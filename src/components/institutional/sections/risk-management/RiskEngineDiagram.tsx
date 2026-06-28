import { RISK_ENGINE_NODES } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const NODE_POSITIONS: Record<
    (typeof RISK_ENGINE_NODES)[number]['id'],
    { top: string; left: string }
> = {
    velocity: { top: '8%', left: '50%' },
    exposure: { top: '28%', left: '82%' },
    scoring: { top: '72%', left: '82%' },
    alerts: { top: '72%', left: '18%' },
    behavioral: { top: '28%', left: '18%' },
};

function RiskEngineHexagon() {
    return (
        <div
            className={cn(
                'absolute left-1/2 top-1/2 z-10 flex h-28 w-32 -translate-x-1/2 -translate-y-1/2',
                'items-center justify-center',
                'border border-doar-gold/50 bg-deep-space/90',
                'shadow-[0_0_40px_rgba(245,196,0,0.2)]',
                'backdrop-blur-sm'
            )}
            style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        >
            <div className="text-center">
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-doar-gold">
                    Motor de
                </p>
                <p className="text-[9px] font-semibold uppercase tracking-[0.14em] text-doar-gold">
                    Riesgo
                </p>
            </div>
        </div>
    );
}

export default function RiskEngineDiagram() {
    return (
        <div
            className="relative mx-auto aspect-square w-full max-w-md"
            role="img"
            aria-label="Diagrama del Motor de Riesgo DOAR"
        >
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 400"
                fill="none"
                aria-hidden="true"
            >
                {RISK_ENGINE_NODES.map(({ id }) => {
                    const pos = NODE_POSITIONS[id];
                    const x = parseFloat(pos.left) * 4;
                    const y = parseFloat(pos.top) * 4;

                    return (
                        <line
                            key={id}
                            x1="200"
                            y1="200"
                            x2={x}
                            y2={y}
                            stroke="#f5c400"
                            strokeWidth="1"
                            strokeDasharray="5 4"
                            className="institutional-dash"
                            opacity="0.5"
                        />
                    );
                })}
            </svg>

            <RiskEngineHexagon />

            {RISK_ENGINE_NODES.map(({ id, title }) => {
                const pos = NODE_POSITIONS[id];

                return (
                    <div
                        key={id}
                        className={cn(
                            'absolute z-10 max-w-[120px] -translate-x-1/2 -translate-y-1/2',
                            'rounded-lg border border-doar-blue/30 bg-deep-space/80 px-2 py-2',
                            'text-center backdrop-blur-sm'
                        )}
                        style={{ top: pos.top, left: pos.left }}
                    >
                        <p className="text-[8px] font-semibold uppercase tracking-wider text-text-primary">
                            {title}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}
