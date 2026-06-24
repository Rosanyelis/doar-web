import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LegalHero from '../components/web/LegalHero';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Términos y Condiciones | DOAR</title>
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Términos y Condiciones"
                    subtitle="Última actualización: Abril 2026"
                />

                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-[850px]">
                            <div className="prose prose-lg prose-slate max-w-none">
                                <div className="mb-12 rounded-2xl border border-gray-100 bg-gray-50 p-8">
                                    <h3 className="mb-4 text-[14px] font-bold tracking-widest text-[#F29501] uppercase">
                                        Entidad aplicable
                                    </h3>
                                    <p className="text-[17px] leading-relaxed font-medium text-[#31374F]">
                                        DOAR LLC (Delaware, USA) y DOAR LATAM
                                        S.A.C. (Lima, Perú), según corresponda
                                        al país de residencia del usuario y al
                                        servicio utilizado.
                                    </p>
                                </div>

                                <p className="mb-12 text-[18px] leading-relaxed text-[#515151]">
                                    Estos Términos y Condiciones regulan el
                                    acceso y uso de la plataforma web,
                                    aplicación móvil, APIs y servicios
                                    tecnológicos ofrecidos por{' '}
                                    <strong className="text-[#31374F]">
                                        DOAR
                                    </strong>{' '}
                                    (la “Plataforma”). Al registrarte o utilizar
                                    DOAR, aceptas estos Términos de manera
                                    expresa, libre e informada.
                                </p>

                                <div className="space-y-16">
                                    {/* 1. Naturaleza del servicio */}
                                    <div id="naturaleza-servicio">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                1
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Naturaleza del servicio
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            DOAR es una plataforma tecnológica
                                            de orquestación de pagos y retiros
                                            que permite a los usuarios iniciar,
                                            visualizar, gestionar y dar
                                            seguimiento a movimientos de valor
                                            entre distintos países.
                                        </p>
                                        <p className="mb-6 text-[#515151]">
                                            DOAR no recibe, custodia, transmite
                                            ni liquida fondos en nombre propio.
                                            La ejecución de cobros, pagos,
                                            conversiones, custodia, emisión de
                                            stablecoins, validaciones de
                                            identidad y retiros es realizada por
                                            terceros regulados e instituciones
                                            autorizadas, incluyendo proveedores
                                            de pagos, entidades financieras,
                                            emisores de activos digitales,
                                            custodios y socios de cumplimiento.
                                        </p>
                                        <p className="border-l-2 border-[#FCCA01] pl-4 text-sm text-[#515151] italic">
                                            El usuario reconoce que determinados
                                            servicios pueden ser provistos por
                                            terceros como Stripe, PayPal,
                                            dLocal, Sumsub, AlessA, TRM, Circle,
                                            Fireblocks y otros aliados
                                            equivalentes.
                                        </p>
                                    </div>

                                    {/* 2. Elegibilidad */}
                                    <div id="elegibilidad">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                2
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Elegibilidad
                                            </h2>
                                        </div>
                                        <p className="text-[#515151]">
                                            Los servicios están disponibles
                                            únicamente para personas que sean
                                            mayores de edad conforme a la
                                            legislación aplicable en USA y Perú,
                                            y que tengan capacidad legal para
                                            contratar. DOAR podrá suspender o
                                            rechazar cuentas que no cumplan este
                                            requisito.
                                        </p>
                                    </div>

                                    {/* 3. Registro y verificación */}
                                    <div id="registro-verificacion">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                3
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Registro y verificación
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Para utilizar ciertas
                                            funcionalidades, el usuario deberá
                                            crear una cuenta y proporcionar
                                            información veraz, completa y
                                            actualizada. DOAR podrá requerir
                                            procesos de verificación de
                                            identidad (KYC/KYB), incluyendo
                                            documento oficial, selfie,
                                            biometría, validación bancaria y
                                            verificaciones antifraude.
                                        </p>
                                        <p className="mb-4 font-bold text-[#31374F]">
                                            El usuario es responsable de:
                                        </p>
                                        <ul className="space-y-3">
                                            {[
                                                'Mantener la confidencialidad de sus credenciales',
                                                'Proteger su dispositivo',
                                                'Notificar accesos no autorizados',
                                                'Actualizar sus datos cuando cambien',
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

                                    {/* 4. Uso permitido */}
                                    <div id="uso-permitido">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                4
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Uso permitido
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            El usuario acepta utilizar DOAR
                                            únicamente para fines lícitos.
                                        </p>
                                        <div className="mb-8 rounded-2xl border border-red-100 bg-red-50/30 p-6">
                                            <p className="mb-4 font-bold text-red-600">
                                                Está prohibido:
                                            </p>
                                            <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                                {[
                                                    'Usar la Plataforma para fraude',
                                                    'Lavado de activos o financiamiento ilícito',
                                                    'Utilizar identidades falsas',
                                                    'Intentar vulnerar la seguridad',
                                                    'Usar cuentas de terceros sin autorización',
                                                    'Jurisdicciones restringidas',
                                                    'Actividades contrarias a sanciones',
                                                ].map((item, idx) => (
                                                    <li
                                                        key={idx}
                                                        className="flex items-center gap-3 text-sm text-red-700/80"
                                                    >
                                                        <i className="fas fa-times-circle shrink-0"></i>
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            DOAR podrá suspender operaciones,
                                            congelar accesos o solicitar
                                            información adicional por razones de
                                            seguridad.
                                        </p>
                                        <p className="rounded-xl border border-gray-100 bg-gray-50 p-4 font-medium text-[#515151]">
                                            Asimismo DOAR podrá abrir o generar
                                            expedientes de sospechosos de lavado
                                            de activos u operaciones
                                            fraudulentas; cuando, bajo las leyes
                                            de USA y Peru se considere
                                            conveniente, informando a organismos
                                            como el FinCEN en USA y UIF en Peru.
                                        </p>
                                    </div>

                                    {/* 5. Servicios de terceros */}
                                    <div id="servicios-terceros">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                5
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Servicios de terceros
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            Algunas funcionalidades dependen de
                                            terceros regulados. DOAR actúa como
                                            capa de experiencia, trazabilidad y
                                            orquestación tecnológica. La
                                            disponibilidad de depósitos,
                                            retiros, payouts, conversiones y
                                            tiempos depende del proveedor
                                            externo y rail local.
                                        </p>
                                        <p className="font-semibold text-[#515151] text-[#F29501] italic">
                                            DOAR no garantiza tiempos exactos
                                            cuando la operación dependa de
                                            terceros.
                                        </p>
                                    </div>

                                    {/* 6. Riesgos y disponibilidad */}
                                    <div id="riesgos-disponibilidad">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                6
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Riesgos y disponibilidad
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            El usuario reconoce que los
                                            servicios pueden verse afectados por
                                            fallas de internet, mantenimiento,
                                            demoras bancarias, congestión
                                            blockchain o revisiones antifraude.
                                        </p>
                                        <p className="font-bold text-[#515151]">
                                            DOAR no será responsable por
                                            interrupciones fuera de su control
                                            razonable.
                                        </p>
                                    </div>

                                    {/* 7. Propiedad intelectual */}
                                    <div id="propiedad-intelectual">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                7
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Propiedad intelectual
                                            </h2>
                                        </div>
                                        <p className="text-[#515151]">
                                            Todo el software, diseño, marca
                                            DOAR™, interfaces, documentación,
                                            flujos y motores de conciliación son
                                            propiedad de DOAR o de sus
                                            licenciantes. No está permitido
                                            copiar, descompilar ni reutilizar la
                                            Plataforma sin autorización escrita.
                                        </p>
                                    </div>

                                    {/* 8. Suspensión y terminación */}
                                    <div id="suspension-terminacion">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                8
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Suspensión y terminación
                                            </h2>
                                        </div>
                                        <p className="mb-6 text-[#515151]">
                                            DOAR podrá limitar, suspender o
                                            cerrar cuentas por:
                                        </p>
                                        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                                            {[
                                                'Incumplimiento de estos Términos',
                                                'Riesgo de fraude',
                                                'Requerimiento legal o regulatorio',
                                                'Sanciones internacionales',
                                                'Inconsistencias de identidad',
                                                'Uso abusivo del servicio',
                                            ].map((item, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-center gap-3 text-[#515151]"
                                                >
                                                    <div className="h-1.5 w-1.5 rounded-full bg-[#FCCA01]" />
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>

                                    {/* 9. Ley aplicable y disputas */}
                                    <div id="ley-aplicable">
                                        <div className="mb-6 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                9
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                Ley aplicable y disputas
                                            </h2>
                                        </div>
                                        <ul className="mb-8 space-y-4">
                                            <li className="text-[#515151]">
                                                <strong className="text-[#31374F]">
                                                    USA:
                                                </strong>{' '}
                                                Las leyes del Estado de Delaware
                                                para la infraestructura
                                                tecnológica y servicios globales
                                                de DOAR LLC.
                                            </li>
                                            <li className="text-[#515151]">
                                                <strong className="text-[#31374F]">
                                                    Perú:
                                                </strong>{' '}
                                                Las leyes de la República del
                                                Perú para operaciones en
                                                Latinoamérica y protección al
                                                consumidor por DOAR LATAM S.A.C.
                                            </li>
                                        </ul>
                                        <p className="text-[#515151]">
                                            Las controversias se resolverán
                                            prioritariamente mediante
                                            negociación directa. Si no fuera
                                            posible, las partes se someten a la
                                            jurisdicción competente de Delaware
                                            y Perú según corresponda.
                                        </p>
                                    </div>

                                    {/* 10. Contacto legal */}
                                    <div
                                        id="contacto"
                                        className="rounded-3xl bg-[#2A3045] p-8 text-white md:p-12"
                                    >
                                        <div className="mb-8 flex items-center gap-4">
                                            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                10
                                            </span>
                                            <h2 className="text-[28px] font-extrabold text-white md:text-[32px]">
                                                Contacto legal
                                            </h2>
                                        </div>
                                        <p className="mb-8 text-[18px] text-white/70">
                                            Para consultas legales o
                                            contractuales sobre estos términos:
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
