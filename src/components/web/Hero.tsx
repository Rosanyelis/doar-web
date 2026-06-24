import { images } from '../../lib/images';

const handleDownloadClick = () => {
    window.dispatchEvent(new CustomEvent('open-download-modal'));
};

export default function Hero() {
    return (
        <section className="relative flex h-auto min-h-[600px] w-full flex-col items-center overflow-hidden bg-[#FCFCFD] pt-8 pb-16 md:min-h-[720px] md:pt-16 md:pb-24">
            <svg width="0" height="0" className="absolute">
                <linearGradient
                    id="pin-gradient"
                    x1="100%"
                    y1="0%"
                    x2="0%"
                    y2="0%"
                >
                    <stop stopColor="#F29501" offset="0%" />
                    <stop stopColor="#FCCA01" offset="100%" />
                </linearGradient>
            </svg>
            <div className="relative z-10 container mx-auto flex flex-col items-center px-6 text-center">
                <h1 className="max-w-4xl text-[32px] leading-tight font-extrabold tracking-tight md:text-[78px]">
                    <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        Tu dinero, sin fronteras
                    </span>
                    <br />
                    <span className="text-[#31374F]">Sin complicaciones</span>
                </h1>

                <p className="mt-4 max-w-2xl text-[16px] font-semibold text-[#7B7B7B] md:mt-6 md:text-[20px]">
                    Plataforma de orquestación financiera conectada con infraestructura regulada de pagos, 
                    stablecoins y liquidación digital.
                </p>

                <div className="relative z-40 mt-6 w-full md:mt-10 md:w-auto">
                    <button
                        onClick={handleDownloadClick}
                        className="inline-flex w-full transform items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F29501] to-[#FCCA01] px-6 py-3 text-base font-bold text-white shadow-[0_8px_24px_rgba(242,149,1,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(242,149,1,0.4)] md:w-auto md:px-8 md:py-4 md:text-lg"
                    >
                        Descargar App
                        <img
                            src="/assets/icons/download.svg"
                            alt="Descargar"
                            className="h-[16px] w-auto object-contain"
                        />
                    </button>
                </div>

                {/* Mockup area */}
                <div className="pointer-events-none relative mx-auto mt-8 mb-4 h-auto w-full max-w-[360px] md:mt-0 md:mb-0 md:aspect-[644/285] md:max-w-[744px]">
                    {/* Blur bg — invisible en móvil, visible en desktop */}
                    <div className="absolute inset-0 -z-10 hidden rounded-[40px] bg-[#F5F5FF] opacity-20 blur-3xl md:block"></div>

                    {/* heroBg decorativo */}
                    <img
                        src={images.heroBg}
                        alt="Background decorativo"
                        className="absolute inset-0 z-0 w-full max-w-none scale-[1.2] object-contain opacity-60 md:h-full md:scale-170 md:opacity-100"
                    />

                    {/* heroMockup principal */}
                    <img
                        src={images.heroMockup}
                        alt="App DOAR en iPhone"
                        className="absolute inset-0 z-20 w-full -translate-y-4 scale-[1.15] object-contain object-top md:relative md:h-full md:translate-y-6 md:scale-110 md:object-bottom"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="744" height="685"><rect width="100%" height="100%" fill="%23FCFCFD" stroke="%23E5E8EB" stroke-width="2" rx="40"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="%237B7B7B">hero-mockup.png (App DOAR en iPhone)</text></svg>';
                        }}
                    />

                    {/* Floating Badges */}

                    {/* 1. Retiro directo — arriba izquierda */}
                    <div className="pointer-events-auto absolute top-[80px] z-30 flex h-[48px] w-[196px] origin-top-left scale-75 items-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg md:top-[20%] md:-left-50  md:scale-100">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F5F5FF]">
                            <img
                                src="/assets/icons/university.svg"
                                alt="Banco"
                                className="h-[20px] w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[14px] leading-tight font-bold text-[#31374F]">
                                Retiro directo
                            </span>
                            <span className="text-[12px] text-[#7B7B7B]">
                                A tu cuenta bancaria
                            </span>
                        </div>
                    </div>

                    {/* 2. Transfronterizo — mitad izquierda */}
                    <div className="pointer-events-auto absolute top-[120px] z-30 flex h-[48px] w-[196px] origin-bottom-left scale-75 items-center gap-3 rounded-full bg-[#31374F] px-4 py-3 shadow-lg md:top-[45%] md:top-[75%]  md:-left-40  md:scale-100">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F5F5FF]">
                            <img
                                src="/assets/icons/map-marker-alt.svg"
                                alt="Ubicación"
                                className="h-[20px] w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[14px] leading-tight font-bold text-white">
                                Transfronterizo
                            </span>
                            <span className="text-[12px] text-white">
                                Donde te encuentres
                            </span>
                        </div>
                    </div>

                    {/* 3. PCI-DSS — arriba derecha */}
                    <div className="pointer-events-auto absolute top-[80px] right-[2%] z-30 flex h-[48px] w-[196px] origin-top-right scale-75 items-center gap-3 rounded-full bg-[#31374F] px-4 py-3 shadow-lg md:top-34 md:top-[20%] md:-right-62 md:scale-100">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F5F5FF]">
                            <img
                                src="/assets/icons/shield-alt.svg"
                                alt="PCI-DSS"
                                className="h-[20px] w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[14px] leading-tight font-bold text-white">
                                PCI-DSS
                            </span>
                            <span className="text-[12px] text-white">
                                Level 1 Compliant
                            </span>
                        </div>
                    </div>

                    {/* 4. AES-256 — mitad derecha */}
                    <div className="pointer-events-auto absolute top-[120px] right-[2%] z-30 flex h-[48px] w-[196px] origin-bottom-right scale-75  items-center gap-3 rounded-full bg-white px-4 py-3 shadow-lg md:top-[60%] md:top-[75%] md:-right-40 md:scale-100">
                        <div className="flex h-[28px] w-[28px] items-center justify-center rounded-full bg-[#F5F5FF]">
                            <img
                                src="/assets/icons/key.svg"
                                alt="AES-256"
                                className="h-[20px] w-auto object-contain"
                            />
                        </div>
                        <div className="flex flex-col text-left">
                            <span className="text-[14px] leading-tight font-bold text-[#31374F]">
                                AES-256
                            </span>
                            <span className="text-[11px] text-[#7B7B7B]">
                                End-to-end Encryption
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
