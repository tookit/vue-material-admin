<template>
  <v-navigation-drawer
    app
    class="app--drawer"
    :mini-variant.sync="mini"
    v-model="drawer"
    :width="drawWidth"
    :dark="$vuetify.dark"
  >
    <v-toolbar color="primary darken-1" dark>
      <img :src="computeLogo" height="36" alt="Vue Material Admin Template" />
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Vue Material</span>
      </v-toolbar-title>
    </v-toolbar>
    <div class="pa-3">
      <v-subheader>Sponsor</v-subheader>
      <a href="https://www.nsdftth.com">
        <img src="https://www.nsdftth.com/logo.png" alt="NSD" height="72" />
      </a>
    </div>
    <v-list expand dense v-if="items" nav>
      <template v-for="(item, i) in items">
        <v-subheader
          v-if="item.header"
          :key="`subheader-${i}`"
          v-text="item.header"
        />
        <v-divider v-else-if="item.divider" :key="`divider-${i}`" />
        <list-group v-else-if="item.group" :key="`group-${i}`" :item="item" />
        <list-item
          v-else
          :key="`item-${i}`"
          :icon="item.icon"
          :subtext="item.subtext"
          :text="item.text"
          :to="item.to"
        />
      </template>
    </v-list>
  </v-navigation-drawer>
</template>
<script>
import menu from '@/api/menu'
import ListGroup from '@/components/List/Group'
import ListItem from '@/components/List/Item'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'

export default {
  name: 'AppDrawer',
  components: {
    VuePerfectScrollbar,
    ListGroup,
    ListItem,
  },
  props: {
    expanded: {
      type: Boolean,
      default: true,
    },
    drawWidth: {
      type: [Number, String],
      default: '260',
    },
    showDrawer: Boolean,
  },
  data() {
    return {
      mini: false,
      items: menu,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160,
      },
    }
  },

  computed: {
    computeGroupActive() {
      return true
    },
    computeLogo() {
      return '/static/m.png'
    },
  },
  watch: {
    showDrawer: {
      handler(val) {
        this.drawer = val
      },
      immediate: true,
    },
  },
  created() {},

  methods: {
    genChildTarget(item, subItem) {
      if (subItem.href) return
      if (subItem.component) {
        return {
          name: subItem.component,
        }
      }
      return { name: `${item.group}/${subItem.name}` }
    },
  },
}
</script>

<style lang="sass" scoped>
.app--drawer
  overflow: hidden !important

  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
