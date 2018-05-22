<template>
  <div id="page-progress">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Circular">
            <div slot="widget-content" class="text-xs-center">
              <v-progress-circular :value="100" color="blue-grey"></v-progress-circular>
              <v-progress-circular :value="80" color="deep-orange lighten-2"></v-progress-circular>
              <v-progress-circular :value="60" color="brown"></v-progress-circular>
              <v-progress-circular :value="40" color="lime"></v-progress-circular>
              <v-progress-circular :value="20" color="indigo darken-2"></v-progress-circular>
            </div>
          </v-widget>
          <v-widget title="Interminate" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
              <v-progress-circular indeterminate color="red"></v-progress-circular>
              <v-progress-circular indeterminate color="purple"></v-progress-circular>
              <v-progress-circular indeterminate color="green"></v-progress-circular>
              <v-progress-circular indeterminate color="amber"></v-progress-circular>
            </div>
          </v-widget>          
          <v-widget title="Sizing" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
              <v-progress-circular indeterminate :size="50" color="primary"></v-progress-circular>
              <v-progress-circular indeterminate :width="3" color="red"></v-progress-circular>
              <v-progress-circular indeterminate :size="70" :width="7" color="purple"></v-progress-circular>
              <v-progress-circular indeterminate :width="3" color="green"></v-progress-circular>
              <v-progress-circular indeterminate :size="50" color="amber"></v-progress-circular>
            </div>
          </v-widget>          
          <v-widget title="Rotate" class="mt-3">
            <div slot="widget-content" class="text-xs-center">
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="value"
                  color="teal"
                >
                  {{ value }}
                </v-progress-circular>

                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="-90"
                  :value="value"
                  color="primary"
                >
                  {{ value }}
                </v-progress-circular>

                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="90"
                  :value="value"
                  color="red"
                >
                  {{ value }}
                </v-progress-circular>

                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="180"
                  :value="value"
                  color="pink"
                >
                  {{ value }}
                </v-progress-circular>
            </div>
          </v-widget>          
        </v-flex>
        <v-flex lg6>
          <v-widget title="Linear">
            <div slot="widget-content">
              <v-progress-linear value="15" color="primary"></v-progress-linear>
              <v-progress-linear value="30" color="red"></v-progress-linear>
              <v-progress-linear value="50" color="purple"></v-progress-linear>
              <v-progress-linear value="70" color="green"></v-progress-linear>
              <v-progress-linear value="90" color="amber"></v-progress-linear>
            </div>
          </v-widget>
          <v-widget title="Linear indeterminate" class="mt-3">
            <div slot="widget-content">
              <v-progress-linear indeterminate value="15" color="primary"></v-progress-linear>
              <v-progress-linear indeterminate value="15" color="pink"></v-progress-linear>
            </div>
          </v-widget>
          <v-widget title="Linear custom" class="mt-3">
            <div slot="widget-content">
              <v-progress-linear value="15" height="2" color="secondary"></v-progress-linear>
              <v-progress-linear value="30" height="5" color="success"></v-progress-linear>
              <v-progress-linear value="45" height="10" color="info"></v-progress-linear>
              <v-progress-linear value="60" height="15" color="warning"></v-progress-linear>
              <v-progress-linear value="75" height="20" color="error"></v-progress-linear>
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
      interval: {},
      value: 0
    };
  },
  computed: {
  },  
  beforeDestroy () {
    clearInterval(this.interval);
  },
  mounted () {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        return (this.value === 0);
      }
      this.value += 10;
    }, 1000);
  },  
  methods: {
  },
  
};
</script>