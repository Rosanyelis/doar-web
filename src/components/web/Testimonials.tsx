import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { images } from '../../lib/images';

export default function Testimonials() {
    const [activeIndex, setActiveIndex] = useState(1);

    const testimonials = [
        {
            name: 'Maria López',
            role: 'Usuario DOAR',
            text: 'Puedo enviar dinero a mi familia y ellos lo retiran directo a su cuenta sin complicaciones.',
            avatar: images.avatars.maria,
        },
        {
            name: 'Carlos Rodríguez',
            role: 'Usuario DOAR',
            text: 'Antes de descubrir DOAR, lidiar con la recepción de pagos internacionales era un proceso complicado y a menudo estresante.',
            avatar: images.avatars.carlos,
        },
        {
            name: 'Ana Pérez',
            role: 'Usuario DOAR',
            text: 'En la actualidad, trabajo remoto y recibo pagos del exterior. DOAR me simplificó todo.',
            avatar: images.avatars.ana,
        },
    ];

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? testimonials.length - 1 : prev - 1,
        );
    };

    const nextSlide = () => {
        setActiveIndex((prev) =>
            prev === testimonials.length - 1 ? 0 : prev + 1,
        );
    };

    return (
        <section className="overflow-hidden bg-white py-18 md:py-24">
            <div className="container mx-auto px-6">
                {/* Header Section */}
                <div className="relative mb-16 flex flex-col items-center">
                    <h2 className="mb-6 text-center text-3xl font-extrabold text-[#31374F] md:text-[42px]">
                        Nuestros clientes opinan
                    </h2>

                    {/* Avatars Stack below title */}
                    <div className="flex justify-center">
                        <div className="flex items-center">
                            <div className="relative z-10 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white shadow-md md:h-[60px] md:w-[60px]">
                                <img
                                    src={images.avatars.maria}
                                    alt="Avatar"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23E5E8EB"/></svg>';
                                    }}
                                />
                            </div>
                            <div className="relative z-20 -ml-4 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white shadow-md md:h-[60px] md:w-[60px]">
                                <img
                                    src={images.avatars.carlos}
                                    alt="Avatar"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23DEE2E6"/></svg>';
                                    }}
                                />
                            </div>
                            <div className="relative z-30 -ml-4 h-[50px] w-[50px] overflow-hidden rounded-full border-2 border-white shadow-md md:h-[60px] md:w-[60px]">
                                <img
                                    src={images.avatars.ana}
                                    alt="Avatar"
                                    className="h-full w-full object-cover"
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23ced4da"/></svg>';
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                <div className="relative mx-auto max-w-6xl overflow-hidden pb-12 md:overflow-visible">
                    <div
                        className="flex w-[300%] transition-transform duration-500 ease-in-out md:w-full md:translate-x-0"
                        style={{
                            transform:
                                typeof window !== 'undefined' && window.innerWidth < 768
                                    ? `translateX(-${activeIndex * 33.333}%)`
                                    : 'none',
                        }}
                    >
                        {testimonials.map((testi, i) => {
                            const isActive = i === activeIndex;
                            return (
                                <div
                                    key={i}
                                    className={`flex w-full md:w-1/3 flex-col items-center justify-center px-2 transition-all duration-500 lg:px-4 ${
                                        isActive
                                            ? 'scale-100 opacity-100'
                                            : 'scale-95 opacity-60'
                                    }`}
                                >
                                    <div
                                        className={`relative flex h-[220px] w-full items-start gap-4 rounded-2xl p-8 transition-all duration-300 md:h-[180px] md:p-10 ${
                                            isActive
                                                ? 'bg-[#F9F9FF]'
                                                : 'bg-transparent'
                                        }`}
                                    >
                                        <img
                                            src="/assets/icons/quote-left.svg"
                                            alt="Quote"
                                            className={`h-12 w-12 shrink-0 md:h-8 md:w-8 ${isActive ? 'text-[#31374F]' : 'text-[#A4A4A4]'}`}
                                        />
                                        <p
                                            className={`pt-2 text-[16px] leading-relaxed md:text-[14px] ${isActive ? 'font-medium text-[#31374F]' : 'text-[#7B7B7B]'}`}
                                        >
                                            {testi.text}
                                        </p>

                                        {/* Decorative triangle point */}
                                        {isActive && (
                                            <div className="absolute -bottom-[14px] left-1/2 h-0 w-0 -translate-x-1/2 border-t-[16px] border-r-[16px] border-l-[16px] border-t-[#F9F9FF] border-r-transparent border-l-transparent"></div>
                                        )}
                                    </div>

                                    <div className="mt-8 text-center">
                                        <h4
                                            className={`text-[16px] font-bold md:text-[18px] ${isActive ? 'text-[#31374F]' : 'text-[#7B7B7B]'}`}
                                        >
                                            {testi.name}
                                        </h4>
                                        <p
                                            className="mt-1 text-[13px] md:text-[14px] text-[#A4A4A4]"
                                        >
                                            {testi.role}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Navigation Arrows Bottom Center */}
                <div className="mt-4 flex justify-center gap-8">
                    <button
                        onClick={prevSlide}
                        className="flex h-12 w-12 items-center justify-center text-[#31374F] transition-colors hover:text-[#F29501]"
                    >
                        <ChevronLeft className="h-8 w-8" strokeWidth={3} />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="flex h-12 w-12 items-center justify-center text-[#31374F] transition-colors hover:text-[#F29501]"
                    >
                        <ChevronRight className="h-8 w-8" strokeWidth={3} />
                    </button>
                </div>
            </div>
        </section>
    );
}
