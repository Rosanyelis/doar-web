export const DOAR_PAGE_PLATFORM_LINKS = [
    { label: 'Qué es DOAR', href: '/institucional/que-es', navGroup: 'que-es' },
    { label: 'Modelo Operativo', href: '/institucional/modelo-operativo', navGroup: 'modelo-operativo' },
    { label: 'Cumplimiento y Riesgo', href: '/institucional/cumplimiento', navGroup: 'cumplimiento' },
    { label: 'Liquidez y Continuidad Operativa', href: '/institucional/tesoreria', navGroup: 'tesoreria' },
    { label: 'Posicionamiento Regulatorio', href: '/institucional/posicion', navGroup: 'posicion' },
    { label: 'Modelo de Responsabilidades', href: '/institucional/responsabilidades', navGroup: 'responsabilidades' },
] as const;

/** @deprecated Usar DOAR_PAGE_PLATFORM_LINKS */
export const INSTITUTIONAL_NAV_LINKS = DOAR_PAGE_PLATFORM_LINKS;

export const FOOTER_PLATFORM_LINKS = DOAR_PAGE_PLATFORM_LINKS;

export const INTEGRATED_CAPABILITIES = [
    { id: 'pagos', label: 'Pagos' },
    { id: 'custodia', label: 'Custodia' },
    { id: 'cumplimiento', label: 'Cumplimiento' },
    { id: 'banca', label: 'Banca' },
    { id: 'liquidacion', label: 'Liquidación' },
] as const;

export const WHAT_IS_DOAR_CAPABILITIES = [
    {
        id: 'usuarios',
        title: 'Usuarios',
        description:
            'Acceden a servicios financieros a través de una experiencia digital unificada.',
    },
    {
        id: 'empresas',
        title: 'Empresas',
        description:
            'Operan flujos financieros digitales mediante una capa de infraestructura escalable.',
    },
    {
        id: 'ledger',
        title: 'Ledger',
        description:
            'Actúa como la fuente operacional de verdad a lo largo de toda la plataforma.',
    },
    {
        id: 'tesoreria',
        title: 'Tesorería',
        description:
            'Da soporte a la gestión de liquidez y cobertura de liquidación.',
    },
    {
        id: 'cumplimiento',
        title: 'Cumplimiento',
        description:
            'Monitorea verificación de identidad, riesgos y controles regulatorios.',
    },
    {
        id: 'liquidacion',
        title: 'Liquidación',
        description:
            'Coordina la finalización de operaciones financieras a través de infraestructura especializada.',
    },
] as const;

export const LEDGER_FLOW_STEPS = [
    {
        id: 'usuario',
        title: 'Usuario',
        description: 'Inicia una acción dentro de la plataforma.',
        highlighted: false,
    },
    {
        id: 'operacion',
        title: 'Operación',
        description: 'La operación es ejecutada en la plataforma.',
        highlighted: false,
    },
    {
        id: 'ledger',
        title: 'DOAR Ledger',
        description:
            'El ledger registra y consolida la operación como fuente de verdad operacional.',
        highlighted: true,
    },
    {
        id: 'conciliacion',
        title: 'Conciliación',
        description:
            'Se validan y concilian los datos con la infraestructura financiera integrada.',
        highlighted: false,
    },
    {
        id: 'liquidacion',
        title: 'Infraestructura de Liquidación',
        description:
            'La operación es enviada a la infraestructura para su liquidación o procesamiento final.',
        highlighted: false,
    },
] as const;

export const LEDGER_FIRST_CAPABILITIES = [
    {
        id: 'balances',
        title: 'Balances',
        description:
            'Mantiene los saldos operacionales de usuarios y empresas dentro de la plataforma.',
    },
    {
        id: 'actividad',
        title: 'Actividad',
        description:
            'Registra eventos, acciones y movimientos generados durante el uso de la plataforma.',
    },
    {
        id: 'historial',
        title: 'Historial',
        description:
            'Conserva el historial completo de operaciones y eventos asociados a cada cuenta.',
    },
    {
        id: 'estados',
        title: 'Estados Operativos',
        description:
            'Gestiona el ciclo de vida de cada operación desde su creación hasta su finalización.',
    },
    {
        id: 'movimientos',
        title: 'Movimientos Internos',
        description:
            'Coordina transferencias internas entre participantes sin requerir liquidación externa inmediata.',
    },
    {
        id: 'conciliacion',
        title: 'Conciliación',
        description:
            'Valida periódicamente la consistencia entre el ledger y la infraestructura financiera integrada.',
    },
] as const;

