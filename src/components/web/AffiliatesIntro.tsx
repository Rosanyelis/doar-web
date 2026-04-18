export default function AffiliatesIntro() {
    return (
        <section className="flex w-full items-center justify-center bg-white px-4 py-[72px] md:px-[142px]">
            <div className="container mx-auto flex flex-col items-center gap-[48px] md:flex-row-reverse">
                {/* Texto Derecha (Ahora primero en el DOM para móvil) */}
                <div className="flex max-w-[464px] flex-col gap-4 px-4 text-center md:px-0 md:text-left">
                    <h2 className="text-[36px] leading-tight font-bold text-[#31374F] md:text-[39px] md:leading-[48px]">
                        ¿Qué es el programa de{' '}
                        <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            afiliados
                        </span>
                        ?
                    </h2>
                    <p className="text-[18px] leading-relaxed font-semibold text-[#7B7B7B] md:text-[20px] md:leading-[27px]">
                        El programa de afiliados de DOAR te permite generar
                        ingresos recomendando, no necesitas vender, solo
                        compartir nuestra billetera con tus contactos o amigos.
                    </p>
                </div>

                {/* Collage de Imágenes (Ahora segundo en el DOM) */}
                <div className="relative isolate flex w-full max-w-[564px] items-center justify-center md:h-[664px]">
                    {/* Dots decorativos (Dotted Shape de Figma) */}
                    <div className="absolute -right-12 bottom-10 z-0 opacity-60 md:-right-20">
                        <img
                            src="/assets/affiliate/dotted-shape.png"
                            alt=""
                            className="h-auto w-[150px] md:w-[200px]"
                        />
                    </div>

                    <div className="relative flex w-full items-center gap-4 pl-3 md:gap-6">
                        {/* Columna Izquierda */}
                        <div className="flex flex-col gap-4 md:gap-6">
                            <div className="aspect-square w-[160px] overflow-hidden rounded-[8px] shadow-2xl md:w-[270px]">
                                <img
                                    src="/assets/affiliate/avatar-1.png"
                                    className="h-full w-full object-cover"
                                    alt="Persona usando DOAR"
                                />
                            </div>
                            <div className="aspect-square w-[160px] overflow-hidden rounded-[8px] shadow-2xl md:w-[270px]">
                                <img
                                    src="/assets/affiliate/avatar-2.png"
                                    className="h-full w-full object-cover"
                                    alt="Persona usando DOAR"
                                />
                            </div>
                        </div>

                        {/* Imagen Derecha (Superpuesta) */}
                        <div className="relative z-20 -ml-12 h-[260px] w-[180px] overflow-hidden rounded-[8px] shadow-2xl transition-transform hover:scale-105 md:-ml-20 md:h-[480px] md:w-[320px]">
                            <img
                                src="/assets/affiliate/avatar-3.png"
                                className="h-full w-full object-cover"
                                alt="Comunidad DOAR"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
