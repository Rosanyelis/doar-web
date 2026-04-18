export default function Onboarding() {
    const steps = [
        {
            num: '01',
            title: 'DESCARGA LA APP',
            desc: 'Instálala en tu celular y empieza a usar DOAR en segundos.',
            active: true,
        },
        {
            num: '02',
            title: 'CREA TU CUENTA',
            desc: 'Regístrate en pocos pasos y verifica tu identidad en pocos minutos.',
            active: false,
        },
        {
            num: '03',
            title: 'ENVÍA O RECIBE DINERO',
            desc: 'Mueve dinero entre países de forma rápida y segura ',
            active: true,
        },
        {
            num: '04',
            title: 'RETIRA CUANDO QUIERAS',
            desc: 'Retira tu saldo a tu cuenta bancaria, billetera preferida o tarjeta cuando lo necesites.',
            active: false,
        },
    ];

    return (
        <section id="como-funciona" className="overflow-hidden bg-[#F9F9F9] py-18 md:py-24">
            <div className="container mx-auto px-6">
                <h2 className="mb-20 text-center text-3xl leading-tight font-extrabold text-[#31374F] md:text-[42px]">
                    Empezar a usar{' '}
                    <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        DOAR
                    </span>{' '}
                    es así de simple
                </h2>

                <div className="relative mx-auto max-w-6xl">
                    {/* Connector Line (Desktop only) */}
                    <div className="absolute top-[41px] right-[12%] left-[12%] z-0 hidden h-[2px] bg-[#31374F] md:block"></div>

                    <div className="relative z-10 grid grid-cols-1 gap-0 md:grid-cols-4 md:gap-4">
                        {steps.map((step, idx) => (
                            <div
                                key={idx}
                                className="flex flex-col items-center"
                            >
                                {/* Circle */}
                                <div className="relative z-10 bg-[#F9F9F9]">
                                    <div
                                        className={`flex h-[84px] w-[84px] items-center justify-center rounded-full border-[2px] transition-colors ${step.active ? 'border-[#31374F] bg-[#F9F9F9]' : 'border-[#C4C4C4] bg-[#F8F8FF]'}`}
                                    >
                                        {step.active ? (
                                            <div className="flex h-[66px] w-[66px] items-center justify-center rounded-full bg-[#31374F]">
                                                <span className="text-[34px] font-bold tracking-tight text-white">
                                                    {step.num}
                                                </span>
                                            </div>
                                        ) : (
                                            <span className="text-[34px] font-bold tracking-tight text-[#31374F]">
                                                {step.num}
                                            </span>
                                        )}
                                    </div>
                                </div>

                                {/* Card */}
                                <div
                                    className={`rounded-1xl relative mt-8 flex h-[230px] w-full max-w-[220px] flex-col items-center justify-between p-6 px-4 pt-8 text-center shadow-lg transition-colors ${step.active ? 'bg-[#31374F] text-white' : 'bg-white text-[#31374F]'}`}
                                >
                                    {/* Triangle pointing UP */}
                                    <div
                                        className={`absolute -top-[12px] left-1/2 h-0 w-0 -translate-x-1/2 border-r-[12px] border-b-[12px] border-l-[12px] border-r-transparent border-l-transparent ${step.active ? 'border-b-[#31374F]' : 'border-b-white'}`}
                                    ></div>

                                    <div>
                                        <h3 className="mb-3 text-[13px] leading-snug font-extrabold uppercase">
                                            {step.title}
                                        </h3>
                                        <p
                                            className={`text-[12.5px] leading-relaxed ${step.active ? 'text-gray-300' : 'text-[#7B7B7B]'}`}
                                        >
                                            {step.desc}
                                        </p>
                                    </div>
                                    <div
                                        className={`mt-4 h-[2px] w-[80%] ${step.active ? 'bg-white/80' : 'bg-[#31374F]'}`}
                                    ></div>
                                </div>

                                {/* Vertical connector (Mobile only, not on last item) */}
                                {idx < steps.length - 1 && (
                                    <div className="h-12 w-[2px] bg-[#31374F] md:hidden"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
