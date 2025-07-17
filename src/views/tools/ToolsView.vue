<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-4">
      {{ t('tools_title') }}
    </h1>
    <p class="text-gray-600 mb-8">
      {{ t('tools_description') }}
    </p>

    <router-view />
  </div>
</template>
