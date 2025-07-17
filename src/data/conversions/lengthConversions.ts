import type { ConversionFactor, UnitOption } from '../../composables/useUnitConverter'

// Options d'unités pour les longueurs
export const lengthUnits: UnitOption[] = [
  { value: 'meter', label: 'meter' },
  { value: 'kilometer', label: 'kilometer' },
  { value: 'centimeter', label: 'centimeter' },
  { value: 'millimeter', label: 'millimeter' },
  { value: 'micrometer', label: 'micrometer' },
  { value: 'nanometer', label: 'nanometer' },
  { value: 'inch', label: 'inch' },
  { value: 'foot', label: 'foot' },
  { value: 'yard', label: 'yard' },
  { value: 'mile', label: 'mile' },
  { value: 'nautical_mile', label: 'nautical_mile' },
]

// Facteurs de conversion pour les longueurs
// La clé est l'unité de départ, la valeur est un objet avec les unités d'arrivée comme clés
// et les facteurs de conversion comme valeurs
export const lengthConversionFactors: ConversionFactor = {
  // Conversions à partir du mètre (unité de base SI)
  meter: {
    meter: 1,
    kilometer: 0.001,
    centimeter: 100,
    millimeter: 1000,
    micrometer: 1000000,
    nanometer: 1000000000,
    inch: 39.3701,
    foot: 3.28084,
    yard: 1.09361,
    mile: 0.000621371,
    nautical_mile: 0.000539957,
  },

  // Conversions à partir du kilomètre
  kilometer: {
    meter: 1000,
    kilometer: 1,
    centimeter: 100000,
    millimeter: 1000000,
    micrometer: 1000000000,
    nanometer: 1000000000000,
    inch: 39370.1,
    foot: 3280.84,
    yard: 1093.61,
    mile: 0.621371,
    nautical_mile: 0.539957,
  },

  // Conversions à partir du centimètre
  centimeter: {
    meter: 0.01,
    kilometer: 0.00001,
    centimeter: 1,
    millimeter: 10,
    micrometer: 10000,
    nanometer: 10000000,
    inch: 0.393701,
    foot: 0.0328084,
    yard: 0.0109361,
    mile: 0.00000621371,
    nautical_mile: 0.00000539957,
  },

  // Conversions à partir du millimètre
  millimeter: {
    meter: 0.001,
    kilometer: 0.000001,
    centimeter: 0.1,
    millimeter: 1,
    micrometer: 1000,
    nanometer: 1000000,
    inch: 0.0393701,
    foot: 0.00328084,
    yard: 0.00109361,
    mile: 6.21371e-7,
    nautical_mile: 5.39957e-7,
  },

  // Conversions à partir du micromètre
  micrometer: {
    meter: 0.000001,
    kilometer: 1e-9,
    centimeter: 0.0001,
    millimeter: 0.001,
    micrometer: 1,
    nanometer: 1000,
    inch: 0.0000393701,
    foot: 0.00000328084,
    yard: 0.00000109361,
    mile: 6.21371e-10,
    nautical_mile: 5.39957e-10,
  },

  // Conversions à partir du nanomètre
  nanometer: {
    meter: 1e-9,
    kilometer: 1e-12,
    centimeter: 1e-7,
    millimeter: 0.000001,
    micrometer: 0.001,
    nanometer: 1,
    inch: 3.93701e-8,
    foot: 3.28084e-9,
    yard: 1.09361e-9,
    mile: 6.21371e-13,
    nautical_mile: 5.39957e-13,
  },

  // Conversions à partir du pouce
  inch: {
    meter: 0.0254,
    kilometer: 0.0000254,
    centimeter: 2.54,
    millimeter: 25.4,
    micrometer: 25400,
    nanometer: 25400000,
    inch: 1,
    foot: 0.0833333,
    yard: 0.0277778,
    mile: 0.0000157828,
    nautical_mile: 0.0000137149,
  },

  // Conversions à partir du pied
  foot: {
    meter: 0.3048,
    kilometer: 0.0003048,
    centimeter: 30.48,
    millimeter: 304.8,
    micrometer: 304800,
    nanometer: 304800000,
    inch: 12,
    foot: 1,
    yard: 0.333333,
    mile: 0.000189394,
    nautical_mile: 0.000164579,
  },

  // Conversions à partir du yard
  yard: {
    meter: 0.9144,
    kilometer: 0.0009144,
    centimeter: 91.44,
    millimeter: 914.4,
    micrometer: 914400,
    nanometer: 914400000,
    inch: 36,
    foot: 3,
    yard: 1,
    mile: 0.000568182,
    nautical_mile: 0.000493737,
  },

  // Conversions à partir du mile
  mile: {
    meter: 1609.34,
    kilometer: 1.60934,
    centimeter: 160934,
    millimeter: 1609340,
    micrometer: 1609340000,
    nanometer: 1609340000000,
    inch: 63360,
    foot: 5280,
    yard: 1760,
    mile: 1,
    nautical_mile: 0.868976,
  },

  // Conversions à partir du mille nautique
  nautical_mile: {
    meter: 1852,
    kilometer: 1.852,
    centimeter: 185200,
    millimeter: 1852000,
    micrometer: 1852000000,
    nanometer: 1852000000000,
    inch: 72913.4,
    foot: 6076.12,
    yard: 2025.37,
    mile: 1.15078,
    nautical_mile: 1,
  },
}
