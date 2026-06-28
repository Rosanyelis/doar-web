import { ArrowDown, Landmark, Users } from 'lucide-react';
import { cn } from '../../../../lib/utils';

function FlowArrow() {
    return (
        <div className="flex justify-center py-1" aria-hidden="true">
            <ArrowDown className="h-5 w-5 text-doar-blue" strokeWidth={2} />
        </div>
    );
}

export default function RegulatoryDiagram() {
    return (
        <div
            className="relative flex w-full max-w-md flex-col"
            role="img"
            aria-label="Diagrama de posicionamiento de DOAR en el ecosistema financiero"
        >
            <div className="pointer-events-none absolute -right-8 top-0 h-full w-1/2 opacity-40" aria-hidden="true">
                <svg className="h-full w-full" viewBox="0 0 200 400" preserveAspectRatio="none" fill="none">
                    <path
                        d="M0 80 Q60 40 120 80 T200 80"
                        stroke="rgba(47,107,255,0.25)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                    <path
                        d="M0 200 Q60 160 120 200 T200 200"
                        stroke="rgba(168,85,247,0.2)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                    <path
                        d="M0 320 Q60 280 120 320 T200 320"
                        stroke="rgba(47,107,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                </svg>
            </div>

            <article
                className={cn(
                    'relative z-10 flex flex-col items-center gap-3 rounded-xl border border-doar-blue/30',
                    'bg-deep-space/80 px-5 py-4 text-center'
                )}
            >
                <div
                    className="flex shrink-0 items-center justify-center rounded-full"
                    aria-hidden="true"
                >
                    <Users className="h-12 w-12 text-doar-blue" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                    Usuarios y Empresas
                </h3>
            </article>

            <FlowArrow />

            <article
                className={cn(
                    'relative z-10 flex flex-col items-center gap-3 rounded-xl border border-doar-gold/50',
                    'bg-deep-space/80 px-5 py-5 text-center',
                    'shadow-[0_0_40px_rgba(245,196,0,0.1)]'
                )}
            >
                <img
                    src="/assets/institucional/logo.svg"
                    alt=""
                    className=" w-50 shrink-0"
                    aria-hidden="true"
                />
                <div className="min-w-0">
                    <p className="mt-1 text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                        Capa de Orquestación Financiera
                    </p>
                </div>
            </article>

            <FlowArrow />

            <article
                className={cn(
                    'relative z-10 flex flex-col items-center gap-3 rounded-xl border border-doar-blue/30',
                    'bg-deep-space/80 px-5 py-4 text-center'
                )}
            >
                <div
                    className="flex shrink-0 items-center justify-center "
                    aria-hidden="true"
                >
                    <Landmark className="h-12 w-12 text-doar-green" strokeWidth={1.75} />
                </div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.12em] text-text-primary">
                    Socios Especializados
                </h3>
            </article>
        </div>
    );
}
