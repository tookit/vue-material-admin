<template>
  <v-container class="fill-height pa-0 ma-0 messaging" fluid>
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col cols="3" class="white pa-0">
          <chat-history> </chat-history>
        </v-col>
        <v-col cols="9" class="pa-0">
          <chat-window></chat-window>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-layout column>
        <v-flex sm12 class="white" v-if="showSidebar">
          <chat-history> </chat-history>
        </v-flex>
        <v-flex sm12 v-if="showWindow">
          <chat-window></chat-window>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>
<script>
import ChatHistory from './ChatHistory'
import ChatWindow from './ChatWindow'
export default {
  components: {
    ChatHistory,
    ChatWindow,
  },
  data() {
    return {}
  },
  computed: {
    showSidebar() {
      return this.$route.params.uuid === undefined
    },
    showWindow() {
      return this.$route.params.uuid !== undefined
    },
  },
}
</script>
