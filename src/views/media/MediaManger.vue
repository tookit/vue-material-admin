<template>
  <div class="media-manager">
    <div class="media-manager__drawer">
      <media-menu />
    </div>
    <div class="media-manager__content grey lighten-5">
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
            <v-btn icon value="grid" @click="handleChangeView('grid')">
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
            <v-btn icon value="list" @click="handleChangeView('list')">
              <v-icon>mdi-view-list</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
        <v-divider />
        <v-breadcrumbs :items="breadcrumbs" />
        <v-divider />
        <v-sheet class=" media-view">
          <v-progress-linear v-if="loading" :indeterminate="true" />
          <media-view-list v-if="viewMode === 'list'" :items="items" />
          <media-view-card v-else :items="items" />
        </v-sheet>
      </div>
    </div>
  </div>
</template>

<script>
import MediaMenu from '@/components/media/MediaMenu'
import MediaViewList from '@/components/media/MediaViewList'
import MediaViewCard from '@/components/media/MediaViewCard'
export default {
  name: 'MediaManager',
  components: {
    MediaMenu,
    MediaViewList,
    MediaViewCard
  },
  data() {
    return {
      showDialog: false,
      loading: false,
      viewMode: 'list',
      items: [],
      selectedItem: this.$route.query.path
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
    handleChangeView(mode) {
      this.viewMode = mode
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
.media-manager
    display: flex
    flex-direction: row
    height: calc(100vh - 112px - 48px)
    overflow: auto
    &__drawer
      display: flex
    &__content
      flex: 1 1 auto
      width: 100%
    &__list
      height: calc(100vh - 112px - 48px)
</style>
