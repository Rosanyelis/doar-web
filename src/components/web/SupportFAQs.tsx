import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
    {
        q: '¿Cómo retiro mi dinero?',
        a: 'Puedes retirar tu dinero directamente a tu cuenta bancaria local o tarjeta asociada desde la sección "Retiros" en la app. El proceso es instantáneo y seguro.',
    },
    {
        q: '¿Qué monedas soportan?',
        a: 'Soportamos las principales monedas de la región, incluyendo Dólares (USD), Euros (EUR) y monedas locales de los países donde operamos.',
    },
    {
        q: '¿Es seguro usar DOAR?',
        a: 'Sí, utilizamos tecnología de cifrado de grado bancario y estamos regulados para operar como procesador de pagos en los mercados correspondientes.',
    },
    {
        q: '¿Cómo contacto a soporte?',
        a: 'Puedes contactarnos vía WhatsApp o Email las 24 horas del día. Nuestro equipo de soporte humano te ayudará con cualquier duda.',
    },
];

export default function SupportFAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="bg-[#F9F9F9] py-16 md:py-24">
            <div className="container mx-auto max-w-[800px] px-6">
                <div className="mb-12 flex flex-col items-center gap-4 text-center">
                    <h2 className="text-[32px] font-extrabold text-[#31374F] md:text-[42px]">
                        Preguntas <br className="md:hidden" /> frecuentes
                    </h2>
                </div>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="overflow-hidden rounded-[8px] border border-gray-100 bg-white shadow-sm"
                        >
                            <button
                                onClick={() =>
                                    setOpenIndex(
                                        openIndex === index ? null : index,
                                    )
                                }
                                className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-gray-50"
                            >
                                <span
                                    className={`text-[17px] font-bold ${openIndex === index ? 'text-[#31374F]' : 'text-[#7B7B7B]'}`}
                                >
                                    {faq.q}
                                </span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-5 w-5 text-[#F29501]" />
                                ) : (
                                    <ChevronDown className="h-5 w-5 text-gray-400" />
                                )}
                            </button>

                            {openIndex === index && (
                                <div className="border-t border-gray-50 px-6 py-6 text-[15px] leading-relaxed text-[#7B7B7B] animate-in fade-in slide-in-from-top-2 duration-300">
                                    {faq.a}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
