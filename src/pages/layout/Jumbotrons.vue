<template>
  <div id="page-jumbotrons">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-jumbotron color="grey lighten-2">
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex>
                      <h3 class="display-3">Welcome to the site</h3>
                      <span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum.</span>
                      <v-divider class="my-3"></v-divider>
                      <div class="title mb-3">Check out our newest features!</div>
                      <v-btn large color="primary" class="mx-0">See more</v-btn>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Coloring">
            <div slot="widget-content">
            <v-jumbotron color="primary" dark>
              <v-container fill-height>
                <v-layout align-center>
                  <v-flex text-xs-center>
                    <h3 class="display-3">Custom Color</h3>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Gradient">
            <div slot="widget-content">
              <v-text-field label="Gradient" v-model="gradient"></v-text-field>
              <v-jumbotron :gradient="gradient" dark>
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex text-xs-center>
                      <h3 class="display-3">Gradient</h3>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Gradient with image">
            <div slot="widget-content">
              <v-text-field label="Gradient" v-model="gradient2"></v-text-field>
              <v-jumbotron
                src="/static/bg/16.jpg"
                :gradient="gradient2"
                dark
              >
                <v-container fill-height>
                  <v-layout align-center>
                    <v-flex text-xs-center>
                      <h3 class="display-3">Gradient over Image</h3>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-jumbotron>
            </div>
          </v-widget>
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
      gradient: 'to top, #7B1FA2, #E1BEE7',
      gradient2: 'to top right, rgba(63,81,181, .7), rgba(25,32,72, .7)'
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>