<template>
  <v-app dark>
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
    <v-btn
      small
      fab
      dark
      fixed
      top="top"
      right="right"
      class="chat-fab"
      color="primary"
      @click="openOnlineUser"
    >
      <v-icon>mdi-chat</v-icon>
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
      <template v-if="showSetting">
        <theme-settings />
      </template>
      <template v-else>
        <online-user />
      </template>
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
import OnlineUser from '@/components/OnlineUser'
export default {
  components: {
    ThemeSettings,
    OnlineUser
  },
  data() {
    return {
      rightDrawer: false,
      showSetting: true,
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
      this.showSetting = true
      this.rightDrawer = !this.rightDrawer
    },
    openOnlineUser() {
      this.$vuetify.goTo(0)
      this.showSetting = false
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
        text: 'Auth Failed',
        color: 'error'
      }
      this.$router.push({
        path: '/auth/login',
        query: {
          redirect: this.$route.path
        }
      })
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
.chat-fab
  top: calc(50% + 40px) !important
  right: 0
  border-radius: 0
</style>
