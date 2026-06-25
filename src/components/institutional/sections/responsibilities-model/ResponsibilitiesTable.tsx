import { Check } from 'lucide-react';
import { RESPONSIBILITIES_TABLE } from '../../../../constants/institutional';
import { cn } from '../../../../lib/utils';

export default function ResponsibilitiesTable() {
    return (
        <div className="overflow-x-auto">
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
    );
}
