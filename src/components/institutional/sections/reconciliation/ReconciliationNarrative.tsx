export default function ReconciliationNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Liquidación y Conciliación Operacional
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-soft-gray">
                <p>
                    DOAR coordina la conciliación entre el ledger operacional y los eventos de
                    infraestructura financiera integrada, garantizando que cada operación mantenga
                    consistencia, trazabilidad e integridad a lo largo de todo su ciclo de vida.
                </p>
                <p>
                    El Reconciliation Engine valida, empareja y reconcilia registros entre
                    sistemas — transformando datos distribuidos en un estado operacional unificado
                    y confiable para usuarios, empresas y controles internos.
                </p>
                <p>
                    Este proceso separa la experiencia transaccional de la liquidación final,
                    permitiendo que las operaciones avancen con visibilidad continua mientras la
                    infraestructura especializada completa sus procesos de settlement y
                    reconciliación.
                </p>
            </div>
        </div>
    );
}
