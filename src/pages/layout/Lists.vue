<template>
  <div id="pageList">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex lg4>
          <v-widget title="Default">
            <div slot="widget-content">
              <v-list>
                <v-list-tile avatar v-for="item in users" :key="item.title" @click="handleClick">
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.name"></v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                </v-list-tile>
              </v-list>
            </div>
          </v-widget>
          <v-widget title="Two line" class="mt-3">
            <div slot="widget-content">
              <v-list two-line subheader>
                <v-subheader inset>Folders</v-subheader>
                <v-list-tile avatar v-for="item in folders" :key="item.title" @click="handleClick">
                  <v-list-tile-avatar>
                    <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon ripple>
                      <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
                <v-subheader inset>Files</v-subheader>
                <v-list-tile v-for="item in files" :key="item.title" avatar @click="handleClick">
                  <v-list-tile-avatar>
                    <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                  </v-list-tile-avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                  </v-list-tile-content>
                  <v-list-tile-action>
                    <v-btn icon ripple>
                      <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
            </div>
          </v-widget>
          <v-widget title="Three line" class="mt-3">
            <div slot="widget-content">
              <v-list three-line>
                <template v-for="(item, index) in chats">
                  <v-subheader v-if="item.header" :key="item.header">{{ item.header }}</v-subheader>
                  <v-divider v-else-if="item.divider" :inset="item.inset" :key="index"></v-divider>
                  <v-list-tile avatar v-else :key="item.title" href="#">
                    <v-list-tile-avatar>
                      <img :src="item.avatar">
                    </v-list-tile-avatar>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="item.title"></v-list-tile-title>
                      <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                    </v-list-tile-content>
                  </v-list-tile>
                </template>
              </v-list>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg4>
         <v-widget title="Complex">
            <div slot="widget-content">
              <v-list two-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Profile photo</v-list-tile-title>
                    <v-list-tile-sub-title>Change your Google+ profile photo</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-content>
                    <v-list-tile-title>Show your status</v-list-tile-title>
                    <v-list-tile-sub-title>Your status is visible to everyone</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list two-line subheader>
                <v-subheader>Hangout notifications</v-subheader>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="notifications"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Notifications</v-list-tile-title>
                    <v-list-tile-sub-title>Allow notifications</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Sound</v-list-tile-title>
                    <v-list-tile-sub-title>Hangouts message</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="video"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Video sounds</v-list-tile-title>
                    <v-list-tile-sub-title>Hangouts video call</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-checkbox v-model="invites"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Invites</v-list-tile-title>
                    <v-list-tile-sub-title>Notify when receiving invites</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </div>
          </v-widget>
         <v-widget title="Complex (Three-line)" class="mt-3">
            <div slot="widget-content">
              <v-list three-line subheader>
                <v-subheader>User Controls</v-subheader>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Content filtering</v-list-tile-title>
                    <v-list-tile-sub-title>Set the content filtering level to restrict appts that can be downloaded</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>
                    <v-list-tile-title>Password</v-list-tile-title>
                    <v-list-tile-sub-title>Require password for purchase or use password to restrict purchase</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
              <v-divider></v-divider>
              <v-list three-line subheader>
                <v-subheader>General</v-subheader>
                <v-list-tile href="javascript:;">
                  <v-list-tile-action>
                    <v-checkbox
                      v-model="notifications"
                      readonly
                    ></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content @click="notifications = !notifications">
                    <v-list-tile-title>Notifications</v-list-tile-title>
                    <v-list-tile-sub-title>Notify me about updates to apps or games that I downloaded</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile href="javascript:;">
                  <v-list-tile-action>
                    <v-checkbox v-model="sound"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content @click="sound = !sound">
                    <v-list-tile-title>Sound</v-list-tile-title>
                    <v-list-tile-sub-title>Auto-update apps at any time. Data charges may apply</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile href="javascript:;">
                  <v-list-tile-action>
                    <v-checkbox v-model="widgets"></v-checkbox>
                  </v-list-tile-action>
                  <v-list-tile-content @click="widgets = !widgets">
                    <v-list-tile-title>Auto-add widgets</v-list-tile-title>
                    <v-list-tile-sub-title>Automatically add home screen widgets</v-list-tile-sub-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </div>
          </v-widget>
          <v-widget title="Long dark list with scroll" class="mt-3">
            <div slot="widget-content" style="max-height: 250px; overflow-y: scroll">
              <v-list dense dark>
                <v-list-tile avatar v-for="item in allUsers" :key="item.title" @click="handleClick">
                  <v-list-tile-action>
                    <v-icon color="pink">star</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title v-text="item.name"></v-list-tile-title>
                  </v-list-tile-content>
                  <v-list-tile-avatar>
                    <img :src="item.avatar">
                  </v-list-tile-avatar>
                </v-list-tile>
              </v-list>
            </div>
          </v-widget>
        </v-flex>
        <v-flex lg4>
          <v-widget title="Expandable list">
            <div slot="widget-content">
              <v-list>
                <v-list-group
                  v-model="item.active"
                  v-for="item in topics"
                  :key="item.title"
                  :prepend-icon="item.action"
                  no-action
                >
                  <v-list-tile slot="activator">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile v-for="subItem in item.items" :key="subItem.title" href="#">
                    <v-list-tile-content>
                      <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                    </v-list-tile-content>
                    <v-list-tile-action>
                      <v-icon>{{ subItem.action }}</v-icon>
                    </v-list-tile-action>
                  </v-list-tile>
                </v-list-group>
              </v-list>
            </div>
          </v-widget>
          <v-card class="mt-3">
            <v-card-media src="/static/bg/15.jpg" height="300px">
              <v-layout column class="media">
                <v-card-title>
                  <v-btn dark icon>
                    <v-icon>chevron_left</v-icon>
                  </v-btn>
                  <v-spacer></v-spacer>
                  <v-btn dark icon class="mr-3">
                    <v-icon>edit</v-icon>
                  </v-btn>
                  <v-btn dark icon>
                    <v-icon>more_vert</v-icon>
                  </v-btn>
                </v-card-title>
                <v-spacer></v-spacer>
                <v-card-title class="white--text pl-5 pt-5">
                  <div class="display-1 pl-5 pt-5">Ali Conners</div>
                </v-card-title>
              </v-layout>
            </v-card-media>
            <v-list two-line>
              <v-list-tile href="">
                <v-list-tile-action>
                  <v-icon color="indigo">phone</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>(650) 555-1234</v-list-tile-title>
                  <v-list-tile-sub-title>Mobile</v-list-tile-sub-title>
                </v-list-tile-content>
                <v-list-tile-action>
                  <v-icon>chat</v-icon>
                </v-list-tile-action>
              </v-list-tile>
              <v-list-tile href="#">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>(323) 555-6789</v-list-tile-title>
                  <v-list-tile-sub-title>Work</v-list-tile-sub-title>
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
                  <v-list-tile-title>aliconnors@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-list-tile href="#">
                <v-list-tile-action></v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>ali_connors@example.com</v-list-tile-title>
                  <v-list-tile-sub-title>Work</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
              <v-divider inset></v-divider>
              <v-list-tile href="#">
                <v-list-tile-action>
                  <v-icon color="indigo">location_on</v-icon>
                </v-list-tile-action>
                <v-list-tile-content>
                  <v-list-tile-title>1400 Main Street</v-list-tile-title>
                  <v-list-tile-sub-title>Orlando, FL 79938</v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { getUser } from '@/api/user';
