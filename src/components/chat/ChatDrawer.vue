<template>
  <v-navigation-drawer app>
    <v-btn dark height="64" block color="#017be8" tile>Chat</v-btn>
    <v-list two-line class="chat_user__list pa-0">
      <v-subheader>Users</v-subheader>
      <v-divider />
      <template v-for="item in getClientUsers">
        <v-list-item :key="item.username">
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
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import CAvatar from '@/components/avatar/CAvatar'
import { mapGetters } from 'vuex'
export default {
  components: {
    CAvatar
  },
  data() {
    return {
      items: [
        {
          heading: 'Type'
        },
        {
          title: 'Message',
          icon: 'video',
          to: { path: '/media/video' }
        },

        {
          title: 'Contact',
          icon: 'jpg',
          to: { path: '/media/image' }
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getIconByExt', 'getClientUsers', 'getClientId'])
  },
  methods: {
    computeColor(item) {
      return item.master ? '#2196f3' : 'grey'
    }
  }
}
</script>

<style lang="sass" scoped>
.center-align
    position: absolute
    left: 50%
    top: 50%
    transform: translateY(-50%) translateX(-50%)
.icon
  width: 42px
  height: 42px
  vertical-align: -0.15em
  fill: currentColor
  overflow: hidden
</style>
