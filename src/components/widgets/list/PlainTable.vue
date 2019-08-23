<template>
  <v-card>
    <v-toolbar text dense color="transparent" elevation="0">
      <v-toolbar-title><h4>Project</h4></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon> <v-icon>more_vert</v-icon> </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="projects"
          hide-default-footer
          class="elevation-0"
        >
          <template slot="items" slot-scope="props">
            <td>
              <v-avatar>
                <img
                  src="https://vuetifyjs.com/apple-touch-icon-180x180.png"
                  alt="avatar"
                />
              </v-avatar>
            </td>
            <td>{{ props.item.name }}</td>
            <td class="text-xs-left">{{ props.item.deadline }}</td>
            <td class="text-xs-left">
              <v-progress-linear
                :value="props.item.progress"
                height="5"
                :color="props.item.color"
              />
            </td>
            <td>
              <v-btn text icon color="grey"> <v-icon>edit</v-icon> </v-btn>
              <v-btn text icon color="grey"> <v-icon>delete</v-icon> </v-btn>
            </td>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
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
          value: 'avatar',
        },
        {
          text: 'Name',
          align: 'left',
          value: 'name',
        },
        { text: 'Deadline', value: 'deadline' },
        { text: 'Progress', value: 'progress' },
        { text: 'Action', value: 'action', align: 'right' },
      ],
    }
  },
  computed: {
    projects() {
      return Projects
    },
  },
}
</script>
