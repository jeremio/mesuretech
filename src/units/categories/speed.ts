import type { Category } from '../types'
import { unit } from '../define'

export const speed: Category = {
  id: 'speed',
  name: { fr: 'Vitesse', en: 'Speed' },
  slug: { fr: 'vitesse', en: 'speed' },
  icon: 'speedometer',
  color: '#06b6d4',
  baseUnit: 'meters_per_second',
  defaultPair: ['kilometers_per_hour', 'miles_per_hour'],
  units: [
    unit('meters_per_second', 'm/s', 'Mètre par seconde', 'Meter per second', 'si', 1),
    unit('kilometers_per_hour', 'km/h', 'Kilomètre par heure', 'Kilometer per hour', 'metric', 1 / 3.6),
    unit('miles_per_hour', 'mph', 'Mile par heure', 'Mile per hour', 'anglo', 0.44704),
    unit('feet_per_second', 'ft/s', 'Pied par seconde', 'Foot per second', 'anglo', 0.3048),
    unit('knot', 'kn', 'Nœud', 'Knot', 'other', 1852 / 3600),
  ],
  intro: {
    fr: 'Convertissez kilomètres par heure, mètres par seconde, miles par heure et nœuds.',
    en: 'Convert kilometers per hour, meters per second, miles per hour and knots.',
  },
  notes: {
    fr: [
      'Pour passer des m/s aux km/h, on multiplie par 3,6 (3 600 s dans une heure, 1 000 m dans un kilomètre).',
      'Le nœud vaut un mille nautique par heure, soit 1,852 km/h.',
      '130 km/h ≈ 80,8 mph ; 50 mph ≈ 80,5 km/h.',
    ],
    en: [
      'To go from m/s to km/h, multiply by 3.6 (3,600 s in an hour, 1,000 m in a kilometer).',
      'A knot is one nautical mile per hour, i.e. 1.852 km/h.',
      '130 km/h ≈ 80.8 mph; 50 mph ≈ 80.5 km/h.',
    ],
  },
}
