import type { DefaultTheme } from 'vitepress'
import type { Locale } from '../src/units'
import { defineConfig } from 'vitepress'
import { categories, categoryPath } from '../src/units'
import { guidePages } from './routes'

const guideTitles: Record<Locale, string[]> = {
  fr: ['Grandeurs physiques', 'Unités de mesure', 'Préfixes SI', 'Systèmes d\'unités'],
  en: ['Physical quantities', 'Units of measurement', 'SI prefixes', 'Systems of units'],
}

function sidebar(locale: Locale): DefaultTheme.SidebarItem[] {
  const fr = locale === 'fr'
  return [
    {
      text: fr ? 'Convertisseurs' : 'Converters',
      items: categories.map(c => ({ text: c.name[locale], link: categoryPath(c, locale) })),
    },
    {
      text: fr ? 'Guide des unités' : 'Units guide',
      items: guidePages.map(([slugFr, slugEn], i) => ({
        text: guideTitles[locale][i],
        link: fr ? `/guide/${slugFr}` : `/en/guide/${slugEn}`,
      })),
    },
  ]
}

export default defineConfig({
  title: 'MesureTech',
  cleanUrls: true,
  lastUpdated: false,
  srcExclude: ['README.md', 'docs/**', '_ancien/**'],
  head: [['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }]],

  locales: {
    root: {
      label: 'Français',
      lang: 'fr-FR',
      description: 'Convertisseurs d\'unités exacts et guide des unités de mesure',
      themeConfig: {
        nav: [
          { text: 'Convertisseurs', link: '/convertisseurs/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'À propos', link: '/a-propos' },
        ],
        sidebar: { '/convertisseurs/': sidebar('fr'), '/guide/': sidebar('fr') },
        outline: { label: 'Sur cette page' },
        docFooter: { prev: 'Page précédente', next: 'Page suivante' },
        darkModeSwitchLabel: 'Apparence',
        lightModeSwitchTitle: 'Passer en mode clair',
        darkModeSwitchTitle: 'Passer en mode sombre',
        sidebarMenuLabel: 'Menu',
        returnToTopLabel: 'Retour en haut',
        langMenuLabel: 'Changer de langue',
        notFound: {
          title: 'Page introuvable',
          quote: 'Cette page n\'existe pas, ou plus.',
          linkLabel: 'Retour à l\'accueil',
          linkText: 'Retour à l\'accueil',
        },
      },
    },
    en: {
      label: 'English',
      lang: 'en-US',
      link: '/en/',
      description: 'Exact unit converters and a guide to units of measurement',
      themeConfig: {
        nav: [
          { text: 'Converters', link: '/en/converters/' },
          { text: 'Guide', link: '/en/guide/' },
          { text: 'About', link: '/en/about' },
        ],
        sidebar: { '/en/converters/': sidebar('en'), '/en/guide/': sidebar('en') },
      },
    },
  },

  themeConfig: {
    logo: '/favicon.svg',
    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: { buttonText: 'Rechercher', buttonAriaLabel: 'Rechercher' },
              modal: {
                displayDetails: 'Afficher la liste détaillée',
                resetButtonTitle: 'Effacer la recherche',
                backButtonTitle: 'Fermer la recherche',
                noResultsText: 'Aucun résultat pour',
                footer: { selectText: 'pour sélectionner', navigateText: 'pour naviguer', closeText: 'pour fermer' },
              },
            },
          },
        },
      },
    },
  },
})
