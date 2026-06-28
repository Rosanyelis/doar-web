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
                    El presente Consentimiento Biométrico regula el tratamiento de datos biométricos y tecnologías de validación de identidad utilizadas por DOAR y/o sus proveedores externos especializados como parte de los procesos de seguridad, cumplimiento, prevención de fraude y verificación de identidad.
                </p>
                <p className="rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6 text-[#515151]">
                    Al aceptar este consentimiento, el usuario autoriza expresamente el tratamiento de sus datos biométricos conforme a los términos aquí establecidos.
                </p>
            </>
        ),
    },
    {
        id: 'datos-biometricos',
        title: 'Datos biométricos que pueden ser recopilados',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y/o sus proveedores externos podrán recopilar, procesar y analizar información biométrica y tecnológica relacionada con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Selfie facial',
                        'Reconocimiento facial',
                        'Liveness detection',
                        'Validación biométrica facial',
                        'Video de verificación',
                        'Coincidencia facial documento/selfie',
                        'OCR documental',
                        'Validación de autenticidad documental',
                        'Device intelligence',
                        'Device fingerprinting',
                        'Metadatos de verificación',
                        'Señales antifraude',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La información podrá ser procesada mediante herramientas automatizadas y sistemas de terceros especializados.
                </p>
            </>
        ),
    },
    {
        id: 'finalidades',
        title: 'Finalidades del tratamiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Los datos biométricos podrán utilizarse para:</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad (KYC/KYB)',
                        'Prevención de fraude',
                        'Prevención de suplantación de identidad',
                        'Cumplimiento AML',
                        'Screening y controles regulatorios',
                        'Validaciones antifraude',
                        'Seguridad de la cuenta',
                        'Detección de actividad sospechosa',
                        'Protección de la infraestructura',
                        'Validación de autenticidad documental',
                        'Prevención de accesos no autorizados',
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
        id: 'proveedores-externos',
        title: 'Proveedores externos',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá utilizar proveedores externos especializados para procesos biométricos, antifraude y de verificación.
                </p>
                <p className="mb-4 text-[#515151]">Los proveedores podrán incluir infraestructura equivalente a:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Sumsub',
                        'Stripe',
                        'Fireblocks',
                        'TRM Labs',
                        'Alessa',
                        'Proveedores de device intelligence',
                        'Herramientas antifraude',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    según disponibilidad jurisdiccional y operativa.
                </p>
            </>
        ),
    },
    {
        id: 'base-legal',
        title: 'Base legal y consentimiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">El tratamiento biométrico se realiza sobre la base de:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Consentimiento expreso del usuario',
                        'Prevención de fraude',
                        'Seguridad de la plataforma',
                        'Cumplimiento regulatorio',
                        'Obligaciones AML/KYC',
                        'Protección de infraestructura digital',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario reconoce que determinadas funcionalidades pueden requerir validación biométrica obligatoria.
                </p>
            </>
        ),
    },
    {
        id: 'conservacion',
        title: 'Conservación de datos',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La información biométrica podrá conservarse durante el período necesario para:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cumplimiento regulatorio',
                        'Prevención de fraude',
                        'Auditorías',
                        'Investigación de incidentes',
                        'Seguridad operativa',
                        'Obligaciones AML',
                        'Resolución de disputas',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Los períodos de conservación podrán variar según la jurisdicción y los proveedores utilizados.
                </p>
            </>
        ),
    },
    {
        id: 'seguridad',
        title: 'Seguridad y protección',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y sus proveedores externos aplican medidas técnicas y organizativas orientadas a proteger la información biométrica, incluyendo:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cifrado',
                        'Tokenización',
                        'Acceso restringido',
                        'Segregación de información',
                        'Monitoreo de seguridad',
                        'Registros auditables',
                        'Controles antifraude',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    Sin perjuicio de ello, ningún sistema tecnológico es completamente inmune a riesgos operativos o de ciberseguridad.
                </p>
            </>
        ),
    },
    {
        id: 'transferencia-internacional',
        title: 'Transferencia y procesamiento internacional',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    El usuario reconoce y acepta que la información biométrica puede ser procesada, almacenada o transferida internacionalmente mediante proveedores externos especializados y servicios cloud utilizados por DOAR.
                </p>
                <p className="text-[#515151]">
                    Las transferencias podrán realizarse bajo medidas contractuales y estándares razonables de protección de información.
                </p>
            </>
        ),
    },
    {
        id: 'negativa-retiro',
        title: 'Negativa o retiro del consentimiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    El usuario podrá negarse a proporcionar información biométrica o retirar su consentimiento.
                </p>
                <p className="mb-4 text-[#515151]">Sin embargo, determinadas funcionalidades de la Plataforma pueden:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'No estar disponibles',
                        'Ser limitadas',
                        'Requerir verificaciones adicionales',
                        'Restringirse parcialmente',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    cuando la validación biométrica sea necesaria para fines de cumplimiento, seguridad o prevención de fraude.
                </p>
            </>
        ),
    },
    {
        id: 'derechos',
        title: 'Derechos del usuario',
        content: (
            <>
                <p className="mb-4 text-[#515151]">El usuario podrá ejercer, según corresponda:</p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {['Acceso', 'Rectificación', 'Cancelación', 'Oposición', 'Revocación del consentimiento', 'Limitación del tratamiento'].map(
                        (item) => (
                            <span
                                key={item}
                                className="rounded-full bg-[#EBF0F5] px-4 py-1 text-[14px] font-semibold text-[#31374F]"
                            >
                                {item}
                            </span>
                        )
                    )}
                </div>
                <p className="text-[#515151]">
                    conforme a la normativa aplicable y sujeto a obligaciones regulatorias y de seguridad.
                </p>
            </>
        ),
    },
    {
        id: 'aceptacion-expresa',
        title: 'Aceptación expresa',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Al aceptar este consentimiento, el usuario reconoce y autoriza expresamente:</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'El tratamiento de datos biométricos',
                        'El uso de tecnologías de reconocimiento facial',
                        'El uso de validación documental automatizada',
                        'El uso de herramientas antifraude',
                        'El procesamiento mediante proveedores externos especializados',
                        'El monitoreo orientado a seguridad y compliance',
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
        id: 'actualizaciones',
        title: 'Actualizaciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR podrá modificar el presente Consentimiento Biométrico para adaptarlo a:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cambios regulatorios',
                        'Nuevos riesgos',
                        'Nuevas tecnologías',
                        'Nuevos proveedores',
                        'Mejoras de seguridad',
                        'Cambios operativos',
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
                    Para consultas relacionadas con privacidad, biometría o protección de datos:
                </p>
                <div className="space-y-6">
                    <a
                        href="mailto:support@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Email de contacto</p>
                            <p className="text-xl font-bold text-white">support@doar.tech</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

export default function BiometricConsentPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Consentimiento Biométrico | DOAR</title>
                <meta name="description" content="Consentimiento para el tratamiento de datos biométricos y tecnologías de validación de identidad utilizadas por DOAR." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/consentimiento-biometrico" />
                <meta property="og:title" content="Consentimiento Biométrico | DOAR" />
                <meta property="og:description" content="Consentimiento para el tratamiento de datos biométricos de DOAR." />
                <meta property="og:url" content="https://doar.tech/consentimiento-biometrico" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Consentimiento Biométrico | DOAR" />
                <meta name="twitter:description" content="Consentimiento para el tratamiento de datos biométricos." />
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Consentimiento Biométrico"
                    subtitle="Última actualización: Mayo 2026"
                />

                <section className="py-20 md:py-32">
                    <div className="container mx-auto px-6">
                        <div className="mx-auto max-w-[850px]">
                            <div className="prose prose-lg prose-slate max-w-none">
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
