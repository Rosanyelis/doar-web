import { Link } from 'react-router-dom';
import { cn } from '../../../lib/utils';

export default function InstitutionalFooter() {
    const currentYear =
        new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    return (
        <footer className={cn(
            'bg-midnight-navy border-t border-white/6',
            'py-16 md:py-20',
            'font-institutional'
        )}>
            <div className="mx-auto max-w-[1440px] px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-8">
                    {/* Logo + Descripción */}
                    <div className="flex flex-col lg:col-span-1">
                        <Link to="/sobre-nosotros" className="inline-block">
                            <img
                                src="/assets/hero/imagotipo-doar.png"
                                alt="DOAR Logo"
                                className="h-auto w-[100px] object-contain"
                                onError={(e) => {
                                    (e.target as HTMLImageElement).style.display = 'none';
                                }}
                            />
                        </Link>
                        <p className="mt-4 max-w-[280px] text-[13px] leading-relaxed text-soft-gray/80">
                            DOAR coordina infraestructura financiera especializada mediante un modelo de orquestación, supervisión operativa y responsabilidades segregadas.
                        </p>
                        <p className="mt-4 text-[11px] leading-relaxed text-soft-gray/60">
                            Una plataforma diseñada para conectar usuarios, regulación e infraestructura financiera digital.
                        </p>
                    </div>

                    {/* Plataforma */}
                    <div>
                        <h4 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.12em] text-text-primary">
                            Plataforma
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: 'Qué es DOAR', href: '/sobre-nosotros#que-es' },
                                { label: 'Modelo Operativo', href: '/sobre-nosotros#modelo-operativo' },
                                { label: 'Cumplimiento y Riesgo', href: '/sobre-nosotros#cumplimiento' },
                                { label: 'Liquidez y Continuidad Operativa', href: '/sobre-nosotros#tesoreria' },
                                { label: 'Posicionamiento Regulatorio', href: '/sobre-nosotros#posicion' },
                                { label: 'Modelo de Responsabilidades', href: '/sobre-nosotros#responsabilidades' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-[13px] font-light text-soft-gray/70 transition-colors hover:text-doar-gold"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal y Compliance */}
                    <div>
                        <h4 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.12em] text-text-primary">
                            Legal y Compliance
                        </h4>
                        <ul className="flex flex-col gap-3">
                            {[
                                { label: 'Términos y Condiciones', href: '/terminos' },
                                { label: 'Política de Privacidad', href: '/privacidad' },
                                { label: 'Política de Cookies', href: '/privacidad#cookies' },
                                { label: 'Consentimiento Biométrico', href: '/consentimiento-biometrico' },
                                { label: 'Declaración de Riesgos', href: '/declaracion-riesgo' },
                                { label: 'Política AML / KYC / KYB', href: '/politica-cumplimiento' },
                                { label: 'Declaración AML', href: '/politica-cumplimiento#monitoreo-operativo' },
                                { label: 'Divulgación Regulatoria', href: '/sobre-nosotros#posicion' },
                                { label: 'Política de Continuidad Operativa', href: '/sobre-nosotros#tesoreria' },
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        to={link.href}
                                        className="text-[13px] font-light text-soft-gray/70 transition-colors hover:text-doar-gold"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contacto */}
                    <div>
                        <h4 className="mb-6 text-[14px] font-semibold uppercase tracking-[0.12em] text-text-primary">
                            Contacto
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <a
                                    href="mailto:info@doar.tech"
                                    className="flex items-center gap-3 text-[13px] font-light text-soft-gray/70 transition-colors hover:text-doar-gold"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-doar-gold/10">
                                        <svg className="h-4 w-4 text-doar-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    info@doar.tech
                                </a>
                            </li>
                            <li>
                                <a
                                    href="mailto:manager@doar.tech"
                                    className="flex items-center gap-3 text-[13px] font-light text-soft-gray/70 transition-colors hover:text-doar-gold"
                                >
                                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-doar-gold/10">
                                        <svg className="h-4 w-4 text-doar-gold" fill="none" viewBox="0 0 24 24" strokeWidth={1.75} stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                        </svg>
                                    </span>
                                    manager@doar.tech
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Dirección */}
                <div className="mt-12 border-t border-white/6 pt-8 text-center">
                    <p className="text-[12px] font-medium uppercase tracking-[0.1em] text-text-primary">
                        DOAR LLC
                    </p>
                    <p className="mt-2 text-[12px] leading-relaxed text-soft-gray/60">
                        2020 Ponce de Leon Blvd, Coral Gables, Florida, United States
                    </p>
                    <p className="mt-1 text-[11px] italic text-doar-gold/70">
                        Financial Orchestration Platform
                    </p>
                </div>

                {/* Copyright */}
                <div className="mt-6 border-t border-white/6 pt-6 text-center">
                    <p className="text-[12px] leading-snug text-soft-gray/50">
                        © DOAR LLC {currentYear}. Todos los derechos reservados.
                    </p>
                </div>
            </div>
        </footer>
    );
}
