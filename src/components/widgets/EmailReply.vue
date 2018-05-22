<template>
  <v-card>
    <v-toolbar color="primary" dark extended dense class="elevation-1">
      <v-toolbar-title>Hey Michael, How are you?</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click="handleClose">
        <v-icon color="white" >close</v-icon>
      </v-btn>
      <div slot="extension" class="layout row align-center white grey--text px-2">
        <v-avatar size="32">
          <img src="https://randomuser.me/api/portraits/men/92.jpg" >
        </v-avatar>  
        <div class="subheading pa-1">John Doe</div> 
        <v-btn icon>
          <v-icon color="grey">keyboard_arrow_down</v-icon>
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon color="yellow">star</v-icon>
        </v-btn>        
        <div class="subheading">09:30</div>
        <v-btn icon>
          <v-icon color="grey">reply</v-icon>
        </v-btn>          
        <v-btn icon>
          <v-icon color="grey">reply_all</v-icon>
        </v-btn>          
        <v-btn icon>
          <v-icon color="grey">delete</v-icon>
        </v-btn>          
        <v-btn icon>
          <v-icon color="grey">expand_more</v-icon>
        </v-btn>          
      </div>
    </v-toolbar>
    <v-container fluid class="pa-0">
      <v-layout wrap column>
        <v-expansion-panel expand>
          <v-expansion-panel-content v-for="(item,i) in 1" :key="i" :value="item === 2">
            <div slot="header">10 More Messages</div>
            <v-card>
              <v-card-text class="grey lighten-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        <div class="flex email content pa-5">
          <div class="layout column">
            <h3 class="headlien">Hi Michael</h3>
            <br>
            <br>
            <div class="mail">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
            <div class="subheading">Joe Doe</div>
            <br>
            <br>
            <v-divider></v-divider>
            <br>
            <v-card>
              <v-toolbar dense class="elevation-1">
              <v-btn icon>
                  <v-icon>reply</v-icon>
                </v-btn>        
                <div class="subheading pa-1">John Doe</div> 
                <v-btn icon>
                  <v-icon>expand_more</v-icon>
                </v-btn>                    
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text class="pa-0">
                <v-text-field
                  class=""
                  v-model="title"
                  counter
                  full-width
                  multi-line
                ></v-text-field>              
              </v-card-text>
              <v-toolbar dense class="elevation-1">
                <v-btn flat icon>
                  <v-icon>send</v-icon>
                </v-btn>        
                <v-btn icon>
                  <v-icon>attach_file</v-icon>
                </v-btn>                    
                <v-btn icon>
                  <v-icon>link</v-icon>
                </v-btn>                    
                <v-btn icon>
                  <v-icon>camera</v-icon>
                </v-btn>                    
                <v-spacer></v-spacer>
              </v-toolbar>   
            </v-card>               
          </div>
        </div>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  data: () => ({
    toggle_exclusive: 2,
    title: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa', 
    
  }),
  methods: {
    handleClose (e) {
      window.AppMail.$emit('MAIL_REPLY_DIALOG_CLOSE');
    }
  },
};
</script>
