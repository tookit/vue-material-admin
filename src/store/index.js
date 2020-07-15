import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import VuexPersistence from 'vuex-persist'

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
})

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    App: app,
  },
  plugins: [vuexLocal.plugin],
})

store.commit('setThemeColor', 'blue')

export default store
