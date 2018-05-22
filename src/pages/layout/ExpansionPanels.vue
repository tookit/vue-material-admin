<template>
  <div id="page-expansion-panel">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Expand">
            <div slot="widget-content">
              <v-expansion-panel expand>
                <v-expansion-panel-content v-for="(item,i) in 5" :key="i" :value="item === 2">
                  <div slot="header">Item</div>
                  <v-card>
                    <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                  </v-card>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Accordion">
            <div slot="widget-content">
            <v-expansion-panel focusable>
              <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                <div slot="header">Item</div>
                <v-card>
                  <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
            </div>
          </v-widget>
        </v-flex>        
        <v-flex lg12>
          <v-widget title="Popout">
            <div slot="widget-content">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs12 lg5 mb-3>
                    <v-expansion-panel popout>
                      <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                        <div slot="header">Item</div>
                        <v-card>
                          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
                  </v-flex>
                  <v-flex xs12 lg5 offset-lg2>
                    <v-expansion-panel inset>
                      <v-expansion-panel-content v-for="(item,i) in 5" :key="i">
                        <div slot="header">Item</div>
                        <v-card>
                          <v-card-text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
                        </v-card>
                      </v-expansion-panel-content>
                    </v-expansion-panel>
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
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>