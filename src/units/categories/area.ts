import type { Category } from '../types'
import { unit } from '../define'

export const area: Category = {
  id: 'area',
  name: { fr: 'Surface', en: 'Area' },
  slug: { fr: 'surface', en: 'area' },
  icon: 'square',
  color: '#ec4899',
  baseUnit: 'square_meter',
  defaultPair: ['square_meter', 'square_foot'],
  units: [
    unit('square_millimeter', 'mm²', 'Millimètre carré', 'Square millimeter', 'si', 1e-6),
    unit('square_centimeter', 'cm²', 'Centimètre carré', 'Square centimeter', 'si', 1e-4),
    unit('square_decimeter', 'dm²', 'Décimètre carré', 'Square decimeter', 'si', 1e-2),
    unit('square_meter', 'm²', 'Mètre carré', 'Square meter', 'si', 1),
    unit('centiare', 'ca', 'Centiare', 'Centiare', 'metric', 1),
    unit('are', 'a', 'Are', 'Are', 'metric', 100),
    unit('hectare', 'ha', 'Hectare', 'Hectare', 'metric', 1e4),
    unit('square_kilometer', 'km²', 'Kilomètre carré', 'Square kilometer', 'si', 1e6),
    unit('square_inch', 'in²', 'Pouce carré', 'Square inch', 'anglo', 0.00064516),
    unit('square_foot', 'ft²', 'Pied carré', 'Square foot', 'anglo', 0.09290304),
    unit('square_yard', 'yd²', 'Yard carré', 'Square yard', 'anglo', 0.83612736),
    unit('acre', 'ac', 'Acre', 'Acre', 'anglo', 4046.8564224),
    unit('square_mile', 'mi²', 'Mile carré', 'Square mile', 'anglo', 2_589_988.110336),
  ],
  intro: {
    fr: 'Convertissez mètres carrés, ares et hectares en pieds carrés, acres ou miles carrés.',
    en: 'Convert square meters, ares and hectares to square feet, acres or square miles.',
  },
  notes: {
    fr: [
      'Une unité de surface au carré se convertit avec le carré du facteur : 1 m = 100 cm, donc 1 m² = 10 000 cm².',
      '1 hectare = 100 ares = 10 000 m², soit un carré de 100 m de côté.',
      'Un terrain de football fait environ 0,7 ha ; une acre environ 0,4 ha.',
      'Le cadastre français écrit les surfaces en « ha a ca » : 1 ha 25 a 40 ca = 12 540 m² (le centiare vaut 1 m²).',
      'L\'« arpent » n\'est pas proposé : sa valeur dépendait de la région et de l\'époque (de 3 400 à 5 100 m² environ en France, environ 3 419 m² au Québec).',
    ],
    en: [
      'An area unit converts with the square of the length factor: 1 m = 100 cm, so 1 m² = 10,000 cm².',
      '1 hectare = 100 ares = 10,000 m², a square 100 m on each side.',
      'A soccer field is about 0.7 ha; an acre about 0.4 ha.',
      'French land registers write areas as "ha a ca": 1 ha 25 a 40 ca = 12,540 m² (a centiare is 1 m²).',
      'The "arpent" is not offered: its value depended on the region and the period (roughly 3,400 to 5,100 m² in France, about 3,419 m² in Quebec).',
    ],
  },
}
