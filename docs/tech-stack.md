# Documentation Technique

## Vue d'ensemble

Ce document présente les détails techniques de l'application Vue.js. Il contient des informations sur les technologies utilisées, la structure du projet, et les configurations importantes.

## Stack Technologique

### Framework et Langages

- **Vue.js**: Version 3.5.17 (Composition API)
- **TypeScript**: Version 5.8.3
- **Node.js**: Version 22 (recommandée)

### Outils de Build et de Développement

- **Vite**: Version 7.0.5 - Outil de build ultrarapide
- **vue-tsc**: Version 3.0.1 - Vérification des types pour les fichiers Vue
- **ESLint**: Version 9.31.0 - Linting du code
  - Configuration: `@antfu/eslint-config` (v4.17.0)
- **pnpm**: Version 9 - Gestionnaire de paquets (plus rapide et plus efficace que npm)

### UI et Styling

- **Tailwind CSS**: Version 4.1.11 - Framework CSS utility-first
- **@tailwindcss/vite**: Version 4.1.11 - Plugin Vite pour l'intégration de Tailwind CSS

### Fonctionnalités Principales

- **Vue Router**: Version 4.5.1 - Routage côté client
- **Vue I18n**: Version 11.1.10 - Internationalisation

## Structure du Projet

```
/
├── docs/               # Documentation du projet
├── public/             # Ressources publiques (non transformées)
├── src/                # Code source
│   ├── locales/        # Fichiers de traduction
│   ├── router/         # Configuration du routeur
│   ├── views/          # Composants de pages
│   ├── App.vue         # Composant racine
│   ├── i18n.ts         # Configuration d'internationalisation
│   ├── main.ts         # Point d'entrée
│   └── style.css       # Styles globaux (imports Tailwind)
├── .editorconfig       # Configuration cohérente des éditeurs
├── .gitignore          # Fichiers ignorés par Git
├── eslint.config.js    # Configuration ESLint
├── index.html          # Page HTML principale
├── netlify.toml        # Configuration de déploiement Netlify
├── package.json        # Dépendances et scripts
├── tailwind.config.js  # Configuration de Tailwind CSS
├── tsconfig.json       # Configuration principale TypeScript
├── tsconfig.app.json   # Configuration TypeScript pour l'application
├── tsconfig.node.json  # Configuration TypeScript pour Node.js
└── vite.config.ts      # Configuration de Vite
```

## Configurations détaillées

### Tailwind CSS

Tailwind CSS v4 est configuré via le plugin `@tailwindcss/vite` qui simplifie l'intégration avec Vite. Voici la configuration dans `tailwind.config.js` :

```javascript
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

Le scanner de contenu est configuré pour analyser tous les fichiers Vue, TS, JS et HTML dans le répertoire source et l'index.html.

### Vite

La configuration Vite définit les plugins et les alias de chemin :

```typescript
export default defineConfig({
  plugins: [
    vue(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
```

L'alias `@` pointe vers le dossier `src/`, permettant des imports plus propres comme `import Component from '@/components/Component.vue'`.

### EditorConfig

Le fichier `.editorconfig` garantit une cohérence de style de code entre différents éditeurs et IDE. Il définit :

- Indentation : 2 espaces
- Encodage : UTF-8
- Fin de ligne : LF (Unix/Linux)
- Une ligne vide à la fin des fichiers
- Suppression des espaces en fin de ligne

### Déploiement (Netlify)

Le projet est configuré pour un déploiement sur Netlify via le fichier `netlify.toml` :

```toml
[build]
command = "pnpm build"
publish = "dist"

[build.environment]
NODE_VERSION = "22"
PNPM_VERSION = "9"

[[redirects]]
from = "/*"
to = "/index.html"
status = 200
```

Cette configuration :
- Utilise la commande `pnpm build` pour la compilation
- Publie le dossier `dist/`
- Spécifie Node.js v22 et pnpm v9
- Configure les redirections SPA (Single Page Application)

## Développement

### Scripts disponibles

- `pnpm dev` : Démarre le serveur de développement
- `pnpm build` : Compile l'application pour la production
- `pnpm preview` : Prévisualise la version de production localement
- `pnpm lint` : Vérifie le code avec ESLint
- `pnpm lint:fix` : Corrige automatiquement les problèmes ESLint

### Bonnes pratiques

1. **TypeScript** : Utilisez des types explicites pour améliorer la robustesse du code.
2. **Composition API** : Préférez la Composition API avec `<script setup>` pour les composants Vue.
3. **i18n** : Placez toutes les chaînes de caractères dans les fichiers de traduction pour faciliter l'internationalisation.
4. **Tailwind** : Utilisez les classes Tailwind directement dans les templates pour un styling cohérent.
5. **Import aliases** : Utilisez l'alias `@/` pour les imports relatifs à `src/`.
