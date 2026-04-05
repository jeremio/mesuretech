<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/index.vue'
import { conversionTypes } from '@/data/conversions'

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
    <!-- Convertisseurs -->
    <section class="mb-12">
      <h2 class="text-lg font-medium text-gray-900 mb-4">
        {{ t("unit_converters") }}
      </h2>

      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        <router-link
          v-for="type in conversionTypes"
          :key="type.id"
          :to="type.path"
          class="group border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:border-gray-400 hover:bg-gray-50 transition-all"
        >
          <div
            class="rounded-lg p-2"
            :style="{ backgroundColor: `${type.color}12` }"
          >
            <Icon :name="type.icon" :size="20" :color="type.color" />
          </div>
          <span
            class="font-medium text-gray-800 group-hover:text-gray-900 text-sm"
          >
            {{ t(type.id) }}
          </span>
        </router-link>
      </div>
    </section>

    <!-- Guide -->
    <section>
      <h2 class="text-lg font-medium text-gray-900 mb-4">
        {{ t("nav_tools_guide") }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <router-link
          v-for="category in guideCategories"
          :key="category.id"
          :to="`/tools/guide/${category.id}`"
          class="group border border-gray-200 rounded-lg p-4 flex items-center gap-3 hover:border-gray-400 hover:bg-gray-50 transition-all"
        >
          <div
            class="rounded-lg p-2"
            :style="{ backgroundColor: `${category.color}15` }"
          >
            <Icon :name="category.icon" :size="20" :color="category.color" />
          </div>
          <div class="flex-1 min-w-0">
            <h3
              class="font-medium text-gray-800 group-hover:text-gray-900 text-sm"
            >
              {{ t(category.id.replace("-", "_")) }}
            </h3>
            <p class="text-gray-400 text-xs mt-0.5 truncate">
              {{ t(`${category.id.replace("-", "_")}_short_desc`) }}
            </p>
          </div>
        </router-link>
      </div>
    </section>
  </div>
</template>
