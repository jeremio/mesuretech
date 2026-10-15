import antfu from '@antfu/eslint-config'

export default antfu(
  {
    vue: true,
    typescript: true,
    pnpm: true,
    ignores: ['_ancien/**', '.vitepress/cache/**', '.vitepress/dist/**', 'docs/**'],
  },
  {
    rules: {
      'no-console': ['warn', { allow: ['warn', 'error'] }],
    },
  },
)
