import { useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { DOAR_PAGE_PLATFORM_LINKS } from '../../../constants/institutional';
import { ROUTES } from '../../../constants/routes';
import { useDoarPageNavigation } from '../../../context/DoarPageNavigationProvider';
import { cn } from '../../../lib/utils';
import type { DoarNavGroupId } from '../../../lib/doar-page-navigation';
import { images } from '../../../lib/images';

function DoarLogo() {
    return (
        <Link
            to={ROUTES.INSTITUCIONAL}
            className="flex shrink-0 items-center gap-3 transition-opacity duration-200 hover:opacity-90"
        >
            <img
                src={images.logoInstitutional}
                alt="DOAR"
                className="w-40 object-contain"
            />
        </Link>
    );
}

function NavLink({
    href,
    label,
    navGroup,
    variant = 'desktop',
    onNavigate,
}: {
    href: string;
    label: string;
    navGroup: DoarNavGroupId;
    variant?: 'desktop' | 'mobile';
    onNavigate?: () => void;
}) {
    const { isNavGroupActive, handleAnchorClick } = useDoarPageNavigation();
    const isActive = isNavGroupActive(navGroup);

    const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
        handleAnchorClick(event, href);
        onNavigate?.();
    };

    if (variant === 'mobile') {
        return (
            <a
                href={href}
                onClick={handleClick}
                aria-current={isActive ? 'true' : undefined}
                className={cn(
                    'block rounded-lg px-4 py-3 text-sm font-medium transition-colors',
                    isActive
                        ? 'bg-doar-gold/10 text-doar-gold'
                        : 'text-white/88 hover:bg-white/5 hover:text-white'
                )}
            >
                {label}
            </a>
        );
    }

    return (
        <a
            href={href}
            onClick={handleClick}
            aria-current={isActive ? 'true' : undefined}
            className={cn(
                'relative whitespace-nowrap text-[11px] font-medium transition-colors duration-200 xl:text-xs 2xl:text-sm',
                isActive ? 'text-doar-gold' : 'text-white/88 hover:text-white',
                'after:absolute after:-bottom-1 after:left-0 after:h-px after:bg-doar-gold after:transition-all after:duration-200',
                isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
            )}
        >
            {label}
        </a>
    );
}

export default function InstitutionalNavbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <header
            className={cn(
                'sticky top-0 z-50 border-b border-white/6',
                'bg-midnight-navy/80 backdrop-blur-xl'
            )}
        >
            <div className="mx-auto flex h-[72px] w-full items-center justify-between gap-4 px-4 sm:h-[88px] sm:px-6 md:px-12 xl:px-20">
                <DoarLogo />

                <nav
                    className="hidden min-w-0 flex-1 items-center justify-end gap-3 lg:flex xl:gap-5 2xl:gap-6"
                    aria-label="Secciones DOAR"
                >
                    {DOAR_PAGE_PLATFORM_LINKS.map((link) => (
                        <NavLink
                            key={link.label}
                            href={link.href}
                            label={link.label}
                            navGroup={link.navGroup}
                        />
                    ))}
                </nav>

                <button
                    type="button"
                    aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="doar-mobile-nav"
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className={cn(
                        'inline-flex size-10 shrink-0 items-center justify-center rounded-lg',
                        'text-white/88 transition-colors hover:bg-white/5 hover:text-white lg:hidden'
                    )}
                >
                    {mobileMenuOpen ? (
                        <X className="h-5 w-5" aria-hidden="true" />
                    ) : (
                        <Menu className="h-5 w-5" aria-hidden="true" />
                    )}
                </button>
            </div>

            {mobileMenuOpen && (
                <div
                    id="doar-mobile-nav"
                    className={cn(
                        'border-t border-white/6 bg-midnight-navy/95 backdrop-blur-xl lg:hidden',
                        'max-h-[calc(100dvh-72px)] overflow-y-auto sm:max-h-[calc(100dvh-88px)]'
                    )}
                >
                    <nav className="mx-auto flex flex-col gap-1 px-4 py-4 sm:px-6" aria-label="Secciones DOAR">
                        {DOAR_PAGE_PLATFORM_LINKS.map((link) => (
                            <NavLink
                                key={link.label}
                                href={link.href}
                                label={link.label}
                                navGroup={link.navGroup}
                                variant="mobile"
                                onNavigate={closeMobileMenu}
                            />
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
