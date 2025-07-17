import type { ConversionFactor, UnitOption } from '../../composables/useUnitConverter'

// Options d'unités pour les masses
export const massUnits: UnitOption[] = [
  { value: 'kilogram', label: 'kilogram' },
  { value: 'gram', label: 'gram' },
  { value: 'milligram', label: 'milligram' },
  { value: 'ton', label: 'ton' },
  { value: 'pound', label: 'pound' },
  { value: 'ounce', label: 'ounce' },
]

// Facteurs de conversion pour les masses
export const massConversionFactors: ConversionFactor = {
  // Conversions à partir du kilogramme (unité de base SI)
  kilogram: {
    kilogram: 1,
    gram: 1000,
    milligram: 1000000,
    ton: 0.001,
    pound: 2.20462,
    ounce: 35.274,
  },

  // Conversions à partir du gramme
  gram: {
    kilogram: 0.001,
    gram: 1,
    milligram: 1000,
    ton: 0.000001,
    pound: 0.00220462,
    ounce: 0.035274,
  },

  // Conversions à partir du milligramme
  milligram: {
    kilogram: 0.000001,
    gram: 0.001,
    milligram: 1,
    ton: 1e-9,
    pound: 0.00000220462,
    ounce: 0.000035274,
  },

  // Conversions à partir de la tonne
  ton: {
    kilogram: 1000,
    gram: 1000000,
    milligram: 1000000000,
    ton: 1,
    pound: 2204.62,
    ounce: 35274,
  },

  // Conversions à partir de la livre
  pound: {
    kilogram: 0.453592,
    gram: 453.592,
    milligram: 453592,
    ton: 0.000453592,
    pound: 1,
    ounce: 16,
  },

  // Conversions à partir de l'once
  ounce: {
    kilogram: 0.0283495,
    gram: 28.3495,
    milligram: 28349.5,
    ton: 0.0000283495,
    pound: 0.0625,
    ounce: 1,
  },
}
