<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';
const theme = useTheme();
const primary = theme.current.value.colors.primary;
const secondary = theme.current.value.colors.info;

/* Chart */
const areachartOptions = computed(() => {
  return {
    labels: ['1', '2', '3', '4', '5', '6', '7'],
    chart: {
      type: 'area',
      height: 60,
      fontFamily: `inherit`,
      foreColor: '#a1aab2',
      toolbar: {
        show: false
      },
      sparkline: {
        enabled: true
      },
      group: 'sparklines'
    },
    colors: [secondary],
    stroke: {
      curve: 'smooth',
      width: 2
    },
    fill: {
      type: 'solid',
      opacity: 0.05
    },
    markers: {
      size: 0
    },
    tooltip: {
      theme: 'light',
      x: {
        show: true
      }
    }
  };
});

const areaChart = {
  series: [
    {
      name: '',
      data: [25, 66, 20, 40, 12, 58, 20]
    }
  ]
};
</script>
<template>
  <VCard elevation="10">
    <VCardItem>
      <div class="d-flex align-center justify-space-between pt-sm-2">
        <VCardTitle class="text-h5">Monthly Earnings</VCardTitle>
        <VBtn size="large" icon>
          <VAvatar size="large" class="text-white">
            <CurrencyDollarIcon size="25" />
          </VAvatar>
        </VBtn>
      </div>
      <VRow>
        <VCol cols="12">
          <div class="mt-2">
            <h3 class="text-h3">$6,820</h3>
            <div class="mt-1">
              <VAvatar class="bg-lighterror text-accent" size="25">
                <ArrowDownRightIcon size="20" />
              </VAvatar>
              <span class="text-subtitle-1 ml-2 font-weight-bold">+9%</span>
              <span class="text-subtitle-1 text-muted ml-2">last year</span>
            </div>
          </div>
        </VCol>
      </VRow>
    </VCardItem>
    <div class="mt-3">
      <apexchart type="area" height="60" :options="areachartOptions" :series="areaChart.series"> </apexchart>
    </div>
  </VCard>
</template>
