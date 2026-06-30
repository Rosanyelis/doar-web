import { INSTITUTIONAL_BASE_PATH, institutionalSectionPath } from '../constants/routes';

export const INSTITUTIONAL_HEADER_OFFSET = 88;

/** Orden DOM de secciones con ancla en /institucional */
export const DOAR_PAGE_SECTION_ORDER = [
    'que-es',
    'ledger',
    'infraestructura',
    'operaciones-unificadas',
    'modelo-operativo',
    'infraestructura-segregada',
    'tesoreria-liquidez',
    'conciliacion-operativa',
    'cumplimiento',
    'gestion-riesgo',
    'monitoreo-continuo',
    'auditoria',
    'tesoreria',
    'posicion',
    'fundacion',
    'que-no-es',
    'responsabilidades',
] as const;

export type DoarPageSectionId = (typeof DOAR_PAGE_SECTION_ORDER)[number];
export type DoarNavGroupId =
    | 'que-es'
    | 'modelo-operativo'
    | 'infraestructura'
    | 'cumplimiento'
    | 'tesoreria'
    | 'posicion'
    | 'transparencia'
    | 'responsabilidades';

export const DOAR_NAV_GROUP_SECTIONS: Record<DoarNavGroupId, readonly DoarPageSectionId[]> = {
    'que-es': ['que-es', 'ledger', 'infraestructura', 'operaciones-unificadas'],
    'modelo-operativo': [
        'modelo-operativo',
        'infraestructura-segregada',
        'tesoreria-liquidez',
        'conciliacion-operativa',
    ],
    infraestructura: ['infraestructura'],
    cumplimiento: ['cumplimiento', 'gestion-riesgo', 'monitoreo-continuo', 'auditoria'],
    tesoreria: ['tesoreria'],
    posicion: ['posicion', 'fundacion', 'que-no-es'],
    transparencia: ['auditoria'],
    responsabilidades: ['responsabilidades'],
};

const LEGACY_INSTITUTIONAL_PATHS = ['/sobre-nosotros', '/doar'] as const;

export function extractHashFromHref(href: string): string | null {
    const hashIndex = href.indexOf('#');
    return hashIndex >= 0 ? href.slice(hashIndex + 1) : null;
}

function extractSectionIdFromPath(path: string, basePath: string): string | null {
    if (!path.startsWith(`${basePath}/`)) return null;

    const sectionId = path.slice(basePath.length + 1).split('?')[0]?.split('#')[0] ?? '';
    return isDoarPageSectionId(sectionId) ? sectionId : null;
}

export function extractSectionIdFromHref(href: string): string | null {
    const hash = extractHashFromHref(href);
    if (hash && isDoarPageSectionId(hash)) return hash;

    for (const basePath of LEGACY_INSTITUTIONAL_PATHS) {
        const legacySectionId = extractSectionIdFromPath(href, basePath);
        if (legacySectionId) return legacySectionId;
    }

    return extractSectionIdFromPath(href, INSTITUTIONAL_BASE_PATH);
}

export function isInstitutionalSectionHref(href: string): boolean {
    return extractSectionIdFromHref(href) !== null;
}

export function isDoarPageSectionId(value: string): value is DoarPageSectionId {
    return (DOAR_PAGE_SECTION_ORDER as readonly string[]).includes(value);
}

export function isNavGroupActive(navGroup: DoarNavGroupId, activeSectionId: DoarPageSectionId | null) {
    if (!activeSectionId) return false;
    return DOAR_NAV_GROUP_SECTIONS[navGroup]?.includes(activeSectionId) ?? false;
}

export function resolveActiveSectionFromScroll(): DoarPageSectionId {
    const trigger = INSTITUTIONAL_HEADER_OFFSET + 32;
    let current: DoarPageSectionId = DOAR_PAGE_SECTION_ORDER[0];

    for (const sectionId of DOAR_PAGE_SECTION_ORDER) {
        const element = document.getElementById(sectionId);
        if (!element) continue;

        if (element.getBoundingClientRect().top <= trigger) {
            current = sectionId;
        } else {
            break;
        }
    }

    return current;
}

export function scrollToDoarSection(sectionId: string, updateUrl = true) {
    const element = document.getElementById(sectionId);
    if (!element) return false;

    const top =
        element.getBoundingClientRect().top + window.scrollY - INSTITUTIONAL_HEADER_OFFSET;

    window.scrollTo({ top, behavior: 'smooth' });

    if (updateUrl) {
        window.history.replaceState(null, '', institutionalSectionPath(sectionId));
    }

    return true;
}

export { INSTITUTIONAL_BASE_PATH, institutionalSectionPath };
