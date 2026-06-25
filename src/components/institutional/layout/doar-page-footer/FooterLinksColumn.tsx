import { Link } from 'react-router-dom';
import { SquareArrowOutUpRight } from 'lucide-react';
import { cn } from '../../../../lib/utils';

interface FooterLinksColumnProps {
    title: string;
    links: ReadonlyArray<{ label: string; href: string; external?: boolean }>;
}

export default function FooterLinksColumn({ title, links }: FooterLinksColumnProps) {
    return (
        <nav aria-label={title} className="flex flex-col">
            <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-doar-gold">
                    {title}
                </h3>
                <div className="mt-3 mb-6 h-px w-10 bg-doar-gold" aria-hidden="true" />
            </div>
            <ul className="space-y-0 flex-1" role="list">
                {links.map(({ label, href, external }) => (
                    <li key={label} className="border-b border-white/8 pb-3 last:border-0 last:pb-0">
                        {href.startsWith('/') ? (
                            <Link
                                to={href}
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
                                        'h-3.5 w-3.5 shrink-0 opacity-80',
                                        'text-doar-gold',
                                        'group-hover:opacity-100 transition-opacity'
                                    )}
                                    aria-hidden="true"
                                />
                            </Link>
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
                                        'h-3.5 w-3.5 shrink-0 opacity-80',
                                        'text-doar-gold',
                                        'group-hover:opacity-100 transition-opacity'
                                    )}
                                    aria-hidden="true"
                                />
                            </a>
                        )}
                    </li>
                ))}
            </ul>
        </nav>
    );
}
