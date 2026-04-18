import { UserPlus } from 'lucide-react';

export default function AffiliatesCTA() {
    return (
        <section className="flex justify-center bg-white px-6 py-[100px] md:px-[72px]">
            <div
                className="relative isolate grid w-full max-w-[1076px] grid-cols-1 gap-8 overflow-hidden rounded-[4px] px-6 py-30 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] md:gap-10 md:px-[100px] md:py-[72px]"
                style={{
                    backgroundImage: 'url(/assets/background.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: '10% center',
                }}
            >
                <h2 className="relative z-10 w-full text-center text-[36px] leading-tight font-bold text-white md:text-[49px] md:leading-[56px]">
                    Empieza a{' '}
                    <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        generar
                    </span>{' '}
                    ingresos hoy mismo
                </h2>

                <div className="relative z-10 flex justify-center">
                    <button className="flex h-[56px] items-center justify-center gap-3 rounded-full bg-white px-12 text-[18px] font-bold text-[#31374F] shadow-xl transition-all hover:scale-105 active:scale-95">
                        Quiero ser Afiliado
                        <UserPlus className="h-6 w-6 text-[#F29501]" />
                    </button>
                </div>
            </div>
        </section>
    );
}
