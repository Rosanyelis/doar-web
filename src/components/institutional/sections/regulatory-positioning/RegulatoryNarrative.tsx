export default function RegulatoryNarrative() {
    return (
        <div className="flex flex-col">
            <h2 className="max-w-xl text-3xl font-bold leading-[1.1] tracking-[-0.03em] text-text-primary sm:text-4xl lg:text-[42px]">
                ¿Cómo se posiciona DOAR dentro del ecosistema financiero?
            </h2>

            <div className="mb-8 mt-6 h-0.5 w-12 bg-doar-gold" aria-hidden="true" />

            <div className="max-w-xl space-y-5 text-base font-light leading-relaxed text-white sm:text-lg">
                <p>
                    DOAR coordina infraestructura financiera especializada para facilitar movimientos de
                    valor entre usuarios, empresas y proveedores integrados.
                </p>
                <p>
                    La plataforma no actúa como banco, custodio ni emisor de activos digitales. Su
                    función consiste en orquestar procesos, reglas operativas y experiencia de usuario
                    sobre infraestructura provista por terceros especializados.
                </p>
                <p>
                    Este modelo permite mantener una separación clara entre la experiencia unificada
                    ofrecida por DOAR y las funciones reguladas ejecutadas por proveedores autorizados.
                </p>
            </div>
        </div>
    );
}
