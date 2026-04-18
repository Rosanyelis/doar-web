import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const AccordionItem = ({
    question,
    answer,
    isOpen,
    onClick,
}: {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}) => (
    <div className="border-b border-[#CDCDCD] last:border-b-0">
        <button
            onClick={onClick}
            className={`flex w-full items-center justify-between px-6 py-5 text-left transition-colors ${isOpen ? 'bg-[#F5F5FF]' : 'hover:bg-gray-50'}`}
        >
            <span className="text-[16px] font-bold text-[#31374F]">
                {question}
            </span>
            {isOpen ? (
                <ChevronUp className="h-5 w-5 shrink-0 text-[#31374F]" />
            ) : (
                <ChevronDown className="h-5 w-5 shrink-0 text-[#7B7B7B]" />
            )}
        </button>
        {isOpen && (
            <div className="px-6 pb-6 pt-2 text-[16px] leading-relaxed text-[#7B7B7B]">
                {answer}
            </div>
        )}
    </div>
);

const faqs = [
    {
        question: '¿Qué pasa si pierdo mi celular?',
        answer: 'Puedes acceder a tu cuenta desde cualquier otro dispositivo con tus credenciales de DOAR. Te recomendamos cambiar tu contraseña temporalmente y utilizar la verificación de dos pasos para asegurar que nadie más pueda acceder a tus fondos.',
    },
    {
        question: '¿Cómo protegen mis datos personales?',
        answer: 'Tus datos están protegidos mediante cifrado AES-256 avanzado tanto en tránsito como en reposo. Nunca compartimos tu información personal con terceros sin tu consentimiento explícito.',
    },
    {
        question: '¿Cómo sé que mis transacciones son seguras?',
        answer: 'Cada transacción es monitoreada por sistemas impulsados por inteligencia artificial que detectan patrones inusuales en tiempo real. Además, contamos con validación institucional que audita nuestro sistema de compensación.',
    },
    {
        question: '¿Puedo revisar todos mis movimientos?',
        answer: "Sí, tu historial completo de ingresos, retiros y transferencias se encuentra siempre disponible y desglosado detalladamente en la sección de 'Movimientos' dentro de la App.",
    },
];

export default function SecurityFAQ() {
    const [openAccordion, setOpenAccordion] = useState<number>(0);

    return (
        <section className="bg-[#F9F9F9] px-6 py-[96px] md:px-[64px]">
            <div className="container mx-auto max-w-[768px]">
                <h2 className="mb-14 text-center text-[32px] font-bold text-[#31374F] md:text-[39px]">
                    Preguntas Frecuentes
                </h2>
                <div className="flex flex-col overflow-hidden rounded-[8px] border border-gray-100 bg-white shadow-[0px_12px_44px_rgba(0,0,0,0.04)]">
                    {faqs.map((faq, idx) => (
                        <AccordionItem
                            key={idx}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openAccordion === idx}
                            onClick={() =>
                                setOpenAccordion(
                                    openAccordion === idx ? -1 : idx,
                                )
                            }
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
