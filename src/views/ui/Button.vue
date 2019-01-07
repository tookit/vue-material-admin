<template>
  <div id="page-buttons">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex xl6>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <div>
                <v-btn color="success">Success</v-btn>
                <v-btn color="error">Error</v-btn>
                <v-btn color="warning">Warning</v-btn>
                <v-btn color="info">Info</v-btn>
              </div>
            </div>
          </v-widget>
          <v-widget title="Flat button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" flat>Success</v-btn>
                <v-btn color="error" flat>Error</v-btn>
                <v-btn color="warning" flat>Warning</v-btn>
                <v-btn color="info" flat>Info</v-btn>
              </div>
            </div>
          </v-widget>   
          <v-widget title="Depressed button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" depressed="">Success</v-btn>
                <v-btn color="error" depressed>Error</v-btn>
                <v-btn color="warning" depressed>Warning</v-btn>
                <v-btn color="info" depressed>Info</v-btn>
              </div>
            </div>
          </v-widget>                 
          <v-widget title="Outline button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" outline="">Success</v-btn>
                <v-btn color="error" outline>Error</v-btn>
                <v-btn color="warning" outline>Warning</v-btn>
                <v-btn color="info" outline>Info</v-btn>
              </div>
            </div>
          </v-widget>                 
          <v-widget title="Rounded button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" round>Success</v-btn>
                <v-btn color="error" round>Error</v-btn>
                <v-btn color="warning" round>Warning</v-btn>
                <v-btn color="info" round>Info</v-btn>
              </div>
            </div>
          </v-widget>                 
          <v-widget title="Floating button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" dark fab>
                  <v-icon dark>remove</v-icon>
                </v-btn>
                <v-btn color="pink" dark fab>
                  <v-icon dark>favorite</v-icon>
                </v-btn>
                <v-btn color="red" dark fab>
                  <v-icon dark>add</v-icon>
                </v-btn>
              </div>
            </div>
          </v-widget>                 
          <v-widget title="Loading button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn
                  color="secondary"
                  :loading="loading"
                  @click.native="loader = 'loading'"
                  :disabled="loading"
                >
                  Accept Terms
                </v-btn>

                <v-btn
                  :loading="loading3"
                  @click.native="loader = 'loading3'"
                  :disabled="loading3"
                  color="blue-grey"
                  class="white--text"
                >
                  Upload
                  <v-icon right dark>cloud_upload</v-icon>
                </v-btn>

                <v-btn
                  color="success"
                  :loading="loading2"
                  @click.native="loader = 'loading2'"
                  :disabled="loading2"
                >
                  Custom Loader
                  <span slot="loader">Loading...</span>
                </v-btn>

                <v-btn
                  color="info"
                  :loading="loading4"
                  @click.native="loader = 'loading4'"
                  :disabled="loading4"
                >
                  Icon Loader
                  <span slot="loader" class="custom-loader">
                    <v-icon light>cached</v-icon>
                  </span>
                </v-btn>
              </div>
            </div>
          </v-widget>                 
        </v-flex>
        <v-flex xl6>
          <v-widget title="Icon button">
            <div slot="widget-content">
              <v-container fluid class="pa-0">
                <v-layout row wrap>
                  <v-flex xs12>
                    <p>Normal</p>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn flat icon color="pink">
                      <v-icon>favorite</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn flat icon color="indigo">
                      <v-icon>star</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn flat icon color="green">
                      <v-icon>cached</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn flat icon color="deep-orange">
                      <v-icon>thumb_up</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
                <v-layout row wrap class="mt-5">
                  <v-flex xs12>
                    <p>Disabled</p>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn icon disabled>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn icon disabled>
                      <v-icon>star</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn icon disabled>
                      <v-icon>cached</v-icon>
                    </v-btn>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-btn icon disabled>
                      <v-icon>thumb_up</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
          <v-widget title="Sizing button" class="mt-3">
            <div slot="widget-content">
              <v-container fluid class="pa-0">
                <v-layout row wrap align-center>
                  <v-flex xs12 sm6>
                    <div class="text-xs-center">
                      <div>
                        <v-btn small color="primary" dark>Small Button</v-btn>
                      </div>
                      <div>
                        <v-btn color="warning" dark>Normal Button</v-btn>
                      </div>
                      <div>
                        <v-btn color="error" dark large>Large Button</v-btn>
                      </div>
                    </div>
                  </v-flex>
                  <v-flex xs12 sm6>
                    <div class="text-xs-center">
                      <div>
                        <v-btn color="primary" fab small dark>
                          <v-icon>edit</v-icon>
                        </v-btn>
                      </div>
                      <div>
                        <v-btn color="warning" fab dark>
                          <v-icon>account_circle</v-icon>
                        </v-btn>
                      </div>
                      <div>
                        <v-btn color="error" fab large dark>
                          <v-icon>alarm</v-icon>
                        </v-btn>
                      </div>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
          <v-widget title="Block button" class="mt-3">
            <div slot="widget-content">
              <div>
                <v-btn color="success" block>Success</v-btn>
                <v-btn color="error" block>Error</v-btn>
                <v-btn color="warning" block>Warning</v-btn>
                <v-btn color="info" block>Info</v-btn>
              </div>
            </div>
          </v-widget>             
        </v-flex>
        <v-flex xl12>
          <v-widget title="Toggle button">
            <div slot="widget-content">
              <v-container fluid class="pa-0">
                <v-layout row wrap>
                  <v-flex xs12 sm6 class="py-2">
                    <p>Exclusive</p>
                    <v-btn-toggle v-model="toggle_exclusive">
                      <v-btn flat>
                        <v-icon>format_align_left</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_center</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_right</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_justify</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                  <v-flex xs12 sm6 class="py-2">
                    <p>Multiple</p>
                    <v-btn-toggle multiple v-model="toggle_multiple">
                      <v-btn flat>
                        <v-icon>format_bold</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_italic</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_underlined</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_color_fill</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                  <v-flex xs12 sm6 class="py-2">
                    <p>No Options Selected</p>
                    <v-btn-toggle v-model="toggle_none">
                      <v-btn flat>
                        <v-icon>format_align_left</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_center</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_right</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_justify</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                  <v-flex xs12 sm6 class="py-2">
                    <p>Mandatory</p>
                    <v-btn-toggle mandatory v-model="toggle_one">
                      <v-btn flat>
                        <v-icon>format_align_left</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_center</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_right</v-icon>
                      </v-btn>
                      <v-btn flat>
                        <v-icon>format_align_justify</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                  <v-flex xs12 sm6 class="py-2">
                    <p>Text Options</p>
                    <v-btn-toggle v-model="text">
                      <v-btn flat value="left">
                        Left
                      </v-btn>
                      <v-btn flat value="center">
                        Center
                      </v-btn>
                      <v-btn flat value="right">
                        Right
                      </v-btn>
                      <v-btn flat value="justify">
                        Justify
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                  <v-flex xs12 sm6 class="py-2">
                    <p>Text &amp; Icon Options</p>
                    <v-btn-toggle v-model="icon">
                      <v-btn flat value="left">
                        <span>Left</span>
                        <v-icon>format_align_left</v-icon>
                      </v-btn>
                      <v-btn flat value="center">
                        <span>Center</span>
                        <v-icon>format_align_center</v-icon>
                      </v-btn>
                      <v-btn flat value="right">
                        <span>Right</span>
                        <v-icon>format_align_right</v-icon>
                      </v-btn>
                      <v-btn flat value="justify">
                        <span>Justify</span>
                        <v-icon>format_align_justify</v-icon>
                      </v-btn>
                    </v-btn-toggle>
                  </v-flex>
                </v-layout>
              </v-container>
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
      text: 'center',
      icon: 'justify',
      toggle_none: null,
      toggle_one: 0,
      toggle_exclusive: 2,
      toggle_multiple: [0, 1, 2],      
      loader: null,
      loading: false,
      loading2: false,
      loading3: false,
      loading4: false      
    };
  },
  computed: {
  },  
  watch: {
    loader () {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => {
        this[l] = false;
      }, 3000);
      this.loader = null;
    }
  },  
  methods: {
  }
};
</script>

<style>
  .custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>
