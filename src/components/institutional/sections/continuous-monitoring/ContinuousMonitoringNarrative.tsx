export default function ContinuousMonitoringNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Monitoreo Continuo de Operaciones
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-soft-gray">
                <p>
                    El Monitoring Center de DOAR centraliza la supervisión de operaciones,
                    eventos de cumplimiento, alertas de riesgo y actividad de proveedores en una
                    vista operacional unificada.
                </p>
                <p>
                    Cada evento es capturado, clasificado y correlacionado en tiempo real,
                    permitiendo visibilidad continua sobre el estado operacional de la plataforma
                    y sus integraciones con infraestructura financiera especializada.
                </p>
                <p>
                    Este centro de monitoreo actúa como punto de control permanente, facilitando
                    la revisión de casos, el escalamiento de alertas y la respuesta coordinada ante
                    eventos críticos.
                </p>
            </div>
        </div>
    );
}
