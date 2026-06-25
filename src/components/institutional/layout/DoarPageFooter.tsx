import { cn } from '../../../lib/utils';
import FooterBrandColumn from './doar-page-footer/FooterBrandColumn';
import FooterLinksColumn from './doar-page-footer/FooterLinksColumn';
import FooterContactColumn from './doar-page-footer/FooterContactColumn';
import FooterBottomBar from './doar-page-footer/FooterBottomBar';
import { FOOTER_PLATFORM_LINKS, FOOTER_LEGAL_LINKS } from '../../../constants/institutional';

export default function DoarPageFooter() {
    return (
        <footer
            className={cn(
                'bg-[#050505] font-institutional',
                'border-t border-doar-gold/20',
                'py-16 md:py-20'
            )}
        >
            <div className="mx-auto max-w-[1440px] px-6 md:px-12 xl:px-20">
                <div className="grid grid-cols-1 gap-12 lg:grid-cols-4 lg:gap-0">
                    <div className="px-6 lg:px-8">
                        <FooterBrandColumn />
                    </div>
                    <div className="px-6 lg:px-8 border-l border-doar-gold/25 lg:border-l">
                        <FooterLinksColumn title="PLATAFORMA" links={FOOTER_PLATFORM_LINKS} />
                    </div>
                    <div className="px-6 lg:px-8 border-l border-doar-gold/25 lg:border-l">
                        <FooterLinksColumn title="LEGAL Y COMPLIANCE" links={FOOTER_LEGAL_LINKS} />
                    </div>
                    <div className="px-6 lg:px-8 border-l border-doar-gold/25 lg:border-l">
                        <FooterContactColumn />
                    </div>
                </div>
                <FooterBottomBar />
            </div>
        </footer>
    );
}
