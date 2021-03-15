<template>
  <div class="chat_window">
    <v-toolbar text class="chat_window__toolbar" light>
      <v-btn icon>
        <v-icon color="text--secondary">mdi-arrow-left</v-icon>
      </v-btn>
      <v-spacer />
      <v-toolbar-title>
        <v-subheader>VMA Discuss here</v-subheader>
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
    </v-toolbar>
    <v-card>
      <vue-perfect-scrollbar
        class="chat_window__scrollbar grey lighten-5"
        :style="computeHeight"
      >
        <v-card-text class="messaging_list pa-3">
          <template v-for="(item, index) in getMessages">
            <chat-messaging-item
              :username="item.username"
              :text="item.text"
              :createdAt="item.createdAt"
              :key="index"
            />
          </template>
        </v-card-text>
      </vue-perfect-scrollbar>
    </v-card>
    <div class="chat_window__input">
      <v-text-field
        v-model="message"
        full-width
        text
        clearable
        solo
        hide-details
        autofocus
        aria-autocomplete="off"
        append-icon="mdi-send"
        label="Type some message here"
        class="rounded-0"
        @click:append="handleSendMessage"
        @keydown.enter="handleSendMessage"
      >
        <div slot="prepend-inner">
          <v-icon>mdi-image-outline</v-icon>
          <v-icon>mdi-face</v-icon>
        </div>
      </v-text-field>
    </div>
  </div>
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { mapGetters } from 'vuex'
import ChatMessagingItem from './ChatMessagingItem'
export default {
  components: {
    VuePerfectScrollbar,
    ChatMessagingItem
  },
  props: {
    height: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      message: null
    }
  },
  computed: {
    ...mapGetters(['getMessages', 'getUsername']),
    computeHeight() {
      return {
        height: this.height || ''
      }
    }
  },
  methods: {
    handleSendMessage() {
      if (this.message) {
        this.$store.dispatch('sendMessage', {
          username: this.getUsername,
          text: this.message,
          createdAt: Date.now()
        })
        this.message = null
      }
    }
  },
  created() {}
}
</script>

<style lang="sass" scoped>
.chat_window
  &__scrollbar
    height: calc(100vh - 64px - 64px - 56px) !important
</style>
