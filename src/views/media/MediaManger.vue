<template>
  <v-container fluid class="pa-0 page-media">
    <v-row no-gutters>
      <v-col lg="3" md="3">
        <v-card flat tile class="media-menu">
          <v-toolbar flat>
            <v-btn tile block dark color="primary" @click="handleCompose"
              >create folder</v-btn
            >
          </v-toolbar>
          <v-divider />
          <v-card-text>
            <media-menu />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="9" md="9">
        <div style="border-left: 1px solid #eee">
          <v-toolbar tag="div" flat>
            <v-text-field
              flat
              hide-details
              solo
              prepend-icon="mdi-magnify"
              label="search files, folders"
              placeholder="search"
            />
            <v-btn-toggle tile dense mandatory>
              <v-btn icon value="refresh" @click="handleRefresh">
                <v-icon>mdi-refresh</v-icon>
              </v-btn>
              <v-btn icon value="upload">
                <v-icon>mdi-upload</v-icon>
              </v-btn>
              <v-btn icon value="grid">
                <v-icon>mdi-view-grid</v-icon>
              </v-btn>
              <v-btn icon value="list">
                <v-icon>mdi-view-list</v-icon>
              </v-btn>
            </v-btn-toggle>
          </v-toolbar>
          <v-divider />
          <v-breadcrumbs :items="breadcrumbs" />
          <v-divider />
          <v-sheet class="grey lighten-4 media-view">
            <v-progress-linear v-if="loading" :indeterminate="true" />
            <v-list dense class="grey lighten-4">
              <v-list-item-group color="primary" v-model="selectedItem">
                <v-list-item
                  v-for="(item, i) in items"
                  :key="i"
                  :value="item.path"
                  exact
                  @click="handleSelectItem(item)"
                >
                  <v-list-item-icon>
                    <v-icon v-text="computeIcon(item)"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title
                      v-text="item.basename"
                    ></v-list-item-title>
                  </v-list-item-content>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-sheet>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MediaMenu from '@/components/media/MediaMenu'
export default {
  name: 'MediaManager',
  components: {
    MediaMenu
  },
  data() {
    return {
      showDialog: false,
      loading: false,
      viewMode: 'list',
      items: [],
      selectedItem: this.$route.query.path,
      icons: {
        txt: 'mdi-format-text',
        json: 'mdi-code-json',
        html: 'mdi-language-html5',
        png: 'mdi-image',
        svg: 'mdi-svg'
      }
    }
  },
  computed: {
    breadcrumbs() {
      const { path } = this.$route.query
      const paths = path ? path.split('/') : []
      return !path
        ? []
        : paths.map((item, index) => {
            const path = paths.slice(0, index + 1).join('/')
            console.log(path)
            return {
              text: item,
              to: `/media?path=${path}`,
              exact: true,
              disabled: false
            }
          })
    }
  },
  watch: {
    '$route.query': {
      handler(query) {
        this.fetchRecord(query)
      },
      immediate: true
    }
  },
  methods: {
    fetchRecord(query) {
      this.loading = true
      this.items = []
      this.$store
        .dispatch('fetchDir', query)
        .then(({ data }) => {
          this.loading = false
          this.items = data
        })
        .catch(() => {
          this.loading = false
        })
    },
    computePath(item) {
      return item.type === 'dir'
        ? {
            path: '/media',
            query: {
              path: item.path
            }
          }
        : false
    },
    computeIcon(item) {
      return item.type === 'dir' ? 'mdi-folder' : this.computeFileIcon(item)
    },
    computeFileIcon(item) {
      return this.icons[item.extension] ?? 'mdi-file'
    },
    handleCompose() {
      this.showDialog = true
    },
    handleRefresh() {
      this.fetchRecord(this.$route.query)
    },
    handleSelectItem(item) {
      console.log(item)
      if (item.type === 'dir') {
        this.$router.push(this.computePath(item))
      } else {
        // view file
      }
    }
  }
}
</script>

<style lang="sass" scoped>
.media
  &-view
    height: calc(100vh - 112px - 48px)
    overflow: auto
</style>
