<template>
  <v-card tile flat>
    <v-card-text class="pa-4">
      <div class="mail-reply--item">
        <div class="layout column">
          <h3 class="headline">Hi Michael</h3>
          <div class="text--secondary my-4" v-html="mail.content"></div>
          <h4>
            {{ mail.from.name }}, <br />
            Thanks
          </h4>
          <v-divider class="my-4"></v-divider>
          <div class="py-3">
            <v-alert
              outlined
              color="primary"
              icon="mdi-attachment"
              :value="true"
            >
              Weekly Report
            </v-alert>
          </div>
          <v-card class="pa-0" tile>
            <v-card-text>
              <v-textarea
                counter
                filled
                placeholder="Your reply here"
                full-width
                multi-line
              />
            </v-card-text>
            <v-toolbar dense text>
              <v-btn icon> <v-icon>mdi-attachment</v-icon> </v-btn>
              <v-btn icon> <v-icon>mdi-link</v-icon> </v-btn>
              <v-btn icon> <v-icon>mdi-camera</v-icon> </v-btn>
              <v-spacer></v-spacer>
              <v-btn text icon> <v-icon>mdi-send</v-icon> </v-btn>
            </v-toolbar>
          </v-card>
        </div>
      </div>
    </v-card-text>
  </v-card>
</template>
<script>
import { getMailById } from '@/api/mail'
export default {
  components: {},
  data: () => ({
    selected: [2],
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
  }),
  computed: {
    mail() {
      return getMailById(this.$route.params.uuid)
    }
  },

  created() {
    window.AppMail = this
  },
  methods: {
    computeMailPath(id) {
      return '/mail/0/' + id
    },
    formatDate(s) {
      return new Date(s).toLocaleDateString()
    }
  }
}
</script>
