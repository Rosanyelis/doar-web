import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
    DOAR_PAGE_SECTION_ORDER,
    extractSectionIdFromHref,
    institutionalSectionPath,
    isDoarPageSectionId,
    isNavGroupActive,
    resolveActiveSectionFromScroll,
    scrollToDoarSection,
    type DoarNavGroupId,
    type DoarPageSectionId,
} from '../lib/doar-page-navigation';

interface DoarPageNavigationContextValue {
    activeSectionId: DoarPageSectionId | null;
    isNavGroupActive: (navGroup: DoarNavGroupId) => boolean;
    scrollToSection: (sectionId: string) => void;
    handleAnchorClick: (event: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

const DoarPageNavigationContext = createContext<DoarPageNavigationContextValue | null>(null);

function scrollToSectionWhenReady(sectionId: DoarPageSectionId, onComplete?: () => void) {
    const attemptScroll = (retriesLeft: number) => {
        const didScroll = scrollToDoarSection(sectionId, false);
        if (didScroll) {
            onComplete?.();
            return;
        }

        if (retriesLeft > 0) {
            window.setTimeout(() => attemptScroll(retriesLeft - 1), 100);
        }
    };

    window.requestAnimationFrame(() => attemptScroll(8));
}

export function DoarPageNavigationProvider({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const { sectionId: routeSectionId } = useParams<{ sectionId?: string }>();
    const [activeSectionId, setActiveSectionId] = useState<DoarPageSectionId | null>(null);

    const updateActiveSection = useCallback(() => {
        setActiveSectionId(resolveActiveSectionFromScroll());
    }, []);

    useEffect(() => {
        updateActiveSection();

        window.addEventListener('scroll', updateActiveSection, { passive: true });
        window.addEventListener('resize', updateActiveSection);

        return () => {
            window.removeEventListener('scroll', updateActiveSection);
            window.removeEventListener('resize', updateActiveSection);
        };
    }, [updateActiveSection]);

    useEffect(() => {
        const hash = window.location.hash.slice(1);
        if (hash && isDoarPageSectionId(hash)) {
            navigate(institutionalSectionPath(hash), { replace: true });
            return;
        }

        if (!routeSectionId || !isDoarPageSectionId(routeSectionId)) return;

        scrollToSectionWhenReady(routeSectionId, updateActiveSection);
    }, [navigate, routeSectionId, updateActiveSection]);

    const scrollToSection = useCallback(
        (sectionId: string) => {
            if (!isDoarPageSectionId(sectionId)) return;

            navigate(institutionalSectionPath(sectionId));
            scrollToSectionWhenReady(sectionId, updateActiveSection);
        },
        [navigate, updateActiveSection]
    );

    const handleAnchorClick = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            const sectionId = extractSectionIdFromHref(href);
            if (!sectionId || !isDoarPageSectionId(sectionId)) return;

            event.preventDefault();
            navigate(institutionalSectionPath(sectionId));
            scrollToSectionWhenReady(sectionId, updateActiveSection);
        },
        [navigate, updateActiveSection]
    );

    const value = useMemo<DoarPageNavigationContextValue>(
        () => ({
            activeSectionId,
            isNavGroupActive: (navGroup: DoarNavGroupId) =>
                isNavGroupActive(navGroup, activeSectionId),
            scrollToSection,
            handleAnchorClick,
        }),
        [activeSectionId, handleAnchorClick, scrollToSection]
    );

    return (
        <DoarPageNavigationContext.Provider value={value}>
            {children}
        </DoarPageNavigationContext.Provider>
    );
}

export function useDoarPageNavigation() {
    const context = useContext(DoarPageNavigationContext);
    if (!context) {
        throw new Error('useDoarPageNavigation debe usarse dentro de DoarPageNavigationProvider');
    }
    return context;
}

export function useOptionalDoarPageNavigation() {
    return useContext(DoarPageNavigationContext);
}

export { DOAR_PAGE_SECTION_ORDER };
