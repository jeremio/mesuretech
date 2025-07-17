<template>
  <div class="py-8">
    <h1 class="text-3xl font-bold mb-6 text-center text-blue-700">{{ $t('welcome') }}</h1>

    <div class="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-8">
      <p class="text-lg mb-4">{{ $t('hello_world') }}</p>

      <div class="mt-8 flex justify-center">
        <button 
          @click="count++" 
          class="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
        >
          Count: {{ count }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
</script>