export const INFRASTRUCTURE_PROVIDERS = [
    {
        id: 'circle',
        name: 'Circle',
        category: 'Digital Dollar Infrastructure',
        description:
            'Infraestructura para emisión, transferencia y liquidación de activos digitales regulados dentro del ecosistema DOAR.',
    },
    {
        id: 'fireblocks',
        name: 'Fireblocks',
        category: 'Digital Asset Infrastructure',
        description:
            'Custodia institucional y gestión segura de activos digitales integrada al flujo operacional.',
    },
    {
        id: 'mercury',
        name: 'Mercury',
        category: 'Banking Infrastructure',
        description:
            'Servicios bancarios especializados para operaciones corporativas y gestión de cuentas institucionales.',
    },
    {
        id: 'stripe',
        name: 'Stripe',
        category: 'Payment Processing',
        description:
            'Procesamiento de pagos digitales coordinado a través de la capa de orquestación financiera.',
    },
    {
        id: 'dlocal',
        name: 'dLocal',
        category: 'Local Payments',
        description:
            'Infraestructura de pagos locales e internacionales para mercados emergentes y regionales.',
    },
    {
        id: 'sumsub',
        name: 'Sumsub',
        category: 'Identity & Compliance',
        description:
            'Verificación de identidad, monitoreo de riesgos y controles regulatorios integrados operacionalmente.',
    },
] as const;

export const INFRA_ORCHESTRATION_PROVIDERS = [
    { id: 'circle', name: 'Circle', label: 'USDC Infrastructure' },
    { id: 'fireblocks', name: 'Fireblocks', label: 'Digital Asset Infrastructure' },
    { id: 'mercury', name: 'Mercury', label: 'Banking Infrastructure' },
    { id: 'sumsub', name: 'Sumsub', label: 'Identity & Compliance' },
] as const;

export const SEGREGATED_ARCHITECTURE_LAYERS = [
    {
        id: 'users',
        title: 'Usuarios y Empresas',
        subtitle: null,
        variant: 'external',
    },
    {
        id: 'platform',
        title: 'Plataforma DOAR',
        subtitle: 'Orquestación y experiencia unificada',
        variant: 'gold',
        highlight: true,
    },
    {
        id: 'ledger',
        title: 'Ledger Financiero',
        subtitle: 'Registro financiero y transaccional',
        variant: 'gold',
    },
    {
        id: 'compliance',
        title: 'Capa de Cumplimiento',
        subtitle: 'Controles y monitoreo',
        variant: 'gold',
    },
    {
        id: 'treasury',
        title: 'Capa de Tesorería',
        subtitle: 'Liquidez y cobertura',
        variant: 'gold',
    },
    {
        id: 'settlement',
        title: 'Capa de Liquidación',
        subtitle: 'Liquidación y conciliación',
        variant: 'gold',
    },
    {
        id: 'partners',
        title: 'Infraestructura de Socios',
        subtitle: 'Infraestructura especializada y segregada',
        variant: 'external',
        isPartnerNode: true,
    },
] as const;

export const INFRASTRUCTURE_PARTNER_CAPABILITIES = [
    { id: 'payments', label: 'Pagos' },
    { id: 'compliance', label: 'Cumplimiento' },
    { id: 'treasury', label: 'Tesorería' },
    { id: 'custody', label: 'Custodia' },
] as const;

export const TREASURY_FLOW_STEPS = [
    {
        id: 'demand',
        title: 'Demanda Operativa',
        description: 'Entradas • Salidas • Transferencias',
        variant: 'blue',
    },
    {
        id: 'engine',
        title: 'Motor de Tesorería',
        variant: 'gold',
        highlight: true,
    },
    {
        id: 'liquidity',
        title: 'Liquidez Disponible',
        description: 'Liquidez inmediata disponible para operaciones',
        variant: 'blue',
    },
    {
        id: 'operations',
        title: 'Soporte de Operaciones',
        description: 'Permitiendo una ejecución sin interrupciones',
        variant: 'blue',
    },
] as const;

