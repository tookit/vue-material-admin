<template>
  <v-list class="pa-0">
    <template v-for="(item, key) in items">
      <v-list-group
        v-if="hasChild(item)"
        :key="key"
        no-action
        :to="item.path"
        :value="computeGroupExpanded(item, $route)"
      >
        <template #prependIcon>
          <v-tooltip bottom>
            <template #activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" v-text="item.icon" />
            </template>
            <span v-text="item.title" />
          </v-tooltip>
        </template>
        <template #activator>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </template>
        <nav-list-item v-for="child in item.children" v-show="!mini" :key="'c' + child.path" :item="child" />
      </v-list-group>
      <nav-list-item v-else :key="'nav' + key" :item="item" />
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
    mini: Boolean,
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    hasChild(item) {
      return Array.isArray(item.children) && item.children.length > 0
    },
    computeGroupExpanded(item, $route) {
      return $route.matched.map((item) => item.path).includes(item.path)
    },
  },
}
</script>
