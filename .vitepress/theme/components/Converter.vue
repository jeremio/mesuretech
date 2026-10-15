<script setup lang="ts">
import type { Unit, UnitSystem } from '../../../src/units'
import { computed, nextTick, onMounted, ref, useId, watch } from 'vue'
import { getCategory, getUnit, unitSymbol } from '../../../src/units'
import { convert } from '../../../src/units/convert'
import { formatNumber, parseNumber, plainNumber } from '../../../src/units/format'
import { errorMessages, systemLabels, ui } from '../../../src/units/ui'
import { useLocale } from '../composables/useLocale'
import Icon from './Icon.vue'

const props = defineProps<{ category: string }>()

const locale = useLocale()
const id = useId()
const category = computed(() => {
  const found = getCategory(props.category)
  if (!found)
    throw new Error(`Catégorie inconnue : ${props.category}`)
  return found
})

const input = ref('1')
const fromId = ref(category.value.defaultPair[0])
const toId = ref(category.value.defaultPair[1])
const feedback = ref<'result' | 'link' | null>(null)
/** Devient vrai une fois l'état initial lu (URL, mémoire) : évite de réécrire l'URL au chargement */
const ready = ref(false)

const value = computed(() => parseNumber(input.value))
const conversion = computed(() =>
  value.value === null ? null : convert(category.value, value.value, fromId.value, toId.value),
)

const errorText = computed(() => {
  const c = conversion.value
  if (!c || c.ok)
    return ''
  if (c.error === 'out_of_range')
    return category.value.min?.message[locale.value] ?? ''
  return errorMessages[c.error][locale.value]
})

const symbolOf = (unitId: string) => unitSymbol(getUnit(category.value, unitId)!, locale.value)
const format = (n: number) => formatNumber(n, locale.value)

/** Unités regroupées par famille, dans l'ordre du registre */
const groups = computed(() => {
  const map = new Map<UnitSystem, Unit[]>()
  for (const u of category.value.units) {
    if (!map.has(u.system))
      map.set(u.system, [])
    map.get(u.system)!.push(u)
  }
  return [...map].map(([system, units]) => ({ label: systemLabels[system][locale.value], units }))
})

/** La même valeur exprimée dans toutes les unités de la catégorie */
const everyUnit = computed(() => {
  if (value.value === null || !conversion.value?.ok)
    return []
  return category.value.units.map((u) => {
    const r = convert(category.value, value.value!, fromId.value, u.id)
    return { unit: u, text: r.ok ? format(r.value) : '—' }
  })
})

function swap() {
  ;[fromId.value, toId.value] = [toId.value, fromId.value]
}

async function copy(text: string, kind: 'result' | 'link') {
  try {
    await navigator.clipboard.writeText(text)
    feedback.value = kind
    setTimeout(() => {
      feedback.value = null
    }, 2000)
  }
  catch (err) {
    console.error('Copie impossible :', err)
  }
}

function copyResult() {
  if (conversion.value?.ok)
    copy(plainNumber(conversion.value.value, locale.value), 'result')
}

function copyLink() {
  copy(window.location.href, 'link')
}

const storageKey = computed(() => `mesuretech:${category.value.id}`)

onMounted(async () => {
  // Priorité à l'URL partagée, puis aux dernières unités choisies sur cet appareil
  const params = new URLSearchParams(window.location.search)
  let saved: { from?: string, to?: string } = {}
  try {
    saved = JSON.parse(localStorage.getItem(storageKey.value) ?? '{}')
  }
  catch {}
  const from = params.get('from') ?? saved.from
  const to = params.get('to') ?? saved.to
  if (from && getUnit(category.value, from))
    fromId.value = from
  if (to && getUnit(category.value, to))
    toId.value = to
  if (params.get('v') !== null)
    input.value = params.get('v')!
  await nextTick()
  ready.value = true
})

watch([input, fromId, toId], () => {
  if (!ready.value)
    return
  try {
    localStorage.setItem(storageKey.value, JSON.stringify({ from: fromId.value, to: toId.value }))
  }
  catch {}
  const url = new URL(window.location.href)
  url.searchParams.set('v', input.value.trim())
  url.searchParams.set('from', fromId.value)
  url.searchParams.set('to', toId.value)
  window.history.replaceState(window.history.state, '', url)
})
</script>

