<template>
  <v-menu offset-y origin="center center" rounded transition="scale-transition">
    <template #activator="{ on }">
      <v-btn slot="activator" text v-on="on">
        <v-icon medium>mdi-translate</v-icon>
        <span class="ml-2"> {{ localeText }} </span>
      </v-btn>
    </template>
    <v-list>
      <v-list-item-group v-model="locale">
        <v-list-item
          v-for="item in availableLanguages"
          :key="item.value"
          :value="item"
          @click="handleChangeLocale(item)"
        >
          <v-list-item-title v-text="item.text" />
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      locale: this._i18n.locale,
      localeText: 'English',
    }
  },
  computed: {
    availableLanguages() {
      const { messages } = this._i18n
      return Object.keys(messages).map((lang) => {
        return {
          text: messages[lang].label,
          value: lang,
        }
      })
    },
  },
  methods: {
    handleChangeLocale(locale) {
      this._i18n.locale = locale.value
      this.localeText = locale.text
      this.$store.commit('SET_LOCALE', locale.value)
    },
  },
}
</script>

<style></style>
