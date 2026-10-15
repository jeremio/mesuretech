import type { Category } from '../types'
import { unit } from '../define'

export const frequency: Category = {
  id: 'frequency',
  name: { fr: 'Fréquence', en: 'Frequency' },
  slug: { fr: 'frequence', en: 'frequency' },
  icon: 'wave',
  color: '#d946ef',
  baseUnit: 'hertz',
  defaultPair: ['revolutions_per_minute', 'hertz'],
  units: [
    unit('millihertz', 'mHz', 'Millihertz', 'Millihertz', 'si', 1e-3),
    unit('hertz', 'Hz', 'Hertz', 'Hertz', 'si', 1),
    unit('kilohertz', 'kHz', 'Kilohertz', 'Kilohertz', 'si', 1e3),
    unit('megahertz', 'MHz', 'Mégahertz', 'Megahertz', 'si', 1e6),
    unit('gigahertz', 'GHz', 'Gigahertz', 'Gigahertz', 'si', 1e9),
    unit('terahertz', 'THz', 'Térahertz', 'Terahertz', 'si', 1e12),
    unit('revolutions_per_minute', { fr: 'tr/min', en: 'rpm' }, 'Tour par minute', 'Revolution per minute', 'other', 1 / 60),
    unit('beats_per_minute', 'bpm', 'Battement par minute', 'Beat per minute', 'other', 1 / 60),
    unit('radians_per_second', 'rad/s', 'Radian par seconde', 'Radian per second', 'si', 1 / (2 * Math.PI)),
  ],
  intro: {
    fr: 'Convertissez hertz, tours par minute et battements par minute : tout ce qui se répète dans le temps.',
    en: 'Convert hertz, revolutions per minute and beats per minute: anything that repeats over time.',
  },
  notes: {
    fr: [
      '1 Hz correspond à un événement par seconde. Un moteur à 3 000 tr/min tourne à 50 Hz, un cœur à 60 bpm bat à 1 Hz.',
      'La pulsation (rad/s) n\'est pas la fréquence : ω = 2π f. Un courant à 50 Hz a une pulsation d\'environ 314 rad/s.',
      'Le secteur électrique est à 50 Hz en Europe et 60 Hz en Amérique du Nord.',
    ],
    en: [
      '1 Hz means one event per second. An engine at 3,000 rpm turns at 50 Hz, a heart at 60 bpm beats at 1 Hz.',
      'Angular frequency (rad/s) is not frequency: ω = 2π f. A 50 Hz current has an angular frequency of about 314 rad/s.',
      'Mains electricity runs at 50 Hz in Europe and 60 Hz in North America.',
    ],
  },
}
