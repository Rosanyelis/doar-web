import { Send } from 'lucide-react';

export default function SupportForm() {
    return (
        <section className="bg-white py-20 font-sans md:py-32">
            <div className="container mx-auto px-6">
                <div className="mb-16 flex flex-col items-center gap-4 text-center">
                    <h2 className="text-[36px] font-extrabold text-[#31374F] md:text-[44px]">
                        ¿Necesitas ayuda personalizada?
                    </h2>
                    <p className="max-w-[600px] text-[16px] text-[#7B7B7B] md:text-[18px]">
                        Déjanos un mensaje para evaluar tu caso y un
                        especialista se pondrá en contacto contigo a la
                        brevedad.
                    </p>
                </div>

                <div className="mx-auto max-w-[900px] rounded-[12px] bg-[#F1F3F5] p-8 shadow-sm md:p-14">
                    <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            {/* Nombre */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    Nombre
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej. Juan"
                                    className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                                />
                            </div>
                            {/* Apellidos */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    Apellidos
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej. Pérez"
                                    className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                                />
                            </div>
                            {/* Correo */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    Correo
                                </label>
                                <input
                                    type="email"
                                    placeholder="nombre@ejemplo.com"
                                    className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                                />
                            </div>
                            {/* Teléfono */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    Teléfono
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+51 000 000 000"
                                    className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                                />
                            </div>
                            {/* País */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    País
                                </label>
                                <input
                                    type="text"
                                    placeholder="Ej. Perú"
                                    className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                                />
                            </div>
                            {/* Asunto */}
                            <div className="flex flex-col gap-2">
                                <label className="text-[14px] font-bold text-[#31374F]">
                                    Asunto
                                </label>
                                <select className="h-[56px] w-full rounded-[6px] border-none bg-white px-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]">
                                    <option value="">Soporte Técnico</option>
                                    <option value="">
                                        Consultas Financieras
                                    </option>
                                    <option value="">Afiliados</option>
                                    <option value="">Otro</option>
                                </select>
                            </div>
                        </div>

                        {/* Descripción */}
                        <div className="flex flex-col gap-2">
                            <label className="text-[14px] font-bold text-[#31374F]">
                                Descripción del problema
                            </label>
                            <textarea
                                rows={6}
                                placeholder="Cuéntanos como podemos ayudarte..."
                                className="w-full resize-none rounded-[6px] border-none bg-white p-4 text-[15px] shadow-sm outline-none focus:ring-2 focus:ring-[#F29501]"
                            ></textarea>
                            <span className="text-right text-[12px] text-[#A4A4A4]">
                                0/500
                            </span>
                        </div>

                        {/* Botón de envío */}
                        <div className="flex justify-center pt-4">
                            <button className="bg- flex h-[56px] items-center justify-center gap-3 rounded-full bg-white px-14 text-[16px] font-bold text-black shadow-lg transition-transform hover:scale-105 active:scale-95 md:bg-[#2A3045] md:text-white">
                                Enviar Mensaje
                                <Send className="h-5 w-5" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}
