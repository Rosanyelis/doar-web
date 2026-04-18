const FeatureListItem = ({
    icon,
    bgClass,
    title,
}: {
    icon: string;
    bgClass: string;
    title: string;
}) => (
    <div className="flex items-center gap-4">
        <div
            className={`flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-full ${bgClass}`}
        >
            <img src={icon} alt="" className="h-5 w-5 object-contain" />
        </div>
        <span className="text-[18px] font-bold text-[#31374F]">{title}</span>
    </div>
);

export default function SecurityControl() {
    return (
        <section className="bg-white px-6 py-[72px]">
            <div className="container mx-auto flex max-w-[1200px] flex-col items-center justify-center gap-10 md:flex-row">
                {/* IZQUIERDA: Imagen */}
                <div className="order-2 w-full max-w-[361px] md:order-1">
                    <img
                        src="/assets/security/black-smartphone.png"
                        alt="Notificaciones de DOAR"
                        className="mx-auto h-auto w-full max-w-[280px] object-contain drop-shadow-[0px_8px_24px_rgba(0,0,0,0.04)] md:max-w-[361px]"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="361" height="650"><rect width="100%" height="100%" fill="%23F9F9F9" rx="36"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16" fill="%237B7B7B">app-notifications.png</text></svg>';
                        }}
                    />
                </div>

                {/* DERECHA: Texto */}
                <div className="order-1 flex w-full max-w-[491px] flex-col justify-center text-left md:order-2 md:text-left">
                    <h2 className="text-[32px] leading-tight font-bold text-[#31374F] md:text-[49px] md:leading-[56px]">
                        Control{' '}
                        <span className="bg-gradient-to-l from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            total
                        </span>{' '}
                        desde la app
                    </h2>
                    <h3 className="mt-2 text-[18px] font-bold text-[#31374F] md:text-[25px]">
                        tú ves todo lo que pasa con tu dinero.
                    </h3>
                    <p className="mt-6 text-[16px] leading-relaxed font-semibold text-[#7B7B7B] md:text-[20px]">
                        Reciba notificaciones críticas en tiempo real. Bloquee
                        su cuenta instantáneamente si detecta actividad inusual.
                    </p>
                    <div className="mt-10 flex flex-col gap-6">
                        <FeatureListItem
                            icon="/assets/icons/history.svg"
                            bgClass="bg-[#FAFAFB]"
                            title="Historial de movimientos"
                        />
                        <FeatureListItem
                            icon="/assets/icons/bell.svg"
                            bgClass="bg-[#F5F5FF]"
                            title="Notificaciones por cada transacción"
                        />
                        <FeatureListItem
                            icon="/assets/icons/mobile.svg"
                            bgClass="bg-[#FFF1D9]"
                            title="Gestión completa desde tu celular"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
