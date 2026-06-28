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
                    La presente Declaración de Riesgos tiene como finalidad informar a los usuarios sobre los riesgos asociados al uso de la plataforma DOAR y de la infraestructura tecnológica, financiera y operativa utilizada para la prestación de determinados servicios.
                </p>
                <p className="mb-4 text-[#515151]">
                    Al utilizar DOAR, el usuario reconoce que toda actividad digital puede involucrar riesgos operativos, tecnológicos, regulatorios y asociados a terceros especializados.
                </p>
                <p className="rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6 text-[#515151]">
                    Esta Declaración de Riesgos debe leerse conjuntamente con los Términos y Condiciones, la Política de Privacidad y demás documentos publicados por DOAR.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-terceros',
        title: 'Riesgo de terceros',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La plataforma depende parcialmente de infraestructura y servicios proporcionados por terceros especializados.
                </p>
                <p className="mb-4 text-[#515151]">Estos proveedores pueden participar en procesos relacionados con:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Procesamiento de pagos',
                        'Servicios de cumplimiento',
                        'Gestión de riesgos',
                        'Infraestructura wallet administrada',
                        'Liquidación y desembolsos',
                        'Infraestructura tecnológica',
                        'Servicios cloud',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad, velocidad y funcionamiento de determinadas funcionalidades puede verse afectada por el desempeño de dichos proveedores.
                </p>
                <p className="italic text-[#515151]">
                    DOAR no garantiza disponibilidad continua cuando existan dependencias externas fuera de su control razonable.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-operativo',
        title: 'Riesgo operativo',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Los servicios digitales pueden verse afectados por situaciones como:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Fallas de conectividad',
                        'Interrupciones de internet',
                        'Mantenimiento programado',
                        'Incidentes tecnológicos',
                        'Errores humanos',
                        'Fallas de software',
                        'Problemas de integración',
                        'Interrupciones de servicios de terceros',
                        'Eventos de fuerza mayor',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá limitar temporalmente determinadas funcionalidades cuando sea necesario para proteger la seguridad, estabilidad o integridad de la plataforma.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-regulatorio',
        title: 'Riesgo regulatorio',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La regulación aplicable a servicios financieros digitales, pagos, cumplimiento normativo y tecnologías relacionadas puede variar entre jurisdicciones y cambiar con el tiempo.
                </p>
                <p className="mb-4 text-[#515151]">Como consecuencia:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Algunas funcionalidades pueden modificarse',
                        'Algunos servicios pueden suspenderse',
                        'Pueden requerirse verificaciones adicionales',
                        'Determinados usuarios o jurisdicciones pueden quedar restringidos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La disponibilidad de servicios dependerá de los requisitos regulatorios aplicables y de la capacidad operativa de los proveedores especializados.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-cumplimiento',
        title: 'Riesgo de cumplimiento y fraude',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR y sus proveedores especializados aplican controles relacionados con:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Screening de sanciones',
                        'Monitoreo transaccional',
                        'Prevención de fraude',
                        'Evaluaciones de riesgo',
                        'Controles AML',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">Como resultado de estos controles:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Algunas operaciones podrán retrasarse',
                        'Algunas operaciones podrán requerir revisión adicional',
                        'Determinadas funcionalidades podrán limitarse',
                        'Podrá solicitarse documentación adicional',
                        'Algunas operaciones podrán ser rechazadas',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá restringir servicios cuando existan alertas de cumplimiento o indicadores de riesgo relevantes.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-seguridad',
        title: 'Riesgo de seguridad',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Aunque DOAR implementa medidas de seguridad razonables, ningún sistema digital es completamente inmune a riesgos tecnológicos.
                </p>
                <p className="mb-4 text-[#515151]">Los riesgos pueden incluir:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Acceso no autorizado',
                        'Robo de credenciales',
                        'Phishing',
                        'Malware',
                        'Ingeniería social',
                        'Vulnerabilidades tecnológicas',
                        'Ataques cibernéticos',
                        'Compromiso de dispositivos',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario es responsable de proteger sus credenciales, dispositivos y métodos de autenticación.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-disponibilidad',
        title: 'Riesgo de disponibilidad del servicio',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad de determinadas funcionalidades podrá variar según:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'País de residencia',
                        'Restricciones regulatorias',
                        'Disponibilidad de infraestructura',
                        'Disponibilidad de proveedores especializados',
                        'Controles de cumplimiento',
                        'Evaluaciones de riesgo',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá habilitar, restringir o suspender funcionalidades por razones operativas, regulatorias o de seguridad.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-liquidacion',
        title: 'Riesgo de liquidación y procesamiento',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Algunas operaciones pueden depender de:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Infraestructura bancaria',
                        'Redes de pago',
                        'Proveedores de liquidación',
                        'Procesos de validación',
                        'Revisiones de cumplimiento',
                        'Disponibilidad operativa de terceros',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">
                    Los tiempos de procesamiento y liquidación pueden variar dependiendo de factores fuera del control directo de DOAR.
                </p>
                <p className="italic text-[#515151]">
                    DOAR coordina procesos operativos relacionados con la continuidad del servicio, pero no garantiza tiempos específicos cuando intervienen terceros especializados.
                </p>
            </>
        ),
    },
    {
        id: 'riesgo-tecnologico',
        title: 'Riesgo tecnológico',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR utiliza infraestructura tecnológica propia y de terceros para operar la plataforma.
                </p>
                <p className="mb-4 text-[#515151]">Como ocurre con cualquier sistema digital, pueden existir riesgos asociados a:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Actualizaciones tecnológicas',
                        'Errores de software',
                        'Fallas de integración',
                        'Interrupciones de APIs externas',
                        'Incidentes de infraestructura cloud',
                        'Problemas de interoperabilidad',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR trabaja continuamente para reducir estos riesgos, pero no puede eliminarlos completamente.
                </p>
            </>
        ),
    },
    {
        id: 'limitacion-responsabilidad',
        title: 'Limitación de responsabilidad',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR no será responsable por:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Interrupciones fuera de su control razonable',
                        'Fallas de terceros especializados',
                        'Cambios regulatorios',
                        'Restricciones jurisdiccionales',
                        'Demoras asociadas a proveedores externos',
                        'Eventos de fuerza mayor',
                        'Uso indebido de la plataforma por parte del usuario',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El uso de la plataforma se realiza bajo responsabilidad del usuario y dentro de las limitaciones operativas y regulatorias aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'aceptacion-riesgos',
        title: 'Aceptación de riesgos',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Al utilizar DOAR, el usuario reconoce y acepta:</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Los riesgos inherentes a los servicios digitales',
                        'La participación de proveedores especializados',
                        'La posibilidad de verificaciones y revisiones de cumplimiento',
                        'La posibilidad de limitaciones operativas',
                        'La existencia de riesgos tecnológicos',
                        'La existencia de riesgos regulatorios',
                        'La posibilidad de interrupciones o retrasos asociados a terceros',
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
                <p className="mb-4 text-[#515151]">DOAR podrá actualizar esta Declaración de Riesgos para reflejar:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cambios regulatorios',
                        'Nuevos riesgos identificados',
                        'Cambios operativos',
                        'Nuevos proveedores',
                        'Mejoras tecnológicas',
                        'Nuevas funcionalidades',
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
                    Para consultas relacionadas con riesgos, cumplimiento o seguridad:
                </p>
                <div className="space-y-6">
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
                        href="mailto:compliance@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Cumplimiento</p>
                            <p className="text-xl font-bold text-white">compliance@doar.tech</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

export default function RiskPage() {
    return (
        <div className="min-h-screen bg-white font-sans selection:bg-[#F29501] selection:text-white">
            <Helmet>
                <title>Declaración de Riesgos | DOAR</title>
                <meta name="description" content="Conozca los riesgos asociados al uso de la plataforma DOAR, incluyendo riesgos operativos, tecnológicos, regulatorios y de terceros especializados." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://doar.tech/declaracion-riesgo" />
                <meta property="og:title" content="Declaración de Riesgos | DOAR" />
                <meta property="og:description" content="Declaración de riesgos de la plataforma DOAR: riesgos operativos, tecnológicos, regulatorios y de terceros." />
                <meta property="og:url" content="https://doar.tech/declaracion-riesgo" />
                <meta property="og:image" content="https://doar.tech/assets/institucional/diagram_01.png" />
                <meta property="og:locale" content="es_LA" />
                <meta property="og:site_name" content="DOAR" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="Declaración de Riesgos | DOAR" />
                <meta name="twitter:description" content="Declaración de riesgos de la plataforma DOAR." />
            </Helmet>

            <Navbar />

            <main>
                <LegalHero
                    title="Declaración de Riesgos"
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
