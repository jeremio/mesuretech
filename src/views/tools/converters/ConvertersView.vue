<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/index.vue'
import { conversionTypes } from '@/data/conversions'

const { t } = useI18n()
</script>

<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900">
          {{ t("unit_converters") }}
        </h1>
        <p class="text-gray-500 mt-1 text-sm">
          {{ t("converters_intro") }}
        </p>
      </div>
      <router-link
        to="/tools/guide"
        class="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 transition-colors"
      >
        <Icon name="book-open" :size="16" />
        {{ t("nav_tools_guide") }}
      </router-link>
    </div>

    <div
      class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
    >
      <router-link
        v-for="type in conversionTypes"
        :key="type.id"
        :to="type.path"
        class="group border border-gray-200 rounded-lg p-5 flex items-center gap-4 hover:border-gray-400 hover:bg-gray-50 transition-all"
      >
        <div
          class="rounded-lg p-2.5"
          :style="{ backgroundColor: `${type.color}12` }"
        >
          <Icon :name="type.icon" :size="22" :color="type.color" />
        </div>
        <span class="font-medium text-gray-800 group-hover:text-gray-900">
          {{ t(type.id) }}
        </span>
      </router-link>
    </div>
  </div>
</template>
