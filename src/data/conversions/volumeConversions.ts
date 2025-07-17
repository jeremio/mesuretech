import type { ConversionFactor, UnitOption } from '@/composables/useUnitConverter'

// Options d'unités pour les volumes
export const volumeUnits: UnitOption[] = [
  { value: 'cubic_meter', label: 'cubic_meter' },
  { value: 'liter', label: 'liter' },
  { value: 'milliliter', label: 'milliliter' },
  { value: 'centiliter', label: 'centiliter' },
  { value: 'gallon', label: 'gallon' },
  { value: 'pint', label: 'pint' },
  { value: 'fluid_ounce', label: 'fluid_ounce' },
]

// Facteurs de conversion pour les volumes
export const volumeConversionFactors: ConversionFactor = {
  // Conversions à partir du mètre cube (unité de base SI)
  cubic_meter: {
    cubic_meter: 1,
    liter: 1000,
    milliliter: 1000000,
    centiliter: 100000,
    gallon: 264.172,
    pint: 2113.38,
    fluid_ounce: 33814,
  },

  // Conversions à partir du litre
  liter: {
    cubic_meter: 0.001,
    liter: 1,
    milliliter: 1000,
    centiliter: 100,
    gallon: 0.264172,
    pint: 2.11338,
    fluid_ounce: 33.814,
  },

  // Conversions à partir du millilitre
  milliliter: {
    cubic_meter: 0.000001,
    liter: 0.001,
    milliliter: 1,
    centiliter: 0.1,
    gallon: 0.000264172,
    pint: 0.00211338,
    fluid_ounce: 0.033814,
  },

  // Conversions à partir du centilitre
  centiliter: {
    cubic_meter: 0.00001,
    liter: 0.01,
    milliliter: 10,
    centiliter: 1,
    gallon: 0.00264172,
    pint: 0.0211338,
    fluid_ounce: 0.33814,
  },

  // Conversions à partir du gallon (US)
  gallon: {
    cubic_meter: 0.00378541,
    liter: 3.78541,
    milliliter: 3785.41,
    centiliter: 378.541,
    gallon: 1,
    pint: 8,
    fluid_ounce: 128,
  },

  // Conversions à partir de la pinte (US)
  pint: {
    cubic_meter: 0.000473176,
    liter: 0.473176,
    milliliter: 473.176,
    centiliter: 47.3176,
    gallon: 0.125,
    pint: 1,
    fluid_ounce: 16,
  },

  // Conversions à partir de l'once liquide (US)
  fluid_ounce: {
    cubic_meter: 0.0000295735,
    liter: 0.0295735,
    milliliter: 29.5735,
    centiliter: 2.95735,
    gallon: 0.0078125,
    pint: 0.0625,
    fluid_ounce: 1,
  },
}
