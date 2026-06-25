import {
    ArrowLeftRight,
    Box,
    Landmark,
    Lock,
    Settings,
    ShieldCheck,
    User,
    Wallet,
} from 'lucide-react';
import { RESPONSIBILITY_MODEL_FUNCTIONS } from '../../../../constants/institutional';

const FUNCTION_ICONS = {
    User,
    Settings,
    ArrowLeftRight,
    ShieldCheck,
    Lock,
    Wallet,
    Box,
    Landmark,
} as const;

const DOAR_LOGO = (
    <svg
        className="h-5 w-7 fill-white"
        viewBox="0 0 32 24"
        aria-hidden="true"
    >
        <path d="M4 4 L28 4 L20 12 L28 12 L12 20 L16 12 L4 12 Z" />
    </svg>
);

export default function ResponsibilityComparisonTable() {
    return (
        <div
            className="overflow-x-auto rounded-2xl border border-white/8 bg-deep-space/80 min-w-0"
            role="region"
            aria-label="Tabla comparativa de responsabilidades DOAR vs Partners"
        >
            <table className="min-w-[720px] w-full" aria-describedby="responsibility-table-desc">
                <caption id="responsibility-table-desc" className="sr-only">
                    Comparativa de responsabilidades entre DOAR y Partners especializados
                </caption>
                <thead>
                    <tr className="border-b border-doar-blue/15">
                        <th
                            scope="col"
                            className="text-center bg-deep-space/90 text-xs font-semibold uppercase tracking-[0.1em] text-soft-gray py-4 px-4"
                        >
                            FUNCIÓN
                        </th>
                        <th
                            scope="col"
                            className="text-center bg-doar-blue text-white text-xs font-bold uppercase tracking-[0.08em] py-4 px-4 flex items-center justify-center gap-2"
                        >
                            {DOAR_LOGO}
                            <span>DOAR</span>
                        </th>
                        <th
                            scope="col"
                            className="text-center bg-doar-gold text-deep-space text-xs font-bold uppercase tracking-[0.08em] py-4 px-4 flex items-center justify-center gap-2 border-l border-doar-blue/20"
                        >
                            <svg
                                className="h-5 w-5 text-deep-space"
                                strokeWidth={1.75}
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                                />
                            </svg>
                            <span>PARTNERS ESPECIALIZADOS</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {RESPONSIBILITY_MODEL_FUNCTIONS.map(({ id, function: funcName, icon, doar, partners }) => {
                        const Icon = FUNCTION_ICONS[icon as keyof typeof FUNCTION_ICONS];
                        return (
                            <tr key={id} className="border-b border-white/8 last:border-0">
                                <td className="flex items-center gap-1 gap-3 px-4 py-4 min-w-[280px]">
                                    <Icon className="h-4 w-4 text-soft-gray shrink-0" strokeWidth={1.75} aria-hidden="true" />
                                    <span className="text-sm font-light text-soft-gray">{funcName}</span>
                                </td>
                                <td className="text-center px-4 py-4 border-l border-doar-blue/20">
                                    {doar && (
                                        <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-doar-blue/15" aria-label="Responsabilidad de DOAR">
                                            <svg
                                                className="h-4 w-4 text-doar-blue"
                                                strokeWidth={2.5}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </td>
                                <td className="text-center px-4 py-4 border-l border-doar-blue/20">
                                    {partners && (
                                        <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-doar-gold/15" aria-label="Responsabilidad de Partners">
                                            <svg
                                                className="h-4 w-4 text-doar-gold"
                                                strokeWidth={2.5}
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                stroke="currentColor"
                                                aria-hidden="true"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                    )}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}
