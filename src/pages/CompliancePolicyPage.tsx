import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LegalHero from '../components/web/LegalHero';

const sections = [
    {
        id: 'introduccion',
        title: 'Introducción',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR es una plataforma tecnológica de orquestación financiera e interoperabilidad digital que coordina experiencia de usuario, procesos operativos e infraestructura especializada mediante proveedores externos independientes.
                </p>
                <p className="mb-4 text-[#515151]">
                    La Plataforma mantiene una política de cumplimiento orientada a la prevención de fraude, lavado de activos, financiamiento del terrorismo, evasión de sanciones y uso indebido de infraestructura financiera digital.
                </p>
                <p className="rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6 text-[#515151]">
                    La presente Política AML / KYC / KYB establece los lineamientos generales de verificación, monitoreo, control y evaluación de riesgo aplicables a usuarios, empresas y operaciones realizadas a través de la Plataforma.
                </p>
            </>
        ),
    },
    {
        id: 'alcance',
        title: 'Alcance',
        content: (
            <>
                <p className="mb-4 text-[#515151]">La presente política aplica a:</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Usuarios individuales',
                        'Empresas y comercios',
                        'Afiliados',
                        'Usuarios API',
                        'Partners operativos',
                        'Operaciones de entrada y salida de fondos',
                        'Operaciones relacionadas con activos digitales',
                        'Movimientos internos dentro de la Plataforma',
                        'Procesos de verificación y cumplimiento',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
    },
    {
        id: 'modelo-operativo',
        title: 'Modelo operativo',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR opera como una plataforma tecnológica de orquestación financiera conectada con proveedores especializados.
                </p>
                <p className="mb-4 text-[#515151]">
                    La Plataforma coordina experiencia, operación e infraestructura mediante un modelo de responsabilidades segregadas donde cada participante conserva funciones independientes.
                </p>
                <p className="mb-4 text-[#515151]">DOAR no actúa como:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Banco',
                        'Exchange',
                        'Custodio de activos digitales',
                        'Broker dealer',
                        'Institución financiera',
                        'Emisor de stablecoins',
                        'Red de pagos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">Las funciones relacionadas con:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Procesamiento de pagos',
                        'Conversión fiat/stablecoin',
                        'Custodia institucional',
                        'Verificación de identidad',
                        'Screening AML',
                        'Infraestructura wallet',
                        'Liquidación bancaria',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    pueden ser ejecutadas por proveedores externos especializados.
                </p>
            </>
        ),
    },
    {
        id: 'enfoque-riesgo',
        title: 'Enfoque basado en riesgo',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR aplica un enfoque de cumplimiento basado en riesgo (Risk-Based Approach).
                </p>
                <p className="mb-4 text-[#515151]">Los factores evaluados pueden incluir:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Jurisdicción',
                        'Tipo de usuario',
                        'Tipo de operación',
                        'Volumen transaccional',
                        'Frecuencia de actividad',
                        'Riesgo operativo',
                        'Riesgo reputacional',
                        'Riesgo de fraude',
                        'Coincidencias con listas de sanciones',
                        'Comportamientos anómalos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La Plataforma podrá incrementar controles y validaciones cuando se identifiquen niveles de riesgo elevados.
                </p>
            </>
        ),
    },
    {
        id: 'kyc',
        title: 'KYC — Know Your Customer',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá requerir procesos de verificación de identidad para usuarios individuales.
                </p>
                <p className="mb-4 text-[#515151]">Las validaciones pueden incluir:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Documento oficial de identidad',
                        'Selfie biométrica',
                        'Validación facial',
                        'Prueba de vida (Liveness Detection)',
                        'Verificación telefónica',
                        'Verificación de correo electrónico',
                        'Verificación bancaria',
                        'Device fingerprinting',
                        'Dirección IP',
                        'Geolocalización',
                        'Validaciones antifraude',
                        'Screening de sanciones',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Los procesos KYC podrán ser ejecutados mediante proveedores especializados de verificación de identidad.
                </p>
            </>
        ),
    },
    {
        id: 'kyb',
        title: 'KYB — Know Your Business',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Para usuarios corporativos y comerciales, DOAR podrá requerir procesos KYB.
                </p>
                <p className="mb-4 text-[#515151]">Las validaciones podrán incluir:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Razón social',
                        'Registro mercantil',
                        'Beneficiarios finales (UBO)',
                        'Representantes autorizados',
                        'Validación tributaria',
                        'Actividad económica',
                        'Licencias aplicables',
                        'Screening de sanciones',
                        'Estructura corporativa',
                        'Validación documental',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá solicitar documentación adicional según el perfil de riesgo de cada entidad.
                </p>
            </>
        ),
    },
    {
        id: 'monitoreo-operativo',
        title: 'Monitoreo operativo y transaccional',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá aplicar controles de monitoreo operativo y transaccional orientados a la detección de riesgos de fraude, cumplimiento y seguridad dentro de la Plataforma.
                </p>
                <p className="mb-4 text-[#515151]">Los controles pueden incluir:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Detección de actividad inusual',
                        'Reglas antifraude',
                        'Análisis de comportamiento',
                        'Velocity checks',
                        'Geolocalización anómala',
                        'Device intelligence',
                        'Revisión de patrones operativos',
                        'Alertas de riesgo',
                        'Controles de cumplimiento',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    Las operaciones podrán ser sujetas a revisión automática o manual cuando existan señales de riesgo operativo, fraude o cumplimiento.
                </p>
            </>
        ),
    },
    {
        id: 'screening',
        title: 'Screening y sanciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y sus proveedores especializados podrán realizar verificaciones contra:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Listas OFAC',
                        'Listas internacionales de sanciones',
                        'Personas Expuestas Políticamente (PEP)',
                        'Watchlists regulatorias',
                        'Listas AML',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La Plataforma podrá solicitar información adicional, restringir funcionalidades o rechazar operaciones cuando existan alertas de cumplimiento.
                </p>
            </>
        ),
    },
    {
        id: 'jurisdicciones-restringidas',
        title: 'Jurisdicciones restringidas',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá limitar o restringir acceso a usuarios o entidades relacionadas con:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Jurisdicciones sancionadas',
                        'Restricciones regulatorias',
                        'Riesgo AML elevado',
                        'Riesgo reputacional significativo',
                        'Limitaciones operativas',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La disponibilidad de servicios dependerá de la regulación aplicable y de la infraestructura disponible.
                </p>
            </>
        ),
    },
    {
        id: 'monitoreo-alertas',
        title: 'Monitoreo y alertas',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá utilizar herramientas internas y de terceros para:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Evaluación de riesgo',
                        'Detección de fraude',
                        'Monitoreo operativo',
                        'Monitoreo AML',
                        'Detección de anomalías',
                        'Seguridad transaccional',
                        'Trazabilidad de operaciones',
                        'Auditoría de eventos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">Las operaciones podrán ser:</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {['Marcadas', 'Escaladas', 'Revisadas', 'Limitadas', 'Rechazadas'].map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-[#EBF0F5] px-4 py-1 text-[14px] font-semibold text-[#31374F]"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-[#515151]">
                    según criterios de riesgo y cumplimiento.
                </p>
            </>
        ),
    },
    {
        id: 'conservacion',
        title: 'Conservación de información',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La información recopilada podrá conservarse durante el tiempo requerido para:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cumplimiento regulatorio',
                        'Prevención de fraude',
                        'Auditorías',
                        'Disputas',
                        'Investigación de incidentes',
                        'Seguridad operativa',
                        'Obligaciones AML',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Los períodos de conservación podrán variar según la jurisdicción aplicable.
                </p>
            </>
        ),
    },
    {
        id: 'infraestructura-terceros',
        title: 'Infraestructura de terceros',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá integrar proveedores especializados para procesos relacionados con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Verificación empresarial',
                        'Screening AML',
                        'Monitoreo transaccional',
                        'Evaluación de riesgo',
                        'Seguridad transaccional',
                        'Procesamiento de pagos',
                        'Infraestructura wallet',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Los proveedores utilizados podrán variar según disponibilidad operativa, jurisdicción aplicable y evolución de la infraestructura tecnológica de la Plataforma.
                </p>
            </>
        ),
    },
    {
        id: 'limitaciones-operativas',
        title: 'Limitaciones operativas',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad de determinadas funcionalidades puede depender de:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Validaciones regulatorias',
                        'Riesgo transaccional',
                        'Restricciones jurisdiccionales',
                        'Disponibilidad de terceros',
                        'Revisiones de cumplimiento',
                        'Límites operativos',
                        'Infraestructura tecnológica',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    DOAR no garantiza disponibilidad permanente ni tiempos exactos cuando existan dependencias externas.
                </p>
            </>
        ),
    },
    {
        id: 'actualizaciones',
        title: 'Actualizaciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR podrá modificar esta Política para reflejar:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cambios regulatorios',
                        'Cambios operativos',
                        'Nuevos proveedores',
                        'Nuevos riesgos',
                        'Mejoras de seguridad',
                        'Actualizaciones tecnológicas',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La versión vigente estará disponible en los canales oficiales de la Plataforma.
                </p>
            </>
        ),
    },
    {
        id: 'contacto',
        title: 'Contacto',
        content: (
            <div className="rounded-3xl bg-[#2A3045] p-8 text-white md:p-12">
                <p className="mb-6 text-white/70">
                    Para consultas relacionadas con cumplimiento, AML, KYC o KYB:
                </p>
                <div className="space-y-6">
                    <a
                        href="mailto:compliance@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20 mr-4"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Cumplimiento</p>
                            <p className="text-xl font-bold text-white">compliance@doar.tech</p>
                        </div>
                    </a>
                    <a
                        href="mailto:support@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Soporte</p>
                            <p className="text-xl font-bold text-white">support@doar.tech</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

export default function CompliancePolicyPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Política de Cumplimiento AML / KYC / KYB | DOAR</title>
                <meta name="description" content="Política de cumplimiento AML, KYC y KYB de DOAR. Lineamientos de verificación, monitoreo, control y evaluación de riesgo." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/politica-cumplimiento" />
                <meta property="og:title" content="Política de Cumplimiento AML / KYC / KYB | DOAR" />
                <meta property="og:description" content="Política de cumplimiento AML, KYC y KYB de DOAR: verificación, monitoreo y evaluación de riesgo." />
                <meta property="og:url" content="https://doar.tech/politica-cumplimiento" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Política de Cumplimiento | DOAR" />
                <meta name="twitter:description" content="Política de cumplimiento AML, KYC y KYB de DOAR." />
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Política de Cumplimiento"
                    subtitle="AML / KYC / KYB — Última actualización: Junio 2026"
                />

                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-[850px]">
                            <div className="prose prose-lg prose-slate max-w-none break-words overflow-x-hidden">
                                <div className="space-y-16">
                                    {sections.map((section, idx) => (
                                        <div key={section.id} id={section.id}>
                                            <div className="mb-6 flex items-center gap-4">
                                                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01] text-[18px] font-bold text-white shadow-lg shadow-[#F29501]/20">
                                                    {idx + 1}
                                                </span>
                                                <h2 className="text-[28px] font-extrabold text-[#31374F] md:text-[32px]">
                                                    {section.title}
                                                </h2>
                                            </div>
                                            {section.content}
                                        </div>
                                    ))}
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
