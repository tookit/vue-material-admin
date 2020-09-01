<template>
  <v-container>
    <v-row>
      <!-- mini chart -->
      <v-col cols="12"> <v-subheader>Mini Chart</v-subheader> </v-col>
      <v-col cols="3">
        <mini-chart
          title="Monthly Sales"
          sub-title="10%"
          icon="trending_up"
          :data="dataset.monthVisit"
          :chart-color="color.blue.base"
          type="bar"
        />
      </v-col>
      <v-col cols="3">
        <mini-chart
          title="Daily Visit"
          sub-title="20%"
          icon="trending_up"
          :data="dataset.monthVisit"
          :chart-color="color.green.base"
          type="area"
        />
      </v-col>
      <v-col cols="3">
        <v-card>
          <v-card-text>
            <div class="layout row ma-0 align-center justify-space-between">
              <div class="text-box">
                <div class="subheading pb-2">Bounce Rate</div>
                <span class="grey--text">
                  -10%
                  <v-icon small color="green">trending_down</v-icon>
                </span>
              </div>
              <div class="chart">
                <v-progress-circular
                  :size="60"
                  :width="5"
                  :rotate="360"
                  :value="10"
                  color="success"
                  >10</v-progress-circular
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="3">
        <mini-chart
          sub-title="10%"
          icon="trending_down"
          :data="dataset.monthVisit"
          :chart-color="color.red.base"
          type="line"
        ></mini-chart>
      </v-col>
    </v-row>
    <!-- box chart -->
    <v-row>
      <v-col cols="12"> <v-subheader>Box Chart</v-subheader> </v-col>
      <v-col cols="4">
        <box-chart
          title="Page views"
          sub-title="10%"
          icon="trending_up"
          :data="dataset.monthVisit"
          :chart-color="[color.blue.darken1]"
          type="area"
        ></box-chart>
      </v-col>
      <v-col cols="4">
        <box-chart
          title="Monthly Sales"
          sub-title="10%"
          icon="trending_up"
          card-color="pink"
          :data="dataset.monthVisit"
          :chart-color="[color.pink.lighten2]"
          type="bar"
        ></box-chart>
      </v-col>
      <v-col cols="4">
        <box-chart
          card-color="indigo"
          title="Page views"
          sub-title="10%"
          icon="trending_up"
          :data="dataset.monthVisit"
          :chart-color="[color.shades.white]"
          type="line"
        ></box-chart>
      </v-col>
    </v-row>
    <!-- complex chart -->
    <v-row>
      <v-col cols="12"> <v-subheader>Complex Chart</v-subheader> </v-col>
      <v-col cols="4">
        <v-card dark color="green">
          <v-card-title>
            <div class="layout row ma-0">
              <div class="subheading">Today</div>
              <v-spacer></v-spacer>
              <div class="caption"><v-icon>trending_up</v-icon>20%</div>
            </div>
          </v-card-title>
          <v-responsive class="white--text">
            <e-chart
              ref="chart"
              :path-option="[
                ['dataset.source', dataset.stackData],
                ['grid.bottom', '10%'],
                ['grid.top', '5%'],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'bar'],
                ['series[0].barGap', '-100%'],
                ['series[0].itemStyle.normal.color', 'rgba(0,0,0,0.1)'],
                ['series[0].barWidth', '50%'],
                ['series[1].barWidth', '50%'],
                ['series[1].type', 'bar'],
                ['series[1].itemStyle.normal.color', color.shades.white]
              ]"
              height="200px"
              width="100%"
            ></e-chart>
          </v-responsive>
          <v-card-text class="white">
            <div class="layout row align-center ma-0">
              <div class="grey--text">
                <div class="caption">MAXIMUM BOUNCE</div>
                <div class="subheading mt-2">2500</div>
              </div>
              <v-spacer></v-spacer>
              <div class>
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="10"
                  color="blue"
                  >10</v-progress-circular
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card class="elevation-0 box-shadow" dark color="pink">
          <v-card-title>
            <div class="layout row ma-0">
              <div class="subheading">Today</div>
              <v-spacer></v-spacer>
              <div class="caption"><v-icon>trending_up</v-icon>20%</div>
            </div>
          </v-card-title>
          <v-responsive class="white--text">
            <e-chart
              :path-option="[
                ['dataset.source', dataset.monthVisit],
                ['color', [color.pink.lighten2]],
                ['grid.left', '0'],
                ['grid.bottom', '0'],
                ['grid.right', '0'],
                ['xAxis.show', false],
                ['yAxis.show', false]
              ]"
              height="200px"
              width="100%"
            ></e-chart>
          </v-responsive>
          <v-card-text class="white">
            <div class="layout row align-center ma-0">
              <div class="grey--text">
                <div class="caption">MAXIMUM BOUNCE</div>
                <div class="subheading mt-2">2500</div>
              </div>
              <v-spacer></v-spacer>
              <div class>
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="10"
                  color="blue"
                  >10</v-progress-circular
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="4">
        <v-card color="blue darken-1" dark>
          <v-card-title>
            <div class="layout row ma-0">
              <div class="subheading">Today</div>
              <v-spacer></v-spacer>
              <div class="caption"><v-icon>trending_up</v-icon>20%</div>
            </div>
          </v-card-title>
          <v-responsive>
            <e-chart
              :path-option="[
                ['dataset.source', dataset.monthVisit],
                ['color', [color.blue.base]],
                ['xAxis.show', false],
                ['xAxis.boundaryGap', false],
                ['grid.left', '0'],
                ['grid.bottom', '0'],
                ['grid.right', '0'],
                ['yAxis.show', false],
                ['series[0].areaStyle', {}],
                ['series[0].smooth', true]
              ]"
              height="200px"
              width="100%"
            ></e-chart>
          </v-responsive>
          <v-card-text class="white">
            <div class="layout row align-center ma-0">
              <div class="grey--text">
                <div class="caption">MAXIMUM BOUNCE</div>
                <div class="subheading mt-2">2500</div>
              </div>
              <v-spacer></v-spacer>
              <div class>
                <v-progress-circular
                  :size="100"
                  :width="15"
                  :rotate="360"
                  :value="10"
                  color="blue"
                  >10</v-progress-circular
                >
              </div>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="6">
        <v-widget title="Analysis - Donut">
          <div slot="widget-content">
            <e-chart
              :path-option="[
                ['dataset.source', dataset.campaign],
                [
                  'color',
                  [
                    color.amber.base,
                    color.indigo.base,
                    color.pink.base,
                    color.green.base,
                    color.teal.base,
                    color.purple.base
                  ]
                ],
                ['legend.orient', 'horizontal'],
                ['legend.y', 'bottom'],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'pie'],
                ['series[0].avoidLabelOverlap', true],
                ['series[0].radius', ['50%', '70%']]
              ]"
              height="350px"
              width="100%"
            ></e-chart>
          </div>
        </v-widget>
      </v-col>
      <v-col cols="6">
        <v-widget title="Analysis - Pie">
          <div slot="widget-content">
            <e-chart
              :path-option="[
                ['dataset.source', dataset.campaign],
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
                ['legend.orient', 'horizontal'],
                ['legend.y', 'bottom'],
                ['xAxis.show', false],
                ['yAxis.show', false],
                ['series[0].type', 'pie']
              ]"
              height="350px"
              width="100%"
            ></e-chart>
          </div>
        </v-widget>
      </v-col>
      <v-col cols="12">
        <v-card>
          <v-tabs v-model="selectedTab" @change="handleTabChange">
            <v-tab ripple href="#tab-1">Sales</v-tab>
            <v-tab ripple href="#tab-2">Visit</v-tab>
            <v-tabs-items v-model="selectedTab">
              <v-tab-item value="tab-1" class="d-block">
                <e-chart
                  :path-option="[
                    ['color', [color.lightBlue.base, color.purple.base]],
                    ['dataset.source', dataset.monthVisit],
                    ['series[0].type', 'bar'],
                    ['series[1].type', 'bar']
                  ]"
                  height="350px"
                  width="100%"
                ></e-chart>
              </v-tab-item>
              <v-tab-item value="tab-2">
                <e-chart
                  :path-option="[
                    ['dataset.source', dataset.monthVisit],
                    ['series[0].type', 'line']
                  ]"
                  height="350px"
                  width="100%"
                ></e-chart>
              </v-tab-item>
            </v-tabs-items>
          </v-tabs>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import EChart from '@/components/chart/echart'
import {
  StackData,
  SinData,
  monthVisitData,
  campaignData,
  locationData
} from '@/api/chart'
import Material from 'vuetify/es5/util/colors'
import MiniChart from '@/components/widgets/chart/MiniChart'
import BoxChart from '@/components/widgets/chart/BoxChart'
import VWidget from '@/components/VWidget'
export default {
  components: {
    BoxChart,
    MiniChart,
    EChart,
    VWidget
  },
  data() {
    return {
      selectedTab: 'tab-1',
      option: null,
      dataset: {
        sinData: SinData,
        monthVisit: monthVisitData,
        campaign: campaignData,
        location: locationData,
        stackData: StackData
      },
      color: Material
    }
  },
  created() {
    console.log(this.$refs.chart)
  },
  methods: {
    /* eslint-disable-line no-unused-vars */
    handleTabChange() {
      // make sure the chart resized while parent from hidden to show
      window.dispatchEvent(new Event('resize'))
    }
  }
}
</script>
