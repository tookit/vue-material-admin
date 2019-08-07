import Vue from 'vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './plugins/storage'
import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'
import './theme/default.sass'

import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
})

app.$mount('#app')
