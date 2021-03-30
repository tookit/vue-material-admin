import Vue from 'vue'
import VueI18n from 'vue-i18n'
Vue.use(VueI18n)
import store from '../store'
import zhHans from '@/locale/zh-Hans'
import en from '@/locale/en'
const translation = {
  zh: zhHans,
  en: en,
}
const i18n = new VueI18n({
  locale: store.getters.getLocale, // set locale
  messages: translation, // set locale messages
})

export default i18n
