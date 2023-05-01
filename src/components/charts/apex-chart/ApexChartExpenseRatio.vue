<script lang="ts" setup>
import { computed } from 'vue';
import VueApexCharts from 'vue3-apexcharts';
import { useTheme } from 'vuetify';
import { getDonutChartConfig } from './apexCharConfig';

const vuetifyTheme = useTheme();

const expenseRationChartConfig = computed(() => getDonutChartConfig(vuetifyTheme.current.value));

const series = [85, 16, 50, 50];
</script>

<template>
  <VueApexCharts type="donut" height="410" :options="expenseRationChartConfig" :series="series" />
</template>
