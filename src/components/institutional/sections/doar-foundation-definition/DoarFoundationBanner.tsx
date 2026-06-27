import { ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function DoarFoundationBanner() {
    return (
        <article
            className={cn(
                'relative overflow-hidden rounded-2xl border border-doar-gold/30',
                'bg-deep-space/80 p-6 md:p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.06)]',
                'flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10'
            )}
        >
            <div
                className="pointer-events-none absolute inset-y-0 right-0 w-1/2 opacity-50"
                aria-hidden="true"
            >
                <svg
                    className="h-full w-full"
                    viewBox="0 0 400 120"
                    preserveAspectRatio="none"
                    fill="none"
                >
                    <path
                        d="M0 60 Q80 30 160 60 T320 60 T400 60"
                        stroke="rgba(47,107,255,0.2)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                    <path
                        d="M0 75 Q80 45 160 75 T320 75 T400 75"
                        stroke="rgba(245,196,0,0.15)"
                        strokeWidth="1"
                        strokeDasharray="2 4"
                    />
                </svg>
            </div>

            <div className="relative z-10 flex shrink-0 items-center gap-4">
                <div
                    className={cn(
                        'flex h-18 w-18 shrink-0 items-center justify-center rounded-full',
                        'border border-doar-gold/40 bg-doar-gold/5'
                    )}
                >
                    <ShieldCheck className="h-10 w-10 text-doar-gold" strokeWidth={2} aria-hidden="true" />
                </div>
                <p className="text-lg font-bold uppercase tracking-[0.12em] text-white">
                    Unificado. <br /> Transparente. <br /> 
                    <span className="text-doar-gold">Resiliente.</span>
                </p>
            </div>

            <div className="relative z-10 hidden h-12 w-px shrink-0 bg-white/15 lg:block" aria-hidden="true" />

            <p className="relative z-10 text-base font-light leading-relaxed text-soft-gray lg:min-w-0 lg:flex-1">
                DOAR conecta experiencia, operación e infraestructura mediante un modelo de coordinación
                claramente definido.
            </p>
        </article>
    );
}
