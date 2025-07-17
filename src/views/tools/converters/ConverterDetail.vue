<script setup lang="ts">
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Icon from '../../../components/icons/index.vue'
import UnitConverter from '../../../components/UnitConverter.vue'
import { useUnitConverter } from '../../../composables/useUnitConverter'
import * as conversions from '../../../data/conversions'

const props = defineProps<{
  type: string
}>()
const { t } = useI18n()
const router = useRouter()

// Obtenir les données de conversion en fonction du type
const getConversionData = computed(() => {
  switch (props.type) {
    case 'length':
      return {
        units: conversions.lengthUnits,
        factors: conversions.lengthConversionFactors,
        icon: 'ruler',
      }
    case 'mass':
      return {
        units: conversions.massUnits,
        factors: conversions.massConversionFactors,
        icon: 'weight',
      }
    case 'temperature':
      return {
        units: conversions.temperatureUnits,
        factors: conversions.temperatureConversionFactors,
        icon: 'thermometer',
      }
    case 'volume':
      return {
        units: conversions.volumeUnits,
        factors: conversions.volumeConversionFactors,
        icon: 'beaker',
      }
    case 'data':
      return {
        units: conversions.dataUnits,
        factors: conversions.dataConversionFactors,
        icon: 'database',
      }
    case 'speed':
      return {
        units: conversions.speedUnits,
        factors: conversions.speedConversionFactors,
        icon: 'speedometer',
      }
    case 'area':
      return {
        units: conversions.areaUnits,
        factors: conversions.areaConversionFactors,
        icon: 'square',
      }
    default:
      return { units: [], factors: {}, icon: '' }
  }
})

// Vérifier si le type est valide et rediriger si nécessaire
watch(() => props.type, (newType) => {
  const validTypes = ['length', 'mass', 'temperature', 'volume', 'data', 'speed', 'area']
  if (!validTypes.includes(newType)) {
    router.push('/tools/converters')
  }
}, { immediate: true })

// Initialiser le composable de conversion avec les facteurs appropriés
const {
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
} = useUnitConverter(getConversionData.value.factors)

// Réinitialiser les données lors du changement de type de conversion
watch(() => props.type, () => {
  reset()
})
</script>

<template>
  <div>
    <div class="flex items-center mb-6">
      <router-link
        to="/tools/converters"
        class="text-blue-600 hover:text-blue-800 mr-2"
      >
        ← {{ t('unit_converters') }}
      </router-link>
    </div>

    <div class="flex items-center mb-6">
      <div class="bg-blue-100 p-3 rounded-full mr-4">
        <Icon :name="getConversionData.icon" :size="28" color="#3b82f6" />
      </div>
      <h2 class="text-2xl font-semibold">
        {{ t(type) }}
      </h2>
    </div>

    <UnitConverter
      v-model:from-value="fromValue"
      v-model:from-unit="fromUnit"
      v-model:to-unit="toUnit"
      :units="getConversionData.units"
      :result="result"
      :formatted-result="formattedResult"
      :error="error"
      :copied="copied"
      @calculate="calculate"
      @reset="reset"
      @copy="copyResult"
    />
  </div>
</template>
