<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <message-list />
      </v-col>
      <v-col cols="6">
        <notification-list />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPost } from '@/api/post'
import MessageList from '@/components/widgets/list/MessageList'
import NotificationList from '@/components/widgets/list/NotificationList'
export default {
  components: {
    MessageList,
    NotificationList
  },
  data() {
    return {}
  },
  computed: {
    posts() {
      return getPost()
    }
  },
  methods: {
    handleClick: (e) => {
      console.log(e)
    }
  }
}
</script>
