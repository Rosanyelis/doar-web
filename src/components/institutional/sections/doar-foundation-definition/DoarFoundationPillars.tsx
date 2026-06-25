import { FileText, Globe, Layers, Network, Settings, Users } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const PILLARS = [
    {
        id: 'financial-orchestration',
        title: 'Financial Orchestration Layer',
        description: 'Coordination layer that connects users, businesses, operational rules and specialized infrastructure.',
        icon: Network,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/30',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'technology-platform',
        title: 'Technology Platform',
        description: 'Technology platform designed to operate digital financial experiences through proprietary components and integrated infrastructure.',
        icon: Globe,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/30',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'unified-experience',
        title: 'Unified Experience Layer',
        description: 'Unified interface that enables users and businesses to interact with financial services through a consistent operational model.',
        icon: Users,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/30',
        accentBg: 'bg-[#a855f7]/5',
    },
    {
        id: 'operational-coordination',
        title: 'Operational Coordination Layer',
        description: 'Operational layer coordinating events, rules, monitoring and execution between internal systems and integrated providers.',
        icon: Settings,
        accent: 'text-[#f97316]',
        accentBorder: 'border-[#f97316]/30',
        accentBg: 'bg-[#f97316]/5',
    },
    {
        id: 'ledger-based',
        title: 'Ledger-Based Operating Model',
        description: 'Ledger-centric operational model that records activity, balances, states and transactional traceability.',
        icon: FileText,
        accent: 'text-[#06b6d4]',
        accentBorder: 'border-[#06b6d4]/30',
        accentBg: 'bg-[#06b6d4]/5',
    },
    {
        id: 'infrastructure-coordinator',
        title: 'Infrastructure Coordinator',
        description: 'Coordinator of specialized providers responsible for payments, compliance, custody, banking and blockchain infrastructure.',
        icon: Layers,
        accent: 'text-doar-gold',
        accentBorder: 'border-doar-gold/30',
        accentBg: 'bg-doar-gold/5',
    },
] as const;

export default function DoarFoundationPillars() {
    return (
        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map(({ id, title, description, icon: Icon, accent, accentBorder, accentBg }) => (
                <article
                    key={id}
                    className={cn(
                        'min-h-[260px] rounded-[24px] border border-white/8 p-8',
                        'bg-white/[0.02]',
                        'flex flex-col',
                        'transition-all duration-200',
                        'hover:-translate-y-1 hover:border-white/12'
                    )}
                >
                    <div className="mb-4 flex items-start gap-3">
                        <div
                            className={cn(
                                'flex h-12 w-12 shrink-0 items-center justify-center rounded-full border',
                                accentBorder,
                                accentBg
                            )}
                        >
                            <Icon
                                className={cn('h-6 w-6', accent)}
                                strokeWidth={1.75}
                                aria-hidden="true"
                            />
                        </div>
                    </div>
                    <h3 className="mb-3 text-base font-semibold leading-tight text-text-primary">
                        {title}
                    </h3>
                    <p className="flex-1 text-[14px] font-light leading-relaxed text-soft-gray">
                        {description}
                    </p>
                </article>
            ))}
        </div>
    );
}
