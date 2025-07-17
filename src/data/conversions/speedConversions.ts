import type { ConversionFactor, UnitOption } from '@/composables/useUnitConverter'

// Options d'unités pour les vitesses
export const speedUnits: UnitOption[] = [
  { value: 'meters_per_second', label: 'meters_per_second' },
  { value: 'kilometers_per_hour', label: 'kilometers_per_hour' },
  { value: 'miles_per_hour', label: 'miles_per_hour' },
  { value: 'knot', label: 'knot' },
]

// Facteurs de conversion pour les vitesses
export const speedConversionFactors: ConversionFactor = {
  // Conversions à partir du mètre par seconde (unité SI)
  meters_per_second: {
    meters_per_second: 1,
    kilometers_per_hour: 3.6,
    miles_per_hour: 2.23694,
    knot: 1.94384,
  },

  // Conversions à partir du kilomètre par heure
  kilometers_per_hour: {
    meters_per_second: 0.277778,
    kilometers_per_hour: 1,
    miles_per_hour: 0.621371,
    knot: 0.539957,
  },

  // Conversions à partir du mile par heure
  miles_per_hour: {
    meters_per_second: 0.44704,
    kilometers_per_hour: 1.60934,
    miles_per_hour: 1,
    knot: 0.868976,
  },

  // Conversions à partir du nœud
  knot: {
    meters_per_second: 0.514444,
    kilometers_per_hour: 1.852,
    miles_per_hour: 1.15078,
    knot: 1,
  },
}
