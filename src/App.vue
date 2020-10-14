<template>
  <v-app :dark="true">
    <router-view></router-view>
    <!-- theme setting -->
    <v-btn
      small
      fab
      dark
      fixed
      top="top"
      right="right"
      class="setting-fab"
      color="red"
      @click="openThemeSettings"
    >
      <v-icon>mdi-silverware-variant</v-icon>
    </v-btn>
    <!-- setting drawer -->
    <v-navigation-drawer
      class="setting-drawer"
      temporary
      right
      v-model="rightDrawer"
      hide-overlay
      fixed
    >
      <theme-settings />
    </v-navigation-drawer>
    <!-- global snackbar -->
    <v-snackbar
      :timeout="3000"
      app
      top
      centered
      :color="snackbar.color"
      v-model="snackbar.show"
    >
      {{ snackbar.text }}
      <template v-slot:action="{ attrs }">
        <v-btn icon v-bind="attrs" @click="snackbar.show = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
import ThemeSettings from '@/components/ThemeSettings'
export default {
  components: {
    ThemeSettings
  },
  data() {
    return {
      rightDrawer: false,
      snackbar: {
        show: false,
        text: '',
        color: ''
      }
    }
  },
  methods: {
    openThemeSettings() {
      this.$vuetify.goTo(0)
      this.rightDrawer = !this.rightDrawer
    }
  },
  mounted() {
    if (typeof window !== undefined && window._VMA === undefined) {
      window._VMA = this
    }
  },
  created() {
    this.$on('SHOW_SNACKBAR', (e) => {
      this.snackbar = {
        show: true,
        text: e.text,
        color: e.color
      }
    })
    this.$on('AUTH_FAIELD', () => {
      this.snackbar = {
        show: true,
        text: 'Username or password is wrong!',
        color: 'error'
      }
    })
    this.$on('SERVER_ERROR', () => {
      this.snackbar = {
        show: true,
        text: 'Server Error',
        color: 'error'
      }
    })
  }
}
</script>

<style lang="sass" scoped>
.setting-fab
  top: 50% !important
  right: 0
  border-radius: 0
</style>
