<template>
  <div class="chat">
    <chat-toolbar class="chat_toolbar" />
    <chat-drawer />
    <v-main>
      <div class="chat_wrapper"><router-view /></div>
    </v-main>
    <v-dialog v-model="showDialog" persistent width="600">
      <register-form @form:success="handleRegisterSucess" />
    </v-dialog>
  </div>
</template>

<script>
import ChatToolbar from '@/components/chat/ChatToolbar'
import ChatDrawer from '@/components/chat/ChatDrawer'
import RegisterForm from '@/components/form/RegisterForm'
import { mapGetters } from 'vuex'
export default {
  name: 'LayoutChat',
  components: {
    ChatToolbar,
    ChatDrawer,
    RegisterForm
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getUsername']),
    showDialog: {
      get: function() {
        return this.getUsername === 'admin'
      },
      set: function(val) {}
    }
  },
  methods: {
    handleRegisterSucess() {
      this.$store.dispatch('initSocket')
    }
  },
  created() {
    if (this.getUsername !== 'admin') {
      this.$store.dispatch('initSocket')
    }
  }
}
</script>

<style lang="sass" scoped>
.chat_wrapper
  min-height: calc(100vh - 112px)
</style>
