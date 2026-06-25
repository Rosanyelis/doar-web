export default function DoarIsNotHeader() {
    return (
        <div className="mb-10 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-end">
            <div>
                <h2 className="text-4xl sm:text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary">
                    <span className="relative">Qué</span> NO es DOAR
                </h2>
                <div className="mt-2 h-0.5 w-12 bg-doar-gold" aria-hidden="true" />
                <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-soft-gray">
                    La plataforma coordina infraestructura financiera especializada, pero no sustituye a las entidades responsables de funciones reguladas.
                </p>
            </div>
            <div className="lg:max-w-md lg:ml-auto lg:text-right">
                <p className="text-base font-light leading-relaxed text-soft-gray">
                    Esta separación permite mantener responsabilidades claramente definidas dentro del modelo operativo.
                </p>
            </div>
        </div>
    );
}
