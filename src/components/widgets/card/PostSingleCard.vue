<template>
  <v-card>
    <v-responsive src="/static/nature/n3.jpeg" :height="imageHeight" class="white--text">
      <v-layout row justify-space-between class="ma-0">
        <v-flex xs2>
          <v-icon color="white">favorite</v-icon>
        </v-flex>
        <v-flex xs2 class="text-sm-right">
          <v-icon color="white">share</v-icon>
        </v-flex>
      </v-layout>
    </v-responsive>
    <v-card-text>
      <div class="post--item">
        <div class="post--title">
          <h3 class="title">{{ title }}</h3>
        </div>
        <div class="post--meta grey--text text--darken-1 caption my-3">
          <span class="mr-3">{{ author }}</span>
          <time>{{ createdAt }}</time>
        </div>
        <div class="post--desc text--secondary">
          {{ desc }}
        </div>
        <div class="post--action align-center justify-space-between mt-2">
          <div class="social">
            <a @click="handleThumb" class="grey--text">
              <v-icon small>thumb_up</v-icon>
              <small>100+</small>
            </a>
            <a @click="handleComment" class="grey--text mx-3">
              <v-icon small>mode_comment</v-icon>
              <small>12+</small>
            </a>
            <a @click="handleFavorite" class="grey--text ">
              <v-icon small>favorite</v-icon>
              <small>50+</small>
            </a>
          </div>
          <v-btn outline flat color="primary">
            More
          </v-btn>
        </div>
      </div>
    </v-card-text>
    <v-divider></v-divider>
    <v-toolbar card color="white">
      <v-text-field flat solo label="Comment here" append-icon="photo_camera" hide-details=""></v-text-field>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  props: {
    featuredImage: { type: String },
    imageHeight: { type: [String, Number], default: "350" },
    author: { type: String },
    title: { type: String },
    desc: { type: String },
    createdAt: { type: String }
  },

  methods: {
    handleThumb() {
      // implement your own method here
    },
    handleComment() {
      // implement your own method here
    },
    handleFavorite() {
      // implement your own method here
    }
  }
}
</script>

<style></style>
