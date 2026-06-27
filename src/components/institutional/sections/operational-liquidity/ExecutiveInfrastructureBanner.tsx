import { Handshake } from 'lucide-react';
import { PartnerLogo } from '../../shared/partnerLogos';
import { cn } from '../../../../lib/utils';

const BANNER_PARTNERS = ['stripe', 'dlocal', 'circle', 'fireblocks'] as const;

export default function ExecutiveInfrastructureBanner() {
    return (
        <article
            className={cn(
                'mt-12 flex flex-col gap-6 rounded-2xl border border-doar-gold/30 md:mt-16',
                'bg-deep-space/80 p-6 md:p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.06)]',
                'lg:flex-row lg:items-center lg:justify-between lg:gap-10'
            )}
        >
            <div className="flex items-start gap-4 lg:max-w-md lg:shrink-0">
                <div
                    className={cn(
                        'flex h-18 w-18 shrink-0 items-center justify-center rounded-full',
                        'border border-doar-gold/40 bg-doar-gold/5'
                    )}
                >
                    <Handshake className="h-12 w-12 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                </div>
                <p className="text-sm font-light leading-relaxed text-white">
                    La capacidad operativa de DOAR se apoya en proveedores especializados para custodia,
                    pagos, infraestructura blockchain y servicios financieros.
                </p>
            </div>

            <div className="flex flex-wrap items-center gap-6 overflow-x-auto lg:justify-end">
                {BANNER_PARTNERS.map((id, index) => (
                    <div key={id} className="flex items-center gap-6">
                        {index > 0 && (
                            <div className="hidden h-6 w-px shrink-0 bg-white/15 sm:block" aria-hidden="true" />
                        )}
                        <PartnerLogo id={id} className="h-7 brightness-0 invert opacity-80" />
                    </div>
                ))}
            </div>
        </article>
    );
}
