import type { Category } from '../types'
import { unit } from '../define'

const US_GALLON = 3.785411784e-3
const UK_GALLON = 4.54609e-3

export const volume: Category = {
  id: 'volume',
  name: { fr: 'Volume', en: 'Volume' },
  slug: { fr: 'volume', en: 'volume' },
  icon: 'beaker',
  color: '#8b5cf6',
  baseUnit: 'cubic_meter',
  defaultPair: ['liter', 'us_gallon'],
  units: [
    unit('milliliter', 'mL', 'Millilitre', 'Milliliter', 'metric', 1e-6),
    unit('centiliter', 'cL', 'Centilitre', 'Centiliter', 'metric', 1e-5),
    unit('deciliter', 'dL', 'Décilitre', 'Deciliter', 'metric', 1e-4),
    unit('liter', 'L', 'Litre', 'Liter', 'metric', 1e-3),
    unit('cubic_meter', 'm³', 'Mètre cube', 'Cubic meter', 'si', 1),
    unit('teaspoon_metric', { fr: 'c. à c.', en: 'metric tsp' }, 'Cuillère à café', 'Metric teaspoon', 'metric', 5e-6),
    unit('tablespoon_metric', { fr: 'c. à s.', en: 'metric tbsp' }, 'Cuillère à soupe', 'Metric tablespoon', 'metric', 15e-6),
    unit('us_teaspoon', 'tsp', 'Cuillère à café US', 'US teaspoon', 'us', US_GALLON / 768),
    unit('us_tablespoon', 'tbsp', 'Cuillère à soupe US', 'US tablespoon', 'us', US_GALLON / 256),
    unit('us_fluid_ounce', 'US fl oz', 'Once liquide US', 'US fluid ounce', 'us', US_GALLON / 128),
    unit('us_cup', 'cup', 'Tasse US', 'US cup', 'us', US_GALLON / 16),
    unit('us_pint', 'US pt', 'Pinte US', 'US pint', 'us', US_GALLON / 8),
    unit('us_quart', 'US qt', 'Quart US', 'US quart', 'us', US_GALLON / 4),
    unit('us_gallon', 'US gal', 'Gallon US', 'US gallon', 'us', US_GALLON),
    unit('oil_barrel', 'bbl', 'Baril de pétrole', 'Oil barrel', 'us', US_GALLON * 42),
    unit('uk_fluid_ounce', 'imp fl oz', 'Once liquide impériale', 'Imperial fluid ounce', 'imperial', UK_GALLON / 160),
    unit('uk_pint', 'imp pt', 'Pinte impériale', 'Imperial pint', 'imperial', UK_GALLON / 8),
    unit('uk_gallon', 'imp gal', 'Gallon impérial', 'Imperial gallon', 'imperial', UK_GALLON),
  ],
  intro: {
    fr: 'Convertissez litres et mètres cubes en mesures de cuisine ou en unités américaines et britanniques, qui ne sont pas les mêmes.',
    en: 'Convert liters and cubic meters to kitchen measures or to US and imperial units, which are not the same.',
  },
  notes: {
    fr: [
      'Attention : le gallon américain (3,785 L) et le gallon impérial britannique (4,546 L) sont différents, comme les pintes (473 mL contre 568 mL).',
      'En cuisine française, une cuillère à café vaut 5 mL et une cuillère à soupe 15 mL. Une recette américaine en « cups » utilise la tasse US de 236,6 mL.',
      '1 L = 1 dm³ et 1 mL = 1 cm³.',
    ],
    en: [
      'Careful: the US gallon (3.785 L) and the imperial gallon (4.546 L) differ, and so do the pints (473 mL versus 568 mL).',
      'A metric teaspoon is 5 mL and a metric tablespoon 15 mL. A US recipe in "cups" uses the 236.6 mL US cup.',
      '1 L = 1 dm³ and 1 mL = 1 cm³.',
    ],
  },
}
