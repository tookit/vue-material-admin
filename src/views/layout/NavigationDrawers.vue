<template>
  <div id="page-badges">
    <v-container grid-list-lg fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <div class="application--example">
                <v-container class="application--example-container">
                  <v-layout justify-center>
                    <v-btn @click.stop="drawer = !drawer" dark color="pink">Toggle</v-btn>
                    <v-btn @click.stop="miniDrawer = !miniDrawer" dark color="pink">Mini Drawer</v-btn>
                  </v-layout>
                </v-container>              
                <v-navigation-drawer absolute v-model="drawer" :mini-variant="miniDrawer">
                  <v-toolbar flat class="transparent">
                    <v-list class="pa-0">
                      <v-list-tile avatar>
                        <v-list-tile-avatar>
                          <img src="https://randomuser.me/api/portraits/men/85.jpg" >
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                          <v-list-tile-title>John Leider</v-list-tile-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-toolbar>
                  <v-list class="pt-0" dense>
                    <v-divider></v-divider>
                    <v-list-tile v-for="item in items" :key="item.title" href="#">
                      <v-list-tile-action>
                        <v-icon>{{ item.icon }}</v-icon>
                      </v-list-tile-action>
                      <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                      </v-list-tile-content>
                    </v-list-tile>
                  </v-list>
                </v-navigation-drawer>
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
      drawer: true,
      miniDrawer: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      right: null      
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>

<style lang="stylus">
  @import '~vuetify/src/stylus/settings/_variables.styl'

    .application--example
      position: relative
      transition: .3s $transition.swing
      overflow: hidden
      z-index: 0

      > .container
        min-height : 350px
 
</style>
