<template>
  <v-app id="mail" class="mail">
    <v-toolbar fixed app flat dark color="indigo" clipped-left class="mail-toolbar" id="topbar">
      <v-toolbar-side-icon class="hidden-sm-and-up" @click="toggleDrawer"></v-toolbar-side-icon>
      <v-avatar class="hidden-sm-and-down">
        <img src="/static/m.png" alt="Vue Material Mail">
      </v-avatar>
      <v-toolbar-title class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Mail</span>
      </v-toolbar-title>        
      <v-spacer></v-spacer>
      <v-text-field
        flat
        solo-inverted
        prepend-icon="search"
        label="What are you looking for?"
        class="hidden-sm-and-down"
        >
      </v-text-field>
      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
      <v-menu offset-y origin="center center" :nudge-bottom="10" transition="scale-transition">
        <v-btn icon large flat slot="activator">
          <v-avatar size="32px">
            <img src="https://randomuser.me/api/portraits/men/1.jpg">
          </v-avatar>
        </v-btn>
        <v-list class="pa-0">
          <v-list-tile v-for="(item,index) in items" :to="!item.href ? { name: item.name } : null" :href="item.href" @click="item.click" ripple="ripple" :disabled="item.disabled" :target="item.target" rel="noopener" :key="index">
          <v-list-tile-action v-if="item.icon">
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>    
    <v-navigation-drawer
      class="mail-drawer"
      fixed
      clipped
      v-model="drawer"
      app
      >
      <div class="layout column pa-3">
        <v-btn large block color="red" dark @click.stop="dialog = true"> + COMPOSE</v-btn>
      </div>
      <v-list class="mail-list" dense>
        <template v-for="item in menus">
          <v-layout
            row
            v-if="item.heading"
            align-center
            :key="item.heading"
          >
            <v-flex xs12>
              <v-subheader v-if="item.heading">
                {{ item.heading }}
              </v-subheader>
              <v-divider></v-divider>
            </v-flex>
          </v-layout>
          <!-- Top level -->
          <v-list-tile v-else :key="item.text" :to="item.to">
            <v-list-tile-action v-if="item.icon">
              <v-icon :color="item.iconColor" :small="item.iconSize">{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
            <!-- <v-chip class="caption red lighten-2 white--text chip--x-small mx-0" v-if="item.chip" label="label" small>{{ item.chip }}</v-chip> -->
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <transition>
        <router-view></router-view>
      </transition>
    </v-content>
     <v-dialog v-model="dialog" max-width="640px">
       <compose></compose>
     </v-dialog>
  </v-app>
</template>

<script>
import { MailMenu } from '@/api/mail';
import Compose from './Compose';
export default {
  components: {
    Compose
  },
  props: {
    source: String
  },
  data: () => ({
    selected: [2],
    dialog: null,
    drawer: null,
    replayDialog: null,
    menus: MailMenu,
    items: [
      {
        icon: 'account_circle',
        href: '#',
        title: 'Profile',
        click: (e) => {
          console.log(e);
        }
      },
      {
        icon: 'settings',
        href: '#',
        title: 'Settings',
        click: (e) => {
          console.log(e);
        }
      },
      {
        icon: 'fullscreen_exit',
        href: '#',
        title: 'Logout',
        click: (e) => {
          console.log(e);
        }
      }
    ],
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

  created () {
    this.$on('MAIL_REPLY_DIALOG_CLOSE', () => {
      this.replayDialog = false;
    });
    window.AppMail = this;
  },
  methods: {
    handleClick (e) {
      console.log(e);
    },
    goBack () {
      this.$router.go(-1);
    },
    toggleDrawer () {
      this.drawer = (this.drawer) ? false : true;
    },
    toggle (index) {
      const i = this.selected.indexOf(index);
      if (i > -1) {
        this.selected.splice(i, 1);
      } else {
        this.selected.push(index);
      }
    }
  }
};
</script>
<style lang="stylus">


</style>
