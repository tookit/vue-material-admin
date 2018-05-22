<template>
  <div id="breadcrumb">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-card class="card--flex-toolbar">
            <v-toolbar card prominent>
              <v-toolbar-title class="body-2 grey--text">Alert</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-divider></v-divider>
            <v-card-text>
              <v-alert type="success" dismissible v-model="alert">
                This is a success alert.
              </v-alert>
              <v-alert type="info" :value="true">
                This is a info alert.
              </v-alert>
              <v-alert type="warning" :value="true">
                This is a warning alert.
              </v-alert>
              <v-alert type="error" :value="true">
                This is a error alert.
              </v-alert>
              <v-alert color="success" icon="new_releases" :value="true">
                This is a success alert with a custom icon.
              </v-alert>
              <v-alert outline color="info" icon="info" :value="true">
                This is an info alert with outline
              </v-alert>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  props: {
    source: String,
  },
  data () {
    return {
      alert: true
    };
  },
  created () {
    console.log(this.$route);
  }
};
</script>