<template>
  <v-card class="mail-inbox" flat tile>
    <v-toolbar class="mail-inbox__toolbar" flat>
      <v-checkbox hide-details class="check-all"></v-checkbox>
      <v-menu offset-y origin="center center">
        <template v-slot:activator="{ on }">
          <v-btn icon text slot="activator" v-on="on">
            <v-icon medium>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense class="pa-0">
          <template v-for="item in mailActions">
            <v-list-item :key="item.title" @click="item.click">
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.title" />
              </v-list-item-content>
            </v-list-item>
            <v-divider :key="'d' + item.title" />
          </template>
        </v-list>
      </v-menu>
      <v-spacer />
      <v-btn icon text> <v-icon>mdi-refresh</v-icon> </v-btn>
      <v-btn icon text> <v-icon>mdi-arrow-left</v-icon> </v-btn>
      <v-btn icon text> <v-icon>mdi-arrow-right</v-icon> </v-btn>
    </v-toolbar>
    <v-divider />
    <v-card-text class="mail-inbox__list">
      <v-data-table
        class="mail-inbox__table"
        :headers="headers"
        :items="mails"
        :items-per-page="5"
        :item-class="
          (row) => {
            return row.unread ? 'mail-item__unread' : ''
          }
        "
        @click:row="handleRowClick"
        item-key="uuid"
        hide-default-header
      >
        <template v-slot:[`item.tag`]="{ item }">
          <v-chip small class="mr-2" color="green" dark>
            {{ item.tag }}
          </v-chip>
        </template>
        <template v-slot:[`item.title`]="{ item }">
          <span>{{ item.title }}</span>
        </template>
        <template v-slot:[`item.created_at`]="{ item }">
          <span class="caption">{{ formatDate(item.created_at) }}</span>
        </template>
        <template v-slot:[`item.uuid`]="{ item }">
          <div class="d-flex align-baseline">
            <v-checkbox v-model="item.uuid" class="mr-2" />
            <v-btn icon @click.stop="handleStarEmail">
              <v-icon v-text="'mdi-star-outline'"
            /></v-btn>
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
          text: 'Tag',
          value: 'tag',
          width: '50'
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
          title: 'Delete',
          icon: 'mdi-delete',
          click: (e) => {
            console.log(e)
          }
        },
        {
          title: 'Mark as read',
          icon: 'mdi-email-alert',
          click: (e) => {
            console.log(e)
          }
        },
        {
          title: 'Spam',
          icon: 'mdi-bug',
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
    handleStarEmail() {},
    handleRowClick(item) {
      this.$router.push({
        path: `/mail/inbox/${item.uuid}`
      })
    }
  },

  created() {}
}
</script>

<style lang="sass">
.mail-inbox
  min-height: calc(100vh - 112px - 48px)
  &__list
    padding: 0
    overflow: auto
  &__table
    .v-data-table__wrapper
      min-height: calc(100vh - 48px - 112px - 64px - 48px) !important
      .mail-item__unread
        background: #f7f7f7 !important
        td > span
          font-weight: 500
</style>
