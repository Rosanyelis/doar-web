const SecurityCard = ({
    icon,
    title,
    desc,
}: {
    icon: string;
    title: string;
    desc: string;
}) => (
    <div className="flex flex-col gap-4 rounded-[4px] bg-[#2A3045] p-6 text-white shadow-[0px_12px_44px_rgba(0,0,0,0.04)] transition-transform hover:-translate-y-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
            <img src={icon} alt="" className="h-6 w-6 object-contain" />
        </div>
        <h3 className="text-[20px] font-bold">{title}</h3>
        <p className="text-[16px] font-medium leading-relaxed opacity-80">
            {desc}
        </p>
    </div>
);

export default function SecurityCards() {
    return (
        <section className="bg-[#F9F9F9] px-6 py-[72px]">
            <div className="container mx-auto max-w-[1200px]">
                <h2 className="mb-14 text-center text-[28px] font-extrabold text-[#31374F] md:text-[49px]">
                    ¿Cómo protege{' '}
                    <span className="bg-gradient-to-l from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        DOAR
                    </span>{' '}
                    tu dinero?
                </h2>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    <SecurityCard
                        icon="/assets/icons/shield-alt.svg"
                        title="Cifrado de datos de extremo a extremo"
                        desc="Tu información viaja protegida en cada operación."
                    />
                    <SecurityCard
                        icon="/assets/icons/tv.svg"
                        title="Monitoreo constante de transacciones"
                        desc="Cada movimiento es supervisado en tiempo real."
                    />
                    <SecurityCard
                        icon="/assets/icons/chart-network.svg"
                        title="Infraestructura tecnológica segura"
                        desc="Construida para operar con estabilidad y confianza."
                    />
                </div>
            </div>
        </section>
    );
}
