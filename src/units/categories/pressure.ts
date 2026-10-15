import type { Category } from '../types'
import { unit } from '../define'

const MM_HG = 133.322387415
const G = 9.80665

export const pressure: Category = {
  id: 'pressure',
  name: { fr: 'Pression', en: 'Pressure' },
  slug: { fr: 'pression', en: 'pressure' },
  icon: 'gauge',
  color: '#ef4444',
  baseUnit: 'pascal',
  defaultPair: ['bar', 'psi'],
  units: [
    unit('pascal', 'Pa', 'Pascal', 'Pascal', 'si', 1),
    unit('hectopascal', 'hPa', 'Hectopascal', 'Hectopascal', 'si', 100),
    unit('kilopascal', 'kPa', 'Kilopascal', 'Kilopascal', 'si', 1e3),
    unit('megapascal', 'MPa', 'Mégapascal', 'Megapascal', 'si', 1e6),
    unit('gigapascal', 'GPa', 'Gigapascal', 'Gigapascal', 'si', 1e9),
    unit('millibar', 'mbar', 'Millibar', 'Millibar', 'metric', 100),
    unit('bar', 'bar', 'Bar', 'Bar', 'metric', 1e5),
    unit('atmosphere', 'atm', 'Atmosphère', 'Atmosphere', 'other', 101_325),
    unit('technical_atmosphere', 'at', 'Atmosphère technique', 'Technical atmosphere', 'metric', G * 1e4),
    unit('cmh2o', 'cmH₂O', 'Centimètre d\'eau', 'Centimeter of water', 'other', G * 10),
    unit('torr', 'Torr', 'Torr', 'Torr', 'other', 101_325 / 760),
    unit('mmhg', 'mmHg', 'Millimètre de mercure', 'Millimeter of mercury', 'other', MM_HG),
    unit('inhg', 'inHg', 'Pouce de mercure', 'Inch of mercury', 'anglo', MM_HG * 25.4),
    unit('psi', 'psi', 'Livre par pouce carré', 'Pound per square inch', 'anglo', 0.45359237 * G / 0.0254 ** 2),
  ],
  intro: {
    fr: 'Convertissez pascals, bars, atmosphères, psi et millimètres de mercure.',
    en: 'Convert pascals, bars, atmospheres, psi and millimeters of mercury.',
  },
  notes: {
    fr: [
      'La pression atmosphérique normale vaut 1 013,25 hPa = 1,013 25 bar = 760 Torr ; l\'hectopascal et le millibar sont égaux.',
      'Les pneus se gonflent en bar en Europe et en psi aux États-Unis : 2,2 bar ≈ 32 psi. Ce sont des pressions relatives (au-dessus de la pression ambiante) : un pneu « à 2,2 bar » contient en réalité environ 3,2 bar absolus. En anglais, psig désigne la pression relative et psia la pression absolue.',
      'L\'atmosphère technique (at, 1 kgf/cm², 0,981 bar) n\'est pas l\'atmosphère normale (atm, 1,013 bar).',
      'Le torr (1/760 d\'atmosphère) et le millimètre de mercure diffèrent de moins d\'un millionième : on les confond en pratique.',
      'La tension artérielle s\'exprime en mmHg (« 12/8 » signifie 120/80 mmHg).',
    ],
    en: [
      'Standard atmospheric pressure is 1,013.25 hPa = 1.013 25 bar = 760 Torr; the hectopascal and the millibar are equal.',
      'Tires are inflated in bar in Europe and in psi in the US: 2.2 bar ≈ 32 psi. These are gauge pressures (above ambient pressure): a tire "at 32 psi" actually holds about 46.7 psi absolute. psig means gauge, psia means absolute.',
      'The technical atmosphere (at, 1 kgf/cm², 0.981 bar) is not the standard atmosphere (atm, 1.013 bar).',
      'The torr (1/760 of an atmosphere) and the millimeter of mercury differ by less than one part per million: in practice they are interchangeable.',
      'Blood pressure is given in mmHg.',
    ],
  },
}
