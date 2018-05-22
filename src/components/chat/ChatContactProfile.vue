<template>
  <v-container fluid fill-height class="pa-0 ma-0 white" id="profile">
    <v-layout column class="pa-0 ma-0">
      <v-card class="elevation-0">
        <v-card-media height="380" src="/static/bg/4.jpg">
          <v-layout column align-center justify-center>
            <v-avatar size="200" class="mx-5">
              <img :src="user.avatar" :alt="user.name">
            </v-avatar>
            <h1 class="white--text">{{user.name}}</h1>
          </v-layout>
        </v-card-media>
        <v-card-text class="pa-0">
          <v-layout row wrap class="grey lighten-4 pa-3">
            <v-flex xs4>
              <div class="layout column justify-center align-center">
                <v-btn icon outline color="indigo">
                  <v-icon>fa fa-facebook</v-icon>
                </v-btn>
                <h3 class="indigo--text">100+</h3>
              </div>
            </v-flex>
            <v-flex xs4>
              <div class="layout column justify-center align-center">
                <v-btn icon outline color="pink">
                  <v-icon>fa fa-instagram</v-icon>
                </v-btn>
                <h3 class="pink--text">200+</h3>
              </div>              
            </v-flex>
            <v-flex xs4>
              <div class="layout column justify-center align-center">
                <v-btn icon outline color="blue">
                  <v-icon>fa fa-twitter</v-icon>
                </v-btn>
                <h3 class="blue--text">50+</h3>
              </div>              
            </v-flex>
          </v-layout>
          <v-tabs v-model="selectedTab">
            <v-tab ripple href="#tab-1">
              Profile
            </v-tab>
            <v-tab ripple href="#tab-2">
              Activity 
            </v-tab>
            <v-tabs-items v-model="selectedTab">
              <v-tab-item id="tab-1">
                <v-card flat>
                  <v-card-text>
                    <v-list two-line class="pa-0">
                      <v-list-tile href="#">
                        <v-list-tile-action>
                          <v-icon color="indigo">work</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>{{user.jobTitle}}</v-list-tile-title>
                          <v-list-tile-sub-title>Job Title</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-divider inset></v-divider>          
                      <v-list-tile href="#">
                        <v-list-tile-action>
                          <v-icon color="indigo">phone</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>{{user.phone}}</v-list-tile-title>
                          <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                          <v-icon>chat</v-icon>
                        </v-list-tile-action>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile href="#">
                        <v-list-tile-action>
                          <v-icon color="indigo">mail</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>{{user.email}}</v-list-tile-title>
                          <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                      <v-divider inset></v-divider>
                      <v-list-tile href="#">
                        <v-list-tile-action>
                          <v-icon color="indigo">location_on</v-icon>
                        </v-list-tile-action>
                        <v-list-tile-content>
                          <v-list-tile-title>{{user.address.street}}</v-list-tile-title>
                          <v-list-tile-sub-title>{{user.address.city}}, {{user.address.state}} {{user.address.zipcode}}</v-list-tile-sub-title>
                        </v-list-tile-content>
                      </v-list-tile>
                    </v-list>
                  </v-card-text>
                </v-card>
              </v-tab-item>
              <v-tab-item id="tab-2">
                <v-card flat>
                  <v-card-text>

                  </v-card-text>
                </v-card>
              </v-tab-item>              
            </v-tabs-items>
          </v-tabs>          
        </v-card-text>
      </v-card>   
    </v-layout>
  </v-container>     
</template>

<script>
import { getUserById } from '@/api/user';
export default {
  data () {
    return {
      chat: null,
      selectedTab: null,
    };
  },
  computed: {
   
    user () {
      let Origin = {
        name: 'Chat',
        avatar: '',
      };
      let user = getUserById(this.$route.params.uuid);
      return Object.assign(Origin, user);
    }    
  },
};
</script>
