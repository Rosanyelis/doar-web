export default function ValueProposition() {
    return (
        <section className="bg-[#FCFCFD] py-4 md:py-2">
            <div className="container mx-auto px-0">
                <div className="mx-auto mb-16 max-w-6xl text-center">
                    <h2 className="mb-6 text-[40px] leading-tight font-extrabold text-[#31374F] md:text-[40px]">
                        Una sola{' '}
                        <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            plataforma
                        </span>{' '}
                        para enviar dinero a tus familiares entre paises, con
                        retiro en moneda local
                    </h2>
                    <p className="mx-auto max-w-3xl text-2xl font-bold text-[#7B7B7B] md:text-lg">
                        DOAR conecta pasarelas de pago, billeteras electrónicas
                        y bancos en un solo lugar para que puedas operar de
                        forma más ágil, más eficiente y más segura.
                    </p>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 md:grid-cols-3">
                    {/* Card 1 */}
                    <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0px_12px_44px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2 md:p-10">
                        <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#F3F3FF]">
                            <img
                                src="/assets/icons/bolt.svg"
                                alt="Rapidez"
                                className="h-[40px] w-auto object-contain"
                            />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#31374F]">
                            Rapidez
                        </h3>
                        <p className="leading-relaxed font-medium text-[#7B7B7B]">
                            Opera entre billeteras, pasarelas de pago y bancos
                            en pocos minutos.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0px_12px_44px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2 md:p-10">
                        <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#F3F3FF]">
                            <img
                                src="/assets/icons/chart-line.svg"
                                alt="Rapidez"
                                className="h-[40px] w-auto object-contain"
                            />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#31374F]">
                            Eficiencia
                        </h3>
                        <p className="leading-relaxed font-medium text-[#7B7B7B]">
                            Infraestructura tecnológica que permite movimientos
                            financieros automatizados (sin terceros).
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="flex flex-col items-center rounded-2xl bg-white p-8 text-center shadow-[0px_12px_44px_rgba(0,0,0,0.04)] transition-transform duration-300 hover:-translate-y-2 md:p-10">
                        <div className="mb-6 flex h-[80px] w-[80px] items-center justify-center rounded-full bg-[#F3F3FF]">
                            <img
                                src="/assets/icons/shield-alt.svg"
                                alt="Seguridad"
                                className="h-[40px] w-auto object-contain"
                            />
                        </div>
                        <h3 className="mb-4 text-2xl font-bold text-[#31374F]">
                            Seguridad
                        </h3>
                        <p className="leading-relaxed font-medium text-[#7B7B7B]">
                            Todas las transacciones estan protegidas con
                            estándares de seguridad internacionales como PCI-DSS y
                            P2PE.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
