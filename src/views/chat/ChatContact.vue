<template>
  <v-container class="fill-height pa-0 chat-drawer-container" fluid>
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-row no-gutters>
        <v-col cols="3" class="chat-contact--sidebar white">
          <chat-contact-list></chat-contact-list>
        </v-col>
        <v-col cols="9">
          <chat-contact-profile></chat-contact-profile>
        </v-col>
      </v-row>
    </template>
    <template v-else>
      <v-layout column>
        <v-flex sm12 class="white" v-if="showSidebar">
          <chat-contact-list></chat-contact-list>
        </v-flex>
        <v-flex sm12 v-if="showWindow">
          <chat-contact-profile></chat-contact-profile>
        </v-flex>
      </v-layout>
    </template>
  </v-container>
</template>
<script>
import ChatContactList from '@/components/chat/ChatContactList'
import ChatContactProfile from '@/components/chat/ChatContactProfile'
export default {
  components: {
    ChatContactList,
    ChatContactProfile,
  },
  data() {
    return {
      chat: null,
      selectedTab: null,
    }
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
