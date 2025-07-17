<script setup lang="ts">
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/index.vue'
import { conversionTypes } from '@/data/conversions'

const router = useRouter()

// Récupération des 4 convertisseurs les plus populaires
const popularConverters = computed(() => conversionTypes.slice(0, 4))

// Catégories du guide
const guideCategories = [
  { id: 'physical_quantities', icon: 'document', color: '#ec4899' },
  { id: 'measurement_units', icon: 'calculator', color: '#06b6d4' },
]

// Fonctions de navigation
function navigateTo(path: string) {
  router.push(path)
}
</script>

<template>
  <div class="py-8">
    <!-- Hero Section -->
    <section class="mb-12 max-w-5xl mx-auto">
      <div class="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-600 to-indigo-800 rounded-xl overflow-hidden shadow-xl">
        <div class="p-8 md:p-10 md:w-3/5 text-white">
          <h1 class="text-3xl md:text-4xl font-bold mb-4">
            {{ $t('welcome') }}
          </h1>
          <p class="text-lg md:text-xl mb-6 opacity-90">
            Convertissez facilement entre différentes unités de mesure et apprenez les principes fondamentaux des systèmes de mesure.
          </p>
          <div class="flex flex-wrap gap-4">
            <button
              class="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors flex items-center"
              @click="navigateTo('/tools/converters')"
            >
              <Icon name="exchange" :size="20" class="mr-2" />
              {{ $t('nav_tools_converters') }}
            </button>
            <button
              class="bg-blue-700 text-white hover:bg-blue-800 px-6 py-3 rounded-lg font-medium transition-colors border border-white flex items-center"
              @click="navigateTo('/tools/guide')"
            >
              <Icon name="book-open" :size="20" class="mr-2" />
              {{ $t('nav_tools_guide') }}
            </button>
          </div>
        </div>
        <div class="md:w-2/5 p-6 md:p-10 flex justify-center">
          <img src="/images/measurement-hero.svg" alt="Illustration" class="max-w-full h-auto max-h-64">
        </div>
      </div>
    </section>

    <!-- Convertisseurs populaires -->
    <section class="mb-12 max-w-5xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">
          Convertisseurs populaires
        </h2>
        <button
          class="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
          @click="navigateTo('/tools/converters')"
        >
          Voir tous
          <Icon name="arrow-right" :size="16" class="ml-1" />
        </button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="converter in popularConverters"
          :key="converter.id"
          class="bg-white rounded-lg shadow-md p-6 flex flex-col items-center hover:shadow-lg transition-shadow cursor-pointer"
          @click="navigateTo(converter.path)"
        >
          <div class="rounded-full p-4 mb-4" :style="{ backgroundColor: `${converter.color}15` }">
            <Icon :name="converter.icon" :size="32" :color="converter.color" />
          </div>
          <h3 class="text-lg font-medium text-center">
            {{ $t(converter.id) }}
          </h3>
        </div>
      </div>
    </section>

    <!-- Guide rapide -->
    <section class="mb-12 max-w-5xl mx-auto">
      <div class="flex items-center justify-between mb-6">
        <h2 class="text-2xl font-bold text-gray-800">
          Apprenez les bases
        </h2>
        <button
          class="text-blue-600 hover:text-blue-800 flex items-center transition-colors"
          @click="navigateTo('/tools/guide')"
        >
          Explorer le guide
          <Icon name="arrow-right" :size="16" class="ml-1" />
        </button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="category in guideCategories"
          :key="category.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer flex"
          @click="navigateTo(`/tools/guide/${category.id}`)"
        >
          <div class="w-2" :style="{ backgroundColor: category.color }" />
          <div class="p-6 flex items-start flex-1">
            <div class="rounded-full p-3 mr-4" :style="{ backgroundColor: `${category.color}20` }">
              <Icon :name="category.icon" :size="24" :color="category.color" />
            </div>
            <div>
              <h3 class="text-lg font-medium mb-2">
                {{ $t(category.id.replace('-', '_')) }}
              </h3>
              <p class="text-gray-600 text-sm mb-3">
                {{ $t(`${category.id.replace('-', '_')}_short_desc`) }}
              </p>
              <div class="text-sm text-blue-600 flex items-center">
                {{ $t('learn_more') }}
                <Icon name="arrow-right" :size="14" class="ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Fonctionnalités -->
    <section class="max-w-5xl mx-auto">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">
        Pourquoi utiliser MesureTech?
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="rounded-full bg-blue-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Icon name="bolt" :size="24" color="#3b82f6" />
          </div>
          <h3 class="text-lg font-medium mb-2">
            Rapide et précis
          </h3>
          <p class="text-gray-600">
            Obtenez des conversions précises instantanément pour tous vos besoins de mesure.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="rounded-full bg-green-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Icon name="academic-cap" :size="24" color="#10b981" />
          </div>
          <h3 class="text-lg font-medium mb-2">
            Éducatif
          </h3>
          <p class="text-gray-600">
            Apprenez les principes fondamentaux des unités de mesure et leur application.
          </p>
        </div>

        <div class="bg-white rounded-lg shadow-md p-6">
          <div class="rounded-full bg-purple-100 p-3 w-12 h-12 flex items-center justify-center mb-4">
            <Icon name="device-mobile" :size="24" color="#8b5cf6" />
          </div>
          <h3 class="text-lg font-medium mb-2">
            Multiplateforme
          </h3>
          <p class="text-gray-600">
            Utilisez MesureTech sur n'importe quel appareil, à tout moment et n'importe où.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
/* Animation subtile pour les cartes */
.hover\:shadow-lg {
  transition: transform 0.2s;
}
.hover\:shadow-lg:hover {
  transform: translateY(-2px);
}
</style>
