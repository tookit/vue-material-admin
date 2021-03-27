<template>
  <v-navigation-drawer
    v-model="showDrawer"
    app
    class="app-drawer"
    :mini-variant.sync="mini"
    mini-variant-width="64"
    :width="drawerWidth"
  >
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <app-switcher />
    <vue-perfect-scrollbar class="app-drawer__scrollbar">
      <div class="app-drawer__inner">
        <nav-list :items="computeMenu" :mini="mini" />
      </div>
    </vue-perfect-scrollbar>
    <template #append>
      <div class="grey lighten-3">
        <template v-if="mini">
          <div class="d-flex">
            <v-btn width="64" icon tile class="mx-auto" @click="handleDrawerCollapse">
              <v-icon>mdi-arrow-collapse-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else>
          <div class="d-flex">
            <v-spacer />
            <v-btn icon tile class="mr-2" @click="handleDrawerCollapse">
              <v-icon>mdi-arrow-collapse-left</v-icon>
            </v-btn>
          </div>
        </template>
      </div>
    </template>
  </v-navigation-drawer>
</template>
<script>
import { protectedRoute as routes } from '@/router/config'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import AppSwitcher from './AppSwitcher'
import NavList from '@/components/nav/NavList'
export default {
  name: 'AppDrawer',
  components: { VuePerfectScrollbar, AppSwitcher, NavList },
  props: {},
  data() {
    return {
      mini: false,
      showDrawer: true,
      drawerWidth: 256,
      scrollSettings: {
        maxScrollbarLength: 160,
      },
    }
  },

  computed: {
    computeLogo() {
      return '/static/m.png'
    },
    computeMenu() {
      return this.filterRouteItem(routes[0].children)
    },
    computeHeight() {
      return {
        height: this.height || '',
      }
    },
  },
  created() {},

  methods: {
    filterRouteItem(routes) {
      return routes
        .filter((item) => item.meta.hidden !== true)
        .map((item) => {
          return {
            title: this.__('menu.' + item.meta.title),
            icon: item.meta.icon,
            path: item.path,
            isNew: item.meta.isNew || false,
            children: item.children ? this.filterRouteItem(item.children) : [],
          }
        })
    },
    handleDrawerCollapse() {
      this.mini = !this.mini
    },
    toggleDrawer() {
      this.showDrawer = !this.showDrawer
    },
  },
}
</script>

<style lang="sass" scoped>
.app-drawer
  &__srollbar
    max-height:  calc(100vh - 64px - 36px - 44px)
  &__inner
    height: calc(100vh - 64px - 36px - 44px)
</style>
