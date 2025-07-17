<script setup lang="ts">
import { ref } from 'vue'

const technologies = ref([
  {
    name: 'Vue.js 3',
    description: 'Framework progressif pour construire des interfaces utilisateur',
  },
  {
    name: 'Vite.js',
    description: 'Outil de build ultra-rapide pour le développement moderne',
  },
  {
    name: 'Tailwind CSS 4',
    description: 'Framework CSS utilitaire pour créer des designs personnalisés',
  },
])
</script>

<template>
  <div class="py-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">
      {{ $t('about_us') }}
    </h1>

    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <p class="text-lg mb-6">
        {{ $t('about_text') }}
      </p>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div
          v-for="tech in technologies"
          :key="tech.name"
          class="p-4 border rounded-lg text-center hover:shadow-md transition-shadow"
        >
          <h3 class="text-xl font-semibold mb-2">
            {{ tech.name }}
          </h3>
          <p class="text-gray-600">
            {{ tech.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
