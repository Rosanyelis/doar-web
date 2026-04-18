import { X, Smartphone } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function DownloadModal() {
    const [isOpen, setIsOpen] = useState(false);

    const onClose = () => setIsOpen(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-download-modal', handleOpen);

        return () => {
            window.removeEventListener('open-download-modal', handleOpen);
        };
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 z-[100] flex h-screen w-screen animate-in items-center justify-center overflow-x-hidden bg-black/60 p-4 backdrop-blur-sm duration-200 ease-out fade-in">
            {/* Overlay para cerrar haciendo clic fuera */}
            <div className="absolute inset-0" onClick={onClose}></div>

            <div className="scrollbar-none relative z-10 max-h-[90vh] w-full max-w-[540px] animate-in overflow-y-auto rounded-[24px] bg-white p-6 shadow-2xl duration-200 ease-out zoom-in-95 md:p-12">
                {/* Botón Cerrar */}
                <button
                    onClick={onClose}
                    className="absolute top-5 right-5 z-[20] flex size-8 items-center justify-center rounded-full bg-gray-50 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
                >
                    <X className="h-5 w-5" />
                </button>

                <div className="flex flex-col items-center text-center">
                    {/* Icono Teléfono Amarillo */}
                    <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#FFFAED] text-[#F29501] md:size-20">
                        <Smartphone className="h-7 w-7 md:h-10 md:w-10" />
                    </div>

                    {/* Título */}
                    <h2 className="text-[28px] leading-tight font-extrabold text-[#31374F] md:text-[38px]">
                        <span className="text-[#F29501]">Disponible</span> para{' '}
                        <br />
                        dispositivos en las tiendas
                    </h2>

                    {/* Línea decorativa */}
                    <div className="mt-4 h-[3.5px] w-24 rounded-full bg-[#F29501] md:w-32"></div>

                    {/* Botones de descarga */}
                    <div className="mt-10 flex w-full flex-row justify-center gap-3 md:mt-12 md:gap-6">
                        {/* Google Play */}
                        <button className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-full border border-[#2A3045] bg-white px-3 text-[14px] font-bold text-[#31374F] transition-all hover:bg-gray-50 active:scale-95 md:h-[64px] md:gap-3 md:px-8 md:text-[18px]">
                            <img
                                src="/assets/goog-play.webp"
                                alt="GoogleLogo"
                                className="h-[14px] w-auto md:h-[22px]"
                            />
                            <span>Google Play</span>
                        </button>

                        {/* Apple Store */}
                        <button className="flex h-[52px] flex-1 items-center justify-center gap-2 rounded-full border border-[#2A3045] bg-white px-3 text-[14px] font-bold text-[#31374F] transition-all hover:bg-gray-50 active:scale-95 md:h-[64px] md:gap-3 md:px-8 md:text-[18px]">
                            <i className="fa-brands fa-apple text-lg md:text-2xl"></i>
                            <span>App Store</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
