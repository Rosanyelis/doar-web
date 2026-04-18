interface LegalHeroProps {
    title: string;
    subtitle?: string;
}

export default function LegalHero({ title, subtitle }: LegalHeroProps) {
    return (
        <section className="relative overflow-hidden bg-[#2A3045] pt-32 pb-20 md:pt-48 md:pb-32">
            {/* Elementos decorativos de fondo */}
            <div className="absolute top-0 left-0 h-full w-full overflow-hidden opacity-10">
                <div className="absolute top-[-10%] left-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-br from-[#F29501] to-[#FCCA01] blur-[100px]" />
                <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-gradient-to-tl from-[#F29501] to-[#FCCA01] blur-[100px]" />
            </div>

            <div className="container relative mx-auto px-6">
                <div className="mx-auto max-w-4xl text-center">
                    <h1 className="mb-6 text-[42px] leading-tight font-extrabold tracking-tight text-white md:text-[64px]">
                        {title}
                    </h1>
                    {subtitle && (
                        <p className="text-[18px] leading-relaxed font-medium text-white/70 md:text-[22px]">
                            {subtitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
}
