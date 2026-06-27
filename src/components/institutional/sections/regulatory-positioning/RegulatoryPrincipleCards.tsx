import { Network, ShieldCheck, Users2 } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const PRINCIPLES: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    accentBorder: string;
    accentBg: string;
}[] = [
    {
        id: 'orquestacion',
        title: 'Orquestación',
        description: 'DOAR coordina procesos, reglas operativas y experiencia de usuario.',
        icon: Network,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/40',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'infraestructura',
        title: 'Infraestructura Especializada',
        description: 'Las funciones reguladas son ejecutadas por proveedores especializados.',
        icon: ShieldCheck,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/40',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'separacion',
        title: 'Separación de Responsabilidades',
        description:
            'Cada participante conserva responsabilidades independientes dentro del modelo operativo.',
        icon: Users2,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/40',
        accentBg: 'bg-[#a855f7]/5',
    },
];

export default function RegulatoryPrincipleCards() {
    return (
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3 md:mt-16">
            {PRINCIPLES.map(({ id, title, description, icon: Icon, accent, accentBorder, accentBg }) => (
                <article
                    key={id}
                    className={cn(
                        'rounded-2xl border border-white/8 bg-deep-space/80 p-6',
                        'transition-all duration-200 hover:border-white/12'
                    )}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className={cn(
                                'flex h-18 w-18 shrink-0 items-center justify-center rounded-full border',
                                accentBorder,
                                accentBg
                            )}
                            aria-hidden="true"
                        >
                            <Icon className={cn('h-10 w-10', accent)} strokeWidth={2} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-semibold leading-snug text-text-primary">
                                {title}
                            </h3>
                            <p className="mt-2 text-xs font-light leading-relaxed text-soft-gray sm:text-sm">
                                {description}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
