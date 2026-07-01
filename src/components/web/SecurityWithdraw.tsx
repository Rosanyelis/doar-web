export default function SecurityWithdraw() {
    return (
        <section className="relative isolate flex min-h-[335px] w-full items-center justify-center overflow-hidden bg-[#2A3045] py-[65px]">
            {/* FONDO DECORATIVO (Breakout) */}
            <div className="pointer-events-none absolute inset-0 z-0 w-full overflow-hidden bg-[#2A3045]">
                {/* --- Group 2 (Derecha/Centro) --- */}
                {/* Ellipse 4: Gradiente naranja/amarillo con blur fuerte */}
                <div
                    className="absolute rounded-full blur-[118px]"
                    style={{
                        width: '1238px',
                        height: '919px',
                        left: '284px',
                        top: '-392px',
                        background:
                            'linear-gradient(270deg, rgba(242, 149, 1, 0.2) 0%, rgba(252, 202, 1, 0.2) 100%)',
                        transform: 'matrix(-0.91, -0.41, -0.41, 0.91, 0, 0)',
                    }}
                />
                {/* Ellipse 3: Capa de color fondo para dar forma al gradiente */}
                <div
                    className="absolute rounded-full blur-[95px]"
                    style={{
                        width: '905px',
                        height: '823px',
                        left: '284px',
                        top: '-369px',
                        background: '#2A3045',
                        transform: 'matrix(-0.91, -0.41, -0.41, 0.91, 0, 0)',
                    }}
                />

                {/* --- Group 3 (Superior Izquierda) --- */}
                {/* Ellipse 2727 */}
                <div
                    className="absolute rounded-full opacity-20"
                    style={{
                        width: '354px',
                        height: '354px',
                        left: '-210px',
                        top: '-36px',
                        background:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 17.71%, rgba(255, 255, 255, 0) 100%)',
                    }}
                />
                {/* Ellipse 2728 */}
                <div
                    className="absolute rounded-full opacity-30"
                    style={{
                        width: '495px',
                        height: '495px',
                        left: '-169px',
                        top: '-176px',
                        background:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0.16) 17.71%, rgba(255, 255, 255, 0) 100%)',
                    }}
                />
            </div>

            {/* CONTENIDO (Card Blanca) */}
            <div className="relative z-10 flex w-full max-w-[1076px] flex-col items-center justify-center gap-2 bg-white px-6 pt-10 pb-16 shadow-2xl md:px-[64px] md:pt-[54px] md:pb-[72px]">
                <h2 className="w-full text-center text-[42px] leading-tight font-bold text-[#31374F] md:text-[39px] md:leading-[48px]">
                    Retiro seguro a tu cuenta bancaria o tarjeta
                </h2>
                <p className="w-full text-center text-[22px] font-semibold text-[#7B7B7B] md:text-[20px] md:leading-[27px]">
                    Retira tu saldo digital directamente a tu cuenta bancaria
                    local de manera segura.
                </p>

                {/* Icono posicionado en la base */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-16">
                    <img
                        src="/assets/icons/Icon-2-tarjeta-01 1.svg"
                        alt="Icono Tarjeta"
                        className="h-[120px] w-[112px] object-contain md:h-[118px] md:w-[112px]"
                    />
                </div>
            </div>
        </section>
    );
}
