import {
    Building2,
    CreditCard,
    Globe,
    Lock,
    UserCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { INTEGRATED_CAPABILITIES } from '../../../constants/institutional';
import { cn } from '../../../lib/utils';

const CAPABILITY_ICONS: Record<(typeof INTEGRATED_CAPABILITIES)[number]['id'], LucideIcon> = {
    pagos: CreditCard,
    custodia: Lock,
    cumplimiento: UserCheck,
    banca: Building2,
    liquidacion: Globe,
};

export default function CapabilityPanel() {
    return (
        <div
            className={cn(
                'w-full max-w-xl rounded-[28px] border border-white/10',
                'bg-deep-space/55 px-6 py-5 backdrop-blur-xl',
                'shadow-[0_0_30px_rgba(255,255,255,0.04)]'
            )}
        >
            <p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-[0.2em] text-soft-gray">
                Infraestructura Financiera Integrada
            </p>

            <div className="grid grid-cols-5 gap-2">
                {INTEGRATED_CAPABILITIES.map(({ id, label }) => {
                    const Icon = CAPABILITY_ICONS[id];
                    return (
                        <div key={id} className="flex flex-col items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-doar-gold/8">
                                <Icon className="h-5 w-5 text-doar-gold" strokeWidth={2} />
                            </div>
                            <span className="text-center text-[11px] font-medium text-text-primary">
                                {label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
