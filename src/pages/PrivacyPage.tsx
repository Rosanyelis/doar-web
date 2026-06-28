import { Helmet } from 'react-helmet-async';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import LegalHero from '../components/web/LegalHero';

const sections = [
    {
        id: 'introduccion',
        title: 'Introducción',
        content: (
            <p className="mb-4 text-[#515151]">
                La presente Política de Privacidad regula la recopilación, uso, almacenamiento, protección y tratamiento de datos personales realizado por DOAR en relación con el acceso y uso de la plataforma, aplicaciones, APIs, funcionalidades e infraestructura digital asociada a los servicios ofrecidos.
            </p>
        ),
        extra: (
            <p className="text-[#515151]">
                DOAR mantiene un enfoque orientado a la protección de datos, seguridad operativa, prevención de fraude, gestión de riesgos y cumplimiento normativo mediante el uso de infraestructura tecnológica y proveedores especializados.
            </p>
        ),
        notice: 'Al utilizar DOAR, el usuario acepta el tratamiento de sus datos personales conforme a esta Política de Privacidad.',
    },
    {
        id: 'alcance',
        title: 'Alcance de esta política',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La presente Política de Privacidad aplica al tratamiento de datos personales realizado por DOAR en relación con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'La plataforma DOAR',
                        'Aplicaciones web y móviles',
                        'Interfaces de programación (APIs)',
                        'Procesos de registro y verificación',
                        'Servicios de soporte',
                        'Funcionalidades de pago, transferencia y liquidación',
                        'Sitios web y canales oficiales de comunicación',
                        'Herramientas tecnológicas utilizadas para la prestación de servicios',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Esta Política describe cómo DOAR recopila, utiliza, comparte, protege y conserva información relacionada con usuarios, clientes potenciales, representantes empresariales y otras personas que interactúan con la plataforma o sus servicios.
                </p>
            </>
        ),
        final: 'El tratamiento de datos personales se realiza con el objetivo de proporcionar servicios, cumplir obligaciones legales, gestionar riesgos, prevenir fraude, mantener la seguridad de la plataforma y mejorar la experiencia de los usuarios.',
    },
    {
        id: 'datos-recopilados',
        title: 'Datos que podemos recopilar',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y/o sus proveedores especializados podrán recopilar información relacionada con:
                </p>
                <h3 className="mb-3 text-[18px] font-bold text-[#31374F]">Información de Identidad</h3>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Nombre y apellidos',
                        'Fecha de nacimiento',
                        'Nacionalidad',
                        'Documento de identidad',
                        'Número de identificación fiscal',
                        'Información empresarial',
                        'Información de beneficiarios finales (UBO)',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <h3 className="mb-3 text-[18px] font-bold text-[#31374F]">Información de Contacto</h3>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Correo electrónico',
                        'Número telefónico',
                        'Dirección',
                        'País de residencia',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <h3 className="mb-3 text-[18px] font-bold text-[#31374F]">Información Biométrica y de Verificación</h3>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Selfie biométrica',
                        'Validación facial',
                        'Detección de vida (liveness detection)',
                        'Video de verificación',
                        'OCR documental',
                        'Validación documental',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <h3 className="mb-3 text-[18px] font-bold text-[#31374F]">Información Técnica y de Seguridad</h3>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Dirección IP',
                        'Geolocalización aproximada',
                        'Identificadores de dispositivo',
                        'Información del navegador',
                        'Sistema operativo',
                        'Metadatos técnicos',
                        'Registros operativos',
                        'Registros de seguridad',
                        'Cookies y tecnologías similares',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <h3 className="mb-3 text-[18px] font-bold text-[#31374F]">Información Financiera y Operativa</h3>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Historial transaccional',
                        'Información bancaria',
                        'Información de cuentas de pago',
                        'Tokens de pago cuando corresponda',
                        'Información de liquidación',
                        'Metadatos operativos',
                        'Información relacionada con gestión de riesgos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
            </>
        ),
        notice: 'DOAR no almacena información completa de tarjetas de pago en texto plano.',
    },
    {
        id: 'finalidades',
        title: 'Finalidades del tratamiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La información recopilada podrá utilizarse para:
                </p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Crear y administrar cuentas de usuario',
                        'Verificar identidad (KYC)',
                        'Verificar empresas (KYB)',
                        'Identificar beneficiarios finales (UBO)',
                        'Prevenir fraude',
                        'Aplicar controles AML y de sanciones',
                        'Realizar monitoreo transaccional',
                        'Gestionar riesgos operativos',
                        'Habilitar funcionalidades de la plataforma',
                        'Procesar validaciones de cumplimiento',
                        'Detectar actividad inusual o sospechosa',
                        'Mejorar la experiencia de usuario',
                        'Brindar soporte técnico',
                        'Gestionar incidentes operativos',
                        'Mantener registros y trazabilidad',
                        'Cumplir obligaciones legales y regulatorias',
                        'Mejorar servicios, productos e infraestructura tecnológica',
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
        id: 'base-legal',
        title: 'Base legal del tratamiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    El tratamiento de datos podrá realizarse sobre la base de:
                </p>
                <ul className="space-y-3">
                    {[
                        'Consentimiento del usuario',
                        'Ejecución de la relación contractual',
                        'Cumplimiento de obligaciones legales',
                        'Prevención de fraude',
                        'Gestión de riesgos',
                        'Seguridad operativa',
                        'Cumplimiento de obligaciones AML/KYC/KYB',
                        'Interés legítimo relacionado con la protección de la infraestructura y los servicios',
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
        id: 'verificacion',
        title: 'Verificación, cumplimiento y gestión de riesgos',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y/o sus proveedores especializados podrán realizar actividades relacionadas con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Verificación empresarial',
                        'Identificación de beneficiarios finales',
                        'Screening de sanciones',
                        'Screening PEP',
                        'Monitoreo transaccional',
                        'Evaluaciones de riesgo',
                        'Prevención de fraude',
                        'Detección de anomalías',
                        'Revisiones de cumplimiento',
                        'Controles de seguridad',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Las operaciones podrán estar sujetas a revisión automática o manual cuando sea necesario.
                </p>
            </>
        ),
    },
    {
        id: 'infraestructura',
        title: 'Infraestructura y proveedores especializados',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá compartir información estrictamente necesaria con proveedores especializados relacionados con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Procesamiento de pagos',
                        'Infraestructura wallet administrada',
                        'Servicios de cumplimiento',
                        'Gestión de riesgos',
                        'Liquidación y desembolsos',
                        'Infraestructura cloud',
                        'Seguridad tecnológica',
                        'Analítica y monitoreo operacional',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El acceso a la información estará limitado a lo necesario para la prestación de los servicios correspondientes.
                </p>
            </>
        ),
    },
    {
        id: 'transferencias',
        title: 'Transferencias internacionales',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    El usuario reconoce y acepta que determinada información podrá ser almacenada, procesada o transferida internacionalmente mediante:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Infraestructura cloud',
                        'Proveedores tecnológicos especializados',
                        'Sistemas de cumplimiento',
                        'Infraestructura financiera',
                        'Herramientas antifraude',
                        'Plataformas de gestión de riesgos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Las transferencias se realizarán utilizando medidas contractuales y estándares razonables de protección de datos.
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
                    La información podrá conservarse durante el tiempo necesario para:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cumplimiento regulatorio',
                        'Obligaciones AML/KYC/KYB',
                        'Auditorías',
                        'Prevención de fraude',
                        'Gestión de riesgos',
                        'Seguridad operativa',
                        'Resolución de disputas',
                        'Investigación de incidentes',
                        'Requerimientos legales',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    Los períodos de conservación podrán variar según la jurisdicción aplicable y los servicios utilizados.
                </p>
            </>
        ),
    },
    {
        id: 'seguridad',
        title: 'Seguridad de la información',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y sus proveedores especializados aplican medidas razonables orientadas a proteger la información, incluyendo:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cifrado',
                        'Tokenización',
                        'Accesos restringidos',
                        'Segregación de información',
                        'Monitoreo continuo',
                        'Registros auditables',
                        'Controles antifraude',
                        'Gestión de vulnerabilidades',
                        'Evaluación de anomalías',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">
                    Sin perjuicio de ello, ningún sistema tecnológico puede garantizar seguridad absoluta.
                </p>
            </>
        ),
    },
    {
        id: 'cookies',
        title: 'Cookies y tecnologías similares',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá utilizar cookies y tecnologías similares para:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Autenticación',
                        'Seguridad',
                        'Prevención de fraude',
                        'Rendimiento',
                        'Analítica',
                        'Preferencias de usuario',
                        'Optimización tecnológica',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario podrá gestionar determinadas preferencias desde su navegador o configuraciones disponibles.
                </p>
            </>
        ),
    },
    {
        id: 'disponibilidad',
        title: 'Disponibilidad y restricciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad de determinadas funcionalidades podrá variar según:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'País de residencia',
                        'Regulación aplicable',
                        'Infraestructura disponible',
                        'Evaluaciones de riesgo',
                        'Restricciones jurisdiccionales',
                        'Proveedores especializados utilizados',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá limitar determinadas funcionalidades por motivos regulatorios, operativos, de cumplimiento o seguridad.
                </p>
            </>
        ),
    },
    {
        id: 'derechos',
        title: 'Derechos del usuario',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    El usuario podrá ejercer, cuando corresponda:
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                    {[
                        'Acceso',
                        'Rectificación',
                        'Actualización',
                        'Cancelación',
                        'Oposición',
                        'Portabilidad',
                        'Revocación del consentimiento',
                        'Limitación del tratamiento',
                    ].map((item) => (
                        <span
                            key={item}
                            className="rounded-full bg-[#EBF0F5] px-4 py-1 text-[14px] font-semibold text-[#31374F]"
                        >
                            {item}
                        </span>
                    ))}
                </div>
                <p className="text-[#515151]">
                    Lo anterior sujeto a obligaciones regulatorias, AML y de seguridad aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'menores',
        title: 'Menores de edad',
        content: (
            <div className="space-y-3">
                <p className="text-[#515151]">DOAR está dirigido exclusivamente a personas mayores de edad conforme a la legislación aplicable.</p>
                <p className="text-[#515151]">DOAR no recopila intencionalmente información de menores de edad.</p>
            </div>
        ),
    },
    {
        id: 'actualizaciones',
        title: 'Actualizaciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR podrá modificar esta Política de Privacidad para adaptarla a:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cambios regulatorios',
                        'Nuevos riesgos',
                        'Nuevas tecnologías',
                        'Cambios operativos',
                        'Nuevos proveedores',
                        'Mejoras de seguridad',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La versión vigente estará disponible a través de los canales oficiales de la plataforma.
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
                    Para consultas relacionadas con privacidad, protección de datos o ejercicio de derechos:
                </p>
                <div className="space-y-6  ">
                    <a
                        href="mailto:support@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20 mr-4"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Email de contacto</p>
                            <p className="text-xl font-bold text-white">support@doar.tech</p>
                        </div>
                    </a>

                    <a
                        href="mailto:privacy@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Privacidad</p>
                            <p className="text-xl font-bold text-white">privacy@doar.tech</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Política de Privacidad | DOAR</title>
                <meta name="description" content="Política de Privacidad de DOAR. Conozca cómo recopilamos, usamos, almacenamos y protegemos sus datos personales en nuestra plataforma de orquestación financiera." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/privacidad" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Política de Privacidad | DOAR" />
                <meta property="og:description" content="Política de Privacidad: cómo protegemos sus datos personales en DOAR." />
                <meta property="og:url" content="https://doar.tech/privacidad" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Política de Privacidad | DOAR" />
                <meta name="twitter:description" content="Política de Privacidad: cómo protegemos sus datos personales." />
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Política de Privacidad"
                    subtitle="Última actualización: Junio 2026"
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

                                            {section.notice && (
                                                <div className="mt-6 rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6">
                                                    <p className="flex items-center gap-2 font-bold text-[#F29501]">
                                                        <i className="fas fa-shield-halved"></i>
                                                        {section.notice}
                                                    </p>
                                                </div>
                                            )}

                                            {section.extra && (
                                                <div className="mt-4">{section.extra}</div>
                                            )}

                                            {section.final && (
                                                <p className="mt-4 text-[#515151]">{section.final}</p>
                                            )}
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
