import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const timer = setTimeout(() => {
                const element = document.getElementById(hash.slice(1));
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }, 100);
            return () => clearTimeout(timer);
        }

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [pathname, hash]);

    return null;
}
