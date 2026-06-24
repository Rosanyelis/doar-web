export default function Benefits() {
    const benefits = [
        {
            icon: (
                <img
                    src="/assets/icons/paper-plane.svg"
                    alt="Rapidez"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Opera sin complicarte',
            description: 'Transfiere digitalmente a otros paises de manera rápida.',
        },
        {
            icon: (
                <img
                    src="/assets/icons/exchange.svg"
                    alt="Rapidez"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Retira a tu banco en minutos',
            description:
                'Convierte tu saldo de moneda digital a moneda fiat cuando lo necesites.',
        },
        {
            icon: (
                <img
                    src="/assets/icons/mobile.svg"
                    alt="Rapidez"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Todo desde tu celular',
            description:
                'Revisa tus movimientos, saldo y retiros desde un solo lugar, estés donde estés.',
        },
        {
            icon: (
                <img
                    src="/assets/icons/wallet.svg"
                    alt="Rapidez"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Usa las apps que ya conoces',
            description:
                'Conecta ApplePay, Mercado Pago y otras billeteras sin cambiar tu forma de operar.',
        },
        {
            icon: (
                <img
                    src="/assets/icons/analytics.svg"
                    alt="Eficiencia"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Ahorra tiempo en cada pago',
            description:
                'Paga un servicio o producto con QR o link de pago en pocos clics.',
        },
        {
            icon: (
                <img
                    src="/assets/icons/shield-check.svg"
                    alt="Seguridad"
                    className="h-[40px] w-auto object-contain"
                />
            ),
            title: 'Más seguridad, menos preocupación',
            description:
                'Tus movimientos están protegidos con altos estándares de seguridad.',
        },
    ];

    return (
        <section className="bg-[#F9F9F9] py-18 md:py-24">
            <div className="container mx-auto px-6">
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <h2 className="text-3xl leading-tight font-extrabold text-[#31374F] md:text-[42px]">
                        Todo lo que puedes hacer con{' '}
                        <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            DOAR
                        </span>
                        , en un solo lugar
                    </h2>
                </div>

                <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-[#2A3045] p-8 text-center text-white shadow-[0px_12px_44px_rgba(0,0,0,0.08)] transition-transform duration-300 hover:-translate-y-1 md:text-left"
                        >
                            <div className="mx-auto mb-6 flex h-[54px] w-[54px] items-center justify-center rounded-xl md:mx-0">
                                {benefit.icon}
                            </div>
                            <h3 className="mb-3 text-[25px] leading-tight font-bold">
                                {benefit.title}
                            </h3>
                            <p className="font-regular text-[13px] leading-relaxed text-gray-300">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex flex-col items-center justify-center gap-4">
                    <p className="text-[18px] font-bold text-[#31374F]">
                        Empieza a usar DOAR hoy
                    </p>
                    <button
                        onClick={() =>
                            window.dispatchEvent(
                                new CustomEvent('open-download-modal'),
                            )
                        }
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-[#2A3045] px-8 py-4 text-[16px] font-bold text-white shadow-lg transition-colors hover:bg-[#31374F] md:w-auto"
                    >
                        Descargar App{' '}
                        <img
                            src="/assets/icons/download.svg"
                            alt="Descargar"
                            className="h-[16px] w-auto object-contain"
                        />
                    </button>
                </div>
            </div>
        </section>
    );
}
