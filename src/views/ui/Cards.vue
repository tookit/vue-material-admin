<template>
  <div id="pageCard">
    <v-container grid-list-xl fluid>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Simple</h3>
        </v-flex>
        <v-flex lg4 sm12>
          <v-card color="purple" dark>
            <v-card-title class="pb-0">
              <h4>Basic card with `purple` background</h4>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex lg4 sm12>
          <v-card color="teal" dark>
            <v-card-title class="pb-0">
              <h4>Basic card with `teal` background</h4>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>            
          </v-card>
        </v-flex>
        <v-flex lg4 sm12>
          <v-card>
            <v-card-title class="pb-0">
              <h4>Basic</h4>
            </v-card-title>
            <v-card-text>
              {{cardText}}
            </v-card-text>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>            
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Image Card</h3>
        </v-flex>        
        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/bg/8.jpg" height="250">
              <h2 class="white--text pa-3">
                Card with image
              </h2>
            </v-card-media>
            <v-card-text>
              <div>
                {{cardText}}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>
        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/nature/n3.jpeg" height="250">
              <h2 class="white--text pa-3">
                Card with image
              </h2>
            </v-card-media>
            <v-card-text>
              <v-avatar size="64px" class="right mt-56">
                <img src="/static/avatar/man_2.jpg" alt="">
              </v-avatar>
              <div>
               {{cardText}}
              </div>              
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>
        <v-flex lg4 sm12>
          <v-card>
            <v-card-media src="/static/nature/n4.jpeg" height="250">
              <h2 class="white--text pa-3">
                Card with image
              </h2>
            </v-card-media>
            <v-card-text>
              <v-btn icon fab color="red" dark class="right mt-45">
                <v-icon>favorite</v-icon>
              </v-btn>
              <div>
                {{cardText}}
              </div>
            </v-card-text>
            <v-divider></v-divider>
            <v-card-actions>
              <v-btn flat small>Link</v-btn>
            </v-card-actions>   
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex sm12>
          <h3>Carousel Cards</h3>
        </v-flex>        
        <v-flex lg4 sm12>
          <v-carousel hide-controls hide-delimiters class="fill-height">
            <v-carousel-item>
              <v-card color="indigo" dark>
                <v-card-title class="pb-0">
                  <h3>Basic card with `purple` background</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn flat small>Link</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item> 
            <v-carousel-item>
              <v-card color="teal" dark>
                <v-card-title class="pb-0">
                  <h3>Basic card with `purple` background</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn flat small>Link</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item> 
            <v-carousel-item>
              <v-card color="purple" dark>
                <v-card-title class="pb-0">
                  <h3>Basic card with `purple` background</h3>
                </v-card-title>
                <v-card-text>
                  {{cardText}}
                </v-card-text>
                <v-card-actions>
                  <v-btn flat small>Link</v-btn>
                </v-card-actions>
              </v-card>
            </v-carousel-item> 
          </v-carousel>
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
      show: true,
      cardText: 'Hey there, I am a very simple card. I am good at containing small bits of information. I am quite convenient because I require little markup to use effectively.'
    };
  },
  computed: {
  },  
  methods: {
  }
};
</script>
<style lang="stylus" scoped>
  .mt-45
    margin-top: -45px
  .mt-56
    margin-top: -56px  
</style>