export const TREASURY_ENGINE_CAPABILITIES = [
    {
        id: 'coverage',
        title: 'Cobertura de Liquidez',
        description: 'Asegura la disponibilidad de liquidez para operaciones activas.',
    },
    {
        id: 'prefunding',
        title: 'Pre-fondeo',
        description: 'Mantiene los fondos disponibles antes de la liquidación final.',
    },
    {
        id: 'rebalancing',
        title: 'Reequilibrio',
        description: 'Redistribuye la liquidez entre las posiciones operativas.',
    },
    {
        id: 'monitoring',
        title: 'Monitoreo de Exposición',
        description: 'Monitorea los niveles de riesgo y cobertura en tiempo real.',
    },
] as const;

export const TREASURY_OPERATION_TYPES = [
    { id: 'payins', label: 'Entradas' },
    { id: 'payouts', label: 'Salidas' },
    { id: 'transfers', label: 'Transferencias' },
] as const;

export const TREASURY_FEATURE_CARDS = [
    {
        id: 'cobertura',
        title: 'Cobertura Operativa',
        description: 'Disponibilidad de liquidez para operaciones activas.',
    },
    {
        id: 'continuidad',
        title: 'Continuidad Transaccional',
        description:
            'Operaciones soportadas sin depender de la liquidación inmediata.',
    },
    {
        id: 'optimizacion',
        title: 'Optimización de Liquidez',
        description:
            'Uso eficiente de recursos a través de una gestión activa de liquidez.',
    },
    {
        id: 'monitoreo',
        title: 'Monitoreo y Control',
        description:
            'Supervisión continua de cobertura, utilización y exposición.',
    },
] as const;

export const RECONCILIATION_LEDGER_ITEMS = [
    'Saldos',
    'Actividad',
    'Historial',
    'Transacciones',
    'Estados Operativos',
] as const;

export const RECONCILIATION_INFRA_ITEMS = [
    'Pagos',
    'Desembolsos',
    'Eventos de Liquidación',
    'Eventos de Proveedores',
    'Eventos Bancarios',
] as const;

export const RECONCILIATION_ENGINE = {
    title: 'Motor de Conciliación',
    description: 'Empareja, valida y reconcilia registros entre sistemas',
} as const;

export const RECONCILIATION_VALIDATED = {
    title: 'Estado Operativo Validado',
    description: 'Vista operativa consistente, precisa y confiable en todos los sistemas',
} as const;

export const RECONCILIATION_SOURCES = {
    ledger: 'Ledger DOAR',
    infra: 'Eventos de Infraestructura',
} as const;

export const RECONCILIATION_FEATURE_CARDS = [
    {
        id: 'consistencia',
        title: 'Consistencia',
        description:
            'Garantiza que los registros operacionales coincidan entre el ledger y la infraestructura integrada.',
    },
    {
        id: 'trazabilidad',
        title: 'Trazabilidad',
        description:
            'Mantiene evidencia verificable de cada operación y evento a lo largo del ciclo de conciliación.',
    },
    {
        id: 'integridad',
        title: 'Integridad',
        description:
            'Detecta discrepancias y asegura la consistencia de datos entre sistemas operacionales.',
    },
    {
        id: 'visibilidad',
        title: 'Visibilidad',
        description:
            'Proporciona monitoreo continuo del estado operacional reconciliado en tiempo real.',
    },
] as const;

export const SEGREGATED_LAYER_CARDS = [
    {
        id: 'ledger',
        title: 'Ledger Financiero',
        description:
            'Registro financiero y transaccional que incluye balances, ingresos, tarifas, fuentes de fondeo y eventos operativos.',
    },
    {
        id: 'compliance',
        title: 'Capa de Cumplimiento',
        description:
            'Controles de identidad, monitoreo de riesgo, verificaciones KYC/AML y políticas de cumplimiento regulatorio.',
    },
    {
        id: 'treasury',
        title: 'Capa de Tesorería',
        description:
            'Gestión de liquidez, cobertura operacional, rebalanceo y coordinación de fuentes de fondeo.',
    },
    {
        id: 'settlement',
        title: 'Capa de Liquidación',
        description:
            'Coordinación de liquidación, conciliación y validación final con la infraestructura financiera integrada.',
    },
    {
        id: 'partners',
        title: 'Infraestructura de Socios',
        description:
            'Partners especializados en pagos, cumplimiento, tesorería y custodia que proveen la infraestructura financiera segregada.',
    },
] as const;

