import {
    Building2,
    Coins,
    Layers,
    RefreshCw,
    ShieldCheck,
    Users,
} from 'lucide-react';
import CapabilityPanel from './CapabilityPanel';
import DiagramNode from './DiagramNode';
import { cn } from '../../../lib/utils';

function OrchestrationHub() {
    return (
        <div
            className={cn(
                'relative z-10 w-full max-w-[280px] rounded-[32px] border border-doar-gold/40',
                'bg-gradient-to-b from-deep-space/85 to-midnight-navy/90 p-8 text-center',
                'backdrop-blur-xl shadow-[0_0_60px_rgba(245,196,0,0.15)]',
                'transition-all duration-200 hover:shadow-[0_0_80px_rgba(245,196,0,0.2)]'
            )}
        >
            <div className="mb-4 flex items-center justify-center gap-2">
                <svg className="h-7 w-9 fill-doar-gold" viewBox="0 0 32 24" aria-hidden="true">
                    <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
                </svg>
                <span className="text-2xl font-bold tracking-wider text-text-primary">DOAR</span>
            </div>
            <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-soft-gray">
                Financial Orchestration Layer
            </p>
        </div>
    );
}

function DiagramConnectors() {
    return (
        <svg
            className="pointer-events-none absolute inset-0 hidden h-full w-full md:block"
            viewBox="0 0 700 560"
            fill="none"
            aria-hidden="true"
        >
            {/* Top — solid */}
            <line x1="175" y1="72" x2="350" y2="72" stroke="#F5C400" strokeWidth="1.2" />
            <line x1="350" y1="72" x2="525" y2="72" stroke="#F5C400" strokeWidth="1.2" />
            <line x1="350" y1="72" x2="350" y2="168" stroke="#F5C400" strokeWidth="1.2" />
            <circle cx="350" cy="72" r="3.5" fill="#F5C400" className="institutional-pulse" />
            <circle cx="175" cy="72" r="2.5" fill="#F5C400" opacity="0.85" />
            <circle cx="525" cy="72" r="2.5" fill="#F5C400" opacity="0.85" />

            {/* Left — dashed */}
            <path
                d="M 155 195 C 230 195, 230 235, 285 235"
                stroke="#F5C400"
                strokeWidth="1.2"
                className="institutional-dash"
            />
            <path
                d="M 155 305 C 230 305, 230 265, 285 265"
                stroke="#F5C400"
                strokeWidth="1.2"
                className="institutional-dash"
            />
            <circle cx="230" cy="195" r="2.5" fill="#F5C400" className="institutional-pulse" />
            <circle cx="230" cy="305" r="2.5" fill="#F5C400" className="institutional-pulse" />

            {/* Right — dashed */}
            <path
                d="M 545 195 C 470 195, 470 235, 415 235"
                stroke="#F5C400"
                strokeWidth="1.2"
                className="institutional-dash"
            />
            <path
                d="M 545 305 C 470 305, 470 265, 415 265"
                stroke="#F5C400"
                strokeWidth="1.2"
                className="institutional-dash"
            />
            <circle cx="470" cy="195" r="2.5" fill="#F5C400" className="institutional-pulse" />
            <circle cx="470" cy="305" r="2.5" fill="#F5C400" className="institutional-pulse" />

            {/* Bottom — solid */}
            <line x1="350" y1="340" x2="350" y2="410" stroke="#F5C400" strokeWidth="1.2" />
            <circle cx="350" cy="410" r="3.5" fill="#F5C400" className="institutional-pulse" />
        </svg>
    );
}

export default function InfrastructureDiagram() {
    return (
        <div className="relative flex w-full min-h-[520px] flex-col items-center justify-center md:min-h-[580px] border-b border-white">
            <DiagramConnectors />

            <div className="relative z-10 mb-14 flex gap-16 md:gap-24">
                <DiagramNode label="Usuarios" icon={Users} />
                <DiagramNode label="Empresas" icon={Building2} />
            </div>

            <div className="relative z-10 mb-14 flex w-full max-w-2xl flex-col items-center gap-10 px-4 md:flex-row md:items-center md:justify-between md:gap-4">
                <div className="flex flex-col gap-16 md:gap-20">
                    <DiagramNode label="Ledger" icon={Layers} />
                    <DiagramNode label="Tesorería" icon={Coins} />
                </div>

                <OrchestrationHub />

                <div className="flex flex-col gap-16 md:gap-20">
                    <DiagramNode label="Cumplimiento" icon={ShieldCheck} iconPosition="right" />
                    <DiagramNode label="Liquidación" icon={RefreshCw} iconPosition="right" />
                </div>
            </div>

            <div className="relative z-10 w-full flex justify-center px-4">
                <CapabilityPanel />
            </div>
        </div>
    );
}
