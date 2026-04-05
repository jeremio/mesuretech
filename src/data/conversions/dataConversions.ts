import type {
  ConversionFactor,
  UnitOption,
} from '@/composables/useUnitConverter'

export const dataUnits: UnitOption[] = [
  { value: 'bit', label: 'bit' },
  { value: 'byte', label: 'byte' },
  { value: 'kilobyte', label: 'kilobyte' },
  { value: 'megabyte', label: 'megabyte' },
  { value: 'gigabyte', label: 'gigabyte' },
  { value: 'terabyte', label: 'terabyte' },
  { value: 'petabyte', label: 'petabyte' },
  { value: 'exabyte', label: 'exabyte' },
]

export const dataConversionFactors: ConversionFactor = {
  bit: {
    bit: 1,
    byte: 0.125,
    kilobyte: 0.000125,
    megabyte: 1.25e-7,
    gigabyte: 1.25e-10,
    terabyte: 1.25e-13,
    petabyte: 1.25e-16,
    exabyte: 1.25e-19,
  },

  byte: {
    bit: 8,
    byte: 1,
    kilobyte: 0.001,
    megabyte: 0.000001,
    gigabyte: 1e-9,
    terabyte: 1e-12,
    petabyte: 1e-15,
    exabyte: 1e-18,
  },

  kilobyte: {
    bit: 8000,
    byte: 1000,
    kilobyte: 1,
    megabyte: 0.001,
    gigabyte: 0.000001,
    terabyte: 1e-9,
    petabyte: 1e-12,
    exabyte: 1e-15,
  },

  megabyte: {
    bit: 8000000,
    byte: 1000000,
    kilobyte: 1000,
    megabyte: 1,
    gigabyte: 0.001,
    terabyte: 0.000001,
    petabyte: 1e-9,
    exabyte: 1e-12,
  },

  gigabyte: {
    bit: 8000000000,
    byte: 1000000000,
    kilobyte: 1000000,
    megabyte: 1000,
    gigabyte: 1,
    terabyte: 0.001,
    petabyte: 0.000001,
    exabyte: 1e-9,
  },

  terabyte: {
    bit: 8000000000000,
    byte: 1000000000000,
    kilobyte: 1000000000,
    megabyte: 1000000,
    gigabyte: 1000,
    terabyte: 1,
    petabyte: 0.001,
    exabyte: 0.000001,
  },

  petabyte: {
    bit: 8000000000000000,
    byte: 1000000000000000,
    kilobyte: 1000000000000,
    megabyte: 1000000000,
    gigabyte: 1000000,
    terabyte: 1000,
    petabyte: 1,
    exabyte: 0.001,
  },

  exabyte: {
    bit: 8000000000000000000,
    byte: 1000000000000000000,
    kilobyte: 1000000000000000,
    megabyte: 1000000000000,
    gigabyte: 1000000000,
    terabyte: 1000000,
    petabyte: 1000,
    exabyte: 1,
  },
}
