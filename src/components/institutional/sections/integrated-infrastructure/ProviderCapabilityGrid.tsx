import { INFRASTRUCTURE_PROVIDERS } from '../../../../constants/institutional';
import { PartnerLogo, type PartnerLogoId } from '../../shared/partnerLogos';
import { cn } from '../../../../lib/utils';

export default function ProviderCapabilityGrid() {
    return (
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {INFRASTRUCTURE_PROVIDERS.map(({ id, category, description }) => (
                <article
                    key={id}
                    className={cn(
                        'flex h-full flex-col rounded-xl border border-white/8 bg-deep-space/80 p-6',
                        'transition-all duration-200',
                        'hover:-translate-y-1 hover:border-white/12'
                    )}
                >
                    <div className="mb-4">
                        <PartnerLogo id={id as PartnerLogoId} className="h-8 max-w-[140px]" />
                    </div>

                    <span className="mb-3 text-xs font-semibold text-doar-gold">{category}</span>

                    <p className="text-xs font-light leading-relaxed text-white sm:text-sm">
                        {description}
                    </p>
                </article>
            ))}
        </div>
    );
}
