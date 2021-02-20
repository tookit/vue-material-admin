<template>
  <v-card>
    <v-toolbar color="teal" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Topics</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-list>
      <v-list-group
        v-model="item.active"
        v-for="item in items"
        :key="item.title"
        :prepend-icon="item.action"
        no-action
      >
        <v-list-item slot="activator">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
          v-for="subItem in item.items"
          :key="subItem.title"
          href="#"
        >
          <v-list-item-content>
            <v-list-item-title>{{ subItem.title }}</v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-icon>{{ subItem.action }}</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list-group>
    </v-list>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'healing',
          title: 'Health',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'content_cut',
          title: 'Office',
          items: [{ title: 'List Item' }]
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [{ title: 'List Item' }]
        }
      ]
    }
  }
}
</script>
