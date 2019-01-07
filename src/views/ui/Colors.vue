<template>
  <v-container id="page-colors" fluid grid-list-xl>
    <v-layout row wrap>
        <v-flex class="mb-3" xs12>
          <v-text-field prepend-icon="filter_list" solo="solo" label="Search Materil Colors" single-line="single-line" v-model="search"></v-text-field>
        </v-flex>
        <v-flex xs12 sm6 md4 v-for="(color, key) in computedColors" :key="key">
            <v-card :color="key" tile="tile">
              <v-card-text>
                <h3 class="white--text">{{ key }}</h3>
              </v-card-text>
            </v-card>
            <v-card v-for="(subColor, key2) in color" :color="`${key} ${convertToClass(key2)}`" :class="getColorClass(key2)" :key="key2" tile="tile">
              <v-card-text>
                <v-layout>
                  <v-flex class="caption" xs8="xs8"><span v-if="key !== 'shades'">{{ key }}&nbsp;</span><span v-if="key2 !== 'base'">{{ key2.replace(/(.*)(\d)/, '$1-$2') }}</span></v-flex>
                  <v-flex class="text-xs-right" xs4="xs4"><span v-if="subColor !== 'transparent'">{{ subColor.toUpperCase() }}</span></v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
        </v-flex>
    </v-layout>    
  </v-container>
</template>

<script>
import colors from 'vuetify/es5/util/colors';
import Util from '@/util';

export default {
  data: () => ({
    colors,
    search: ''
  }),

  computed: {
    computedColors () {
      const colors = {};
      const search = this.search.toLowerCase();

      Object.keys(this.colors).forEach(key => {
        const kebabKey = Util.kebab(key).toLowerCase();

        if (kebabKey.indexOf(search) > -1) {
          colors[kebabKey] = this.colors[key];
        }
      });

      return colors;
    }
  },

  methods: {
    endStr (str) {
      return str[str.length - 1];
    },
    convertToClass (str) {
      const end = this.endStr(str);
      const sub = str.substr(0, str.length - 1);

      if (isNaN(parseInt(end, 10))) return str;

      return `${sub}-${end}`;
    },
    getColorClass (key) {
      if (['white', 'transparent'].includes(key) ||
        key.indexOf('light') > -1 ||
        key.indexOf('accent') > -1
      ) return 'black--text';

      return 'white--text';
    }
  }
};
</script>

<style lang="stylus">
  #colors-page
    .flex
      margin: 1rem 0

    .card
      color: #fff
      font-weight: 500
      letter-spacing: .5px
      padding: 1rem
      border-radius: 0

      .card__text
        h3
          color: #fff
          align-self: flex-start
          font-size: 1.5rem
          margin: 0

    .card__text
      padding: 0
</style>
