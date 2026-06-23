export default function AuditTrailNarrative() {
    return (
        <>
            <div className="flex flex-col">
                <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                    Trazabilidad y Registro de Auditoría
                </h2>

                <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />
            </div>

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-soft-gray lg:ml-auto">
                <p>
                    DOAR mantiene un registro completo y verificable de cada acción, evento y
                    decisión a lo largo del ciclo de vida operacional — desde la acción del usuario
                    hasta el registro de auditoría final.
                </p>
                <p>
                    Cada paso del flujo es capturado de forma inmutable, creando una cadena de
                    evidencia que soporta cumplimiento regulatorio, investigaciones y revisiones
                    internas.
                </p>
                <p>
                    Este enfoque garantiza trazabilidad end-to-end, integridad de datos y
                    disponibilidad de evidencia verificable para auditores, reguladores y equipos
                    de control interno.
                </p>
            </div>
        </>
    );
}
