<template>
  <div id="page-chips">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6>
          <v-widget title="Icon Chip">
            <div slot="widget-content">
              <div class="text-xs-center">
                <v-chip color="indigo" text-color="white">
                  <v-avatar>
                    <v-icon>account_circle</v-icon>
                  </v-avatar>
                  Ranee
                </v-chip>
                <v-chip color="orange" text-color="white">
                  Premium
                  <v-icon right>star</v-icon>
                </v-chip>
                <v-chip color="primary" text-color="white">
                  1 Year
                  <v-icon right>cake</v-icon>
                </v-chip>
                <v-chip color="green" text-color="white">
                  <v-avatar class="green darken-4">1</v-avatar>
                  Years
                </v-chip>
                <v-chip close v-model="chip1" color="teal" text-color="white">
                  <v-avatar>
                    <v-icon>check_circle</v-icon>
                  </v-avatar>
                  Confirmed
                </v-chip>
              </div>
            </div>
          </v-widget>
          <v-widget title="Colored Chip" class="mt-3">
            <div slot="widget-content">
              <div class="text-xs-center">
                <v-chip color="primary" text-color="white">Primary</v-chip>
                <v-chip color="secondary" text-color="white">Secondary</v-chip>
                <v-chip color="red" text-color="white">Colored Chip</v-chip>
                <v-chip color="green" text-color="white">Colored Chip</v-chip>
              </div>
            </div>
          </v-widget>          
          <v-widget title="Outline Chip" class="mt-3">
            <div slot="widget-content">
              <div class="text-xs-center">
                <v-chip color="primary" outline>Primary</v-chip>
                <v-chip color="secondary" outline>Secondary</v-chip>
                <v-chip color="red" outline>Colored Chip</v-chip>
                <v-chip color="green" outline>Colored Chip</v-chip>
              </div>
            </div>
          </v-widget>          
          <v-widget title="Lable Chip" class="mt-3">
            <div slot="widget-content">
              <div class="text-xs-center">
                <v-chip label>Label</v-chip>
                <v-chip label color="pink" text-color="white">
                  <v-icon left>label</v-icon>Tags
                </v-chip>
                <v-chip label outline color="red">Outline</v-chip>
              </div>
            </div>
          </v-widget>          
        </v-flex>        
        <v-flex lg6>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <v-container fluid class="pa-0">
                <v-layout row wrap>
                  <v-flex md6 sm12>
                    <div class="text-xs-center">
                      <v-chip close v-model="chip2">Example Chip</v-chip>
                    </div>
                    <div class="text-xs-center">
                      <v-chip>Example Chip</v-chip>
                    </div>
                  </v-flex>
                  <v-flex md6 sm12 xs12>
                    <div class="text-xs-center">
                      <v-chip close>
                        <v-avatar>
                          <img src="https://randomuser.me/api/portraits/men/35.jpg" alt="trevor">
                        </v-avatar>
                        Trevor Hansen
                      </v-chip>
                    </div>
                    <div class="text-xs-center">
                      <v-chip>
                        <v-avatar class="teal">A</v-avatar>
                        ANZ Bank
                      </v-chip>
                    </div>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
          <v-widget title="Complex usage" class="mt-3">
            <div slot="widget-content">
              <v-select
                label="Your favorite hobbies"
                chips
                tags
                solo
                prepend-icon="filter_list"
                append-icon=""
                clearable
                v-model="chips"
              >
                <template slot="selection" slot-scope="data">
                  <v-chip
                    close
                    @input="remove(data.item)"
                    :selected="data.selected"
                  >
                    <strong>{{ data.item }}</strong>&nbsp;
                    <span>(interest)</span>
                  </v-chip>
                </template>
              </v-select>
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
      chips: ['Programming', 'Watching', 'Sleeping'],
      chip1: true,
      chip2: true,
    };
  },
  computed: {
  },  
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    }
  }
};
</script>