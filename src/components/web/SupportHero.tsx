export default function SupportHero() {
    return (
        <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-white px-2 py-10 md:min-h-[650px] md:px-[72px] md:py-[50px] lg:px-[30px]">
            {/* Elementos Decorativos de Fondo (Malla y Glow) */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {/* Glow decorativo inferior derecho */}
                <div className="absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#FFB800]/[0.08] blur-[100px]"></div>

                {/* Malla de fondo (Mesh) - Usando el background de security como base o elipse decorativa */}
                <div className="absolute top-[80%] right-0 h-full w-full -translate-y-1/2 opacity-40 md:top-1/2 md:w-[60%]">
                    <img
                        src="/assets/security/background.png"
                        className="h-full w-full object-contain object-right"
                        alt=""
                    />
                </div>
            </div>
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center gap-12 md:flex-row md:justify-between">
                    {/* Texto Izquierda */}
                    <div className="relative z-10 flex max-w-[550px] flex-col gap-6 text-center md:text-left">
                        <span className="text-[18px] font-bold text-[#F29501] md:text-[20px]">
                            Centro de Ayuda
                        </span>
                        <h1 className="text-[54px] leading-[1.1] font-extrabold text-[#31374F] md:text-[64px]">
                            Estamos <br className="md:hidden" /> para{' '}
                            <br className="md:hidden" /> apoyarte
                        </h1>
                        <p className="mx-auto max-w-[460px] text-[17px] leading-relaxed text-[#7B7B7B] md:mx-0 md:text-[18px]">
                            Nuestra prioridad es brindarte una solución humana y
                            eficiente. Elige el canal que prefieras para
                            comunicarte con nuestro equipo.
                        </p>
                    </div>

                    {/* Imagen Derecha con Decoraciónd de círculos */}
                    <div className="relative flex w-full items-center justify-center md:w-auto">
                        <div className="relative isolate mt-8 md:mt-0">
                            <img
                                src="/assets/suport/suport-phone.png"
                                alt="Soporte DOAR"
                                className="relative z-10 h-auto w-full max-w-[500px] scale-150 object-contain md:max-w-[636px] md:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
