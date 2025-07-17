<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '../../../components/icons/index.vue'

const { t } = useI18n()

// Catégories du guide
const guideCategories = [
  { id: 'physical-quantities', icon: 'document', color: '#3b82f6' },
  { id: 'measurement-units', icon: 'calculator', color: '#10b981' },
  { id: 'si-prefixes', icon: 'document', color: '#f59e0b' },
  { id: 'systems-of-units', icon: 'book-open', color: '#8b5cf6' },
]
</script>

<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">
      {{ t('nav_tools_guide') }}
    </h2>
    <p class="text-gray-600 mb-8">
      {{ t('guide_introduction') }}
    </p>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <router-link
        v-for="category in guideCategories"
        :key="category.id"
        :to="`/tools/guide/${category.id}`"
        class="bg-white rounded-lg shadow-md p-6 flex items-start hover:shadow-lg transition-shadow"
      >
        <div class="rounded-full p-3 mr-4" :style="{ backgroundColor: `${category.color}20` }">
          <Icon :name="category.icon" :size="24" :color="category.color" />
        </div>
        <div>
          <h3 class="text-lg font-medium mb-2">
            {{ t(category.id.replace('-', '_')) }}
          </h3>
          <div class="text-gray-600 flex items-center">
            <span>{{ t('learn_more') }}</span>
            <Icon name="arrow-right" :size="16" class="ml-1" />
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>
