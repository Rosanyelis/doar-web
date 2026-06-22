import ExecutiveStatementCard from './ExecutiveStatementCard';
import { cn } from '../../../../lib/utils';

export default function WhatIsDoarNarrative() {
    return (
        <div className={cn('flex flex-col')}>
            <span className="mb-6 text-base font-semibold uppercase tracking-[0.2em] text-doar-gold">
                ¿Qué es DOAR?
            </span>

            <h2 className="mb-8 max-w-xl text-4xl font-bold leading-[1.05] tracking-[-0.04em] text-text-primary sm:text-5xl lg:text-5xl xl:text-5xl">
                DOAR como una
                <br />
                <span className="text-doar-gold">Capa de Orquestación</span>
                <br />
                Financiera
            </h2>

            <div className="mb-8 h-0.5 w-16 bg-doar-gold" aria-hidden="true" />

            <p className="mb-2 max-w-[600px] text-[16px] font-light leading-relaxed text-white">
            DOAR coordina operaciones financieras digitales a través de una capa operacional unificada, conectando usuarios, empresas, sistemas de cumplimiento, gestión de tesorería e infraestructura de liquidación.
            </p>

            <ExecutiveStatementCard />
        </div>
    );
}
