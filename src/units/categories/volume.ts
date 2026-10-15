import type { Category } from '../types'
import { unit } from '../define'

const US_GALLON = 3.785411784e-3
const UK_GALLON = 4.54609e-3
const CUBIC_INCH = 0.0254 ** 3

export const volume: Category = {
  id: 'volume',
  name: { fr: 'Volume', en: 'Volume' },
  slug: { fr: 'volume', en: 'volume' },
  icon: 'beaker',
  color: '#8b5cf6',
  baseUnit: 'cubic_meter',
  defaultPair: ['liter', 'us_gallon'],
  units: [
    unit('cubic_millimeter', 'mm³', 'Millimètre cube', 'Cubic millimeter', 'si', 1e-9),
    unit('cubic_centimeter', 'cm³', 'Centimètre cube', 'Cubic centimeter', 'si', 1e-6),
    unit('cubic_decimeter', 'dm³', 'Décimètre cube', 'Cubic decimeter', 'si', 1e-3),
    unit('cubic_meter', 'm³', 'Mètre cube', 'Cubic meter', 'si', 1),
    unit('milliliter', 'mL', 'Millilitre', 'Milliliter', 'metric', 1e-6),
    unit('centiliter', 'cL', 'Centilitre', 'Centiliter', 'metric', 1e-5),
    unit('deciliter', 'dL', 'Décilitre', 'Deciliter', 'metric', 1e-4),
    unit('liter', 'L', 'Litre', 'Liter', 'metric', 1e-3),
    unit('hectoliter', 'hL', 'Hectolitre', 'Hectoliter', 'metric', 0.1),
    unit('stere', 'st', 'Stère', 'Stere', 'metric', 1),
    unit('teaspoon_metric', { fr: 'c. à c.', en: 'metric tsp' }, 'Cuillère à café', 'Metric teaspoon', 'metric', 5e-6),
    unit('tablespoon_metric', { fr: 'c. à s.', en: 'metric tbsp' }, 'Cuillère à soupe', 'Metric tablespoon', 'metric', 15e-6),
    unit('tablespoon_australian', { fr: 'c. à s. AU', en: 'AU tbsp' }, 'Cuillère à soupe australienne', 'Australian tablespoon', 'metric', 20e-6),
    unit('cup_metric', { fr: 'tasse mét.', en: 'metric cup' }, 'Tasse métrique', 'Metric cup', 'metric', 250e-6),
    unit('us_teaspoon', 'tsp', 'Cuillère à café US', 'US teaspoon', 'us', US_GALLON / 768),
    unit('us_tablespoon', 'tbsp', 'Cuillère à soupe US', 'US tablespoon', 'us', US_GALLON / 256),
    unit('us_fluid_ounce', 'US fl oz', 'Once liquide US', 'US fluid ounce', 'us', US_GALLON / 128),
    unit('us_cup', 'cup', 'Tasse US', 'US cup', 'us', US_GALLON / 16),
    unit('us_legal_cup', { fr: 'tasse légale US', en: 'US legal cup' }, 'Tasse légale US', 'US legal cup', 'us', 240e-6),
    unit('us_pint', 'US pt', 'Pinte US', 'US pint', 'us', US_GALLON / 8),
    unit('us_dry_pint', 'US dry pt', 'Pinte sèche US', 'US dry pint', 'us', 33.6003125 * CUBIC_INCH),
    unit('us_quart', 'US qt', 'Quart US', 'US quart', 'us', US_GALLON / 4),
    unit('us_gallon', 'US gal', 'Gallon US', 'US gallon', 'us', US_GALLON),
    unit('oil_barrel', 'bbl', 'Baril de pétrole', 'Oil barrel', 'us', US_GALLON * 42),
    unit('uk_fluid_ounce', 'imp fl oz', 'Once liquide impériale', 'Imperial fluid ounce', 'imperial', UK_GALLON / 160),
    unit('uk_pint', 'imp pt', 'Pinte impériale', 'Imperial pint', 'imperial', UK_GALLON / 8),
    unit('uk_quart', 'imp qt', 'Quart impérial', 'Imperial quart', 'imperial', UK_GALLON / 4),
    unit('uk_gallon', 'imp gal', 'Gallon impérial', 'Imperial gallon', 'imperial', UK_GALLON),
    unit('cubic_inch', 'in³', 'Pouce cube', 'Cubic inch', 'anglo', CUBIC_INCH),
    unit('cubic_foot', 'ft³', 'Pied cube', 'Cubic foot', 'anglo', 0.3048 ** 3),
    unit('cubic_yard', 'yd³', 'Yard cube', 'Cubic yard', 'anglo', 0.9144 ** 3),
  ],
  intro: {
    fr: 'Convertissez litres et mètres cubes en mesures de cuisine ou en unités américaines et britanniques, qui ne sont pas les mêmes.',
    en: 'Convert liters and cubic meters to kitchen measures or to US and imperial units, which are not the same.',
  },
  notes: {
    fr: [
      'Une « pinte » n\'est pas la même partout : 568 mL au Royaume-Uni et en Irlande (pinte impériale), 473 mL aux États-Unis (pinte liquide US), 551 mL pour la pinte sèche américaine (grains, fruits). Au Canada, la pinte de bière est en principe impériale.',
      'Au comptoir, les mots changent de sens selon le pays : en France, un « demi » vaut 25 cL et une « pinte » se sert souvent à 50 cL ; en Belgique, c\'est l\'inverse, la « pinte » désigne le verre standard de 25 cL et le « demi » 50 cL. Ce sont des usages, pas des unités légales : seul le volume indiqué sur le verre ou la carte fait foi.',
      'Même piège pour le gallon (3,785 L aux États-Unis contre 4,546 L au Royaume-Uni) et l\'once liquide (29,6 mL contre 28,4 mL). Le gallon impérial est plus grand, mais l\'once liquide impériale est plus petite.',
      'Quatre « tasses » coexistent : tasse US des recettes (236,6 mL), tasse légale US des étiquettes nutritionnelles (240 mL), tasse métrique d\'Australie, du Canada et de Nouvelle-Zélande (250 mL), et tasse impériale, rare (284 mL).',
      'En cuisine, la cuillère à café vaut 5 mL et la cuillère à soupe 15 mL ; en Australie, la cuillère à soupe vaut 20 mL.',
      '1 L = 1 dm³ et 1 mL = 1 cm³ (le « cc » des cylindrées et des seringues). Le stère mesure le bois de chauffage empilé : 1 stère occupe 1 m³, vides compris.',
    ],
    en: [
      'A "pint" is not the same everywhere: 568 mL in the UK and Ireland (imperial pint), 473 mL in the US (US liquid pint), 551 mL for the US dry pint (grain, berries). In Canada, a pint of beer is in principle imperial.',
      'At the bar, words change meaning across countries: in France a « demi » is 25 cL and a « pinte » is often served at 50 cL; in Belgium it is the other way round, a « pinte » is the standard 25 cL glass and a « demi » 50 cL. These are customs, not legal units: only the volume printed on the glass or the menu counts.',
      'Same trap for the gallon (3.785 L in the US versus 4.546 L in the UK) and the fluid ounce (29.6 mL versus 28.4 mL). The imperial gallon is larger, but the imperial fluid ounce is smaller.',
      'Four "cups" coexist: the US recipe cup (236.6 mL), the US legal cup used on nutrition labels (240 mL), the metric cup of Australia, Canada and New Zealand (250 mL), and the rare imperial cup (284 mL).',
      'A metric teaspoon is 5 mL and a metric tablespoon 15 mL; in Australia, a tablespoon is 20 mL.',
      '1 L = 1 dm³ and 1 mL = 1 cm³ (the "cc" of engine sizes and syringes). The stere measures stacked firewood: 1 stere fills 1 m³, gaps included.',
    ],
  },
}
