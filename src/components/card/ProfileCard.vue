<template>
  <v-card tile>
    <v-img src="/static/man.jpeg" height="380">
      <div class="d-flex flex-column fill-height">
        <v-card-title>
          <v-btn dark icon> <v-icon>mdi-heart</v-icon> </v-btn>
          <v-spacer />
          <v-btn dark icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
        </v-card-title>
        <v-spacer />
        <v-card-title>
          <div class="white--text">
            Ali Conners
          </div>
        </v-card-title>
      </div>
    </v-img>
    <v-list two-line class="pa-0">
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">mdi-phone</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>(650) 555-1234</v-list-item-title>
          <v-list-item-subtitle>Mobile</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action> <v-icon>mdi-chat</v-icon> </v-list-item-action>
      </v-list-item>
      <v-list-item href="#">
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>(323) 555-6789</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
        <v-list-item-action> <v-icon>mdi-chat</v-icon> </v-list-item-action>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">mdi-mail</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>aliconnors@example.com</v-list-item-title>
          <v-list-item-subtitle>Personal</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-list-item href="#">
        <v-list-item-action></v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ali_connors@example.com</v-list-item-title>
          <v-list-item-subtitle>Work</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider inset></v-divider>
      <v-list-item href="#">
        <v-list-item-action>
          <v-icon color="indigo">mdi-location</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>1400 Main Street</v-list-item-title>
          <v-list-item-subtitle>Orlando, FL 79938</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script>
export default {
  props: {
    username: String,
    phone: String,
    email: String,
    address: String
  }
}
</script>
