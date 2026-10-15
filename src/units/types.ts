export type Locale = 'fr' | 'en'

/** Texte traduit dans chaque langue du site */
export type Text = Record<Locale, string>

/** Famille d'unités, utilisée pour regrouper les listes déroulantes */
export type UnitSystem = 'si' | 'metric' | 'anglo' | 'imperial' | 'us' | 'other'

export interface Unit {
  id: string
  /** Symbole, identique dans toutes les langues ou traduit (ex. « o » / « B » pour l'octet) */
  symbol: string | Text
  name: Text
  system: UnitSystem
  /**
   * Valeur d'une unité exprimée dans l'unité de base de la catégorie.
   * Les valeurs sont exactes par définition (ex. 1 in = 0,0254 m).
   */
  factor?: number
  /** Pour les conversions non proportionnelles (température, consommation) */
  toBase?: (value: number) => number
  fromBase?: (base: number) => number
  /** Relation lisible avec l'unité de base, pour les unités sans facteur */
  formula?: Text
}

export interface Category {
  id: string
  name: Text
  /** Segment d'URL de la page du convertisseur, dans chaque langue */
  slug: Text
  icon: string
  color: string
  /** Identifiant de l'unité de base (l'unité SI quand elle existe) */
  baseUnit: string
  units: Unit[]
  /** Paire d'unités proposée par défaut [de, vers] */
  defaultPair: [string, string]
  /** Domaine de validité, exprimé dans l'unité de base */
  min?: { base: number, inclusive: boolean, message: Text }
  intro: Text
  /** Remarques affichées sous le convertisseur */
  notes: Record<Locale, string[]>
}