export const COMPLIANCE_FRAMEWORK_CARDS = [
    {
        id: 'kyc',
        title: 'Verificación KYC',
        description: 'Verificación de identidad de personas con altos estándares de seguridad.',
        items: ['Verificación documental', 'Verificación biométrica', 'Prueba de vida', 'Validación de identidad'],
        accent: 'blue',
        icon: 'User',
    },
    {
        id: 'kyb',
        title: 'Verificación KYB',
        description: 'Validación empresarial y de estructuras corporativas.',
        items: ['Validación empresarial', 'Identificación UBO', 'Documentación corporativa', 'Screening empresarial'],
        accent: 'purple',
        icon: 'Building2',
    },
    {
        id: 'screening',
        title: 'Screening Transaccional',
        description: 'Screening transaccional contra listas y fuentes globales.',
        items: ['Screening PEP', 'Screening de Sanciones', 'Listas de Vigilancia', 'Medios Adversos'],
        accent: 'cyan',
        icon: 'Search',
    },
    {
        id: 'aml',
        title: 'Monitoreo AML',
        description: 'Monitoreo basado en reglas internas y señales de partners.',
        items: ['Reglas AML', 'Reglas Transaccionales', 'Revisiones de Cumplimiento', 'Umbrales y Alertas de Riesgo'],
        accent: 'orange',
        icon: 'RefreshCw',
    },
    {
        id: 'behavior',
        title: 'Monitoreo de Comportamiento',
        description: 'Monitoreo de comportamiento para la detección de patrones inusuales.',
        items: ['Motor de Riesgo', 'Alertas en Tiempo Real', 'Señales de Comportamiento', 'Controles de Velocidad'],
        accent: 'sky',
        icon: 'Activity',
    },
    {
        id: 'ongoing',
        title: 'Monitoreo Continuo',
        description: 'Supervisión continua durante todo el ciclo de vida del usuario.',
        items: ['Re-screening', 'Revisiones de Cumplimiento', 'Actualización de Perfiles', 'Evaluación Continua'],
        accent: 'green',
        icon: 'Infinity',
    },
] as const;

export const COMPLIANCE_METHODOLOGY = [
    { id: 'prevencion', label: 'Prevención' },
    { id: 'deteccion', label: 'Detección' },
    { id: 'respuesta', label: 'Respuesta' },
] as const;

export const TRANSACTION_CYCLE_STEPS = [
    { id: 'user', type: 'circle', label: 'Usuario', subtitle: null, accent: 'blue' },
    {
        id: 'pay-in',
        type: 'box',
        label: 'Entrada de Fondos',
        subtitle: 'Solicitud de Fondos',
        accent: 'gold',
    },
    {
        id: 'ledger',
        type: 'ledger',
        label: 'Ledger DOAR',
        subtitle: 'Registro Transaccional y Contable',
        accent: 'gold',
        highlight: true,
    },
    {
        id: 'treasury',
        type: 'box',
        label: 'Tesorería y Cobertura de Liquidez',
        subtitle: 'Cobertura de Liquidez',
        accent: 'blue',
    },
    {
        id: 'settlement',
        type: 'box',
        label: 'Liquidación y Conciliación',
        subtitle: 'Validación de Liquidación',
        accent: 'blue',
    },
    {
        id: 'pay-out',
        type: 'box',
        label: 'Salida de Fondos',
        subtitle: 'Entrega de Fondos',
        accent: 'gold',
    },
    {
        id: 'recipient',
        type: 'recipient',
        label: 'Destinatario',
        subtitle: 'Recepción Final',
        accent: 'blue',
    },
] as const;

export const TRANSACTION_CYCLE_SUMMARY = [
    {
        id: 'trazabilidad',
        label: 'Trazabilidad completa en cada operación',
        icon: 'Shield',
    },
    {
        id: 'visibilidad',
        label: 'Visibilidad y control en tiempo real',
        icon: 'BarChart3',
    },
    {
        id: 'conciliacion',
        label: 'Conciliación y validación robustas',
        icon: 'Lock',
    },
    {
        id: 'eficiencia',
        label: 'Eficiencia operativa a escala',
        icon: 'Zap',
    },
] as const;

