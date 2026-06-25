import { cn } from '../../../../lib/utils';

export default function EcosystemNarrative() {
    return (
        <div className={cn('flex flex-col')}>
            <span className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-doar-gold">
                Posicionamiento
            </span>

            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl xl:text-5xl">
                ¿Cómo se posiciona
                <br />
                <span className="text-doar-gold">DOAR</span> dentro del
                <br />
                ecosistema financiero?
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <p className="mb-4 max-w-[600px] text-[16px] font-light leading-relaxed text-white">
                DOAR coordina infraestructura financiera especializada para facilitar servicios financieros entre usuarios, empresas y proveedores integrados.
            </p>

            <p className="mb-4 max-w-[600px] text-[16px] font-light leading-relaxed text-white">
                La plataforma no es banco, custodio ni emisor de activos digitales. Su función consiste en orquestar procesos, reglas operativas y experiencia de usuario sobre infraestructura proporcionada por terceros especializados.
            </p>

            <p className="max-w-[600px] text-[16px] font-light leading-relaxed text-white">
                Este modelo permite mantener una separación clara entre la experiencia unificada ofrecida por DOAR y las funciones reguladas ejecutadas por proveedores autorizados.
            </p>
        </div>
    );
}
