<template>
  <div id="page-steppers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <v-subheader>Horizontal Step </v-subheader>
          <v-stepper v-model="step">
            <v-stepper-header>
              <v-stepper-step step="1" :complete="step > 1">Name of step 1</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="2" :complete="step > 2">Name of step 2</v-stepper-step>
              <v-divider></v-divider>
              <v-stepper-step step="3">Name of step 3</v-stepper-step>
            </v-stepper-header>
            <v-stepper-items>
              <v-stepper-content step="1">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="primary" @click.native="step = 2">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-content step="2">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="primary" @click.native="step = 3">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
              <v-stepper-content step="3">
                <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
                <v-btn color="primary" @click.native="step = 1">Continue</v-btn>
                <v-btn flat>Cancel</v-btn>
              </v-stepper-content>
            </v-stepper-items>
          </v-stepper>
        </v-flex>
        <v-flex sm12>
          <v-subheader>Vertical Step </v-subheader>
          <v-stepper v-model="e13" vertical>
            <v-stepper-step step="1" complete>
              Name of step 1
            </v-stepper-step>
            <v-stepper-content step="1">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click.native="e13 = 2">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-step step="2" complete>Name of step 2</v-stepper-step>
            <v-stepper-content step="2">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click.native="e13 = 3">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-step step="3" :rules="[() => false]">
              Ad templates
              <small>Alert message</small>
            </v-stepper-step>
            <v-stepper-content step="3">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click.native="e13 = 4">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
            <v-stepper-step step="4">View setup instructions</v-stepper-step>
            <v-stepper-content step="4">
              <v-card color="grey lighten-1" class="mb-5" height="200px"></v-card>
              <v-btn color="primary" @click.native="e13 = 1">Continue</v-btn>
              <v-btn flat>Cancel</v-btn>
            </v-stepper-content>
          </v-stepper>
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
      step: 1,
      e13: 1,
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>