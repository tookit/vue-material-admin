<template>
  <div class="media_view__card">
    <v-container>
      <v-row>
        <template v-for="item in items">
          <v-col :cols="3" :key="item.basename">
            <v-card tile>
              <v-img height="200px">
                <v-icon size="64" class="align-center">mdi-folder</v-icon>
              </v-img>
              <v-divider></v-divider>
              <v-card-actions class="pa-0">
                <v-list tile two-line class="flex pa-0">
                  <v-list-item class="">
                    <v-list-item-content>
                      <v-list-item-title v-text="item.basename" />
                      <v-list-item-subtitle v-text="item.timestamp" />
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon @click="$emit('menu:click')"
                        >mdi-dots-horizontal</v-icon
                      >
                    </v-list-item-action>
                  </v-list-item>
                </v-list>
              </v-card-actions>
            </v-card>
          </v-col>
        </template>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'MediaViewCard',
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

<style lang="sass" scoped>
.media_view__card
  display: flex
  .align-center
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
</style>
