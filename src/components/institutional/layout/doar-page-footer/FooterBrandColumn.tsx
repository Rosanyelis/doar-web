import { Link } from 'react-router-dom';

export default function FooterBrandColumn() {
    return (
        <div className="flex flex-col">
            <Link
                to="/sobre-nosotros"
                className="mb-4 inline-block"
                aria-label="DOAR - Volver al inicio"
            >
                <img
                    src="/assets/hero/imagotipo-doar.png"
                    alt=""
                    className="h-auto w-[100px] object-contain"
                    aria-hidden="true"
                />
            </Link>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-soft-gray/80 mt-2">
                TU PLATA AL INSTANTE
            </p>
            <div className="mt-4 mb-6 h-px w-12 bg-doar-gold" aria-hidden="true" />
            <p className="text-[13px] font-light leading-relaxed text-white/90">
                DOAR coordina infraestructura financiera especializada mediante un modelo de orquestación, supervisión operativa y responsabilidades segregadas.
            </p>
            <p className="mt-4 text-[13px] font-light leading-relaxed text-white/90">
                Una plataforma diseñada para conectar experiencia, operación e infraestructura financiera digital.
            </p>
        </div>
    );
}
