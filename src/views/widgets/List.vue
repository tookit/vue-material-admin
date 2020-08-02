<template>
  <v-container>
    <v-row>
      <v-col cols="6">
        <message-list />
      </v-col>
      <v-col cols="6">
        <notification-list />
      </v-col>
      <v-col cols="12">
        <plain-table />
      </v-col>
      <v-col cols="12">
        <plain-table-order />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { getPost } from '@/api/post'
import MessageList from '@/components/widgets/list/MessageList'
import NotificationList from '@/components/widgets/list/NotificationList'
import PlainTable from '@/components/widgets/list/PlainTable'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
export default {
  components: {
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
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
