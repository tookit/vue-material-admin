<template>
  <v-container fluid fill-height class="pa-0 mail-list" id="mailList">
    <v-layout column class="mail-list--layout">
      <v-toolbar fixed app class="elevation-1 mail-list--toolbar">
        <v-checkbox row hide-details class="check-all"></v-checkbox>
        <v-menu offset-y origin="center center" :nudge-bottom="0" transition="scale-transition">
          <v-btn icon large flat slot="activator">
            <v-avatar size="32px">
              <v-icon>arrow_drop_down</v-icon>
            </v-avatar>
          </v-btn>
          <v-list class="pa-0">
            <v-list-tile
              v-for="(item, index) in mailActions"
              :to="!item.href ? { name: item.name } : null"
              :href="item.href"
              @click="item.click"
              ripple="ripple"
              :disabled="item.disabled"
              :target="item.target"
              rel="noopener"
              :key="index"
            >
              <v-list-tile-action v-if="item.icon">
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-menu>
        <v-spacer></v-spacer>
        <v-btn icon flat>
          <v-icon>refresh</v-icon>
        </v-btn>
        <v-btn icon flat>
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-btn icon flat>
          <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>
      </v-toolbar>
      <vue-perfect-scrollbar class="mail-list--scrollbar">
        <v-flex class="mail-content white">
          <v-tabs fixed-tabs grow>
            <v-tab>
              Primary
            </v-tab>
            <v-tab>
              Social
            </v-tab>
            <v-tab>
              Promotions
            </v-tab>
          </v-tabs>
          <v-list two-line class="mail-list--list">
            <template v-for="(item, index) in mails">
              <v-list-tile avatar ripple :key="index" :to="computeMailPath(item.uuid)">
                <v-list-tile-action>
                  <v-checkbox></v-checkbox>
                </v-list-tile-action>
                <v-list-tile-avatar>
                  <img :src="item.from.avatar" />
                </v-list-tile-avatar>
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.from.name }}</v-list-tile-title>
                  <v-list-tile-sub-title>{{ item.title }}</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-list-tile-action-text>{{ formatDate(item.created_at) }}</v-list-tile-action-text>
                  <v-icon @click="toggle(index)" color="grey lighten-1" v-if="selected.indexOf(index) < 0"
                    >star_border</v-icon
                  >
                  <v-icon color="yellow darken-2" v-else>star</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-divider :key="'divider' + index"></v-divider>
            </template>
          </v-list>
        </v-flex>
      </vue-perfect-scrollbar>
    </v-layout>
  </v-container>
</template>
<script>
import VuePerfectScrollbar from "vue-perfect-scrollbar"
import { getMailByType } from "@/api/mail"
export default {
  components: {
    VuePerfectScrollbar
  },
  props: {
    mailType: {
      type: String,
      default: "All"
    }
  },
  data: () => ({
    selected: [2],
    mailActions: [
      {
        href: "#",
        title: "Delete",
        click: e => {
          console.log(e)
        }
      },
      {
        href: "Mark as read",
        title: "Mark as read",
        click: e => {
          console.log(e)
        }
      },
      {
        href: "Spam",
        title: "Spam",
        click: e => {
          console.log(e)
        }
      }
    ]
  }),
  computed: {
    mails() {
      return getMailByType(this.$route.params.mailType)
    }
  },

  created() {
    this.$on("MAIL_REPLY_DIALOG_CLOSE", () => {
      this.replayDialog = false
    })
    window.AppMail = this
  },
  methods: {
    computeMailPath(id) {
      return { path: "/mail/0/" + id }
    },
    formatDate(s) {
      return new Date(s).toLocaleString()
    },

    toggle(index) {
      const i = this.selected.indexOf(index)
      if (i > -1) {
        this.selected.splice(i, 1)
      } else {
        this.selected.push(index)
      }
    }
  }
}
</script>
