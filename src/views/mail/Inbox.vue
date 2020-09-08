<template>
  <v-card class="mail-inbox" tile>
    <v-toolbar class="mail-inbox__toolbar" flat>
      <v-checkbox row hide-details class="check-all"></v-checkbox>
      <v-menu transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text slot="activator">
            <v-icon>arrow_drop_down</v-icon>
          </v-btn>
        </template>
        <span>hello</span>
      </v-menu>
      <v-spacer></v-spacer>
      <v-btn icon text> <v-icon>refresh</v-icon> </v-btn>
      <v-btn icon text> <v-icon>keyboard_arrow_left</v-icon> </v-btn>
      <v-btn icon text> <v-icon>keyboard_arrow_right</v-icon> </v-btn>
    </v-toolbar>
    <v-divider />
    <v-card-text class="mail-inbox__list">
      <v-data-table
        :headers="headers"
        :items="mails"
        :items-per-page="5"
        item-key="uuid"
        hide-default-header
      >
        <template v-slot:item.title="{ item }">
          <v-chip x-small class="mr-2">
            {{ item.tag }}
          </v-chip>
          <span>{{ item.title }}</span>
        </template>
        <template v-slot:item.created_at="{ item }">
          <span class="caption">{{ formatDate(item.created_at) }}</span>
        </template>
        <template v-slot:item.uuid="{ item }">
          <div class="d-flex">
            <v-simple-checkbox class="mr-2"></v-simple-checkbox>
            <v-icon @click="handleStarEmail">mdi-star-outline</v-icon>
          </div>
        </template>
      </v-data-table>
    </v-card-text>
  </v-card>
</template>

<script>
import { getMailByType } from '@/api/mail'
import Dateformat from '@/mixins/dateFormat'
export default {
  name: 'PageInbox',
  components: {},
  mixins: [Dateformat],
  props: {
    category: {
      type: String
    }
  },
  data() {
    return {
      mails: [],
      selectedMail: null,
      headers: [
        {
          text: 'uuid',
          value: 'uuid',
          width: '24'
        },
        {
          text: 'Title',
          value: 'title'
        },
        {
          text: 'Created At',
          value: 'created_at'
        }
      ],
      mailActions: [
        {
          href: '#',
          title: 'Delete',
          click: (e) => {
            console.log(e)
          }
        },
        {
          href: 'Mark as read',
          title: 'Mark as read',
          click: (e) => {
            console.log(e)
          }
        },
        {
          href: 'Spam',
          title: 'Spam',
          click: (e) => {
            console.log(e)
          }
        }
      ]
    }
  },
  watch: {
    category: {
      handler(val) {
        this.fetchRecords(val)
      },
      immediate: true
    }
  },
  computed: {},
  methods: {
    fetchRecords(type) {
      this.mails = getMailByType(type)
    },
    handleStarEmail() {}
  },

  created() {}
}
</script>

<style lang="sass" scoped>
.mail-inbox
  min-height: calc(100vh - 112px - 48px)
  &__list
    padding: 0
    height: calc(100vh - 112px - 48px)
    overflow: auto
</style>
