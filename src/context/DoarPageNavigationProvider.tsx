import {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
    type ReactNode,
} from 'react';
import {
    DOAR_PAGE_SECTION_ORDER,
    extractHashFromHref,
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

export function DoarPageNavigationProvider({ children }: { children: ReactNode }) {
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
        if (!isDoarPageSectionId(hash)) return;

        const frame = window.requestAnimationFrame(() => {
            scrollToDoarSection(hash, false);
            updateActiveSection();
        });

        return () => window.cancelAnimationFrame(frame);
    }, [updateActiveSection]);

    const scrollToSection = useCallback((sectionId: string) => {
        scrollToDoarSection(sectionId);
    }, []);

    const handleAnchorClick = useCallback(
        (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            const hash = extractHashFromHref(href);
            if (!hash || !isDoarPageSectionId(hash)) return;

            event.preventDefault();
            scrollToDoarSection(hash);
        },
        []
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
