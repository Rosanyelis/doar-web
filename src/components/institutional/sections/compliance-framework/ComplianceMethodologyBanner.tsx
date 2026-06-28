import { Eye, Lock, ShieldCheck } from 'lucide-react';
import { COMPLIANCE_METHODOLOGY } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const METHODOLOGY_ICONS = {
    prevencion: Lock,
    deteccion: Eye,
    respuesta: ShieldCheck,
} as const;

export default function ComplianceMethodologyBanner() {
    return (
        <article
            className={cn(
                'relative mt-12 overflow-hidden rounded-2xl border border-doar-gold/30 md:mt-16',
                'bg-deep-space/80 p-6 md:p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.06)]',
                'flex flex-col gap-8 lg:flex-row lg:items-center lg:gap-10'
            )}
        >
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/3 opacity-30"
                aria-hidden="true"
            >
                <svg className="h-full w-full" viewBox="0 0 200 80" preserveAspectRatio="none" fill="none">
                    <path
                        d="M0 40 Q50 20 100 40 T200 40"
                        stroke="rgba(245,196,0,0.15)"
                        strokeWidth="1"
                    />
                    <path
                        d="M0 55 Q50 35 100 55 T200 55"
                        stroke="rgba(47,107,255,0.12)"
                        strokeWidth="0.8"
                    />
                </svg>
            </div>

            <div className="relative z-10 flex shrink-0 items-start gap-4 lg:max-w-md">
                <div
                    className={cn(
                        'flex h-12 w-12 shrink-0 items-center justify-center rounded-full',
                        'border border-doar-gold/40 bg-doar-gold/5'
                    )}
                >
                    <ShieldCheck className="h-6 w-6 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <p className="text-sm font-light leading-relaxed text-soft-gray">
                    DOAR combina procesos de verificación de identidad, monitoreo transaccional, controles
                    internos de cumplimiento y supervisión continua para fortalecer la integridad operativa
                    de la plataforma.
                </p>
            </div>

            <div className="relative z-10 hidden h-16 w-px shrink-0 bg-white/15 lg:block" aria-hidden="true" />

            <div className="relative z-10 flex shrink-0 flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-doar-gold">
                    Nuestro Enfoque
                </span>
                <div className="flex flex-wrap items-center gap-6">
                    {COMPLIANCE_METHODOLOGY.map(({ id, label }) => {
                        const Icon = METHODOLOGY_ICONS[id];

                        return (
                            <div key={id} className="flex items-center gap-2">
                                <Icon
                                    className="h-5 w-5 shrink-0 text-doar-gold"
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                                <span className="text-sm font-medium text-text-primary">{label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
