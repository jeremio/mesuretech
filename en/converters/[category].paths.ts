import { pageContent } from '../../.vitepress/converterPage'
import { categories } from '../../src/units'

export default {
  paths() {
    return categories.map(c => ({
      params: { category: c.slug.en },
      content: pageContent(c, 'en'),
    }))
  },
}
