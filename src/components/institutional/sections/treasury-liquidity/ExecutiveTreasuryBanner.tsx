import { Database, Network } from 'lucide-react';
import { cn } from '../../../../lib/utils';

function TreasuryNetworkIcon() {
    return (
        <span className="relative inline-flex h-12 w-12 shrink-0 items-center justify-center">
            <Network className="h-12 w-12 text-doar-gold/30" strokeWidth={1.5} aria-hidden="true" />
            <Database
                className="absolute h-6 w-6 text-doar-gold"
                strokeWidth={1.75}
                aria-hidden="true"
            />
        </span>
    );
}

export default function ExecutiveTreasuryBanner() {
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
            <TreasuryNetworkIcon />

            <div className="min-w-0 flex-1">
                <h3 className="mb-3 text-lg font-semibold text-text-primary">
                    Liquidez coordinada para operaciones continuas
                </h3>
                <p className="text-base font-light leading-relaxed text-soft-gray">
                    La tesorería actúa como capa de coordinación operacional, separando la
                    experiencia transaccional de los procesos independientes de conciliación y
                    liquidación. DOAR garantiza que la liquidez esté disponible cuando las
                    operaciones lo requieren, optimizando recursos y manteniendo control continuo
                    sobre cobertura y exposición.
                </p>
            </div>
        </article>
    );
}
