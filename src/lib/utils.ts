import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function openDownloadModal() {
  window.dispatchEvent(new CustomEvent('open-download-modal'))
}

export const FALLBACK_LOGO_SVG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="154" height="40"><rect width="100%" height="100%" fill="%23E5E8EB" rx="4"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="14" fill="%237B7B7B">DOAR</text></svg>'

export const FALLBACK_AVATAR_SVG =
  'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="%23E5E8EB"/></svg>'
