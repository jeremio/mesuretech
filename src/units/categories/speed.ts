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
    unit('kilometers_per_second', 'km/s', 'Kilomètre par seconde', 'Kilometer per second', 'si', 1000),
    unit('miles_per_hour', 'mph', 'Mile par heure', 'Mile per hour', 'anglo', 0.44704),
    unit('feet_per_second', 'ft/s', 'Pied par seconde', 'Foot per second', 'anglo', 0.3048),
    unit('knot', 'kn', 'Nœud', 'Knot', 'other', 1852 / 3600),
    unit('speed_of_light', 'c', 'Vitesse de la lumière', 'Speed of light', 'other', 299_792_458),
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
      'Le nombre de Mach n\'est pas une vitesse fixe : il dépend de la vitesse du son, qui varie avec la température (environ 1 225 km/h au niveau de la mer à 15 °C, 1 062 km/h à 11 000 m d\'altitude). Il n\'est donc pas proposé ici.',
    ],
    en: [
      'To go from m/s to km/h, multiply by 3.6 (3,600 s in an hour, 1,000 m in a kilometer).',
      'A knot is one nautical mile per hour, i.e. 1.852 km/h.',
      '130 km/h ≈ 80.8 mph; 50 mph ≈ 80.5 km/h.',
      'The Mach number is not a fixed speed: it depends on the speed of sound, which varies with temperature (about 1,225 km/h at sea level at 15 °C, 1,062 km/h at 11,000 m). It is therefore not offered here.',
    ],
  },
}
