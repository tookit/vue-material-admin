<template>
  <v-card text>
    <v-responsive height="380" src="/static/bg/4.jpg">
      <v-layout column align-center justify-center>
        <v-avatar size="200" class="mx-5">
          <img :src="user.avatar" :alt="user.name" />
        </v-avatar>
        <h1 class="white--text">{{ user.name }}</h1>
      </v-layout>
    </v-responsive>
    <v-card-text class="pa-0">
      <v-layout row wrap class="grey lighten-4 pa-3 ma-0">
        <v-flex xs4>
          <div class="layout column justify-center align-center">
            <v-btn icon outlined color="indigo">
              <v-icon>fa fa-facebook</v-icon>
            </v-btn>
            <h3 class="indigo--text">100+</h3>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="layout column justify-center align-center">
            <v-btn icon outlined color="pink">
              <v-icon>fa fa-instagram</v-icon>
            </v-btn>
            <h3 class="pink--text">200+</h3>
          </div>
        </v-flex>
        <v-flex xs4>
          <div class="layout column justify-center align-center">
            <v-btn icon outlined color="blue">
              <v-icon>fa fa-twitter</v-icon>
            </v-btn>
            <h3 class="blue--text">50+</h3>
          </div>
        </v-flex>
      </v-layout>
      <v-tabs v-model="selectedTab">
        <v-tab href="#tab-1"> Profile </v-tab>
        <v-tab href="#tab-2"> Activity </v-tab>
        <v-tabs-items v-model="selectedTab">
          <v-tab-item value="tab-1">
            <v-card text>
              <v-card-text>
                <v-list two-line class="pa-0">
                  <v-list-item href="#">
                    <v-list-item-action>
                      <v-icon color="indigo">work</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.jobTitle }}</v-list-item-title>
                      <v-list-item-subtitle>Job Title</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action> </v-list-item-action>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item href="#">
                    <v-list-item-action>
                      <v-icon color="indigo">phone</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.phone }}</v-list-item-title>
                      <v-list-item-subtitle>Mobile</v-list-item-subtitle>
                    </v-list-item-content>
                    <v-list-item-action>
                      <v-icon>chat</v-icon>
                    </v-list-item-action>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item href="#">
                    <v-list-item-action>
                      <v-icon color="indigo">mail</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{ user.email }}</v-list-item-title>
                      <v-list-item-subtitle>Personal</v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
                  <v-divider inset></v-divider>
                  <v-list-item href="#">
                    <v-list-item-action>
                      <v-icon color="indigo">location_on</v-icon>
                    </v-list-item-action>
                    <v-list-item-content>
                      <v-list-item-title>{{
                        user.address.street
                      }}</v-list-item-title>
                      <v-list-item-subtitle
                        >{{ user.address.city }}, {{ user.address.state }}
                        {{ user.address.zipcode }}</v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-list>
              </v-card-text>
            </v-card>
          </v-tab-item>
          <v-tab-item value="tab-2"> </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card-text>
  </v-card>
</template>

<script>
import { getUserById } from '@/api/user'
export default {
  data() {
    return {
      chat: null,
      selectedTab: null
    }
  },
  computed: {
    user() {
      let Origin = {
        name: 'Chat',
        avatar: ''
      }
      let user = getUserById(this.$route.params.uuid)
      return Object.assign(Origin, user)
    }
  }
}
</script>
