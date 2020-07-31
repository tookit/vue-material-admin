<template>
  <v-container>
    <v-subheader>Mini Card</v-subheader>
    <v-row>
      <v-col cols="3" v-for="(item, index) in users" :key="'mini' + index">
        <name-card mini v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Basic Name Card</v-subheader>
    <v-row>
      <v-col cols="3" v-for="(item, index) in users" :key="'basic' + index">
        <name-card v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Basic Name Card with top nav</v-subheader>
    <v-row>
      <v-col
        cols="3"
        v-for="(item, index) in users"
        :key="'basic-top-nav' + index"
      >
        <name-card top-nav v-bind="item"></name-card>
      </v-col>
    </v-row>
    <v-subheader>Bottom Nav Name Card</v-subheader>
    <v-row>
      <v-col
        cols="3"
        sm12
        v-for="(item, index) in users"
        :key="'bottom-nav' + index"
      >
        <name-card bottom-nav v-bind="item"></name-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NameCard from '@/components/widgets/card/NameCard'
export default {
  components: {
    NameCard
  },
  data() {
    return {
      users: [
        {
          jobTitle: 'Web Developer',
          name: 'Michael Wang',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Designer',
          name: 'Jessie J',
          color: 'pink',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/women/1.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Web Developer',
          name: 'Jim J',
          color: 'teal',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/10.jpg',
            size: '36'
          }
        },
        {
          jobTitle: 'Product Manager',
          name: 'John Doe',
          dark: true,
          cardBgImage: '/static/bg/15.jpg',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/5.jpg',
            size: '36'
          }
        }
      ]
    }
  }
}
</script>
