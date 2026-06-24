import { Link } from 'react-router-dom';

export default function Footer() {
    const currentYear =
        new Date().getFullYear() > 2026 ? new Date().getFullYear() : 2026;

    return (
        <footer className="bg-[#2A3045] py-16 md:py-20">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 gap-12 text-center md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
                    {/* Columna 1: Logo + Disclaimer */}
                    <div className="flex flex-col items-center lg:col-span-1 lg:items-start">
                        <Link to="/" className="inline-block">
                            <img
                                src="/assets/hero/imagotipo-doar.png"
                                alt="DOAR Logo"
                                className="h-auto w-[100px] object-contain brightness-0 invert"
                                onError={(e) => {
                                    (
                                        e.target as HTMLImageElement
                                    ).style.display = 'none';
                                }}
                            />
                        </Link>

                        <div className="mt-6 text-center lg:text-left">
                            <h4 className="mb-2 text-[11px] font-bold tracking-wider text-white">
                                DESCARGO DE RESPONSABILIDAD
                            </h4>
                            <p className="text-[11px] leading-relaxed text-white">
                                DOAR no es un banco, exchange ni custodio de activos digitales. Los servicios de conversión fiat/stablecoin, pagos, verificación y liquidación son procesados mediante proveedores externos regulados según disponibilidad jurisdiccional.
                            </p>
                        </div>
                    </div>

                    {/* Columna 2: Producto */}
                    <div>
                        <h4 className="mb-6 text-[16px] font-bold text-white">
                            Producto
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    to="/#como-funciona"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Cómo funciona
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/seguridad"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Seguridad
                                </Link>
                            </li>
                            <li>
                                <button
                                    onClick={() =>
                                        window.dispatchEvent(
                                            new CustomEvent(
                                                'open-download-modal',
                                            ),
                                        )
                                    }
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Descargar app
                                </button>
                            </li>
                            <li>
                                <Link
                                    to="/afiliados"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Afiliados
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 3: Soporte */}
                    <div>
                        <h4 className="mb-6 text-[16px] font-bold text-white">
                            Soporte
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    to="/soporte"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Centro de ayuda
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 4: Legal */}
                    <div>
                        <h4 className="mb-6 text-[16px] font-bold text-white">
                            Legal
                        </h4>
                        <ul className="flex flex-col gap-4">
                            <li>
                                <Link
                                    to="/privacidad"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Política de privacidad
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/terminos"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Términos y condiciones
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/declaracion-riesgo"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Declaración de riesgo
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/politica-cumplimiento"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Política de cumplimiento
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/consentimiento-biometrico"
                                    className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                                >
                                    Consentimiento biométrico
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Columna 5: Empresa */}
                    <div className="flex flex-col gap-4 lg:col-span-1">
                        <h4 className="text-[16px] font-bold text-white">
                            Empresa
                        </h4>
                        <Link
                            to="/sobre-nosotros"
                            className="text-[14px] font-normal text-white/80 transition-colors hover:text-[#FCCA01]"
                        >
                            Sobre DOAR
                        </Link>

                        <div className=" space-y-1.5 text-center text-[12px] leading-relaxed text-white/80 lg:text-center">
                            <p>Ponce de Leon Blvd, Suite 904, Coral Gables, Florida, USA</p>
                            <p>+1 305-7463401</p>
                            <p>info@doar.tech</p>
                        </div>

                        {/* Redes sociales — íconos con fondo naranja sólido */}
                        <div className="mt-2 flex items-center justify-center gap-3 lg:justify-center">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Facebook"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                            >
                                {/* Facebook icon */}
                                <svg
                                    className="h-4 w-4 fill-[#F29501]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                                </svg>
                            </a>
                            <a
                                href="https://youtube.com"
                                target="_blank"
                                rel="noreferrer"
                                aria-label="YouTube"
                                className="flex h-9 w-9 items-center justify-center rounded-full bg-white transition-opacity hover:opacity-80"
                            >
                                {/* YouTube icon */}
                                <svg
                                    className="h-4 w-4 fill-[#F29501]"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
                                    <polygon
                                        fill="white"
                                        points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
                                    />
                                </svg>
                            </a>
                        </div>

                        
                    </div>
                </div>

                <div className="mt-16 border-t border-white/10 pt-6 text-center">
                    <p className="text-[13px] leading-snug text-white/70">
                        © DOAR LLC {currentYear} - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}
