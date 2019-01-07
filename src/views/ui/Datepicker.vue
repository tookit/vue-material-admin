<template>
  <div id="page-datepickers">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg6 sm12>
          <v-widget title="Basic Usage">
            <div slot="widget-content">
              <div class="flexbox-centering">
                <v-date-picker color="green lighten-1" v-model="picker"></v-date-picker>
              </div>
            </div>
          </v-widget>
          <v-widget title="Full Width" class="mt-3">
            <div slot="widget-content">
              <v-date-picker landscape full-width color="green lighten-1" v-model="picker"></v-date-picker>
              <v-date-picker full-width color="primary lighten-1" v-model="picker" class="mt-3"></v-date-picker>
            </div>
          </v-widget>          
        </v-flex>
        <v-flex lg6 sm12>
          <v-widget title="Month Picker">
            <div slot="widget-content">
              <div class="flexbox-centering">
                <v-date-picker type="month" color="teal lighten-1" v-model="picker"></v-date-picker>
              </div>
            </div>
          </v-widget>          
          <v-widget title="In dialog and menu" class="mt-3">
            <div slot="widget-content">
              <v-container>
                <v-layout row wrap>
                  <v-flex xs11 sm5>
                    <v-menu
                      ref="menu"
                      lazy
                      :close-on-content-click="false"
                      v-model="menu"
                      transition="scale-transition"
                      offset-y
                      full-width
                      :nudge-right="40"
                      min-width="290px"
                      :return-value.sync="date"
                    >
                      <v-text-field
                        slot="activator"
                        label="Picker in menu"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="date" no-title scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-menu>
                  </v-flex>
                  <v-spacer></v-spacer>
                  <v-flex xs11 sm5>
                    <v-dialog
                      ref="dialog"
                      persistent
                      v-model="modal"
                      lazy
                      full-width
                      width="290px"
                      :return-value.sync="date"
                    >
                      <v-text-field
                        slot="activator"
                        label="Picker in dialog"
                        v-model="date"
                        prepend-icon="event"
                        readonly
                      ></v-text-field>
                      <v-date-picker v-model="date" scrollable>
                        <v-spacer></v-spacer>
                        <v-btn flat color="primary" @click="modal = false">Cancel</v-btn>
                        <v-btn flat color="primary" @click="$refs.dialog.save(date)">OK</v-btn>
                      </v-date-picker>
                    </v-dialog>
                  </v-flex>
                </v-layout>
              </v-container>
            </div>
          </v-widget>
          <v-widget title="Events" class="mt-3">
            <div slot="widget-content">
              <v-container>
                <v-layout wrap>
                  <v-flex xs12 sm12 class="my-3">
                    <v-date-picker
                      full-width
                      v-model="date1"
                      event-color="green lighten-1"
                      :events="arrayEvents"
                    ></v-date-picker>
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
export default {
  components: {
    VWidget
  },
  data () {
    return {
      picker: null,
      picker2: null,
      //
      arrayEvents: null,
      date1: null,
      date2: null,
      //
      date: null,
      menu: false,
      modal: false            
    };
  },
  mounted () {
    this.arrayEvents = [...Array(6)].map(() => {
      const day = Math.floor(Math.random() * 30);
      const d = new Date();
      d.setDate(day);
      return d.toISOString().substr(0, 10);
    });
  },

  methods: {
    functionEvents (date) {
      const [,, day] = date.split('-');
      return parseInt(day, 10) % 3 === 0;
    }
  }
};
</script>