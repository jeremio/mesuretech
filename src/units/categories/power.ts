import type { Category } from '../types'
import { unit } from '../define'

const G = 9.80665
const BTU = 1055.05585262

export const power: Category = {
  id: 'power',
  name: { fr: 'Puissance', en: 'Power' },
  slug: { fr: 'puissance', en: 'power' },
  icon: 'power',
  color: '#f97316',
  baseUnit: 'watt',
  defaultPair: ['metric_horsepower', 'kilowatt'],
  units: [
    unit('watt', 'W', 'Watt', 'Watt', 'si', 1),
    unit('kilowatt', 'kW', 'Kilowatt', 'Kilowatt', 'si', 1e3),
    unit('megawatt', 'MW', 'Mégawatt', 'Megawatt', 'si', 1e6),
    unit('gigawatt', 'GW', 'Gigawatt', 'Gigawatt', 'si', 1e9),
    unit('metric_horsepower', { fr: 'ch', en: 'PS' }, 'Cheval-vapeur', 'Metric horsepower', 'metric', 75 * G),
    unit('mechanical_horsepower', 'hp', 'Horsepower mécanique', 'Mechanical horsepower', 'anglo', 550 * 0.3048 * 0.45359237 * G),
    unit('electrical_horsepower', 'hpE', 'Horsepower électrique', 'Electrical horsepower', 'anglo', 746),
    unit('btu_per_hour', 'BTU/h', 'BTU par heure', 'BTU per hour', 'anglo', BTU / 3600),
    unit('ton_of_refrigeration', 'TR', 'Tonne de réfrigération', 'Ton of refrigeration', 'us', 12_000 * BTU / 3600),
    unit('kilocalorie_per_hour', 'kcal/h', 'Kilocalorie par heure', 'Kilocalorie per hour', 'metric', 4184 / 3600),
  ],
  intro: {
    fr: 'Convertissez watts, kilowatts et chevaux-vapeur, ainsi que les puissances de chauffage et de climatisation (BTU/h).',
    en: 'Convert watts, kilowatts and horsepower, as well as heating and cooling ratings (BTU/h).',
  },
  notes: {
    fr: [
      'Trois « chevaux » différents : le cheval-vapeur métrique (ch, 735,5 W, utilisé en Europe), le horsepower mécanique (hp, 745,7 W, utilisé aux États-Unis et au Royaume-Uni) et le horsepower électrique (746 W, pour les moteurs électriques).',
      'Le « cheval fiscal » (CV) de la carte grise n\'est pas une puissance mécanique : il ne se convertit pas.',
      'Les climatiseurs sont souvent annoncés en BTU/h : 9 000 BTU/h ≈ 2,6 kW. Aux États-Unis, les grosses installations se mesurent en tonnes de réfrigération (1 TR = 12 000 BTU/h ≈ 3,5 kW) : ce n\'est pas une masse.',
    ],
    en: [
      'Three different "horsepowers": the metric horsepower (PS, 735.5 W, used in Europe), the mechanical horsepower (hp, 745.7 W, used in the US and UK) and the electrical horsepower (746 W, for electric motors).',
      'Air conditioners are often rated in BTU/h: 9,000 BTU/h ≈ 2.6 kW. Large US systems are rated in tons of refrigeration (1 TR = 12,000 BTU/h ≈ 3.5 kW): not a mass.',
    ],
  },
}
