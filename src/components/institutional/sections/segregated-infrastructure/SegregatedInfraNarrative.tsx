export default function SegregatedInfraNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Infraestructura Operacional Segregada
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="flex max-w-[560px] flex-col gap-4 text-base font-light leading-relaxed text-white">
                <p>
                    DOAR organiza sus procesos operacionales en capas independientes — registro,
                    cumplimiento, tesorería y liquidación — dentro de una arquitectura unificada
                    diseñada para mejorar la trazabilidad, el control y la escalabilidad operacional.
                </p>
                <p>
                    Cada capa cumple una función especializada dentro del ecosistema, permitiendo
                    que los procesos críticos operen de forma segregada mientras mantienen
                    coordinación centralizada a través de la plataforma DOAR.
                </p>
                <p>
                    Este enfoque permite escalar operaciones financieras digitales sin comprometer
                    la integridad del registro, los controles de cumplimiento ni la gestión de
                    liquidez.
                </p>
            </div>

            <h3 className="mb-4 mt-6 text-xl font-semibold text-text-primary">
                Separación funcional, control unificado
            </h3>

            <p className="max-w-[560px] text-base font-light leading-relaxed text-soft-gray">
                Cada capa opera de forma independiente dentro de su dominio funcional, mientras
                DOAR coordina la experiencia operativa completa a través de un modelo unificado que
                garantiza trazabilidad, consistencia y eficiencia en todo el ciclo de vida de las
                operaciones financieras.
            </p>
        </div>
    );
}
