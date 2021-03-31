<template>
  <v-container>
    <v-row>
      <v-col cols="12"><v-subheader>Social</v-subheader></v-col>
      <!-- mini statistic start -->
      <v-col cols="3">
        <mini-statistic-card icon="mdi-facebook" title="100+" sub-title="Likes" color="indigo" />
      </v-col>
      <v-col cols="3">
        <mini-statistic-card icon="mdi-google" title="150+" sub-title="Connections" color="red" />
      </v-col>
      <v-col cols="3">
        <mini-statistic-card icon="mdi-twitter" title="200+" sub-title="Followers" color="light-blue" />
      </v-col>
      <v-col cols="3">
        <mini-statistic-card icon="mdi-instagram" title="50+" sub-title="Shots" color="purple" />
      </v-col>
      <!-- linear statistic  end -->
      <v-col cols="12"><v-subheader>Linear Trending</v-subheader></v-col>
      <v-col v-for="(item, index) in trending" :key="'trending' + index" cols="4">
        <linear-statistic-card
          :title="item.subheading"
          :sub-title="item.caption"
          :icon="item.icon.label"
          :color="item.icon.color"
          :value="item.linear.value"
        />
      </v-col>
      <!-- circle statistic  end -->
      <v-col cols="12"><v-subheader>Circle Trending</v-subheader></v-col>
      <v-col v-for="(item, index) in trending2" :key="'c-trending' + index" cols="4">
        <circle-statistic-card
          :title="item.subheading"
          :sub-title="item.headline"
          :caption="item.caption"
          :icon="item.icon.label"
          :color="item.linear.color"
          :value="item.linear.value"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MiniStatisticCard from '@/components/card/MiniStatisticCard'
import CircleStatisticCard from '@/components/card/CircleStatisticCard'
import LinearStatisticCard from '@/components/card/LinearStatisticCard'
export default {
  components: {
    MiniStatisticCard,
    CircleStatisticCard,
    LinearStatisticCard,
  },
  data() {
    return {
      trending: [
        {
          subheading: 'Sales',
          headline: '2,55',
          caption: 'increase',
          percent: 15,
          icon: {
            label: 'mdi-trending-up',
            color: 'success',
          },
          linear: {
            value: 15,
            color: 'success',
          },
        },
        {
          subheading: 'Revenue',
          headline: '6,553',
          caption: 'increase',
          percent: 10,
          icon: {
            label: 'mdi-trending-down',
            color: 'error',
          },
          linear: {
            value: 15,
            color: 'error',
          },
        },
        {
          subheading: 'Orders',
          headline: '5,00',
          caption: 'increase',
          percent: 50,
          icon: {
            label: 'mdi-arrow-up',
            color: 'info',
          },
          linear: {
            value: 50,
            color: 'info',
          },
        },
      ],
      trending2: [
        {
          subheading: 'Email',
          headline: '15+',
          caption: 'email opens',
          percent: 15,
          icon: {
            label: 'mdi-email',
            color: 'info',
          },
          linear: {
            value: 15,
            color: 'info',
          },
        },
        {
          subheading: 'Tasks',
          headline: '90%',
          caption: 'tasks completed.',
          percent: 90,
          icon: {
            label: 'mdi-view-list',
            color: 'primary',
          },
          linear: {
            value: 90,
            color: 'success',
          },
        },
        {
          subheading: 'Issues',
          headline: '100%',
          caption: 'issues fixed.',
          percent: 100,
          icon: {
            label: 'mdi-bug',
            color: 'primary',
          },
          linear: {
            value: 100,
            color: 'error',
          },
        },
      ],
    }
  },
}
</script>
