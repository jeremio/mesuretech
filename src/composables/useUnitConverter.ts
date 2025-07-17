import { computed, ref } from 'vue'

// Types pour les conversions
export interface UnitOption {
  value: string
  label: string
}

export interface ConversionFactor {
  [key: string]: {
    [key: string]: number | ((value: number) => number)
  }
}

// Fonction principale pour la conversion d'unités
export function useUnitConverter(conversionFactors: ConversionFactor) {
  const fromValue = ref<number | null>(null)
  const fromUnit = ref<string>('')
  const toUnit = ref<string>('')
  const result = ref<number | null>(null)
  const error = ref<string | null>(null)
  const copied = ref(false)

  // Calculer le résultat de la conversion
  const calculate = () => {
    error.value = null
    result.value = null

    if (fromValue.value === null) {
      error.value = 'Veuillez entrer une valeur à convertir'
      return
    }

    if (!fromUnit.value) {
      error.value = 'Veuillez sélectionner une unité de départ'
      return
    }

    if (!toUnit.value) {
      error.value = 'Veuillez sélectionner une unité d\'arrivée'
      return
    }

    // Si c'est la même unité, pas besoin de conversion
    if (fromUnit.value === toUnit.value) {
      result.value = fromValue.value
      return
    }

    // Récupérer le facteur de conversion
    const factorOrFunction = conversionFactors[fromUnit.value]?.[toUnit.value]

    // Si le facteur existe
    if (factorOrFunction !== undefined) {
      if (typeof factorOrFunction === 'number') {
        // Cas simple: multiplication par un facteur
        result.value = fromValue.value * factorOrFunction
      }
      else if (typeof factorOrFunction === 'function') {
        // Cas complexe: utilisation d'une fonction de conversion
        result.value = factorOrFunction(fromValue.value)
      }
    }
    else {
      error.value = 'Conversion non disponible entre ces unités'
    }
  }

  // Fonction pour réinitialiser le formulaire
  const reset = () => {
    fromValue.value = null
    fromUnit.value = ''
    toUnit.value = ''
    result.value = null
    error.value = null
    copied.value = false
  }

  // Fonction pour copier le résultat dans le presse-papier
  const copyResult = async () => {
    if (result.value !== null) {
      try {
        await navigator.clipboard.writeText(result.value.toString())
        copied.value = true
        setTimeout(() => {
          copied.value = false
        }, 2000)
      }
      catch (err) {
        console.error('Erreur lors de la copie :', err)
      }
    }
  }

  // Formater le résultat pour l'affichage
  const formattedResult = computed(() => {
    if (result.value === null)
      return ''

    // Pour les valeurs très grandes ou très petites, utiliser la notation scientifique
    if (Math.abs(result.value) < 0.000001 || Math.abs(result.value) > 1000000) {
      return result.value.toExponential(6)
    }

    // Pour les valeurs normales, limiter le nombre de décimales
    return result.value.toPrecision(8).replace(/\.?0+$/, '')
  })

  return {
    fromValue,
    fromUnit,
    toUnit,
    result,
    error,
    copied,
    formattedResult,
    calculate,
    reset,
    copyResult,
  }
}
