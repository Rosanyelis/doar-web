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
                    Los presentes Términos y Condiciones regulan el acceso, uso y participación en la plataforma DOAR, incluyendo aplicaciones, APIs, funcionalidades, infraestructura tecnológica y servicios asociados.
                </p>
                <p className="rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6 text-[#515151]">
                    Al registrarse, acceder o utilizar DOAR, el usuario acepta estos Términos y Condiciones, así como las políticas y documentos complementarios publicados por la plataforma.
                </p>
            </>
        ),
    },
    {
        id: 'alcance-servicios',
        title: 'Alcance de los servicios',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Los presentes Términos y Condiciones regulan el acceso y uso de las funcionalidades, productos y servicios puestos a disposición por DOAR a través de sus aplicaciones, sitios web, APIs e infraestructura tecnológica asociada.
                </p>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad de determinadas funcionalidades podrá variar según:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'La jurisdicción aplicable',
                        'La elegibilidad del usuario',
                        'Los requisitos regulatorios',
                        'Los controles de cumplimiento',
                        'La disponibilidad de infraestructura y proveedores especializados',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá incorporar, modificar, suspender o discontinuar funcionalidades de forma temporal o permanente cuando resulte necesario por razones operativas, regulatorias, de seguridad, cumplimiento o gestión de riesgos.
                </p>
            </>
        ),
    },
    {
        id: 'elegibilidad',
        title: 'Elegibilidad',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Los servicios de DOAR están disponibles únicamente para:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Personas mayores de edad',
                        'Empresas legalmente constituidas',
                        'Usuarios con capacidad legal para contratar',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá rechazar, restringir o cancelar solicitudes de acceso cuando existan razones regulatorias, operativas, de cumplimiento o de riesgo.
                </p>
            </>
        ),
    },
    {
        id: 'registro-verificacion',
        title: 'Registro y verificación',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Para acceder a determinadas funcionalidades, el usuario deberá:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Crear una cuenta',
                        'Proporcionar información veraz y actualizada',
                        'Completar los procesos de verificación requeridos',
                        'Cumplir con los controles de cumplimiento aplicables',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 font-bold text-[#31374F]">DOAR y/o sus proveedores especializados podrán aplicar:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'KYC (Know Your Customer)',
                        'KYB (Know Your Business)',
                        'Verificación documental',
                        'Verificación biométrica',
                        'Screening de sanciones',
                        'Screening PEP',
                        'Evaluaciones de riesgo',
                        'Controles antifraude',
                        'Monitoreo transaccional',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">Las operaciones podrán estar sujetas a revisión automática o manual.</p>
            </>
        ),
    },
    {
        id: 'servicios-disponibles',
        title: 'Servicios disponibles',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Dependiendo de la jurisdicción y elegibilidad del usuario, DOAR podrá ofrecer funcionalidades relacionadas con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Gestión de cuentas',
                        'Transferencias entre usuarios verificados',
                        'Servicios de pago',
                        'Solicitudes de retiro',
                        'Gestión de actividad transaccional',
                        'Herramientas de seguridad y cumplimiento',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La disponibilidad de los servicios podrá variar según criterios regulatorios, operativos y de riesgo.
                </p>
            </>
        ),
    },
    {
        id: 'responsabilidades-usuario',
        title: 'Responsabilidades del usuario',
        content: (
            <>
                <p className="mb-4 text-[#515151]">El usuario es responsable de:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Mantener la confidencialidad de sus credenciales',
                        'Proteger sus dispositivos',
                        'Proporcionar información exacta y actualizada',
                        'Notificar actividades no autorizadas',
                        'Utilizar la plataforma de forma lícita',
                        'Cumplir con la normativa aplicable',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario reconoce que determinadas operaciones podrán requerir validaciones adicionales.
                </p>
            </>
        ),
    },
    {
        id: 'retiros-titularidad',
        title: 'Retiros y titularidad de cuentas',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR únicamente permite retiros hacia instrumentos financieros pertenecientes al mismo titular verificado de la cuenta.
                </p>
                <p className="mb-4 text-[#515151]">Los retiros podrán realizarse únicamente a:</p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cuentas bancarias propias',
                        'Cuentas de pago propias',
                        'Instrumentos financieros previamente validados',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <div className="rounded-2xl border-l-4 border-[#F29501] bg-[#FFF9F0] p-6">
                    <p className="flex items-center gap-2 font-bold text-[#F29501]">
                        <i className="fas fa-shield-halved"></i>
                        No se permiten retiros a terceros.
                    </p>
                </div>
                <p className="mt-4 text-[#515151]">
                    DOAR podrá rechazar, retrasar o restringir solicitudes de retiro que no cumplan con los controles de titularidad o cumplimiento aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'usos-prohibidos',
        title: 'Usos prohibidos',
        content: (
            <>
                <p className="mb-4 text-[#515151]">Está prohibido utilizar DOAR para:</p>
                <div className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Lavado de activos',
                        'Financiamiento ilícito',
                        'Fraude',
                        'Suplantación de identidad',
                        'Actividades sancionadas',
                        'Operaciones ilegales',
                        'Uso indebido de cuentas',
                        'Manipulación de sistemas o infraestructura',
                        'Intentos de evasión de controles de cumplimiento',
                        'Actividades que infrinjan la legislación aplicable',
                    ].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50/40 px-4 py-3 text-[#515151]">
                            <i className="fas fa-times-circle shrink-0 text-red-400" />
                            {item}
                        </div>
                    ))}
                </div>
                <p className="text-[#515151]">
                    DOAR podrá restringir servicios o cancelar cuentas cuando detecte actividades prohibidas.
                </p>
            </>
        ),
    },
    {
        id: 'infraestructura-terceros',
        title: 'Infraestructura y servicios de terceros',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR integra proveedores especializados para soportar determinadas funcionalidades. Estos proveedores pueden participar en procesos relacionados con:
                </p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Verificación de identidad',
                        'Procesamiento de pagos',
                        'Infraestructura wallet administrada',
                        'Gestión de riesgos',
                        'Cumplimiento normativo',
                        'Liquidación y desembolsos',
                        'Seguridad tecnológica',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario reconoce que determinadas funcionalidades dependen de infraestructura y servicios operados por terceros especializados.
                </p>
            </>
        ),
    },
    {
        id: 'disponibilidad-limitaciones',
        title: 'Disponibilidad y limitaciones operativas',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    La disponibilidad de determinadas funcionalidades podrá variar según:
                </p>
                <ul className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'País de residencia',
                        'Regulación aplicable',
                        'Infraestructura disponible',
                        'Riesgo operativo',
                        'Riesgo de cumplimiento',
                        'Restricciones jurisdiccionales',
                        'Disponibilidad de proveedores especializados',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mb-4 text-[#515151]">DOAR podrá:</p>
                <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Limitar funcionalidades',
                        'Solicitar información adicional',
                        'Suspender operaciones temporalmente',
                        'Restringir cuentas',
                        'Rechazar determinadas operaciones',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="mt-4 text-[#515151]">
                    Cuando existan razones de seguridad, cumplimiento, gestión de riesgos o requerimientos regulatorios.
                </p>
            </>
        ),
    },
    {
        id: 'seguridad',
        title: 'Seguridad',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    DOAR y sus proveedores especializados implementan medidas orientadas a proteger la plataforma y la información de los usuarios.
                </p>
                <p className="mb-4 text-[#515151]">Estas medidas pueden incluir:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cifrado',
                        'Tokenización',
                        'Controles antifraude',
                        'Monitoreo continuo',
                        'Registros auditables',
                        'Gestión de vulnerabilidades',
                        'Evaluación de anomalías',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="italic text-[#515151]">No obstante, ningún sistema tecnológico puede garantizar seguridad absoluta.</p>
            </>
        ),
    },
    {
        id: 'propiedad-intelectual',
        title: 'Propiedad intelectual',
        content: (
            <p className="text-[#515151]">
                Todo el software, interfaces, marcas, diseños, documentación, procesos, dashboards y contenidos asociados a DOAR son propiedad de DOAR o de sus licenciantes. Queda prohibida la reproducción, modificación, distribución o utilización no autorizada de dichos elementos.
            </p>
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
                        'Uso indebido por parte del usuario',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    La utilización de la plataforma se realiza bajo responsabilidad del usuario y dentro de las limitaciones operativas y regulatorias aplicables.
                </p>
            </>
        ),
    },
    {
        id: 'suspension-terminacion',
        title: 'Suspensión y terminación',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR podrá limitar, suspender o cerrar cuentas cuando existan:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Riesgos de fraude',
                        'Alertas AML',
                        'Inconsistencias de identidad',
                        'Actividad sospechosa',
                        'Incumplimiento regulatorio',
                        'Violaciones a estos Términos y Condiciones',
                        'Requerimientos legales',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    DOAR podrá solicitar información adicional antes de restablecer funcionalidades restringidas.
                </p>
            </>
        ),
    },
    {
        id: 'privacidad-documentos',
        title: 'Privacidad y documentos relacionados',
        content: (
            <>
                <p className="mb-4 text-[#515151]">El uso de DOAR se encuentra sujeto a:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Política de Privacidad',
                        'Declaración de Riesgos',
                        'Consentimientos aplicables',
                        'Políticas de cumplimiento y seguridad publicadas por la plataforma',
                    ].map((item) => (
                        <li key={item} className="flex items-center gap-3 text-[#515151]">
                            <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#F29501]" />
                            {item}
                        </li>
                    ))}
                </ul>
                <p className="text-[#515151]">
                    El usuario reconoce haber leído y aceptado dichos documentos.
                </p>
            </>
        ),
    },
    {
        id: 'modificaciones',
        title: 'Modificaciones',
        content: (
            <>
                <p className="mb-4 text-[#515151]">DOAR podrá modificar estos Términos y Condiciones para adaptarlos a:</p>
                <ul className="mb-4 grid grid-cols-1 gap-3 md:grid-cols-2">
                    {[
                        'Cambios regulatorios',
                        'Nuevos riesgos',
                        'Nuevos proveedores',
                        'Cambios operativos',
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
        id: 'ley-aplicable',
        title: 'Ley aplicable y jurisdicción',
        content: (
            <>
                <p className="mb-4 text-[#515151]">
                    Estos Términos y Condiciones se regirán por las leyes aplicables a DOAR LLC, constituida en el Estado de Delaware, Estados Unidos.
                </p>
                <p className="text-[#515151]">
                    Las controversias serán resueltas prioritariamente mediante negociación directa entre las partes antes de acudir a mecanismos judiciales o arbitrales que resulten aplicables.
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
                    Para consultas legales, contractuales o regulatorias:
                </p>
                <div className="space-y-6">
                    <a
                        href="mailto:support@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20 mr-2"
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
                        href="mailto:legal@doar.tech"
                        className="inline-flex items-center gap-4 rounded-2xl border border-white/10 bg-white/10 p-4 transition-all hover:bg-white/20"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#F29501] to-[#FCCA01]">
                            <i className="fas fa-envelope-open text-xl text-white"></i>
                        </div>
                        <div>
                            <p className="text-sm font-medium tracking-wider text-white/50 uppercase">Consultas legales</p>
                            <p className="text-xl font-bold text-white">legal@doar.tech</p>
                        </div>
                    </a>
                </div>
            </div>
        ),
    },
];

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
