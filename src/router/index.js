import Vue from 'vue'
import Router from 'vue-router'
import { publicRoute, protectedRoute } from './config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes = publicRoute.concat(protectedRoute)
import store from '@/store'

Vue.use(Router)
const router = new Router({
  mode: 'hash',
  linkActiveClass: 'active',
  routes: routes
})
// router gards
router.beforeEach((to, from, next) => {
  NProgress.start()
  const token = store.getters.getAccessToken
  if (to.name !== 'login') {
    if (token) {
      store
        .dispatch('fetchProfile')
        .then(() => {
          next()
        })
        .catch(() => {
          next({ name: 'login', query: { redirect: to.path } })
        })
    } else {
      next({ name: 'login', query: { redirect: to.path } })
    }
  } else {
    next()
  }

  //auth route is authenticated
})

router.afterEach(() => {
  NProgress.done()
})

export default router