<template>
  <div class="converter" :style="{ '--accent': category.color }">
    <div class="field value">
      <label :for="`${id}-value`">{{ ui.value[locale] }}</label>
      <input
        :id="`${id}-value`"
        v-model="input"
        type="text"
        inputmode="decimal"
        autocomplete="off"
        spellcheck="false"
        :placeholder="ui.placeholder[locale]"
        :aria-invalid="errorText !== ''"
        :aria-describedby="`${id}-result`"
      >
    </div>

    <div class="units">
      <div class="field">
        <label :for="`${id}-from`">{{ ui.from[locale] }}</label>
        <select :id="`${id}-from`" v-model="fromId">
          <optgroup v-for="g in groups" :key="g.label" :label="g.label">
            <option v-for="u in g.units" :key="u.id" :value="u.id">
              {{ u.name[locale] }} ({{ unitSymbol(u, locale) }})
            </option>
          </optgroup>
        </select>
      </div>

      <button type="button" class="swap" :title="ui.swap[locale]" :aria-label="ui.swap[locale]" @click="swap">
        <Icon name="swap" :size="20" />
      </button>

      <div class="field">
        <label :for="`${id}-to`">{{ ui.to[locale] }}</label>
        <select :id="`${id}-to`" v-model="toId">
          <optgroup v-for="g in groups" :key="g.label" :label="g.label">
            <option v-for="u in g.units" :key="u.id" :value="u.id">
              {{ u.name[locale] }} ({{ unitSymbol(u, locale) }})
            </option>
          </optgroup>
        </select>
      </div>
    </div>

    <output :id="`${id}-result`" class="result" aria-live="polite">
      <template v-if="conversion?.ok && value !== null">
        <span class="equation">{{ format(value) }} {{ symbolOf(fromId) }} =</span>
        <strong class="answer">{{ format(conversion.value) }} {{ symbolOf(toId) }}</strong>
      </template>
      <span v-else-if="errorText" class="error">{{ errorText }}</span>
      <span v-else class="hint">{{ ui.placeholder[locale] }}</span>
    </output>

    <div class="actions">
      <button type="button" :disabled="!conversion?.ok" @click="copyResult">
        <Icon :name="feedback === 'result' ? 'check' : 'copy'" :size="16" />
        {{ feedback === 'result' ? ui.copied[locale] : ui.copy[locale] }}
      </button>
      <button type="button" @click="copyLink">
        <Icon :name="feedback === 'link' ? 'check' : 'link'" :size="16" />
        {{ feedback === 'link' ? ui.linkCopied[locale] : ui.share[locale] }}
      </button>
    </div>

    <details v-if="everyUnit.length" class="every-unit">
      <summary>{{ ui.allUnits[locale] }}</summary>
      <table>
        <tbody>
          <tr v-for="row in everyUnit" :key="row.unit.id" :class="{ current: row.unit.id === toId }">
            <th scope="row">
              {{ row.unit.name[locale] }}
            </th>
            <td class="num">
              {{ row.text }}
            </td>
            <td class="sym">
              {{ unitSymbol(row.unit, locale) }}
            </td>
          </tr>
        </tbody>
      </table>
    </details>
  </div>
</template>

<style scoped>
.converter {
  margin: 24px 0;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-top: 4px solid var(--accent);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

label {
  font-size: 14px;
  font-weight: 600;
  color: var(--vp-c-text-2);
}

input,
select {
  width: 100%;
  min-width: 0;
  padding: 10px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 16px;
}

input:focus-visible,
select:focus-visible,
button:focus-visible {
  outline: 2px solid var(--vp-c-brand-1);
  outline-offset: 1px;
}

input[aria-invalid='true'] {
  border-color: var(--vp-c-danger-1);
}

.value input {
  font-size: 20px;
  font-variant-numeric: tabular-nums;
}

.units {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: end;
  gap: 12px;
  margin-top: 16px;
}

.swap {
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 50%;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  transition: transform 0.2s;
}

.swap:hover {
  transform: rotate(180deg);
  border-color: var(--vp-c-brand-1);
}

.result {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 4px 10px;
  min-height: 64px;
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 8px;
  background: var(--vp-c-bg);
  overflow-wrap: anywhere;
}

.equation {
  color: var(--vp-c-text-2);
}

.answer {
  font-size: 26px;
  line-height: 1.3;
  font-variant-numeric: tabular-nums;
}

.error {
  color: var(--vp-c-danger-1);
  font-weight: 500;
}

.hint {
  color: var(--vp-c-text-3);
}

.actions {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 12px;
}

.actions button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  background: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  font-size: 14px;
}

.actions button:hover:not(:disabled) {
  border-color: var(--vp-c-brand-1);
}

.actions button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.every-unit {
  margin-top: 16px;
}

.every-unit summary {
  cursor: pointer;
  font-weight: 600;
}

.every-unit table {
  display: table;
  width: 100%;
  margin: 12px 0 0;
}

.every-unit th {
  font-weight: 400;
  text-align: left;
}

.every-unit .num {
  text-align: right;
  font-variant-numeric: tabular-nums;
  overflow-wrap: anywhere;
}

.every-unit .sym {
  color: var(--vp-c-text-2);
  white-space: nowrap;
}

.every-unit tr.current {
  background: var(--vp-c-default-soft);
  font-weight: 600;
}

@media (max-width: 560px) {
  .converter {
    padding: 16px;
  }

  .units {
    grid-template-columns: 1fr;
  }

  .swap {
    justify-self: center;
    transform: rotate(90deg);
  }

  .swap:hover {
    transform: rotate(270deg);
  }
}
</style>
