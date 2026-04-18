import { Download } from 'lucide-react';

export default function SecurityHero() {
    return (
        <section className="flex min-h-[700px] items-center bg-white py-12 md:min-h-[600px] md:px-6 md:py-0">
            <div className="container mx-auto grid grid-cols-1 items-center md:grid-cols-2">
                {/* ── IZQUIERDA: Texto ── */}
                <div className="flex flex-col items-center gap-6 px-6 text-center md:items-start md:text-left">
                    <h1 className="text-[42px] leading-tight font-extrabold tracking-tight text-[#31374F] md:text-[72px] md:leading-[76px]">
                        Tu{' '}
                        <span className="bg-gradient-to-l from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            dinero
                        </span>{' '}
                        protegido en cada operación.
                    </h1>
                    <p className="text-[16px] leading-relaxed font-semibold text-[#7B7B7B] md:text-[20px]">
                        DOAR fue diseñada con estándares de seguridad que
                        protegen tus datos, tus transacciones y tu dinero en
                        todo momento.
                    </p>
                    <div className="w-full md:w-auto">
                        <button 
                            onClick={() => window.dispatchEvent(new CustomEvent('open-download-modal'))}
                            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#F29501] to-[#FCCA01] px-8 py-3 text-[15px] font-bold text-white shadow-[0px_12px_44px_rgba(0,0,0,0.12)] transition-transform hover:-translate-y-1 md:w-auto"
                        >
                            Descargar App{' '}
                            <Download strokeWidth={2.5} className="h-4 w-4" />
                        </button>
                    </div>
                </div>

                {/* ── DERECHA: Mockup ── */}
                <div className="relative flex min-h-[580px] items-center justify-center overflow-hidden md:min-h-[500px] md:justify-end md:overflow-visible">
                    {/* Imagen de fondo decorativa (shield + network dots) */}
                    <img
                        src="/assets/security/background.png"
                        alt=""
                        aria-hidden="true"
                        className="pointer-events-none absolute top-auto right-[-105px] bottom-[0px] left-0 h-[70%] w-full object-cover object-right-bottom opacity-90 md:top-0 md:right-[-55px] md:bottom-[-25px] md:left-0 md:h-full md:w-full md:scale-107"
                    />
                    {/* Teléfono principal */}
                    <img
                        src="/assets/security/phone-lineas.png"
                        alt="App DOAR — Verificación KYC"
                        className="relative z-10 h-auto w-full scale-150 object-contain drop-shadow-2xl md:mx-0 md:max-w-[550px] md:-translate-x-24 md:scale-100"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="420" height="580"><rect width="100%" height="100%" fill="%23E5E8EB" rx="40"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="18" fill="%237B7B7B">rectangle.png</text></svg>';
                        }}
                    />
                </div>
            </div>
        </section>
    );
}
