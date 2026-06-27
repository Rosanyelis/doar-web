export default function DoarFoundationHeader() {
    return (
        <div className="mb-12 max-w-3xl md:mb-16">
            <h2 className="text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl">
                <span className="relative inline-block">
                    Qué
                    <span
                        className="absolute -bottom-2 left-1/2 h-0.5 w-10 -translate-x-1/2 bg-doar-gold"
                        aria-hidden="true"
                    />
                </span>{' '}
                es DOAR
            </h2>

            <p className="mt-8 text-base font-light leading-relaxed text-soft-gray sm:text-lg">
                DOAR es una plataforma tecnológica de orquestación financiera que coordina experiencia,
                operación e infraestructura especializada mediante un modelo operativo unificado y
                responsabilidades claramente segregadas.
            </p>
        </div>
    );
}
