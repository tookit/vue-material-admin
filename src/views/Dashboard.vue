<template>
  <div class="page-dashboard">
    <v-container>
      <v-row>
        <!-- mini statistic start -->
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic
            icon="mdi-facebook"
            title="100+"
            sub-title="Likes"
            color="indigo"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic
            icon="mdi-google"
            title="150+"
            sub-title="Connections"
            color="red"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic
            icon="mdi-twitter"
            title="200+"
            sub-title="Followers"
            color="light-blue"
          />
        </v-col>
        <v-col :cols="12" :sm="6" :lg="3">
          <mini-statistic
            icon="mdi-instagram"
            title="50+"
            sub-title="Shots"
            color="purple"
          />
        </v-col>
        <!-- mini statistic  end -->
        <v-col :lg="8" :sm="12" :cols="12">
          <v-widget title="Site Traffic" content-bg="white">
            <v-btn icon slot="widget-header-action">
              <v-icon class="text--secondary">mdi-refresh</v-icon>
            </v-btn>
            <div slot="widget-content">
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
            </div>
          </v-widget>
        </v-col>
        <v-col :lg="4" :sm="12" :cols="12">
          <v-widget title="Top Location" content-bg="white">
            <div slot="widget-content">
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
            </div>
          </v-widget>
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
          <linear-statistic
            title="Sales"
            sub-title="Sales increase"
            icon="mdi-trending-up"
            color="success"
            :value="15"
          />
          <linear-statistic
            class="my-4"
            title="Orders"
            sub-title="Increase"
            icon="mdi-trending-up"
            color="pink"
            :value="30"
          />
          <linear-statistic
            class="my-4"
            title="Revenue"
            sub-title="Revenue increase"
            icon="mdi-trending-up"
            color="primary"
            :value="50"
          />
          <linear-statistic
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
          :lg="4"
          :sm="12"
          :cols="12"
          v-for="(item, index) in trending"
          :key="'c-trending' + index"
        >
          <circle-statistic
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
          <chat-window height="308px" />
        </v-col>
        <v-col :lg="6" :sm="12" :cols="12">
          <v-widget title="Activities" content-bg="white">
            <div slot="widget-content">
              <v-timeline align-top dense>
                <v-timeline-item
                  :color="item.color"
                  small
                  v-for="(item, index) in activity"
                  :key="index"
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
            </div>
          </v-widget>
        </v-col>
        <v-col cols="12">
          <plain-table />
        </v-col>
        <v-col cols="12">
          <plain-table-order />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import API from '@/api'
import EChart from '@/components/chart/echart'
import MiniStatistic from '@/components/widgets/statistic/MiniStatistic'
import ProfileCard from '@/components/widgets/card/ProfileCard'
import PlainTable from '@/components/widgets/list/PlainTable'
import PlainTableOrder from '@/components/widgets/list/PlainTableOrder'
import VWidget from '@/components/VWidget'
import Material from 'vuetify/es5/util/colors'
import BoxChart from '@/components/widgets/chart/BoxChart'
import ChatWindow from '@/components/chat/ChatWindow'
import CircleStatistic from '@/components/widgets/statistic/CircleStatistic'
import LinearStatistic from '@/components/widgets/statistic/LinearStatistic'
export default {
  name: 'PageDashboard',
  components: {
    VWidget,
    MiniStatistic,
    ChatWindow,
    ProfileCard,
    EChart,
    BoxChart,
    CircleStatistic,
    LinearStatistic,
    PlainTable,
    PlainTableOrder
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
      return API.getActivity()
    },
    posts() {
      return API.getPost(3)
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
