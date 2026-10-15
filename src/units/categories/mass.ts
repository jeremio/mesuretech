import type { Category } from '../types'
import { unit } from '../define'

const POUND = 0.45359237

export const mass: Category = {
  id: 'mass',
  name: { fr: 'Masse', en: 'Mass' },
  slug: { fr: 'masse', en: 'mass' },
  icon: 'weight',
  color: '#10b981',
  baseUnit: 'kilogram',
  defaultPair: ['kilogram', 'pound'],
  units: [
    unit('milligram', 'mg', 'Milligramme', 'Milligram', 'si', 1e-6),
    unit('gram', 'g', 'Gramme', 'Gram', 'si', 1e-3),
    unit('kilogram', 'kg', 'Kilogramme', 'Kilogram', 'si', 1),
    unit('tonne', 't', 'Tonne', 'Tonne', 'metric', 1000),
    unit('carat', 'ct', 'Carat', 'Carat', 'metric', 0.0002),
    unit('ounce', 'oz', 'Once', 'Ounce', 'anglo', POUND / 16),
    unit('pound', 'lb', 'Livre', 'Pound', 'anglo', POUND),
    unit('stone', 'st', 'Stone', 'Stone', 'imperial', POUND * 14),
    unit('long_ton', 'LT', 'Tonne longue britannique', 'Long ton', 'imperial', POUND * 2240),
    unit('short_ton', 'sh tn', 'Tonne courte américaine', 'Short ton', 'us', POUND * 2000),
  ],
  intro: {
    fr: 'Convertissez grammes, kilogrammes et tonnes en livres, onces ou stones, et inversement.',
    en: 'Convert grams, kilograms and tonnes to pounds, ounces or stones, and back.',
  },
  notes: {
    fr: [
      'La livre vaut exactement 0,453 592 37 kg ; l\'once est un seizième de livre.',
      'La « tonne » anglo-saxonne n\'est pas la tonne métrique : la tonne courte américaine vaut 907 kg, la tonne longue britannique 1 016 kg.',
      'Le stone (14 livres, environ 6,35 kg) sert encore au Royaume-Uni pour le poids des personnes.',
    ],
    en: [
      'The pound is exactly 0.453 592 37 kg; the ounce is one sixteenth of a pound.',
      'The English "ton" is not the metric tonne: the US short ton is 907 kg, the UK long ton 1,016 kg.',
      'The stone (14 pounds, about 6.35 kg) is still used in the UK for body weight.',
    ],
  },
}
