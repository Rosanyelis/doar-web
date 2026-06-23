import { Shield } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function ComplianceShieldGraphic() {
    return (
        <div className="relative flex h-64 w-full max-w-sm items-center justify-center lg:h-80">
            <div
                className={cn(
                    'absolute h-56 w-56 rounded-full border border-doar-blue/20',
                    'shadow-[0_0_60px_rgba(47,107,255,0.15)]'
                )}
                aria-hidden="true"
            />
            <div
                className="absolute h-44 w-44 rounded-full border border-doar-blue/30"
                aria-hidden="true"
            />
            <div
                className={cn(
                    'absolute h-32 w-32 rounded-full border border-doar-gold/30',
                    'shadow-[0_0_40px_rgba(245,196,0,0.12)]'
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    'relative z-10 flex h-20 w-20 items-center justify-center rounded-full',
                    'border border-doar-gold/40 bg-deep-space/80',
                    'shadow-[0_0_30px_rgba(245,196,0,0.2)]'
                )}
            >
                <Shield className="h-10 w-10 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
            </div>
        </div>
    );
}
