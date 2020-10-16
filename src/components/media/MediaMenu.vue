<template>
  <v-list class="media-list" dense>
    <template v-for="item in items">
      <template v-if="item.heading">
        <v-subheader :key="item.heading">
          {{ item.heading }}
        </v-subheader>
        <v-divider :key="'d' + item.heading" />
      </template>
      <template v-else>
        <!-- Top level -->
        <v-list-item :key="item.text" :to="item.to">
          <v-list-item-icon v-if="item.icon">
            <v-icon
              :color="item.iconColor"
              :small="item.iconSize"
              v-text="item.icon"
            />
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-chip color="primary" x-small>{{ item.chip }}</v-chip>
          </v-list-item-action>
        </v-list-item>
      </template>
    </template>
  </v-list>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'video',
          icon: 'mdi-video',
          to: { path: '/media/video' },
          chip: 10
        },

        {
          title: 'image',
          icon: 'mdi-image',
          to: { path: '/media/image' },
          chip: 5
        },
        {
          title: 'doc',
          icon: 'mdi-file',
          to: { path: '/media/file' },
          chip: 5
        }
      ]
    }
  }
}
</script>

<style></style>
