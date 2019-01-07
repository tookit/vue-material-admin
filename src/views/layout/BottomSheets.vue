<template>
  <div id="page-bottom-sheets">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Inset">
            <div slot="widget-content">
              <v-bottom-sheet inset>
                <v-btn slot="activator" color="red" dark>Show player</v-btn>
                <v-card tile>
                  <v-progress-linear height="3" :value="50" class="my-0"></v-progress-linear>
                  <v-list>
                    <v-list-tile>
                      <v-list-tile-content>
                        <v-list-tile-title>The Walker</v-list-tile-title>
                        <v-list-tile-sub-title>Fitz & The Trantrums</v-list-tile-sub-title>
                      </v-list-tile-content>
                      <v-spacer></v-spacer>
                      <v-list-tile-action>
                        <v-btn icon>
                          <v-icon>fast_rewind</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                      <v-list-tile-action :class="{ 'mx-5': $vuetify.breakpoint.mdAndUp }">
                        <v-btn icon>
                          <v-icon>pause</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                      <v-list-tile-action :class="{ 'mr-3': $vuetify.breakpoint.mdAndUp }">
                        <v-btn icon>
                          <v-icon>fast_forward</v-icon>
                        </v-btn>
                      </v-list-tile-action>
                    </v-list-tile>
                  </v-list>
                </v-card>
              </v-bottom-sheet>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6>
          <v-widget title="Inset">
            <div slot="widget-content">
              <div class="text-xs-center">
                <v-bottom-sheet v-model="sheet">
                  <v-btn slot="activator" color="purple" dark>Click me</v-btn>
                  <v-list>
                    <v-subheader>Open in</v-subheader>
                    <v-list-tile
                      v-for="tile in tiles"
                      :key="tile.title"
                      @click="sheet = false"
                    >
                      <v-list-tile-avatar>
                        <v-avatar size="32px" tile>
                          <img :src="`/static/icon/${tile.img}`" :alt="tile.title">
                        </v-avatar>
                      </v-list-tile-avatar>
                      <v-list-tile-title>{{ tile.title }}</v-list-tile-title>
                    </v-list-tile>
                  </v-list>
                </v-bottom-sheet>
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
      sheet: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'google.png', title: 'Google+' }
      ]      
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>