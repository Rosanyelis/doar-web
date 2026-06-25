import { Activity, AlertTriangle, CheckCircle, Eye, Layers, Shield } from 'lucide-react';

function SupervisionCenter() {
    const indicators = [
        { label: 'Disponibilidad de Liquidez', status: 'Activa', icon: CheckCircle },
        { label: 'Cobertura Operativa', status: 'Dentro de parámetros', icon: Shield },
        { label: 'Proveedores Operativos', status: 'Disponibles', icon: Activity },
        { label: 'Estado General', status: 'Operativo', icon: Eye },
    ];

    return (
        <article className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-primary">
                    Centro de Supervisión Operativa
                </h3>
                <p className="mt-1 text-xs italic text-doar-gold">
                    ¿Cómo supervisa DOAR la liquidez?
                </p>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-3">
                {indicators.map((ind) => (
                    <div
                        key={ind.label}
                        className="flex flex-col items-center gap-2 rounded-2xl border border-white/8 bg-white/[0.03] p-4 text-center"
                    >
                        <ind.icon className="h-6 w-6 text-doar-gold" strokeWidth={1.75} />
                        <span className="text-[10px] font-medium text-text-primary leading-tight">
                            {ind.label}
                        </span>
                        <span className="text-[9px] font-semibold text-doar-gold">
                            {ind.status}
                        </span>
                    </div>
                ))}
            </div>

            <ul className="space-y-2">
                {[
                    'Liquidez disponible para operaciones activas.',
                    'Cobertura de operaciones dentro de parámetros definidos.',
                    'Preparación para liquidación y conciliación.',
                    'Disponibilidad de proveedores e infraestructura.',
                ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[11px] font-light text-soft-gray">
                        <CheckCircle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-doar-gold" />
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
}

function SettlementContinuity() {
    return (
        <article className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-primary">
                    Continuidad Operativa durante Liquidaciones
                </h3>
                <p className="mt-1 text-xs italic text-doar-gold">
                    ¿Cómo mantiene continuidad durante los ciclos de liquidación?
                </p>
            </div>

            {/* SVG Slot — diagrama provisto externamente */}
            <div className="mb-5 flex items-center justify-center rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <div className="w-full text-center">
                    <div className="flex items-center justify-between gap-2">
                        {['Operaciones Activas', 'Cobertura Operativa', 'Ciclo de Liquidación', 'Continuidad Garantizada'].map(
                            (step, index) => (
                                <div key={step} className="flex items-center gap-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-doar-gold/30 bg-doar-gold/5">
                                            {index === 0 ? (
                                                <Activity className="h-5 w-5 text-doar-gold" />
                                            ) : index === 1 ? (
                                                <Shield className="h-5 w-5 text-doar-gold" />
                                            ) : index === 2 ? (
                                                <Layers className="h-5 w-5 text-doar-gold" />
                                            ) : (
                                                <CheckCircle className="h-5 w-5 text-doar-gold" />
                                            )}
                                        </div>
                                        <span className="max-w-[70px] text-center text-[9px] font-light text-soft-gray leading-tight">
                                            {step}
                                        </span>
                                    </div>
                                    {index < 3 && (
                                        <div className="mb-6 h-px w-3 bg-doar-gold/30" />
                                    )}
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>

            <div className="flex items-start gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-4">
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-doar-gold" />
                <p className="text-[11px] font-light leading-relaxed text-soft-gray">
                    DOAR desacopla la ejecución operativa de los ciclos de liquidación para mantener{' '}
                    <span className="font-semibold text-text-primary">continuidad en la experiencia del usuario.</span>
                </p>
            </div>
        </article>
    );
}

function OperationalResilience() {
    const cards = [
        {
            title: 'Estabilidad Operativa',
            description: 'Capacidad para sostener operaciones activas dentro de los parámetros definidos.',
            icon: AlertTriangle,
        },
        {
            title: 'Riesgo Operativo Controlado',
            description: 'Seguimiento continuo del riesgo operativo y sus variaciones.',
            icon: Shield,
        },
        {
            title: 'Respuesta Coordinada',
            description: 'Mecanismos para gestionar y responder a eventos operativos relevantes.',
            icon: Activity,
        },
    ];

    return (
        <article className="rounded-[24px] border border-white/8 bg-white/[0.02] p-6">
            <div className="mb-4">
                <h3 className="text-sm font-semibold text-text-primary">
                    Resiliencia Operativa
                </h3>
                <p className="mt-1 text-xs italic text-doar-gold">
                    ¿Cómo mantiene continuidad ante eventos operativos?
                </p>
            </div>

            <ul className="space-y-4">
                {cards.map((card) => (
                    <li key={card.title} className="flex items-start gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-doar-blue/30 bg-doar-blue/5">
                            <card.icon className="h-5 w-5 text-doar-blue" strokeWidth={1.75} />
                        </div>
                        <div>
                            <span className="text-xs font-semibold text-text-primary">
                                {card.title}
                            </span>
                            <p className="mt-0.5 text-[11px] font-light text-soft-gray">
                                {card.description}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </article>
    );
}

export default function OperationalSubsections() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-3">
            <SupervisionCenter />
            <SettlementContinuity />
            <OperationalResilience />
        </div>
    );
}
