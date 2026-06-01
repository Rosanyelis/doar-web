import { Link as LinkIcon, Smartphone, Wallet } from 'lucide-react';

export default function AffiliatesLogic() {
    const cards = [
        {
            icon: <LinkIcon className="h-10 w-10 text-[#F29501]" />,
            title: 'Comparte tu enlace único',
            desc: 'Comparte tu link con amigos y familiares desde la app.',
            bg: 'bg-[#F3F3FF]',
        },
        {
            icon: <Smartphone className="h-10 w-10 text-[#F29501]" />,
            title: 'Ellos usan la app',
            desc: 'Incentiva a tus conocidos a realizar sus operaciones digitales en la app.',
            bg: 'bg-[#F3F3FF]',
        },
        {
            icon: <Wallet className="h-10 w-10 text-[#F29501]" />,
            title: 'Tú recibes ingresos',
            desc: 'Obtén comisiones por cada operación que realicen tus recomendados.',
            bg: 'bg-[#F3F3FF]',
        },
    ];

    return (
        <section className="bg-[#FCFCFD] px-6 py-[72px] md:px-[72px]">
            <div className="container mx-auto flex flex-col gap-[48px]">
                <div className="flex flex-col items-center gap-4 text-center">
                    <h2 className="text-[32px] font-bold text-[#31374F] md:text-[39px]">
                        ¿Cómo ganas{' '}
                        <span className="bg-gradient-to-r from-[#F29501] to-[#FCCA01] bg-clip-text text-transparent">
                            dinero
                        </span>
                        ?
                    </h2>
                </div>

                <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:px-[90px]">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center rounded-[4px] bg-white p-6 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] md:p-8"
                        >
                            <div
                                className={`mb-6 flex size-20 items-center justify-center rounded-full ${card.bg}`}
                            >
                                {card.icon}
                            </div>
                            <h3 className="mb-2 text-center text-[20px] font-semibold text-[#31374F]">
                                {card.title}
                            </h3>
                            <p className="text-center text-[13px] text-[#7B7B7B]">
                                {card.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
