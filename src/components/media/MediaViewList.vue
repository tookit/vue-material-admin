<template>
  <v-list dense class="grey lighten-5 media_manager__list">
    <v-list-item-group color="primary" v-model="selectedItem">
      <v-list-item
        v-for="(item, i) in items"
        :key="i"
        :value="item.path"
        exact
        @click="$emit('item:selected', item)"
      >
        <v-list-item-icon>
          <v-icon v-text="computeIcon(item)"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.basename"></v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list-item-group>
  </v-list>
</template>

<script>
export default {
  name: 'MediaViewList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      selectedItem: null,
      icons: {
        txt: 'mdi-format-text',
        json: 'mdi-code-json',
        html: 'mdi-language-html5',
        png: 'mdi-image',
        svg: 'mdi-svg'
      }
    }
  },
  methods: {
    computeIcon(item) {
      return item.type === 'dir' ? 'mdi-folder' : this.computeFileIcon(item)
    },
    computeFileIcon(item) {
      return this.icons[item.extension] ?? 'mdi-file'
    }
  }
}
</script>

<style></style>
