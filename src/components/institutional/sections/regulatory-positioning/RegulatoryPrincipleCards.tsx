import { GitBranch, Layers, ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const PRINCIPLES = [
    {
        id: 'orquestacion',
        title: 'Orquestación',
        description: 'DOAR coordina procesos, reglas operativas y experiencia de usuario.',
        icon: GitBranch,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/30',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'infraestructura',
        title: 'Infraestructura Especializada',
        description: 'Las funciones reguladas son ejecutadas por proveedores especializados.',
        icon: Layers,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/30',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'separacion',
        title: 'Separación de Responsabilidades',
        description: 'Cada participante conserva responsabilidades independientes dentro del modelo operativo.',
        icon: ShieldCheck,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/30',
        accentBg: 'bg-[#a855f7]/5',
    },
] as const;

export default function RegulatoryPrincipleCards() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {PRINCIPLES.map(({ id, title, description, icon: Icon, accent, accentBorder, accentBg }) => (
                <article
                    key={id}
                    className={cn(
                        'rounded-[24px] border border-white/8 p-8',
                        'bg-white/[0.02]',
                        'transition-all duration-200',
                        'hover:-translate-y-1 hover:border-white/12'
                    )}
                >
                    <div className="mb-4 flex items-start gap-3">
                        <div
                            className={cn(
                                'flex h-10 w-10 shrink-0 items-center justify-center rounded-full border',
                                accentBorder,
                                accentBg
                            )}
                        >
                            <Icon
                                className={cn('h-5 w-5', accent)}
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                        </div>
                        <h3 className="text-xs font-semibold uppercase tracking-[0.1em] text-text-primary">
                            {title}
                        </h3>
                    </div>
                    <p className="text-[12px] font-light leading-relaxed text-soft-gray">
                        {description}
                    </p>
                </article>
            ))}
        </div>
    );
}
