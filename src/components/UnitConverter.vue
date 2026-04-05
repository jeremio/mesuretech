<script setup lang="ts">
import type { UnitOption } from '@/composables/useUnitConverter'
import { ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'

const props = defineProps<Props>()

const emit = defineEmits<{
  (e: 'update:fromValue', value: number | null): void
  (e: 'update:fromUnit', value: string): void
  (e: 'update:toUnit', value: string): void
  (e: 'calculate'): void
  (e: 'reset'): void
  (e: 'copy'): void
}>()

const { t } = useI18n()

interface Props {
  fromValue: number | null
  fromUnit: string
  toUnit: string
  units: UnitOption[]
  result: number | null
  formattedResult: string
  error: string | null
  copied: boolean
}

const inputValue = ref('')

watch(
  () => props.fromValue,
  (newValue) => {
    inputValue.value = newValue !== null ? newValue.toString() : ''
  },
)

function updateFromValue() {
  const parsed = Number.parseFloat(inputValue.value)
  emit('update:fromValue', Number.isNaN(parsed) ? null : parsed)
}
</script>

<template>
  <div class="bg-white rounded-lg shadow-md p-6">
    <div class="flex flex-wrap items-end gap-4 mb-4">
      <!-- Valeur -->
      <div class="space-y-1 flex-1 min-w-[120px]">
        <label
          for="fromValue"
          class="block text-sm font-medium text-gray-700"
        >{{ t("value") }}</label>
        <input
          id="fromValue"
          v-model="inputValue"
          type="number"
          step="any"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          :placeholder="t('enter_value')"
          @input="updateFromValue"
        >
      </div>

      <!-- Unité source -->
      <div class="space-y-1 flex-1 min-w-[140px]">
        <label for="fromUnit" class="block text-sm font-medium text-gray-700">{{
          t("from")
        }}</label>
        <select
          id="fromUnit"
          :value="fromUnit"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          @change="
            emit('update:fromUnit', ($event.target as HTMLSelectElement).value)
          "
        >
          <option value="" disabled>
            {{ t("select_unit") }}
          </option>
          <option v-for="unit in units" :key="unit.value" :value="unit.value">
            {{ t(unit.label) }}
          </option>
        </select>
      </div>

      <!-- Unité cible -->
      <div class="space-y-1 flex-1 min-w-[140px]">
        <label for="toUnit" class="block text-sm font-medium text-gray-700">{{
          t("to")
        }}</label>
        <select
          id="toUnit"
          :value="toUnit"
          class="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          @change="
            emit('update:toUnit', ($event.target as HTMLSelectElement).value)
          "
        >
          <option value="" disabled>
            {{ t("select_unit") }}
          </option>
          <option v-for="unit in units" :key="unit.value" :value="unit.value">
            {{ t(unit.label) }}
          </option>
        </select>
      </div>

      <!-- Résultat -->
      <div class="space-y-1 flex-1 min-w-[120px]">
        <label class="block text-sm font-medium text-gray-700">{{
          t("result")
        }}</label>
        <div class="relative">
          <input
            type="text"
            readonly
            class="w-full p-2 bg-gray-50 border border-gray-300 rounded-md"
            :value="formattedResult"
          >
          <button
            v-if="result !== null"
            class="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
            :title="t('copy_result')"
            @click="emit('copy')"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                v-if="!copied"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
              />
              <path
                v-else
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </button>
        </div>
        <p v-if="copied" class="text-sm text-green-600">
          {{ t("copied") }}
        </p>
      </div>

      <!-- Actions -->
      <div class="flex gap-2">
        <button
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          @click="emit('calculate')"
        >
          {{ t("convert") }}
        </button>
        <button
          class="text-gray-600 hover:text-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          @click="emit('reset')"
        >
          {{ t("reset") }}
        </button>
      </div>
    </div>

    <!-- Erreurs -->
    <div v-if="error" class="text-red-600 text-sm">
      {{ error }}
    </div>
  </div>
</template>
