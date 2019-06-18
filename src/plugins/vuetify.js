import Vue from "vue"
import "../theme/default.styl"
import config from "../theme/default"
import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  theme: config,
  options: {
    minifyTheme: function (css) {
      return process.env.NODE_ENV === 'production'
        ? css.replace(/[\s|\r\n|\r|\n]/g, '')
        : css
    },
    customProperties: true
  }
})
