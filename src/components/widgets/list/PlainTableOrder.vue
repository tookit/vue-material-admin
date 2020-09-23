<template>
  <v-card>
    <v-toolbar text dense flat>
      <v-toolbar-title>
        Order
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider />
    <v-card-text class="pa-0">
      <template>
        <v-data-table
          :headers="headers"
          :items="items"
          hide-default-footer
          class="elevation-0 table-striped"
        >
          <template v-slot:item.status="{ item }">
            <v-chip
              label
              small
              :color="getColorByStatus(item.status)"
              text-color="white"
            >
              {{ item.status }}
            </v-chip>
          </template>
        </v-data-table>
      </template>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>

<script>
import items from '@/api/order'
export default {
  data() {
    return {
      headers: [
        {
          text: '#',
          align: 'left',
          sortable: false,
          value: 'id'
        },
        { text: 'Product', value: 'product' },
        { text: 'Price', value: 'price' },
        { text: 'Status', value: 'status' }
      ],
      items: items,
      colors: {
        processing: 'blue',
        sent: 'red',
        delivered: 'green'
      }
    }
  },
  computed: {
    randomColor() {
      let item = Math.floor(Math.random() * this.colors.length)
      return this.colors[item]
    }
  },
  methods: {
    getColorByStatus(status) {
      return this.colors[status]
    }
  }
}
</script>
