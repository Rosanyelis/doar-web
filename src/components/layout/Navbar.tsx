import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Download, Menu, X } from 'lucide-react';

export default function Navbar() {
    const location = useLocation();
    const url = location.pathname;
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const getLinkClass = (path: string) => {
        const isActive = url === path || (path !== '/' && url.startsWith(path));
        return `px-4 py-2 rounded-full font-semibold transition-colors ${
            isActive
                ? 'bg-white text-[#31374F] shadow-sm'
                : 'text-[#7B7B7B] hover:text-[#31374F]'
        }`;
    };

    const getMobileLinkClass = (path: string) => {
        const isActive = url === path || (path !== '/' && url.startsWith(path));
        return `block w-full rounded-xl px-4 py-3 text-left text-[15px] font-semibold transition-colors ${
            isActive
                ? 'bg-[#F3F3FF] text-[#31374F]'
                : 'text-[#7B7B7B] hover:bg-gray-50 hover:text-[#31374F]'
        }`;
    };

    const navLinks = [
        { href: '/', label: 'Inicio' },
        { href: '/doar', label: 'DOAR' },
        { href: '/seguridad', label: 'Seguridad' },
        { href: '/afiliados', label: 'Afiliados' },
        { href: '/soporte', label: 'Soporte' },
    ];

    const handleDownloadClick = () => {
        window.dispatchEvent(new CustomEvent('open-download-modal'));
    };

    return (
        <header className="sticky top-0 z-50 bg-white/80 shadow-[0px_12px_44px_rgba(0,0,0,0.04)] backdrop-blur-md">
            <div className="container mx-auto flex h-[82px] items-center justify-between px-4 sm:px-6">
                {/* ── Mobile: Hamburguesa (solo en móvil) ── */}
                <button
                    type="button"
                    aria-label={
                        mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'
                    }
                    onClick={() => setMobileMenuOpen((prev) => !prev)}
                    className="inline-flex size-10 items-center justify-center rounded-full text-[#31374F] transition-colors hover:bg-gray-100 md:hidden"
                >
                    {mobileMenuOpen ? (
                        <X className="h-5 w-5" aria-hidden />
                    ) : (
                        <Menu className="h-5 w-5" aria-hidden />
                    )}
                </button>

                {/* ── Logo (siempre visible) ── */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/assets/hero/imagotipo-doar.png"
                        alt="DOAR Logo"
                        className="h-[40px] w-auto object-contain"
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="154" height="40"><rect width="100%" height="100%" fill="%23E5E8EB" rx="4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%237B7B7B">DOAR</text></svg>';
                        }}
                    />
                </Link>

                {/* ── Desktop: nav links centrados ── */}
                <nav className="hidden flex-1 justify-center md:flex">
                    <div className="flex items-center gap-1 rounded-full border border-gray-100 bg-[#FCFCFD] p-1">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                to={href}
                                className={getLinkClass(href)}
                            >
                                {label}
                            </Link>
                        ))}
                    </div>
                </nav>

                {/* ── Acciones derechas (siempre visibles) ── */}
                <div className="flex shrink-0 items-center gap-2">
                    <button
                        type="button"
                        onClick={handleDownloadClick}
                        className="flex items-center gap-2 rounded-full border border-gray-200 bg-transparent px-3 py-2 font-semibold text-[#31374F] transition-all hover:bg-gray-50 sm:px-4 sm:py-2.5"
                    >
                        <span className="hidden text-sm sm:inline">
                            Descargar App
                        </span>
                        <Download
                            className="h-5 w-5 shrink-0"
                            aria-hidden
                        />
                    </button>
                </div>
            </div>

            {/* ── Mobile dropdown menu ── */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full border-t border-gray-100 bg-white/95 px-4 py-3 shadow-lg backdrop-blur-md md:hidden">
                    <nav className="flex flex-col gap-1">
                        {navLinks.map(({ href, label }) => (
                            <Link
                                key={href}
                                to={href}
                                className={getMobileLinkClass(href)}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </header>
    );
}
