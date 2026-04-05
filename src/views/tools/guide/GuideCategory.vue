<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRouter } from 'vue-router'
import Icon from '@/components/icons/index.vue'
import * as guideEn from '@/data/guide/en'
import * as guideFr from '@/data/guide/fr'

const props = defineProps<{
  category: string
}>()
const { t, locale } = useI18n()
const router = useRouter()

const contentHtml = ref('')

const categoryInfo = computed(() => {
  switch (props.category) {
    case 'physical_quantities':
      return {
        title: 'physical_quantities',
        icon: 'document',
        color: '#3b82f6',
      }
    case 'measurement_units':
      return {
        title: 'measurement_units',
        icon: 'calculator',
        color: '#10b981',
      }
    case 'si_prefixes':
      return { title: 'si_prefixes', icon: 'document', color: '#f59e0b' }
    case 'systems_of_units':
      return { title: 'systems_of_units', icon: 'book-open', color: '#8b5cf6' }
    default:
      return { title: '', icon: '', color: '' }
  }
})

watch(
  () => props.category,
  (newCategory) => {
    const validCategories = [
      'physical_quantities',
      'measurement_units',
      'si_prefixes',
      'systems_of_units',
    ]
    if (!validCategories.includes(newCategory)) {
      router.push('/')
    }
  },
  { immediate: true },
)

function loadContent() {
  const guide = locale.value === 'en' ? guideEn : guideFr

  switch (props.category) {
    case 'physical_quantities':
      contentHtml.value = guide.getPhysicalQuantitiesContent()
      break
    case 'measurement_units':
      contentHtml.value = guide.getMeasurementUnitsContent()
      break
    case 'si_prefixes':
      contentHtml.value = guide.getSIPrefixesContent()
      break
    case 'systems_of_units':
      contentHtml.value = guide.getSystemsOfUnitsContent()
      break
  }

  setTimeout(() => {
    generateTableOfContents()
  }, 100)
}

function generateTableOfContents() {
  const contentElement = document.querySelector('.prose')
  const tocElement = document.getElementById('toc')

  if (contentElement && tocElement) {
    const headings = contentElement.querySelectorAll('h3, h4')
    let tocHtml = ''

    headings.forEach((heading, index) => {
      if (!heading.id) {
        heading.id = `section-${index}`
      }

      const isSubheading = heading.tagName === 'H4'

      tocHtml += `
        <a
          href="#${heading.id}"
          class="block ${isSubheading ? 'ml-4 text-gray-600' : 'font-medium text-gray-800'} hover:text-blue-600 transition-colors"
        >
          ${heading.textContent}
        </a>
      `
    })

    tocElement.innerHTML = tocHtml
  }
}

onMounted(() => {
  loadContent()
})

watch(locale, () => {
  loadContent()
})

watch(
  () => props.category,
  () => {
    loadContent()
  },
)
</script>

<template>
  <div>
    <div class="flex items-center mb-6">
      <router-link to="/" class="text-blue-600 hover:text-blue-800 mr-2">
        ← {{ t("nav_tools_guide") }}
      </router-link>
    </div>

    <div class="flex items-center mb-6">
      <div
        class="rounded-full p-3 mr-4"
        :style="{ backgroundColor: `${categoryInfo.color}20` }"
      >
        <Icon
          :name="categoryInfo.icon"
          :size="28"
          :color="categoryInfo.color"
        />
      </div>
      <h2 class="text-2xl font-semibold">
        {{ t(categoryInfo.title) }}
      </h2>
    </div>

    <div class="bg-white rounded-lg shadow-md p-6 mb-8">
      <div v-html="contentHtml" />
    </div>
  </div>
</template>
