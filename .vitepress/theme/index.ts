import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { translatedPath } from '../routes'
import CategoryGrid from './components/CategoryGrid.vue'
import Converter from './components/Converter.vue'
import UnitTable from './components/UnitTable.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app, router }) {
    app.component('CategoryGrid', CategoryGrid)
    app.component('Converter', Converter)
    app.component('UnitTable', UnitTable)

    // Changement de langue : redirige vers la page traduite (les slugs diffèrent entre langues)
    router.onBeforeRouteChange = (to) => {
      const url = new URL(to, 'http://local')
      const target = translatedPath(url.pathname.replace(/\.html$/, ''))
      if (target) {
        router.go(target)
        return false
      }
    }
  },
} satisfies Theme
