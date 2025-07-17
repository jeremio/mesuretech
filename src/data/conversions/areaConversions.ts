import type { ConversionFactor, UnitOption } from '../../composables/useUnitConverter'

// Options d'unités pour les surfaces
export const areaUnits: UnitOption[] = [
  { value: 'square_meter', label: 'square_meter' },
  { value: 'square_kilometer', label: 'square_kilometer' },
  { value: 'hectare', label: 'hectare' },
  { value: 'acre', label: 'acre' },
  { value: 'square_foot', label: 'square_foot' },
  { value: 'square_inch', label: 'square_inch' },
]

// Facteurs de conversion pour les surfaces
export const areaConversionFactors: ConversionFactor = {
  // Conversions à partir du mètre carré (unité SI)
  square_meter: {
    square_meter: 1,
    square_kilometer: 0.000001,
    hectare: 0.0001,
    acre: 0.000247105,
    square_foot: 10.7639,
    square_inch: 1550,
  },

  // Conversions à partir du kilomètre carré
  square_kilometer: {
    square_meter: 1000000,
    square_kilometer: 1,
    hectare: 100,
    acre: 247.105,
    square_foot: 10763910.4,
    square_inch: 1550003100,
  },

  // Conversions à partir de l'hectare
  hectare: {
    square_meter: 10000,
    square_kilometer: 0.01,
    hectare: 1,
    acre: 2.47105,
    square_foot: 107639,
    square_inch: 15500031,
  },

  // Conversions à partir de l'acre
  acre: {
    square_meter: 4046.86,
    square_kilometer: 0.00404686,
    hectare: 0.404686,
    acre: 1,
    square_foot: 43560,
    square_inch: 6272640,
  },

  // Conversions à partir du pied carré
  square_foot: {
    square_meter: 0.092903,
    square_kilometer: 9.2903e-8,
    hectare: 0.00000929,
    acre: 0.0000229568,
    square_foot: 1,
    square_inch: 144,
  },

  // Conversions à partir du pouce carré
  square_inch: {
    square_meter: 0.00064516,
    square_kilometer: 6.4516e-10,
    hectare: 6.4516e-8,
    acre: 1.5942e-7,
    square_foot: 0.00694444,
    square_inch: 1,
  },
}
