<script setup lang="ts">
import { withBase } from 'vitepress'
import { categories, categoryPath } from '../../../src/units'
import { useLocale } from '../composables/useLocale'
import Icon from './Icon.vue'

const locale = useLocale()
</script>

<template>
  <div class="grid">
    <a v-for="c in categories" :key="c.id" class="card" :href="withBase(categoryPath(c, locale))">
      <span class="icon" :style="{ color: c.color }">
        <Icon :name="c.icon" :size="22" />
      </span>
      <span class="name">{{ c.name[locale] }}</span>
    </a>
  </div>
</template>

<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
  margin: 16px 0 32px;
}

.card {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 10px;
  background: var(--vp-c-bg-soft);
  color: var(--vp-c-text-1);
  font-weight: 500;
  text-decoration: none;
  transition: border-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  transform: translateY(-1px);
}

.icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  flex-shrink: 0;
}
</style>
