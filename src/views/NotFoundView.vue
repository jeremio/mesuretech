<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div class="flex flex-col items-center justify-center py-16">
    <h1 class="text-4xl font-bold mb-4 text-gray-800">
      404
    </h1>
    <h2 class="text-2xl font-semibold mb-6 text-gray-700">
      {{ t('not_found') }}
    </h2>
    <p class="text-gray-600 mb-8">
      {{ t('not_found_message') }}
    </p>

    <router-link
      to="/"
      class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-colors"
    >
      {{ t('back_to_home') }}
    </router-link>
  </div>
</template>
