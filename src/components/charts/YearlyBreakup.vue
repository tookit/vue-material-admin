<script setup lang="ts">
import { computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.success;
const third = theme.current.value.colors.warning;
const chartOptions = computed(() => {
  return {
    labels: ['series-1', 'series-2', 'series-3'],
    chart: {
      type: 'donut',
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false
      }
    },
    colors: [primary, secondary, third],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: '75%',
          background: 'transparent'
        }
      }
    },
    stroke: {
      show: false
    },

    dataLabels: {
      enabled: false
    },
    legend: {
      show: false
    },
    tooltip: { theme: 'light', fillSeriesColor: false }
  };
});
const Chart = [38, 40, 25];
</script>
<template>
  <VCard elevation="10">
    <VCardItem>
      <div class="d-sm-flex align-center justify-space-between pt-sm-2">
        <VCardTitle class="text-h5">Yearly Breakup</VCardTitle>
      </div>
      <VRow>
        <VCol cols="7" sm="7">
          <div class="mt-6">
            <h3 class="text-h3">$36,358</h3>
            <div class="mt-1">
              <VIcon icon="mdi-arrow-up-left" color="success" />
              <span class="text-subtitle-1 ml-2 font-weight-bold">+9%</span>
              <span class="text-subtitle-1 text-muted ml-2">last year</span>
            </div>
            <div class="d-flex align-center mt-sm-10 mt-8">
              <h6 class="text-subtitle-1 text-muted">
                <VIcon icon="mdi mdi-checkbox-blank-circle" class="mr-1" size="10" color="primary"></VIcon> 2022
              </h6>
              <h6 class="text-subtitle-1 text-muted pl-5">
                <VIcon icon="mdi mdi-checkbox-blank-circle" class="mr-1" size="10" color="lightprimary"></VIcon> 2023
              </h6>
            </div>
          </div>
        </VCol>
        <VCol cols="5" sm="5" class="pl-lg-0">
          <div class="d-flex align-center flex-shrink-0">
            <apexchart class="pt-6" type="donut" height="145" :options="chartOptions" :series="Chart"> </apexchart>
          </div>
        </VCol>
      </VRow>
    </VCardItem>
  </VCard>
</template>
