<template>
  <div id="page-sliders">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-subheader>Default</v-subheader>
              <div class="container">
                <div class="layout column">
                  <div class="flex">
                    <v-slider v-model="slider1" step="0"></v-slider>
                  </div>
                </div>
              </div>
              <v-subheader>Disabled</v-subheader>
              <div class="container">
                <div class="layout column">
                  <div class="flex">
                    <v-slider v-model="slider2" step="0" disabled></v-slider>    
                  </div>
                </div>
              </div>              
              <v-subheader>Concreate step (Drag the slider) </v-subheader>      
              <div class="container">
                <div class="layout column">
                  <div class="flex">
                    <v-slider placeholder="step" color="pink" :max="255" thumb-label step="10" ticks v-model="slider3"></v-slider>
                  </div>
                </div>
              </div>                      
              <v-subheader>With Icon </v-subheader>
              <div class="container">
                <div class="layout column">
                  <div class="flex">
                    <v-slider prepend-icon="volume_up" v-model="media1"></v-slider>
                    <v-slider prepend-icon="volume_down" v-model="media2"></v-slider>
                  </div>
                </div>
              </div>                 
              <v-subheader>Custom color</v-subheader>
              <div class="container">
                <div class="layout column">
                  <div class="flex">
                    <v-slider :label="ex1.label" v-model="ex1.val" :color="ex1.color"></v-slider>
                    <v-slider :label="ex2.label" v-model="ex2.val" :track-color="ex2.color"></v-slider>
                    <v-slider :label="ex3.label" v-model="ex3.val" :thumb-color="ex3.color" thumb-label></v-slider>     
                  </div>
                </div>
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
      slider1: 0,
      slider2: 0,
      slider3: 0,
      media1: 0,
      media2: 0,
      ex1: { label: 'color', val: 25, color: 'orange darken-3' },
      ex2: { label: 'track-color', val: 75, color: 'green lighten-1' },
      ex3: { label: 'thumb-color', val: 50, color: 'red' }      
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>