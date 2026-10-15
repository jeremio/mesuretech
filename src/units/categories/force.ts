import type { Category } from '../types'
import { unit } from '../define'

const G = 9.80665
const LBF = 0.45359237 * G

export const force: Category = {
  id: 'force',
  name: { fr: 'Force', en: 'Force' },
  slug: { fr: 'force', en: 'force' },
  icon: 'force',
  color: '#84cc16',
  baseUnit: 'newton',
  defaultPair: ['kilogram_force', 'newton'],
  units: [
    unit('dyne', 'dyn', 'Dyne', 'Dyne', 'other', 1e-5),
    unit('millinewton', 'mN', 'Millinewton', 'Millinewton', 'si', 1e-3),
    unit('newton', 'N', 'Newton', 'Newton', 'si', 1),
    unit('decanewton', 'daN', 'Décanewton', 'Decanewton', 'si', 10),
    unit('kilonewton', 'kN', 'Kilonewton', 'Kilonewton', 'si', 1e3),
    unit('meganewton', 'MN', 'Méganewton', 'Meganewton', 'si', 1e6),
    unit('gram_force', 'gf', 'Gramme-force', 'Gram-force', 'metric', G / 1000),
    unit('kilogram_force', 'kgf', 'Kilogramme-force', 'Kilogram-force', 'metric', G),
    unit('tonne_force', 'tf', 'Tonne-force', 'Tonne-force', 'metric', G * 1000),
    unit('ounce_force', 'ozf', 'Once-force', 'Ounce-force', 'anglo', LBF / 16),
    unit('pound_force', 'lbf', 'Livre-force', 'Pound-force', 'anglo', LBF),
    unit('kip', 'kip', 'Kip', 'Kip', 'us', LBF * 1000),
  ],
  intro: {
    fr: 'Convertissez newtons, kilogrammes-force et livres-force : les unités des charges, des poussées et des tractions.',
    en: 'Convert newtons, kilograms-force and pounds-force: the units of loads, thrusts and pulls.',
  },
  notes: {
    fr: [
      'Masse et force ne se confondent pas : le kilogramme mesure une quantité de matière, le kilogramme-force le poids de cette masse sous la pesanteur normale. 1 kgf = 9,806 65 N, souvent arrondi à 10 N.',
      'Le décanewton (daN, environ 1 kgf) est l\'unité des charges en mécanique et en bâtiment, et des efforts de traction (charge d\'un câble, d\'un ancrage d\'escalade).',
      'Un « poids » annoncé en kg sur une balance est en réalité une masse ; c\'est sur la Lune que la différence se verrait : même masse, poids six fois plus faible.',
    ],
    en: [
      'Mass and force are different: the kilogram measures an amount of matter, the kilogram-force the weight of that mass under standard gravity. 1 kgf = 9.806 65 N, often rounded to 10 N.',
      'The decanewton (daN, about 1 kgf) is the usual unit for loads in mechanics and construction, and for pulling forces (cable load, climbing anchor).',
      'A "weight" in kg on a scale is really a mass; the difference would show on the Moon: same mass, a weight six times lower.',
    ],
  },
}
