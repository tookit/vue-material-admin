<template>
  <v-list class="pa-0">
    <template v-for="(item, key) in items">
      <nav-list-item :key="'nav' + key" :item="item" />
    </template>
  </v-list>
</template>

<script>
import NavListItem from './NavListItem'
export default {
  components: {
    NavListItem,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
