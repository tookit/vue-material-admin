<template>
  <v-navigation-drawer v-model="drawer" app class="app-drawer" :mini-variant.sync="mini" :width="drawerWidth">
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <app-switcher class="ma-2" />
    <vue-perfect-scrollbar class="app-drawer__scrollbar">
      <div class="app-drawer__inner">
        <div class="pa-3">
          <v-subheader v-if="drawerWidth !== 64">
            {{ __('sponsor') }}
          </v-subheader>
          <a :href="sponsor.href">
            <v-img
              :src="drawerWidth === 64 ? sponsor.srcMini : sponsor.src"
              height="64px"
              alt="Optic fiber component provider"
            />
          </a>
        </div>
        <v-list class="pa-0">
          <template v-for="(item, key) in computeMenu">
            <template v-if="item.children && item.children.length > 0">
              <v-list-group :key="key" no-action :to="item.path" :value="computeGroupExpanded(item, $route)">
                <template #prependIcon>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                    </template>
                    <span>
                      {{ __('menu.' + item.meta.title) }}
                    </span>
                  </v-tooltip>
                </template>
                <template #activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="__('menu.' + item.meta.title)" />
                  </v-list-item-content>
                </template>
                <v-list-item
                  v-for="subItem in item.children"
                  v-show="!subItem.meta.hiddenInMenu"
                  :key="subItem.name"
                  :class="drawerWidth === 64 ? 'pl-4' : ''"
                  :to="subItem.path"
                >
                  <template v-if="drawerWidth === 64">
                    <v-list-item-icon>
                      <v-tooltip bottom>
                        <template #activator="{ on, attrs }">
                          <v-icon v-bind="attrs" v-on="on" v-text="subItem.meta.icon" />
                        </template>
                        <span>{{ __('menu.' + subItem.meta.title) }}</span>
                      </v-tooltip>
                    </v-list-item-icon>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title v-text="__('menu.' + subItem.meta.title)" />
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-item v-show="!item.meta.hiddenInMenu" :key="key" :to="item.path">
                <v-list-item-icon>
                  <v-tooltip bottom>
                    <template #activator="{ on, attrs }">
                      <v-icon v-bind="attrs" v-on="on" v-text="item.meta.icon" />
                    </template>
                    <span>{{ __('menu.' + item.meta.title) }}</span>
                  </v-tooltip>
                </v-list-item-icon>
                <v-list-item-content v-if="drawerWidth !== 64">
                  <v-list-item-title v-text="__('menu.' + item.meta.title)" />
                </v-list-item-content>
                <v-list-item-action v-if="item.meta.new">
                  <v-icon color="green">mdi-new-box </v-icon>
                </v-list-item-action>
              </v-list-item>
            </template>
          </template>
        </v-list>
      </div>
    </vue-perfect-scrollbar>
    <template #append>
      <div class="grey lighten-3">
        <template v-if="drawerWidth === 64">
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
export default {
  name: 'AppDrawer',
  components: { VuePerfectScrollbar, AppSwitcher },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      mini: false,
      drawerWidth: 256,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160,
      },
      sponsor: {
        href: 'https://www.kamefiber.com/',
        src: '/sponsor/logo.png',
        srcMini: '/sponsor/logo_mini.png',
      },
    }
  },

  computed: {
    computeLogo() {
      return '/static/m.png'
    },
    computeMenu() {
      return routes[0].children
    },
    computeHeight() {
      return {
        height: this.height || '',
      }
    },
  },
  created() {},

  methods: {
    handleDrawerCollapse() {
      this.drawerWidth = this.drawerWidth === 256 ? 64 : 256
    },
    toggleDrawer() {
      this.drawer = !this.drawer
    },
    computeGroupExpanded(item, $route) {
      return $route.matched.map((item) => item.path).includes(item.path)
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
