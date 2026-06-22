import { ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function ExecutiveStatementCard() {
    return (
        <article
            className={cn(
                'mt-10 flex items-start gap-6 rounded-2xl border border-white/10',
                'bg-deep-space p-8',
                'shadow-[0_0_30px_rgba(255,255,255,0.04)]',
                'transition-all duration-200'
            )}
        >
            <ShieldCheck
                className="h-12 w-12 shrink-0 text-doar-gold"
                strokeWidth={1.75}
                aria-hidden="true"
            />

            <div>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-text-primary">
                    DOAR no es un banco, un exchange, un custodio ni un procesador de pagos.
                </h3>

                <p className="text-[14px] font-light leading-relaxed text-white">
                    En su lugar, DOAR opera como una capa de orquestación financiera que coordina
                    infraestructura financiera especializada mediante un modelo operacional basado
                    en ledger, diseñado para los servicios financieros digitales modernos.
                </p>
            </div>
        </article>
    );
}
