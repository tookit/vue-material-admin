<template>
  <v-navigation-drawer width="240">
    <v-btn height="64" block color="primary" tile>Storage</v-btn>
    <v-list class="media-list pa-0">
      <template v-for="item in items">
        <template v-if="item.heading">
          <v-subheader :key="item.heading">
            {{ item.heading }}
          </v-subheader>
          <v-divider :key="'d' + item.heading" />
        </template>
        <template v-else>
          <!-- Top level -->
          <v-list-item :key="item.text">
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
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          title: 'video',
          icon: 'mdi-video',
          to: { path: '/media?type=video' },
          chip: 10
        },

        {
          title: 'image',
          icon: 'mdi-image',
          to: { path: '/media?type=video' },
          chip: 5
        },
        {
          title: 'doc',
          icon: 'mdi-file',
          to: { path: '/media?type=video' },
          chip: 5
        }
      ]
    }
  }
}
</script>

<style></style>
