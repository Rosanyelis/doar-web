import SectionWrapper from '../shared/SectionWrapper';
import ResponsibilityModelHeader from './doar-responsibility-model/ResponsibilityModelHeader';
import ResponsibilityComparisonTable from './doar-responsibility-model/ResponsibilityComparisonTable';

export default function DoarResponsibilityModelSection() {
    return (
        <SectionWrapper id="responsabilidades" className="border-t border-white/6">
            <ResponsibilityModelHeader />
            <ResponsibilityComparisonTable />
        </SectionWrapper>
    );
}
