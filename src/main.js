import Vue from 'vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './plugins/vuetify'
import './theme/default.sass'

import App from './App.vue'
import vuetify from './plugins/vuetify'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App)
})

app.$mount('#app')
