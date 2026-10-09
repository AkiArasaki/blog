import { createI18n } from 'vue-i18n'

import en from '@/assets/languages/en.json'
import zh from '@/assets/languages/zh.json'
import ja from '@/assets/languages/ja.json'

const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: localStorage.getItem('language') || 'en',
  fallbackLocale: 'en',
  messages: { en, zh, ja }
})

export default i18n
