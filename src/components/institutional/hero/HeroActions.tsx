import { ArrowRight } from 'lucide-react';
import { cn } from '../../../lib/utils';

export default function HeroActions() {
    return (
        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-center ">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <button
                    type="button"
                    className={cn(
                        'inline-flex h-16 items-center justify-center gap-2 rounded-2xl px-8',
                        'bg-doar-gold text-base font-semibold text-deep-space',
                        'shadow-[0_0_60px_rgba(245,196,0,0.15)]',
                        'transition-all duration-200 hover:-translate-y-0.5',
                        'hover:shadow-[0_0_80px_rgba(245,196,0,0.22)]'
                    )}
                >
                    Explorar Modelo Operativo
                    <ArrowRight className="h-5 w-5" strokeWidth={2} />
                </button>

                <button
                    type="button"
                    className={cn(
                        'inline-flex h-16 items-center justify-center rounded-2xl px-8',
                        'border border-doar-gold/30 bg-transparent text-base font-semibold text-text-primary',
                        'transition-all duration-200 hover:-translate-y-0.5 hover:bg-doar-gold/8'
                    )}
                >
                    Ver Infraestructura
                </button>
            </div>

            <a
                href="#ledger"
                className={cn(
                    'inline-flex items-center gap-2 text-sm font-medium text-doar-gold',
                    'transition-all duration-200 hover:gap-3 hover:text-doar-gold/90'
                )}
            >
                Arquitectura Ledger
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
            </a>
        </div>
    );
}
