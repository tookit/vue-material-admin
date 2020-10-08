<template>
  <div class="name-card">
    <v-card tile :color="color" ref="card" :dark="dark" :img="cardBgImage">
      <v-responsive v-if="showTopNav">
        <v-row justify-space-between class="ma-0">
          <v-col xs2> <v-icon color="pink">mdi-heart</v-icon> </v-col>
          <v-col xs2 class="text-sm-right">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-col>
        </v-row>
      </v-responsive>
      <v-card-text>
        <div class="layout ma-0 align-center" :class="computeCardLayout">
          <v-avatar :size="computeAvatarSize" color="primary">
            <img :src="avatar.src" :alt="name" v-if="showAvatar" />
            <span v-else class="white--text headline">{{
              name.charAt(0)
            }}</span>
          </v-avatar>
          <div class="flex" :class="computeTextAlgin">
            <div class="subheading">{{ name }}</div>
            <span class="caption">{{ jobTitle }}</span>
          </div>
        </div>
      </v-card-text>
    </v-card>
    <v-bottom-navigation
      :value="true"
      color="transparent"
      :height="64"
      v-if="showBottomNav"
    >
      <v-btn text color="teal" value="recent">
        <span>Recent</span>
        <v-icon>mdi-history</v-icon>
      </v-btn>
      <v-btn text color="teal" value="favorites">
        <span>Favorites</span>
        <v-icon>mdi-heart</v-icon>
      </v-btn>
      <v-btn text color="teal" value="nearby">
        <span>Nearby</span>
        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: ''
    },
    avatar: {
      type: Object,
      default: null
    },
    jobTitle: {
      type: String,
      default: ''
    },
    cardBgImage: {
      type: String
    },
    color: {
      type: String,
      default: ''
    },
    dark: {
      type: Boolean,
      default: false
    },
    bottomNav: {
      type: Boolean,
      default: false
    },
    topNav: {
      type: Boolean,
      default: false
    },
    mini: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({}),

  computed: {
    computeCardLayout() {
      return this.mini ? 'row' : 'column'
    },
    computeTextAlgin() {
      return this.mini ? 'text-sm-right' : 'text-sm-center'
    },
    computeAvatarSize() {
      return this.mini ? '48' : '96'
    },
    showAvatar() {
      return this.avatar !== null && this.avatar.src
    },

    showBottomNav() {
      return this.mini === false && this.bottomNav
    },

    showTopNav() {
      return this.mini === false && this.topNav
    }
  },

  methods: {}
}
</script>

<style lang="sass" scoped>
.caption
.subheading
  font-weight:200
</style>
