// Export de toutes les données de conversion pour un accès centralisé

// Surface
export { areaConversionFactors, areaUnits } from './areaConversions'

// Données informatiques
export { dataConversionFactors, dataUnits } from './dataConversions'

// Longueur
export { lengthConversionFactors, lengthUnits } from './lengthConversions'

// Masse
export { massConversionFactors, massUnits } from './massConversions'

// Vitesse
export { speedConversionFactors, speedUnits } from './speedConversions'

// Température
export { temperatureConversionFactors, temperatureUnits } from './temperatureConversions'

// Volume
export { volumeConversionFactors, volumeUnits } from './volumeConversions'

// Mapping des types de conversion aux labels i18n
export const conversionTypes = [
  { id: 'length', icon: 'ruler' },
  { id: 'mass', icon: 'weight' },
  { id: 'temperature', icon: 'thermometer' },
  { id: 'volume', icon: 'beaker' },
  { id: 'area', icon: 'square' },
  { id: 'speed', icon: 'speedometer' },
  { id: 'data', icon: 'database' },
]
