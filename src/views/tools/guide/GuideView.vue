<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import Icon from '@/components/icons/index.vue'

const { t } = useI18n()

// Catégories du guide avec des icônes et couleurs améliorées
const guideCategories = [
  { id: 'physical_quantities', icon: 'academic-cap', color: '#ec4899' },
  { id: 'measurement_units', icon: 'scale', color: '#06b6d4' },
  { id: 'si_prefixes', icon: 'template', color: '#f59e0b' },
  { id: 'systems_of_units', icon: 'globe', color: '#8b5cf6' },
]
</script>

<template>
  <div>
    <!-- En-tête du guide -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-xl p-6 mb-8 text-white">
      <h2 class="text-2xl md:text-3xl font-bold mb-3">
        {{ t('nav_tools_guide') }}
      </h2>
      <p class="text-lg opacity-90 max-w-3xl">
        {{ t('guide_introduction') }}
      </p>
    </div>

    <!-- Contenu principal -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
      <!-- Catégories du guide avec descriptions -->
      <div>
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <Icon name="book-open" :size="20" class="mr-2" color="#4f46e5" />
          Explorez par thèmes
        </h3>

        <div class="space-y-4">
          <router-link
            v-for="category in guideCategories"
            :key="category.id"
            :to="`/tools/guide/${category.id}`"
            class="block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all transform hover:-translate-y-1"
          >
            <div class="h-1" :style="{ backgroundColor: category.color }" />
            <div class="p-5 flex items-start">
              <div class="rounded-full p-3 mr-4" :style="{ backgroundColor: `${category.color}20` }">
                <Icon :name="category.icon" :size="24" :color="category.color" />
              </div>
              <div>
                <h4 class="text-lg font-medium mb-1">
                  {{ t(category.id.replace('-', '_')) }}
                </h4>
                <p class="text-gray-600 mb-3 text-sm">
                  {{ t(`${category.id.replace('-', '_')}_short_desc`) }}
                </p>
                <div class="text-blue-600 flex items-center text-sm">
                  <span>{{ t('learn_more') }}</span>
                  <Icon name="arrow-right" :size="14" class="ml-1" />
                </div>
              </div>
            </div>
          </router-link>
        </div>
      </div>

      <!-- À propos du guide -->
      <div>
        <h3 class="text-xl font-semibold mb-4 flex items-center">
          <Icon name="information-circle" :size="20" class="mr-2" color="#4f46e5" />
          À propos de ce guide
        </h3>

        <div class="bg-white rounded-lg shadow-md p-6 mb-6">
          <h4 class="font-medium text-lg mb-3">
            Pourquoi ce guide?
          </h4>
          <p class="text-gray-700 mb-4">
            Ce guide a été conçu pour vous aider à comprendre les concepts fondamentaux de la mesure, essentiels en science, en ingénierie et dans la vie quotidienne.
          </p>
          <p class="text-gray-700">
            Que vous soyez étudiant, professionnel ou simplement curieux, vous y trouverez des explications claires sur les unités de mesure, leurs relations et applications.
          </p>
        </div>

        <!-- Points clés / Conseils -->
        <div class="bg-blue-50 rounded-lg p-5 border border-blue-200">
          <h4 class="font-medium text-blue-800 mb-3 flex items-center">
            <Icon name="light-bulb" :size="18" class="mr-2" color="#1e40af" />
            Conseils d'utilisation
          </h4>
          <ul class="space-y-2 text-blue-900">
            <li class="flex items-start">
              <Icon name="check-circle" :size="16" class="mr-2 mt-1 flex-shrink-0" color="#3b82f6" />
              <span>Commencez par explorer les grandeurs physiques pour comprendre les concepts fondamentaux</span>
            </li>
            <li class="flex items-start">
              <Icon name="check-circle" :size="16" class="mr-2 mt-1 flex-shrink-0" color="#3b82f6" />
              <span>Consultez la section sur les unités de mesure pour les applications pratiques</span>
            </li>
            <li class="flex items-start">
              <Icon name="check-circle" :size="16" class="mr-2 mt-1 flex-shrink-0" color="#3b82f6" />
              <span>Utilisez nos convertisseurs pour des calculs précis entre différentes unités</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
