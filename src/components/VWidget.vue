<template>
  <v-card tile>
    <v-toolbar color="transparent" text dense v-if="enableHeader" flat>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
      <v-spacer />
      <slot name="widget-header-action"></slot>
    </v-toolbar>
    <v-divider v-if="enableHeader"></v-divider>
    <v-card-text :class="contentBg">
      <slot name="widget-content"></slot>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'VWidget',
  props: {
    title: {
      type: String
    },
    enableHeader: {
      type: Boolean,
      default: true
    },
    contentBg: {
      type: String,
      default: 'white'
    }
  },

  data() {
    return {}
  },
  computed: {}
}
</script>
