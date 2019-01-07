<template>
  <div id="page-footers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg12>
          <v-widget title="Default">
            <div slot="widget-content">
            <v-footer class="pa-3">
              <v-spacer></v-spacer>
              <div>&copy; {{ new Date().getFullYear() }}</div>
            </v-footer>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg12>
          <v-widget title="With icon">
            <div slot="widget-content">
                <v-footer height="auto">
                  <v-card
                    flat
                    tile
                    class="indigo lighten-1 white--text text-xs-center"
                  >
                    <v-card-text>
                      <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        icon
                        class="mx-3 white--text"
                      >
                        <v-icon size="24px">{{ icon }}</v-icon>
                      </v-btn>
                    </v-card-text>
                    <v-card-text class="white--text pt-0">
                      Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                    </v-card-text>
                    <v-card-text class="white--text">
                      &copy;2018 — <strong>Vuetify</strong>
                    </v-card-text>
                  </v-card>
                </v-footer>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg12>
          <v-widget title="Complex layout">
            <div slot="widget-content">
              <v-footer height="auto">
                <v-card flat tile>
                  <v-card-title class="teal white--text">
                    <strong class="subheading">Get connected with us on social networks!</strong>
                    <v-spacer></v-spacer>
                    <v-btn
                      v-for="icon in icons"
                      :key="icon"
                      icon
                      dark
                      class="mx-3"
                    >
                      <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                  </v-card-title>
                  <v-card-text class="grey lighten-3">
                    <v-layout>
                      <v-flex
                        v-for="(col, i) in rows"
                        :key="i"
                        xs3
                      >
                        <span class="body-2" v-text="col.title.toUpperCase()"/>
                        <div
                          v-for="(child, i) in col.children"
                          :key="i"
                          v-text="child"
                        />
                      </v-flex>
                      <v-flex xs3 layout column>
                        <span class="body-2">CONTACT</span>
                        <div>
                          <v-icon size="18px" class="mr-3">fa-home</v-icon>
                          New York, NY 10012, US
                        </div>
                        <div>
                          <v-icon size="18px" class="mr-3">fa-envelope</v-icon>
                          info@example.com
                        </div>
                        <div>
                          <v-icon size="18px" class="mr-3">fa-phone</v-icon>
                          + 01 234 567 88
                        </div>
                        <div>
                          <v-icon size="18px" class="mr-3">fa-print</v-icon>
                          + 01 234 567 89
                        </div>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                  <v-card-actions class="grey lighten-2 justify-center">
                    &copy;2018 — <strong>Vuetify</strong>
                  </v-card-actions>
                </v-card>
              </v-footer>
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
      icons: ['fa-facebook', 'fa-twitter', 'fa-google-plus', 'fa-linkedin', 'fa-instagram'],
      rows: [
        {
          title: 'Company Name',
          children: ['Here you can use rows and columns here to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit']
        },
        {
          title: 'Products',
          children: ['MDBootstrap', 'MDWordPress', 'BrandFlow', 'Bootstrap Angular']
        },
        {
          title: 'Useful Links',
          children: ['Your account', 'Become an Affiliate', 'Shipping Rates', 'Helper']
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