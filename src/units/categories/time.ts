import type { Category } from '../types'
import { unit } from '../define'

const DAY = 86_400
/** Année grégorienne moyenne : 365,2425 jours */
const YEAR = 365.2425 * DAY

export const time: Category = {
  id: 'time',
  name: { fr: 'Temps', en: 'Time' },
  slug: { fr: 'temps', en: 'time' },
  icon: 'clock',
  color: '#64748b',
  baseUnit: 'second',
  defaultPair: ['hour', 'minute'],
  units: [
    unit('nanosecond', 'ns', 'Nanoseconde', 'Nanosecond', 'si', 1e-9),
    unit('microsecond', 'µs', 'Microseconde', 'Microsecond', 'si', 1e-6),
    unit('millisecond', 'ms', 'Milliseconde', 'Millisecond', 'si', 1e-3),
    unit('second', 's', 'Seconde', 'Second', 'si', 1),
    unit('minute', 'min', 'Minute', 'Minute', 'metric', 60),
    unit('hour', 'h', 'Heure', 'Hour', 'metric', 3600),
    unit('day', { fr: 'j', en: 'd' }, 'Jour', 'Day', 'metric', DAY),
    unit('week', { fr: 'sem.', en: 'wk' }, 'Semaine', 'Week', 'other', 7 * DAY),
    unit('month', { fr: 'mois', en: 'mo' }, 'Mois moyen', 'Average month', 'other', YEAR / 12),
    unit('year', { fr: 'an', en: 'yr' }, 'Année moyenne', 'Average year', 'other', YEAR),
    unit('century', { fr: 'siècle', en: 'c.' }, 'Siècle', 'Century', 'other', 100 * YEAR),
  ],
  intro: {
    fr: 'Convertissez des durées, de la nanoseconde au siècle.',
    en: 'Convert durations, from nanoseconds to centuries.',
  },
  notes: {
    fr: [
      'Le mois et l\'année sont des moyennes du calendrier grégorien (année de 365,2425 jours, mois de 30,44 jours) : un mois réel compte 28 à 31 jours.',
      'Une durée décimale se lit différemment d\'une heure : 1,25 h = 1 h 15 min, et non 1 h 25 min.',
    ],
    en: [
      'Month and year are Gregorian calendar averages (365.2425-day year, 30.44-day month): a real month has 28 to 31 days.',
      'A decimal duration is not a clock time: 1.25 h = 1 h 15 min, not 1 h 25 min.',
    ],
  },
}
