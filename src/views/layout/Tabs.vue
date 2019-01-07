<template>
  <div id="pageTab">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Basic Usage" content-bg="grey lighten-3">
            <div slot="widget-content">
              <v-subheader>Left Align</v-subheader>
              <v-tabs>
                <v-tab v-for="n in 3" :key="n">
                  Item {{ n }}
                </v-tab>
              </v-tabs>
              <v-subheader>Right Align</v-subheader>
              <v-tabs right>
                <v-tab v-for="n in 3" :key="n">
                  Item {{ n }}
                </v-tab>
              </v-tabs>
              <v-subheader>Center Align</v-subheader>
              <v-tabs centered>
                <v-tab v-for="n in 3" :key="n">
                  Item {{ n }}
                </v-tab>
              </v-tabs>
              <v-subheader>With menu</v-subheader>
              <v-tabs centered>
                <v-tab v-for="n in 3" :key="n">
                  Item {{ n }}
                </v-tab>
                <v-menu left bottom class="tabs__div" v-if="more.length">
                  <a class="tabs__item" slot="activator">
                    more
                    <v-icon>arrow_drop_down</v-icon>
                  </a>
                  <v-list class="grey lighten-3">
                    <v-list-tile
                      v-for="item in more"
                      :key="item"
                      @click="handleClick"
                    >
                      {{ item }}
                    </v-list-tile>
                  </v-list>
                </v-menu>                
              </v-tabs>

              <v-subheader>Icon and text</v-subheader>
              <v-tabs icons-and-text centered dark color="cyan">
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tab href="#tab-1">
                  Recents
                  <v-icon>phone</v-icon>
                </v-tab>
                <v-tab href="#tab-2">
                  Favorites
                  <v-icon>favorite</v-icon>
                </v-tab>
                <v-tab href="#tab-3">
                  Nearby
                  <v-icon>account_box</v-icon>
                </v-tab>
                <v-tab-item
                  v-for="i in 3"
                  :key="i"
                  :id="'tab-' + i"
                >
                  <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs>              
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Complex" content-bg="grey lighten-3">
            <div slot="widget-content">
              <v-subheader>Mixed with toolbar</v-subheader>
              <v-toolbar color="cyan" dark tabs>
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Page title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-tabs
                  color="cyan"
                  slot="extension"
                  v-model="tab"
                  grow
                >
                  <v-tabs-slider color="yellow"></v-tabs-slider>
                  <v-tab v-for="item in items" :key="item">
                    {{ item }}
                  </v-tab>
                </v-tabs>
              </v-toolbar>
              <v-tabs-items v-model="tab">
                <v-tab-item v-for="item in items" :key="item">
                  <v-card flat>
                    <v-card-text>{{ text }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>
              <v-subheader>Mixed with toolbar2</v-subheader>
              <v-toolbar tabs color="purple" dark="">
                <v-toolbar-side-icon></v-toolbar-side-icon>
                <v-toolbar-title>Page title</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>search</v-icon>
                </v-btn>
                <v-btn icon>
                  <v-icon>more_vert</v-icon>
                </v-btn>
                <v-tabs
                  v-model="tabs"
                  fixed-tabs
                  color="transparent"
                  slot="extension"
                >
                  <v-tabs-slider></v-tabs-slider>
                  <v-tab href="#mobile-tabs-5-1" class="primary--text">
                    <v-icon>phone</v-icon>
                  </v-tab>
                  <v-tab href="#mobile-tabs-5-2" class="primary--text">
                    <v-icon>favorite</v-icon>
                  </v-tab>
                  <v-tab href="#mobile-tabs-5-3" class="primary--text">
                    <v-icon>account_box</v-icon>
                  </v-tab>
                </v-tabs>
              </v-toolbar>
              <v-tabs-items v-model="tabs" class="white elevation-1">
                <v-tab-item
                  v-for="i in 3"
                  :key="i"
                  :id="'mobile-tabs-5-' + i"
                >
                  <v-card>
                    <v-card-text>{{ text }}</v-card-text>
                  </v-card>
                </v-tab-item>
              </v-tabs-items>              
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
      items: ['Item One', 'Item Seventeen', 'Item Five'],
      tab: null,      
      tabs: null,
      more: [
        'News', 'Maps', 'Books', 'Flights', 'Apps'
      ],      
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'      
    };
  },
  computed: {
  },  
  methods: {
    handleClick (e) {
      e.preventDefault();
    }
  }
};
</script>