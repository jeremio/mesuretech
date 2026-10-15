import type { Category } from '../types'
import { unit } from '../define'

const AU = 149_597_870_700

export const length: Category = {
  id: 'length',
  name: { fr: 'Longueur', en: 'Length' },
  slug: { fr: 'longueur', en: 'length' },
  icon: 'ruler',
  color: '#3b82f6',
  baseUnit: 'meter',
  defaultPair: ['meter', 'foot'],
  units: [
    unit('picometer', 'pm', 'Picomètre', 'Picometer', 'si', 1e-12),
    unit('angstrom', 'Å', 'Ångström', 'Ångström', 'metric', 1e-10),
    unit('nanometer', 'nm', 'Nanomètre', 'Nanometer', 'si', 1e-9),
    unit('micrometer', 'µm', 'Micromètre', 'Micrometer', 'si', 1e-6),
    unit('millimeter', 'mm', 'Millimètre', 'Millimeter', 'si', 1e-3),
    unit('centimeter', 'cm', 'Centimètre', 'Centimeter', 'si', 1e-2),
    unit('decimeter', 'dm', 'Décimètre', 'Decimeter', 'si', 1e-1),
    unit('meter', 'm', 'Mètre', 'Meter', 'si', 1),
    unit('decameter', 'dam', 'Décamètre', 'Decameter', 'si', 10),
    unit('hectometer', 'hm', 'Hectomètre', 'Hectometer', 'si', 100),
    unit('kilometer', 'km', 'Kilomètre', 'Kilometer', 'si', 1e3),
    unit('scandinavian_mile', { fr: 'mil', en: 'Scand. mil' }, 'Mile scandinave', 'Scandinavian mile', 'metric', 1e4),
    unit('thou', 'thou', 'Millième de pouce', 'Thou', 'anglo', 0.0000254),
    unit('inch', 'in', 'Pouce', 'Inch', 'anglo', 0.0254),
    unit('foot', 'ft', 'Pied', 'Foot', 'anglo', 0.3048),
    unit('us_survey_foot', 'US survey ft', 'Pied d\'arpenteur US', 'US survey foot', 'us', 1200 / 3937),
    unit('yard', 'yd', 'Yard', 'Yard', 'anglo', 0.9144),
    unit('fathom', 'ftm', 'Brasse anglaise', 'Fathom', 'anglo', 1.8288),
    unit('furlong', 'fur', 'Furlong', 'Furlong', 'anglo', 201.168),
    unit('mile', 'mi', 'Mile', 'Mile', 'anglo', 1609.344),
    unit('nautical_mile', 'NM', 'Mille nautique', 'Nautical mile', 'other', 1852),
    unit('astronomical_unit', 'au', 'Unité astronomique', 'Astronomical unit', 'other', AU),
    unit('light_year', { fr: 'al', en: 'ly' }, 'Année-lumière', 'Light-year', 'other', 9_460_730_472_580_800),
    unit('parsec', 'pc', 'Parsec', 'Parsec', 'other', AU * 648_000 / Math.PI),
  ],
  intro: {
    fr: 'Convertissez entre unités métriques (mètre et ses multiples), anglo-saxonnes (pouce, pied, mile) et unités de navigation ou d\'astronomie.',
    en: 'Convert between metric units (the meter and its multiples), imperial units (inch, foot, mile) and navigation or astronomy units.',
  },
  notes: {
    fr: [
      'Le pouce vaut exactement 2,54 cm depuis l\'accord international de 1959 ; le pied, le yard et le mile en découlent.',
      'Trois « miles » à ne pas confondre : le mile terrestre (1 609,344 m), le mille nautique (1 852 m, une minute d\'arc de latitude, l\'unité de la navigation) et le mile scandinave (10 km, encore courant en Suède et en Norvège).',
      'Le pied d\'arpenteur américain (1 200/3 937 m) diffère du pied international de 2 millionièmes : rien à l\'échelle d\'une pièce, mais 2 m sur 1 000 km de relevés. Il a été abandonné fin 2022, mais reste dans d\'anciens plans.',
      'En anglais, « mil » ou « thou » désigne le millième de pouce (25,4 µm, épaisseur de film ou de gaine), pas le millimètre.',
      'L\'année-lumière est la distance parcourue par la lumière en une année julienne (365,25 jours) ; le parsec, utilisé par les astronomes, en vaut environ 3,26.',
    ],
    en: [
      'The inch has been exactly 2.54 cm since the 1959 international agreement; the foot, yard and mile follow from it.',
      'Three "miles" not to mix up: the statute mile (1,609.344 m), the nautical mile (1,852 m, one minute of arc of latitude, the navigation unit) and the Scandinavian mile (10 km, still common in Sweden and Norway).',
      'The US survey foot (1,200/3,937 m) differs from the international foot by 2 parts per million: nothing at room scale, but 2 m over 1,000 km of surveys. It was retired at the end of 2022 but remains in older plans.',
      'A "mil" or "thou" is a thousandth of an inch (25.4 µm, used for film or coating thickness), not a millimeter.',
      'The light-year is the distance light travels in one Julian year (365.25 days); the parsec, used by astronomers, is about 3.26 of them.',
    ],
  },
}
