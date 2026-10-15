import { categories, categoryPath } from '../src/units'

/** Pages du guide : [slug français, slug anglais] */
export const guidePages = [
  ['grandeurs-physiques', 'physical-quantities'],
  ['unites-de-mesure', 'units-of-measurement'],
  ['prefixes-si', 'si-prefixes'],
  ['systemes-d-unites', 'systems-of-units'],
] as const

/** Chaque page française et son équivalent anglais */
export const pagePairs: [string, string][] = [
  ['/', '/en/'],
  ['/convertisseurs/', '/en/converters/'],
  ['/guide/', '/en/guide/'],
  ['/a-propos', '/en/about'],
  ...guidePages.map(([fr, en]): [string, string] => [`/guide/${fr}`, `/en/guide/${en}`]),
  ...categories.map((c): [string, string] => [categoryPath(c, 'fr'), categoryPath(c, 'en')]),
]

/**
 * Le sélecteur de langue de VitePress se contente d'ajouter ou de retirer « /en » :
 * « /convertisseurs/longueur » devient « /en/convertisseurs/longueur », qui n'existe pas.
 * Cette fonction renvoie la vraie page traduite pour ces adresses, ou null.
 */
const existingPages = new Set(pagePairs.flat())

export function translatedPath(path: string): string | null {
  // Une page qui existe déjà telle quelle n'est jamais redirigée (sinon boucle infinie)
  if (existingPages.has(path))
    return null
  for (const [fr, en] of pagePairs) {
    const candidates: [string, string][] = [
      [`/en${fr}`, en],
      [`/en${fr.replace(/\/$/, '')}`, en],
      [en.replace(/^\/en/, '') || '/', fr],
    ]
    for (const [wrong, right] of candidates) {
      if (path === wrong)
        return right
    }
  }
  return null
}
