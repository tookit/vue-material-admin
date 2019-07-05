import Vue from 'vue'
import router from './router/'
import store from './store/'
import './registerServiceWorker'
import './plugins/storage'
import './plugins/vuetify'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import 'font-awesome/css/font-awesome.css'
import './theme/default.styl'

import App from './App.vue'

Vue.config.productionTip = false

const app = new Vue({
  router,
  store,
  render: h => h(App),
})

app.$mount('#app')
