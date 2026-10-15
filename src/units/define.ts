import type { Text, Unit, UnitSystem } from './types'

/** Raccourci pour déclarer une unité proportionnelle à l'unité de base */
export function unit(id: string, symbol: string | Text, fr: string, en: string, system: UnitSystem, factor: number): Unit {
  return { id, symbol, name: { fr, en }, system, factor }
}
