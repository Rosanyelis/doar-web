import SectionWrapper from '../shared/SectionWrapper';
import DoarIsNotHeader from './doar-is-not-comparison/DoarIsNotHeader';
import DoarIsNotComparisonCards from './doar-is-not-comparison/DoarIsNotComparisonCards';
import DoarIsNotSummaryGrid from './doar-is-not-comparison/DoarIsNotSummaryGrid';

export default function DoarIsNotComparisonSection() {
    return (
        <SectionWrapper id="que-no-es" className="border-t border-white/6">
            <DoarIsNotHeader />
            <DoarIsNotComparisonCards />
            <DoarIsNotSummaryGrid />
        </SectionWrapper>
    );
}
