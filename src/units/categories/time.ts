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
    unit('fortnight', { fr: 'quinz.', en: 'fn' }, 'Quinzaine (14 jours)', 'Fortnight', 'other', 14 * DAY),
    unit('month', { fr: 'mois', en: 'mo' }, 'Mois moyen', 'Average month', 'other', YEAR / 12),
    unit('common_year', { fr: 'an commun', en: 'common yr' }, 'Année de 365 jours', 'Common year', 'other', 365 * DAY),
    unit('year', { fr: 'an', en: 'yr' }, 'Année moyenne', 'Average year', 'other', YEAR),
    unit('julian_year', 'a', 'Année julienne', 'Julian year', 'other', 365.25 * DAY),
    unit('decade', { fr: 'déc.', en: 'dec.' }, 'Décennie', 'Decade', 'other', 10 * YEAR),
    unit('century', { fr: 'siècle', en: 'c.' }, 'Siècle', 'Century', 'other', 100 * YEAR),
    unit('millennium', { fr: 'millén.', en: 'mill.' }, 'Millénaire', 'Millennium', 'other', 1000 * YEAR),
  ],
  intro: {
    fr: 'Convertissez des durées, de la nanoseconde au siècle.',
    en: 'Convert durations, from nanoseconds to centuries.',
  },
  notes: {
    fr: [
      'Trois « années » coexistent : l\'année civile de 365 jours (366 les années bissextiles), l\'année moyenne du calendrier grégorien (365,2425 jours, utilisée ici pour le mois, la décennie, le siècle) et l\'année julienne (365,25 jours, symbole « a », utilisée en astronomie et pour l\'année-lumière).',
      'Le mois moyen vaut 30,44 jours : un mois réel en compte 28 à 31. Pour une échéance précise, comptez en jours.',
      'Une durée décimale se lit différemment d\'une heure : 1,25 h = 1 h 15 min, et non 1 h 25 min.',
    ],
    en: [
      'Three "years" coexist: the 365-day calendar year (366 in leap years), the average Gregorian year (365.2425 days, used here for months, decades and centuries) and the Julian year (365.25 days, symbol "a", used in astronomy and for the light-year).',
      'The average month is 30.44 days: a real month has 28 to 31. For an exact deadline, count in days.',
      'A decimal duration is not a clock time: 1.25 h = 1 h 15 min, not 1 h 25 min.',
    ],
  },
}
