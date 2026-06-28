import { ArrowDown, Layers, Landmark, RefreshCw, ShieldCheck, User } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const MODULES = [
    { id: 'ledger', label: 'Ledger', icon: Layers },
    { id: 'compliance', label: 'Cumplimiento', icon: ShieldCheck },
    { id: 'treasury', label: 'Tesorería', icon: Landmark },
    { id: 'settlement', label: 'Liquidación', icon: RefreshCw },
] as const;

const GOLD = '#F5C400';

function GoldArrow() {
    return (
        <div className="flex flex-col items-center py-0.5" aria-hidden="true">
            <div className="h-2 w-px bg-doar-gold/80" />
            <div className="h-1.5 w-1.5 rounded-full bg-doar-gold" />
            <ArrowDown className="h-4 w-4 text-doar-gold" strokeWidth={2} />
            <div className="h-2 w-px bg-doar-gold/80" />
        </div>
    );
}

function ModuleBox({ icon: Icon, label }: { icon: LucideIcon; label: string }) {
    return (
        <article
            className={cn(
                'relative z-10 flex w-full flex-col items-center gap-2 rounded-xl border border-doar-blue/35',
                'bg-deep-space/90 px-2 py-4 sm:px-3'
            )}
        >
            <Icon className="h-6 w-6 text-doar-blue" strokeWidth={1.75} aria-hidden="true" />
            <span className="text-center text-[9px] font-semibold uppercase tracking-[0.12em] text-text-primary sm:text-[10px]">
                {label}
            </span>
        </article>
    );
}

function ModuleConnectorLines() {
    return (
        <svg
            className="pointer-events-none absolute inset-x-0 top-0 h-14 w-full overflow-visible"
            viewBox="0 0 400 56"
            preserveAspectRatio="none"
            aria-hidden="true"
        >
            {/* DOAR → línea horizontal (entre Compliance y Treasury) */}
            <line x1="200" y1="0" x2="200" y2="18" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.9" />
            <circle cx="200" cy="18" r="3" fill={GOLD} />

            {/* Línea horizontal uniendo los 4 módulos */}
            <line x1="50" y1="18" x2="350" y2="18" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.9" />

            {/* Nodos entre módulos */}
            <circle cx="100" cy="18" r="3" fill={GOLD} />
            <circle cx="300" cy="18" r="3" fill={GOLD} />

            {/* Verticales desde la horizontal hasta cada recuadro */}
            {[50, 150, 250, 350].map((x) => (
                <g key={x}>
                    <line x1={x} y1="18" x2={x} y2="56" stroke={GOLD} strokeWidth="1.5" strokeOpacity="0.9" />
                    <circle cx={x} cy="56" r="3" fill={GOLD} />
                </g>
            ))}
        </svg>
    );
}

export default function UnifiedOperationsDiagram() {
    return (
        <div
            className="mx-auto flex w-full max-w-xl flex-col items-center"
            role="img"
            aria-label="Diagrama de operaciones financieras unificadas DOAR"
        >
            <div className="flex flex-col items-center">
                <div
                    className={cn(
                        'flex h-12 w-12 items-center justify-center rounded-full',
                        'border border-doar-blue/40 bg-doar-blue/5'
                    )}
                >
                    <User className="h-6 w-6 text-doar-blue" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <span className="mt-2 text-[10px] font-semibold uppercase tracking-[0.14em] text-text-primary">
                    Usuario
                </span>
            </div>

            <GoldArrow />

            <article
                className={cn(
                    'flex w-full max-w-sm items-center justify-center gap-3 rounded-xl border-2',
                    'border-doar-gold/50 bg-deep-space/90 px-5 py-4',
                    'shadow-[0_0_40px_rgba(245,196,0,0.15)]'
                )}
            >
                <img
                    src="/assets/institucional/logo.svg"
                    alt=""
                    className="w-40 shrink-0"
                    aria-hidden="true"
                />
            </article>

            {/* Conector DOAR → bus horizontal → 4 módulos */}
            <div className="relative w-full">
                <div className="mx-auto flex justify-center z-10" aria-hidden="true">
                    <div className="h-4 w-px bg-doar-gold/90" />
                </div>

                <div className="relative w-full pt-1">
                    <ModuleConnectorLines />

                    <div className="grid grid-cols-4 gap-2 pt-14 sm:gap-3">
                        {MODULES.map(({ id, label, icon }) => (
                            <ModuleBox key={id} icon={icon} label={label} />
                        ))}
                    </div>
                </div>
            </div>

            {/* Treasury → Financial Infrastructure */}
            <div className="relative flex w-full flex-col items-center">
                <div
                    className="absolute left-[62.5%] top-0 flex -translate-x-1/2 flex-col items-center"
                    aria-hidden="true"
                >
                    <div className="h-1.5 w-1.5 rounded-full bg-doar-gold" />
                    <div className="h-4 w-px bg-doar-gold/90" />
                    <ArrowDown className="h-4 w-4 text-doar-gold" strokeWidth={2} />
                    <div className="h-2 w-px bg-doar-gold/90" />
                    <div className="h-1.5 w-1.5 rounded-full bg-doar-gold" />
                </div>

                <div className="w-[75%] pt-10">
                    <article
                        className={cn(
                            'flex items-center justify-center gap-3 rounded-xl border border-doar-blue/35',
                            'bg-deep-space/90 px-4 py-4 sm:px-6'
                        )}
                    >
                        <Landmark
                            className="h-6 w-6 shrink-0 text-doar-blue"
                            strokeWidth={1.75}
                            aria-hidden="true"
                        />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-text-primary sm:text-xs">
                            Infraestructura Financiera
                        </span>
                    </article>
                </div>
            </div>
        </div>
    );
}
