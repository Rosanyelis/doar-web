export default function AuditTrailNarrative() {
    return (
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2 lg:gap-16">
            <div>
                <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[42px]">
                    Trazabilidad y Registro de Auditoría
                </h2>

                <div className="mt-6 h-0.5 w-12 bg-doar-gold" aria-hidden="true" />

                <p className="mt-8 max-w-md text-base font-light leading-relaxed text-white">
                    DOAR mantiene un enfoque estructurado para registrar cada acción, evento y
                    decisión dentro del ciclo operativo de la plataforma.
                </p>
            </div>

            <div className="flex flex-col gap-5 text-base font-light leading-relaxed text-white lg:pt-2">
                <p>
                    Cada operación en la plataforma genera eventos de sistema, proveedor y
                    cumplimiento que quedan vinculados de forma secuencial dentro del modelo
                    operativo.
                </p>
                <p>
                    Estos registros permiten reconstruir la actividad, validar decisiones y
                    proporcionar evidencia verificable para auditoría, cumplimiento y control
                    interno.
                </p>
            </div>
        </div>
    );
}
