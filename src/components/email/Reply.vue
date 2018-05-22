<template>
  <v-container fluid fill-height class="pa-0 mail-reply" id="mailReply">
    <v-layout column class="mail-reply--layout">
      <v-toolbar flat fixed class="mail-reply--toolbar" app>
        <v-toolbar-title>
          <v-avatar size="32">
            <img v-bind:src="mail.from.avatar" >
          </v-avatar>
          <span>&nbsp;{{mail.from.name}}</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon color="yellow" small>star</v-icon>
          </v-btn>        
          <div class="caption">{{ formatDate(mail.created_at)}}</div>
          <v-btn icon small>
            <v-icon small>reply</v-icon>
          </v-btn>          
          <v-btn icon small>
            <v-icon small>reply_all</v-icon>
          </v-btn>          
          <v-btn icon small>
            <v-icon small>delete</v-icon>
          </v-btn>          
          <v-btn icon small>
            <v-icon small>expand_more</v-icon>
          </v-btn>
      </v-toolbar>        
      <v-flex class="mail-reply--content">
        <vue-perfect-scrollbar class="mail-reply--scrollbar">
          <v-card>
            <v-card-text class="pa-4">
              <div class="mail-reply--item">
                <div class="layout column">
                  <h3 class="headline">Hi Michael</h3>
                  <div class="text--secondary my-4" v-html="mail.content"></div>
                  <h4> {{ mail.from.name }},
                    <br>
                    Thanks
                  </h4>
                  <v-divider class="my-4"></v-divider>
                  <div class="py-3">
                    <v-alert outline color="primary" icon="attach_file" :value="true">
                      Weekly Report
                    </v-alert>   
                  </div>
                  <v-card>
                    <v-card-text class="pa-0">
                      <v-text-field
                        class=""
                        counter
                        placeholder="Your reply here"
                        full-width
                        multi-line
                      ></v-text-field>              
                    </v-card-text>
                    <v-toolbar dense flat>
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
                      <v-btn flat icon>
                        <v-icon>send</v-icon>
                      </v-btn>                      
                    </v-toolbar>   
                  </v-card>               
                </div>
              </div>              
            </v-card-text>
          </v-card>
        </vue-perfect-scrollbar>
      </v-flex>
    </v-layout>
  </v-container>  
</template>
<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar';
import { getMailById } from '@/api/mail';
export default {
  components: {
    VuePerfectScrollbar,
  },
  data: () => ({
    selected: [2],
    mailActions: [
      {
        href: '#',
        title: 'Delete',
        click: (e) => {
          console.log(e);
        }
      },
      {
        href: 'Mark as read',
        title: 'Mark as read',
        click: (e) => {
          console.log(e);
        }
      },
      {
        href: 'Spam',
        title: 'Spam',
        click: (e) => {
          console.log(e);
        }
      }
    ]
  }),
  computed: {
    mail () {
      return getMailById(this.$route.params.uuid);
    },

  },

  created () {
    window.AppMail = this;
  },
  methods: {
    computeMailPath (id) {
      return '/mail/0/' + id;
    },
    formatDate (s) {
      return new Date(s).toLocaleDateString();
    }    
  }
};
</script>
