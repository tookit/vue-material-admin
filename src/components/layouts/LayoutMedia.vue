<template>
  <div class="media">
    <app-toolbar class="media_toolbar" />
    <media-drawer />
    <v-main>
      <div class="media_wrapper"><router-view /></div>
      <!-- App Footer -->
      <v-footer height="auto" class="pa-3 app--footer">
        <span>isocked.com Design &copy; {{ new Date().getFullYear() }}</span>
        <v-spacer />
        <span class="caption mr-1">Make With Love</span>
        <v-icon color="pink" small>mdi-heart</v-icon>
      </v-footer>
    </v-main>
  </div>
</template>

<script>
import MediaDrawer from '@/components/media/MediaDrawer'
import AppToolbar from '@/components/AppToolbar'
export default {
  name: 'LayoutMedia',
  components: {
    AppToolbar,
    MediaDrawer,
  },
}
</script>

<style lang="sass" scoped>
.media_wrapper
  min-height: calc(100vh - 112px)
</style>
