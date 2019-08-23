import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)

//默认中文
const DEFAULT_LANG = 'zh'

const locales = {
  zh: require('./i18n/zh.json'),
  en: require('./i18n/en.json'),
}
const i18n = new VueI18n({
  locale:DEFAULT_LANG,
  messages: locales,
})

export default i18n