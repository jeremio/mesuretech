<script setup lang="ts">
import { withBase } from 'vitepress'
import { computed } from 'vue'
import { categoryPath, getCategory, getUnit, unitSymbol } from '../../../src/units'
import { formatNumber } from '../../../src/units/format'
import { systemLabels } from '../../../src/units/ui'
import { useLocale } from '../composables/useLocale'

/** Tableau des unités d'une catégorie, généré depuis le registre (aucune valeur recopiée à la main) */
const props = withDefaults(defineProps<{ category: string, link?: boolean }>(), { link: true })

const locale = useLocale()
const category = computed(() => getCategory(props.category)!)
const base = computed(() => getUnit(category.value, category.value.baseUnit)!)

const labels = {
  unit: { fr: 'Unité', en: 'Unit' },
  symbol: { fr: 'Symbole', en: 'Symbol' },
  value: { fr: 'Vaut', en: 'Equals' },
  family: { fr: 'Famille', en: 'Family' },
  open: { fr: 'Ouvrir le convertisseur', en: 'Open the converter' },
}

const rows = computed(() => category.value.units.map(u => ({
  id: u.id,
  name: u.name[locale.value],
  symbol: unitSymbol(u, locale.value),
  family: systemLabels[u.system][locale.value],
  value: u.factor !== undefined
    ? `${formatNumber(u.factor, locale.value)} ${unitSymbol(base.value, locale.value)}`
    : u.formula?.[locale.value] ?? '',
})))
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>{{ labels.unit[locale] }}</th>
        <th>{{ labels.symbol[locale] }}</th>
        <th>{{ labels.value[locale] }}</th>
        <th>{{ labels.family[locale] }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="r in rows" :key="r.id">
        <td>{{ r.name }}</td>
        <td><code>{{ r.symbol }}</code></td>
        <td>{{ r.value }}</td>
        <td>{{ r.family }}</td>
      </tr>
    </tbody>
  </table>
  <p v-if="link">
    <a :href="withBase(categoryPath(category, locale))">{{ labels.open[locale] }} : {{ category.name[locale].toLowerCase() }}</a>
  </p>
</template>
