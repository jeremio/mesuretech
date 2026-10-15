import type { Category, Unit } from './types'
import { getUnit } from './index'

export type ConversionError = 'unknown_unit' | 'invalid' | 'out_of_range' | 'undefined'

export type ConversionResult
  = | { ok: true, value: number }
    | { ok: false, error: ConversionError }

export function toBase(unit: Unit, value: number): number {
  return unit.toBase ? unit.toBase(value) : value * unit.factor!
}

export function fromBase(unit: Unit, base: number): number {
  return unit.fromBase ? unit.fromBase(base) : base / unit.factor!
}

function inRange(category: Category, base: number): boolean {
  if (!category.min)
    return true
  // Tolérance pour les arrondis binaires (ex. −273,15 °C qui donne 5e-14 K)
  const epsilon = 1e-9 * Math.max(1, Math.abs(category.min.base))
  return category.min.inclusive
    ? base >= category.min.base - epsilon
    : base > category.min.base
}

export function convert(category: Category, value: number, fromId: string, toId: string): ConversionResult {
  const from = getUnit(category, fromId)
  const to = getUnit(category, toId)
  if (!from || !to)
    return { ok: false, error: 'unknown_unit' }
  if (!Number.isFinite(value))
    return { ok: false, error: 'invalid' }

  const base = toBase(from, value)
  if (!Number.isFinite(base))
    return { ok: false, error: 'undefined' }
  if (!inRange(category, base))
    return { ok: false, error: 'out_of_range' }
  if (fromId === toId)
    return { ok: true, value }

  // Unités proportionnelles : un seul rapport de facteurs, pour limiter les arrondis
  const result = from.factor !== undefined && to.factor !== undefined
    ? value * from.factor / to.factor
    : fromBase(to, base)
  if (!Number.isFinite(result))
    return { ok: false, error: 'undefined' }
  return { ok: true, value: result }
}
