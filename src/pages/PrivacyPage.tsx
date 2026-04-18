import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LegalHero from '../components/web/LegalHero';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Política de Privacidad | DOAR</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
                />
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Política de Privacidad"
                    subtitle="Última actualización: Abril 2026"
                />

                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-[850px]">
                            <div className="prose prose-lg prose-slate max-w-none">
                                <p className="mb-12 text-[18px] leading-relaxed text-[#515151]">
                                    Esta Política de privacidad regula el
                                    tratamiento de datos personales realizado
                                    por{' '}
                                    <strong className="text-[#31374F]">
                                        DOAR LLC
                                    </strong>{' '}
                                    y
                                    <strong className="text-[#31374F]">
                                        {' '}
                                        DOAR LATAM S.A.C.
                                    </strong>
                                    , conforme a la Ley N.º 29733 del Perú y su
                                    nuevo Reglamento (D.S. 016-2024-JUS), así
                                    como estándares aplicables en USA para
                                    servicios digitales y privacidad del
                                    consumidor.
                                </p>

                                <div className="space-y-16">
                                    {/* 1. Datos que recopilamos */}
                                    <div id="datos-que-recopilamos">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                1
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Datos que recopilamos
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Podemos recopilar:
                                        </p>
                                        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                            {[
                                                'Nombre y apellidos',
                                                'Nombres constitutivos',
                                                'Correo electrónico',
                                                'Teléfono',
                                                'Documento de identidad',
                                                'Selfie y biometría facial',
                                                'Dirección IP y geolocalización',
                                                'Identificadores del dispositivo',
                                                'Device fingerprint',
                                                'Cookies y analytics',
                                                'Direcciones de billeteras tokenizadas',
                                                'Número de cuenta bancaria',
                                                'Tokens de tarjeta',
                                                'Historial transaccional',
                                                'Logs de seguridad y comportamiento',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <div className="mt-8 rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6">
                                            <p className="flex items-center gap-2 font-bold text-[#F29501]">
                                                <i className="fas fa-shield-halved"></i>
                                                Nunca almacenamos datos
                                                completos de tarjeta en texto
                                                plano.
                                            </p>
                                        </div>
                                    </div>

                                    {/* 2. Finalidades */}
                                    <div id="finalidades">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                2
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Finalidades
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Usamos los datos para:
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                'Crear y administrar la cuenta',
                                                'Verificar identidad y prevenir fraude',
                                                'Habilitar depósitos, retiros y payouts',
                                                'Cumplir KYC/KYB, AML, Travel Rule y controles regulatorios',
                                                'Mejorar seguridad y experiencia de usuario',
                                                'Detectar accesos sospechosos',
                                                'Soporte técnico',
                                                'Analítica y optimización del producto',
                                                'Cumplimiento legal y contractual',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 3. Base legal y consentimiento */}
                                    <div id="base-legal">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                3
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Base legal y consentimiento
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            El tratamiento se realiza sobre la
                                            base de:
                                        </p>
                                        <ul className="mb-8 space-y-3">
                                            <li className="flex items-center gap-3 font-medium text-[#515151] italic">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                Consentimiento expreso del
                                                usuario
                                            </li>
                                            <li className="flex items-center gap-3 text-[#515151]">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                Ejecución de la relación
                                                contractual
                                            </li>
                                            <li className="flex items-center gap-3 text-[#515151]">
                                                <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                Cumplimiento de obligaciones
                                                legales de Interés legítimo en
                                                seguridad, prevención de fraude
                                                y mejora del servicio.
                                            </li>
                                        </ul>
                                        <p className="text-[18px] leading-relaxed font-medium text-[#31374F]">
                                            Al usar DOAR, el usuario acepta de
                                            forma libre, previa, informada e
                                            inequívoca el tratamiento de sus
                                            datos.
                                        </p>
                                    </div>

                                    {/* 4. Compartición con terceros */}
                                    <div id="comparticion">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                4
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Compartición con terceros
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            DOAR comparte información
                                            estrictamente necesaria con terceros
                                            que participan en la prestación del
                                            servicio, incluyendo:
                                        </p>
                                        <ul className="mb-8 grid grid-cols-1 gap-3 md:grid-cols-2">
                                            {[
                                                'Proveedores de pagos',
                                                'Bancos',
                                                'Custodios institucionales',
                                                'Emisores de USDC',
                                                'Proveedores KYC/KYB',
                                                'Herramientas antifraude',
                                                'Analytics y cloud',
                                                'Autoridades regulatorias cuando la ley lo requiera',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="text-[#515151]">
                                            Las transferencias internacionales
                                            se realizan bajo salvaguardas
                                            contractuales y estándares
                                            equivalentes de protección.
                                        </p>
                                    </div>

                                    {/* 5. Conservación */}
                                    <div id="conservacion">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                5
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Conservación
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Los datos serán conservados durante
                                            el tiempo necesario para:
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                'Mantener la cuenta activa',
                                                'Cumplir obligaciones legales y regulatorias',
                                                'Atender auditorías, reclamos o disputas',
                                                'Cumplir obligaciones AML y registros de seguridad',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 6. Derechos del usuario */}
                                    <div id="derechos">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                6
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Derechos del usuario
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            El usuario podrá ejercer sus
                                            derechos de:
                                        </p>
                                        <div className="mb-8 flex flex-wrap gap-2">
                                            {[
                                                'Acceso',
                                                'Rectificación',
                                                'Cancelación',
                                                'Oposición',
                                                'Portabilidad',
                                                'Revocación del consentimiento',
                                                'Limitación del tratamiento',
                                            ].map((item, idx) => (
                                                <span
                                                    key={idx}
                                                    className="rounded-full bg-[#EBF0F5] px-4 py-1 text-[14px] font-semibold text-[#31374F]"
                                                >
                                                    {item}
                                                </span>
                                            ))}
                                        </div>
                                        <p className="text-[#515151]">
                                            Para dudas o consultas sobre sus
                                            derechos comuníquese al correo
                                            indicado en el punto 10 de esta
                                            pagina web
                                        </p>
                                    </div>

                                    {/* 7. Seguridad */}
                                    <div id="seguridad">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                7
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Seguridad
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Aplicamos medidas técnicas,
                                            organizativas y legales alineadas
                                            con estándares internacionales de
                                            seguridad, incluyendo:
                                        </p>
                                        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                            {[
                                                'Cifrado',
                                                'Tokenización',
                                                'Segregación de accesos',
                                                'Monitoreo continuo',
                                                'Registros auditables',
                                                'Autenticación reforzada',
                                                'Controles antifraude',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#F29501]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                        <p className="mt-6 text-[#515151]">
                                            En caso de incidentes de seguridad
                                            relevantes, DOAR notificará conforme
                                            a la normativa aplicable.
                                        </p>
                                    </div>

                                    {/* 8. Cookies */}
                                    <div id="cookies">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                8
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Cookies
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Usamos cookies y tecnologías
                                            similares para autenticación,
                                            preferencias, analítica, prevención
                                            de fraude y rendimiento.
                                        </p>
                                        <p className="text-[#515151]">
                                            El usuario puede administrar cookies
                                            desde su navegador o desde el banner
                                            de consentimiento.
                                        </p>
                                    </div>

                                    {/* 9. Restricción por edad */}
                                    <div id="restriccion-edad">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                9
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Restricción por edad
                                            </h2>
                                        </div>
                                        <p className="text-[#515151]">
                                            DOAR está dirigido únicamente a
                                            usuarios mayores de edad conforme a
                                            USA y Perú. No recopilamos
                                            intencionalmente datos de menores.
                                        </p>
                                    </div>

                                    {/* 10. Contacto de privacidad */}
                                    <div
                                        id="contacto"
                                        className="rounded-3xl bg-[#2A3045] p-8 text-white md:p-12"
                                    >
                                        <div className="mb-8 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                10
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-white md:text-[32px]">
                                                Contacto de privacidad
                                            </h2>
                                        </div>
                                        <p className="mb-8 text-[18px] text-white/70">
                                            Para solicitudes relacionadas con
                                            privacidad, datos personales o
                                            ejercicio de derechos:
                                        </p>
                                        <a
                                            href="mailto:support@doar.tech"
                                            className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                                        >
                                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                                                <i className="fas fa-envelope text-xl text-white"></i>
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium tracking-wider text-white/50 uppercase">
                                                    Email de contacto
                                                </p>
                                                <p className="text-xl font-bold text-white">
                                                    support@doar.tech
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
}
