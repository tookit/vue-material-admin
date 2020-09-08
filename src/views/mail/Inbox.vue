<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col lg="3">
        <v-card tile style="min-height:100vh">
          <v-card-text>
            <v-btn block color="primary">compose</v-btn>
            <mail-menu />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card>
          <v-toolbar></v-toolbar>
          <v-card-text class="pa-0">
            <v-list dense class="mail-list--list">
              <v-list-item-group v-model="selectedMail">
                <template v-for="(item, index) in mails">
                  <v-list-item ripple :key="index">
                    <v-list-item-action>
                      <v-checkbox dense />
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-row>
                        <v-col lg="3">
                          <v-list-item-subtitle>
                            {{ item.from.name }}
                          </v-list-item-subtitle>
                        </v-col>
                        <v-col lg="9">
                          <v-list-item-subtitle>
                            <v-chip
                              class="mr-2"
                              dense
                              x-small
                              color="red"
                              text-color="white"
                            >
                              Work
                            </v-chip>
                            {{ item.title }}
                          </v-list-item-subtitle>
                        </v-col>
                      </v-row>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-list-item-action-text>
                        {{ formatDate(item.created_at) }}
                      </v-list-item-action-text>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider :key="'divider' + index"></v-divider>
                </template>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MailMenu from '@/components/email/MailMenu'
import { MailItem } from '@/api/mail'
import Dateformat from '@/mixins/dateFormat'
export default {
  components: {
    MailMenu
  },
  mixins: [Dateformat],
  data() {
    return {
      mails: MailItem,
      selectedMail: null
    }
  },
  computed: {},
  methods: {
    handleStar() {}
  },

  created() {
    this.$on('MAIL_REPLY_DIALOG_CLOSE', () => {
      this.replayDialog = false
    })
    window.AppMail = this
  }
}
</script>
