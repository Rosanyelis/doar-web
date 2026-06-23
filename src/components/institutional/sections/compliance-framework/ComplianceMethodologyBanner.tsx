import { Eye, Lock, Shield } from 'lucide-react';
import { COMPLIANCE_METHODOLOGY } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const METHODOLOGY_ICONS = {
    prevencion: Lock,
    deteccion: Eye,
    respuesta: Shield,
} as const;

export default function ComplianceMethodologyBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-8 rounded-xl border border-white/8',
                'bg-deep-space/80 p-8 lg:flex-row lg:items-center lg:justify-between'
            )}
        >
            <div className="flex items-start gap-4 lg:max-w-md">
                <Shield
                    className="mt-0.5 h-8 w-8 shrink-0 text-doar-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
                <p className="text-sm font-light leading-relaxed text-soft-gray">
                    DOAR implementa un marco de cumplimiento integral que combina verificación,
                    monitoreo y respuesta — garantizando controles preventivos, detección temprana
                    y acción coordinada ante eventos de riesgo.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <span className="text-xs font-semibold uppercase tracking-[0.14em] text-doar-gold">
                    Nuestra Metodología
                </span>
                <div className="flex flex-wrap gap-6">
                    {COMPLIANCE_METHODOLOGY.map(({ id, label }) => {
                        const Icon = METHODOLOGY_ICONS[id];

                        return (
                            <div key={id} className="flex flex-col items-center gap-2">
                                <div
                                    className={cn(
                                        'flex h-12 w-12 items-center justify-center rounded-full',
                                        'border border-doar-blue/30 bg-doar-blue/5'
                                    )}
                                >
                                    <Icon
                                        className="h-5 w-5 text-doar-blue"
                                        strokeWidth={1.75}
                                        aria-hidden="true"
                                    />
                                </div>
                                <span className="text-xs font-medium text-soft-gray">{label}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </article>
    );
}
