<template>
  <div id="page-carousels">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-carousel>
                <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i"></v-carousel-item>
              </v-carousel>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 sm12 xs12>
          <v-widget title="Hide Controls">
            <div slot="widget-content">
              <v-carousel hide-controls hide-delimiters>
                <v-carousel-item v-for="(item,i) in items" :src="item.src" :key="i">
                </v-carousel-item>
              </v-carousel>
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
      items: [
        {
          src: '/static/nature/n1.jpeg'
        },
        {
          src: '/static/nature/n2.jpeg'
        },
        {
          src: '/static/nature/n3.jpeg'
        },
        {
          src: '/static/nature/n4.jpeg'
        }
      ]      
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>