import { Activity, Clock, Eye, RefreshCw, Shield, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const CAPABILITIES = [
    {
        id: 'disponibilidad',
        title: 'Disponibilidad de Liquidez',
        description: 'Disponibilidad operativa para soportar transacciones activas.',
        icon: Shield,
        accent: 'text-doar-gold',
        accentBorder: 'border-doar-gold/30',
        accentBg: 'bg-doar-gold/5',
    },
    {
        id: 'controles',
        title: 'Controles de Cobertura',
        description: 'Mecanismos orientados a mantener la continuidad operativa.',
        icon: Eye,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/30',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'preparacion',
        title: 'Preparación para Liquidación',
        description: 'Preparación para procesos posteriores de conciliación y liquidación.',
        icon: Clock,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/30',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'coordinacion',
        title: 'Coordinación de Liquidez',
        description: 'Coordinación de la liquidez con proveedores y partners estratégicos.',
        icon: Users,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/30',
        accentBg: 'bg-[#a855f7]/5',
    },
    {
        id: 'monitoreo',
        title: 'Monitoreo Operativo',
        description: 'Supervisión permanente de niveles operativos y cobertura disponible.',
        icon: Activity,
        accent: 'text-[#06b6d4]',
        accentBorder: 'border-[#06b6d4]/30',
        accentBg: 'bg-[#06b6d4]/5',
    },
    {
        id: 'continuidad',
        title: 'Continuidad Operativa',
        description: 'Capacidad para mantener la ejecución de operaciones dentro de parámetros definidos.',
        icon: RefreshCw,
        accent: 'text-[#f97316]',
        accentBorder: 'border-[#f97316]/30',
        accentBg: 'bg-[#f97316]/5',
    },
] as const;

type CapabilityId = (typeof CAPABILITIES)[number]['id'];

const ICON_MAP: Record<CapabilityId, LucideIcon> = {
    disponibilidad: Shield,
    controles: Eye,
    preparacion: Clock,
    coordinacion: Users,
    monitoreo: Activity,
    continuidad: RefreshCw,
};

export default function OperationalLiquidityCapabilities() {
    return (
        <div className="w-full">
            <div className="mb-6">
                <h3 className="text-lg font-semibold text-text-primary">
                    Capacidades Operativas
                </h3>
                <p className="mt-1 text-sm italic text-doar-gold">
                    ¿Cómo asegura DOAR disponibilidad operativa?
                </p>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {CAPABILITIES.map(({ id, title, description, accent, accentBorder, accentBg }) => {
                    const Icon = ICON_MAP[id];

                    return (
                        <article
                            key={id}
                            className={cn(
                                'rounded-[24px] border border-white/8 p-6',
                                'bg-white/[0.02]',
                                'transition-all duration-200 hover:border-white/12'
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
                                <h4 className="text-xs font-semibold uppercase tracking-[0.08em] text-text-primary">
                                    {title}
                                </h4>
                            </div>
                            <p className="text-[12px] font-light leading-relaxed text-soft-gray">
                                {description}
                            </p>
                        </article>
                    );
                })}
            </div>
        </div>
    );
}
