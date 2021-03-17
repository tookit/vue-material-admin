<template>
  <v-app-bar color="primary" dark app clipped-right>
    <v-app-bar-nav-icon @click="handleDrawerToggle" />
    <v-spacer />
    <v-toolbar-items>
      <v-btn text href="mailto:wangqiangshen@gmail.com">Hire Me</v-btn>
      <v-btn text href="https://www.isocked.com" target="_blank">Blog</v-btn>
      <v-btn icon href="https://github.com/tookit/vue-material-admin">
        <v-icon>mdi-github</v-icon>
      </v-btn>
      <v-btn icon @click="handleFullScreen()">
        <v-icon>mdi-fullscreen</v-icon>
      </v-btn>
      <v-menu
        offset-y
        origin="center center"
        class="elelvation-1"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn icon text slot="activator" v-on="on">
            <v-badge color="red" overlap>
              <span slot="badge">{{ getNotification.length }}</span>
              <v-icon medium>mdi-bell</v-icon>
            </v-badge>
          </v-btn>
        </template>
        <notification-list
          v-show="getNotification.length > 0"
          :items="getNotification"
        />
      </v-menu>
      <v-menu
        offset-y
        origin="center center"
        class="elelvation-1"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on }">
          <v-btn text slot="activator" v-on="on">
            <v-icon medium>mdi-translate</v-icon>
            <span class="ml-2"> {{ localeText }} </span>
          </v-btn>
        </template>
        <v-list>
          <v-list-item-group v-model="$vuetify.lang.current">
            <v-list-item
              @click="handleChangeLocale(item)"
              v-for="item in availableLanguages"
              :key="item.value"
              :value="item.value"
            >
              <v-list-item-title v-text="item.text" />
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-menu>
      <v-menu offset-y origin="center center" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text slot="activator" v-on="on">
            <v-avatar size="30px">
              <img :src="getAvatar" :alt="getUsername" />
            </v-avatar>
          </v-btn>
        </template>
        <v-list class="pa-0">
          <v-list-item
            v-for="(item, index) in profileMenus"
            :to="!item.href ? { name: item.name } : null"
            :href="item.href"
            @click="item.click"
            :disabled="item.disabled"
            :target="item.target"
            rel="noopener"
            :key="index"
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
  </v-app-bar>
</template>
<script>
import NotificationList from '@/components/widgets/list/NotificationList'
import Util from '@/util'
import { mapGetters } from 'vuex'
export default {
  name: 'MediaToolbar',
  components: {
    NotificationList
  },
  data() {
    return {
      profileMenus: [
        {
          icon: 'mdi-account',
          href: '#',
          title: 'Profile',
          click: this.handleProfile
        },
        {
          icon: 'mdi-cog',
          href: '#',
          title: 'Settings',
          click: this.handleSetting
        },
        {
          icon: 'mdi-power',
          href: '#',
          title: 'Logout',
          click: this.handleLogut
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getAvatar', 'getUsername', 'getNotification']),
    toolbarColor() {
      return this.$vuetify.options.extra.mainNav
    },
    availableLanguages() {
      const { locales } = this.$vuetify.lang
      return Object.keys(locales).map((lang) => {
        return {
          text: locales[lang].label,
          value: lang
        }
      })
    },
    localeText() {
      const find = this.availableLanguages.find(
        (item) => item.value === this.$vuetify.lang.current
      )
      return find.text
    }
  },
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
          color: 'success'
        })
        this.$router.push('/auth/login')
      }
    },
    handleChangeLocale({ value }) {
      this.$vuetify.lang.current = value
    },
    handleSetting() {},
    handleProfile() {},
    handleGoBack() {
      this.$router.go(-1)
    }
  },
  created() {}
}
</script>

<style lang="sass" scoped></style>
