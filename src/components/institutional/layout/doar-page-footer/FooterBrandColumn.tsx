import { images } from '../../../../lib/images';

export default function FooterBrandColumn() {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        window.history.replaceState(null, '', window.location.pathname);
    };

    return (
        <div className="flex flex-col">
            <a
                href="#"
                onClick={handleClick}
                className="mb-4 inline-block max-w-[140px]"
                aria-label="DOAR - Volver al inicio"
            >
                <img
                    src={images.logoVertical}
                    alt="DOAR"
                    className="h-auto w-full object-contain"
                />
            </a>
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
