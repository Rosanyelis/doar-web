export default function DoarIsNotHeader() {
    return (
        <div className="mb-10 lg:mb-12">
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                Qué NO es DOAR
            </h2>
            <div className="mt-2 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-12">
                <p className="max-w-xl text-base font-light leading-relaxed text-soft-gray">
                    La plataforma coordina infraestructura financiera especializada, pero no sustituye
                    a las entidades responsables de funciones reguladas.
                </p>
                <p className="text-base font-light leading-relaxed text-soft-gray lg:border-l lg:border-white/10 lg:pl-10">
                    Esta separación permite mantener responsabilidades claramente definidas dentro del
                    modelo operativo.
                </p>
            </div>
        </div>
    );
}
