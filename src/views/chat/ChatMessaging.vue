<template>
  <v-container class="fill-height pa-0 ma-0 messaging fluid">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-row>
        <v-col lg3 class="white">
          <chat-history> </chat-history>
        </v-col>
        <v-col lg9>
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
import ChatHistory from '@/components/chat/ChatHistory'
import ChatWindow from '@/components/chat/ChatWindow'
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
