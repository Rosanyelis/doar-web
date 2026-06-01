export default function AffiliatesSteps() {
    const steps = [
        {
            num: '01',
            title: 'ACCEDE A TU PANEL DE AFILIADOS',
            desc: 'Ingresa a tu panel, explora funciones y añade tu métodos de pago.',
            active: true,
        },
        {
            num: '02',
            title: 'COMPARTE TU ENLACE',
            desc: 'Usa tu link personalizado en redes, blogs o con tus clientes directos.',
            active: false,
        },
        {
            num: '03',
            title: 'EMPIEZA A GENERAR INGRESOS',
            desc: 'Recibe comisiones directas por cada usuario que active su cuenta.',
            active: true,
        },
    ];

    return (
        <section className="flex w-full flex-col items-center bg-white px-6 py-[80px] md:py-[100px]">
            <h2 className="mb-16 text-center text-[32px] font-bold text-[#31374F] md:text-[39px]">
                Empieza en{' '}
                <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                    3 pasos
                </span>
            </h2>

            <div className="relative flex w-full max-w-[1100px] flex-col justify-between gap-12 md:flex-row md:px-12">
                {/* Línea conectora Desktop */}
                <div className="absolute top-[45px] right-[15%] left-[15%] hidden h-[1.5px] bg-[#2A3045] md:block"></div>

                {steps.map((step, index) => (
                    <div
                        key={index}
                        className="relative z-10 flex flex-col items-center md:w-[280px]"
                    >
                        {/* Icono Círculo con efecto Doble Borde */}
                        <div
                            className={`flex size-[90px] items-center justify-center rounded-full border-[1.5px] ${step.active ? 'border-[#31374F]' : 'border-[#E5E8EB]'} bg-white p-1.5`}
                        >
                            <div
                                className={`flex size-full items-center justify-center rounded-full border-[1.5px] border-white ${step.active ? 'bg-[#31374F] text-white' : 'bg-[#F3F3FF] text-[#31374F]'} text-[32px] font-bold shadow-sm`}
                            >
                                {step.num}
                            </div>
                        </div>

                        {/* Flecha Polígono apuntando hacia arriba */}
                        <div className="mt-4 mb-[-1px]">
                            <svg
                                width="24"
                                height="12"
                                viewBox="0 0 24 12"
                                fill="none"
                            >
                                <path
                                    d="M12 0L24 12H0L12 0Z"
                                    fill={step.active ? '#31374F' : '#F9F9F9'}
                                />
                            </svg>
                        </div>

                        {/* Card Texto */}
                        <div
                            className={`flex min-h-[190px] w-full flex-col items-center justify-between rounded-[4px] px-6 py-8 shadow-[0px_20px_40px_rgba(0,0,0,0.06)] ${step.active ? 'bg-[#31374F] text-white' : 'bg-[#F9F9F9] text-[#31374F]'}`}
                        >
                            <div className="flex flex-col items-center gap-4">
                                <span
                                    className={`text-center text-[13px] font-bold tracking-[1px] uppercase ${step.active ? 'text-white' : 'text-[#31374F]'}`}
                                >
                                    {step.title}
                                </span>
                                <p
                                    className={`text-center text-[13px] leading-[18px] ${step.active ? 'text-white/70' : 'text-[#7B7B7B]'}`}
                                >
                                    {step.desc}
                                </p>
                            </div>

                            {/* Línea decorativa inferior de la card */}
                            <div
                                className={`mt-6 h-[2px] w-[80%] rounded-full ${step.active ? 'bg-white/20' : 'bg-[#2A3045]/20'}`}
                            ></div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
