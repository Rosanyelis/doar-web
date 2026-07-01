import { Download } from 'lucide-react';

export default function AffiliatesHero() {
    return (
        <section className="relative flex min-h-[700px] w-full items-center justify-center overflow-hidden bg-white px-2 py-12 md:min-h-[650px] md:px-[72px] md:py-[60px] lg:px-[30px]">
            {/* Elementos Decorativos de Fondo (Malla y Glow) */}
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
                {/* Glow decorativo inferior derecho */}
                <div className="absolute -right-[10%] bottom-[10%] h-[600px] w-[600px] rounded-full bg-[#FFB800]/[0.08] blur-[100px]"></div>

                {/* Malla de fondo (Mesh) - Usando el background de security como base o elipse decorativa */}
                <div className="absolute top-1/2 right-0 h-full w-full -translate-y-1/2 opacity-40 md:w-[60%]">
                    <img
                        src="/assets/security/background.png"
                        className="h-full w-full object-contain object-right"
                        alt=""
                    />
                </div>
            </div>

            <div className="relative z-10 container mx-auto flex flex-col items-center gap-12 md:flex-row md:justify-between lg:gap-0">
                {/* Texto Izquierda */}
                <div className="flex flex-1 flex-col gap-8 px-8 md:max-w-[850px]">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <h1 className="flex flex-col text-[48px] leading-[1.05] font-black tracking-[-1.5px] text-[#31374F] md:text-[84px] md:leading-[88px] lg:text-[88px]">
                            <span>Gana dinero</span>
                            <span>recomendando</span>
                            <span className="text-[#FCCA01]">DOAR</span>
                        </h1>
                        <p className="mt-4 max-w-[540px] text-[16px] leading-relaxed font-medium text-[#7B7B7B] md:text-[18px] md:leading-[30px]">
                            Comparte DOAR con otras personas y recibe ingresos
                            por cada usuario que empiece a usar la app a través
                            de tu recomendación.
                        </p>
                    </div>

                    <div className="flex justify-center md:justify-start">
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('open-download-modal'))}
                            className="group flex h-[60px] w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-[#F29501] to-[#FCCA01] px-10 text-[18px] font-bold text-white shadow-[0px_12px_44px_rgba(252,202,1,0.25)] transition-all hover:scale-105 active:scale-95 md:w-auto"
                        >
                            Descargar App
                            <Download className="h-5 w-5 transition-transform group-hover:translate-y-1" />
                        </button>
                    </div>
                </div>

                {/* Mockup Derecha con Monedas */}
                <div className="relative flex w-full flex-1 items-center justify-center md:justify-end">
                    {/* Contenedor Mockup - Subido de nivel */}
                    <div className="relative z-10 mx-auto w-full max-w-[680px] transition-transform duration-1000 md:w-[450px] lg:w-[600px] lg:-translate-y-12">
                        <img
                            src="/assets/affiliate/phone-money.png"
                            alt="DOAR App"
                            className="h-auto w-full scale-125 object-contain drop-shadow-[0px_20px_50px_rgba(0,0,0,0.1)] md:w-[650px] md:scale-100 lg:w-[750px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