export const RISK_ENGINE_NODES = [
    {
        id: 'velocity',
        title: 'Controles de Velocidad',
        description: 'Limita frecuencia y volumen de operaciones según perfiles de riesgo.',
    },
    {
        id: 'exposure',
        title: 'Controles de Exposición',
        description: 'Monitorea exposición acumulada y límites operacionales por entidad.',
    },
    {
        id: 'scoring',
        title: 'Puntuación de Riesgo',
        description: 'Asigna puntuaciones dinámicas basadas en señales y comportamiento.',
    },
    {
        id: 'alerts',
        title: 'Alertas en Tiempo Real',
        description: 'Genera alertas en tiempo real ante patrones anómalos o umbrales.',
    },
    {
        id: 'behavioral',
        title: 'Monitoreo de Comportamiento',
        description: 'Analiza patrones de uso y actividad para detectar riesgos emergentes.',
    },
] as const;

export const MONITORING_CENTER_NODES = [
    { id: 'operations', title: 'Operaciones Monitoreadas' },
    { id: 'compliance', title: 'Eventos de Cumplimiento' },
    { id: 'risk', title: 'Alertas de Riesgo' },
    { id: 'cases', title: 'Casos en Revisión' },
    { id: 'provider', title: 'Eventos de Proveedores' },
    { id: 'status', title: 'Estado Operacional' },
] as const;

export const MONITORING_CAPABILITY_CARDS = [
    {
        id: 'events',
        title: 'Monitoreo de Eventos',
        description: 'Supervisión continua de eventos operacionales en tiempo real.',
    },
    {
        id: 'compliance',
        title: 'Eventos de Cumplimiento',
        description: 'Registro y seguimiento de eventos de cumplimiento regulatorio.',
    },
    {
        id: 'alerts',
        title: 'Alertas de Riesgo',
        description: 'Alertas de riesgo generadas por el motor de evaluación.',
    },
    {
        id: 'provider',
        title: 'Eventos de Proveedores',
        description: 'Eventos recibidos de proveedores de infraestructura integrada.',
    },
    {
        id: 'cases',
        title: 'Revisión de Casos',
        description: 'Gestión y revisión de casos bajo investigación o escalamiento.',
    },
] as const;

export const LIQUIDITY_CAPABILITIES = [
    { id: 'disponibilidad', title: 'Disponibilidad Operativa', description: 'DOAR asegura liquidez disponible en todo momento para operaciones de salida.' },
    { id: 'controles', title: 'Controles Operativos', description: 'Mantenimiento operativo y controles durante procesos de liquidación.' },
    { id: 'preparacion', title: 'Preparación para Liquidación', description: 'Preparación de activos para procesos de liquidación y transferencias.' },
    { id: 'coordinacion-liquidez', title: 'Coordinación de Liquidez', description: 'Coordinación de la liquidez entre los distintos componentes del ecosistema.' },
    { id: 'monitoreo-operativo', title: 'Monitoreo Operativo', description: 'Seguimiento continuo de la actividad operativa y eventos relevantes.' },
    { id: 'continuidad', title: 'Continuidad Operativa', description: 'Capacidad de mantener la operación estable y estable en todo momento.' },
] as const;

export const ECOSYSTEM_CAPABILITIES = [
    { id: 'orquestacion', title: 'Orquestación', description: 'DOAR coordina procesos, reglas operativas y experiencia de usuario.' },
    { id: 'infraestructura', title: 'Infraestructura Especializada', description: 'Las funciones reguladas son ejecutadas por proveedores especializados.' },
    { id: 'separacion', title: 'Separación de Responsabilidades', description: 'Cada participante conserva responsabilidades independientes dentro del modelo.' },
] as const;

export const WHAT_IS_NOT_DOAR_TABLE = [
    { capability: 'Technology Platform', is: true, isNot: false },
    { capability: 'Bank', is: false, isNot: true },
    { capability: 'Financial Orchestration Layer', is: true, isNot: false },
    { capability: 'Custodio', is: false, isNot: true },
    { capability: 'Infrastructure Coordinator', is: true, isNot: false },
    { capability: 'Stablecoin Issuer', is: false, isNot: true },
    { capability: 'Experience Layer', is: true, isNot: false },
    { capability: 'Payment Network', is: false, isNot: true },
    { capability: 'Operational Ledger', is: true, isNot: false },
    { capability: 'Deposit Institution', is: false, isNot: true },
    { capability: 'Compliance Coordinator', is: true, isNot: false },
    { capability: 'Financial Institution', is: false, isNot: true },
] as const;

