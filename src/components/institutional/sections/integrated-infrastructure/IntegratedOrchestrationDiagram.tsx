import { User } from 'lucide-react';
import { INFRA_ORCHESTRATION_PROVIDERS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

function ProviderNode({ name, label }: { name: string; label: string }) {
    return (
        <div
            className={cn(
                'rounded-lg border border-doar-blue/30 bg-deep-space/70 px-3 py-2.5',
                'text-center backdrop-blur-sm'
            )}
        >
            <p className="text-[10px] font-semibold uppercase tracking-wide text-text-primary">
                {name}
            </p>
            <p className="mt-0.5 text-[8px] font-medium uppercase tracking-wider text-soft-gray">
                {label}
            </p>
        </div>
    );
}

function PaymentsSettlementNode() {
    return (
        <div
            className={cn(
                'rounded-lg border border-doar-blue/30 bg-deep-space/70 px-4 py-3',
                'backdrop-blur-sm'
            )}
        >
            <p className="mb-2 text-center text-[9px] font-semibold uppercase tracking-wider text-soft-gray">
                Payments & Settlement
            </p>
            <div className="flex items-center justify-center gap-3">
                <span className="text-sm font-bold tracking-tight text-[#635BFF]">stripe</span>
                <div className="h-4 w-px bg-white/20" aria-hidden="true" />
                <span className="text-xs font-medium text-text-primary">
                    d<span className="font-black text-[#FF6B00]">·</span>local
                </span>
            </div>
        </div>
    );
}

export default function IntegratedOrchestrationDiagram() {
    return (
        <div className="relative flex w-full max-w-lg flex-col items-center">
            <svg
                className="pointer-events-none absolute inset-0 h-full w-full"
                viewBox="0 0 400 420"
                fill="none"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <line x1="200" y1="52" x2="200" y2="88" stroke="#F5C400" strokeWidth="1.2" />
                <line x1="200" y1="168" x2="200" y2="200" stroke="#F5C400" strokeWidth="1.2" />
                <line x1="200" y1="200" x2="70" y2="248" stroke="#F5C400" strokeWidth="1" />
                <line x1="200" y1="200" x2="150" y2="248" stroke="#F5C400" strokeWidth="1" />
                <line x1="200" y1="200" x2="250" y2="248" stroke="#F5C400" strokeWidth="1" />
                <line x1="200" y1="200" x2="330" y2="248" stroke="#F5C400" strokeWidth="1" />
                <line x1="200" y1="200" x2="200" y2="320" stroke="#F5C400" strokeWidth="1.2" />
                <circle cx="200" cy="52" r="2.5" fill="#F5C400" />
                <circle cx="200" cy="168" r="2.5" fill="#F5C400" />
                <circle cx="200" cy="200" r="3" fill="#F5C400" />
                <circle cx="200" cy="320" r="2.5" fill="#F5C400" />
            </svg>

            <div className="relative z-10 mb-2 flex flex-col items-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-doar-blue/30 bg-deep-space/70">
                    <User className="h-5 w-5 text-doar-gold" strokeWidth={1.75} />
                </div>
                <span className="mt-1 text-[9px] font-semibold uppercase tracking-widest text-soft-gray">
                    Users
                </span>
            </div>

            <div
                className={cn(
                    'relative z-10 mb-4 w-full max-w-xs rounded-xl border border-doar-gold/50',
                    'bg-deep-space/80 px-6 py-5 text-center backdrop-blur-sm',
                    'shadow-[0_0_40px_rgba(245,196,0,0.15)] ledger-glow-pulse'
                )}
            >
                <div className="mb-2 flex items-center justify-center gap-2">
                    <svg className="h-5 w-7 fill-doar-gold" viewBox="0 0 32 24" aria-hidden="true">
                        <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
                    </svg>
                    <span className="text-lg font-bold tracking-wider text-text-primary">DOAR</span>
                </div>
                <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-soft-gray">
                    Financial Orchestration{' '}
                    <span className="text-doar-gold">Layer</span>
                </p>
            </div>

            <div className="relative z-10 mb-3 grid w-full grid-cols-2 gap-2 sm:grid-cols-4">
                {INFRA_ORCHESTRATION_PROVIDERS.map((provider) => (
                    <ProviderNode key={provider.id} name={provider.name} label={provider.label} />
                ))}
            </div>

            <div className="relative z-10 w-full max-w-xs">
                <PaymentsSettlementNode />
            </div>
        </div>
    );
}
