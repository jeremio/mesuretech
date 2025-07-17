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
  { id: 'length', icon: 'ruler', color: '#3b82f6', path: '/tools/converters/length' },
  { id: 'mass', icon: 'weight', color: '#10b981', path: '/tools/converters/mass' },
  { id: 'temperature', icon: 'thermometer', color: '#f59e0b', path: '/tools/converters/temperature' },
  { id: 'volume', icon: 'beaker', color: '#8b5cf6', path: '/tools/converters/volume' },
  { id: 'area', icon: 'square', color: '#ec4899', path: '/tools/converters/area' },
  { id: 'speed', icon: 'speedometer', color: '#06b6d4', path: '/tools/converters/speed' },
  { id: 'data', icon: 'database', color: '#14b8a6', path: '/tools/converters/data' },
]
