import type { Category } from '../types'
import { unit } from '../define'

export const length: Category = {
  id: 'length',
  name: { fr: 'Longueur', en: 'Length' },
  slug: { fr: 'longueur', en: 'length' },
  icon: 'ruler',
  color: '#3b82f6',
  baseUnit: 'meter',
  defaultPair: ['meter', 'foot'],
  units: [
    unit('nanometer', 'nm', 'Nanomètre', 'Nanometer', 'si', 1e-9),
    unit('micrometer', 'µm', 'Micromètre', 'Micrometer', 'si', 1e-6),
    unit('millimeter', 'mm', 'Millimètre', 'Millimeter', 'si', 1e-3),
    unit('centimeter', 'cm', 'Centimètre', 'Centimeter', 'si', 1e-2),
    unit('meter', 'm', 'Mètre', 'Meter', 'si', 1),
    unit('kilometer', 'km', 'Kilomètre', 'Kilometer', 'si', 1e3),
    unit('inch', 'in', 'Pouce', 'Inch', 'anglo', 0.0254),
    unit('foot', 'ft', 'Pied', 'Foot', 'anglo', 0.3048),
    unit('yard', 'yd', 'Yard', 'Yard', 'anglo', 0.9144),
    unit('mile', 'mi', 'Mile', 'Mile', 'anglo', 1609.344),
    unit('nautical_mile', 'NM', 'Mille nautique', 'Nautical mile', 'other', 1852),
    unit('astronomical_unit', 'au', 'Unité astronomique', 'Astronomical unit', 'other', 149_597_870_700),
    unit('light_year', { fr: 'al', en: 'ly' }, 'Année-lumière', 'Light-year', 'other', 9_460_730_472_580_800),
  ],
  intro: {
    fr: 'Convertissez entre unités métriques (mètre et ses multiples), anglo-saxonnes (pouce, pied, mile) et unités de navigation ou d\'astronomie.',
    en: 'Convert between metric units (the meter and its multiples), imperial units (inch, foot, mile) and navigation or astronomy units.',
  },
  notes: {
    fr: [
      'Le pouce vaut exactement 2,54 cm depuis l\'accord international de 1959 ; le pied, le yard et le mile en découlent.',
      'Le mille nautique (1 852 m) correspond à une minute d\'arc de latitude : c\'est l\'unité de la navigation maritime et aérienne.',
      'L\'année-lumière est la distance parcourue par la lumière en une année julienne (365,25 jours).',
    ],
    en: [
      'The inch has been exactly 2.54 cm since the 1959 international agreement; the foot, yard and mile follow from it.',
      'The nautical mile (1,852 m) matches one minute of arc of latitude: it is the unit of sea and air navigation.',
      'The light-year is the distance light travels in one Julian year (365.25 days).',
    ],
  },
}
