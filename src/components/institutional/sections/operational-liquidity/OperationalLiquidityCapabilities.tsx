import { Activity, Landmark, Layers, RefreshCw, ShieldCheck, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const CAPABILITIES: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    accentBorder: string;
    accentBg: string;
}[] = [
    {
        id: 'disponibilidad',
        title: 'Disponibilidad de Liquidez',
        description: 'Disponibilidad operativa para soportar transacciones activas.',
        icon: Layers,
        accent: 'text-doar-gold',
        accentBorder: 'border-doar-gold/40',
        accentBg: 'bg-doar-gold/5',
    },
    {
        id: 'controles',
        title: 'Controles de Cobertura',
        description: 'Mecanismos orientados a mantener la continuidad operativa.',
        icon: ShieldCheck,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/40',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'preparacion',
        title: 'Preparación para Liquidación',
        description: 'Preparación para procesos posteriores de conciliación y liquidación.',
        icon: Landmark,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/40',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'coordinacion',
        title: 'Coordinación de Liquidez',
        description: 'Coordinación de la liquidez con proveedores y partners estratégicos.',
        icon: Users,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/40',
        accentBg: 'bg-[#a855f7]/5',
    },
    {
        id: 'monitoreo',
        title: 'Monitoreo Operativo',
        description: 'Supervisión permanente de niveles operativos y cobertura disponible.',
        icon: Activity,
        accent: 'text-[#06b6d4]',
        accentBorder: 'border-[#06b6d4]/40',
        accentBg: 'bg-[#06b6d4]/5',
    },
    {
        id: 'continuidad',
        title: 'Continuidad Operativa',
        description: 'Capacidad para mantener la ejecución de operaciones dentro de parámetros definidos.',
        icon: RefreshCw,
        accent: 'text-[#f97316]',
        accentBorder: 'border-[#f97316]/40',
        accentBg: 'bg-[#f97316]/5',
    },
];

export default function OperationalLiquidityCapabilities() {
    return (
        <div className="w-full">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary">Capacidades Operativas</h3>
                <p className="mt-1 text-sm text-doar-blue">
                    ¿Cómo asegura DOAR disponibilidad operativa?
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CAPABILITIES.map(({ id, title, description, icon: Icon, accent, accentBorder, accentBg }) => (
                    <article
                        key={id}
                        className={cn(
                            'rounded-2xl border border-white/8 bg-deep-space/80 p-5',
                            'transition-all duration-200 hover:border-white/12'
                        )}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className={cn(
                                    'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border',
                                    accentBorder,
                                    accentBg
                                )}
                                aria-hidden="true"
                            >
                                <Icon className={cn('h-8 w-8', accent)} strokeWidth={1.75} />
                            </div>

                            <div className="min-w-0 flex-1">
                                <h4 className="text-xs font-semibold leading-snug text-white">
                                    {title}
                                </h4>
                                <p className="mt-1.5 text-[12px] font-light leading-relaxed text-white">
                                    {description}
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
