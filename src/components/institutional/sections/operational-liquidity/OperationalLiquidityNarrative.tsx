export default function OperationalLiquidityNarrative() {
    return (
        <div className="relative flex flex-col">
            <div
                className="pointer-events-none absolute -left-4 top-0 h-full w-[120%] opacity-30"
                aria-hidden="true"
            >
                <svg className="h-full w-full" viewBox="0 0 400 200" preserveAspectRatio="none" fill="none">
                    <path
                        d="M0 60 Q100 20 200 60 T400 60"
                        stroke="rgba(47,107,255,0.3)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                    <path
                        d="M0 100 Q100 60 200 100 T400 100"
                        stroke="rgba(47,107,255,0.2)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                    <path
                        d="M0 140 Q100 100 200 140 T400 140"
                        stroke="rgba(47,107,255,0.15)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                </svg>
            </div>

            <div className="relative z-10">
                <h2 className="max-w-sm text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[42px]">
                    Liquidez y Continuidad Operativa
                </h2>

                <div className="mt-6 h-0.5 w-12 bg-doar-gold" aria-hidden="true" />

                <p className="mt-8  text-base font-light leading-relaxed text-white sm:text-lg">
                    DOAR mantiene un compromiso continuo con la disponibilidad operativa y la estabilidad
                    del servicio, garantizando que las operaciones activas se ejecuten con continuidad y
                    dentro de parámetros definidos.
                </p>
            </div>
        </div>
    );
}
