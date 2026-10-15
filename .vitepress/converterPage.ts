import type { Category, Locale } from '../src/units'

/**
 * Contenu Markdown d'une page de convertisseur, généré depuis le registre.
 * Il est écrit dans la page (et non rendu par un composant) pour être indexé par la recherche.
 */
export function pageContent(category: Category, locale: Locale): string {
  const fr = locale === 'fr'
  const title = fr ? `Convertisseur : ${category.name.fr.toLowerCase()}` : `${category.name.en} converter`
  const notes = category.notes[locale].map(n => `- ${n}`).join('\n')
  return [
    `# ${title}`,
    '',
    category.intro[locale],
    '',
    `<Converter category="${category.id}" />`,
    '',
    `## ${fr ? 'Bon à savoir' : 'Good to know'}`,
    '',
    notes,
    '',
    `## ${fr ? 'Les unités disponibles' : 'Available units'}`,
    '',
    `<UnitTable category="${category.id}" :link="false" />`,
    '',
  ].join('\n')
}
