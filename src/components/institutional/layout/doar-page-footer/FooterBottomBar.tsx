import { cn } from '../../../../lib/utils';

export default function FooterBottomBar() {
    const currentYear = new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    return (
        <div className="mt-12 text-center">
            <div className="relative mb-10">
                <div className="h-px w-full bg-doar-gold/30" aria-hidden="true" />
                <div
                    className={cn(
                        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                        'h-8 w-48 bg-doar-gold/20 blur-xl rounded-full pointer-events-none'
                    )}
                    aria-hidden="true"
                />
                <div
                    className={cn(
                        'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2',
                        'h-12 w-64 pointer-events-none',
                        'bg-[radial-gradient(ellipse_40%_100%_at_50%_50%,rgba(245,196,0,0.45),transparent_70%)]'
                    )}
                    aria-hidden="true"
                />
            </div>

            <p className="text-sm font-bold uppercase tracking-[0.1em] text-doar-gold">
                DOAR LLC
            </p>
            <p className="mt-3 text-[12px] font-light leading-relaxed text-white/90">
                2020 Ponce de Leon Blvd, Coral Gables, Florida, United States
            </p>
            <p className="mt-2 text-[11px] font-medium italic text-doar-gold/90">
                Financial Orchestration Platform
            </p>
            <p className="mt-6 text-[11px] text-soft-gray/60">
                © {currentYear} DOAR LLC. Todos los derechos reservados.
            </p>
        </div>
    );
}
