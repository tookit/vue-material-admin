<script lang="ts" setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';
import { getScatterChartConfig } from './apexCharConfig';

const vuetifyTheme = useTheme();

const scatterChartConfig = computed(() => getScatterChartConfig(vuetifyTheme.current.value));

const series = [
  {
    name: 'Angular',
    data: [
      { x: 5.4, y: 170 },
      { x: 5.4, y: 100 },
      { x: 6.3, y: 170 },
      { x: 5.7, y: 140 },
      { x: 5.9, y: 130 },
      { x: 7.0, y: 150 },
      { x: 8.0, y: 120 },
      { x: 9.0, y: 170 },
      { x: 10.0, y: 190 },
      { x: 11.0, y: 220 },
      { x: 12.0, y: 170 },
      { x: 13.0, y: 230 }
    ]
  },
  {
    name: 'Vue',
    data: [
      { x: 14.0, y: 220 },
      { x: 15.0, y: 280 },
      { x: 16.0, y: 230 },
      { x: 18.0, y: 320 },
      { x: 17.5, y: 280 },
      { x: 19.0, y: 250 },
      { x: 20.0, y: 350 },
      { x: 20.5, y: 320 },
      { x: 20.0, y: 320 },
      { x: 19.0, y: 280 },
      { x: 17.0, y: 280 },
      { x: 22.0, y: 300 },
      { x: 18.0, y: 120 }
    ]
  },
  {
    name: 'React',
    data: [
      { x: 14.0, y: 290 },
      { x: 13.0, y: 190 },
      { x: 20.0, y: 220 },
      { x: 21.0, y: 350 },
      { x: 21.5, y: 290 },
      { x: 22.0, y: 220 },
      { x: 23.0, y: 140 },
      { x: 19.0, y: 400 },
      { x: 20.0, y: 200 },
      { x: 22.0, y: 90 },
      { x: 20.0, y: 120 }
    ]
  }
];
</script>

<template>
  <VueApexCharts type="scatter" height="400" :options="scatterChartConfig" :series="series" />
</template>
