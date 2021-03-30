<template>
  <div class="themeSetting">
    <v-toolbar color="primary">
      <v-toolbar-title class="white--text">Theme Settings</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-row column>
        <v-col>
          <v-select
            v-model="$vuetify.lang.current"
            placeholder="Language"
            label="Language"
            :items="availableLanguages"
            @change="changeLocale"
          />
          <v-subheader class="px-1 my-2">Color Option</v-subheader>
          <div class="color-option">
            <v-item-group v-model="theme">
              <template v-for="item in themeColorOptions">
                <v-item :key="item.key" v-slot="{ active }" :value="item.key">
                  <v-avatar
                    :class="active ? 'active' : ''"
                    class="color-option__item"
                    :color="item.key"
                    size="56"
                    tile
                    @click="handleChangeColor(item)"
                  >
                    <v-scroll-y-transition>
                      <v-icon v-if="active" color="white"> mdi-check </v-icon>
                    </v-scroll-y-transition>
                  </v-avatar>
                </v-item>
              </template>
            </v-item-group>
          </div>
          <div class="theme-options">
            <v-subheader class="px-1 my-2">Sidebar Option</v-subheader>
            <v-divider></v-divider>
            <div class="my-3">
              <v-btn-toggle v-model="sideBarOption">
                <v-btn text value="dark">Dark</v-btn>
                <v-btn text value="light">Light</v-btn>
              </v-btn-toggle>
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import colors from 'vuetify/es5/util/colors'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      sideBarOption: 'light',
      colors: colors,
    }
  },
  computed: {
    ...mapGetters(['getTheme']),
    themeColorOptions() {
      return [
        {
          key: 'blue',
        },
        {
          key: 'teal',
        },
        {
          key: 'red',
        },
        {
          key: 'orange',
        },
        {
          key: 'purple',
        },
        {
          key: 'indigo',
        },
        {
          key: 'cyan',
        },
        {
          key: 'pink',
        },
        {
          key: 'green',
        },
      ]
    },
    availableLanguages() {
      const { locales } = this.$vuetify.lang
      return Object.keys(locales).map((lang) => {
        return {
          text: locales[lang].label,
          value: lang,
        }
      })
    },
    theme: {
      get() {
        return this.getTheme
      },
      set(val) {
        this.$store.commit('setTheme', val)
      },
    },
  },
  watch: {
    sideBarOption: {
      handler(val) {
        this.$vuetify.theme.dark = val === 'dark'
      },
      immediate: true,
    },
    updateTheme() {},
  },
  methods: {
    changeLocale(lang) {
      this.$vuetify.lang.current = lang
    },
    handleChangeColor(option) {
      this.theme = option.key
      const color = this.colors[option.key].base
      this.$store.commit('setThemeColor', color)
      this.$vuetify.theme.themes.light.primary = color
    },
  },
}
</script>
<style lang="sass" scoped>
.color-option
  &__item
    display: inline-flex
    margin: 3px
    cursor: pointer
    &.active
</style>
