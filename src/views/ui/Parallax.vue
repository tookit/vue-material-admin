<template>
  <div id="page-parallax">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="Default">
            <div slot="widget-content" class="text-xs-center">
              <v-parallax src="/static/bg/12.jpg">
              </v-parallax>
            </div>
          </v-widget>
          <v-widget title="Content inside" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-parallax src="/static/bg/1.jpg">
                <v-layout column align-center justify-center>
                  <h1 class="white--text">Vuetify.js</h1>
                  <h4 class="white--text">Build your application today!</h4>
                </v-layout>
              </v-parallax>
            </div>
          </v-widget>
          <v-widget title="Jumbotron inside" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-parallax
                src="/static/bg/21.jpg"
                height="700"
                jumbotron
              ></v-parallax>
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
      page: 1
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>