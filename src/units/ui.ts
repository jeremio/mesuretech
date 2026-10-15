import type { ConversionError } from './convert'
import type { Text, UnitSystem } from './types'

/** Libellés de l'interface des convertisseurs */
export const ui = {
  value: { fr: 'Valeur', en: 'Value' },
  from: { fr: 'De', en: 'From' },
  to: { fr: 'Vers', en: 'To' },
  swap: { fr: 'Inverser les unités', en: 'Swap units' },
  copy: { fr: 'Copier le résultat', en: 'Copy result' },
  copied: { fr: 'Copié', en: 'Copied' },
  share: { fr: 'Copier le lien', en: 'Copy link' },
  linkCopied: { fr: 'Lien copié', en: 'Link copied' },
  placeholder: { fr: 'Entrez une valeur', en: 'Enter a value' },
  allUnits: { fr: 'Dans toutes les unités', en: 'In every unit' },
} satisfies Record<string, Text>

export const errorMessages: Record<Exclude<ConversionError, 'out_of_range'>, Text> = {
  unknown_unit: { fr: 'Unité inconnue.', en: 'Unknown unit.' },
  invalid: { fr: 'Ce n\'est pas un nombre valide.', en: 'This is not a valid number.' },
  undefined: { fr: 'Résultat non défini pour cette valeur (division par zéro).', en: 'Undefined result for this value (division by zero).' },
}

export const systemLabels: Record<UnitSystem, Text> = {
  si: { fr: 'Système international', en: 'International System (SI)' },
  metric: { fr: 'Métriques (hors SI)', en: 'Metric (non-SI)' },
  anglo: { fr: 'Anglo-saxonnes', en: 'Imperial and US customary' },
  imperial: { fr: 'Impériales (Royaume-Uni)', en: 'Imperial (UK)' },
  us: { fr: 'Américaines (États-Unis)', en: 'US customary' },
  other: { fr: 'Autres', en: 'Other' },
}
