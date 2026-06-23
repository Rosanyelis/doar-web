import { Link } from 'react-router-dom';
import { INSTITUTIONAL_NAV_LINKS } from '../../../constants/institutional';
import { cn } from '../../../lib/utils';

function DoarLogo() {
    return (
        <Link to="/doar" className="flex shrink-0 items-center gap-3 transition-opacity duration-200 hover:opacity-90">
            <img
                src="/assets/hero/imagotipo-doar.png"
                alt="DOAR"
                className="h-10 w-auto object-contain"
            />
        </Link>
    );
}

const navLinkClassName = cn(
    'relative whitespace-nowrap text-sm font-medium text-white/88',
    'transition-colors duration-200 hover:text-white',
    'after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0',
    'after:bg-doar-gold after:transition-all after:duration-200',
    'hover:after:w-full'
);

function NavLink({ href, label }: { href: string; label: string }) {
    if (href.startsWith('/')) {
        return (
            <Link to={href} className={navLinkClassName}>
                {label}
            </Link>
        );
    }

    return (
        <a href={href} className={navLinkClassName}>
            {label}
        </a>
    );
}

export default function InstitutionalNavbar() {
    return (
        <header
            className={cn(
                'sticky top-0 z-50 border-b border-white/6',
                'bg-midnight-navy/80 backdrop-blur-xl'
            )}
        >
            <div className="mx-auto flex h-[88px] w-full items-center px-6 md:px-12 xl:px-20">
                <div className="hidden w-full items-center justify-between lg:flex">
                    <DoarLogo />
                    <nav className="flex items-center gap-8 xl:gap-10">
                        {INSTITUTIONAL_NAV_LINKS.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label} />
                        ))}
                    </nav>
                </div>

                <div className="flex w-full items-center gap-6 lg:hidden">
                    <DoarLogo />
                    <nav className="flex flex-1 items-center gap-5 overflow-x-auto scrollbar-none">
                        {INSTITUTIONAL_NAV_LINKS.map((link) => (
                            <NavLink key={link.label} href={link.href} label={link.label} />
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
