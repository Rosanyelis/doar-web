export default function RegulatoryNarrative() {
    return (
        <div className="flex flex-col">
            <span className="mb-6 text-sm font-semibold uppercase tracking-[0.2em] text-doar-gold">
                Posición Regulatoria
            </span>

            <h2 className="mb-8 max-w-xl text-[40px] font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-[56px] xl:text-[64px]">
                ¿Cómo se posiciona
                <br />
                <span className="text-doar-gold">DOAR</span> dentro del
                <br />
                ecosistema financiero?
            </h2>

            <div className="mb-8 h-[2px] w-16 bg-doar-gold" aria-hidden="true" />

            <div className="max-w-[620px] space-y-4 text-[18px] font-light leading-relaxed text-soft-gray">
                <p>
                    DOAR coordina infraestructura financiera especializada para facilitar el movimiento de valor entre usuarios, empresas y proveedores integrados.
                </p>
                <p>
                    La plataforma no actúa como banco, custodio, exchange ni emisor de activos digitales.
                </p>
                <p>
                    Su función consiste en orquestar procesos operativos, reglas de ejecución e infraestructura operada por proveedores especializados.
                </p>
                <p>
                    Este modelo permite mantener una separación clara entre la coordinación de la plataforma y la ejecución de infraestructura regulada.
                </p>
            </div>
        </div>
    );
}
