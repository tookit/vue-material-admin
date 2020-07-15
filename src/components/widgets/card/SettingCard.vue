<template>
  <v-card>
    <v-toolbar color="teal" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Settings</v-toolbar-title>
    </v-toolbar>
    <v-list two-line subheader>
      <v-subheader>General</v-subheader>
      <v-list-item avatar>
        <v-list-item-content>
          <v-list-item-title>Profile photo</v-list-item-title>
          <v-list-item-subtitle
            >Change your Google+ profile photo</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
      <v-list-item avatar>
        <v-list-item-content>
          <v-list-item-title>Show your status</v-list-item-title>
          <v-list-item-subtitle
            >Your status is visible to everyone</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-list two-line subheader>
      <v-subheader>Hangout notifications</v-subheader>
      <v-list-item avatar>
        <v-list-item-action>
          <v-checkbox v-model="notifications"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Notifications</v-list-item-title>
          <v-list-item-subtitle>Allow notifications</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item avatar>
        <v-list-item-action>
          <v-checkbox v-model="sound"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Sound</v-list-item-title>
          <v-list-item-subtitle>Hangouts message</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item avatar>
        <v-list-item-action>
          <v-checkbox v-model="video"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Video sounds</v-list-item-title>
          <v-list-item-subtitle>Hangouts video call</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item avatar>
        <v-list-item-action>
          <v-checkbox v-model="invites"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Invites</v-list-item-title>
          <v-list-item-subtitle
            >Notify when receiving invites</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data() {
    return {
      notifications: false,
      sound: false,
      video: false,
      invites: false,
    }
  },
}
</script>
