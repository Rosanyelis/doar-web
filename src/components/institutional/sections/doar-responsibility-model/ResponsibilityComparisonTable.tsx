import { Check, Users, ArrowLeftRight, Box, Landmark, Lock, Settings, ShieldCheck, User, Wallet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { RESPONSIBILITY_MODEL_FUNCTIONS } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

const FUNCTION_ICONS: Record<
    (typeof RESPONSIBILITY_MODEL_FUNCTIONS)[number]['icon'],
    LucideIcon
> = {
    User,
    Settings,
    ArrowLeftRight,
    ShieldCheck,
    Lock,
    Wallet,
    Box,
    Landmark,
};

function DoarLogo() {
    return (
        <img
            src="/assets/institucional/logo.svg"
            alt="DOAR"
            className="h-6 w-auto max-w-[110px] object-contain object-center"
            loading="lazy"
            decoding="async"
        />
    );
}

function CheckBadge({
    variant,
    'aria-label': ariaLabel,
}: {
    variant: 'blue' | 'gold';
    'aria-label'?: string;
}) {
    const isBlue = variant === 'blue';

    return (
        <div
            className={cn(
                'inline-flex h-7 w-7 items-center justify-center rounded-full',
                isBlue ? 'bg-doar-blue/15' : 'bg-doar-gold/15'
            )}
            aria-label={ariaLabel}
            aria-hidden={ariaLabel ? undefined : true}
        >
            <Check
                className={cn('h-4 w-4', isBlue ? 'text-doar-blue' : 'text-doar-gold')}
                strokeWidth={2.5}
            />
        </div>
    );
}

const TABLE_GRID_COLS =
    'grid grid-cols-[minmax(260px,1.4fr)_minmax(200px,1fr)_minmax(200px,1fr)]';

export default function ResponsibilityComparisonTable() {
    return (
        <div
            className="overflow-x-auto rounded-2xl border border-white/8 bg-deep-space/80"
            role="region"
            aria-label="Tabla comparativa de responsabilidades DOAR vs Partners"
        >
            <div className="min-w-[720px]">
                <div className={TABLE_GRID_COLS} role="row">
                    <div
                        className="rounded-tl-2xl bg-deep-space/90 px-4 py-4 text-center text-md font-semibold uppercase tracking-[0.1em] text-soft-gray"
                        role="columnheader"
                    >
                        FUNCIÓN
                    </div>
                    <div
                        className={cn(
                            'flex items-center justify-center gap-2 rounded-tl-2xl px-4 py-4',
                            'bg-gradient-to-b from-doar-blue to-doar-blue/85',
                            'text-xs font-bold uppercase tracking-[0.08em] text-white'
                        )}
                        role="columnheader"
                    >
                        <DoarLogo />
                    </div>
                    <div
                        className={cn(
                            'flex items-center justify-center gap-2 rounded-tr-2xl px-4 py-4',
                            'bg-gradient-to-b from-doar-gold to-doar-gold/90',
                            'text-xs font-bold uppercase tracking-[0.06em] text-deep-space'
                        )}
                        role="columnheader"
                    >
                        <Users className="h-5 w-5 shrink-0" strokeWidth={1.75} aria-hidden="true" />
                        <span className="text-center text-[10px] leading-tight sm:text-xs">
                            Partners Especializados
                        </span>
                    </div>
                </div>

                {RESPONSIBILITY_MODEL_FUNCTIONS.map(({ id, function: funcName, icon, doar, partners }) => {
                    const Icon = FUNCTION_ICONS[icon];

                    return (
                        <div key={id} className={cn(TABLE_GRID_COLS, 'border-t border-white/8')} role="row">
                            <div className="flex items-center gap-3 px-4 py-4" role="cell">
                                <Icon
                                    className="h-6 w-6 shrink-0 text-doar-blue"
                                    strokeWidth={1.75}
                                    aria-hidden="true"
                                />
                                <span className="text-sm font-light text-soft-gray">{funcName}</span>
                            </div>

                            <div
                                className="flex items-center justify-center border-l border-white/8 bg-doar-blue/[0.04] px-4 py-4"
                                role="cell"
                            >
                                {doar && (
                                    <CheckBadge variant="blue" aria-label="Responsabilidad de DOAR" />
                                )}
                            </div>

                            <div
                                className="flex items-center justify-center border-l border-white/8 bg-doar-gold/[0.04] px-4 py-4"
                                role="cell"
                            >
                                {partners && (
                                    <CheckBadge
                                        variant="gold"
                                        aria-label="Responsabilidad de Partners especializados"
                                    />
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
