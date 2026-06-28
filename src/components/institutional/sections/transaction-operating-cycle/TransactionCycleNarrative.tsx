export default function TransactionCycleNarrative() {
    return (
        <div className="mb-10 max-w-3xl md:mb-12">
            <h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[42px]">
                <span className="relative inline-block">
                    Ciclo
                    <span
                        className="absolute -bottom-2 left-0 h-0.5 w-10 bg-doar-gold"
                        aria-hidden="true"
                    />
                </span>{' '}
                Operativo de una Transacción
            </h2>

            <p className="mt-8 text-base font-light leading-relaxed text-soft-gray sm:text-lg">
                Cada operación ejecutada en DOAR sigue un ciclo operativo unificado que coordina el
                registro, la tesorería, la liquidación y la entrega de fondos a través de una
                infraestructura resiliente.
            </p>
        </div>
    );
}
