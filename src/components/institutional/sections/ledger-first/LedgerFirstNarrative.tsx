export default function LedgerFirstNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl xl:text-5xl">
                Arquitectura
                <br />
                <span className="text-doar-gold">Ledger First</span>
            </h2>
            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />
            <div className="flex max-w-[600px] flex-col gap-4 text-base font-light leading-relaxed text-white">
                <p>
                El ledger actúa como la fuente de verdad operacional de DOAR, registrando y coordinando todas las operaciones digitales ejecutadas dentro de la plataforma.
                </p>
                <p>
                Cada operación realizada a través de DOAR es registrada inicialmente en el ledger antes de interactuar con la infraestructura financiera subyacente.
                </p>
                <p>
                Este enfoque permite mantener balances, actividad, historial y estados operativos bajo un único modelo de control, proporcionando consistencia operacional, trazabilidad y una experiencia transaccional unificada para usuarios y empresas.
                </p>
                <p>
                El ledger constituye el núcleo operacional de la plataforma y permite coordinar procesos de cumplimiento, conciliación, tesorería y liquidación mediante una arquitectura diseñada para servicios financieros digitales modernos.
                </p>
            </div>
        </div>
    );
}
