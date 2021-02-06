import Vue from 'vue'

import Vuetify from 'vuetify/lib'
// locale
import zhHans from '@/locale/zh-Hans'
import en from '@/locale/en'
import store from '../store'
Vue.use(Vuetify)

export default new Vuetify({
  lang: {
    locales: { zhHans, en },
    current: 'en'
  },
  theme: {
    options: {
      customProperties: true
    },
    themes: {
      light: {
        primary: store.getters.getThemeColor,
        secondary: '#424242',
        accent: '#82B1FF',
        error: '#FF5252',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FFC107'
      }
    }
  }
})
