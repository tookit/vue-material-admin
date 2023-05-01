<script lang="ts" setup>
import VueApexCharts from 'vue3-apexcharts';
import { computed } from 'vue';
import { useTheme } from 'vuetify';
import { getAreaChartSplineConfig } from './apexCharConfig';

const vuetifyTheme = useTheme();

const chartConfig = computed(() => getAreaChartSplineConfig(vuetifyTheme.current.value));

const series = [
  {
    name: 'Visits',
    data: [100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375]
  },
  {
    name: 'Clicks',
    data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275]
  },
  {
    name: 'Sales',
    data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220]
  }
];
</script>

<template>
  <VueApexCharts type="area" height="400" :options="chartConfig" :series="series" />
</template>
