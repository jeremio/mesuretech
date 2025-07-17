import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import fr from './locales/fr.json'

type MessageSchema = typeof fr

const i18n = createI18n<[MessageSchema], 'fr' | 'en'>({
  legacy: false, // Mode Composition API
  locale: 'fr', // Langue par défaut
  fallbackLocale: 'en', // Langue de secours
  messages: {
    fr,
    en,
  },
})

export default i18n
