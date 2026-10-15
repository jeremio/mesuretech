import { describe, expect, it } from 'vitest'
import { pagePairs, translatedPath } from '../.vitepress/routes'

describe('changement de langue', () => {
  it('ne redirige jamais une page qui existe (pas de boucle)', () => {
    for (const [fr, en] of pagePairs) {
      expect(translatedPath(fr)).toBeNull()
      expect(translatedPath(en)).toBeNull()
    }
  })

  it.each([
    ['/en/convertisseurs/longueur', '/en/converters/length'],
    ['/converters/length', '/convertisseurs/longueur'],
    ['/en/convertisseurs/temperature', '/en/converters/temperature'],
    ['/converters/fuel-consumption', '/convertisseurs/consommation'],
    ['/en/a-propos', '/en/about'],
    ['/about', '/a-propos'],
    ['/en/guide/prefixes-si', '/en/guide/si-prefixes'],
    ['/guide/si-prefixes', '/guide/prefixes-si'],
    ['/en/convertisseurs/', '/en/converters/'],
    ['/converters/', '/convertisseurs/'],
  ])('%s mène à %s', (from, to) => {
    expect(translatedPath(from)).toBe(to)
  })

  it('ignore les adresses inconnues', () => {
    expect(translatedPath('/nimporte-quoi')).toBeNull()
  })
})
