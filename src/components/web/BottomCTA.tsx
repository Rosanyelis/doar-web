export default function BottomCTA() {
    return (
        <>
            <style>{`
                @media (max-width: 767px) {
                    #bottom-cta-card { background-position: 10% center !important; }
                }
            `}</style>
            <section className="bg-white">
                <div className="container mx-auto flex justify-center px-6 py-10">
                    <div
                        id="bottom-cta-card"
                        className="relative isolate grid w-full max-w-[1076px] grid-cols-1 gap-8 overflow-hidden rounded-[4px] px-6 py-30 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] md:gap-10 md:px-[100px] md:py-[72px]"
                        style={{
                            backgroundImage: 'url(/assets/background.png)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        {/* ── Fila 1: Heading ── */}
                        <h2 className="z-[1] text-center text-[44px] leading-[1.2] font-bold text-white md:text-[49px] md:leading-[56px]">
                            Empieza a mover tu{' '}
                            <span className="text-[#F29501]">
                                dinero rápido
                            </span>{' '}
                            y{' '}
                            <span className="text-[#F29501]">
                                sin fronteras
                            </span>{' '}
                            hoy mismo
                        </h2>

                        {/* ── Fila 2: Botón ── */}
                        <div className="flex justify-center">
                            <button
                                onClick={() =>
                                    window.dispatchEvent(
                                        new CustomEvent('open-download-modal'),
                                    )
                                }
                                className="z-[3] flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 py-[14px] shadow-[0px_12px_44px_rgba(0,0,0,0.04)] transition-all hover:-translate-y-1 hover:bg-gray-100 hover:shadow-lg"
                            >
                                <span className="text-[16px] font-bold text-[#31374F]">
                                    Descargar App
                                </span>
                                <img
                                    src="/assets/icons/download-black.svg"
                                    alt="Descargar"
                                    className="h-5 w-5 object-contain"
                                />
                            </button>
                        </div>

                        {/* ── Fila 3: Badges (grid 1 col móvil / 2 cols desktop) ── */}
                        <div className="grid grid-cols-1 gap-3 px-8 md:grid-cols-2 md:gap-x-[200px] md:px-0">
                            {/* Badge 1: Ubicación */}
                            <div className="flex items-center gap-2">
                                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white">
                                    <img
                                        src="/assets/icons/map-marker-alt-black.svg"
                                        alt="Ubicación"
                                        className="h-4 w-4 object-contain"
                                    />
                                </div>
                                <span className="text-[12px] leading-tight font-medium text-white md:text-[13px]">
                                    Transfronterizo, mueve dinero entre países
                                </span>
                            </div>

                            {/* Badge 2: Banco */}
                            <div className="flex items-center gap-2">
                                <div className="ml-[0px] flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white md:ml-[50px]">
                                    <img
                                        src="/assets/icons/university-black.svg"
                                        alt="Banco"
                                        className="h-4 w-4 object-contain"
                                    />
                                </div>
                                <span className="text-[12px] leading-tight font-medium text-white md:text-[13px]">
                                    Retiro a cuenta bancaria
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
