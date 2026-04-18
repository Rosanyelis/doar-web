export default function AffiliatesIdeal() {
    const profiles = [
        {
            icon: '/assets/icons/camera-movie.svg',
            bg: 'bg-[#F3F3FF]',
            title: 'Creadores de contenido',
        },
        {
            icon: '/assets/icons/users.svg',
            bg: 'bg-[#FFF1D9]',
            title: 'Comunidades en redes sociales',
        },
        {
            icon: '/assets/icons/user-chart.svg',
            bg: 'bg-[#FFF1D9]',
            title: 'Emprendedores digitales',
        },
        {
            icon: '/assets/icons/users-class.svg',
            bg: 'bg-[#F5F6F7]',
            title: 'Personas con red de contactos influyente',
        },
    ];

    return (
        <section className="bg-[#FCFCFD] px-6 py-[80px] md:py-[100px]">
            <div className="container mx-auto flex flex-col items-center gap-12">
                <h2 className="text-center text-[32px] font-bold text-[#31374F] md:text-[39px]">
                    ¿Para quién es ideal el programa de{' '}
                    <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        afiliados
                    </span>
                    ?
                </h2>

                <div className="flex flex-col items-center justify-center gap-12 md:flex-row lg:px-[110px]">
                    {/* Grid de Perfiles */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {profiles.map((profile, index) => (
                            <div
                                key={index}
                                className="flex min-h-[200px] w-full flex-col items-start gap-4 rounded-[4px] bg-white p-8 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] sm:min-w-[280px] md:w-[306px]"
                            >
                                <div
                                    className={`flex size-16 items-center justify-center rounded-[4px] ${profile.bg} p-4`}
                                >
                                    <img
                                        src={profile.icon}
                                        alt=""
                                        className="size-full object-contain"
                                    />
                                </div>
                                <h3 className="text-[20px] leading-tight font-bold text-[#31374F]">
                                    {profile.title}
                                </h3>
                            </div>
                        ))}
                    </div>

                    {/* Mockup de Teléfono con decoración */}
                    <div className="relative flex w-full justify-center md:h-[550px] md:w-[340px]">
                        {/* Imagen Dotted Shape decorativa */}
                        <div className="absolute bottom-0 -left-12 z-0 opacity-40">
                            <img
                                src="/assets/affiliate/dotted-shape.png"
                                className="h-auto w-[180px] rotate-90"
                                alt=""
                            />
                        </div>

                        <img
                            src="/assets/affiliate/mobile-phone.png"
                            alt="Mockup App"
                            className="relative z-10 h-auto w-full object-contain drop-shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
