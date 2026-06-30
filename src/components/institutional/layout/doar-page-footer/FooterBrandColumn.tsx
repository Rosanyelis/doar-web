import { Link } from 'react-router-dom';
import { ROUTES } from '../../../../constants/routes';
import { images } from '../../../../lib/images';

export default function FooterBrandColumn() {
    return (
        <div className="flex flex-col">
            <Link
                to={ROUTES.INSTITUCIONAL}
                className="mb-4 inline-block max-w-[140px]"
                aria-label="DOAR - Volver al inicio institucional"
            >
                <img
                    src={images.logoVertical}
                    alt="DOAR"
                    className="h-auto w-full object-contain"
                />
            </Link>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-white mt-2">
                TU PLATA AL INSTANTE
            </p>
            <div className="mt-4 mb-6 h-px w-12 bg-doar-gold" aria-hidden="true" />
            <p className="text-[12px] font-light leading-relaxed text-white/90">
                DOAR coordina infraestructura financiera especializada mediante un modelo de orquestación, supervisión operativa y responsabilidades segregadas.
            </p>
            <p className="mt-4 text-[12px] font-light leading-relaxed text-white/90">
                Una plataforma diseñada para conectar experiencia, operación e infraestructura financiera digital.
            </p>
        </div>
    );
}
