<template>
  <v-navigation-drawer class="appDrawer" :mini-variant.sync="mini" app v-model="showDrawer" :width="drawWidth">
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <vue-perfect-scrollbar class="drawer-menu--scroll" :settings="scrollSettings">
      <v-list dense expand>
        <template v-for="item in menus">
          <!--group with subitems-->
          <v-list-group
            v-if="item.items"
            :key="item.title"
            :group="item.group"
            :prepend-icon="item.icon"
            no-action="no-action"
          >
            <v-list-tile slot="activator" ripple="ripple">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <template v-for="subItem in item.items">
              <!--sub group-->
              <v-list-group v-if="subItem.items" :key="subItem.name" :group="subItem.group" sub-group="sub-group">
                <v-list-tile slot="activator" ripple="ripple">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile
                  v-for="grand in subItem.children"
                  :key="grand.name"
                  :to="genChildTarget(item, grand)"
                  :href="grand.href"
                  ripple="ripple"
                >
                  <v-list-tile-content>
                    <v-list-tile-title>{{ grand.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list-group>
              <!--child item-->
              <v-list-tile
                v-else
                :key="subItem.name"
                :to="genChildTarget(item, subItem)"
                :href="subItem.href"
                :disabled="subItem.disabled"
                :target="subItem.target"
                ripple="ripple"
              >
                <v-list-tile-content>
                  <v-list-tile-title>
                    <span>{{ subItem.title }}</span>
                  </v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-action v-if="subItem.action">
                  <v-icon :class="[subItem.actionClass || 'success--text']">{{ subItem.action }}</v-icon>
                </v-list-tile-action>
              </v-list-tile>
            </template>
          </v-list-group>
          <v-subheader v-else-if="item.header" :key="item.name">{{ item.header }}</v-subheader>
          <v-divider v-else-if="item.divider" :key="item.name"></v-divider>
          <!--top-level link-->
          <v-list-tile
            v-else
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="item.name"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action v-if="item.subAction">
              <v-icon class="success--text">{{ item.subAction }}</v-icon>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </v-navigation-drawer>
</template>
<script>
import menu from "@/api/menu"
import VuePerfectScrollbar from "vue-perfect-scrollbar"
export default {
  name: "AppDrawer",
  components: {
    VuePerfectScrollbar
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    drawWidth: {
      type: [Number, String],
      default: "260"
    },
    showDrawer: Boolean
  },
  data() {
    return {
      mini: false,
      menus: menu,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  },
  computed: {
    computeGroupActive() {
      return true
    },
    computeLogo() {
      return "/static/m.png"
    },

    sideToolbarColor() {
      return this.$vuetify.options.extra.sideNav
    }
  },
  created() {},

  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return
      if (subItem.component) {
        return {
          name: subItem.component
        }
      }
      return { name: `${item.group}/${subItem.name}` }
    }
  }
}
</script>

<style lang="stylus">
#appDrawer {
  overflow: hidden;
  .drawer-menu--scroll {
    height: calc(100vh - 48px);
    overflow: auto;
  }
}
</style>
