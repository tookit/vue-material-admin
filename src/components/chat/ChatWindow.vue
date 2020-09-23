<template>
  <v-card tile class="chat-room">
    <v-app-bar text dense class="white chat-room--toolbar" light>
      <v-btn icon>
        <v-icon color="text--secondary">mdi-arrow-left</v-icon>
      </v-btn>
      <template v-if="chat.users">
        <c-avatar
          size="32"
          class="avatar-stack"
          v-for="(user_id, index) in chat.users"
          :src="getAvatar(user_id)"
          :key="index"
        />
      </template>
      <v-spacer />
      <v-toolbar-title>
        <h4>Chat Channel</h4>
      </v-toolbar-title>
      <v-spacer />
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon slot="activator" v-on="on">
            <v-icon color="text--secondary">mdi-plus</v-icon>
          </v-btn>
        </template>
        <span>Add user</span>
      </v-tooltip>
    </v-app-bar>
    <vue-perfect-scrollbar
      class="chat-room--scrollbar grey lighten-5"
      :style="computeHeight"
    >
      <v-card-text class="chat-room--list pa-3">
        <template v-for="(item, index) in chat.messages">
          <div
            :class="[index % 2 == 0 ? 'flex-row-reverse' : '']"
            class="messaging-item"
            :key="index"
          >
            <div class="messaging-item__avatar">
              <c-avatar
                :size="36"
                :src="item.user.avatar"
                :username="item.user.username"
                status="online"
                online
                :key="index"
              />
            </div>
            <div class="messaging-item__body">
              <p
                :value="true"
                :class="[index % 2 == 0 ? 'primary white--text' : 'white']"
                class="pa-2"
              >
                {{ item.text }}
              </p>
              <div class="caption px-2 text--secondary">
                {{ new Date(item.created_at).toLocaleString() }}
              </div>
            </div>
            <v-spacer></v-spacer>
          </div>
        </template>
      </v-card-text>
    </vue-perfect-scrollbar>
    <v-card-actions class="pa-0">
      <v-text-field
        full-width
        text
        clearable
        solo
        hide-details
        append-icon="mdi-send"
        label="Type some message here"
      >
        <div slot="prepend-inner">
          <v-icon>mdi-image-outline</v-icon>
          <v-icon>mdi-face</v-icon>
        </div>
      </v-text-field>
    </v-card-actions>
  </v-card>
</template>
<script>
import { getChatById } from '@/api/chat'
import { getUserById } from '@/api/user'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import CAvatar from '@/components/avatar/CAvatar'
export default {
  components: {
    VuePerfectScrollbar,
    CAvatar
  },
  props: {
    uuid: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: null
    }
  },
  computed: {
    chat() {
      let chatOrigin = {
        title: 'Chat',
        users: [],
        messages: []
      }
      let chat = getChatById(this.$route.params.uuid)
      return Object.assign(chatOrigin, chat)
    },
    computeHeight() {
      return {
        height: this.height || ''
      }
    }
  },

  methods: {
    getAvatar(uid) {
      return getUserById(uid).avatar
    }
  }
}
</script>

<style lang="scss" scoped>
.chat-room--scrollbar {
  height: calc(100vh - 48px - 56px);
  .messaging-item {
    display: flex;
    margin-bottom: 20px;
    &__avatar {
      margin-right: 15px;
    }
  }
}
</style>
