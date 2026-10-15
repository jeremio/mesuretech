# MesureTech

Convertisseurs d'unités exacts et guide des unités de mesure, en français et en anglais.

- 13 grandeurs : longueur, masse, température, volume (y compris US et impérial), surface, vitesse, temps, données (préfixes décimaux et binaires), énergie, pression, puissance, angle, consommation de carburant.
- Conversion en direct, inversion des unités, lien partageable (`?v=3&from=foot&to=yard`), mémorisation des dernières unités, tableau « dans toutes les unités ».
- Nombres au format de la langue (`1 609,344` / `1,609.344`), saisie tolérante (`2,5`, `1 234,5`, `1e3`).
- Guide : grandeurs physiques, unités, préfixes SI et binaires, systèmes d'unités.

Site statique [VitePress](https://vitepress.dev) (Vue 3, TypeScript), testé avec [Vitest](https://vitest.dev), déployé sur Netlify.

## Commandes

```bash
pnpm install
pnpm dev         # serveur de développement
pnpm build       # site statique dans .vitepress/dist
pnpm preview     # sert le build
pnpm test        # tests des conversions, du formatage et des routes
pnpm typecheck   # vérification de types (vue-tsc)
pnpm lint        # ESLint (config antfu)
```

## Organisation

| Chemin | Contenu |
|---|---|
| `src/units/categories/` | une grandeur par fichier : unités, symboles, noms FR/EN, facteurs exacts, remarques |
| `src/units/index.ts` | registre des grandeurs (ordre d'affichage, chemins) |
| `src/units/convert.ts` | conversion et domaine de validité (zéro absolu, consommation > 0) |
| `src/units/format.ts` | affichage et lecture des nombres selon la langue |
| `src/units/ui.ts` | libellés de l'interface |
| `.vitepress/theme/components/` | `Converter`, `CategoryGrid`, `UnitTable`, `Icon` |
| `.vitepress/routes.ts` | correspondance des pages FR/EN (sélecteur de langue) |
| `.vitepress/converterPage.ts` | contenu Markdown des pages de convertisseurs, généré depuis le registre |
| `convertisseurs/`, `guide/`, `a-propos.md` | pages françaises (racine du site) |
| `en/` | pages anglaises |
| `tests/` | tests Vitest |
| `docs/` | documents de travail (hors site) |

## Ajouter une unité ou une grandeur

Une unité se déclare **une seule fois**, avec sa valeur exacte dans l'unité de base de sa grandeur :

```ts
unit('foot', 'ft', 'Pied', 'Foot', 'anglo', 0.3048) // 1 ft = 0,3048 m exactement
```

Les conversions entre toutes les paires d'unités s'en déduisent. Les cas non proportionnels (température, consommation) fournissent `toBase` et `fromBase`, plus une `formula` lisible pour le guide.

Une nouvelle grandeur : créer un fichier dans `src/units/categories/`, l'ajouter au tableau `categories` de `src/units/index.ts`, et choisir une icône dans `Icon.vue`. Les pages FR et EN, la barre latérale, l'accueil et le tableau du guide se mettent à jour seuls. Les tests vérifient automatiquement la cohérence du registre et les allers-retours entre toutes les unités.

## Dépendances : points d'attention

- VitePress 1.6 embarque Vite 5. Deux réglages de `pnpm-workspace.yaml` existent uniquement pour lui, à retirer au passage à VitePress 2 (Vite 8) :
  - l'override qui laisse esbuild en 0.21 pour Vite 5 ;
  - l'exception `trustPolicyExclude` sur `vite@5.4.21`.
- Les failles connues de Vite 5 ne touchent que le serveur de développement local, pas le site statique publié.
