<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()
const currentLanguage = computed(() => locale.value)

function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-gray-800 text-white py-4 shadow-md">
      <nav class="container mx-auto px-4 flex items-center justify-between">
        <h1 class="text-xl font-bold">
          Mon Projet Vue
        </h1>
        <div class="flex gap-6">
          <router-link to="/" class="hover:text-blue-300 transition-colors">
            {{ $t('nav_home') }}
          </router-link>
          <router-link to="/about" class="hover:text-blue-300 transition-colors">
            {{ $t('nav_about') }}
          </router-link>
          <button
            class="ml-4 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
            @click="toggleLanguage"
          >
            {{ currentLanguage === 'fr' ? 'EN' : 'FR' }}
          </button>
        </div>
      </nav>
    </header>

    <main class="container mx-auto px-4 py-8">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>

    <footer class="bg-gray-800 text-white py-4 mt-auto">
      <div class="container mx-auto px-4 text-center">
        <p>© {{ new Date().getFullYear() }} Mon Projet Vue</p>
      </div>
    </footer>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
