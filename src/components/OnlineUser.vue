<template>
  <v-list two-line class="online_user pa-0">
    <v-subheader>Users</v-subheader>
    <v-divider />
    <template v-for="item in getClientUsers">
      <v-list-item :key="item.username" @click="handleJoinChat">
        <v-list-item-avatar>
          <c-avatar
            :size="32"
            :username="item.username"
            :status="item.status === 1 ? 'online' : 'offline'"
            :color="item.color"
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
    ...mapGetters(['getClientUsers']),
  },
  methods: {
    handleJoinChat() {
      this.$router.push('/chat')
    },
  },
}
</script>

<style></style>
