<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const { locale } = useI18n()
const currentLanguage = computed(() => locale.value)

function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white py-4 shadow-md">
      <nav class="container mx-auto px-4 flex items-center justify-between">
        <router-link
          to="/"
          class="text-xl font-bold hover:text-blue-300 transition-colors"
        >
          MesureTech
        </router-link>
        <div class="flex gap-6 items-center">
          <button
            class="ml-4 bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-sm transition-colors"
            @click="toggleLanguage"
          >
            {{ currentLanguage === "fr" ? "EN" : "FR" }}
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

    <footer class="bg-gray-800 text-white py-4 mt-auto sticky bottom-0 z-10">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <p>© {{ new Date().getFullYear() }} MesureTech</p>
        <div class="flex gap-4">
          <router-link
            to="/about"
            class="text-white hover:text-blue-300 transition-colors"
          >
            {{ t("nav_about") }}
          </router-link>
        </div>
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
