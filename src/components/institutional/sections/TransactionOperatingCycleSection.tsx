import SectionWrapper from '../shared/SectionWrapper';
import TransactionCycleFlowDiagram from './transaction-operating-cycle/TransactionCycleFlowDiagram';
import TransactionCycleNarrative from './transaction-operating-cycle/TransactionCycleNarrative';
import TransactionCycleSummaryBar from './transaction-operating-cycle/TransactionCycleSummaryBar';

export default function TransactionOperatingCycleSection() {
    return (
        <SectionWrapper id="ciclo-transaccion" className="border-t border-white/6">
            <TransactionCycleNarrative />
            <TransactionCycleFlowDiagram />
            <TransactionCycleSummaryBar />
        </SectionWrapper>
    );
}