import VWidget from '@/components/VWidget';
export default {
  components: {
    VWidget
  },
  data () {
    return {
      notifications: false,
      sound: false,
      video: false,
      widgets: true,
      invites: false,
      folders: [
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Photos', subtitle: 'Jan 9, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Recipes', subtitle: 'Jan 17, 2014' },
        { icon: 'folder', iconClass: 'grey lighten-1 white--text', title: 'Work', subtitle: 'Jan 28, 2014' }
      ],
      files: [
        { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
        { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
      ],
      topics: [
        {
          action: 'local_activity',
          title: 'Attractions',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'restaurant',
          title: 'Dining',
          active: true,
          items: [
            { title: 'Breakfast & brunch' },
            { title: 'New American' },
            { title: 'Sushi' }
          ]
        },
        {
          action: 'school',
          title: 'Education',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'directions_run',
          title: 'Family',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'healing',
          title: 'Health',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'content_cut',
          title: 'Office',
          items: [
            { title: 'List Item' }
          ]
        },
        {
          action: 'local_offer',
          title: 'Promotions',
          items: [
            { title: 'List Item' }
          ]
        }
      ],
      chats: [
        { header: 'Today' },
        { avatar: 'https://randomuser.me/api/portraits/men/1.jpg', title: 'Brunch this weekend?', subtitle: "<span class='text--primary'>Ali Connors</span> &mdash; I'll be in your neighborhood doing errands this weekend. Do you want to hang out?" },
        { divider: true, inset: true },
        { avatar: 'https://randomuser.me/api/portraits/men/2.jpg', title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>', subtitle: "<span class='text--primary'>to Alex, Scott, Jennifer</span> &mdash; Wish I could come, but I'm out of town this weekend." },
        { divider: true, inset: true },
        { avatar: 'https://randomuser.me/api/portraits/men/3.jpg', title: 'Oui oui', subtitle: "<span class='text--primary'>Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?" },
        { divider: true, inset: true },
        { avatar: 'https://randomuser.me/api/portraits/men/4.jpg', title: 'Birthday gift', subtitle: "<span class='text--primary'>Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?" },
        { divider: true, inset: true },
        { avatar: 'https://randomuser.me/api/portraits/men/5.jpg', title: 'Recipe to try', subtitle: "<span class='text--primary'>Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos." }
      ]
    };
  },
  computed: {
    users () {
      return getUser(3);
    },
    allUsers () {
      return getUser();
    }
  },
  methods: {
    handleClick (e) {
      return false;
    }
  }
};
</script>
