import SectionWrapper from '../shared/SectionWrapper';
import DoarFoundationHeader from './doar-foundation-definition/DoarFoundationHeader';
import DoarFoundationPillars from './doar-foundation-definition/DoarFoundationPillars';
import DoarFoundationBanner from './doar-foundation-definition/DoarFoundationBanner';

export default function DoarFoundationDefinitionSection() {
    return (
        <SectionWrapper id="fundacion" className="border-t border-white/6">
            <DoarFoundationHeader />
            <DoarFoundationPillars />
            <DoarFoundationBanner />
        </SectionWrapper>
    );
}
