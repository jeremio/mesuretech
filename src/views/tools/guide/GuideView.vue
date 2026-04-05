<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/index.vue'

const { t } = useI18n()

const guideCategories = [
  { id: 'physical_quantities', icon: 'academic-cap', color: '#ec4899' },
  { id: 'measurement_units', icon: 'scale', color: '#06b6d4' },
  { id: 'si_prefixes', icon: 'template', color: '#f59e0b' },
  { id: 'systems_of_units', icon: 'globe', color: '#8b5cf6' },
]
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ t("nav_tools_guide") }}
        </h1>
        <p class="text-gray-500 mt-1 text-sm">
          {{ t("guide_introduction") }}
        </p>
      </div>
      <router-link
        to="/tools/converters"
        class="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
      >
        <Icon name="exchange" :size="16" />
        {{ t("nav_tools_converters") }}
      </router-link>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <router-link
        v-for="category in guideCategories"
        :key="category.id"
        :to="`/tools/guide/${category.id}`"
        class="group border border-gray-200 rounded-lg p-5 flex items-start gap-4 hover:border-gray-400 hover:bg-gray-50 transition-all"
      >
        <div
          class="rounded-lg p-2.5"
          :style="{ backgroundColor: `${category.color}15` }"
        >
          <Icon :name="category.icon" :size="22" :color="category.color" />
        </div>
        <div class="flex-1">
          <h3 class="font-medium text-gray-800 group-hover:text-gray-900 mb-1">
            {{ t(category.id.replace("-", "_")) }}
          </h3>
          <p class="text-gray-500 text-sm">
            {{ t(`${category.id.replace("-", "_")}_short_desc`) }}
          </p>
        </div>
        <Icon
          name="arrow-right"
          :size="16"
          class="text-gray-300 group-hover:text-gray-500 mt-1 transition-colors"
        />
      </router-link>
    </div>
  </div>
</template>
