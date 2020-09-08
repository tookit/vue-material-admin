<template>
  <v-container fluid class="pa-0 mail">
    <v-row no-gutters>
      <v-col lg="3" md="3">
        <v-card tile class="mail-menu">
          <v-card-text>
            <v-btn block color="primary">compose</v-btn>
            <mail-menu />
          </v-card-text>
        </v-card>
      </v-col>
      <v-col lg="9" md="9">
        <router-view></router-view>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MailMenu from '@/components/email/MailMenu'
export default {
  components: {
    MailMenu
  },
  data() {
    return {}
  },
  computed: {},
  methods: {},

  created() {}
}
</script>

<style lang="sass" scoped>
.mail
  &-menu
    height: calc(100vh - 112px - 48px)
    overflow: auto
</style>
