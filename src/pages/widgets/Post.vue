<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex lg6>
            <message-list></message-list>
          </v-flex>
          <v-flex lg6>
            <notification-list></notification-list>
          </v-flex>
          <v-flex lg6>
            <plain-table></plain-table>
          </v-flex>
          <v-flex lg6>
            <plain-table-order></plain-table-order>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import MessageList from '@/components/widgets/list/MessageList';
import NotificationList from '@/components/widgets/list/NotificationList';
import PlainTable from '@/components/widgets/list/PlainTable';
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder';
export default {
  components: {
    MessageList,
    NotificationList,
    PlainTable,
    PlainTableOrder
  },
  data () {
    return {
    };
  },
  methods: {
    handleClick: (e) => {
      console.log(e);
    }
  },
  
};
</script>