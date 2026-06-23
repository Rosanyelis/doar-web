export default function TreasuryLiquidityNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Tesorería y Gestión de Liquidez
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-soft-gray">
                <p>
                    La arquitectura de tesorería de DOAR gestiona la liquidez operacional como una
                    capa de coordinación independiente, diseñada para garantizar continuidad
                    transaccional y cobertura de operaciones activas.
                </p>
                <p>
                    A través del Treasury Engine, DOAR coordina cobertura, prefondeo, rebalanceo y
                    monitoreo de exposición — separando la experiencia transaccional de los
                    procesos de conciliación y liquidación con infraestructura especializada.
                </p>
                <p>
                    Este enfoque permite que usuarios y empresas operen con liquidez inmediata
                    disponible, mientras la plataforma optimiza recursos y mantiene control
                    continuo sobre cobertura y riesgo operacional.
                </p>
            </div>
        </div>
    );
}
