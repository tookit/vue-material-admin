<template>
  <div id="page-toolbars">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <div>
                <v-subheader>Default</v-subheader>
                <v-toolbar dark color="primary">
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                  <v-toolbar-title class="white--text">Title</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>apps</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>refresh</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-toolbar>
              </div>
              <div>
                <v-subheader>Dense</v-subheader>
                <v-toolbar dark color="purple" dense>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                  <v-toolbar-title class="white--text">Title</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>apps</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>refresh</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-toolbar>
              </div>
              <div>
                <v-subheader>Link items</v-subheader>
                <v-toolbar>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn flat>Link One</v-btn>
                    <v-btn flat>Link Two</v-btn>
                    <v-btn flat>Link Three</v-btn>
                  </v-toolbar-items>
                </v-toolbar>                
              </div>
              <div>
                <v-subheader>Extended</v-subheader>
                <v-toolbar dark color="primary" extended>
                  <v-toolbar-side-icon></v-toolbar-side-icon>
                  <v-toolbar-title class="white--text" slot="extension">Title</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon>
                    <v-icon>search</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>apps</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>refresh</v-icon>
                  </v-btn>
                  <v-btn icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-toolbar>             
              </div>
            </div>
          </v-widget>
        </v-flex>
        <v-flex xs12>
          <v-card flat>
            <v-toolbar dark color="primary" flat extended>
              <v-toolbar-side-icon></v-toolbar-side-icon>
              <v-toolbar-title>Complex usage in page layout</v-toolbar-title>
            </v-toolbar>
            <v-layout row pb-2>
              <v-flex xs8 offset-xs2>
                <v-card class="card--flex-toolbar">
                  <v-toolbar card prominent>
                    <v-toolbar-title class="body-2 grey--text">Title</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>search</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>apps</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>more_vert</v-icon>
                    </v-btn>
                  </v-toolbar>
                  <v-divider></v-divider>
                  <v-card-text></v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
export default {
  components: {
    VWidget
  },
  data () {
    return {
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>

<style lang="css" scoped>
  .card--flex-toolbar {
    margin-top: -64px;
  }
</style>