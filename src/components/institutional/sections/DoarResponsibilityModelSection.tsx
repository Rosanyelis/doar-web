import SectionWrapper from '../shared/SectionWrapper';
import ResponsibilityModelHeader from './doar-responsibility-model/ResponsibilityModelHeader';
import ResponsibilityComparisonTable from './doar-responsibility-model/ResponsibilityComparisonTable';
import ResponsibilityModelPillars from './doar-responsibility-model/ResponsibilityModelPillars';
import ResponsibilityModelBanner from './doar-responsibility-model/ResponsibilityModelBanner';

export default function DoarResponsibilityModelSection() {
    return (
        <SectionWrapper id="responsabilidades" className="border-t border-white/6">
            <ResponsibilityModelHeader />
            <ResponsibilityComparisonTable />
            <ResponsibilityModelPillars />
            <ResponsibilityModelBanner />
        </SectionWrapper>
    );
}
