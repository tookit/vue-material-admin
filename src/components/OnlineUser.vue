<template>
  <v-list two-line class="online_user pa-0">
    <v-subheader>{{ $tc('user', 0) }}</v-subheader>
    <v-divider />
    <template v-for="item in getChatUsers">
      <v-list-item :key="item.username" @click="handleJoinChat">
        <v-list-item-avatar>
          <c-avatar
            :size="32"
            :username="item.username"
            :status="item.status === 1 ? 'online' : 'offline'"
            :color="item.color"
            :src="computeAvatar(item.username)"
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
</template>

<script>
import { mapGetters } from 'vuex'
import CAvatar from '@/components/avatar/CAvatar'
export default {
  components: {
    CAvatar,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getChatUsers', 'getAvatar', 'getUsername']),
  },
  created() {
    this.$store.dispatch('initSocket')
  },
  methods: {
    handleJoinChat() {
      this.$router.push('/chat')
    },
    computeAvatar(username) {
      const avatar = this.getUsername === username ? this.getAvatar : ''
      return avatar
    },
  },
}
</script>
