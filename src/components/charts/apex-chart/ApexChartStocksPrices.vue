<script lang="ts" setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';
import { getCandlestickChartConfig } from './apexCharConfig';

const vuetifyTheme = useTheme();

const chartConfig = computed(() => getCandlestickChartConfig(vuetifyTheme.current.value));

const series = [
  {
    data: [
      {
        x: `7/12/${new Date().getFullYear()}`,
        y: [150, 170, 50, 100]
      },
      {
        x: `8/12/${new Date().getFullYear()}`,
        y: [200, 400, 170, 330]
      },
      {
        x: `9/12/${new Date().getFullYear()}`,
        y: [330, 340, 250, 280]
      },
      {
        x: `10/12/${new Date().getFullYear()}`,
        y: [300, 330, 200, 320]
      },
      {
        x: `11/12/${new Date().getFullYear()}`,
        y: [320, 450, 280, 350]
      },
      {
        x: `12/12/${new Date().getFullYear()}`,
        y: [300, 350, 80, 250]
      },
      {
        x: `13/12/${new Date().getFullYear()}`,
        y: [200, 330, 170, 300]
      },
      {
        x: `14/12/${new Date().getFullYear()}`,
        y: [200, 220, 70, 130]
      },
      {
        x: `15/12/${new Date().getFullYear()}`,
        y: [220, 270, 180, 250]
      },
      {
        x: `16/12/${new Date().getFullYear()}`,
        y: [200, 250, 80, 100]
      },
      {
        x: `17/12/${new Date().getFullYear()}`,
        y: [150, 170, 50, 120]
      },
      {
        x: `18/12/${new Date().getFullYear()}`,
        y: [110, 450, 10, 420]
      },
      {
        x: `19/12/${new Date().getFullYear()}`,
        y: [400, 480, 300, 320]
      },
      {
        x: `20/12/${new Date().getFullYear()}`,
        y: [380, 480, 350, 450]
      }
    ]
  }
];
</script>

<template>
  <VueApexCharts type="candlestick" height="385" :options="chartConfig" :series="series" />
</template>
