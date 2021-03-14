<template>
  <v-navigation-drawer
    app
    class="app-drawer"
    :mini-variant.sync="mini"
    v-model="drawer"
    :width="drawerWidth"
  >
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar>
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
              <v-list-group
                :key="key"
                no-action
                :to="item.path"
                :value="computeGroupExpanded(item, $route)"
              >
                <template v-slot:prependIcon>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        v-text="item.meta.icon"
                      />
                    </template>
                    <span>
                      {{ __('menu.' + item.meta.title) }}
                    </span>
                  </v-tooltip>
                </template>
                <template v-slot:activator>
                  <v-list-item-content>
                    <v-list-item-title v-text="__('menu.' + item.meta.title)" />
                  </v-list-item-content>
                </template>
                <v-list-item
                  :class="drawerWidth === 64 ? 'pl-4' : ''"
                  v-for="subItem in item.children"
                  :key="subItem.name"
                  :to="subItem.path"
                  v-show="!subItem.meta.hiddenInMenu"
                >
                  <template v-if="drawerWidth === 64">
                    <v-list-item-icon>
                      <v-tooltip bottom>
                        <template v-slot:activator="{ on, attrs }">
                          <v-icon
                            v-bind="attrs"
                            v-on="on"
                            v-text="subItem.meta.icon"
                          />
                        </template>
                        <span>{{ __('menu.' + subItem.meta.title) }}</span>
                      </v-tooltip>
                    </v-list-item-icon>
                  </template>
                  <template v-else>
                    <v-list-item-content>
                      <v-list-item-title
                        v-text="__('menu.' + subItem.meta.title)"
                      />
                    </v-list-item-content>
                  </template>
                </v-list-item>
              </v-list-group>
            </template>
            <template v-else>
              <v-list-item
                :key="key"
                :to="item.path"
                v-show="!item.meta.hiddenInMenu"
              >
                <v-list-item-icon>
                  <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                      <v-icon
                        v-bind="attrs"
                        v-on="on"
                        v-text="item.meta.icon"
                      />
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
    <template v-slot:append>
      <div class="grey lighten-3">
        <template v-if="drawerWidth === 64">
          <div class="d-flex">
            <v-btn
              width="64"
              icon
              tile
              @click="handleDrawerCollapse"
              class="mx-auto"
            >
              <v-icon>mdi-arrow-collapse-right</v-icon>
            </v-btn>
          </div>
        </template>
        <template v-else>
          <div class="d-flex">
            <v-spacer />
            <v-btn icon tile @click="handleDrawerCollapse" class="mr-2">
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
export default {
  name: 'AppDrawer',
  components: { VuePerfectScrollbar },
  props: {
    expanded: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      mini: false,
      drawerWidth: 256,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      },
      sponsor: {
        href: 'https://www.kamefiber.com/',
        src: '/sponsor/logo.png',
        srcMini: '/sponsor/logo_mini.png'
      }
    }
  },

  computed: {
    computeLogo() {
      return '/static/m.png'
    },
    computeMenu() {
      return routes[0].children
    }
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
    }
  }
}
</script>

<style lang="sass" scoped>
.app-drawer
  overflow: hidden !important
  &__inner
    height: calc(100vh - 100px)
  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
