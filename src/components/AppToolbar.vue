<template>
  <v-app-bar color="primary" dark app>
    <v-app-bar-nav-icon @click="handleDrawerToggle" />
    <v-spacer />
    <v-toolbar-items>
      <v-btn text href="mailto:wangqiangshen@gmail.com">Hire Me</v-btn>
      <v-btn text href="https://www.isocked.com" target="_blank">Blog</v-btn>
      <v-btn text href="http://doc.isocked.com/">Doc</v-btn>
      <v-btn icon href="https://github.com/tookit/vue-material-admin">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-menu offset-y origin="center center" class="elelvation-1" transition="scale-transition">
        <template #activator="{ on }">
          <v-btn slot="activator" icon text v-on="on">
            <v-badge color="red" overlap>
              <span slot="badge">{{ getNotification.length }}</span>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <notification-list v-show="getNotification.length > 0" :items="getNotification" />
      </v-menu>
      <!-- locale -->
      <LocaleSwitch />
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template #activator="{ on }">
          <v-btn slot="activator" icon large text v-on="on">
            <c-avatar :size="36" :username="getUsername" :src="getAvatar" status="online" />
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(item, index) in profileMenus"
            :key="index"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            @click="item.click"
          >
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-toolbar-items>
    <v-toolbar slot="extension" tag="div" dense color="white" light>
      <v-icon>mdi-home</v-icon>
      <v-breadcrumbs :items="breadcrumbs" class="pa-3" />
      <v-spacer></v-spacer>
      <v-btn icon small color="black">
        <v-icon @click="handleGoBack" v-text="'mdi-arrow-left'" />
      </v-btn>
    </v-toolbar>
  </v-app-bar>
</template>
<script>
import NotificationList from '@/components/list/NotificationList'
import LocaleSwitch from '@/components/locale/LocaleSwitch'
import CAvatar from '@/components/avatar/CAvatar'
import Util from '@/util'
import { mapGetters } from 'vuex'
export default {
  name: 'AppToolbar',
  components: {
    LocaleSwitch,
    NotificationList,
    CAvatar,
  },
  props: {},
  data() {
    return {
      profileMenus: [
        {
          icon: 'mdi-account',
          href: '#',
          title: 'Profile',
          click: this.handleProfile,
        },
        {
          icon: 'mdi-cog',
          href: '#',
          title: 'Settings',
          click: this.handleSetting,
        },
        {
          icon: 'mdi-power',
          href: '#',
          title: 'Logout',
          click: this.handleLogut,
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['getAvatar', 'getUsername', 'getNotification']),
    breadcrumbs() {
      const { matched } = this.$route
      return matched.map((route, index) => {
        const to = index === matched.length - 1 ? this.$route.path : route.path || route.redirect
        const text = this.$t(route.meta.title)
        return {
          text: text,
          to: to,
          exact: true,
          disabled: false,
        }
      })
    },
  },
  created() {},
  methods: {
    handleDrawerToggle() {
      this.$emit('side-icon-click')
    },
    handleFullScreen() {
      Util.toggleFullScreen()
    },
    handleLogut() {
      if (window.confirm('Are you sure to logout?')) {
        this.$store.dispatch('logout')
        window._VMA.$emit('SHOW_SNACKBAR', {
          text: 'Logout successfull',
          color: 'success',
        })
        this.$router.push('/auth/login')
      }
    },

    handleSetting() {},
    handleProfile() {},
    handleGoBack() {
      this.$router.go(-1)
    },
  },
}
</script>
