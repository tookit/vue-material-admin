<template>
  <div id="page-selects">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 xs12>
          <v-widget title="Single Selection">
            <div slot="widget-content">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-subheader>Standard</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="countries"
                      v-model="e1"
                      label="Select"
                      item-text="country"
                      item-value="abbr"
                      single-line
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Standard with focus</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="countries"
                      v-model="e2"
                      label="Select"
                      item-text="country"
                      item-value="abbr"                      
                      class="input-group--focused"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Error</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="countries"
                      v-model="e3"
                      :error-messages="['Please select an option']"
                      item-text="country"
                      item-value="abbr"     
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Prepend Icon</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      prepend-icon="map"
                      :items="countries"
                      v-model="e5"
                      item-text="country"
                      item-value="abbr"                           
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Append Icon</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="countries"
                      v-model="e6"
                      append-icon="map"
                      item-text="country"
                      item-value="abbr"                           
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Auto complete</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="countries"
                      v-model="e7"
                      autocomplete
                      item-text="country"
                      item-value="abbr"                           
                    ></v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg6 xs12>
          <v-widget title="Mulitple Selection">
            <div slot="widget-content">
              <v-container fluid>
                <v-layout row wrap>
                  <v-flex xs6>
                    <v-subheader>Tags</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="countries"
                      v-model="multi1"
                      tags
                      label="Select"
                      multi-line
                      item-text="country"
                      item-value="abbr"     
                      return-object                      
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Tags and chips</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      :items="countries"
                      v-model="multi2"
                      tags
                      chips
                      multiple=""
                      label="Select"
                      class="input-group--focused"
                      item-text="country"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Rules</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Async items"
                      autocomplete
                      :loading="loading"
                      multiple
                      cache-items
                      chips
                      required
                      :items="items"
                      item-text="country"
                      item-value="country"
                      :rules="[() => select.length > 0 || 'You must choose at least one']"
                      :search-input.sync="search"
                      v-model="select"
                    ></v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Slots - Closable chips</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="countries"
                      chips
                      tags
                      v-model="multi4"
                      multi-line
                      item-text="country"
                      item-value="abbr"      
                      return-object                     
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          close
                          @input="data.parent.selectItem(data.item.abbr)"
                          class="chip--select-multi"
                          :selected="data.selected"
                          :key="JSON.stringify(data.item.abbr)"
                        >
                          <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                          {{ data.item.country }}
                        </v-chip>
                      </template>                    
                    </v-select>
                  </v-flex>
                  <v-flex xs6>
                    <v-subheader>Slots</v-subheader>
                  </v-flex>
                  <v-flex xs6>
                    <v-select
                      label="Select"
                      :items="countries"
                      chips
                      tags
                      v-model="multi3"
                      multi-line
                      item-text="country"
                      item-value="abbr"      
                      return-object                     
                    >
                      <template slot="selection" slot-scope="data">
                        <v-chip
                          @input="data.parent.selectItem(data.item.abbr)"
                          class="chip--select-multi"
                          :selected="data.selected"
                          :key="JSON.stringify(data.item.abbr)"
                        >
                          <v-avatar class="accent">{{ data.item.abbr.slice(0, 1).toUpperCase() }}</v-avatar>
                          {{ data.item.country }}
                        </v-chip>
                      </template>                    
                    </v-select>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
        </v-flex>        
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import VWidget from '@/components/VWidget';
import Countries  from '@/api/country';
export default {
  components: {
    VWidget
  },
  data () {
    return {
      loading: false,
      items: [],
      search: null,
      select: [],      
      e1: null,
      e2: null,
      e3: null,
      e4: null,      
      e5: null,      
      e6: null,      
      e7: null,  
      multi1: [],
      multi2: [],    
      multi3: [],    
      multi4: [],    
      multi5: [],    
      countries: Countries
    };
  },
  computed: {
  },  
  watch: {
    search (val) {
      val && this.querySelections(val);
    }
  },
  methods: {
    querySelections (v) {
      console.log(v);
      this.loading = true;
      // Simulated ajax query
      setTimeout(() => {
        this.items = this.countries.filter(e => {
          return (e.country || '').toLowerCase().indexOf((v || '').toLowerCase()) > -1;
        });
        this.loading = false;
      }, 500);
    }
  }
};
</script>