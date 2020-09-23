<template>
  <v-card>
    <v-toolbar text dense flat>
      <v-toolbar-title>
        Project
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-data-table :headers="headers" :items="projects" hide-default-footer>
        <template v-slot:item.avatar="{ item }">
          <v-avatar class="ma-3">
            <img :src="item.avatar" alt="avatar" />
          </v-avatar>
        </template>
        <template v-slot:item.progress="{ item }">
          <v-progress-linear
            :value="item.progress"
            height="5"
            :color="item.color"
          />
        </template>
        <template v-slot:item.action="{ item }">
          <v-menu>
            <template v-slot:activator="{ on: menu }">
              <v-tooltip bottom>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn icon v-on="{ ...menu }">
                    <v-icon>mdi-dots-vertical</v-icon></v-btn
                  >
                </template>
                <span>Action</span>
              </v-tooltip>
            </template>
            <v-list class="pa-0" dense>
              <v-list-item
                v-for="action in actions"
                :key="action.text"
                @click="action.click(item)"
              >
                <v-list-item-icon class="mr-2">
                  <v-icon small>{{ action.icon }}</v-icon>
                </v-list-item-icon>
                <v-list-item-title>{{ action.text }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </template>
      </v-data-table>
      <v-divider />
    </v-card-text>
  </v-card>
</template>

<script>
import { Projects } from '@/api/project'
export default {
  data() {
    return {
      headers: [
        {
          text: '',
          align: 'center',
          sortable: false,
          value: 'avatar'
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name'
        },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Action', value: 'action', align: 'right' }
      ],
      actions: [
        {
          text: 'View Item',
          icon: 'mdi-eye',
          click: this.handleViewItem
        },
        {
          text: 'Edit Item',
          icon: 'mdi-pencil',
          click: this.handleEditItem
        },
        {
          text: 'Delete Item',
          icon: 'mdi-close',
          click: this.handleDeleteItem
        }
      ]
    }
  },
  computed: {
    projects() {
      return Projects
    }
  }
}
</script>
