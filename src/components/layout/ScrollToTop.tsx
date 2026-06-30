import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { INSTITUTIONAL_BASE_PATH } from '../../constants/routes';

function isInstitutionalSectionPath(pathname: string) {
    return new RegExp(`^${INSTITUTIONAL_BASE_PATH}/[^/]+$`).test(pathname);
}

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (isInstitutionalSectionPath(pathname)) {
            return;
        }

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
