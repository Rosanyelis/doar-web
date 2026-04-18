import { Download } from 'lucide-react';

export default function SecurityCTA() {
    return (
        <section className="flex justify-center bg-white px-6 py-[96px]">
            <div
                className="relative isolate flex w-full max-w-[896px] shrink-0 flex-col items-center justify-center gap-10 overflow-hidden rounded-[8px] px-6 py-16 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] md:px-[64px] md:py-[64px]"
                style={{
                    backgroundImage: 'url(/assets/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: '10% center',
                }}
            >
                <h2 className="z-10 w-full text-center text-[32px] leading-tight font-bold text-white md:text-[49px]">
                    Opera con{' '}
                    <span className="bg-gradient-to-l from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        confianza
                    </span>{' '}
                    desde hoy
                </h2>

                <button 
                    onClick={() => window.dispatchEvent(new CustomEvent('open-download-modal'))}
                    className="z-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-[16px] font-bold text-[#31374F] shadow-lg transition-all hover:-translate-y-1 hover:bg-gray-100 md:w-auto"
                >
                    Descargar App{' '}
                    <Download strokeWidth={2.5} className="h-5 w-5" />
                </button>
            </div>
        </section>
    );
}
