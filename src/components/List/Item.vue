<template>
  <v-list-item :to="to" v-bind="customAttrs" ripple v-on="$listeners">
    <v-list-item-avatar v-if="avatar" :color="avatarColor">
      <v-icon dark v-text="avatar" />
    </v-list-item-avatar>
    <v-list-item-icon v-else-if="icon">
      <v-icon v-text="icon" />
    </v-list-item-icon>
    <v-list-item-content>
      <v-list-item-title><span v-text="text" /> </v-list-item-title>
      <v-list-item-subtitle v-if="subtext">
        <span v-text="subtext" />
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-chip v-if="chip" :color="chipColor" class="v-chip--x-small" dark>
      {{ chip }}
    </v-chip>
    <slot />
  </v-list-item>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    avatar: {
      type: String,
      default: undefined,
    },
    avatarColor: {
      type: String,
      default: undefined,
    },
    text: {
      type: String,
      default: '',
    },
    href: {
      type: String,
      default: undefined,
    },
    name: {
      type: String,
      default: '',
    },
    icon: {
      type: [Boolean, String],
      default: false,
    },
    chip: {
      type: String,
      default: '',
    },
    subtext: {
      type: String,
      default: undefined,
    },
    to: {
      type: String,
      default: undefined,
    },
  },
  data() {
    return {
      chipMap: {
        new: 'primary',
        updated: 'warning',
        deprecated: 'black',
      },
    }
  },
  computed: {
    chipColor() {
      return this.chipMap[this.chip]
    },
    customAttrs() {
      const attrs = {
        ...this.$attrs,
      }
      if (this.href) {
        attrs.target = '_blank'
        attrs.rel = 'noopener'
        attrs.href = this.href
      }
      return attrs
    },
    path() {
      if (!this.to) return this.to
      const lang = this.$route.params.lang || this.$i18n.fallbackLocale
      return {
        path: `/${lang}/${this.to}`,
      }
    },
  },
}
</script>
