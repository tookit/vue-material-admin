<template>
  <div class="chat_drawer">
    <v-navigation-drawer app>
      <v-btn dark height="64" block color="#017be8" tile>Chat</v-btn>
      <vue-perfect-scrollbar ref="scrollbar" class="chat_drawer__scrollbar grey lighten-5" :style="computeHeight">
        <v-list two-line class="chat_user__list pa-0">
          <v-subheader>Users</v-subheader>
          <v-divider />
          <v-list-item-group v-model="selectedItem">
            <template v-for="item in getChatUsers">
              <v-list-item :key="item.username" :value="item" @click="handleViewProfile(item)">
                <v-list-item-avatar>
                  <c-avatar
                    :size="32"
                    :username="item.username"
                    :status="item.status === 1 ? 'online' : 'offline'"
                    :color="computeColor(item)"
                    online
                  />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title>{{ item.username }}</v-list-item-title>
                  <v-list-item-subtitle> {{ item.ip }} </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
              <v-divider :key="'d' + item.username" />
            </template>
          </v-list-item-group>
        </v-list>
      </vue-perfect-scrollbar>
    </v-navigation-drawer>
    <v-navigation-drawer v-model="showProfile" app right hide-overlay clipped clipped-right>
      <div flat>
        <v-toolbar flat class="border-bottom">
          <v-subheader>Profile</v-subheader>
          <v-spacer />
          <v-btn icon @click="showProfile = false"><v-icon>mdi-close</v-icon></v-btn>
        </v-toolbar>
        <div v-if="selectedItem">
          <v-card flat>
            <v-img height="200" class="py-5">
              <c-avatar
                class="center-align"
                :size="150"
                :username="selectedItem.username"
                :color="computeColor(selectedItem)"
              />
            </v-img>
            <v-card-actions class="justify-space-between">
              <!-- <v-icon @click="$emit('chat:text')">mdi-chat</v-icon> -->
              <!-- <v-icon @click="$emit('chat:video')">mdi-video</v-icon> -->
            </v-card-actions>
          </v-card>
          <v-divider />
          <v-list>
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle v-text="selectedItem.username" />
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle v-text="selectedItem.ip" />
            </v-list-item>
            <v-list-item>
              <v-list-item-icon class="mr-3">
                <v-icon>mdi-play</v-icon>
              </v-list-item-icon>
              <v-list-item-subtitle v-text="selectedItem.agent" />
            </v-list-item>
          </v-list>
        </div>
      </div>
    </v-navigation-drawer>
  </div>
</template>

<script>
import CAvatar from '@/components/avatar/CAvatar'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import { mapGetters } from 'vuex'
export default {
  components: {
    CAvatar,
    VuePerfectScrollbar,
  },
  data() {
    return {
      selectedItem: null,
      showProfile: false,
    }
  },
  computed: {
    ...mapGetters(['getIconByExt', 'getChatUsers', 'getClientId']),
    computeHeight() {
      return {
        height: this.height || '',
      }
    },
  },
  methods: {
    computeColor(item) {
      return item.master ? '#2196f3' : 'grey'
    },
    handleViewProfile(item) {
      this.selectedItem = item
      this.showProfile = true
    },
  },
}
</script>

<style lang="sass" scoped>
.chat_drawer
  &__scrollbar
    height: calc(100vh - 64px - 64px) !important
  .icon
    width: 42px
    height: 42px
    vertical-align: -0.15em
    fill: currentColor
    overflow: hidden
</style>
