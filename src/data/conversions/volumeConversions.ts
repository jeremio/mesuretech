import type {
  ConversionFactor,
  UnitOption,
} from '@/composables/useUnitConverter'

export const volumeUnits: UnitOption[] = [
  { value: 'cubic_meter', label: 'cubic_meter' },
  { value: 'liter', label: 'liter' },
  { value: 'deciliter', label: 'deciliter' },
  { value: 'centiliter', label: 'centiliter' },
  { value: 'milliliter', label: 'milliliter' },
]

export const volumeConversionFactors: ConversionFactor = {
  cubic_meter: {
    cubic_meter: 1,
    liter: 1000,
    deciliter: 10000,
    centiliter: 100000,
    milliliter: 1000000,
  },

  liter: {
    cubic_meter: 0.001,
    liter: 1,
    deciliter: 10,
    centiliter: 100,
    milliliter: 1000,
  },

  deciliter: {
    cubic_meter: 0.0001,
    liter: 0.1,
    deciliter: 1,
    centiliter: 10,
    milliliter: 100,
  },

  centiliter: {
    cubic_meter: 0.00001,
    liter: 0.01,
    deciliter: 0.1,
    centiliter: 1,
    milliliter: 10,
  },

  milliliter: {
    cubic_meter: 0.000001,
    liter: 0.001,
    deciliter: 0.01,
    centiliter: 0.1,
    milliliter: 1,
  },
}
