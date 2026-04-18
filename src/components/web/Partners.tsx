import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Partners() {
    const logos = [
        { name: 'Apple Pay', src: '/assets/wallet/apple-pay.png' },
        { name: 'Google Pay', src: '/assets/wallet/gpay.png' },
        { name: 'Stripe', src: '/assets/wallet/stripe.png' },
        { name: 'PayPal', src: '/assets/wallet/paypal.png' },
        { name: 'Mastercard', src: '/assets/wallet/mastercard.png' },
        { name: 'Visa', src: '/assets/wallet/visa.png' },
        { name: 'd.local', src: '/assets/wallet/dlocal.svg' },
        {
            name: 'American Express',
            src: '/assets/wallet/american-express.png',
        },
        { name: 'Mercado Pago', src: '/assets/wallet/mercado-pago.png' },
        { name: 'Yape', src: '/assets/wallet/yape.png' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsToShow, setItemsToShow] = useState(5);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setItemsToShow(2);
            else if (window.innerWidth < 1024) setItemsToShow(3);
            else setItemsToShow(5);
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(timer);
    }, [currentIndex, itemsToShow]);

    const nextSlide = () => {
        setCurrentIndex((prev) =>
            prev >= logos.length - itemsToShow ? 0 : prev + 1,
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prev) =>
            prev === 0 ? logos.length - itemsToShow : prev - 1,
        );
    };

    return (
        <section className="border-y border-gray-100 bg-white py-18 md:py-24">
            <div className="container mx-auto px-6">
                <h2 className="mx-auto mb-12 max-w-5xl text-center text-[32px] leading-tight font-extrabold text-[#31374F] md:text-[36px]">
                    Una plataforma sólida donde obtienes{' '}
                    <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                        tu plata al instante
                    </span>
                </h2>

                <div className="group relative mx-auto mt-12 max-w-6xl px-12 md:px-16">
                    {/* Botón Izquierda */}
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-0 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#31374F] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50 focus:outline-none md:h-12 md:w-12"
                        aria-label="Anterior"
                    >
                        <ChevronLeft className="h-4 w-4 stroke-[3px] md:h-6 md:w-6" />
                    </button>

                    {/* Contenedor del Slider */}
                    <div className="overflow-hidden">
                        <div
                            className="flex items-center transition-transform duration-500 ease-in-out"
                            style={{
                                transform: `translateX(-${currentIndex * (100 / itemsToShow)}%)`,
                            }}
                        >
                            {logos.map((logo, index) => (
                                <div
                                    key={index}
                                    className="flex shrink-0 items-center justify-center px-4 md:px-6"
                                    style={{ width: `${100 / itemsToShow}%` }}
                                >
                                    <img
                                        src={logo.src}
                                        alt={logo.name}
                                        className="max-h-12 w-auto object-contain transition-all duration-300 hover:opacity-100 md:max-h-16"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Botón Derecha */}
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-0 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-white text-[#31374F] shadow-[0px_4px_14px_rgba(0,0,0,0.1)] transition-colors hover:bg-gray-50 focus:outline-none md:h-12 md:w-12"
                        aria-label="Siguiente"
                    >
                        <ChevronRight className="h-4 w-4 stroke-[3px] md:h-6 md:w-6" />
                    </button>
                </div>
            </div>
        </section>
    );
}