export const NOT_DOAR_CAPABILITIES = [
    { id: 'coordinacion', title: 'Coordinación', description: 'DOAR coordina experiencia, reglas operativas e infraestructura integrada.' },
    { id: 'separacion', title: 'Separación', description: 'Las funciones reguladas permanecen en manos de proveedores especializados.' },
    { id: 'responsabilidades', title: 'Responsabilidades Definidas', description: 'Cada participante conserva obligaciones claramente definidas.' },
] as const;

export const RESPONSIBILITIES_TABLE = [
    { function: 'Experiencia de Usuario', doar: true, partners: false },
    { function: 'Reglas Operativas', doar: true, partners: false },
    { function: 'Coordinación Transaccional', doar: true, partners: false },
    { function: 'Cumplimiento Regulatorio', doar: false, partners: true },
    { function: 'Custodia de Activos', doar: false, partners: true },
    { function: 'Procesamiento de Pagos', doar: false, partners: true },
    { function: 'Infraestructura Blockchain', doar: false, partners: true },
    { function: 'Servicios Bancarios', doar: false, partners: true },
] as const;

export const RESPONSIBILITIES_CAPABILITIES = [
    { id: 'experiencia', title: 'Experiencia Unificada', description: 'DOAR ofrece una experiencia consistente para usuarios y empresas.' },
    { id: 'infraestructura', title: 'Infraestructura Especializada', description: 'Las funciones reguladas permanecen en manos de proveedores independientes.' },
    { id: 'responsabilidades-definidas', title: 'Responsabilidades Definidas', description: 'Cada participante conserva obligaciones claramente definidas.' },
] as const;

export const AUDIT_TIMELINE_STEPS = [
    {
        id: 'user',
        step: '01',
        title: 'Acción de Usuario',
        description: 'Acción iniciada por usuario o empresa en la plataforma.',
    },
    {
        id: 'system',
        step: '02',
        title: 'Evento del Sistema',
        description: 'Evento registrado por el sistema operacional de DOAR.',
    },
    {
        id: 'provider',
        step: '03',
        title: 'Evento de Proveedor',
        description: 'Evento recibido de infraestructura financiera integrada.',
    },
    {
        id: 'compliance',
        step: '04',
        title: 'Evento de Cumplimiento',
        description: 'Evaluación y registro de controles de cumplimiento aplicados.',
    },
    {
        id: 'audit',
        step: '05',
        title: 'Registro de Auditoría',
        description: 'Registro de auditoría consolidado y verificable.',
        highlight: true,
    },
] as const;

export const DOAR_IS_DEFINITION_ITEMS = [
    {
        id: 'technology-platform',
        title: 'Plataforma Tecnológica',
        description: 'Plataforma tecnológica diseñada para orquestar servicios financieros digitales.',
        icon: 'Network',
    },
    {
        id: 'financial-orchestration',
        title: 'Capa de Orquestación Financiera',
        description: 'Capa de orquestación financiera que conecta usuarios, reglas e infraestructura.',
        icon: 'Layers',
    },
    {
        id: 'infrastructure-coordinator',
        title: 'Coordinador de Infraestructura',
        description: 'Coordina proveedores especializados e infraestructura integrada.',
        icon: 'GitBranch',
    },
    {
        id: 'experience-layer',
        title: 'Capa de Experiencia',
        description: 'Interfaz unificada para usuarios y empresas.',
        icon: 'User',
    },
    {
        id: 'operational-ledger',
        title: 'Ledger Operacional',
        description: 'Modelo operacional basado en ledger para registrar actividad y estados.',
        icon: 'FileCheck',
    },
    {
        id: 'compliance-coordinator',
        title: 'Coordinador de Cumplimiento',
        description: 'Coordina procesos, reglas y monitoreo de cumplimiento con proveedores.',
        icon: 'ShieldCheck',
    },
] as const;

export const DOAR_IS_NOT_DEFINITION_ITEMS = [
    {
        id: 'bank',
        title: 'Banco',
        description: 'No toma depósitos, no concede créditos, no ofrece productos bancarios.',
        icon: 'Landmark',
    },
    {
        id: 'custodian',
        title: 'Custodio',
        description: 'No custodia activos de clientes ni mantiene control sobre fondos.',
        icon: 'Vault',
    },
    {
        id: 'stablecoin-issuer',
        title: 'Emisor de Stablecoins',
        description: 'No emite stablecoins ni representa obligaciones financieras.',
        icon: 'CircleDollarSign',
    },
    {
        id: 'payment-network',
        title: 'Red de Pagos',
        description: 'No procesa pagos ni opera una red de pagos.',
        icon: 'ArrowLeftRight',
    },
    {
        id: 'deposit-institution',
        title: 'Institución de Depósito',
        description: 'No es una institución de depósito ni ofrece cuentas bancarias.',
        icon: 'Wallet',
    },
    {
        id: 'financial-institution',
        title: 'Institución Financiera',
        description: 'No es una institución financiera regulada.',
        icon: 'Users',
    },
] as const;

