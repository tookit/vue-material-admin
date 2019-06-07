<template>
  <v-toolbar color="primary" fixed dark app>
    <v-toolbar-title>
      <v-toolbar-side-icon @click="handleDrawerToggle"></v-toolbar-side-icon>
    </v-toolbar-title>
    <v-text-field flat solo-inverted prepend-inner-icon="search" label="Search" clearable class="search"></v-text-field>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat href="mailto:wangqiangshen@gmail.com">Hire Me</v-btn>
      <v-btn icon href="https://github.com/tookit/vue-material-admin">
        <v-icon class="fa-2x">fa-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>fullscreen</v-icon>
      </v-btn>
      <v-menu offset-y origin="center center" class="elelvation-1" :nudge-bottom="14" transition="scale-transition">
        <v-btn icon flat slot="activator">
          <v-badge color="red" overlap>
            <span slot="badge">3</span>
            <v-icon medium>notifications</v-icon>
          </v-badge>
        </v-btn>
        <notification-list></notification-list>
      </v-menu>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <v-btn icon large flat slot="activator">
          <v-avatar size="30px">
            <img src="/static/avatar/man_4.jpg" alt="Michael Wang" />
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile
            v-for="(item, index) in items"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            ripple="ripple"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
          >
            <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
import NotificationList from "@/components/widgets/list/NotificationList"
import Util from "@/util"
export default {
  name: "AppToolbar",
  components: {
    NotificationList
  },
  data() {
    return {
      items: [
        {
          icon: "account_circle",
          href: "#",
          title: "Profile",
          click: this.handleProfile
        },
        {
          icon: "settings",
          href: "#",
          title: "Settings",
          click: this.handleSetting
        },
        {
          icon: "fullscreen_exit",
          href: "#",
          title: "Logout",
          click: this.handleLogut
        }
      ]
    }
  },
  computed: {
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav
    }
  },
  methods: {
    handleDrawerToggle() {
      this.$emit("side-icon-click")
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    handleLogut() {
      //handle logout
      this.$router.push('/auth/login')
    },
    handleSetting() {

    },
    handleProfile() {
      
    }
  }
}
</script>

<style lang="stylus" scoped></style>
