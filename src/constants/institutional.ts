export const INSTITUTIONAL_NAV_LINKS = [
    { label: '¿Qué es DOAR?', href: '/doar#que-es' },
    { label: 'Modelo Operativo', href: '/doar/modelo-operativo' },
    { label: 'Infraestructura', href: '/doar#infraestructura' },
    { label: 'Cumplimiento', href: '/doar#cumplimiento' },
    { label: 'Tesorería', href: '/doar#tesoreria' },
    { label: 'Posición Regulatoria', href: '/doar#posicion' },
    { label: 'Transparencia', href: '/doar#transparencia' },
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

export const SEGREGATED_ARCHITECTURE_LAYERS = [
    {
        id: 'users',
        title: 'Users & Businesses',
        subtitle: null,
        variant: 'external',
    },
    {
        id: 'platform',
        title: 'DOAR Platform',
        subtitle: 'Orchestration & unified experience',
        variant: 'gold',
        highlight: true,
    },
    {
        id: 'ledger',
        title: 'Financial Ledger',
        subtitle: 'Financial & transactional record',
        variant: 'gold',
    },
    {
        id: 'compliance',
        title: 'Compliance Layer',
        subtitle: 'Controls & monitoring',
        variant: 'gold',
    },
    {
        id: 'treasury',
        title: 'Treasury Layer',
        subtitle: 'Liquidity & coverage',
        variant: 'gold',
    },
    {
        id: 'settlement',
        title: 'Settlement Layer',
        subtitle: 'Settlement & reconciliation',
        variant: 'gold',
    },
    {
        id: 'partners',
        title: 'Infrastructure Partners',
        subtitle: 'Specialized infrastructure & segregated',
        variant: 'external',
        isPartnerNode: true,
    },
] as const;

export const INFRASTRUCTURE_PARTNER_CAPABILITIES = [
    { id: 'payments', label: 'Payments' },
    { id: 'compliance', label: 'Compliance' },
    { id: 'treasury', label: 'Treasury' },
    { id: 'custody', label: 'Custody' },
] as const;

export const TREASURY_FLOW_STEPS = [
    {
        id: 'demand',
        title: 'Operational Demand',
        description: 'Pay Ins • Pay Outs • Transfers',
        variant: 'blue',
    },
    {
        id: 'engine',
        title: 'Treasury Engine',
        variant: 'gold',
        highlight: true,
    },
    {
        id: 'liquidity',
        title: 'Available Liquidity',
        description: 'Immediate liquidity available for operations',
        variant: 'blue',
    },
    {
        id: 'operations',
        title: 'Supports Operations',
        variant: 'blue',
    },
] as const;

export const TREASURY_ENGINE_CAPABILITIES = [
    {
        id: 'coverage',
        title: 'Liquidity Coverage',
        description: 'Ensures liquidity availability across operational flows.',
    },
    {
        id: 'prefunding',
        title: 'Prefunding',
        description: 'Maintains funds available before settlement.',
    },
    {
        id: 'rebalancing',
        title: 'Rebalancing',
        description: 'Redistributes liquidity across funding sources.',
    },
    {
        id: 'monitoring',
        title: 'Exposure Monitoring',
        description: 'Monitors risk and coverage in real time.',
    },
] as const;

export const TREASURY_OPERATION_TYPES = [
    { id: 'payins', label: 'Pay Ins' },
    { id: 'payouts', label: 'Pay Outs' },
    { id: 'transfers', label: 'Transfers' },
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
    'Balances',
    'Activity',
    'History',
    'Transactions',
    'Operational States',
] as const;

export const RECONCILIATION_INFRA_ITEMS = [
    'Payments',
    'Payouts',
    'Settlement Events',
    'Provider Events',
    'Banking Events',
] as const;

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
        title: 'Financial Ledger',
        description:
            'Registro financiero y transaccional que incluye balances, ingresos, tarifas, fuentes de fondeo y eventos operativos.',
    },
    {
        id: 'compliance',
        title: 'Compliance Layer',
        description:
            'Controles de identidad, monitoreo de riesgo, verificaciones KYC/AML y políticas de cumplimiento regulatorio.',
    },
    {
        id: 'treasury',
        title: 'Treasury Layer',
        description:
            'Gestión de liquidez, cobertura operacional, rebalanceo y coordinación de fuentes de fondeo.',
    },
    {
        id: 'settlement',
        title: 'Settlement Layer',
        description:
            'Coordinación de liquidación, conciliación y validación final con la infraestructura financiera integrada.',
    },
    {
        id: 'partners',
        title: 'Infrastructure Partners',
        description:
            'Partners especializados en pagos, cumplimiento, tesorería y custodia que proveen la infraestructura financiera segregada.',
    },
] as const;
