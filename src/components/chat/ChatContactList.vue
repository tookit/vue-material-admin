<template>
  <div class="chat-contact">
    <v-toolbar flat dense class="chat-contact--toolbar">
      <v-text-field flat solo full-width prepend-icon="search" label="Search"></v-text-field>
    </v-toolbar>
    <vue-perfect-scrollbar class="chat-history--scrollbar">
      <v-divider></v-divider>
      <v-list two-line class="chat-contact--list">
        <v-subheader>Contacts</v-subheader>
        <template v-for="(item, index) in users">
          <v-divider :key="index"></v-divider>
          <v-list-tile avatar :key="item.name + index" :to="contactRoute(item.uuid)">
            <v-list-tile-avatar color="primary">
              <img :src="item.avatar" v-if="item.avatar" />
              <span v-else class="white--text headline">{{ firstLetter(item.name) }}</span>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.name }}
              </v-list-tile-title>
              <v-list-tile-sub-title>{{ item.jobTitle }}</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-circle dot small :color="userStatusColor(item)"></v-circle>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>
    </vue-perfect-scrollbar>
  </div>
</template>

<script>
import { getUser } from "@/api/user"
import VCircle from "@/components/circle/VCircle"
import VuePerfectScrollbar from "vue-perfect-scrollbar"
export default {
  components: {
    VuePerfectScrollbar,
    VCircle
  },
  data: () => ({}),
  computed: {
    users() {
      return getUser()
    }
  },
  methods: {
    contactRoute(id) {
      return "/chat/contact/" + id
    },
    firstLetter(name) {
      return name.charAt(0)
    },
    userStatusColor(item) {
      return item.active ? "green" : "grey"
    }
  }
}
</script>

<style></style>
