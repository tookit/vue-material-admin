<template>
  <v-list class="mail-list" dense>
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
          <v-list-item-action v-if="item.icon">
            <v-icon
              :color="item.iconColor"
              :small="item.iconSize"
              v-text="item.icon"
            />
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
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
          title: 'Inbox',
          group: 'email',
          icon: 'mdi-email',
          to: { path: '/mail/inbox' },
          chip: 10
        },
        {
          title: 'Sent',
          group: 'email',
          icon: 'mdi-send',
          to: { path: '/mail/sent' },
          chip: 5
        },
        {
          title: 'Starred',
          group: 'email',
          icon: 'mdi-star',
          to: { path: '/mail/starred' },
          chip: 2
        },
        {
          title: 'Draft',
          group: 'email',
          icon: 'mdi-content-copy',
          to: { path: '/mail/draft' },
          chip: 3
        },
        {
          title: 'Trash',
          group: 'email',
          icon: 'mdi-delete',
          to: { path: '/mail/trashed' },
          chip: 1
        },
        { heading: 'Label' },
        {
          icon: 'mdi-radiobox-marked',
          iconColor: 'yellow',
          title: 'Work',
          iconSize: 'small'
        },
        {
          icon: 'mdi-radiobox-marked',
          iconColor: 'green',
          title: 'Client',
          iconSize: 'small'
        },
        {
          icon: 'mdi-radiobox-marked',
          iconColor: 'red',
          title: 'Project',
          iconSize: 'small'
        },
        {
          icon: 'mdi-radiobox-marked',
          iconColor: 'grey',
          title: 'Personal',
          iconSize: 'small'
        }
      ]
    }
  }
}
</script>

<style></style>
