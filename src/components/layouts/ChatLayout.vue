<template>
  <v-app id="chat" class="chat">
    <template v-if="!$vuetify.breakpoint.smAndDown">
      <v-navigation-drawer class="pa-0 chat-drawer primary" fixed permanent app width="68">
        <chat-menu :items="menus" class="chat-drawer--menu"> </chat-menu>
      </v-navigation-drawer>
      <v-content class="chat-main">
        <transition>
          <router-view></router-view>
        </transition>
      </v-content>
    </template>
    <template v-else>
      <v-toolbar color="primary" fixed dark>
        <v-btn icon @click="handleClick">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>more_vert</v-icon>
        </v-btn>
      </v-toolbar>
      <v-content class="chat-main">
        <transition>
          <router-view></router-view>
        </transition>
      </v-content>
      <v-bottom-nav :value="true" absolute color="primary" app fixed v-if="!hideBottomNav">
        <v-btn dark flat :value="item.to.path" v-for="(item, index) in menus" :key="index" :to="item.to">
          <span>{{ item.text }}</span>
          <v-icon>{{ item.icon }}</v-icon>
        </v-btn>
      </v-bottom-nav>
    </template>
  </v-app>
</template>

<script>
import API from "@/api"
import ChatMenu from "@/components/chat/ChatMenu"
import VuePerfectScrollbar from "vue-perfect-scrollbar"
export default {
  components: {
    VuePerfectScrollbar,
    ChatMenu
  },
  data: () => ({
    menus: API.getChatMenu
  }),
  computed: {
    hideBottomNav() {
      return this.$route.params.uuid !== undefined && this.$route.name === "ChatMessaging"
    }
  },
  methods: {
    handleClick() {
      this.$router.go(-1)
    }
  }
}
</script>
