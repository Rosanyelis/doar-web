export default function RiskManagementNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Gestión y Monitoreo de Riesgo
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-soft-gray">
                <p>
                    El Risk Engine de DOAR evalúa y gestiona riesgos operacionales en tiempo real,
                    aplicando controles de velocidad, exposición y comportamiento a lo largo de
                    todas las operaciones financieras digitales.
                </p>
                <p>
                    Cada señal de riesgo es procesada de forma centralizada, generando alertas,
                    puntuaciones dinámicas y acciones de mitigación coordinadas con la capa de
                    cumplimiento y monitoreo continuo.
                </p>
                <p>
                    Este enfoque permite detectar patrones anómalos antes de que impacten la
                    operación, manteniendo resiliencia y control sobre la infraestructura
                    financiera integrada.
                </p>
            </div>
        </div>
    );
}
