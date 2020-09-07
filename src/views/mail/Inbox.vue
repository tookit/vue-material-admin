<template>
  <v-container fluid class="pa-0">
    <v-row no-gutters>
      <v-col lg="3">
        <v-card>
          <v-card-text>
            <v-btn block color="primary">compose</v-btn>
            <mail-menu />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="9">
        <v-card>
          <v-toolbar></v-toolbar>
          <v-card-text> </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MailMenu from '@/components/email/MailMenu'
import { MailItem } from '@/api/mail'
export default {
  components: {
    MailMenu
  },
  data() {
    return {
      mails: MailItem
    }
  }
}
</script>
