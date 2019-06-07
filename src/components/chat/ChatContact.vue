<template>
  <v-container class="fill-height pa-0 ma-0 chat-drawer-container fluid">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-layout row>
        <v-flex lg3 class="chat-contact--sidebar white">
          <chat-contact-list></chat-contact-list>
        </v-flex>
        <v-flex lg9>
          <chat-contact-profile></chat-contact-profile>
        </v-flex>
      </v-layout>
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
import ChatContactList from "./ChatContactList"
import ChatContactProfile from "./ChatContactProfile"
export default {
  components: {
    ChatContactList,
    ChatContactProfile
  },
  data() {
    return {
      chat: null,
      selectedTab: null
    }
  },
  computed: {
    showSidebar() {
      return this.$route.params.uuid === undefined
    },
    showWindow() {
      return this.$route.params.uuid !== undefined
    }
  }
}
</script>
