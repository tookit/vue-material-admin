<template>
  <v-list-group
    :group="item.group"
    :prepend-icon="item.icon"
    :sub-group="subGroup"
    no-action
    :value="active"
  >
    <template slot="activator">
      <list-item :text="item.text" />
    </template>
    <template v-for="(child, i) in children">
      <list-sub-group
        v-if="child.group != null"
        :key="`sub-group-${i}`"
        :item="child"
      />
      <list-item
        v-else
        :key="`item-${i}`"
        :icon="child.icon"
        :subtext="child.subtext"
        :to="child.to"
        :text="child.text"
      />
    </template>
  </v-list-group>
</template>

<script>
// Utilities
import kebabCase from 'lodash/kebabCase'
import ListItem from './Item'
export default {
  components: {
    ListItem,
  },
  inheritAttrs: false,
  props: {
    item: {
      type: Object,
      default: () => ({
        text: '',
        group: '',
        children: [],
      }),
    },
    subGroup: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    children() {
      return this.item.children.map(item => ({
        ...item,
        to: item.to,
      }))
    },
    group() {
      return this.genGroup(this.item.children, this.item)
    },
    active() {
      const found = this.item.children.filter(
        item => item.to === this.$route.path
      )
      return found.length > 0 ? true : false
    },
  },
  methods: {
    genGroup(children) {
      return children
        .map(item => {
          const parent = item.group || this.item.group
          let group = `${parent}/${kebabCase(item.to)}`
          if (item.children) {
            group = `${group}|${this.genGroup(item.children)}`
          }
          return group
        })
        .join('|')
    },
  },
}
</script>
