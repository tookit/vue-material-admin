<template>
  <div id="social">
    <v-container grid-list-xl fluid>
        <v-layout row wrap>
          <v-flex sm12>
            <h4>Mini Name Card</h4>
          </v-flex>
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'mini' + index">
            <name-card
              mini
              v-bind="item"
            >
            </name-card>
          </v-flex>
          <v-flex sm12>
            <h4>Basic Name Card</h4>
          </v-flex>          
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic' + index">
            <name-card v-bind="item">
            </name-card>
          </v-flex>
          <v-flex sm12>
            <h4>Basic Name Card with top nav</h4>
          </v-flex>          
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'basic-top-nav' + index">
            <name-card
              top-nav
              v-bind="item"
            >
            </name-card>
          </v-flex>          
          <v-flex sm12>
            <h4>Bottom Nav Name Card</h4>
          </v-flex>          
          <v-flex lg3 sm12 v-for="(item,index) in users" :key=" 'bottom-nav' + index">
            <name-card
              bottom-nav
              v-bind="item"
            >
            </name-card>
          </v-flex>    
          <v-flex sm12>
            <h4>Contact Card</h4>  
          </v-flex>      
          <v-flex lg4 sm12>
            <profile-card></profile-card>
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
import NameCard from '@/components/widgets/card/NameCard';
import ProfileCard from '@/components/widgets/card/ProfileCard';
export default {
  components: {
    NameCard,
    ProfileCard
  },
  data () {
    return {
      users: [
        {
          jobTitle: 'Web Developer',
          name: 'Michael Wang',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/1.jpg',
            size: '36'
          },  
        },
        {
          jobTitle: 'Web Designer',
          name: 'Jessie J',
          color: 'pink',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/women/1.jpg',
            size: '36'
          },  
        },  
        {
          jobTitle: 'Web Developer',
          name: 'Jim J',
          color: 'teal',
          dark: true,
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/10.jpg',
            size: '36'
          },  
        },
        {
          jobTitle: 'Product Manager',
          name: 'John Doe',
          dark: true,
          cardBgImage: '/static/bg/15.jpg',
          avatar: {
            src: 'https://randomuser.me/api/portraits/men/5.jpg',
            size: '36'
          },  
        },        
      ]
    };
  },
};
</script>