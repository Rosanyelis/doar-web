import type { ImgHTMLAttributes } from 'react';

interface SafeImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    fallback?: string;
}

export default function SafeImage({ fallback, onError, ...props }: SafeImageProps) {
    return (
        <img
            onError={(e) => {
                onError?.(e);
                if (fallback) {
                    (e.target as HTMLImageElement).src = fallback;
                }
            }}
            {...props}
        />
    );
}
