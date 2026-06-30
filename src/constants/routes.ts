export const ROUTES = {
  HOME: '/',
  SEGURIDAD: '/seguridad',
  AFILIADOS: '/afiliados',
  SOPORTE: '/soporte',
  TERMINOS: '/terminos',
  PRIVACIDAD: '/privacidad',
  DECLARACION_RIESGO: '/declaracion-riesgo',
  POLITICA_CUMPLIMIENTO: '/politica-cumplimiento',
  CONSENTIMIENTO_BIOMETRICO: '/consentimiento-biometrico',
  INSTITUCIONAL: '/institucional',
  /** @deprecated Usar ROUTES.INSTITUCIONAL */
  SOBRE_NOSOTROS: '/institucional',
} as const;

export const INSTITUTIONAL_BASE_PATH = ROUTES.INSTITUCIONAL;

export function institutionalSectionPath(sectionId: string) {
  return `${INSTITUTIONAL_BASE_PATH}/${sectionId}`;
}
