<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex lg6 sm12 xs12>
            <message-list></message-list>
          </v-flex>
          <v-flex lg6 sm12 xs12>
            <notification-list></notification-list>
          </v-flex>
          <v-flex lg7 sm12 xs12>
            <plain-table></plain-table>
          </v-flex>
          <v-flex lg5 sm12 xs12>
            <plain-table-order></plain-table-order>
          </v-flex>
          <v-flex lg12 sm12 xs12>
            <post-list-card :items="posts"></post-list-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import { getPost } from '@/api/post';
import MessageList from '@/components/widgets/list/MessageList';
import NotificationList from '@/components/widgets/list/NotificationList';
import PlainTable from '@/components/widgets/list/PlainTable';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
import PostListCard from '@/components/widgets/card/PostListCard';
export default {
  components: {
    PostListCard,
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  },
  data () {
    return {
    };
  },
  computed: {
    posts () {
      return getPost();
    }
  },
  methods: {
    handleClick: (e) => {
      console.log(e);
    }
  },
  
};
</script>