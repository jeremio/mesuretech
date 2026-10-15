import type { Category } from '../types'

const MILE_KM = 1.609344
/** L/100 km = MPG_US / mpg : 100 × litres par gallon ÷ km par mile */
const MPG_US = 100 * 3.785411784 / MILE_KM
const MPG_UK = 100 * 4.54609 / MILE_KM

export const fuel: Category = {
  id: 'fuel',
  name: { fr: 'Consommation de carburant', en: 'Fuel consumption' },
  slug: { fr: 'consommation', en: 'fuel-consumption' },
  icon: 'fuel',
  color: '#0ea5e9',
  baseUnit: 'liters_per_100km',
  defaultPair: ['liters_per_100km', 'mpg_us'],
  units: [
    { id: 'liters_per_100km', symbol: 'L/100 km', name: { fr: 'Litres aux 100 km', en: 'Liters per 100 km' }, system: 'metric', factor: 1 },
    {
      id: 'km_per_liter',
      symbol: 'km/L',
      name: { fr: 'Kilomètres par litre', en: 'Kilometers per liter' },
      system: 'metric',
      formula: { fr: 'L/100 km = 100 ÷ km/L', en: 'L/100 km = 100 ÷ km/L' },
      toBase: v => 100 / v,
      fromBase: b => 100 / b,
    },
    {
      id: 'mpg_us',
      symbol: 'mpg US',
      name: { fr: 'Miles par gallon US', en: 'Miles per US gallon' },
      system: 'us',
      formula: { fr: 'L/100 km ≈ 235,215 ÷ mpg', en: 'L/100 km ≈ 235.215 ÷ mpg' },
      toBase: v => MPG_US / v,
      fromBase: b => MPG_US / b,
    },
    {
      id: 'mpg_uk',
      symbol: 'mpg imp',
      name: { fr: 'Miles par gallon impérial', en: 'Miles per imperial gallon' },
      system: 'imperial',
      formula: { fr: 'L/100 km ≈ 282,481 ÷ mpg', en: 'L/100 km ≈ 282.481 ÷ mpg' },
      toBase: v => MPG_UK / v,
      fromBase: b => MPG_UK / b,
    },
  ],
  min: {
    base: 0,
    inclusive: false,
    message: {
      fr: 'La consommation doit être strictement positive.',
      en: 'Fuel consumption must be strictly positive.',
    },
  },
  intro: {
    fr: 'Convertissez une consommation en litres aux 100 km en miles par gallon (américain ou britannique), et inversement.',
    en: 'Convert fuel consumption between liters per 100 km and miles per gallon (US or imperial).',
  },
  notes: {
    fr: [
      'Les deux mesures varient en sens inverse : moins de litres aux 100 km, c\'est plus de miles par gallon. On ne passe donc pas de l\'une à l\'autre par une simple multiplication.',
      'Formule : L/100 km ≈ 235,2 ÷ mpg (US), ou 282,5 ÷ mpg (UK).',
      '5 L/100 km ≈ 47 mpg US ≈ 56,5 mpg UK.',
    ],
    en: [
      'The two measures move in opposite directions: fewer liters per 100 km means more miles per gallon, so they are not related by a plain multiplication.',
      'Formula: L/100 km ≈ 235.2 ÷ mpg (US), or 282.5 ÷ mpg (UK).',
      '5 L/100 km ≈ 47 mpg US ≈ 56.5 mpg UK.',
    ],
  },
}
