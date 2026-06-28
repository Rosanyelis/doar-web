import { ShieldCheck } from 'lucide-react';
import { cn } from '../../../../lib/utils';

export default function ComplianceShieldGraphic() {
    return (
        <div className="relative flex h-56 w-full max-w-[280px] items-center justify-center">
            <div
                className={cn(
                    'absolute h-52 w-52 rounded-full border border-doar-blue/15',
                    'shadow-[0_0_80px_rgba(47,107,255,0.2)]'
                )}
                aria-hidden="true"
            />
            <div
                className="absolute h-40 w-40 rounded-full border border-doar-blue/25"
                aria-hidden="true"
            />
            <div
                className="absolute h-28 w-28 rounded-full border border-doar-blue/35"
                aria-hidden="true"
            />
            <div
                className={cn(
                    'absolute h-16 w-16 rounded-full border border-doar-blue/50',
                    'shadow-[0_0_40px_rgba(47,107,255,0.25)]'
                )}
                aria-hidden="true"
            />
            <div
                className={cn(
                    'relative z-10 flex h-20 w-20 items-center justify-center rounded-full',
                    'border-2 border-doar-gold/50 bg-deep-space/90',
                    'shadow-[0_0_40px_rgba(245,196,0,0.25)]'
                )}
            >
                <ShieldCheck
                    className="h-10 w-10 text-doar-gold"
                    strokeWidth={1.75}
                    aria-hidden="true"
                />
            </div>
        </div>
    );
}
