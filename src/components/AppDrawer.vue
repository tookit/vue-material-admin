<template>
  <v-navigation-drawer
    app
    class="app--drawer"
    :mini-variant.sync="mini"
    v-model="drawer"
    :width="drawerWidth"
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
    <template v-slot:append>
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
    </template>
  </v-navigation-drawer>
</template>
<script>
import menu from '@/api/menu'
import ListGroup from '@/components/List/Group'
import ListItem from '@/components/List/Item'
export default {
  name: 'AppDrawer',
  components: {
    ListGroup,
    ListItem
  },
  props: {
    expanded: {
      type: Boolean,
      default: true
    },
    showDrawer: Boolean
  },
  data() {
    return {
      mini: false,
      drawerWidth: 256,
      items: menu,
      drawer: true,
      scrollSettings: {
        maxScrollbarLength: 160
      }
    }
  },

  computed: {
    computeLogo() {
      return '/static/m.png'
    }
  },
  watch: {
    showDrawer: {
      handler(val) {
        this.drawer = val
      },
      immediate: true
    }
  },
  created() {},

  methods: {
    handleDrawerCollapse() {
      this.drawerWidth = this.drawerWidth === 256 ? 64 : 256
    }
  }
}
</script>

<style lang="sass" scoped>
.app--drawer
  overflow: hidden !important

  .drawer-menu--scroll
    height: calc(100vh - 48px)
    overflow: auto
</style>
