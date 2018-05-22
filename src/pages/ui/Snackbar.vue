<template>
  <div id="page-snackbar">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12 sm12>
          <v-widget title="Basic Usage">
            <section slot="widget-content">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs12>
                    <v-radio-group v-model="color" row>
                      <v-radio
                        v-for="(colorValue, i) in ['success', 'info', 'error', 'cyan darken-2']"
                        :key="i"
                        :value="colorValue"
                        :label="colorValue"
                        :color="colorValue"
                      ></v-radio>
                    </v-radio-group>
                  </v-flex>                  
                  <v-flex xs12 sm3>
                    <v-checkbox v-model="x" value="left" label="Left"></v-checkbox>
                  </v-flex>
                  <v-flex xs6 sm3>
                    <v-checkbox v-model="x" value="right" label="Right"></v-checkbox>
                  </v-flex>
                  <v-flex xs6 sm3>
                    <v-checkbox v-model="y" value="top" label="Top"></v-checkbox>
                  </v-flex>
                  <v-flex xs6 sm3>
                    <v-checkbox v-model="y" value="bottom" label="Bottom"></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-checkbox v-model="mode" value="multi-line" label="Multi-line (mobile)"></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm3>
                    <v-checkbox v-model="mode" value="vertical" label="Vertical (mobile)"></v-checkbox>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field v-model="text" type="text" label="Text"></v-text-field>
                  </v-flex>
                  <v-flex xs12 sm4>
                    <v-text-field v-model.number="timeout" type="number" label="Timeout"></v-text-field>
                  </v-flex>
                </v-layout>

              </v-container>
              <v-btn block color="primary" @click.native="snackbar = true" dark>Show Snackbar</v-btn>              
            </section>
          </v-widget>
        </v-flex>
      </v-layout>
    </v-container>
    <v-snackbar
      :timeout="timeout"
      :color="color"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      v-model="snackbar"
    >
      {{ text }}
      <v-btn flat icon dark @click.native="snackbar = false"><v-icon>close</v-icon></v-btn>
    </v-snackbar>    
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
      snackbar: false,
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      color: '',
      text: 'Hello, I\'m a snackbar'      
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>