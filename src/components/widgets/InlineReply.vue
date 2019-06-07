<template>
  <v-card>
    <v-toolbar color="primary" dark extended dense>
      <v-toolbar-title>Hey Michael, How are you?</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="white">close</v-icon>
      </v-btn>
      <div slot="extension" class="layout row align-center white grey--text px-2">
        <v-avatar size="32">
          <img src="https://randomuser.me/api/portraits/men/92.jpg" />
        </v-avatar>
        <div class="subheading pa-1">John Doe</div>
        <v-btn icon>
          <v-icon color="grey">keyboard_arrow_down</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="yellow">star</v-icon>
        </v-btn>
        <div class="subheading">09:30</div>
        <v-btn icon>
          <v-icon color="grey">reply</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="grey">reply_all</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="grey">delete</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon color="grey">expand_more</v-icon>
        </v-btn>
      </div>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    toggle_exclusive: 2,
    title:
      "Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa"
  })
}
</script>
