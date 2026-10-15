import type { Category, Locale, Unit } from './types'
import { angle } from './categories/angle'
import { area } from './categories/area'
import { data } from './categories/data'
import { energy } from './categories/energy'
import { force } from './categories/force'
import { frequency } from './categories/frequency'
import { fuel } from './categories/fuel'
import { length } from './categories/length'
import { mass } from './categories/mass'
import { power } from './categories/power'
import { pressure } from './categories/pressure'
import { speed } from './categories/speed'
import { temperature } from './categories/temperature'
import { time } from './categories/time'
import { volume } from './categories/volume'

export type { Category, Locale, Text, Unit, UnitSystem } from './types'

/** Registre unique : l'ordre est celui de l'accueil et de la barre latérale */
export const categories: Category[] = [
  length,
  mass,
  temperature,
  volume,
  area,
  speed,
  time,
  data,
  energy,
  pressure,
  power,
  force,
  frequency,
  angle,
  fuel,
]

export function getCategory(id: string): Category | undefined {
  return categories.find(c => c.id === id)
}

export function getUnit(category: Category, id: string): Unit | undefined {
  return category.units.find(u => u.id === id)
}

export function unitSymbol(unit: Unit, locale: Locale): string {
  return typeof unit.symbol === 'string' ? unit.symbol : unit.symbol[locale]
}

/** Chemin de la page d'un convertisseur, dans la langue demandée */
export function categoryPath(category: Category, locale: Locale): string {
  return locale === 'fr'
    ? `/convertisseurs/${category.slug.fr}`
    : `/en/converters/${category.slug.en}`
}
