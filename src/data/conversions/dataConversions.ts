import type { ConversionFactor, UnitOption } from '@/composables/useUnitConverter'

// Options d'unités pour les données informatiques
export const dataUnits: UnitOption[] = [
  { value: 'bit', label: 'bit' },
  { value: 'byte', label: 'byte' },
  { value: 'kilobyte', label: 'kilobyte' },
  { value: 'megabyte', label: 'megabyte' },
  { value: 'gigabyte', label: 'gigabyte' },
  { value: 'terabyte', label: 'terabyte' },
  { value: 'petabyte', label: 'petabyte' },
]

// Facteurs de conversion pour les données informatiques
export const dataConversionFactors: ConversionFactor = {
  // Conversions à partir du bit
  bit: {
    bit: 1,
    byte: 0.125,
    kilobyte: 0.000125,
    megabyte: 1.25e-7,
    gigabyte: 1.25e-10,
    terabyte: 1.25e-13,
    petabyte: 1.25e-16,
  },

  // Conversions à partir de l'octet (byte)
  byte: {
    bit: 8,
    byte: 1,
    kilobyte: 0.001,
    megabyte: 0.000001,
    gigabyte: 1e-9,
    terabyte: 1e-12,
    petabyte: 1e-15,
  },

  // Conversions à partir du kilooctet (KB)
  kilobyte: {
    bit: 8000,
    byte: 1000,
    kilobyte: 1,
    megabyte: 0.001,
    gigabyte: 0.000001,
    terabyte: 1e-9,
    petabyte: 1e-12,
  },

  // Conversions à partir du mégaoctet (MB)
  megabyte: {
    bit: 8000000,
    byte: 1000000,
    kilobyte: 1000,
    megabyte: 1,
    gigabyte: 0.001,
    terabyte: 0.000001,
    petabyte: 1e-9,
  },

  // Conversions à partir du gigaoctet (GB)
  gigabyte: {
    bit: 8000000000,
    byte: 1000000000,
    kilobyte: 1000000,
    megabyte: 1000,
    gigabyte: 1,
    terabyte: 0.001,
    petabyte: 0.000001,
  },

  // Conversions à partir du téraoctet (TB)
  terabyte: {
    bit: 8000000000000,
    byte: 1000000000000,
    kilobyte: 1000000000,
    megabyte: 1000000,
    gigabyte: 1000,
    terabyte: 1,
    petabyte: 0.001,
  },

  // Conversions à partir du pétaoctet (PB)
  petabyte: {
    bit: 8000000000000000,
    byte: 1000000000000000,
    kilobyte: 1000000000000,
    megabyte: 1000000000,
    gigabyte: 1000000,
    terabyte: 1000,
    petabyte: 1,
  },
}
