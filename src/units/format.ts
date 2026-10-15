import type { Locale } from './types'

/**
 * Précision de calcul : 15 chiffres significatifs suffisent pour 2^40 = 1 099 511 627 776
 * et masquent le bruit des flottants (0,1 × 3 = 0,30000000000000004).
 */
export const SIGNIFICANT_DIGITS = 15

/** Précision d'affichage des nombres non entiers : lisible, et largement assez précise */
export const DISPLAY_DIGITS = 10

const SUPERSCRIPTS: Record<string, string> = {
  '-': '⁻',
  '0': '⁰',
  '1': '¹',
  '2': '²',
  '3': '³',
  '4': '⁴',
  '5': '⁵',
  '6': '⁶',
  '7': '⁷',
  '8': '⁸',
  '9': '⁹',
}

function intlLocale(locale: Locale): string {
  return locale === 'fr' ? 'fr-FR' : 'en-US'
}

/** Arrondit au nombre de chiffres significatifs, pour supprimer le bruit des flottants */
export function roundSignificant(value: number, digits = SIGNIFICANT_DIGITS): number {
  return value === 0 ? 0 : Number(value.toPrecision(digits))
}

/**
 * Nombre lisible dans la langue de la page : « 1 609,344 » en français, « 1,609.344 » en anglais.
 * Les entiers s'affichent en entier ; les autres nombres avec 10 chiffres significatifs.
 * Les très grands et très petits nombres passent en notation scientifique (« 1,5 × 10¹⁸ »).
 */
export function formatNumber(value: number, locale: Locale): string {
  const exact = roundSignificant(value)
  if (exact === 0)
    return '0'
  const digits = Number.isInteger(exact) && Math.abs(exact) < 1e15 ? SIGNIFICANT_DIGITS : DISPLAY_DIGITS
  const rounded = roundSignificant(exact, digits)
  const abs = Math.abs(rounded)
  if (abs >= 1e15 || abs < 1e-6) {
    const [mantissa, exponent] = rounded.toExponential(digits - 1).split('e')
    const m = new Intl.NumberFormat(intlLocale(locale), { maximumSignificantDigits: digits })
      .format(Number(mantissa))
    const e = String(Number(exponent)).replace(/[-\d]/g, c => SUPERSCRIPTS[c])
    return `${m} × 10${e}`
  }
  return new Intl.NumberFormat(intlLocale(locale), { maximumSignificantDigits: digits }).format(rounded)
}

/** Valeur à copier : sans séparateur de milliers, avec la virgule décimale en français */
export function plainNumber(value: number, locale: Locale): string {
  const text = String(roundSignificant(value))
  return locale === 'fr' ? text.replace('.', ',') : text
}

/**
 * Lit une saisie libre : « 1 234,5 », « 1,234.5 », « 2,5 », « 1e3 », « -40 ».
 * Renvoie null si la saisie est vide, NaN si elle n'est pas un nombre.
 */
export function parseNumber(input: string): number | null {
  let text = input.trim().replace(/[\s']/g, '')
  if (text === '')
    return null
  text = text.replace(/^−/, '-')
  const lastComma = text.lastIndexOf(',')
  const lastDot = text.lastIndexOf('.')
  if (lastComma !== -1 && lastDot !== -1) {
    // Les deux sont présents : le dernier est le séparateur décimal
    text = lastComma > lastDot
      ? text.replace(/\./g, '').replace(',', '.')
      : text.replace(/,/g, '')
  }
  else {
    text = text.replace(',', '.')
  }
  if (!/^[-+]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[-+]?\d+)?$/i.test(text))
    return Number.NaN
  return Number(text)
}
