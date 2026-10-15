import type { Category } from '../types'
import { unit } from '../define'

export const angle: Category = {
  id: 'angle',
  name: { fr: 'Angle', en: 'Angle' },
  slug: { fr: 'angle', en: 'angle' },
  icon: 'angle',
  color: '#a855f7',
  baseUnit: 'radian',
  defaultPair: ['degree', 'radian'],
  units: [
    unit('radian', 'rad', 'Radian', 'Radian', 'si', 1),
    unit('milliradian', 'mrad', 'Milliradian', 'Milliradian', 'si', 1e-3),
    unit('degree', '°', 'Degré', 'Degree', 'other', Math.PI / 180),
    unit('arcminute', '′', 'Minute d\'arc', 'Arcminute', 'other', Math.PI / 10_800),
    unit('arcsecond', '″', 'Seconde d\'arc', 'Arcsecond', 'other', Math.PI / 648_000),
    unit('gradian', 'gon', 'Grade', 'Gradian', 'other', Math.PI / 200),
    unit('nato_mil', { fr: 'millième', en: 'mil' }, 'Millième OTAN', 'NATO mil', 'other', 2 * Math.PI / 6400),
    unit('turn', { fr: 'tr', en: 'tr' }, 'Tour', 'Turn', 'other', 2 * Math.PI),
  ],
  intro: {
    fr: 'Convertissez degrés, radians, grades et minutes ou secondes d\'arc.',
    en: 'Convert degrees, radians, gradians and arcminutes or arcseconds.',
  },
  notes: {
    fr: [
      'Un tour complet vaut 360° = 2π rad = 400 grades.',
      'π rad = 180°, donc 1 rad ≈ 57,3°.',
      'Un degré se divise en 60 minutes d\'arc, une minute en 60 secondes d\'arc (comme les coordonnées GPS en degrés-minutes-secondes).',
      'Le « millième » militaire n\'est pas le milliradian : l\'OTAN divise le tour en 6 400 millièmes, alors qu\'un tour vaut environ 6 283 milliradians.',
    ],
    en: [
      'A full turn is 360° = 2π rad = 400 gradians.',
      'π rad = 180°, so 1 rad ≈ 57.3°.',
      'A degree splits into 60 arcminutes, an arcminute into 60 arcseconds (as in degrees-minutes-seconds GPS coordinates).',
      'The military "mil" is not the milliradian: NATO divides a turn into 6,400 mils, whereas a turn is about 6,283 milliradians.',
    ],
  },
}
