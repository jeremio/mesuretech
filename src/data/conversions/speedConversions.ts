import type {
  ConversionFactor,
  UnitOption,
} from '@/composables/useUnitConverter'

export const speedUnits: UnitOption[] = [
  { value: 'meters_per_second', label: 'meters_per_second' },
  { value: 'kilometers_per_hour', label: 'kilometers_per_hour' },
  { value: 'miles_per_hour', label: 'miles_per_hour' },
  { value: 'feet_per_second', label: 'feet_per_second' },
  { value: 'knot', label: 'knot' },
]

export const speedConversionFactors: ConversionFactor = {
  meters_per_second: {
    meters_per_second: 1,
    kilometers_per_hour: 3.6,
    miles_per_hour: 2.23694,
    feet_per_second: 3.28084,
    knot: 1.94384,
  },

  kilometers_per_hour: {
    meters_per_second: 0.277778,
    kilometers_per_hour: 1,
    miles_per_hour: 0.621371,
    feet_per_second: 0.911344,
    knot: 0.539957,
  },

  miles_per_hour: {
    meters_per_second: 0.44704,
    kilometers_per_hour: 1.60934,
    miles_per_hour: 1,
    feet_per_second: 1.46667,
    knot: 0.868976,
  },

  feet_per_second: {
    meters_per_second: 0.3048,
    kilometers_per_hour: 1.09728,
    miles_per_hour: 0.681818,
    feet_per_second: 1,
    knot: 0.592484,
  },

  knot: {
    meters_per_second: 0.514444,
    kilometers_per_hour: 1.852,
    miles_per_hour: 1.15078,
    feet_per_second: 1.68781,
    knot: 1,
  },
}
