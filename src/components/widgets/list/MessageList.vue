<template>
  <v-card tile>
    <v-card-title>Message</v-card-title>
    <v-divider></v-divider>
    <v-card-text class="pa-0">
      <v-list two-line class="pa-0">
        <template v-for="(item, index) in items">
          <v-subheader v-if="item.header" :key="item.header">
            {{ item.header }}
          </v-subheader>
          <v-divider v-else-if="item.divider" :key="index"></v-divider>
          <v-list-item v-else :key="item.title" @click="handleClick">
            <v-list-item-avatar>
              <img :src="item.avatar" />
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title v-html="item.title"></v-list-item-title>
              <v-list-item-subtitle
                v-html="item.subtitle"
              ></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
      <v-divider></v-divider>
      <v-btn block text class="ma-0">All</v-btn>
      <v-divider></v-divider>
    </v-card-text>
  </v-card>
</template>
<script>
import messages from '@/api/message'
export default {
  data: () => ({
    items: messages
  }),
  methods: {
    handleClick: (e) => {
      console.log(e)
    }
  }
}
</script>
