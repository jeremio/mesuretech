import type { Category } from '../types'

const ZERO_CELSIUS = 273.15

export const temperature: Category = {
  id: 'temperature',
  name: { fr: 'Température', en: 'Temperature' },
  slug: { fr: 'temperature', en: 'temperature' },
  icon: 'thermometer',
  color: '#f59e0b',
  baseUnit: 'kelvin',
  defaultPair: ['celsius', 'fahrenheit'],
  units: [
    {
      id: 'celsius',
      symbol: '°C',
      name: { fr: 'Degré Celsius', en: 'Degree Celsius' },
      system: 'si',
      formula: { fr: 'K = °C + 273,15', en: 'K = °C + 273.15' },
      toBase: c => c + ZERO_CELSIUS,
      fromBase: k => k - ZERO_CELSIUS,
    },
    { id: 'kelvin', symbol: 'K', name: { fr: 'Kelvin', en: 'Kelvin' }, system: 'si', factor: 1 },
    {
      id: 'fahrenheit',
      symbol: '°F',
      name: { fr: 'Degré Fahrenheit', en: 'Degree Fahrenheit' },
      system: 'anglo',
      formula: { fr: '°C = (°F − 32) × 5/9', en: '°C = (°F − 32) × 5/9' },
      toBase: f => (f - 32) * 5 / 9 + ZERO_CELSIUS,
      fromBase: k => (k - ZERO_CELSIUS) * 9 / 5 + 32,
    },
    { id: 'rankine', symbol: '°R', name: { fr: 'Degré Rankine', en: 'Degree Rankine' }, system: 'other', factor: 5 / 9 },
  ],
  min: {
    base: 0,
    inclusive: true,
    message: {
      fr: 'Impossible : c\'est en dessous du zéro absolu (0 K, soit −273,15 °C ou −459,67 °F).',
      en: 'Impossible: this is below absolute zero (0 K, i.e. −273.15 °C or −459.67 °F).',
    },
  },
  intro: {
    fr: 'Convertissez entre degrés Celsius, Fahrenheit et kelvins. Ce ne sont pas de simples multiplications : les échelles n\'ont pas le même zéro.',
    en: 'Convert between degrees Celsius, Fahrenheit and kelvins. These are not plain multiplications: the scales do not share the same zero.',
  },
  notes: {
    fr: [
      'Formules : °F = °C × 9/5 + 32 et K = °C + 273,15.',
      'Les deux échelles se croisent à −40 : −40 °C = −40 °F.',
      'Pour un écart de température (et non une température), 1 °C d\'écart vaut 1 K d\'écart et 1,8 °F d\'écart.',
    ],
    en: [
      'Formulas: °F = °C × 9/5 + 32 and K = °C + 273.15.',
      'Both scales meet at −40: −40 °C = −40 °F.',
      'For a temperature difference (not a temperature), a 1 °C difference equals 1 K and 1.8 °F.',
    ],
  },
}
