import type { LucideIcon } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface DiagramNodeProps {
    label: string;
    icon: LucideIcon;
    className?: string;
    iconPosition?: 'left' | 'right';
}

export default function DiagramNode({
    label,
    icon: Icon,
    className,
    iconPosition = 'left',
}: DiagramNodeProps) {
    return (
        <div
            className={cn(
                'flex items-center gap-3 rounded-3xl ',
                'bg-transparent px-5 py-3',
                'shadow-[0_0_30px_rgba(255,255,255,0.04)]',
                'transition-all duration-200 hover:-translate-y-0.5',
                'hover:border-white/16 hover:shadow-[0_0_40px_rgba(255,255,255,0.06)]',
                iconPosition === 'right' && 'flex-row-reverse',
                className
            )}
        >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ">
                <Icon className="h-[52px] w-[52px] text-doar-gold" strokeWidth={2} />
            </div>
            <span className="whitespace-nowrap text-sm font-medium text-text-primary">{label}</span>
        </div>
    );
}
