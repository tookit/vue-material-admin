<template>
  <v-container fluid class="pa-0 media">
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
        <v-toolbar tag="div" flat>
          <v-text-field
            flat
            hide-details
            solo
            prepend-icon="mdi-magnify"
            label="search files, folders"
            placeholder="search"
          />
          <v-btn-toggle mandatory v-model="viewMode">
            <v-btn icon value="grid">
              <v-icon>mdi-view-grid</v-icon>
            </v-btn>
            <v-btn icon value="list">
              <v-icon>mdi-view-list</v-icon>
            </v-btn>
          </v-btn-toggle>
        </v-toolbar>
        <v-divider />
        <v-sheet class="grey lighten-4 media-view">
          <router-view></router-view>
        </v-sheet>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MediaMenu from '@/components/media/MediaMenu'
export default {
  components: {
    MediaMenu
  },
  data() {
    return {
      showDialog: false,
      viewMode: 'grid',
      dirs: []
    }
  },
  computed: {},
  methods: {
    handleCompose() {
      this.showDialog = true
    }
  },

  created() {}
}
</script>

<style lang="sass" scoped>
.media
  &-view
    height: calc(100vh - 112px - 48px)
    overflow: auto
</style>
