import type { Locale } from '../../../src/units'
import { useData } from 'vitepress'
import { computed } from 'vue'

/** Langue de la page courante, déduite de la locale VitePress (« fr-FR », « en-US ») */
export function useLocale() {
  const { lang } = useData()
  return computed<Locale>(() => (lang.value.startsWith('en') ? 'en' : 'fr'))
}
