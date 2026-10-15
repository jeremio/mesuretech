import type { Category } from '../types'
import { unit } from '../define'

const POUND = 0.45359237
const TROY_OUNCE = 0.0311034768

export const mass: Category = {
  id: 'mass',
  name: { fr: 'Masse', en: 'Mass' },
  slug: { fr: 'masse', en: 'mass' },
  icon: 'weight',
  color: '#10b981',
  baseUnit: 'kilogram',
  defaultPair: ['kilogram', 'pound'],
  units: [
    unit('dalton', 'Da', 'Dalton', 'Dalton', 'other', 1.66053906892e-27),
    unit('microgram', 'µg', 'Microgramme', 'Microgram', 'si', 1e-9),
    unit('milligram', 'mg', 'Milligramme', 'Milligram', 'si', 1e-6),
    unit('gram', 'g', 'Gramme', 'Gram', 'si', 1e-3),
    unit('kilogram', 'kg', 'Kilogramme', 'Kilogram', 'si', 1),
    unit('quintal', 'q', 'Quintal', 'Quintal', 'metric', 100),
    unit('tonne', 't', 'Tonne', 'Tonne', 'metric', 1000),
    unit('carat', 'ct', 'Carat', 'Carat', 'metric', 0.0002),
    unit('metric_pound', { fr: 'livre', en: 'metric lb' }, 'Livre métrique', 'Metric pound', 'metric', 0.5),
    unit('grain', 'gr', 'Grain', 'Grain', 'anglo', POUND / 7000),
    unit('ounce', 'oz', 'Once', 'Ounce', 'anglo', POUND / 16),
    unit('troy_ounce', 'oz t', 'Once troy', 'Troy ounce', 'anglo', TROY_OUNCE),
    unit('pound', 'lb', 'Livre anglo-saxonne', 'Pound', 'anglo', POUND),
    unit('stone', 'st', 'Stone', 'Stone', 'imperial', POUND * 14),
    unit('short_hundredweight', 'sh cwt', 'Quintal court américain', 'Short hundredweight', 'us', POUND * 100),
    unit('long_hundredweight', 'cwt', 'Quintal long britannique', 'Long hundredweight', 'imperial', POUND * 112),
    unit('short_ton', 'sh tn', 'Tonne courte américaine', 'Short ton', 'us', POUND * 2000),
    unit('long_ton', 'LT', 'Tonne longue britannique', 'Long ton', 'imperial', POUND * 2240),
  ],
  intro: {
    fr: 'Convertissez grammes, kilogrammes et tonnes en livres, onces ou stones, et inversement.',
    en: 'Convert grams, kilograms and tonnes to pounds, ounces or stones, and back.',
  },
  notes: {
    fr: [
      'La livre anglo-saxonne vaut exactement 0,453 592 37 kg ; l\'once est un seizième de livre. La « livre » des marchés français vaut 500 g : ce n\'est pas la même unité.',
      'L\'or et l\'argent se pèsent en onces troy (31,103 g), plus lourdes que l\'once ordinaire (28,350 g). Un cours « à l\'once » parle toujours d\'once troy.',
      'Le « quintal » français vaut 100 kg ; le *hundredweight* vaut 100 livres (45,4 kg) aux États-Unis et 112 livres (50,8 kg) au Royaume-Uni.',
      'De même, la « tonne » anglo-saxonne n\'est pas la tonne métrique : la tonne courte américaine vaut 907 kg, la tonne longue britannique 1 016 kg.',
      'Le stone (14 livres, environ 6,35 kg) sert encore au Royaume-Uni pour le poids des personnes.',
    ],
    en: [
      'The pound is exactly 0.453 592 37 kg; the ounce is one sixteenth of a pound. The French market "livre" is 500 g: a different unit.',
      'Gold and silver are weighed in troy ounces (31.103 g), heavier than the ordinary ounce (28.350 g). A price "per ounce" always means per troy ounce.',
      'The hundredweight is 100 pounds (45.4 kg) in the US and 112 pounds (50.8 kg) in the UK; the French "quintal" is 100 kg.',
      'Likewise, the English "ton" is not the metric tonne: the US short ton is 907 kg, the UK long ton 1,016 kg.',
      'The stone (14 pounds, about 6.35 kg) is still used in the UK for body weight.',
    ],
  },
}
