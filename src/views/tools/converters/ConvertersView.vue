<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '../../../components/icons/index.vue'
import { conversionTypes } from '../../../data/conversions'

const { t } = useI18n()
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">
      {{ t('unit_converters') }}
    </h2>
    <p class="text-gray-600 mb-6">
      {{ t('converters_intro') }}
    </p>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <router-link
        v-for="type in conversionTypes"
        :key="type.id"
        :to="`/tools/converters/${type.id}`"
        class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow"
      >
        <div class="bg-blue-100 p-3 rounded-full mb-3">
          <Icon :name="type.icon" :size="24" color="#3b82f6" />
        </div>
        <h3 class="text-lg font-medium text-center">
          {{ t(type.id) }}
        </h3>
      </router-link>
    </div>
  </div>
</template>
