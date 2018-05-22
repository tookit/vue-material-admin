<template>
  <div class="chat-history">
    <v-toolbar dense class="chat-history-toolbar">
      <v-text-field flat solo full-width clearable prepend-icon="search" label="Search"></v-text-field>
    </v-toolbar>  
    <vue-perfect-scrollbar class="chat-history--scrollbar">
      <v-divider></v-divider>             
      <v-list two-line class="chat-history--list">
        <v-subheader>History</v-subheader>
        <template v-for="(item, index) in chats">
          <v-divider :key="index"></v-divider>
          <v-list-tile class="chat-list" avatar :key="item.title + index" :to="chatRoute(item.uuid)">
            <v-list-tile-avatar :color="randomAvatarColor(item)">
              <img :src="item.user.avatar" v-if="item.users.length === 1">
              <span v-else class="white--text headline">{{ firstLetter(item.title)}}</span>
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title> {{computeTitle(item)}}</v-list-tile-title>
              <v-list-tile-sub-title>Some Latest message</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-list-tile-action-text>
                {{ formatChatTime(item.created_at) }}
              </v-list-tile-action-text>
              <v-circle dot small :color="chatStatusColor(item)"></v-circle>
            </v-list-tile-action>
          </v-list-tile>
        </template>
      </v-list>  
    </vue-perfect-scrollbar>  
  </div>
</template>

<script>
import { Groups } from '@/api/chat';
import { getUserById } from '@/api/user';
import VCircle from '@/components/circle/VCircle';
import Util from '@/util';
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
export default {
  components: {
    VuePerfectScrollbar,
    VCircle
  },

  data: () => ({
    chats: Groups,
  }),

  methods: {
    chatRoute (id) {
      return '/chat/messaging/' + id;
    },
    firstLetter (title) {
      return title.charAt(0);
    },
    formatChatTime (s) {
      return new Date(s).toLocaleDateString();
    },
    computeTitle (item) {
      let username = (item.users.length === 1) ? getUserById(item.users[0]).username : '';
      return item.users.length === 1 ? username : item.title;
    },
    randomAvatarColor (item) {
      return item.users.length === 1 
        ? ''
        : Util.randomElement(['blue', 'indigo', 'success', 'error', 'pink']);
    },

    chatStatusColor (item) {
      return Util.randomElement(['blue', 'indigo', 'success', 'error', 'pink']);
    }
  }  
};
</script>

