export default function SupportChannels() {
    return (
        <section className="bg-white py-16 font-sans text-[#31374F] md:py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col gap-12 lg:grid lg:grid-cols-2 lg:gap-8">
                    {/* Tarjeta WhatsApp */}
                    <div className="flex flex-col gap-6 rounded-[8px] bg-[#F3F3FF] p-8 shadow-sm transition-transform hover:shadow-md md:p-10">
                        <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-sm">
                            <img
                                src="/assets/icons/whatsap.svg"
                                alt="WhatsApp"
                                className="h-7 w-7"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[24px] font-bold">WhatsApp</h3>
                            <p className="max-w-[340px] text-[15px] leading-relaxed text-[#7B7B7B]">
                                Para todas tus consultas por chat puedes
                                escribirnos a nuestra línea de soporte.
                            </p>
                        </div>
                        <button className="h-[48px] w-fit rounded-full border border-[#31374F] px-8 text-[15px] font-bold transition-all hover:bg-[#31374F] hover:text-white">
                            Iniciar chat
                        </button>
                    </div>

                    {/* Tarjeta Email */}
                    <div className="flex flex-col gap-6 rounded-[8px] bg-[#FFF8E7] p-8 shadow-sm transition-transform hover:shadow-md md:p-10">
                        <div className="flex size-14 items-center justify-center rounded-full bg-white shadow-sm">
                            <img
                                src="/assets/icons/envelope.svg"
                                alt="Email"
                                className="h-7 w-7"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-[24px] font-bold">Email</h3>
                            <p className="max-w-[340px] text-[15px] leading-relaxed text-[#7B7B7B]">
                                Para consultas detalladas o documentación
                                técnica.
                            </p>
                        </div>
                        <button className="h-[48px] w-fit rounded-full border border-[#31374F] px-8 text-[15px] font-bold transition-all hover:bg-[#31374F] hover:text-white">
                            Enviar mensaje
                        </button>
                    </div>
                </div>

                {/* Sección de Horarios y Frase */}
                <div className="mx-auto mt-20 flex max-w-[1100px] flex-col items-stretch justify-between gap-8 text-center md:flex-row md:items-center md:gap-10 md:text-left">
                    {/* Columna Horarios */}
                    <div className="flex shrink-0 flex-col gap-4 px-2">
                        <h4 className="text-[22px] font-bold text-[#31374F]">
                            Horarios de Atención
                        </h4>
                        <div className="flex flex-col">
                            <span className="text-[16px] font-medium text-[#7B7B7B]">
                                Lunes a Viernes
                            </span>
                            <span className="text-[30px] font-extrabold text-[#31374F]">
                                7:00 am a 11:00 pm
                            </span>
                            <p className="mt-2 max-w-[280px] text-[12px] leading-snug text-[#A4A4A4]">
                                * Hora local de Perú (GMT-5). Festivos sujetos a
                                disponibilidad reducida.
                            </p>
                        </div>
                    </div>

                    {/* Columna Frase (Caja con fondo) */}
                    <div className="flex-1 p-8 md:p-8">
                        <p className="text-[24px] leading-relaxed font-bold text-[#31374F] md:text-[28px]">
                            Diseñamos soluciones{' '}
                            <span className="font-bold text-[#F29501]">
                                reales
                            </span>{' '}
                            para problemas complejos. Si no encuentras lo que
                            buscas, nuestro equipo de{' '}
                            <span className="font-bold text-[#F29501]">
                                soporte técnico
                            </span>{' '}
                            está a un mensaje de distancia.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
