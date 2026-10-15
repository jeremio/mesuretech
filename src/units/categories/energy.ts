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
    unit('gigajoule', 'GJ', 'Gigajoule', 'Gigajoule', 'si', 1e9),
    unit('erg', 'erg', 'Erg', 'Erg', 'other', 1e-7),
    unit('calorie', 'cal', 'Calorie thermochimique', 'Thermochemical calorie', 'metric', 4.184),
    unit('calorie_it', { fr: 'cal IT', en: 'cal IT' }, 'Calorie internationale', 'International calorie', 'metric', 4.1868),
    unit('kilocalorie', 'kcal', 'Kilocalorie', 'Kilocalorie', 'metric', 4184),
    unit('watt_hour', 'Wh', 'Wattheure', 'Watt-hour', 'metric', 3600),
    unit('kilowatt_hour', 'kWh', 'Kilowattheure', 'Kilowatt-hour', 'metric', 3.6e6),
    unit('megawatt_hour', 'MWh', 'Mégawattheure', 'Megawatt-hour', 'metric', 3.6e9),
    unit('gigawatt_hour', 'GWh', 'Gigawattheure', 'Gigawatt-hour', 'metric', 3.6e12),
    unit('terawatt_hour', 'TWh', 'Térawattheure', 'Terawatt-hour', 'metric', 3.6e15),
    unit('btu', 'BTU', 'British thermal unit', 'British thermal unit', 'anglo', 1055.05585262),
    unit('therm', 'thm', 'Therm US', 'US therm', 'us', 105_480_400),
    unit('foot_pound', 'ft·lbf', 'Pied-livre force', 'Foot-pound', 'anglo', 0.3048 * 0.45359237 * 9.80665),
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
      'Deux calories coexistent : la calorie thermochimique (4,184 J), utilisée en nutrition, et la calorie internationale (4,1868 J), utilisée en thermique. L\'écart est de 0,07 %.',
      'La consommation électrique d\'un pays se compte en TWh : 1 TWh = 1 milliard de kWh. Le gaz se facture en kWh en Europe, en therms aux États-Unis (1 therm ≈ 29,3 kWh).',
    ],
    en: [
      'Food label "Calories" are kilocalories: 1 kcal = 4.184 kJ.',
      'A kilowatt-hour is the energy used in one hour by a 1,000 W device: 1 kWh = 3.6 MJ.',
      'Two calories coexist: the thermochemical calorie (4.184 J), used in nutrition, and the international calorie (4.1868 J), used in heat engineering. They differ by 0.07%.',
      'A country\'s electricity consumption is counted in TWh: 1 TWh = 1 billion kWh. Gas is billed in kWh in Europe and in therms in the US (1 therm ≈ 29.3 kWh).',
    ],
  },
}
