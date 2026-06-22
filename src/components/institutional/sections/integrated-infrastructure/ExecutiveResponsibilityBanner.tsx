import { ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function ExecutiveResponsibilityBanner() {
    return (
        <article
            className={cn(
                'mt-10 flex flex-col gap-6 rounded-xl border border-doar-gold/25',
                'bg-deep-space/80 p-8',
                'shadow-[0_0_60px_rgba(245,196,0,0.08)]',
                'md:flex-row md:items-center md:gap-10',
                'transition-all duration-200'
            )}
        >
            <div className="flex shrink-0 items-center gap-4 md:w-72">
                <ShieldCheck className="h-8 w-8 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-doar-gold">
                    Responsabilidades Distribuidas
                </h3>
            </div>

            <p className="text-base font-light leading-relaxed text-white">
                Cada componente de infraestructura cumple una función especializada dentro del
                ecosistema operativo. DOAR coordina la interacción entre proveedores para ofrecer
                una experiencia unificada, interoperable y escalable, sin asumir las
                responsabilidades regulatorias ni operativas de cada proveedor individual.
            </p>
        </article>
    );
}
