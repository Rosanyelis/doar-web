const subLinks = [
    { label: '¿Qué es DOAR?', href: '#que-es' },
    { label: 'Modelo Operativo', href: '#modelo-operativo' },
    { label: 'Infraestructura', href: '#infraestructura' },
    { label: 'Cumplimiento', href: '#cumplimiento' },
    { label: 'Tesorería', href: '#tesoreria' },
    { label: 'Posición Regulatoria', href: '#posicion' },
    { label: 'Transparencia', href: '#transparencia' }
];

export default function SubHeader() {
    return (
        <div className="w-full border-b border-white/5 bg-[#030914]/80 py-4.5 backdrop-blur-sm sticky top-[82px] z-40">
            <div className="container mx-auto px-4 sm:px-6">
                <nav className="flex items-center justify-center overflow-x-auto scrollbar-none">
                    <div className="flex shrink-0 items-center gap-6 sm:gap-8 md:gap-10 pb-1 sm:pb-0">
                        {subLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="text-[13px] font-medium text-gray-400 transition-colors duration-200 hover:text-[#F29501] whitespace-nowrap"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>
                </nav>
            </div>
        </div>
    );
}
