import { Check } from 'lucide-react';
import { RESPONSIBILITIES_TABLE } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

function MobileCard({ fn, doar, partners }: { fn: string; doar: boolean; partners: boolean }) {
    return (
        <div className="rounded-xl border border-white/8 bg-deep-space/80 p-4">
            <p className="text-sm font-medium text-soft-gray">{fn}</p>
            <div className="mt-3 flex items-center gap-6 border-t border-white/8 pt-3">
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-doar-gold">DOAR</span>
                    {doar ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-doar-gold/15">
                            <Check className="h-3.5 w-3.5 text-doar-gold" />
                        </span>
                    ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                        </span>
                    )}
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-soft-gray/70">Partners</span>
                    {partners ? (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-doar-gold/15">
                            <Check className="h-3.5 w-3.5 text-doar-gold" />
                        </span>
                    ) : (
                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}

export default function ResponsibilitiesTable() {
    return (
        <>
            {/* Mobile cards */}
            <div className="flex flex-col gap-3 lg:hidden" role="list" aria-label="Tabla de responsabilidades">
                {RESPONSIBILITIES_TABLE.map((row) => (
                    <MobileCard key={row.function} fn={row.function} doar={row.doar} partners={row.partners} />
                ))}
            </div>

            {/* Desktop table */}
            <div className="hidden overflow-x-auto lg:block">
                <table className="w-full min-w-[600px] border-collapse">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-[0.1em] text-soft-gray/70">
                                Función
                            </th>
                            <th className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-bold text-doar-gold">DOAR</span>
                                </div>
                            </th>
                            <th className="px-6 py-4 text-center">
                                <div className="flex items-center justify-center gap-2">
                                    <span className="text-sm font-bold text-soft-gray/70">Partners Especializados</span>
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {RESPONSIBILITIES_TABLE.map(({ function: fn, doar, partners }, index) => (
                            <tr
                                key={fn}
                                className={cn(
                                    'border-b border-white/5 transition-colors hover:bg-white/2',
                                    index % 2 === 0 && 'bg-white/[0.015]'
                                )}
                            >
                                <td className="px-6 py-4 text-sm font-light text-soft-gray">
                                    {fn}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {doar ? (
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-doar-gold/15">
                                            <Check className="h-3.5 w-3.5 text-doar-gold" />
                                        </span>
                                    ) : (
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                                        </span>
                                    )}
                                </td>
                                <td className="px-6 py-4 text-center">
                                    {partners ? (
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-doar-gold/15">
                                            <Check className="h-3.5 w-3.5 text-doar-gold" />
                                        </span>
                                    ) : (
                                        <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/5">
                                            <span className="h-1.5 w-1.5 rounded-full bg-white/15" />
                                        </span>
                                    )}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
