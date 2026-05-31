import { createI18n } from 'vue-i18n'
import fr from './fr.json'
import en from './en.json'

const savedLang = localStorage.getItem('lang') || 'fr'

export default createI18n({
  legacy: false,
  locale: savedLang,
  fallbackLocale: 'en',
  messages: { fr, en }
})
