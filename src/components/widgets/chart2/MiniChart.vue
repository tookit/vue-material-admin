
<template>
  <v-card>
    <v-card-text>
      <div class="layout row ma-0 align-center justify-space-between">
        <div class="text-box">
          <div class="subheading pb-2">{{title}}</div>
          <span class="grey--text">{{subTitle}} <v-icon small :color="iconColor">{{icon}}</v-icon></span>
        </div>
        <div class="chart">
          <e-chart 
            :path-option="computeChartOption"
            height="68px"
            width="100%"
            >
          </e-chart>
        </div>
      </div>
    </v-card-text>
  </v-card>     
</template>

<script>
import EChart from '@/components/chart/echart';
export default {
  components: {
    EChart
  },
  props: {
    title: String,
    subTitle: String,
    icon: String,
    iconColor: {
      type: String,
      default: 'success',
    },
    type: String,
    chartColor: String,
    data: Array,
  },
  data () {
    return {
      defaultOption: [
        ['dataset.source', this.data],
        ['xAxis.show', false],
        ['yAxis.show', false],
        ['color', [this.chartColor]],
      ]
    };
  },

  computed: {
    computeChartOption () {
      switch (this.type) {
        case 'bar':
          this.defaultOption.push(['series[0].type', 'bar']);
          break;
        case 'area':
          this.defaultOption.push(['series[0].type', 'line']);
          this.defaultOption.push(['series[0].areaStyle', {}]);
          break;
        default:
          break;
      }
      return this.defaultOption;
    }
  }

};
</script>

<style>

</style>
