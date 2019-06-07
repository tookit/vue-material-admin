<template>
  <v-card>
    <v-toolbar color="primary" dark>
      <v-icon color="white">arrow_back</v-icon>
      <v-toolbar-title>Compose</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon color="white">send</v-icon>
      </v-btn>
    </v-toolbar>
    <v-container fluid class="pa-0 mt-2">
      <v-layout wrap>
        <v-flex xs2>
          <v-subheader>To</v-subheader>
        </v-flex>
        <v-flex xs10 class="text-xs-right">
          <v-chip>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/92.jpg" />
            </v-avatar>
            Trevor Hansen
          </v-chip>
          <v-chip>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/91.jpg" />
            </v-avatar>
            Alex Nelson
          </v-chip>
        </v-flex>
        <v-divider></v-divider>
        <v-flex xs2>
          <v-subheader>CC</v-subheader>
        </v-flex>
        <v-flex xs10 class="text-xs-right">
          <v-chip>
            <v-avatar>
              <img src="https://randomuser.me/api/portraits/men/92.jpg" />
            </v-avatar>
            John Doe
          </v-chip>
        </v-flex>
        <v-flex xs12>
          <v-divider></v-divider>
          <v-text-field
            label="Subject"
            value="Plans for the weekend"
            single-line
            full-width
            hide-details
          ></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-divider></v-divider>
          <v-text-field
            label="Message"
            v-model="title"
            counter
            max="120"
            full-width
            multi-line
            single-line
          ></v-text-field>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    title:
      "Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa"
  })
}
</script>
