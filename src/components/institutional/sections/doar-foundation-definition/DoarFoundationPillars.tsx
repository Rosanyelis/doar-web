import { FileText, Globe, Landmark, Network, Settings, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../../lib/utils';

const PILLARS: {
    id: string;
    title: string;
    description: string;
    icon: LucideIcon;
    accent: string;
    accentBorder: string;
    accentBg: string;
}[] = [
    {
        id: 'financial-orchestration',
        title: 'Financial Orchestration Layer',
        description:
            'Coordination layer that connects users, businesses, operational rules and specialized infrastructure.',
        icon: Network,
        accent: 'text-doar-blue',
        accentBorder: 'border-doar-blue/40',
        accentBg: 'bg-doar-blue/5',
    },
    {
        id: 'technology-platform',
        title: 'Technology Platform',
        description:
            'Technology platform designed to operate digital financial experiences through proprietary components and integrated infrastructure.',
        icon: Globe,
        accent: 'text-doar-green',
        accentBorder: 'border-doar-green/40',
        accentBg: 'bg-doar-green/5',
    },
    {
        id: 'unified-experience',
        title: 'Unified Experience Layer',
        description:
            'Unified interface that enables users and businesses to interact with financial services through a consistent operational model.',
        icon: Users,
        accent: 'text-[#a855f7]',
        accentBorder: 'border-[#a855f7]/40',
        accentBg: 'bg-[#a855f7]/5',
    },
    {
        id: 'operational-coordination',
        title: 'Operational Coordination Layer',
        description:
            'Operational layer coordinating events, rules, monitoring and execution between internal systems and integrated providers.',
        icon: Settings,
        accent: 'text-[#f97316]',
        accentBorder: 'border-[#f97316]/40',
        accentBg: 'bg-[#f97316]/5',
    },
    {
        id: 'ledger-based',
        title: 'Ledger-Based Operating Model',
        description:
            'Ledger-centric operational model that records activity, balances, states and transactional traceability.',
        icon: FileText,
        accent: 'text-[#06b6d4]',
        accentBorder: 'border-[#06b6d4]/40',
        accentBg: 'bg-[#06b6d4]/5',
    },
    {
        id: 'infrastructure-coordinator',
        title: 'Infrastructure Coordinator',
        description:
            'Coordinator of specialized providers responsible for payments, compliance, custody, banking and blockchain infrastructure.',
        icon: Landmark,
        accent: 'text-doar-gold',
        accentBorder: 'border-doar-gold/40',
        accentBg: 'bg-doar-gold/5',
    },
];

export default function DoarFoundationPillars() {
    return (
        <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mb-16">
            {PILLARS.map(({ id, title, description, icon: Icon, accent, accentBorder, accentBg }) => (
                <article
                    key={id}
                    className={cn(
                        'rounded-2xl border border-white/8 bg-deep-space/80 p-6',
                        'transition-all duration-200 hover:border-white/12'
                    )}
                >
                    <div className="flex items-start gap-4">
                        <div
                            className={cn(
                                'flex h-18 w-18 shrink-0 items-center justify-center rounded-full border',
                                accentBorder,
                                accentBg
                            )}
                            aria-hidden="true"
                        >
                            <Icon className={cn('h-10 w-10', accent)} strokeWidth={2} />
                        </div>

                        <div className="min-w-0 flex-1">
                            <h3 className="text-sm font-semibold leading-snug text-text-primary">
                                {title}
                            </h3>
                            <p className="mt-2 text-xs font-light leading-relaxed text-soft-gray sm:text-sm">
                                {description}
                            </p>
                        </div>
                    </div>
                </article>
            ))}
        </div>
    );
}
