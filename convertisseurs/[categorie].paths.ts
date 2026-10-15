import { pageContent } from '../.vitepress/converterPage'
import { categories } from '../src/units'

export default {
  paths() {
    return categories.map(c => ({
      params: { categorie: c.slug.fr },
      content: pageContent(c, 'fr'),
    }))
  },
}
