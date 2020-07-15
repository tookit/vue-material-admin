<template>
  <div class="media">
    <div class="layout column">
      <v-toolbar class="elevation-0 transparent">
        <v-btn-toggle>
          <v-btn text>
            <v-icon>cloud_upload</v-icon>
            &nbsp;Upload
          </v-btn>
          <v-btn text>
            <v-icon>folder</v-icon>
            &nbsp; Add Folder
          </v-btn>
        </v-btn-toggle>
        <v-spacer></v-spacer>
        <v-btn-toggle v-model="view">
          <v-btn text value="list"> <v-icon>view_headline</v-icon> </v-btn>
          <v-btn text value="grid"> <v-icon>view_list</v-icon> </v-btn>
        </v-btn-toggle>
      </v-toolbar>
      <v-divider></v-divider>
    </div>
    <div class="layout row">
      <div class="media-aside media-menu">
        <v-list dense class="transparent">
          <v-list-item v-for="(item, index) in mediaMenu" :key="index" :to="item.to">
            <v-list-item-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
      <div class="media-content flex transparent">
        <router-view name="MediaList"></router-view>
      </div>
      <div class="media-aside media-detail">
        <router-view name="MediaDetail"></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    size: 'lg',
    view: 'grid',
    imageMime: ['image/jpeg', 'image/png', 'image/svg+xml'],
    mediaMenu: [
      {
        icon: 'photo',
        title: 'Images',
        to: { path: '/media/image' },
      },
      {
        icon: 'videocam',
        title: 'Video',
        to: { path: '/media/video' },
      },
      {
        icon: 'volume_down',
        title: 'Audio',
        to: { path: '/media/audio' },
      },
      {
        icon: 'insert_drive_file',
        title: 'Document',
        to: { path: '/media/doc' },
      },
    ],
  }),
  computed: {
    files() {
      return this.$store.state.file.items
    },
  },

  created() {
    this.$store.dispatch('listFiles')
  },

  methods: {
    isImage(file) {
      return this.imageMime.includes(file.fileType)
    },
    mimeIcons(file) {
      return this.imageMime.includes(file.fileType) ? 'image' : 'insert_drive_file'
    },
  },
}
</script>
<style lang="sass" scoped>
.media-menu
  min-width:260px
  border-right:1px solid #eee
  min-height:calc(100vh - 50px - 64px)

.media-detail
  min-width:300px
  border-left:1px solid #eee
</style>
