<template>
  <div id="page-selection-controls">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12>
          <v-widget title="Checkbox">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Single</v-subheader>
                <v-checkbox
                  :label="`Default: ${checkbox1.toString()}`"
                  v-model="checkbox1"
                ></v-checkbox>
                <v-checkbox
                  :label="`Purple : ${checkbox2.toString()}`"
                  color="purple"
                  v-model="checkbox2"
                ></v-checkbox>
                <v-checkbox
                  :label="`Disabled : ${checkbox3.toString()}`"
                  color="success"
                  disabled
                  v-model="checkbox3"
                ></v-checkbox>
                <v-checkbox
                  :label="`Indeterminate : ${checkbox4.toString()}`"
                  color="success"
                  indeterminate
                  v-model="checkbox4"
                ></v-checkbox>
              </div>
              <div class="multile">
                <v-container fluid class="pa-0">
                  <v-layout row wrap>
                    <v-flex xs12>
                      <v-subheader class="pa-0">Multple Selected : [{{ colors.toString() }}]</v-subheader>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="red"
                        v-model="colors"
                        color="red"
                        value="red"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="red darken-3"
                        v-model="colors"
                        color="red darken-3"
                        value="red darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="indigo"
                        v-model="colors"
                        color="indigo"
                        value="indigo"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="indigo darken-3"
                        v-model="colors"
                        color="indigo darken-3"
                        value="indigo darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="orange"
                        v-model="colors"
                        color="orange"
                        value="orange"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="orange darken-3"
                        v-model="colors"
                        color="orange darken-3"
                        value="orange darken-3"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                  <v-layout row wrap>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="primary"
                        v-model="colors"
                        color="primary"
                        value="primary"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="secondary"
                        v-model="colors"
                        color="secondary"
                        value="secondary"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="success"
                        v-model="colors"
                        color="success"
                        value="success"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="info"
                        v-model="colors"
                        color="info"
                        value="info"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                    <v-flex xs12 sm4 md4>
                      <v-checkbox
                        label="warning"
                        v-model="colors"
                        color="warning"
                        value="warning"
                        hide-details
                      ></v-checkbox>
                      <v-checkbox
                        label="error"
                        v-model="colors"
                        color="error"
                        value="error"
                        hide-details
                      ></v-checkbox>
                    </v-flex>
                  </v-layout>
                </v-container>                
              </div>
              <div class="text-mixed  mt-3">
                <v-subheader class="pa-0">Inline with a textfield</v-subheader>
                <v-layout align-center class="ma-0">
                  <v-checkbox v-model="includeFiles" hide-details class="shrink mr-2"></v-checkbox>
                  <v-text-field label="Include files"></v-text-field>
                </v-layout>
                <v-layout align-center class="ma-0">
                  <v-checkbox v-model="enabled" hide-details class="shrink mr-2"></v-checkbox>
                  <v-text-field label="I only work if you check the box" :disabled="!enabled"></v-text-field>
                </v-layout>
              </div>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 sm12>
          <v-widget title="Raidio Buttons">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Default vertical </v-subheader>
                <v-radio-group v-model="radio1" :mandatory="false">
                  <v-radio label="Primary" color="primary" value="radio-1"></v-radio>
                  <v-radio label="Success" color="success" value="radio-2"></v-radio>
                  <v-radio label="Info" color="info" value="radio-3"></v-radio>
                </v-radio-group>
              </div>
              <div class="basic">
                <v-subheader class="pa-0">Horizontal </v-subheader>
                <v-radio-group v-model="radio2" :mandatory="false" row>
                  <v-radio label="Radio 1" value="radio-1" color="pink"></v-radio>
                  <v-radio label="Radio 2" value="radio-2" color="secondary"></v-radio>
                  <v-radio label="Radio 3" value="radio-3" color="teal"></v-radio>
                </v-radio-group>
              </div>
            </div>
          </v-widget>
          <v-widget title="Switches" class="mt-3">
            <div slot="widget-content">
              <div class="basic">
                <v-subheader class="pa-0">Default value: {{s1}} </v-subheader>
                  <v-switch :label="s1 ? 'On': 'Off'" v-model="s1"></v-switch>
              </div>
              <div class="basic">
                <v-subheader class="pa-0">Custom text value:  {{s2}} </v-subheader>
                <v-switch value="Yes" :label="s2 ? 'Yes': 'No'" v-model="s2" color="success"></v-switch>
              </div>
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
      includeFiles: false,
      enabled: false,
      checkbox1: false,
      checkbox2: false,
      checkbox3: false,
      checkbox4: false,
      checkbox5: false,
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: false,
      radio5: false,
      s1: false,
      s2: false,
      ex7: 'red',
      ex8: 'primary',      
      colors: ['red', 'indigo', 'orange', 'primary']      

    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>