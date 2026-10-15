import type { Category } from '../types'
import { unit } from '../define'

export const energy: Category = {
  id: 'energy',
  name: { fr: 'Énergie', en: 'Energy' },
  slug: { fr: 'energie', en: 'energy' },
  icon: 'bolt',
  color: '#eab308',
  baseUnit: 'joule',
  defaultPair: ['kilocalorie', 'kilojoule'],
  units: [
    unit('electronvolt', 'eV', 'Électronvolt', 'Electronvolt', 'other', 1.602176634e-19),
    unit('joule', 'J', 'Joule', 'Joule', 'si', 1),
    unit('kilojoule', 'kJ', 'Kilojoule', 'Kilojoule', 'si', 1e3),
    unit('megajoule', 'MJ', 'Mégajoule', 'Megajoule', 'si', 1e6),
    unit('calorie', 'cal', 'Calorie', 'Calorie', 'metric', 4.184),
    unit('kilocalorie', 'kcal', 'Kilocalorie', 'Kilocalorie', 'metric', 4184),
    unit('watt_hour', 'Wh', 'Wattheure', 'Watt-hour', 'metric', 3600),
    unit('kilowatt_hour', 'kWh', 'Kilowattheure', 'Kilowatt-hour', 'metric', 3.6e6),
    unit('megawatt_hour', 'MWh', 'Mégawattheure', 'Megawatt-hour', 'metric', 3.6e9),
    unit('btu', 'BTU', 'British thermal unit', 'British thermal unit', 'anglo', 1055.05585262),
    unit('tonne_oil_equivalent', { fr: 'tep', en: 'toe' }, 'Tonne équivalent pétrole', 'Tonne of oil equivalent', 'other', 41.868e9),
  ],
  intro: {
    fr: 'Convertissez joules, calories, kilowattheures et unités de l\'énergie (BTU, tep, électronvolt).',
    en: 'Convert joules, calories, kilowatt-hours and energy industry units (BTU, toe, electronvolt).',
  },
  notes: {
    fr: [
      'Les « calories » des étiquettes alimentaires sont des kilocalories : 1 kcal = 4,184 kJ.',
      'Le kilowattheure est l\'énergie consommée en une heure par un appareil de 1 000 W : 1 kWh = 3,6 MJ.',
      'Calorie thermochimique (4,184 J) et BTU de la table internationale.',
    ],
    en: [
      'Food label "Calories" are kilocalories: 1 kcal = 4.184 kJ.',
      'A kilowatt-hour is the energy used in one hour by a 1,000 W device: 1 kWh = 3.6 MJ.',
      'Thermochemical calorie (4.184 J) and International Table BTU.',
    ],
  },
}
