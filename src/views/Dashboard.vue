<template>
  <div class="page-dashboard">
    <v-container>
      <v-row>
        <!-- mini statistic start -->
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-facebook"
            title="100+"
            sub-title="Likes"
            color="indigo"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-google"
            title="150+"
            sub-title="Connections"
            color="red"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic-card
            icon="mdi-instagram"
            title="50+"
            sub-title="Shots"
            color="purple"
          />
        </v-col>
        <!-- mini statistic  end -->
        <v-col :lg="8" :sm="12" :cols="12">
          <v-card tile>
            <v-toolbar flat>
              <v-toolbar-title>Site Traffic</v-toolbar-title>
              <v-btn slot="widget-header-action" icon>
                <v-icon class="text--secondary">mdi-refresh</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <e-chart
                :path-option="[
                  ['dataset.source', siteTrafficData],
                  ['color', [color.lightBlue.base, color.green.lighten1]],
                  ['legend.show', true],
                  ['xAxis.axisLabel.show', true],
                  ['yAxis.axisLabel.show', true],
                  ['grid.left', '2%'],
                  ['grid.bottom', '5%'],
                  ['grid.right', '3%'],
                  ['series[0].type', 'bar'],
                  ['series[0].areaStyle', {}],
                  ['series[0].smooth', true],
                  ['series[1].smooth', true],
                  ['series[1].type', 'bar'],
                  ['series[1].areaStyle', {}]
                ]"
                height="400px"
                width="100%"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <v-col :lg="4" :sm="12" :cols="12">
          <v-card tile>
            <v-toolbar flat>
              <v-toolbar-title>Top Location</v-toolbar-title>
              <v-btn slot="widget-header-action" icon>
                <v-icon class="text--secondary">mdi-refresh</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <e-chart
                :path-option="[
                  ['dataset.source', locationData],
                  ['legend.bottom', '0'],
                  [
                    'color',
                    [
                      color.lightBlue.base,
                      color.indigo.base,
                      color.pink.base,
                      color.green.base,
                      color.cyan.base,
                      color.teal.base
                    ]
                  ],
                  ['xAxis.show', false],
                  ['yAxis.show', false],
                  ['series[0].type', 'pie'],
                  ['series[0].avoidLabelOverlap', true],
                  ['series[0].radius', ['50%', '70%']]
                ]"
                height="400px"
                width="100%"
              />
            </v-card-text>
          </v-card>
        </v-col>
        <!-- social/weather card start -->
        <v-col :lg="4" :cols="12" :sm="12">
          <profile-card />
        </v-col>
        <v-col :lg="4" :cols="12" :sm="12">
          <box-chart
            card-color="indigo"
            title="Trending"
            sub-title="10%"
            icon="mdi-trending-up"
            :data="siteTrafficData"
            :chart-color="[color.indigo.lighten1]"
            type="line"
          />
          <box-chart
            class="mt-4"
            card-color="pink"
            title="Page views"
            sub-title="10%"
            icon="mdi-trending-up"
            :data="siteTrafficData"
            :chart-color="[color.pink.darken1, 'rgba(255,255,255,0.3)']"
            gradient
            type="area"
          />
        </v-col>
        <!-- statistic section -->
        <v-col :lg="4" :cols="12" :sm="12">
          <linear-statistic-card
            title="Sales"
            sub-title="Sales increase"
            icon="mdi-trending-up"
            color="success"
            :value="15"
          />
          <linear-statistic-card
            class="my-4"
            title="Orders"
            sub-title="Increase"
            icon="mdi-trending-up"
            color="pink"
            :value="30"
          />
          <linear-statistic-card
            class="my-4"
            title="Revenue"
            sub-title="Revenue increase"
            icon="mdi-trending-up"
            color="primary"
            :value="50"
          />
          <linear-statistic-card
            class="mt-4"
            title="Cost"
            sub-title="Cost reduce"
            icon="mdi-trending-down"
            color="orange"
            :value="25"
          />
        </v-col>
        <!-- Circle statistic -->
        <v-col
          v-for="(item, index) in trending"
          :key="'c-trending' + index"
          :lg="4"
          :sm="12"
          :cols="12"
        >
          <circle-statistic-card
            :title="item.subheading"
            :sub-title="item.headline"
            :caption="item.caption"
            :icon="item.icon.label"
            :color="item.linear.color"
            :value="item.linear.value"
          />
        </v-col>
        <!-- acitivity/chat widget -->
        <v-col :lg="6" :sm="12" :cols="12">
          <weather-card class="mt-2" />
        </v-col>
        <v-col :lg="6" :sm="12" :cols="12">
          <v-card tile>
            <v-card-title>Activities</v-card-title>
            <v-divider />
            <v-card-text>
              <v-timeline align-top dense>
                <v-timeline-item
                  v-for="(item, index) in activity"
                  :key="index"
                  :color="item.color"
                  small
                >
                  <v-row class="pt-1">
                    <v-col cols="3">
                      <strong>{{ item.timeString }}</strong>
                    </v-col>
                    <v-col>
                      <strong>New Icon</strong>
                      <div>{{ item.text }}</div>
                    </v-col>
                  </v-row>
                </v-timeline-item>
              </v-timeline>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from '@/api'
