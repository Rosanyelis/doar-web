import {
    Activity,
    ArrowRight,
    CheckCircle2,
    ClipboardList,
    Eye,
    RefreshCw,
    Shield,
    ShieldCheck,
    Target,
    Users,
} from 'lucide-react';
import { cn } from '../../../../lib/utils';

function SupervisionCenter() {
    const indicators = [
        { label: 'Disponibilidad de Liquidez', status: 'Activa', icon: CheckCircle2 },
        { label: 'Cobertura Operativa', status: 'Dentro de parámetros', icon: ShieldCheck },
        { label: 'Proveedores Operativos', status: 'Disponibles', icon: Activity },
        { label: 'Estado General', status: 'Operativo', icon: Eye },
    ];

    return (
        <article className="rounded-2xl border border-white/8 bg-deep-space/80 p-6">
            <div className="mb-5">
                <h3 className="text-sm font-semibold text-text-primary">
                    Centro de Supervisión Operativa
                </h3>
                <p className="mt-1 text-xs text-doar-blue">¿Cómo supervisa DOAR la liquidez?</p>
            </div>

            <div className="mb-5 grid grid-cols-2 gap-2 sm:grid-cols-4">
                {indicators.map(({ label, status, icon: Icon }) => (
                    <div
                        key={label}
                        className="flex flex-col items-center gap-2 rounded-xl border border-white/8 bg-white/[0.03] px-2 py-4 text-center"
                    >
                        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-doar-gold/30 bg-doar-gold/5">
                            <Icon className="h-8 w-8 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <span className="text-[12px] font-medium leading-tight text-text-primary">
                            {label}
                        </span>
                        <span className="text-[10px] font-semibold text-doar-green">{status}</span>
                    </div>
                ))}
            </div>

            <ul className="space-y-2.5">
                {[
                    'Liquidez disponible para operaciones activas.',
                    'Cobertura de operaciones dentro de parámetros definidos.',
                    'Preparación para liquidación y conciliación.',
                    'Disponibilidad de proveedores e infraestructura.',
                ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] font-light text-white">
                        <CheckCircle2
                            className="mt-0.5 h-4 w-4 shrink-0 text-doar-green"
                            strokeWidth={2}
                            aria-hidden="true"
                        />
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    );
}

const SETTLEMENT_STEPS = [
    { label: 'Operaciones Activas', icon: ClipboardList },
    { label: 'Cobertura Operativa', icon: ShieldCheck },
    { label: 'Ciclo de Liquidación', icon: RefreshCw },
    { label: 'Continuidad Garantizada', icon: CheckCircle2 },
] as const;

function SettlementContinuity() {
    return (
        <article className="rounded-2xl border border-white/8 bg-deep-space/80 p-6">
            <div className="mb-8">
                <h3 className="text-sm font-semibold text-text-primary">
                    Continuidad Operativa durante Liquidaciones
                </h3>
                <p className="mt-1 text-xs text-doar-blue">
                    ¿Cómo mantiene continuidad durante los ciclos de liquidación?
                </p>
            </div>

            <div className="mt-4 flex flex-col gap-4">
                <div className="flex items-start justify-between gap-1">
                    {SETTLEMENT_STEPS.map(({ label, icon: Icon }, index) => (
                        <div key={label} className="flex flex-1 items-start">
                            <div className="flex min-w-0 flex-1 flex-col items-center gap-2">
                                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-doar-gold/30 bg-doar-gold/5">
                                    <Icon className="h-10 w-10 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                                </div>
                                <span className="max-w-[72px] text-center text-[12px] font-light leading-tight text-white">
                                    {label}
                                </span>
                            </div>
                            {index < SETTLEMENT_STEPS.length - 1 && (
                                <div className="mt-5 flex shrink-0 items-center px-0.5" aria-hidden="true">
                                    <div className="h-px w-2 border-t border-doar-gold/40" />
                                    <ArrowRight className="h-4 w-4 text-doar-gold/60" strokeWidth={2} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                    <ShieldCheck className="mt-0.5 h-10 w-10 shrink-0 text-doar-gold" strokeWidth={1.75} aria-hidden="true" />
                    <p className="text-[12px] font-light leading-relaxed text-white">
                        DOAR desacopla la ejecución operativa de los ciclos de liquidación para mantener{' '}
                        <span className="font-semibold text-doar-gold">
                            continuidad en la experiencia del usuario.
                        </span>
                    </p>
                </div>
            </div>
        </article>
    );
}

function OperationalResilience() {
    const cards = [
        {
            title: 'Estabilidad Operativa',
            description:
                'Capacidad para sostener operaciones activas dentro de los parámetros definidos.',
            icon: ShieldCheck,
        },
        {
            title: 'Riesgo Operativo Controlado',
            description: 'Seguimiento continuo del riesgo operativo y sus variaciones.',
            icon: Target,
        },
        {
            title: 'Respuesta Coordinada',
            description: 'Mecanismos para gestionar y responder a eventos operativos relevantes.',
            icon: Users,
        },
    ];

    return (
        <article className="rounded-2xl border border-white/8 bg-deep-space/80 p-6">
            <div className="mb-5">
                <h3 className="text-sm font-semibold text-text-primary">Resiliencia Operacional</h3>
                <p className="mt-1 text-xs text-doar-blue">
                    ¿Cómo mantiene continuidad ante eventos operativos?
                </p>
            </div>

            <ul className="space-y-4">
                {cards.map(({ title, description, icon: Icon }) => (
                    <li key={title} className="flex items-start gap-3">
                        <div
                            className={cn(
                                'flex h-14 w-14 shrink-0 items-center justify-center rounded-full',
                                'border border-doar-blue/40 bg-doar-blue/5'
                            )}
                        >
                            <Icon className="h-10 w-10 text-doar-blue" strokeWidth={1.75} aria-hidden="true" />
                        </div>
                        <div>
                            <span className="text-sm font-semibold text-text-primary">{title}</span>
                            <p className="mt-0.5 text-[12px] font-light leading-relaxed text-white">
                                {description}
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
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 lg:grid-cols-3">
            <SupervisionCenter />
            <SettlementContinuity />
            <OperationalResilience />
        </div>
    );
}
