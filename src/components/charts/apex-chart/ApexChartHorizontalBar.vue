<script lang="ts" setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';
import { getBarChartConfig } from './apexCharConfig';

const vuetifyTheme = useTheme();

const horizontalBarChartConfig = computed(() => getBarChartConfig(vuetifyTheme.current.value));
const series = [{ data: [700, 350, 480, 600, 210, 550, 150] }];
</script>

<template>
  <VueApexCharts type="bar" height="400" :options="horizontalBarChartConfig" :series="series" />
</template>