import EChart from '@/components/chart/echart'

import Material from 'vuetify/es5/util/colors'
import BoxChart from '@/components/chart/echart/BoxChart'
import ProfileCard from '@/components/card/ProfileCard'
import WeatherCard from '@/components/card/WeatherCard'
import MiniStatisticCard from '@/components/card/MiniStatisticCard'
import CircleStatisticCard from '@/components/card/CircleStatisticCard'
import LinearStatisticCard from '@/components/card/LinearStatisticCard'
export default {
  name: 'PageDashboard',
  components: {
    ProfileCard,
    WeatherCard,
    EChart,
    BoxChart,
    MiniStatisticCard,
    CircleStatisticCard,
    LinearStatisticCard
  },
  data: () => ({
    color: Material,
    selectedTab: 'tab-1',
    linearTrending: [
      {
        subheading: 'Sales',
        headline: '2,55',
        caption: 'increase',
        percent: 15,
        icon: {
          label: 'mdi-trending-up',
          color: 'success'
        },
        linear: {
          value: 15,
          color: 'success'
        }
      },
      {
        subheading: 'Revenue',
        headline: '6,553',
        caption: 'increase',
        percent: 10,
        icon: {
          label: 'mdi-trending-down',
          color: 'error'
        },
        linear: {
          value: 15,
          color: 'error'
        }
      },
      {
        subheading: 'Orders',
        headline: '5,00',
        caption: 'increase',
        percent: 50,
        icon: {
          label: 'mdi-arrow-up',
          color: 'info'
        },
        linear: {
          value: 50,
          color: 'info'
        }
      }
    ],
    trending: [
      {
        subheading: 'Email',
        headline: '15+',
        caption: 'email opens',
        percent: 15,
        icon: {
          label: 'mdi-email-open',
          color: 'info'
        },
        linear: {
          value: 15,
          color: 'info'
        }
      },
      {
        subheading: 'Tasks',
        headline: '90%',
        caption: 'tasks completed.',
        percent: 90,
        icon: {
          label: 'mdi-view-list',
          color: 'primary'
        },
        linear: {
          value: 90,
          color: 'success'
        }
      },
      {
        subheading: 'Issues',
        headline: '100%',
        caption: 'issues fixed.',
        percent: 100,
        icon: {
          label: 'mdi-bug',
          color: 'primary'
        },
        linear: {
          value: 100,
          color: 'error'
        }
      }
    ]
  }),
  computed: {
    activity() {
      return [
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/ludwiczakpawel/128.jpg',
          timeString: 'Just now',
          color: 'primary',
          text: 'Michael finished  one task just now.'
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
          timeString: '30 min ago',
          color: 'teal',
          text: 'Jim created a new  task.'
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
          timeString: '1 hour ago',
          color: 'indigo',
          text: 'Li completed the PSD to html convert.'
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
          timeString: '3 hour ago',
          color: 'pink',
          text: 'Michael upload a new pic.'
        },
        {
          avatar:
            'https://s3.amazonaws.com/uifaces/faces/twitter/suprb/128.jpg',
          timeString: '10 min ago',
          color: 'cyan',
          text: 'Li assigned a a task to Michael'
        }
      ]
    },
    siteTrafficData() {
      return API.getMonthVisit
    },
    locationData() {
      return API.getLocation
    }
  }
}
</script>
