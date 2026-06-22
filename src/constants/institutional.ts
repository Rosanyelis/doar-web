export const INSTITUTIONAL_NAV_LINKS = [
    { label: '¿Qué es DOAR?', href: '#que-es' },
    { label: 'Modelo Operativo', href: '#modelo-operativo' },
    { label: 'Infraestructura', href: '#infraestructura' },
    { label: 'Cumplimiento', href: '#cumplimiento' },
    { label: 'Tesorería', href: '#tesoreria' },
    { label: 'Posición Regulatoria', href: '#posicion' },
    { label: 'Transparencia', href: '#transparencia' },
] as const;

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
