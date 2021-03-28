<template>
  <v-container class="fill-height messaging pa-0" fluid>
    <v-row no-gutters class="fill-height">
      <v-col cols="12">
        <chat-window />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import ChatWindow from '@/components/chat/ChatWindow'
export default {
  components: {
    ChatWindow,
  },
  data() {
    return {}
  },
  computed: {},
}
</script>
