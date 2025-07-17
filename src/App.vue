<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'

const { locale } = useI18n()
const currentLanguage = computed(() => locale.value)
const toolsMenuOpen = ref(false)
const router = useRouter()

function toggleLanguage() {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

function toggleToolsMenu() {
  toolsMenuOpen.value = !toolsMenuOpen.value
}

function navigateTo(route: string) {
  router.push(route)
  toolsMenuOpen.value = false
}

// Fermer le menu quand on clique en dehors
function closeMenuOnOutsideClick(event: MouseEvent) {
  const target = event.target as HTMLElement
  if (!target.closest('#tools-menu') && !target.closest('#tools-button')) {
    toolsMenuOpen.value = false
  }
}

// Ajouter un event listener pour fermer le menu en cliquant en dehors
onMounted(() => {
  document.addEventListener('click', closeMenuOnOutsideClick)
})

onUnmounted(() => {
  document.removeEventListener('click', closeMenuOnOutsideClick)
})
</script>

<template>
  <div class="min-h-screen">
    <header class="bg-gray-800 text-white py-4 shadow-md">
      <nav class="container mx-auto px-4 flex items-center justify-between">
        <h1 class="text-xl font-bold">
          Mon Projet Vue
        </h1>
        <div class="flex gap-6 items-center">
          <router-link to="/" class="hover:text-blue-300 transition-colors">
            {{ $t('nav_home') }}
          </router-link>
          <router-link to="/about" class="hover:text-blue-300 transition-colors">
            {{ $t('nav_about') }}
          </router-link>

          <!-- Menu déroulant Outils -->
          <div id="tools-menu" class="relative">
            <button
              id="tools-button"
              class="flex items-center hover:text-blue-300 transition-colors"
              @click.stop="toggleToolsMenu"
            >
              {{ $t('nav_tools') }}
              <svg
                class="w-4 h-4 ml-1"
                :class="{ 'rotate-180': toolsMenuOpen }"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            <div
              v-if="toolsMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white text-gray-800 rounded-md shadow-lg py-1 z-10"
            >
              <button
                class="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                @click="navigateTo('/tools/converters')"
              >
                {{ $t('nav_tools_converters') }}
              </button>
              <button
                class="block w-full text-left px-4 py-2 hover:bg-gray-100 transition-colors"
                @click="navigateTo('/tools/guide')"
              >
                {{ $t('nav_tools_guide') }}
              </button>
            </div>
          </div>

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
