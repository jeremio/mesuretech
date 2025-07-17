import type { ConversionFactor, UnitOption } from '@/composables/useUnitConverter'

// Options d'unités pour les températures
export const temperatureUnits: UnitOption[] = [
  { value: 'celsius', label: 'celsius' },
  { value: 'fahrenheit', label: 'fahrenheit' },
  { value: 'kelvin', label: 'kelvin' },
]

// Facteurs de conversion pour les températures
// Pour les températures, nous utilisons des fonctions de conversion
// plutôt que des facteurs multiplicatifs simples
export const temperatureConversionFactors: ConversionFactor = {
  // Conversions à partir des degrés Celsius
  celsius: {
    celsius: 1, // Identité
    fahrenheit: (celsius: number) => (celsius * 9 / 5) + 32,
    kelvin: (celsius: number) => celsius + 273.15,
  },

  // Conversions à partir des degrés Fahrenheit
  fahrenheit: {
    celsius: (fahrenheit: number) => (fahrenheit - 32) * 5 / 9,
    fahrenheit: 1, // Identité
    kelvin: (fahrenheit: number) => (fahrenheit - 32) * 5 / 9 + 273.15,
  },

  // Conversions à partir des Kelvin
  kelvin: {
    celsius: (kelvin: number) => kelvin - 273.15,
    fahrenheit: (kelvin: number) => (kelvin - 273.15) * 9 / 5 + 32,
    kelvin: 1, // Identité
  },
}