export const DOAR_IS_NOT_SUMMARY_PILLARS = [
    {
        id: 'coordinacion',
        title: 'Coordinación',
        description: 'DOAR coordina experiencia, reglas operativas e infraestructura integrada.',
        accent: 'blue',
        icon: 'Network',
    },
    {
        id: 'separacion',
        title: 'Separación',
        description: 'Las funciones reguladas permanecen segregadas entre proveedores especializados.',
        accent: 'gold',
        icon: 'ShieldCheck',
    },
    {
        id: 'responsabilidades',
        title: 'Responsabilidades Definidas',
        description: 'Cada participante conserva obligaciones independientes dentro del modelo operativo.',
        accent: 'green',
        icon: 'ShieldCheck',
    },
] as const;

export const RESPONSIBILITY_MODEL_FUNCTIONS = [
    {
        id: 'experiencia-usuario',
        function: 'Experiencia de Usuario',
        icon: 'User',
        doar: true,
        partners: false,
    },
    {
        id: 'reglas-operativas',
        function: 'Reglas Operativas',
        icon: 'Settings',
        doar: true,
        partners: false,
    },
    {
        id: 'coordinacion-transaccional',
        function: 'Coordinación Transaccional',
        icon: 'ArrowLeftRight',
        doar: true,
        partners: false,
    },
    {
        id: 'cumplimiento-regulatorio',
        function: 'Cumplimiento Regulatorio',
        icon: 'ShieldCheck',
        doar: false,
        partners: true,
    },
    {
        id: 'custodia-activos',
        function: 'Custodia de Activos',
        icon: 'Lock',
        doar: false,
        partners: true,
    },
    {
        id: 'procesamiento-pagos',
        function: 'Procesamiento de Pagos',
        icon: 'Wallet',
        doar: false,
        partners: true,
    },
    {
        id: 'infraestructura-blockchain',
        function: 'Infraestructura Blockchain',
        icon: 'Box',
        doar: false,
        partners: true,
    },
    {
        id: 'servicios-bancarios',
        function: 'Servicios Bancarios',
        icon: 'Landmark',
        doar: false,
        partners: true,
    },
] as const;

export const RESPONSIBILITY_MODEL_PILLARS = [
    {
        id: 'experiencia',
        title: 'Experiencia Unificada',
        description: 'DOAR ofrece una experiencia consistente para usuarios y empresas.',
        accent: 'blue',
        icon: 'User',
    },
    {
        id: 'infraestructura',
        title: 'Infraestructura Especializada',
        description: 'Las funciones reguladas permanecen en manos de proveedores independientes.',
        accent: 'gold',
        icon: 'Users',
    },
    {
        id: 'responsabilidades',
        title: 'Responsabilidades Definidas',
        description: 'Cada participante conserva obligaciones claramente delimitadas.',
        accent: 'green',
        icon: 'ShieldCheck',
    },
] as const;

export const FOOTER_LEGAL_LINKS = [
    { label: 'Términos y Condiciones', href: '/terminos' },
    { label: 'Política de Privacidad', href: '/privacidad' },
    { label: 'Política de Cookies', href: '/privacidad#cookies' },
    { label: 'Consentimiento Biométrico', href: '/consentimiento-biometrico' },
    { label: 'Declaración de Riesgos', href: '/declaracion-riesgo' },
    { label: 'Política AML / KYC / KYB', href: '/politica-cumplimiento' },
    { label: 'Declaración AML', href: '/politica-cumplimiento#monitoreo-operativo' },
    { label: 'Divulgación Regulatoria', href: '/institucional/posicion', navGroup: 'posicion' },
    { label: 'Política de Continuidad Operativa', href: '/institucional/tesoreria', navGroup: 'tesoreria' },
] as const;

export const FOOTER_CONTACT_EMAILS = [
    { id: 'info', email: 'info@doar.tech' },
    { id: 'manager', email: 'manager@doar.tech' },
] as const;
