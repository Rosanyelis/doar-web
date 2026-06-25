import { Mail } from 'lucide-react';
import { cn } from '../../../../lib/utils';
import { FOOTER_CONTACT_EMAILS } from '../../../../constants/institutional';

export default function FooterContactColumn() {
    return (
        <div className="flex flex-col">
            <div className="mb-6">
                <h3 className="text-sm font-bold uppercase tracking-[0.12em] text-doar-gold">
                    CONTACTO
                </h3>
                <div className="mt-3 mb-6 h-px w-10 bg-doar-gold" aria-hidden="true" />
            </div>
            <div className="flex flex-col" role="list" aria-label="Emails de contacto">
                {FOOTER_CONTACT_EMAILS.map(({ id, email }) => (
                    <a
                        key={id}
                        href={`mailto:${email}`}
                        className={cn(
                            'flex items-center gap-3 py-3',
                            'border-b border-white/8 last:border-b-0',
                            'text-[13px] font-light text-white/90',
                            'hover:text-doar-gold transition-colors',
                            'focus:outline-none focus-visible:ring-2 focus-visible:ring-doar-gold focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]'
                        )}
                    >
                        <Mail className="h-4 w-4 text-doar-gold shrink-0" aria-hidden="true" />
                        <span>{email}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}
