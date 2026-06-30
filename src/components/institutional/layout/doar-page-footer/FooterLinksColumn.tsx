import type { MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';
import { useOptionalDoarPageNavigation } from '../../../../context/DoarPageNavigationProvider';
import {
    isInstitutionalSectionHref,
} from '../../../../lib/doar-page-navigation';
import { cn } from '../../../../lib/utils';
import type { DoarNavGroupId } from '../../../../lib/doar-page-navigation';

interface FooterLink {
    label: string;
    href: string;
    external?: boolean;
    navGroup?: DoarNavGroupId;
}

interface FooterLinksColumnProps {
    title: string;
    links: ReadonlyArray<FooterLink>;
}

function FooterAnchorLink({
    label,
    href,
    isActive,
    onAnchorClick,
}: {
    label: string;
    href: string;
    isActive: boolean;
    onAnchorClick: (event: MouseEvent<HTMLAnchorElement>, href: string) => void;
}) {
    const isInPageSection = isInstitutionalSectionHref(href);

    const className = cn(
        'flex items-center justify-between gap-4 group',
        'text-[13px] font-light transition-colors',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-doar-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]',
        isActive ? 'text-doar-gold' : 'text-white/90 hover:text-doar-gold'
    );

    if (isInPageSection) {
        return (
            <a
                href={href}
                onClick={(event) => onAnchorClick(event, href)}
                aria-current={isActive ? 'true' : undefined}
                className={className}
            >
                <span className="flex-1 truncate">{label}</span>
                <SquareArrowOutUpRight
                    className={cn(
                        'h-3.5 w-3.5 shrink-0 opacity-80 text-doar-gold',
                        'group-hover:opacity-100 transition-opacity'
                    )}
                    aria-hidden="true"
                />
            </a>
        );
    }

    return (
        <Link to={href} className={className} aria-current={isActive ? 'true' : undefined}>
            <span className="flex-1 truncate">{label}</span>
            <SquareArrowOutUpRight
                className={cn(
                    'h-3.5 w-3.5 shrink-0 opacity-80 text-doar-gold',
                    'group-hover:opacity-100 transition-opacity'
                )}
                aria-hidden="true"
            />
        </Link>
    );
}

export default function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
    const navigation = useOptionalDoarPageNavigation();

    return (
        <nav aria-label={title} className="flex flex-col">
            <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-doar-gold">
                    {title}
                </h3>
                <div className="mt-3 mb-6 h-px w-10 bg-doar-gold" aria-hidden="true" />
            </div>
            <ul className="space-y-0 flex-1" role="list">
                {links.map(({ label, href, external, navGroup }) => {
                    const isActive = navGroup
                        ? (navigation?.isNavGroupActive(navGroup) ?? false)
                        : false;

                    return (
                        <li key={label} className="border-b border-white/8 pb-3 last:border-0 last:pb-0">
                            {href.startsWith('/') && !external ? (
                                <FooterAnchorLink
                                    label={label}
                                    href={href}
                                    isActive={isActive}
                                    onAnchorClick={
                                        navigation?.handleAnchorClick ??
                                        ((event, anchorHref) => {
                                            if (isInstitutionalSectionHref(anchorHref)) {
                                                event.preventDefault();
                                            }
                                        })
                                    }
                                />
                            ) : (
                                <a
                                    href={href}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                    className={cn(
                                        'flex items-center justify-between gap-4 group',
                                        'text-[13px] font-light text-white/90',
                                        'hover:text-doar-gold transition-colors',
                                        'focus:outline-none focus-visible:ring-2 focus-visible:ring-doar-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]'
                                    )}
                                >
                                    <span className="flex-1 truncate">{label}</span>
                                    <SquareArrowOutUpRight
                                        className={cn(
                                            'h-3.5 w-3.5 shrink-0 opacity-80 text-doar-gold',
                                            'group-hover:opacity-100 transition-opacity'
                                        )}
                                        aria-hidden="true"
                                    />
                                </a>
                            )}
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
